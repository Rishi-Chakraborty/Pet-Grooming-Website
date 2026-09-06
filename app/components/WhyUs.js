import { whyUs } from '@/lib/site.config';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-sand/60 paw-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
        {/* Left: intro + image */}
        <Reveal className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 bg-teal/10 text-teal">
            <span aria-hidden>🐾</span> Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.7rem] leading-[1.1] font-semibold text-charcoal">
            More Than Grooming.<br />It&apos;s Care.
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            At Super Pet Grooming Services, we believe grooming should be a comfortable and
            positive experience for your pet. Our team focuses on gentle handling, cleanliness
            and attention to detail so your pet leaves looking great and feeling comfortable.
          </p>
          <div className="mt-7 rounded-3xl overflow-hidden shadow-lift aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=72"
              alt="A groomer gently caring for a small dog"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Right: feature cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {whyUs.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 90}>
              <div className="h-full bg-white rounded-3xl p-6 shadow-card hover:shadow-lift transition-all hover:-translate-y-1">
                <span className="text-3xl" aria-hidden>{f.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">{f.title}</h3>
                <p className="mt-1.5 text-sm text-charcoal/65 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
