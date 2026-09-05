# Super Pet Grooming Services — Website

A production-ready website for a pet grooming business, built with **Next.js 14**.
It ships with a working appointment-booking backend that:

1. **Logs every request to an Excel sheet** (`data/bookings.xlsx`)
2. **Generates a calendar invite** (`.ics`) that syncs to Google / Outlook / Apple Calendar
3. **Emails the business** with the invite attached

The site works with **zero configuration** — without email set up, bookings still
log to Excel and the customer sees a confirmation. Add SMTP credentials to turn on
email + calendar sync.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Build & run in production mode:

```bash
npm run build
npm start
```

---

## Editing business information

**Everything lives in one file:** `lib/site.config.js`

Change the name, phone, address, hours, rating, services, FAQs, reviews,
gallery images, before/after pairs, and external links there — every component
reads from it. No need to touch component code.

Configurable external links (all in `site.config.js` → `links`):

| Field                  | What it's for                                  |
| ---------------------- | ---------------------------------------------- |
| `googleMapsEmbed`      | The `src` of the embedded map iframe           |
| `googleMapsDirections` | The "Get Directions" button                    |
| `googleReviews`        | The "Read All Google Reviews" button           |
| `instagram`            | Instagram links (left blank = hidden)          |
| `facebook`             | Facebook link (left blank = hidden)            |

> Social icons and the Instagram CTA only appear when you fill in a URL.

---

## Turning on email + calendar sync

Copy `.env.example` to `.env.local` and fill in your SMTP details:

```bash
cp .env.example .env.local
```

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-address@gmail.com
SMTP_PASS=your-app-password       # Gmail: create an "App Password"
MAIL_TO=owner@superpetgrooming.com   # where booking notifications arrive
MAIL_FROM=bookings@superpetgrooming.com
```

Works with any SMTP provider — Gmail (App Password), Zoho, Brevo, SendGrid, etc.

**How the calendar sync works:** each booking email includes an `.ics` invite.
Opening it (or the email itself, in Gmail/Outlook) adds a *tentative* event to the
business calendar. The event is marked tentative on purpose — the team confirms
availability with the customer before it becomes a firm appointment.

---

## Where bookings are stored

`data/bookings.xlsx` — a styled spreadsheet, one row per request:

`Received At · Pet Parent · Phone · Pet Name · Pet Type · Breed · Service ·
Preferred Date · Preferred Time · Notes · Status`

The file is created automatically on the first booking. It's git-ignored so real
customer data never gets committed.

> **Note on serverless hosting:** platforms like Vercel have a read-only/ephemeral
> filesystem, so the Excel file won't persist there. Two options:
> - Rely on **email** as the system of record (recommended for Vercel), or
> - Deploy somewhere with a persistent disk (a VPS, Render, Railway, a Docker
>   host) to keep the Excel log.
> See "Deployment" below.

---

## Deployment

### Option A — Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the `SMTP_*` / `MAIL_*` environment variables in the project settings.
4. Deploy. Set `seo.url` in `site.config.js` to your real domain.

On Vercel, use **email as the record of bookings** (the Excel write is skipped on
the read-only filesystem — the code handles this gracefully).

### Option B — VPS / Render / Railway / Docker (keeps the Excel log)
Any host that runs a persistent Node process and has a writable disk:

```bash
npm install
npm run build
npm start        # serves on port 3000
```

Put it behind Nginx/Caddy for HTTPS, or use the platform's built-in TLS.
Set the same environment variables. `data/bookings.xlsx` persists on disk.

---

## Project structure

```
super-pet-grooming/
├─ app/
│  ├─ layout.js            # SEO metadata, fonts, LocalBusiness schema
│  ├─ page.js              # assembles the homepage
│  ├─ globals.css          # design tokens + animations
│  ├─ robots.js            # robots.txt
│  ├─ sitemap.js           # sitemap.xml
│  ├─ api/book/route.js    # booking endpoint (validate → Excel → email/ICS)
│  └─ components/          # Navbar, Hero, Services, BookingForm, … (13 components)
├─ lib/
│  ├─ site.config.js       # ← ALL business info lives here
│  ├─ excel.js             # appends bookings to xlsx
│  ├─ calendar.js          # builds the .ics invite
│  └─ mailer.js            # sends the notification email
├─ data/bookings.xlsx      # created on first booking (git-ignored)
├─ .env.example
└─ vercel.json
```

---

## Content & accuracy

This site deliberately avoids inventing anything not provided by the business.
Prices, hours beyond "Opens at 10:00 AM", certifications, years of experience,
staff counts, and testimonials are **not** fabricated — unknowns use a "Contact
us" call-to-action instead. Only the two real Google review snippets are shown.
Keep this in mind when editing: fill placeholders with real information rather
than plausible-sounding guesses.

---

## Tech

Next.js 14 (App Router) · React 18 · Tailwind CSS · ExcelJS · ics · Nodemailer

© 2026 Super Pet Grooming Services.
