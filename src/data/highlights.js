/** Statistic tiles, "why us" cards, values and placement config. */

export const HERO_STATS = [
  { value: '98%', label: 'Placement rate' },
  { value: '1000+', label: 'Students trained' },
  { value: '7', label: 'Industry trainers' },
  { value: '3', label: 'Career tracks' },
];

export const PLACEMENT_STATS = [
  { value: '98%', label: 'Placement rate' },
  { value: '[ADD STAT]', label: 'Students placed' },
  { value: '[ADD STAT]', label: 'Hiring partners' },
  { value: '[ADD STAT]', label: 'Average package' },
];

export const WHY_US = [
  {
    icon: '◆',
    title: 'Industry Experts',
    text: 'Learn from working professionals with real-world experience, not just theory.',
  },
  {
    icon: '▲',
    title: 'Practical Learning',
    text: 'Work on live projects and real case studies throughout your program.',
  },
  {
    icon: '★',
    title: 'Certifications',
    text: 'Earn industry-recognized certificates valued by top employers across Kerala.',
  },
  {
    icon: '➜',
    title: 'Placement Support',
    text: 'Get career guidance, resume help, and dedicated interview preparation support.',
  },
];

export const VALUES = [
  {
    icon: '◆',
    title: 'Practical First',
    text: 'If a module cannot be practised on real work, it does not belong in our syllabus.',
  },
  {
    icon: '➜',
    title: 'Career-Focused',
    text: 'Every course is designed backwards from the job description students are aiming at.',
  },
  {
    icon: '⬢',
    title: 'Industry Partnerships',
    text: 'Active hiring partners and industry trainers keep our teaching current and our placements real.',
  },
  {
    icon: '♦',
    title: 'Community',
    text: 'Small batches and an alumni network that keeps referring, mentoring and hiring each other.',
  },
];

/** Number of placement-proof tiles to render (matches the original 4–14 range). */
export const PLACEMENT_COUNT = 14;

/** Masonry heights cycled through on the placements gallery. */
export const PLACEMENT_HEIGHTS = ['300px', '240px', '340px', '260px', '310px', '230px', '290px'];
