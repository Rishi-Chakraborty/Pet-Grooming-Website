import { site } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

export default function Location() {
  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Heading eyebrow="Visit Us" title="Come Visit Us" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <Reveal className="order-2 lg:order-1">
            <div className="h-full bg-white rounded-4xl shadow-card p-7 sm:p-9 flex flex-col">
              <h3 className="text-2xl font-semibold text-charcoal">{site.name}</h3>
              <address className="not-italic mt-4 text-charcoal/70 leading-relaxed">
                {site.address.line1}<br />
                {site.address.line2}<br />
                {site.address.line3}<br />
                {site.address.city}, {site.address.state} {site.address.pincode}
              </address>

              <dl className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-teal/10 text-teal" aria-hidden>📞</span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-charcoal/50">Phone</dt>
                    <dd><a href={`tel:${site.phoneRaw}`} className="font-bold text-charcoal hover:text-teal">{site.phoneDisplay}</a></dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-marigold/15 text-marigold" aria-hidden>🕙</span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-charcoal/50">Hours</dt>
                    <dd className="font-bold text-charcoal">{site.openingHours}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-auto pt-7 grid sm:grid-cols-3 gap-3">
                <a href={site.links.googleMapsDirections} target="_blank" rel="noopener noreferrer" className="grid place-items-center bg-teal text-white font-bold text-sm py-3 rounded-xl shadow-soft hover:bg-teal-dark transition-colors">
                  Get Directions
                </a>
                <a href={`tel:${site.phoneRaw}`} className="grid place-items-center bg-white border-2 border-teal text-teal font-bold text-sm py-3 rounded-xl hover:bg-teal/5 transition-colors">
                  Call Now
                </a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="grid place-items-center bg-[#25D366] text-white font-bold text-sm py-3 rounded-xl hover:brightness-95 transition-all">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="h-full min-h-[320px] rounded-4xl overflow-hidden shadow-card">
              <iframe
                title={`Map to ${site.name}`}
                src={site.links.googleMapsEmbed}
                className="h-full w-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
