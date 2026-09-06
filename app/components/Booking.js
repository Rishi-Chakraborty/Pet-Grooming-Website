import Heading from './Heading';
import Reveal from './Reveal';
import BookingForm from './BookingForm';

const bookingSteps = [
  'Pick the service that feels right for your pet.',
  'Choose a preferred date and time.',
  'Our team contacts you to confirm your slot.',
];

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-teal-dark py-20 md:py-28">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-marigold/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
        <div className="lg:pt-7">
          <Reveal>
            <Heading
              center={false}
              light
              eyebrow="Request an appointment"
              title="A fresh start for your favourite companion."
              sub="Send your preferred service and time. We’ll personally confirm availability before your visit."
            />
          </Reveal>

          <Reveal delay={100}>
            <ol className="space-y-4 border-t border-white/20 pt-6 text-white/85">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-marigold text-[11px] font-black text-charcoal">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
