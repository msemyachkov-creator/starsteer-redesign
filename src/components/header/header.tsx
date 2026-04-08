import {
  Home,
  Plus,
  Undo2,
  Redo2,
  Calculator,

  Minus,
  Square,
  X,
} from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"
import { HeaderButton } from "@/components/ui/header-button"
import { Divider } from "@/components/ui/divider"
import { StarSteerLogo } from "./starsteer-logo"
import { WellPathIcon } from "@/components/icons/well-path-icon"
import { StarRatingIcon } from "@/components/icons/star-rating-icon"
import { ThemeToggleIcon } from "@/components/icons/theme-toggle-icon"

export function Header() {
  return (
    <div className="flex flex-col items-stretch w-full border-b border-[var(--stroke-control-secondary)] bg-white">
      {/* Row 1: Title bar */}
      <div className="flex items-center justify-between h-[32px] border-b border-[var(--stroke-control-secondary)] overflow-hidden">
        {/* Left: logo + app name */}
        <div className="flex items-center gap-[8px] h-full pl-[8px] max-w-[245px] shrink-0">
          <StarSteerLogo size={16} />
          <span className="ss-body text-[var(--text-primary)] whitespace-nowrap">
            GridInCP* - StarSteer
          </span>
        </div>

        {/* Right: window controls */}
        <div className="flex items-center gap-[8px] h-full pr-[8px] shrink-0">
          <IconButton icon={Minus} size={16} title="Minimize" />
          <IconButton icon={Square} size={16} title="Maximize" />
          <IconButton icon={X} size={16} title="Close" />
        </div>
      </div>

      {/* Row 2: Control bar */}
      <div className="flex items-center justify-between px-[8px] py-[2px]">
        {/* Left: main controls */}
        <div className="flex items-center gap-[4px] shrink-0">
          <IconButton icon={Home} size={12} title="Home" />
          <HeaderButton icon={Plus} label="Manage Windows" />
        </div>

        {/* Right: tools & actions */}
        <div className="flex items-center gap-[6px] shrink-0">
          {/* Undo / Redo */}
          <div className="flex items-center gap-[2px]">
            <IconButton icon={Undo2} size={12} title="Undo" iconClassName="-rotate-45" />
            <IconButton icon={Redo2} size={12} title="Redo" iconClassName="rotate-45" />
          </div>

          <Divider />

          {/* Tools */}
          <div className="flex items-center gap-[8px]">
            <IconButton icon={Calculator} size={12} title="Calculator" />
            <div className="relative flex items-center justify-center p-[2px]">
              <WellPathIcon size={12} />
              {/* Red dot indicator */}
              <div className="absolute top-[1px] right-[1px] w-[5px] h-[5px] rounded-full bg-[var(--color-red)]" />
            </div>
            <div className="flex items-center justify-center p-[2px]">
              <StarRatingIcon size={12} />
            </div>
          </div>

          <Divider />

          {/* Theme toggle */}
          <div className="flex items-center justify-center p-[2px]">
            <ThemeToggleIcon size={12} />
          </div>

          <Divider />

          {/* Actions */}
          <div className="flex items-center gap-[4px]">
            <HeaderButton label="Share" />
            <HeaderButton label="Solo Apps" hasDropdown />
            <HeaderButton label="About" />
          </div>
        </div>
      </div>
    </div>
  )
}
