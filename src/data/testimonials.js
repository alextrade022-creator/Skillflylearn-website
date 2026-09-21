/** Student reviews. `slot` differs per page so image placeholders stay unique. */
const reviewData = [
  {
    name: 'Fathima R',
    role: 'SEO Executive, Kochi',
    quote:
      'I joined with zero marketing background. Auditing a real website every week is what made the difference — in interviews I had actual work to show. Placed within a month of finishing.',
  },
  {
    name: 'Nishana P',
    role: 'HR Executive, Calicut',
    quote:
      'The payroll and compliance sessions were exactly what my employer tested me on. The mock interview panels with practising HR managers were brutal and completely worth it.',
  },
  {
    name: 'Arjun K',
    role: 'Performance Marketer, Bengaluru',
    quote:
      'Running live ad accounts with real budgets during the course is rare. Trainers were reachable after class, and the placement team kept following up until I signed.',
  },
];

export const REVIEWS = reviewData.map((r, i) => ({
  ...r,
  stars: '★★★★★',
  slot: `story-${i + 1}`,
}));

export const REVIEWS_PAGE = reviewData.map((r, i) => ({
  ...r,
  stars: '★★★★★',
  slot: `review-p-${i + 1}`,
}));
