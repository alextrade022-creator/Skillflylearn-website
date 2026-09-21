import Container from '../ui/Container';
import ImageSlot from '../ui/ImageSlot';
import { FOUNDERS } from '../../data/trainers';

/** "Meet the Minds Behind Skillfly" — founder story and photo. */
export default function FoundersSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-mid to-primary px-6 py-[110px]">
      <div className="pointer-events-none absolute -left-[100px] -top-[140px] h-[420px] w-[420px] animate-[sf-drift_19s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/70">Founders</p>
          <h2 className="mt-3.5 font-display text-[clamp(30px,4.2vw,50px)] font-extrabold text-white">
            Meet the Minds Behind Skillfly
          </h2>
          <p className="mt-5.5 text-[17px] leading-[1.75] text-white/85">
            Munavir Ali and Muhammed Jifri started Skillfly after watching capable graduates in
            Calicut lose out on good jobs for one reason: their training stopped at theory. They
            built a campus where every module ends in real work — live campaigns, live hiring
            pipelines, real client briefs.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-white/85">
            Their vision is simple. Kerala's youth should not have to leave the state to get
            world-class, job-ready skills training. So Skillfly keeps batches small, trainers active
            in industry, and placement support running long after the last class.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-8.5">
            {FOUNDERS.map((founder) => (
              <div key={founder.name}>
                <div className="font-display text-xl font-bold text-white">{founder.name}</div>
                <div className="mt-1 text-sm text-white/65">{founder.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[440px] overflow-hidden rounded-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.32)]">
          <ImageSlot placeholder="Drop the founders photo" />
        </div>
      </Container>
    </section>
  );
}
