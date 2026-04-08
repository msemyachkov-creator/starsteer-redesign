import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { ChevronDown } from "lucide-react"

interface HeaderButtonProps {
  icon?: LucideIcon
  label: string
  hasDropdown?: boolean
  className?: string
  onClick?: () => void
}

export function HeaderButton({ icon: Icon, label, hasDropdown, className, onClick }: HeaderButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-[2px] justify-center px-[4px] py-[2px] rounded-[var(--radius-4)]",
        "max-w-[240px] min-w-[48px] shrink-0",
        "hover:bg-[var(--control-alt-secondary)] transition-colors",
        className
      )}
      onClick={onClick}
    >
      {Icon && (
        <Icon size={12} className="shrink-0 text-[var(--text-secondary)]" strokeWidth={1.5} />
      )}
      <span className="ss-general text-[var(--text-primary)] text-center flex-1 min-w-0">
        {label}
      </span>
      {hasDropdown && (
        <ChevronDown size={12} className="shrink-0 text-[var(--text-secondary)]" strokeWidth={1.5} />
      )}
    </button>
  )
}
