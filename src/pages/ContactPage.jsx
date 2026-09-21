import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import { CONTACT, SOCIALS } from '../data/site';

const inputClass =
  'rounded-[14px] border border-ink/15 bg-white px-4.5 py-4 font-body text-base outline-none transition-colors focus:border-primary';

const CONTACT_DETAILS = [
  { label: 'Address', value: CONTACT.address },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Phone', value: CONTACT.phones.join(' · ') },
  { label: 'WhatsApp', value: CONTACT.whatsapp },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        blurb="Visit the Calicut centre, call us, or book a free demo class online."
      />

      <section className="bg-white px-6 py-[90px]">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-[28px] bg-surface p-6 sm:p-9">
            <h2 className="text-[28px] font-extrabold">Send us a message</h2>
            <p className="mt-2.5 text-[15px] text-muted">
              Our counsellors reply within one working day.
            </p>
            <form className="mt-7 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your name" required className={inputClass} />
              <input type="email" placeholder="Email address" required className={inputClass} />
              <input type="tel" placeholder="Phone number" className={inputClass} />
              <textarea
                placeholder="Which course are you interested in?"
                rows={4}
                className={`${inputClass} resize-y`}
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-7 py-4 text-center font-display text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                {sent ? 'Thanks — we’ll be in touch' : 'Send'}
              </button>
            </form>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-[28px] font-extrabold">Visit our Calicut centre</h2>
            <div className="mt-6.5 flex flex-col gap-5.5">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label}>
                  <div className="font-display text-base font-bold text-primary">{detail.label}</div>
                  <p className="mt-1.5 text-base leading-[1.7] text-muted">
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      detail.value
                    )}
                  </p>
                </div>
              ))}

              <div>
                <div className="font-display text-base font-bold text-primary">Social</div>
                <div className="mt-2.5 flex flex-wrap gap-2.5">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-primary/30 px-4.5 py-2.5 text-sm font-semibold transition-colors hover:bg-lavender"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7.5 overflow-hidden rounded-3xl shadow-[0_16px_40px_rgba(43,20,145,0.1)]">
              <iframe
                title="Skillfly location map"
                src={CONTACT.mapEmbed}
                className="block h-[320px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
