import Container from '../ui/Container';
import Button from '../ui/Button';
import ImageSlot from '../ui/ImageSlot';
import { HERO_STATS } from '../../data/highlights';

/** Full-viewport home hero with headline, CTAs and a stats strip. */
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-primary-dark">
      <div className="absolute inset-0">
        <ImageSlot placeholder="Drop the hero banner image (students / classroom, wide)" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(43,20,145,0.94)_0%,rgba(51,27,168,0.88)_45%,rgba(80,61,199,0.78)_100%)]" />
      <div className="pointer-events-none absolute -right-[120px] -top-[160px] h-[520px] w-[520px] animate-[sf-drift_16s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(80,61,199,0.75),transparent_68%)] blur-[20px]" />
      <div className="pointer-events-none absolute -bottom-[180px] -left-[140px] h-[460px] w-[460px] animate-[sf-drift_21s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(120,104,231,0.55),transparent_70%)] blur-[24px]" />

      <div className="pointer-events-none relative mx-auto max-w-[1000px] px-6 pb-10 pt-[170px] text-center">
        <span className="inline-flex animate-[sf-fade_0.8s_ease_both] items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4.5 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
          Calicut · Online &amp; Offline
        </span>
        <h1 className="mt-6.5 animate-[sf-rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.08s_both] font-display text-[clamp(38px,6.4vw,80px)] font-extrabold leading-[1.02] text-white">
          India's No.3 Practical
          <br />
          Learning Platform
        </h1>
        <p>done by munavarali</p>
        <p className="mx-auto mt-6 max-w-[660px] animate-[sf-rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.2s_both] text-[clamp(16px,1.7vw,20px)] leading-relaxed text-white/85">
          Hands-on training in digital marketing, HR and foreign accounting — built around live
          projects, industry mentors and real hiring partners. Learn the work, then get placed —
          with dedicated placement support from our Calicut campus.
        </p>
        <div className="pointer-events-auto mt-9 flex animate-[sf-rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_0.32s_both] flex-wrap justify-center gap-3.5">
          <Button to="/courses" size="lg" className="hover:!bg-white hover:!text-primary-dark">
            Explore Courses
          </Button>
          <Button to="/contact" variant="outline-light" size="lg">
            Book Free Demo
          </Button>
        </div>
      </div>

      <div className="relative border-t border-white/20 bg-[rgba(20,10,60,0.34)] backdrop-blur-[8px]">
        <Container className="grid grid-cols-2 gap-5.5 px-6 py-6.5 text-center md:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="animate-[sf-pop_0.8s_ease_both]">
              <div className="font-display text-[clamp(26px,3vw,38px)] font-extrabold leading-none text-white">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
