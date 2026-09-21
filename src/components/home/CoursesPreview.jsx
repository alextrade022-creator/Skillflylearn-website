import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { COURSE_PREVIEWS } from '../../data/courses';

/** "Our Courses" preview cards on the home page. */
export default function CoursesPreview() {
  return (
    <section className="bg-surface px-6 py-24">
      <Container>
        <SectionHeading
          title="Our Courses"
          subtitle="Three career tracks. All practical from day one."
        />

        <div className="mt-13 grid gap-7 lg:grid-cols-3">
          {COURSE_PREVIEWS.map((course) => (
            <article
              key={course.title}
              className="reveal-pop rounded-[28px] border-t-[5px] border-primary bg-white p-9 shadow-[0_18px_44px_rgba(43,20,145,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_66px_rgba(43,20,145,0.18)]"
            >
              <h3 className="font-display text-[29px] font-extrabold">{course.title}</h3>
              <p className="mt-2.5 text-base text-muted">{course.sub}</p>

              <ul className="mt-6.5 flex flex-col gap-3.5">
                {course.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="flex h-5.5 w-5.5 flex-none items-center justify-center rounded-full bg-lavender text-[13px] font-bold text-primary">
                      ✓
                    </span>
                    <span className="text-base leading-normal text-ink">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 inline-block rounded-full bg-surface px-4 py-2.5 text-sm font-bold text-primary-dark">
                {course.duration}
              </div>
              <div className="mt-6.5">
                <Button to="/courses">Learn More</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
