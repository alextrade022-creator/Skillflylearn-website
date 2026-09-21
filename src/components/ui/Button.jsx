import { Link } from 'react-router-dom';

/**
 * Pill button rendered as a router `Link`, an anchor, or a `button`
 * depending on the props supplied.
 *
 * @param {'primary'|'white'|'outline'|'outline-light'} [variant]
 * @param {string} [to] - Internal route (renders a router Link).
 * @param {string} [href] - External/anchor URL (renders an <a>).
 */
const VARIANTS = {
  primary:
    'bg-primary text-white shadow-[0_10px_24px_rgba(80,61,199,0.35)] hover:bg-primary-dark hover:-translate-y-0.5',
  white: 'bg-white text-primary-dark hover:-translate-y-0.5',
  outline:
    'border-[1.5px] border-primary/40 text-primary hover:bg-lavender',
  'outline-light':
    'border-[1.5px] border-white/60 text-white hover:bg-white/15 hover:-translate-y-0.5',
};

const SIZES = {
  md: 'px-6 py-3 text-[15px]',
  lg: 'px-8 py-4 text-[17px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className = '',
  ...rest
}) {
  const classes = `inline-block rounded-full text-center font-display font-bold transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
