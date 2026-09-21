import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ImageSlot from '../ui/ImageSlot';
import { PLACEMENT_COUNT } from '../../data/highlights';

const placements = Array.from({ length: PLACEMENT_COUNT }, (_, i) => ({
  slot: `placement-${i + 1}`,
}));

/** "Our students are getting hired" placement-proof gallery preview. */
export default function PlacementsPreview() {
  return (
    <section className="bg-gradient-to-b from-primary-dark to-primary-mid px-6 py-24">
      <Container>
        <SectionHeading
          tone="dark"
          title="Our students are getting hired"
          subtitle="Real students. Real jobs. Real salaries. Here's what Skillfly Learn graduates have achieved."
        />

        <div className="mt-13 grid grid-cols-2 gap-4.5 md:grid-cols-3 lg:grid-cols-4">
          {placements.map((item) => (
            <div
              key={item.slot}
              className="relative h-[280px] overflow-hidden rounded-[18px] border border-white/15 bg-white/10 transition-transform duration-300 hover:scale-[1.03]"
            >
              <ImageSlot placeholder="Placement proof" />
            </div>
          ))}
        </div>

        <div className="mt-11 text-center">
          <Button to="/placements" variant="white" size="lg">
            See all placements
          </Button>
        </div>
      </Container>
    </section>
  );
}
