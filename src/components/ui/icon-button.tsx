import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface IconButtonProps {
  icon: LucideIcon
  size?: 12 | 16 | 20
  className?: string
  iconClassName?: string
  onClick?: () => void
  title?: string
}

export function IconButton({ icon: Icon, size = 16, className, iconClassName, onClick, title }: IconButtonProps) {
  const padding = size <= 12 ? "p-[2px]" : "p-[2px]"
  const iconSize = size <= 12 ? 12 : 16

  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-[var(--radius-4)] shrink-0 hover:bg-[var(--control-alt-secondary)] transition-colors",
        padding,
        className
      )}
      onClick={onClick}
      title={title}
    >
      <Icon
        size={iconSize}
        className={cn("text-[var(--text-secondary)]", iconClassName)}
        strokeWidth={1.5}
      />
    </button>
  )
}
