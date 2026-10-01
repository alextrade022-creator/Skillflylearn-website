/**
 * "Life at Skillfly" gallery — campus moments shown in the scrolling marquee.
 *
 * To add/replace a photo, drop a file in `public/images/life-at-skillfly/`
 * and point `image` at it (e.g. '/images/life-at-skillfly/onam.jpg').
 * Until an image exists, the card shows its headline over a purple background.
 * `size` controls the card width: 'big' is wider, 'small' is narrower.
 */
export const LIFE_AT_SKILLFLY = [
  {
    headline: 'Graduation Day',
    subtext: 'From classroom to career',
    image: '/images/ceremony-2026.jpg',
    size: 'big',
  },
  {
    headline: 'Anniversary Celebration',
    subtext: 'Milestones worth celebrating',
    image: '/images/life-at-skillfly/anniversary.jpg',
    size: 'small',
  },
  {
    headline: 'Onam Celebration',
    subtext: 'Festivals, together',
    image: '/images/life-at-skillfly/onam.jpg',
    size: 'big',
  },
  {
    headline: 'Hands-on Workshops',
    subtext: 'Learning by doing',
    image: '/images/life-at-skillfly/workshop.jpg',
    size: 'small',
  },
  {
    headline: 'Campus Events',
    subtext: 'More than just classes',
    image: '/images/life-at-skillfly/events.jpg',
    size: 'big',
  },
  {
    headline: 'Team Skillfly',
    subtext: 'Mentors who care',
    image: '/images/life-at-skillfly/team.jpg',
    size: 'small',
  },
].map((item, i) => ({ ...item, id: `life-${i + 1}` }));
