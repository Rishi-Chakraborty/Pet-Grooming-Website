import { NextResponse } from 'next/server';
import { appendBooking } from '@/lib/excel';
import { buildInvite } from '@/lib/calendar';
import { sendBookingEmail } from '@/lib/mailer';

// Run on the Node.js runtime (needs fs + nodemailer).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function bad(msg, code = 400) {
  return NextResponse.json({ error: msg }, { status: code });
}

const clean = (s) => String(s ?? '').trim().slice(0, 500);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return bad('Invalid request.');
  }

  const booking = {
    parentName: clean(body.parentName),
    phone: clean(body.phone),
    petName: clean(body.petName),
    petType: clean(body.petType) || 'Dog',
    breed: clean(body.breed),
    service: clean(body.service),
    date: clean(body.date),
    time: clean(body.time),
    notes: clean(body.notes),
  };

  // Server-side validation (never trust the client alone)
  if (!booking.parentName) return bad('Name is required.');
  if (!/^[+\d][\d\s-]{7,}$/.test(booking.phone)) return bad('A valid phone number is required.');
  if (!booking.petName) return bad('Pet name is required.');
  if (!booking.service) return bad('Please choose a service.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(booking.date)) return bad('A valid date is required.');
  if (!booking.time) return bad('Please choose a time.');

  const results = { logged: false, emailed: false };

  // 1) Log to Excel (best-effort — a logging failure shouldn't lose the lead)
  try {
    await appendBooking(booking);
    results.logged = true;
  } catch (err) {
    console.error('Excel logging failed:', err);
  }

  // 2) Build calendar invite + email the business
  try {
    const ics = buildInvite(booking);
    const mail = await sendBookingEmail(booking, ics);
    results.emailed = mail.sent;
    if (!mail.sent) console.warn('Email not sent:', mail.reason);
  } catch (err) {
    console.error('Email/invite failed:', err);
  }

  // As long as we captured the request somewhere, treat as success for the user.
  if (!results.logged && !results.emailed) {
    return bad('We could not process your request right now. Please call us instead.', 500);
  }

  return NextResponse.json({
    ok: true,
    message:
      'Your appointment request has been received. Our team will contact you shortly to confirm availability.',
    detail: results,
  });
}
