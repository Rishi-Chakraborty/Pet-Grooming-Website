import { site } from '@/lib/site.config';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 paw-bg">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" aria-hidden />
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-marigold/15 blur-3xl" aria-hidden />
      <div className="absolute right-[8%] top-28 hidden h-32 w-32 rounded-full border border-teal/10 lg:block" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:gap-12">
        <div className="max-w-xl">
          <span className="hero-in inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-teal shadow-card" style={{ animationDelay: '0.05s' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden />
            Nizampet, Hyderabad
          </span>

          <h1 className="hero-in mt-5 text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.035em] text-charcoal sm:text-5xl lg:text-[3.7rem]" style={{ animationDelay: '0.15s' }}>
            Beautiful grooming.<br />
            <span className="relative whitespace-nowrap text-teal">
              Gentle by nature.
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" aria-hidden>
                <path d="M2 7C50 2 150 2 198 6" stroke="#F2A93B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-in mt-7 max-w-lg text-base leading-relaxed text-charcoal/70 sm:text-lg" style={{ animationDelay: '0.28s' }}>
            A calm, caring grooming experience for the dogs and cats you love - right here in Nizampet.
          </p>

          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.4s' }}>
            <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal px-7 py-4 font-extrabold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-lift">
              Find a grooming slot <span aria-hidden>→</span>
            </a>
            <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-clay/80 bg-white px-7 py-4 font-extrabold text-charcoal shadow-card transition-all hover:bg-clay/40">
              <span aria-hidden>☎</span> Call the studio
            </a>
          </div>

          <div className="hero-in mt-8 flex items-center gap-5" style={{ animationDelay: '0.52s' }}>
            <div className="flex items-center gap-2">
              <div className="text-lg tracking-tight text-marigold" aria-hidden>★★★★★</div>
              <span className="text-sm font-bold text-charcoal">{site.rating}/5</span>
            </div>
            <div className="h-6 w-px bg-clay" aria-hidden />
            <a href={site.links.googleReviews} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-charcoal/70 transition-colors hover:text-teal">
              {site.reviewCount} Google Reviews
            </a>
          </div>
        </div>

        <div className="relative hero-in" style={{ animationDelay: '0.35s' }}>
          <div className="absolute inset-x-10 bottom-[-1.25rem] h-12 rounded-full bg-teal/20 blur-2xl" aria-hidden />
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] ring-1 ring-white/80 shadow-lift lg:ml-auto">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=75"
              alt="A freshly groomed, happy dog"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent px-6 pb-6 pt-16">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/80">Super Pet Grooming</p>
              <p className="mt-1 font-display text-lg font-semibold text-white">Care looks good on them.</p>
            </div>
          </div>

          <div className="floaty absolute -left-2 -top-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:left-2">
            <div>
              <div className="text-sm leading-none text-marigold" aria-hidden>★★★★★</div>
              <div className="mt-0.5 font-display text-xl font-bold leading-tight text-charcoal">{site.rating}/5</div>
            </div>
            <div className="h-9 w-px bg-clay" aria-hidden />
            <div className="text-[11px] font-semibold leading-tight text-charcoal/60">{site.reviewCount}<br />Reviews</div>
          </div>

          <div className="floaty absolute -bottom-4 -right-1 w-28 rounded-2xl bg-white p-1.5 shadow-lift sm:right-2 sm:w-32" style={{ animationDelay: '1s' }}>
            <img
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&q=70"
              alt="A calm, well-groomed cat"
              className="h-24 w-full rounded-xl object-cover sm:h-28"
              loading="lazy"
            />
            <p className="py-1 text-center text-[10px] font-bold text-charcoal/70">Cats welcome too</p>
          </div>
        </div>
      </div>
    </section>
  );
}
