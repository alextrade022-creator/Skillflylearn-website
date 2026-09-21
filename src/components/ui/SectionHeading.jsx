/**
 * Reusable section heading with an optional eyebrow label and subtitle.
 * `tone` switches text colours for use over light or dark backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'center',
  className = '',
}) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-[720px] ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`text-[13px] font-bold uppercase tracking-[0.16em] ${
            isDark ? 'text-white/70' : 'text-primary'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[clamp(30px,4.2vw,50px)] font-extrabold leading-tight ${
          eyebrow ? 'mt-3.5' : ''
        } ${isDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[17px] leading-relaxed ${
            isDark ? 'text-white/85' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
