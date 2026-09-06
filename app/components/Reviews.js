import { reviews, site } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <Heading eyebrow="Reviews" title="Pet Parents Love Us ❤️" />
        </Reveal>

        {/* Rating banner */}
        <Reveal className="mb-10">
          <div className="bg-teal rounded-3xl shadow-soft px-8 py-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left text-white">
            <div>
              <div className="text-5xl font-display font-bold leading-none">{site.rating}<span className="text-2xl text-white/70"> / 5</span></div>
              <div className="text-marigold text-lg mt-2" aria-hidden>★★★★★</div>
            </div>
            <div className="h-14 w-px bg-white/25 hidden sm:block" aria-hidden />
            <div>
              <div className="text-2xl font-bold">{site.reviewCount} Google Reviews</div>
              <p className="text-white/80 text-sm mt-1">Rated by pet parents across Nizampet & Kukatpally</p>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="h-full bg-white rounded-3xl p-6 shadow-card">
                <div className="text-marigold text-lg mb-3" aria-hidden>★★★★★</div>
                <blockquote className="text-charcoal/85 text-lg leading-relaxed font-medium">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-sm text-charcoal/55">
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-teal/10 text-teal text-xs font-bold" aria-hidden>G</span>
                  {r.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={site.links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal font-bold px-6 py-3.5 rounded-2xl shadow-card hover:shadow-lift transition-all hover:-translate-y-0.5"
          >
            Read All Google Reviews <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
