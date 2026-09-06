'use client';
import { useRef, useState, useCallback } from 'react';
import { beforeAfter } from '@/lib/site.config';
import Heading from './Heading';
import Reveal from './Reveal';

function Slider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  const move = useCallback((clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    move(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    move(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div
      ref={wrapRef}
      className="relative select-none rounded-3xl overflow-hidden shadow-lift aspect-[4/3] cursor-ew-resize touch-none"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      <img src={after} alt={`After grooming: ${label}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" draggable={false} />
      <span className="absolute top-3 right-3 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full z-10">After</span>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`Before grooming: ${label}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: wrapRef.current ? wrapRef.current.offsetWidth : '100%', maxWidth: 'none' }}
          loading="lazy"
          draggable={false}
        />
        <span className="absolute top-3 left-3 bg-white text-charcoal text-xs font-bold px-3 py-1 rounded-full">Before</span>
      </div>

      {/* handle */}
      <div className="absolute inset-y-0 -ml-0.5" style={{ left: `${pos}%` }}>
        <div className="h-full w-1 bg-white shadow" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white shadow-lift grid place-items-center text-teal font-bold">
          <span aria-hidden>⇄</span>
        </div>
      </div>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Reveal before and after for ${label}`}
        className="absolute inset-0 opacity-0 w-full cursor-ew-resize"
      />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Heading eyebrow="Transformations" title="The Grooming Glow-Up ✨" sub="Drag the slider to see the difference a professional session makes." />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfter.map((b, i) => (
            <Reveal key={i} delay={i * 100}>
              <Slider {...b} />
              <p className="mt-3 text-center text-sm font-semibold text-charcoal/70">{b.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-4 text-center">
          <p className="text-xs text-charcoal/50">Sample images shown — easily replaced with your own before/after photos.</p>
        </Reveal>
      </div>
    </section>
  );
}
