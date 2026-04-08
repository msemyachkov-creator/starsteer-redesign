interface StarSteerLogoProps {
  size?: number
}

export function StarSteerLogo({ size = 16 }: StarSteerLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Orange Part — bottom */}
      <path
        d="M8 11L3 15L5 9.5L0.5 6.5H6.5L8 1L9.5 6.5H15.5L11 9.5L13 15L8 11Z"
        fill="#FF671D"
        opacity="0.9"
      />
      {/* Candlelight Part — top accent */}
      <path
        d="M8 1L9.5 6.5H15.5L11 9.5L13 15L8 11L3 15L5 9.5L0.5 6.5H6.5L8 1Z"
        fill="#FFDB1D"
        opacity="0.7"
      />
    </svg>
  )
}
