import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'bookings.xlsx');

const COLUMNS = [
  { header: 'Received At', key: 'receivedAt', width: 22 },
  { header: 'Pet Parent', key: 'parentName', width: 20 },
  { header: 'Phone', key: 'phone', width: 18 },
  { header: 'Pet Name', key: 'petName', width: 16 },
  { header: 'Pet Type', key: 'petType', width: 12 },
  { header: 'Breed', key: 'breed', width: 18 },
  { header: 'Service', key: 'service', width: 22 },
  { header: 'Preferred Date', key: 'date', width: 16 },
  { header: 'Preferred Time', key: 'time', width: 16 },
  { header: 'Notes', key: 'notes', width: 40 },
  { header: 'Status', key: 'status', width: 14 },
];

function styleHeader(ws) {
  const row = ws.getRow(1);
  row.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  row.height = 22;
  row.eachCell((cell) => {
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F6E5C' } };
    cell.alignment = { vertical: 'middle', horizontal: 'left' };
  });
  ws.views = [{ state: 'frozen', ySplit: 1 }];
}

// Appends a booking row to data/bookings.xlsx, creating the file if needed.
export async function appendBooking(booking) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  const wb = new ExcelJS.Workbook();
  let ws;

  if (fs.existsSync(FILE)) {
    await wb.xlsx.readFile(FILE);
    ws = wb.getWorksheet('Bookings') || wb.worksheets[0];
    ws.columns = COLUMNS; // ensure keys are mapped
  } else {
    ws = wb.addWorksheet('Bookings');
    ws.columns = COLUMNS;
    styleHeader(ws);
  }

  ws.addRow({
    receivedAt: new Date().toISOString(),
    parentName: booking.parentName,
    phone: booking.phone,
    petName: booking.petName,
    petType: booking.petType,
    breed: booking.breed || '—',
    service: booking.service,
    date: booking.date,
    time: booking.time,
    notes: booking.notes || '—',
    status: 'Requested',
  });

  await wb.xlsx.writeFile(FILE);
  return FILE;
}
