import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Choose what they need',
    text: 'Start with a full groom or choose the care that suits your pet today.',
  },
  {
    number: '02',
    title: 'Share the important details',
    text: 'Tell us about your pet, preferred time and anything that helps us prepare.',
  },
  {
    number: '03',
    title: 'We’ll confirm your visit',
    text: 'Our team will get in touch to confirm availability before your appointment.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-clay/70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-9 md:mb-11">
            <div>
              <p className="section-kicker">A simple way to book</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-[1.1] text-charcoal">
                Thoughtful care starts before the visit.
              </h2>
            </div>
            <a href="#booking" className="inline-flex items-center gap-2 text-sm font-extrabold text-teal hover:text-teal-dark transition-colors">
              Start a booking <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <article className="group relative h-full rounded-3xl border border-clay/80 bg-cream p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <span className="text-xs font-extrabold tracking-[0.2em] text-teal/65">{step.number}</span>
                <h3 className="mt-9 text-xl font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal/65">{step.text}</p>
                <span className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-teal/8 text-lg text-teal transition-transform group-hover:rotate-12" aria-hidden>
                  ✦
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
