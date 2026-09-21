import Button from './Button';

/**
 * Shared "Ready to start your career?" call-to-action shown near the
 * bottom of every page, above the footer.
 */
export default function CtaBanner() {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-[1100px] rounded-[30px] bg-gradient-to-r from-primary-dark via-primary to-primary-mid bg-[length:200%_100%] px-6 py-14 text-center shadow-[0_26px_60px_rgba(43,20,145,0.25)] [animation:sf-shine_9s_linear_infinite_alternate] sm:px-10">
        <h2 className="font-display text-[clamp(26px,3.6vw,42px)] font-extrabold text-white">
          Ready to start your career?
        </h2>
        <p className="mx-auto mt-3.5 max-w-[520px] text-[17px] text-white/85">
          Sit in on a free demo class, meet the trainers, and see the work before you enroll.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Button to="/contact" variant="white" size="lg">
            Book a free demo
          </Button>
          <Button href="tel:7034339390" variant="outline-light" size="lg">
            Call 7034 339 390
          </Button>
        </div>
      </div>
    </section>
  );
}
