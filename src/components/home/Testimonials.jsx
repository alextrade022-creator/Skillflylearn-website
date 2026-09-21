import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ReviewGrid from '../ui/ReviewGrid';
import { REVIEWS } from '../../data/testimonials';

/** "What our students say" testimonials section on the home page. */
export default function Testimonials() {
  return (
    <section className="bg-surface px-6 py-24">
      <Container size="narrow">
        <SectionHeading title="What our students say" />
        <div className="mt-12">
          <ReviewGrid reviews={REVIEWS} />
        </div>
      </Container>
    </section>
  );
}
