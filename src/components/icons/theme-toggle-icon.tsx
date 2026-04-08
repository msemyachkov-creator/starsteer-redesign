interface ThemeToggleIconProps {
  size?: number
  className?: string
}

export function ThemeToggleIcon({ size = 12, className }: ThemeToggleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9.555 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.48 7.898a5.08 5.08 0 01-.425-.716A4.99 4.99 0 01.005 7.076C-.011 7.04.015 7 .055 7c.04 0 .08-.001.12-.002a4.5 4.5 0 00.815-.095l.04-.01C3.047 6.448 4.555 4.65 4.555 2.5c0-.644-.135-1.256-.379-1.81C4.04.38 4.216 0 4.555 0c2.761 0 5 2.239 5 5s-2.239 5-5 5a4.993 4.993 0 01-4.016-2.021 5.362 5.362 0 01-.06-.081zM1.661 7.762A4.001 4.001 0 004.555 9c2.209 0 4-1.791 4-4 0-1.93-1.366-3.54-3.185-3.917A5.51 5.51 0 015.555 2.5c0 2.479-1.64 4.575-3.894 5.262z"
        fill="var(--text-secondary, rgba(34,59,78,0.8))"
      />
    </svg>
  )
}
