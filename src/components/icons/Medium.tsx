/**
 * MediumIcon — simple brand-like glyph (three overlapping circles)
 * - Uses currentColor for fill so it inherits text color
 * - size prop controls width/height (defaults to 24)
 */
type Props = { size?: number; className?: string; variant?: 'mono' | 'circle' };

export function MediumIcon({ size = 24, className, variant = 'mono' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {variant === 'circle' && (
        <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      )}
      {/* Stylized "M" monogram glyph */}
      <path fill="currentColor" d="M6 18V6h2.25l3.1 7.2L14.5 6H18v12h-2.3V9.9L12.6 18h-1.2L8.3 9.9V18H6z" />
    </svg>
  );
}

export default MediumIcon;
