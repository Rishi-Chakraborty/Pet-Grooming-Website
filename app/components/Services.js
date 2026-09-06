import { services } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Heading
            eyebrow="Our Services"
            title="Tailored care for every kind of coat."
            sub="Choose a service to begin an appointment request. We’ll confirm the best timing with you."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 80}>
              <div className="group h-full border border-transparent bg-white rounded-3xl p-6 shadow-card hover:border-teal/15 hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
                <span className="grid place-items-center h-14 w-14 rounded-2xl bg-teal/8 text-3xl group-hover:bg-teal/15 group-hover:scale-105 transition-all" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-charcoal/65 leading-relaxed flex-1">{s.description}</p>
                <a
                  href={`?service=${s.id}#booking`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal group-hover:gap-2.5 transition-all"
                >
                  Choose this service <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-charcoal/60">
            Pricing varies by pet and coat.{' '}
            <a href="#booking" className="font-bold text-teal underline decoration-marigold decoration-2 underline-offset-2">
              Contact us for a quote
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
