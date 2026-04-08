import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
  orientation?: "vertical" | "horizontal"
}

export function Divider({ className, orientation = "vertical" }: DividerProps) {
  if (orientation === "horizontal") {
    return (
      <div className={cn("w-full px-[1px] py-[2px]", className)}>
        <div className="h-px w-full bg-[var(--stroke-divider)]" />
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col h-[20px] px-[2px] py-px shrink-0", className)}>
      <div className="flex-1 w-px bg-[var(--stroke-divider)]" />
    </div>
  )
}
