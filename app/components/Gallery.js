import { gallery, site } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-sand/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Heading eyebrow="Gallery" title="Happy Pets. Fresh Looks. Lots of Fluff." />
        </Reveal>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 60} className="mb-4 break-inside-avoid">
              <div className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${g.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold">{g.alt}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {site.links.instagram && (
          <Reveal className="mt-10 text-center">
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-charcoal font-bold px-6 py-3.5 rounded-2xl shadow-card hover:shadow-lift transition-all hover:-translate-y-0.5"
            >
              <span aria-hidden>📸</span> See More on Instagram
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
