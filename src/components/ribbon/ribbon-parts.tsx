import { ChevronDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTROL_HEIGHT, ROW_GAP } from "./geometry"

/** One 21 px row of controls inside a ribbon group. */
export function RibbonRow({
  children,
  gap = 6,
  className,
}: {
  children: React.ReactNode
  gap?: number
  className?: string
}) {
  return (
    <div
      className={cn("flex items-center", className)}
      style={{ height: CONTROL_HEIGHT, gap }}
    >
      {children}
    </div>
  )
}

/** A column of rows, 4 px apart, as the ribbon group stacks them. */
export function RibbonColumn({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col", className)} style={{ gap: ROW_GAP }}>
      {children}
    </div>
  )
}

/** Vertical rule between columns inside one group. */
export function RibbonSeparator() {
  return <div className="w-px self-stretch shrink-0 bg-[var(--stroke-divider)]" />
}

/**
 * A ribbon group: controls on top, the group name underneath.
 * The name is what tells Format from Fill, so it is part of the group, not a
 * caption someone adds later.
 */
export function RibbonGroup({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center px-[8px]", className)}>
      <div className="flex flex-1 items-start gap-[8px] pt-[6px]">{children}</div>
      <div className="ss-general pb-[4px] pt-[6px] text-[var(--text-tertiary)]">
        {label}
      </div>
    </div>
  )
}

/** Checkbox plus label, the shape every toggle row of the ribbon uses. */
export function RibbonCheckbox({
  checked,
  onChange,
  label,
  icon: Icon,
  iconClassName,
  hasDropdown,
  disabled,
  labelWidth,
}: {
  checked: boolean
  onChange?: (next: boolean) => void
  label: string
  icon?: LucideIcon
  iconClassName?: string
  hasDropdown?: boolean
  disabled?: boolean
  labelWidth?: number
}) {
  return (
    <label
      className={cn(
        "flex items-center gap-[4px] select-none",
        disabled ? "cursor-default" : "cursor-pointer"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-[14px] w-[14px] shrink-0 accent-[var(--control-accent-default)]"
      />
      {Icon && (
        <Icon
          size={14}
          strokeWidth={1.5}
          className={cn("shrink-0", iconClassName ?? "text-[var(--text-secondary)]")}
        />
      )}
      <span
        className={cn(
          "ss-general whitespace-nowrap",
          disabled ? "text-[var(--ribbon-disabled)]" : "text-[var(--ribbon-label)]"
        )}
        style={labelWidth ? { width: labelWidth } : undefined}
      >
        {label}
      </span>
      {hasDropdown && (
        <ChevronDown
          size={12}
          strokeWidth={1.5}
          className={cn(
            "shrink-0",
            disabled ? "text-[var(--ribbon-disabled)]" : "text-[var(--text-secondary)]"
          )}
        />
      )}
    </label>
  )
}
