import { NextResponse } from 'next/server';
import { buildInvite } from '@/lib/calendar';
import { sendBookingEmail } from '@/lib/mailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function bad(error, status = 400) {
  return NextResponse.json({ error }, { status });
}

const clean = (value) => String(value ?? '').trim().slice(0, 500);

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

  if (!booking.parentName) return bad('Name is required.');
  if (!/^[+\d][\d\s-]{7,}$/.test(booking.phone)) return bad('A valid phone number is required.');
  if (!booking.petName) return bad('Pet name is required.');
  if (!booking.service) return bad('Please choose a service.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(booking.date)) return bad('A valid date is required.');
  if (!booking.time) return bad('Please choose a time.');

  try {
    const invite = buildInvite(booking);
    const mail = await sendBookingEmail(booking, invite);

    if (!mail.sent) {
      console.warn('Booking email was not sent:', mail.reason);
      return bad('Online booking is temporarily unavailable. Please call us instead.', 503);
    }
  } catch (error) {
    console.error('Booking email failed:', error);
    return bad('We could not send your request right now. Please call us instead.', 500);
  }

  return NextResponse.json({
    ok: true,
    message: 'Your appointment request has been received. Our team will contact you shortly to confirm availability.',
  });
}
