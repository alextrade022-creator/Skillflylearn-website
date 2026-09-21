import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { WHY_US } from '../../data/highlights';

/** "What Makes Skillfly Different" feature cards. */
export default function WhyUs() {
  return (
    <section className="bg-white px-6 py-24">
      <Container>
        <SectionHeading eyebrow="Why Us" title="What Makes Skillfly Different" />

        <div className="mt-13 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => (
            <article
              key={item.title}
              className="reveal-pop rounded-3xl bg-surface px-7 py-8.5 transition-all duration-300 hover:-translate-y-2 hover:bg-lavender"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-dark to-primary text-2xl text-white">
                {item.icon}
              </div>
              <h3 className="mt-5.5 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
