/**
 * Centered max-width wrapper used by every section for consistent gutters.
 */
export default function Container({ children, className = '', size = 'default' }) {
  const maxWidth = {
    default: 'max-w-[1240px]',
    narrow: 'max-w-[1100px]',
    prose: 'max-w-[900px]',
    reading: 'max-w-[820px]',
  }[size];

  return <div className={`${maxWidth} mx-auto ${className}`}>{children}</div>;
}
