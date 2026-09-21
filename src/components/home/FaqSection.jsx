import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '../../data/faqs';

/** Accordion of frequently asked questions. One item open at a time. */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="bg-white px-6 py-24">
      <Container size="prose">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Read the latest guides, information, and tips about our courses, admissions, and career support."
        />

        <div className="mt-11 flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[18px] border transition-colors ${
                  isOpen ? 'border-primary/30 bg-[#f9f8fe]' : 'border-ink/10 bg-white'
                } hover:border-primary/45`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5.5 text-left font-display text-[17px] font-semibold leading-snug text-ink"
                >
                  <span className="flex-1">{faq.question}</span>
                  <span
                    className={`flex h-7.5 w-7.5 flex-none items-center justify-center rounded-full bg-primary text-lg text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="animate-[sf-slidein_0.3s_ease_both] px-6 pb-6 text-base leading-[1.75] text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
