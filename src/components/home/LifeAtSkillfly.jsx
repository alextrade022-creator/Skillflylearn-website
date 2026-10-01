import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { LIFE_AT_SKILLFLY } from '../../data/lifeAtSkillfly';

const WIDTHS = {
  big: 'w-[300px] sm:w-[440px]',
  small: 'w-[240px] sm:w-[300px]',
};

/** A single gallery card. Falls back to a purple background if the photo is missing. */
function LifeCard({ item }) {
  const [failed, setFailed] = useState(false);

  return (
    <article
      className={`relative h-[300px] flex-none overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark to-primary shadow-[0_18px_44px_rgba(43,20,145,0.18)] sm:h-[360px] ${WIDTHS[item.size]}`}
    >
      {item.image && !failed && (
        <img
          src={item.image}
          alt={item.headline}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-darkest/90 via-primary-darkest/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-2xl font-extrabold text-white">{item.headline}</h3>
        <p className="mt-1 text-sm font-medium text-white/80">{item.subtext}</p>
      </div>
    </article>
  );
}

/**
 * "Life at Skillfly" — a horizontal marquee of campus photos that scrolls left
 * continuously and pauses while the cursor is over it.
 */
export default function LifeAtSkillfly() {
  return (
    <section className="overflow-hidden bg-surface py-24">
      <Container className="px-6">
        <SectionHeading
          eyebrow="Our Culture"
          title="Life at Skillfly"
          subtitle="Celebrations, workshops and the everyday moments that make learning here feel like family."
        />
      </Container>

      {/* Marquee — hovering anywhere on the strip pauses the scroll */}
      <div className="group mt-13 overflow-hidden">
        <div className="flex w-max gap-6 px-6 [animation:sf-marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...LIFE_AT_SKILLFLY, ...LIFE_AT_SKILLFLY].map((item, index) => (
            <LifeCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
