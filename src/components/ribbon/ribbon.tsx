import { cn } from "@/lib/utils"
import { LogFormatTab } from "./log-format-tab"
import type { LogState } from "./logs"

const TABS = [
  "File",
  "Geosteering view",
  "Data",
  "Mode",
  "Calculator",
  "Log format",
  "Operations",
] as const

const ACTIVE_TAB = "Log format"

interface RibbonProps {
  log: LogState
  onChange: (next: LogState) => void
}

export function Ribbon({ log, onChange }: RibbonProps) {
  return (
    <div className="flex w-full flex-col border-b border-[var(--stroke-control-secondary)] bg-white">
      {/* Tab strip */}
      <div className="flex items-end gap-[2px] px-[8px]">
        {TABS.map((tab) => {
          const active = tab === ACTIVE_TAB
          return (
            <div
              key={tab}
              className={cn(
                "ss-general-strong flex h-[26px] items-center px-[16px] whitespace-nowrap",
                "rounded-t-[var(--radius-4)]",
                active
                  ? "bg-[var(--surface-solid-base)] text-[var(--ribbon-label)]"
                  : "text-[var(--text-secondary)]"
              )}
            >
              {tab}
            </div>
          )
        })}
      </div>

      {/* Tab body */}
      <div className="flex min-h-[96px] items-stretch overflow-x-auto border-t border-[var(--stroke-divider)]">
        <LogFormatTab log={log} onChange={onChange} />
      </div>
    </div>
  )
}
