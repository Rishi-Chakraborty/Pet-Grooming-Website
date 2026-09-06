'use client';
import { useState } from 'react';
import { faqs } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

function Item({ q, a, open, onToggle, id }) {
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
      >
        <span className="font-semibold text-charcoal text-[15px] sm:text-base">{q}</span>
        <span className={`shrink-0 grid place-items-center h-7 w-7 rounded-full bg-teal/10 text-teal font-bold transition-transform ${open ? 'rotate-45' : ''}`} aria-hidden>+</span>
      </button>
      <div
        id={`faq-panel-${id}`}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-sm text-charcoal/70 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="py-20 md:py-28 bg-sand/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <Heading eyebrow="FAQs" title="Questions? We&apos;ve Got Answers." />
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 50}>
              <Item {...f} id={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
