import { Scan } from "lucide-react"
import { cn } from "@/lib/utils"
import { RibbonField } from "./ribbon-field"
import {
  CONTROL_HEIGHT,
  FIT_BUTTON_WIDTH,
  RANGE_ROW_GAP,
  RANGE_ROW_WIDTH,
} from "./geometry"

interface RangeRowProps {
  min: string
  max: string
  /** Unit of the selected log, or null for a Unitless log. */
  unit: string | null
  onMinChange?: (value: string) => void
  onMaxChange?: (value: string) => void
  onFit?: () => void
  minLabel?: string
  maxLabel?: string
  className?: string
}

/**
 * Min / Max row used by the Format group and, unchanged, by Fill min/max.
 *
 * Both fields are flex children with min-width 0, so they share the space the
 * unit leaves and the row holds RANGE_ROW_WIDTH in every case:
 *   gAPI   → 60 · 4 · 60 · 4 · 27 · 4 · 20
 *   none   → 76 · 4 · 75 · 4 · 20
 * A wider unit (ohm.m) narrows the fields instead of widening the row, which
 * is what keeps the ribbon from jumping when the selection changes.
 */
export function RangeRow({
  min,
  max,
  unit,
  onMinChange,
  onMaxChange,
  onFit,
  minLabel = "Minimum",
  maxLabel = "Maximum",
  className,
}: RangeRowProps) {
  return (
    <div
      className={cn("flex items-center", className)}
      style={{ width: RANGE_ROW_WIDTH, gap: RANGE_ROW_GAP, height: CONTROL_HEIGHT }}
    >
      <RibbonField
        value={min}
        onChange={onMinChange}
        aria-label={minLabel}
        className="flex-1 min-w-0"
      />
      <RibbonField
        value={max}
        onChange={onMaxChange}
        aria-label={maxLabel}
        className="flex-1 min-w-0"
      />
      {unit && (
        <span className="ss-general shrink-0 whitespace-nowrap text-[var(--ribbon-unit)]">
          {unit}
        </span>
      )}
      <button
        type="button"
        onClick={onFit}
        title="Reset scale to the log range"
        style={{ width: FIT_BUTTON_WIDTH, height: CONTROL_HEIGHT }}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-[var(--radius-4)]",
          "bg-[var(--control-main-tertiary)] hover:bg-[var(--control-alt-secondary)] transition-colors"
        )}
      >
        <Scan size={12} strokeWidth={1.5} className="text-[var(--text-secondary)]" />
      </button>
    </div>
  )
}
