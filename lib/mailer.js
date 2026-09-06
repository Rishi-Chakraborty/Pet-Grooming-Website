import nodemailer from 'nodemailer';
import { site } from './site.config';

// Returns a configured transporter, or null if SMTP env vars are absent.
function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function html(booking) {
  const row = (k, v) => `<tr><td style="padding:4px 12px 4px 0;color:#6b6b6b">${k}</td><td style="padding:4px 0;font-weight:600;color:#2B2A28">${v || '—'}</td></tr>`;
  return `
  <div style="font-family:system-ui,Arial,sans-serif;max-width:560px;margin:auto">
    <div style="background:#1F6E5C;color:#fff;padding:20px 24px;border-radius:16px 16px 0 0">
      <h2 style="margin:0;font-size:18px">🐾 New Grooming Request</h2>
    </div>
    <div style="border:1px solid #eee;border-top:0;padding:20px 24px;border-radius:0 0 16px 16px">
      <table style="border-collapse:collapse;font-size:14px;width:100%">
        ${row('Pet Parent', booking.parentName)}
        ${row('Phone', booking.phone)}
        ${row('Pet', `${booking.petName} (${booking.petType}${booking.breed ? ', ' + booking.breed : ''})`)}
        ${row('Service', booking.service)}
        ${row('Preferred Date', booking.date)}
        ${row('Preferred Time', booking.time)}
        ${row('Notes', booking.notes)}
      </table>
      <p style="margin-top:16px;font-size:13px;color:#888">A calendar invite (.ics) is attached. Add it to your calendar and confirm availability with the customer.</p>
    </div>
  </div>`;
}

/**
 * Sends the booking notification to the business, with the .ics invite attached.
 * Returns { sent: boolean, reason?: string }.
 */
export async function sendBookingEmail(booking, icsValue) {
  const transport = getTransport();
  const to = process.env.MAIL_TO;
  if (!transport || !to) {
    return { sent: false, reason: 'SMTP not configured' };
  }
  await transport.sendMail({
    from: `"${site.name}" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
    to,
    replyTo: booking.phone ? undefined : undefined,
    subject: `New grooming request — ${booking.petName} (${booking.service}) on ${booking.date}`,
    html: html(booking),
    icalEvent: {
      filename: 'appointment.ics',
      method: 'REQUEST',
      content: icsValue,
      contentType: 'text/calendar; charset=UTF-8; method=REQUEST',
    },
    attachments: [
      {
        filename: 'appointment.ics',
        content: icsValue,
        contentType: 'text/calendar; charset=UTF-8; method=REQUEST',
        contentDisposition: 'inline',
      },
    ],
  });
  return { sent: true };
}
