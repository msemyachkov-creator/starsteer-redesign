import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface TreeItemProps {
  label: string
  icon?: LucideIcon
  iconColor?: string
  depth?: number
  hasChildren?: boolean
  defaultOpen?: boolean
  selected?: boolean
  checkbox?: boolean
  checked?: boolean
  bold?: boolean
  children?: React.ReactNode
}

export function TreeItem({
  label,
  icon: Icon,
  iconColor,
  depth = 0,
  hasChildren = false,
  defaultOpen = false,
  selected = false,
  checkbox = false,
  checked = true,
  bold = false,
  children,
}: TreeItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-[2px] h-[20px] cursor-pointer hover:bg-[var(--control-alt-secondary)]",
          selected && "bg-[var(--rogii-azure)] bg-opacity-10"
        )}
        style={{ paddingLeft: `${8 + depth * 12}px` }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {/* Chevron or spacer */}
        {hasChildren ? (
          <ChevronRight
            size={10}
            className={cn(
              "shrink-0 text-[var(--text-tertiary)] transition-transform",
              open && "rotate-90"
            )}
            strokeWidth={2}
          />
        ) : (
          <div className="w-[10px] shrink-0" />
        )}

        {/* Checkbox */}
        {checkbox && (
          <div className={cn(
            "w-[10px] h-[10px] rounded-[2px] border shrink-0 flex items-center justify-center",
            checked
              ? "bg-[var(--control-accent-default)] border-[var(--control-accent-default)]"
              : "bg-[var(--control-main-tertiary)] border-[var(--stroke-control-default)]"
          )}>
            {checked && (
              <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                <path d="M1 2.5L2.5 4L6 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        )}

        {/* Icon */}
        {Icon && (
          <Icon size={12} className="shrink-0" style={{ color: iconColor || 'var(--text-tertiary)' }} strokeWidth={1.5} />
        )}

        {/* Label */}
        <span
          className={cn(
            "ss-general truncate",
            bold ? "font-semibold text-[var(--text-primary)]" : "text-[var(--text-primary)]",
            selected && "text-[var(--rogii-azure)]"
          )}
        >
          {label}
        </span>
      </div>

      {/* Children */}
      {open && children && (
        <div>{children}</div>
      )}
    </div>
  )
}
