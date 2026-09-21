import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import ImageSlot from '../components/ui/ImageSlot';
import TrainerGrid from '../components/ui/TrainerGrid';
import { FOUNDERS, TRAINERS } from '../data/trainers';
import { VALUES } from '../data/highlights';
import { ALL_CERTS } from '../data/certifications';

const trainersAbout = TRAINERS.map((trainer, i) => ({
  ...trainer,
  slot: `trainer-a-${i + 1}`,
}));

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        blurb="Who we are, who teaches here, and why we built a practical-first academy in Calicut."
      />

      {/* Our Story */}
      <section className="bg-white px-6 py-[90px]">
        <Container size="prose">
          <h2 className="font-display text-[clamp(28px,3.8vw,44px)] font-extrabold">Our Story</h2>
          <p className="mt-5.5 text-[17px] leading-[1.8] text-muted">
            Skillfly began with a gap we kept seeing in Calicut. Bright graduates were finishing
            degrees and certificate courses, then sitting in interviews unable to answer the one
            question that matters: what have you actually done? The syllabus was there. The practice
            was not.
          </p>
          <p className="mt-4.5 text-[17px] leading-[1.8] text-muted">
            So we built a training academy around doing the work. Our digital marketing students run
            live ad accounts, audit real websites and publish real content. Our HR students process
            real payroll sheets, screen candidate pools and sit mock panels with practising HR
            managers. Our CFAT accounting students work on previous-year audit data, file on the GST
            portal and handle Tally Prime, Zoho Books, QuickBooks and Odoo. Trainers are
            professionals still working in the field, which keeps every module current rather than
            recycled.
          </p>
          <p className="mt-4.5 text-[17px] leading-[1.8] text-muted">
            Today Skillfly runs online and offline batches from East Nadakkavu, Calicut, with
            placement support that continues after the course ends — resume reviews, interview prep
            and direct introductions to hiring partners. Our mission is straightforward: make
            practical, job-ready skills training accessible to every young person in Kerala — across
            digital marketing, HR and foreign accounting.
          </p>
        </Container>
      </section>

      {/* Founders */}
      <section className="bg-gradient-to-br from-primary-dark to-primary px-6 py-[90px]">
        <Container className="grid items-center gap-13 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.3)]">
            <ImageSlot placeholder="Drop the founders photo" />
          </div>
          <div>
            <h2 className="font-display text-[clamp(28px,3.8vw,44px)] font-extrabold text-white">
              Our Founders
            </h2>
            <p className="mt-5 text-[17px] leading-[1.75] text-white/85">
              Munavir Ali and Muhammed Jifri lead Skillfly's teaching and industry side respectively
              — one from digital and AI tooling, the other from HR operations. Between them they set
              the standard the academy runs on: small batches, live work, honest placement support.
            </p>
            <div className="mt-7 flex flex-wrap gap-8.5">
              {FOUNDERS.map((founder) => (
                <div key={founder.name}>
                  <div className="font-display text-[19px] font-bold text-white">{founder.name}</div>
                  <div className="mt-1 text-sm text-white/65">{founder.role}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-surface px-6 py-[90px]">
        <Container>
          <h2 className="text-center font-display text-[clamp(28px,3.8vw,44px)] font-extrabold">
            Mission, Vision &amp; Values
          </h2>
          <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-[0_16px_40px_rgba(43,20,145,0.07)] transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-[15px] bg-gradient-to-br from-primary-dark to-primary text-[22px] text-white">
                  {value.icon}
                </div>
                <h3 className="mt-5 font-display text-[19px] font-bold">{value.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Trainers */}
      <section className="bg-white px-6 py-[90px]">
        <Container>
          <h2 className="mb-11 text-center font-display text-[clamp(28px,3.8vw,44px)] font-extrabold">
            Our Trainers
          </h2>
          <TrainerGrid trainers={trainersAbout} />
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-surface px-6 py-20">
        <Container>
          <h2 className="text-center font-display text-[clamp(26px,3.2vw,38px)] font-extrabold">
            Certifications we prepare you for
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {ALL_CERTS.map((cert) => (
              <div
                key={cert.slot}
                className="rounded-2xl bg-white p-3.5 text-center shadow-[0_10px_26px_rgba(43,20,145,0.07)]"
              >
                <div className="h-[58px] opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                  <ImageSlot placeholder="Logo" fit="contain" />
                </div>
                <p className="mt-2.5 text-[13px] font-semibold text-muted">{cert.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
