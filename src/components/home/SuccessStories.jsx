import { useEffect, useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ImageSlot from '../ui/ImageSlot';
import { PLACED_STUDENTS } from '../../data/placedStudents';

const STORIES = PLACED_STUDENTS;
const COUNT = STORIES.length;

const CARD_WIDTH = 320;
const CARD_GAP = 26;
const STEP = CARD_WIDTH + CARD_GAP;
const ROTATE_INTERVAL = 4000;
const TRANSITION_MS = 700;

// The track renders the list twice so there is always a card to slide into on
// the right. When we slide past the last real card into the duplicated copy,
// we snap back to the start (without animation) for a seamless infinite loop.
const TRACK = [...STORIES, ...STORIES];

/** Auto-rotating, infinitely looping carousel of student success stories. */
export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Advance one card on a timer.
  useEffect(() => {
    const timer = setInterval(() => setActive((current) => current + 1), ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // After sliding into the duplicated first card, snap back to the real start.
  useEffect(() => {
    if (active !== COUNT) return undefined;
    const timer = setTimeout(() => {
      setAnimate(false);
      setActive(0);
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [active]);

  // Re-enable the animation on the frame after a silent snap.
  useEffect(() => {
    if (animate) return undefined;
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const goTo = (index) => {
    setAnimate(true);
    setActive(index);
  };

  return (
    <section className="bg-surface px-6 py-24">
      <Container>
        <SectionHeading eyebrow="Success Stories" title="From classroom to career" />

        <div className="mt-13 overflow-hidden">
          <div
            className={`flex gap-6.5 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              animate ? 'transition-transform duration-700' : ''
            }`}
            style={{ transform: `translateX(-${active * STEP}px)` }}
          >
            {TRACK.map((story, index) => (
              <article
                key={`${story.slot}-${index}`}
                className="w-[320px] flex-none rounded-3xl bg-white p-5 shadow-[0_18px_44px_rgba(43,20,145,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(43,20,145,0.18)]"
              >
                <div className="relative h-[300px] overflow-hidden rounded-[18px] bg-lavender">
                  <ImageSlot src={story.image} alt={story.name} placeholder="Student photo" />
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
              onClick={() => goTo(index)}
              aria-label={`Show story ${index + 1}`}
              className={`h-[9px] rounded-full transition-all duration-300 ${
                active % COUNT === index ? 'w-[30px] bg-primary' : 'w-[9px] bg-primary/30'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
