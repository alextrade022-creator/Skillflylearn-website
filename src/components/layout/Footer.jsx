import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import ImageSlot from '../ui/ImageSlot';
import { CONTACT, NAV_LINKS, SOCIALS } from '../../data/site';

const COURSE_LINKS = ['Digital Marketing', 'HR Management', 'Foreign Accounting & Taxation'];

const SOCIAL_HOVER = {
  IG: 'hover:bg-primary',
  YT: 'hover:bg-primary',
  WA: 'hover:bg-whatsapp',
};

/** Site footer with company links, a course list, contact details and a callback form. */
export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <footer className="relative overflow-hidden bg-primary-darkest">
      <div className="absolute inset-0 opacity-20">
        <ImageSlot placeholder="Optional footer background image" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-darkest/95 to-primary-dark/90" />

      <Container className="relative px-6 pb-8 pt-[70px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/assets/logo-blue.png"
              alt="Skillfly"
              className="h-[46px] w-auto brightness-0 invert"
            />
            <p className="mt-4.5 text-[15px] leading-relaxed text-white/70">
              Practical digital marketing, HR and foreign accounting training with real placement
              support — from Calicut, for Kerala's next generation of professionals.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Company</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[15px] text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses + location */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Courses</h3>
            <div className="mt-4 flex flex-col gap-2.5">
              {COURSE_LINKS.map((label) => (
                <Link
                  key={label}
                  to="/courses"
                  className="text-[15px] text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
            <h3 className="mt-6.5 font-display text-base font-bold text-white">Location</h3>
            <p className="mt-3.5 text-[15px] leading-relaxed text-white/70">
              First floor, Kidson Building,
              <br />
              East Nadakkavu, Calicut - 673011
              <br />
              Ph: 7034 339 390, 7356 741 944
              <br />
              {CONTACT.email}
            </p>
          </div>

          {/* Callback form */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Get a callback</h3>
            <form className="mt-4 flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-body text-[15px] text-white outline-none placeholder:text-white/50 focus:border-[#8b7ce8]"
              />
              <input
                type="text"
                placeholder="Phone or email"
                required
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-body text-[15px] text-white outline-none placeholder:text-white/50 focus:border-[#8b7ce8]"
              />
              <textarea
                placeholder="Message"
                rows={2}
                className="resize-y rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-body text-[15px] text-white outline-none placeholder:text-white/50 focus:border-[#8b7ce8]"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-5 py-3 text-center font-display text-[15px] font-bold text-white transition-colors hover:bg-[#6a58e0]"
              >
                {sent ? 'Thanks — we’ll be in touch' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-4.5 border-t border-white/15 pt-6">
          <p className="text-sm text-white/60">© 2026 Skillfly Learn. All rights reserved.</p>
          <div className="flex gap-2.5">
            {SOCIALS.map((social) => (
              <a
                key={social.short}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[13px] font-bold text-white transition-colors ${SOCIAL_HOVER[social.short]}`}
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
