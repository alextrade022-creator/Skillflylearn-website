import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import Container from '../components/ui/Container';
import ImageSlot from '../components/ui/ImageSlot';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blog';

export default function BlogPage() {
  const [category, setCategory] = useState('All');

  const posts = BLOG_POSTS.filter(
    (post) => category === 'All' || post.category === category,
  );

  return (
    <>
      <PageHero
        title="Blog"
        blurb="Guides on digital marketing, HR, accounting and building a career in Kerala."
      />

      <section className="bg-white px-6 pb-[90px] pt-[70px]">
        <Container>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2.5">
            {BLOG_CATEGORIES.map((label) => {
              const isActive = category === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setCategory(label)}
                  className={`rounded-full border border-primary/30 px-5 py-2.5 font-display text-[15px] font-semibold transition-colors ${
                    isActive ? 'bg-primary text-white' : 'bg-white text-primary'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Posts */}
          <div className="mt-10 grid gap-6.5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slot}
                className="reveal-pop overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_56px_rgba(43,20,145,0.15)]"
              >
                <div className="relative h-[210px] bg-lavender">
                  <ImageSlot placeholder="Blog image" />
                </div>
                <div className="p-6.5">
                  <span className="inline-block rounded-full bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-[21px] font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[13px] text-muted-light">{post.date}</span>
                    <Link to="/post" className="font-display text-[15px] font-bold text-primary">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
