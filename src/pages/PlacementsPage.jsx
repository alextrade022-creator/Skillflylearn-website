import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import ImageSlot from '../components/ui/ImageSlot';
import ReviewGrid from '../components/ui/ReviewGrid';
import { PLACEMENT_STATS } from '../data/highlights';
import { REVIEWS_PAGE } from '../data/testimonials';
import { PLACED_STUDENTS } from '../data/placedStudents';

export default function PlacementsPage() {
  return (
    <>
      <PageHero title="Placements" blurb="Offer letters, hiring posts and the students behind them." />

      {/* Stats */}
      <section className="bg-white px-6 pb-10 pt-20">
        <Container>
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="font-display text-[clamp(28px,3.8vw,44px)] font-extrabold">
              Our students are getting hired
            </h2>
            <p className="mt-3.5 text-[17px] text-muted">Real students. Real jobs. Real salaries.</p>
          </div>
          <div className="mt-11 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {PLACEMENT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] bg-gradient-to-br from-primary-dark to-primary px-6 py-8 text-center text-white shadow-[0_18px_44px_rgba(43,20,145,0.22)]"
              >
                <div className="font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-none">
                  {stat.value}
                </div>
                <div className="mt-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/75">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Masonry gallery */}
      <section className="bg-white px-6 pb-[90px] pt-10">
        <Container>
          <h2 className="font-display text-[clamp(26px,3.2vw,38px)] font-extrabold">
            Placement gallery
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-4.5 md:grid-cols-3 lg:grid-cols-4">
            {PLACED_STUDENTS.map((student) => (
              <div
                key={student.slot}
                className="group relative h-[300px] overflow-hidden rounded-[18px] bg-lavender transition-transform duration-300 hover:scale-[1.02]"
              >
                <ImageSlot src={student.image} alt={student.name} placeholder="Placement proof" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-darkest/90 to-transparent p-4 pt-10">
                  <div className="font-display text-base font-bold text-white">{student.name}</div>
                  <div className="text-[13px] font-semibold text-white/75">{student.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-surface px-6 py-[90px]">
        <Container size="narrow">
          <h2 className="mb-11 text-center font-display text-[clamp(26px,3.2vw,38px)] font-extrabold">
            In their own words
          </h2>
          <ReviewGrid reviews={REVIEWS_PAGE} />
        </Container>
      </section>
    </>
  );
}
