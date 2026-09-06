import { trustHighlights } from '@/lib/site.config';
import Reveal from './Reveal';

export default function TrustBar() {
  return (
    <section className="relative -mt-2 md:-mt-6 z-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="bg-white rounded-3xl shadow-card grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-clay/60 overflow-hidden">
          {trustHighlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 px-5 py-4 md:py-5 justify-center">
              <span className="text-2xl" aria-hidden>{h.icon}</span>
              <span className="text-sm font-bold text-charcoal/85 leading-tight">{h.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
