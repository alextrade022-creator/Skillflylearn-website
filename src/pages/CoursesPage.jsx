import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { COURSES_FULL, COURSE_INCLUDES, COURSE_COMPARISON } from '../data/courses';

const DETAIL_FIELDS = [
  { key: 'who', label: 'Who this is for' },
  { key: 'eligibility', label: 'Eligibility' },
  { key: 'cert', label: 'Certification' },
  { key: 'roles', label: 'Career paths' },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses"
        blurb="Three career tracks in detail — modules, eligibility, duration and certification."
      />

      {/* Full course cards */}
      <section className="bg-white px-6 py-[90px]">
        <Container className="flex flex-col gap-9">
          {COURSES_FULL.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-[30px] border border-ink/10 shadow-[0_20px_50px_rgba(43,20,145,0.08)]"
            >
              <div className="bg-gradient-to-r from-primary-dark to-primary p-6 text-white sm:p-9">
                <h2 className="font-display text-[clamp(26px,3.4vw,40px)] font-extrabold">
                  {course.title}
                </h2>
                <p className="mt-2.5 text-[17px] text-white/85">{course.sub}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-8.5 p-6 sm:p-9 lg:grid-cols-2">
                {/* Modules */}
                <div>
                  <h3 className="font-display text-xl font-bold">Modules</h3>
                  <div className="mt-5 flex flex-col gap-4.5">
                    {course.modules.map((module) => (
                      <div key={module.name} className="border-l-2 border-lavender pl-4.5">
                        <h4 className="font-display text-[17px] font-bold">{module.name}</h4>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                          {module.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div>
                  <div className="rounded-[22px] bg-surface p-7">
                    {DETAIL_FIELDS.map((field) => (
                      <div key={field.key} className="mt-5.5 first:mt-0">
                        <h4 className="font-display text-lg font-bold">{field.label}</h4>
                        <p className="mt-2.5 text-[15px] leading-[1.7] text-muted">
                          {course[field.key]}
                        </p>
                      </div>
                    ))}
                    <Button to="/contact" className="mt-6.5">
                      Book a free demo
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      {/* Every programme includes */}
      <section className="bg-gradient-to-b from-primary-dark to-primary px-6 py-20">
        <Container>
          <h2 className="text-center font-display text-[clamp(26px,3.4vw,40px)] font-extrabold text-white">
            Every programme includes
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COURSE_INCLUDES.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/10 px-4.5 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span className="flex h-5.5 w-5.5 flex-none items-center justify-center rounded-full bg-white/20 text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-surface px-6 py-[90px]">
        <Container size="narrow">
          <h2 className="text-center font-display text-[clamp(26px,3.4vw,40px)] font-extrabold">
            Compare the three tracks
          </h2>
          <p className="mt-3 text-center text-base text-muted">
            Not sure which fits? Here's the short version.
          </p>

          <div className="mt-10 overflow-x-auto rounded-3xl bg-white shadow-[0_16px_40px_rgba(43,20,145,0.08)]">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[0.9fr_1fr_1fr_1fr] bg-primary-dark font-display text-[15px] font-bold text-white">
                <div className="px-5 py-4.5" />
                <div className="px-5 py-4.5">Digital Marketing</div>
                <div className="px-5 py-4.5">HR Management</div>
                <div className="px-5 py-4.5">Accounting (CFAT)</div>
              </div>
              {COURSE_COMPARISON.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-[0.9fr_1fr_1fr_1fr] border-t border-ink/5 text-[15px]"
                >
                  <div className="px-5 py-4.5 font-bold text-ink">{row.k}</div>
                  <div className="px-5 py-4.5 text-muted">{row.a}</div>
                  <div className="px-5 py-4.5 text-muted">{row.b}</div>
                  <div className="px-5 py-4.5 text-muted">{row.c}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
