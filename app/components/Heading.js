export default function Heading({ eyebrow, title, sub, center = true, light = false }) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : ''} mb-10 md:mb-14`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 ${light ? 'bg-white/15 text-white' : 'bg-teal/10 text-teal'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-marigold' : 'bg-teal'}`} aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-[2.7rem] leading-[1.1] font-semibold ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-white/80' : 'text-charcoal/70'}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
