import { cn } from "@/lib/utils"
import { ChevronRight, PanelRight } from "lucide-react"
import { useState } from "react"

interface SectionHeaderProps {
  title: string
  collapsible?: boolean
  defaultOpen?: boolean
  action?: React.ReactNode
  children?: React.ReactNode
}

export function SectionHeader({
  title,
  collapsible = true,
  defaultOpen = true,
  action,
  children,
}: SectionHeaderProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-[4px] h-[24px] px-[8px] bg-[var(--surface-tertiary)]",
          "border-b border-[var(--stroke-surface-secondary)]",
          collapsible && "cursor-pointer"
        )}
        onClick={() => collapsible && setOpen(!open)}
      >
        {collapsible && (
          <ChevronRight
            size={10}
            className={cn(
              "shrink-0 text-[var(--text-tertiary)] transition-transform",
              open && "rotate-90"
            )}
            strokeWidth={2}
          />
        )}
        <span className="ss-general text-[var(--text-primary)] flex-1 truncate">
          {title}
        </span>
        {action}
      </div>
      {open && children}
    </div>
  )
}
