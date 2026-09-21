/**
 * Image placeholder mirroring the original `<image-slot>` element.
 *
 * When a `src` is supplied it renders the image; otherwise it shows a labelled
 * dashed placeholder so content editors know what belongs in each slot.
 *
 * @param {string} [src] - Image source URL.
 * @param {string} [alt] - Accessible alt text.
 * @param {string} [placeholder] - Hint text shown when no image is set.
 * @param {'rect'|'circle'} [shape] - Placeholder shape.
 * @param {'cover'|'contain'} [fit] - object-fit behaviour for the image.
 */
export default function ImageSlot({
  src,
  alt = '',
  placeholder = '',
  shape = 'rect',
  fit = 'cover',
  className = '',
}) {
  const rounded = shape === 'circle' ? 'rounded-full' : '';
  const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover';

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full ${objectFit} ${rounded} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-lavender/60 p-3 text-center text-xs font-semibold text-muted-light ${rounded} ${className}`}
      role="img"
      aria-label={placeholder || 'Image placeholder'}
    >
      {placeholder}
    </div>
  );
}
