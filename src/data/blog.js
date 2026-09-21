/** Blog posts and category filters. */
export const BLOG_CATEGORIES = [
  'All',
  'Digital Marketing',
  'HR',
  'Career Tips',
  'Student Stories',
];

export const BLOG_POSTS = [
  {
    title: 'SEO in 2026: A Beginner’s Roadmap for Calicut Job Seekers',
    category: 'Digital Marketing',
    excerpt:
      'The exact order to learn SEO in — and the three skills local agencies actually hire for.',
    date: '12 Aug 2026',
    slot: 'blog-1',
  },
  {
    title: 'Google Ads vs Meta Ads: Where Should Your First ₹10,000 Go?',
    category: 'Digital Marketing',
    excerpt:
      'A practical comparison of intent and interest targeting, with budget splits that work for small businesses.',
    date: '04 Aug 2026',
    slot: 'blog-2',
  },
  {
    title: 'How to Become an HR Executive in Kerala Without Experience',
    category: 'HR',
    excerpt:
      'The skills, documents and interview answers that get freshers into their first HR role.',
    date: '28 Jul 2026',
    slot: 'blog-3',
  },
  {
    title: 'Resume Tips That Actually Get Marketing Interviews',
    category: 'Career Tips',
    excerpt:
      'What hiring managers skim for in the first eight seconds — and the projects section most freshers skip.',
    date: '19 Jul 2026',
    slot: 'blog-4',
  },
  {
    title: 'Payroll Basics Every New HR Professional Must Know',
    category: 'HR',
    excerpt:
      'PF, ESI, salary structuring and the compliance mistakes that cost companies the most.',
    date: '10 Jul 2026',
    slot: 'blog-5',
  },
  {
    title: 'From Student to SEO Executive in 90 Days: Fathima’s Story',
    category: 'Student Stories',
    excerpt: 'How one Skillfly student turned weekly website audits into a full-time offer.',
    date: '02 Jul 2026',
    slot: 'blog-6',
  },
];

/** Related posts shown at the bottom of a single post. */
export const RELATED_POSTS = BLOG_POSTS.slice(1, 4).map((post, i) => ({
  title: post.title,
  slot: `related-${i + 1}`,
}));
