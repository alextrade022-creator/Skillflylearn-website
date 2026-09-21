import { useEffect, useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ImageSlot from '../ui/ImageSlot';
import { STORIES } from '../../data/stories';

const CARD_WIDTH = 320;
const CARD_GAP = 26;
const ROTATE_INTERVAL = 4000;

/** Auto-rotating carousel of student success stories with clickable dots. */
export default function SuccessStories() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % STORIES.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-surface px-6 py-24">
      <Container>
        <SectionHeading eyebrow="Success Stories" title="From classroom to career" />

        <div className="mt-13 overflow-hidden">
          <div
            className="flex gap-6.5 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${active * (CARD_WIDTH + CARD_GAP)}px)` }}
          >
            {STORIES.map((story) => (
              <article
                key={story.slot}
                className="w-[320px] flex-none rounded-3xl bg-white p-5 shadow-[0_18px_44px_rgba(43,20,145,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(43,20,145,0.18)]"
              >
                <div className="relative h-[300px] overflow-hidden rounded-[18px] bg-lavender">
                  <ImageSlot placeholder="Student photo" />
                </div>
                <h3 className="mt-4.5 font-display text-[21px] font-bold">{story.name}</h3>
                <p className="mt-1.5 text-[15px] font-semibold text-primary">{story.outcome}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {STORIES.map((story, index) => (
            <button
              key={story.slot}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show story ${index + 1}`}
              className={`h-[9px] rounded-full transition-all duration-300 ${
                index === active ? 'w-[30px] bg-primary' : 'w-[9px] bg-primary/30'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
