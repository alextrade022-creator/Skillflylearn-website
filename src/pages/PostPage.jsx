import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import ImageSlot from '../components/ui/ImageSlot';
import Button from '../components/ui/Button';
import { RELATED_POSTS } from '../data/blog';

/** Single blog post template. Content is placeholder copy for editors to replace. */
export default function PostPage() {
  return (
    <section className="bg-white px-6 pb-[90px] pt-[110px]">
      <Container size="reading">
        <div className="flex flex-wrap items-center gap-3.5 text-sm text-muted-light">
          <span className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Digital Marketing
          </span>
          <span>By Skillfly Team · 12 Aug 2026 · 6 min read</span>
        </div>

        <div className="relative mt-7 h-[400px] overflow-hidden rounded-[26px] bg-lavender">
          <ImageSlot placeholder="Drop the article hero image" />
        </div>

        <p className="mt-8.5 text-[19px] font-medium leading-[1.8] text-ink">
          This is the article template. Replace this intro with the opening paragraph — one clear
          promise about what the reader will be able to do by the end.
        </p>

        <h2 className="mt-8.5 text-[28px] font-extrabold">Section heading</h2>
        <p className="mt-3.5 text-[17px] leading-[1.85] text-muted">
          Body copy placeholder. Keep paragraphs to three or four sentences, use subheadings every
          few hundred words, and close each section with something the reader can act on today.
          Internal links to your course pages belong here.
        </p>

        <h2 className="mt-8.5 text-[28px] font-extrabold">Another section</h2>
        <p className="mt-3.5 text-[17px] leading-[1.85] text-muted">
          More body copy placeholder. Screenshots, checklists and short student examples work well in
          this slot — they are what makes a training-academy blog worth linking to.
        </p>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-primary-dark to-primary p-8 text-white">
          <div className="font-display text-2xl font-extrabold">Want to learn this hands-on?</div>
          <p className="mt-2.5 text-base text-white/85">
            Book a free demo class at our Calicut centre or online.
          </p>
          <Button to="/contact" variant="white" className="mt-5">
            Book Free Demo
          </Button>
        </div>

        <h2 className="mt-14 text-[26px] font-extrabold">Related posts</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_POSTS.map((post) => (
            <Link
              key={post.slot}
              to="/blog"
              className="block overflow-hidden rounded-[18px] border border-ink/10 text-ink transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-[130px] bg-lavender">
                <ImageSlot placeholder=" " />
              </div>
              <div className="p-4 font-display text-base font-bold leading-snug">{post.title}</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
