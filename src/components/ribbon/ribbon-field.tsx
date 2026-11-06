import { cn } from "@/lib/utils"
import { CONTROL_HEIGHT, FIELD_PADDING_X } from "./geometry"

interface RibbonFieldProps {
  value: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
  "aria-label"?: string
}

/**
 * Numeric text input of the legacy ribbon.
 *
 * The padding is the point of this component. In the units prototype the line
 * edit has none at all: the text block starts on the inner edge of the frame,
 * so the only air left is the side bearing of whichever digit happens to come
 * first, and a long value is cut mid-glyph by the border. Here the value keeps
 * FIELD_PADDING_X on both sides whatever it is.
 */
export function RibbonField({
  value,
  onChange,
  disabled,
  className,
  "aria-label": ariaLabel,
}: RibbonFieldProps) {
  return (
    <input
      type="text"
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        height: CONTROL_HEIGHT,
        paddingLeft: FIELD_PADDING_X,
        paddingRight: FIELD_PADDING_X,
      }}
      className={cn(
        "ss-general box-border rounded-[var(--radius-4)]",
        "border border-[var(--ribbon-field-border)] bg-[var(--ribbon-field-bg)]",
        "text-[var(--ribbon-value)] outline-none",
        "focus:border-[var(--control-accent-default)]",
        "disabled:bg-[var(--ribbon-disabled-bg)] disabled:text-[var(--ribbon-disabled)]",
        className
      )}
    />
  )
}
