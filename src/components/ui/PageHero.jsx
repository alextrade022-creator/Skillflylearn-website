import { Link } from 'react-router-dom';
import Container from './Container';

/**
 * Gradient hero banner shown at the top of every inner page,
 * with a breadcrumb, title and short blurb.
 */
export default function PageHero({ title, blurb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-mid to-primary px-6 pb-[76px] pt-[150px]">
      <div className="pointer-events-none absolute -right-20 -top-[120px] h-[380px] w-[380px] animate-[sf-drift_18s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)]" />
      <Container className="relative">
        <div className="flex items-center gap-2.5 text-sm text-white/70">
          <Link to="/" className="text-white/80 hover:text-white">
            Home
          </Link>
          <span>›</span>
          <span className="text-white">{title}</span>
        </div>
        <h1 className="mt-4 font-display text-[clamp(34px,5.4vw,62px)] font-extrabold text-white">
          {title}
        </h1>
        {blurb && (
          <p className="mt-3.5 max-w-[620px] text-[17px] leading-relaxed text-white/85">
            {blurb}
          </p>
        )}
      </Container>
    </section>
  );
}
