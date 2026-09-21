import Hero from '../components/home/Hero';
import SuccessStories from '../components/home/SuccessStories';
import Certifications from '../components/home/Certifications';
import FoundersSection from '../components/home/FoundersSection';
import TrainersSection from '../components/home/TrainersSection';
import CoursesPreview from '../components/home/CoursesPreview';
import WhyUs from '../components/home/WhyUs';
import PlacementsPreview from '../components/home/PlacementsPreview';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';

/** Landing page composed of the home section components. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SuccessStories />
      <Certifications />
      <FoundersSection />
      <TrainersSection />
      <CoursesPreview />
      <WhyUs />
      <PlacementsPreview />
      <Testimonials />
      <FaqSection />
    </>
  );
}
