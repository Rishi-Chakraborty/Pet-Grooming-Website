import { createEvent } from 'ics';
import { site } from './site.config';

// Parse "2026-03-15" + "10:00 AM" into [Y, M, D, H, Min] for the ics lib.
function toParts(dateStr, timeStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const match = /(\d+):(\d+)\s*(AM|PM)/i.exec(timeStr || '10:00 AM');
  let hour = 10, min = 0;
  if (match) {
    hour = Number(match[1]) % 12;
    min = Number(match[2]);
    if (/PM/i.test(match[3])) hour += 12;
  }
  return [y, m, d, hour, min];
}

// Returns { value: icsString } or throws.
export function buildInvite(booking) {
  const start = toParts(booking.date, booking.time);
  const address = `${site.address.line1}, ${site.address.line2}, ${site.address.line3}, ${site.address.city}, ${site.address.state} ${site.address.pincode}`;

  const { error, value } = createEvent({
    start,
    duration: { hours: 1 },
    title: `Grooming: ${booking.petName} (${booking.petType}) — ${booking.service}`,
    description:
      `Grooming appointment request for ${booking.petName}.\n\n` +
      `Pet parent: ${booking.parentName}\nPhone: ${booking.phone}\n` +
      `Pet: ${booking.petName} (${booking.petType}${booking.breed ? ', ' + booking.breed : ''})\n` +
      `Service: ${booking.service}\n` +
      (booking.notes ? `Notes: ${booking.notes}\n` : '') +
      `\nStatus: Requested — please confirm availability with the customer.`,
    location: address,
    organizer: { name: site.name, email: process.env.MAIL_FROM || 'bookings@example.com' },
    status: 'TENTATIVE',
    busyStatus: 'TENTATIVE',
    productId: 'super-pet-grooming/booking',
  });

  if (error) throw error;
  return value;
}
