import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import TrainerGrid from '../ui/TrainerGrid';
import { TRAINERS } from '../../data/trainers';

/** "Meet Our Expert Trainers" section on the home page. */
export default function TrainersSection() {
  return (
    <section className="bg-white px-6 py-24">
      <Container>
        <SectionHeading
          title="Meet Our Expert Trainers"
          subtitle="Working professionals who teach what they practise every day."
        />
        <div className="mt-13">
          <TrainerGrid trainers={TRAINERS} />
        </div>
      </Container>
    </section>
  );
}
