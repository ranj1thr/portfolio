type Props = { size?: number; className?: string; variant?: 'mono' | 'circle' };

// X (Twitter) brand-like monogram
export function XIcon({ size = 24, className, variant = 'mono' }: Props) {
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
      <path
        fill="currentColor"
        d="M15.75 6H18l-4.47 5.11L18.5 18h-3l-3.2-3.87L8.5 18H6l4.83-5.53L6.25 6h3l2.87 3.47L15.75 6Z"
      />
    </svg>
  );
}

export default XIcon;
