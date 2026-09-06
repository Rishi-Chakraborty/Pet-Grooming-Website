# Super Pet Grooming Services Website

A production-ready pet-grooming website built with **Next.js 14**. Customers can request an appointment through the website, and the business receives an email notification with a calendar invite.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Configure booking emails

Copy `.env.example` to `.env.local`, then fill in the real SMTP details:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-address@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=owner@superpetgrooming.com
MAIL_FROM=bookings@superpetgrooming.com
```

Any SMTP provider can be used, including Gmail with an App Password, Zoho, Brevo, SendGrid, or a business mail provider. A booking is only confirmed as received once its email notification sends successfully.

## Update business information

Edit [lib/site.config.js](./lib/site.config.js) to change the business name, phone number, address, reviews, services, gallery, opening hours, and external links.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Leave the detected Next.js settings as-is.
4. In **Project Settings → Environment Variables**, add all six `SMTP_*` and `MAIL_*` values for Production.
5. Deploy and submit a test booking to verify the notification arrives.

## Project structure

```text
app/                    Website pages, components, and booking API
lib/site.config.js      Business content and editable site details
lib/calendar.js         Calendar-invite generator
lib/mailer.js           Booking-notification email sender
.env.example            Required environment-variable template
```
