'use client';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site.config';

const links = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Why Us', '#why-us'],
  ['Gallery', '#gallery'],
  ['Reviews', '#reviews'],
  ['FAQs', '#faqs'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 backdrop-blur-md shadow-card py-2' : 'bg-transparent py-3.5'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label={`${site.name} home`}>
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-teal text-white text-lg shadow-soft" aria-hidden>🐾</span>
            <span className="font-display font-semibold leading-tight text-[15px] sm:text-base text-charcoal">
              Super Pet<br className="hidden sm:block" /><span className="sm:hidden"> </span>Grooming
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3.5 py-2 rounded-full text-sm font-semibold text-charcoal/75 hover:text-teal hover:bg-teal/8 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-xl bg-white shadow-card text-charcoal"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block w-5 h-4" aria-hidden>
                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-charcoal rounded transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-charcoal rounded transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 bottom-0 h-0.5 w-5 bg-charcoal rounded transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-cream shadow-lift p-6 pt-24 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-charcoal hover:bg-teal/10 hover:text-teal transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-teal text-white font-bold px-5 py-3.5 rounded-2xl shadow-soft"
          >
            Book Appointment
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-3 flex items-center justify-center gap-2 bg-white text-teal font-bold px-5 py-3.5 rounded-2xl shadow-card"
          >
            📞 Call {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Mobile sticky bottom Book bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-cream/95 backdrop-blur border-t border-clay/60 flex gap-2 sm:hidden">
        <a href={`tel:${site.phoneRaw}`} className="flex-1 grid place-items-center bg-white text-teal font-bold py-3 rounded-2xl shadow-card">
          📞 Call
        </a>
        <a href="#booking" className="flex-[1.4] grid place-items-center bg-teal text-white font-bold py-3 rounded-2xl shadow-soft">
          Book Appointment
        </a>
      </div>
    </>
  );
}
