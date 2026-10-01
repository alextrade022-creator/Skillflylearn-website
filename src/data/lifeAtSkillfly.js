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
    headline: 'Team Trip',
    subtext: 'Memories beyond the classroom',
    image: '/images/life-at-skillfly/trip.jpg',
    size: 'small',
  },
  {
    headline: 'Christmas Celebration',
    subtext: 'Joy, shared together',
    image: '/images/life-at-skillfly/christmas.jpg',
    size: 'big',
  },
  {
    headline: 'Food Fest',
    subtext: 'Flavours, culture and fun',
    image: '/images/life-at-skillfly/food-fest.jpg',
    size: 'small',
  },
  {
    headline: 'Team Skillfly',
    subtext: 'The people behind it all',
    image: '/images/life-at-skillfly/team.jpg',
    size: 'big',
  },
].map((item, i) => ({ ...item, id: `life-${i + 1}` }));
