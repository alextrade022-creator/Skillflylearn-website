/**
 * Real placed students, used on the home success-stories carousel and the
 * placements galleries. Interleaved by track for visual variety.
 */
export const PLACED_STUDENTS = [
  { name: 'Hanadilha', track: 'Digital Marketing', image: '/images/placed-digital-marketing/hanadilha.jpeg' },
  { name: 'Anjana', track: 'HR', image: '/images/placed-hr/anjana.jpeg' },
  { name: 'Jinan', track: 'Digital Marketing', image: '/images/placed-digital-marketing/jinan.jpeg' },
  { name: 'Avanthika', track: 'HR', image: '/images/placed-hr/avanthika.jpeg' },
  { name: 'Sinan', track: 'Digital Marketing', image: '/images/placed-digital-marketing/sinan.jpeg' },
  { name: 'Farsina', track: 'HR', image: '/images/placed-hr/farsina.jpeg' },
  { name: 'Zain', track: 'Digital Marketing', image: '/images/placed-digital-marketing/zain.jpeg' },
  { name: 'Rishana', track: 'HR', image: '/images/placed-hr/rishana.jpeg' },
  { name: 'Shaniba', track: 'HR', image: '/images/placed-hr/shaniba.jpeg' },
  { name: 'Sreeshna', track: 'HR', image: '/images/placed-hr/sreeshna.jpeg' },
].map((student, i) => ({
  ...student,
  outcome: `Placed · ${student.track}`,
  slot: `placed-${i + 1}`,
}));
