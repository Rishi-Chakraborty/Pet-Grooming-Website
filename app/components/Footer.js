import { site } from '@/lib/site.config';

const quick = [
  ['Home', '#home'], ['Services', '#services'], ['Gallery', '#gallery'],
  ['Reviews', '#reviews'], ['FAQs', '#faqs'], ['Contact', '#contact'],
];

export default function Footer() {
  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-24 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-teal text-white text-lg" aria-hidden>🐾</span>
            <span className="font-display font-semibold text-white text-lg">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm text-cream/60">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quick.map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-marigold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`tel:${site.phoneRaw}`} className="hover:text-marigold transition-colors">📞 {site.phoneDisplay}</a></li>
            <li className="text-cream/60">📍 {site.address.city}</li>
          </ul>
          <div className="mt-4 flex gap-2.5">
            {site.links.instagram && (
              <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">📸</a>
            )}
            {site.links.facebook && (
              <a href={site.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">📘</a>
            )}
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">💬</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 pt-6 border-t border-white/10 text-center text-xs text-cream/50">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
