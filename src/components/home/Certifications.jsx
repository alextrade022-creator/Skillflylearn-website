import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ImageSlot from '../ui/ImageSlot';
import { CERT_GROUPS } from '../../data/certifications';

/** "Get Certified by Industry Leaders" — certification logos grouped by track. */
export default function Certifications() {
  return (
    <section className="bg-white px-6 py-24">
      <Container>
        <SectionHeading
          title="Get Certified by Industry Leaders"
          subtitle="Every Skillfly program is mapped to globally recognised platform certifications and nationally accredited HR credentials — so your resume carries proof, not just claims."
        />

        <div className="mt-13 grid gap-6.5 sm:grid-cols-2">
          {CERT_GROUPS.map((group) => (
            <div
              key={group.title}
              className="reveal-pop rounded-[26px] border border-ink/10 bg-white p-8 shadow-[0_16px_40px_rgba(43,20,145,0.07)]"
            >
              <h3 className="font-display text-xl font-bold">{group.title}</h3>
              <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {group.items.map((cert) => (
                  <div key={cert.slot} className="text-center">
                    <div className="h-[66px] rounded-[14px] bg-surface p-2.5 opacity-75 grayscale transition-all duration-300 hover:-translate-y-1 hover:opacity-100 hover:grayscale-0">
                      <ImageSlot placeholder="Logo" fit="contain" />
                    </div>
                    <p className="mt-2.5 text-[13px] font-semibold text-muted">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
