import { useState } from "react"
import { Header } from "@/components/header/header"
import { ObjectTree } from "@/components/sidebar/object-tree"
import { Ribbon } from "@/components/ribbon/ribbon"
import { SAMPLE_LOGS, type LogState } from "@/components/ribbon/logs"
import { cn } from "@/lib/utils"

export default function App() {
  const [logs, setLogs] = useState<LogState[]>(SAMPLE_LOGS)
  const [selectedId, setSelectedId] = useState(SAMPLE_LOGS[1].id)

  const selected = logs.find((l) => l.id === selectedId) ?? logs[0]

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <Header />
      <Ribbon
        log={selected}
        onChange={(next) =>
          setLogs((prev) => prev.map((l) => (l.id === next.id ? next : l)))
        }
      />
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar */}
        <ObjectTree />
        {/* Main content area: log picker, standing in for the object tree selection */}
        <div className="flex-1 overflow-auto bg-[var(--surface-2)] p-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="ss-general text-[var(--text-tertiary)]">
              Selected log — the ribbon above follows it.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {logs.map((log) => (
                <button
                  key={log.id}
                  type="button"
                  onClick={() => setSelectedId(log.id)}
                  className={cn(
                    "ss-general rounded-[var(--radius-4)] border px-[8px] py-[4px]",
                    log.id === selectedId
                      ? "border-[var(--control-accent-default)] bg-white text-[var(--ribbon-label)]"
                      : "border-[var(--stroke-control-secondary)] bg-[var(--control-main-default)] text-[var(--text-secondary)]"
                  )}
                >
                  {log.name}
                  <span className="ml-[4px] text-[var(--ribbon-unit)]">
                    {log.unit ?? "Unitless"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
