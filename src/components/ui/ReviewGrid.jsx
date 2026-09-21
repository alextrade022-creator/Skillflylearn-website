import ImageSlot from './ImageSlot';

/**
 * Grid of student review cards, shared by the home and placements pages.
 *
 * @param {Array<{name: string, role: string, quote: string, stars: string, slot: string}>} reviews
 */
export default function ReviewGrid({ reviews }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <figure
          key={review.slot}
          className="reveal-pop rounded-3xl bg-white p-8 shadow-[0_16px_40px_rgba(43,20,145,0.08)]"
        >
          <div className="text-lg tracking-[2px] text-star">{review.stars}</div>
          <blockquote className="mt-4.5 text-base leading-relaxed text-ink">
            {review.quote}
          </blockquote>
          <figcaption className="mt-5.5 flex items-center gap-3.5">
            <div className="relative h-13 w-13 flex-none overflow-hidden rounded-full">
              <ImageSlot shape="circle" placeholder=" " />
            </div>
            <div>
              <div className="font-display font-bold">{review.name}</div>
              <div className="text-sm text-muted">{review.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
