import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <PageHero title="Page not found" blurb="The page you were looking for doesn’t exist." />
      <section className="bg-white px-6 py-24 text-center">
        <Container size="prose">
          <p className="text-[17px] text-muted">
            Try heading back to the homepage or exploring our courses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <Button to="/">Back to home</Button>
            <Button to="/courses" variant="outline">
              View courses
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
