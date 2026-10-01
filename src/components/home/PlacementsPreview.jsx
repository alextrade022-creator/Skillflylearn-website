import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ImageSlot from '../ui/ImageSlot';
import { PLACED_STUDENTS } from '../../data/placedStudents';

/** "Our students are getting hired" placement gallery preview. */
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
          {PLACED_STUDENTS.map((student) => (
            <div
              key={student.slot}
              className="group relative h-[280px] overflow-hidden rounded-[18px] border border-white/15 bg-white/10 transition-transform duration-300 hover:scale-[1.03]"
            >
              <ImageSlot src={student.image} alt={student.name} placeholder="Placement proof" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-darkest/90 to-transparent p-4 pt-10">
                <div className="font-display text-base font-bold text-white">{student.name}</div>
                <div className="text-[13px] font-semibold text-white/75">{student.outcome}</div>
              </div>
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
