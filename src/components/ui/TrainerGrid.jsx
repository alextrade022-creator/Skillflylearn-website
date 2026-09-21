import ImageSlot from './ImageSlot';

/**
 * Responsive grid of trainer cards. Shared by the home and about pages.
 *
 * @param {Array<{name: string, role: string, slot: string}>} trainers
 */
export default function TrainerGrid({ trainers }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {trainers.map((trainer) => (
        <article
          key={trainer.slot}
          className="reveal-pop overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-2.5 hover:border-primary/40 hover:shadow-[0_26px_56px_rgba(43,20,145,0.16)]"
        >
          <div className="relative h-[270px] bg-lavender">
            <ImageSlot placeholder="Trainer photo" />
          </div>
          <div className="p-5">
            <h3 className="font-display text-[19px] font-bold">{trainer.name}</h3>
            <p className="mt-1.5 text-sm font-semibold text-primary">{trainer.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
