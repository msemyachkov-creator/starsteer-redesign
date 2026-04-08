import { Search, PanelRight, Columns2, List, SlidersHorizontal, LayoutGrid } from "lucide-react"
import { IconButton } from "@/components/ui/icon-button"
import { TreeItem } from "./tree-item"
import { SectionHeader } from "./section-header"
import {
  GitBranch, FileText, Layers, Activity, BarChart3, TrendingUp,
  Target, Circle, ArrowUpDown
} from "lucide-react"

export function ObjectTree() {
  return (
    <div className="flex flex-col h-full w-[160px] bg-white border-r border-[var(--stroke-surface-secondary)] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-[2px] h-[24px] px-[8px] bg-[var(--surface-tertiary)] border-b border-[var(--stroke-surface-secondary)] shrink-0">
        <span className="ss-general text-[var(--text-primary)] flex-1 truncate">
          Object Tree
        </span>
        <IconButton icon={PanelRight} size={12} />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-[2px] px-[4px] py-[2px] border-b border-[var(--stroke-divider)] shrink-0">
        <IconButton icon={Columns2} size={12} />
        <IconButton icon={List} size={12} />
        <IconButton icon={SlidersHorizontal} size={12} />
        <IconButton icon={LayoutGrid} size={12} />
      </div>

      {/* Search */}
      <div className="px-[6px] py-[4px] border-b border-[var(--stroke-divider)] shrink-0">
        <div className="flex items-center gap-[4px] h-[20px] px-[6px] bg-[var(--control-main-tertiary)] rounded-[var(--radius-4)]">
          <Search size={10} className="shrink-0 text-[var(--text-tertiary)]" strokeWidth={1.5} />
          <span className="ss-caption text-[var(--text-disabled)]">Search...</span>
        </div>
      </div>

      {/* Tree content — scrollable */}
      <div className="flex-1 overflow-y-auto ss-scrollbar">
        {/* Wells section */}
        <SectionHeader title="Wells" defaultOpen>
          <TreeItem label="Well1_90_1" hasChildren defaultOpen selected depth={0} checkbox checked>
            <TreeItem label="1" hasChildren defaultOpen depth={1}>
              <TreeItem label="QWER" hasChildren defaultOpen bold depth={2}>
                <TreeItem label="ZH Plan" depth={3} checkbox checked />
                <TreeItem label="TOT" depth={3} checkbox checked />
                <TreeItem label="TOT" depth={3} checkbox checked />
                <TreeItem label="GRAXnelog" depth={3} checkbox checked />
                <TreeItem label="MUDWTOUT" depth={3} checkbox checked />
                <TreeItem label="GRAX" depth={3} checkbox checked />
                <TreeItem label="ROP_AVG" depth={3} checkbox checked />
                <TreeItem label="GRAZUPHOLELIARED" depth={3} checkbox checked />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </SectionHeader>

        {/* Group Tree section */}
        <SectionHeader title="Group Tree" defaultOpen>
          <TreeItem label="Well Attributes" hasChildren depth={0} />
          <TreeItem label="Well Lists" depth={0} />
          <div className="h-[1px] bg-[var(--stroke-divider)] mx-[4px] my-[2px]" />
          <TreeItem label="Interpretations" hasChildren defaultOpen depth={0}>
            <TreeItem label="QWER" hasChildren defaultOpen depth={1} checkbox checked>
              <TreeItem label="2C" depth={2} checkbox checked />
              <TreeItem label="Upper Buffer" depth={2} checkbox checked />
              <TreeItem label="Target Top" depth={2} checkbox checked iconColor="var(--rogii-orange)" />
              <TreeItem label="TOPB" depth={2} checkbox checked />
              <TreeItem label="TCL" depth={2} checkbox checked />
              <TreeItem label="Target Base" depth={2} checkbox checked iconColor="var(--rogii-orange)" />
            </TreeItem>
          </TreeItem>
        </SectionHeader>

        {/* Template Library section */}
        <SectionHeader title="Template Library" defaultOpen>
          <div className="px-[8px] py-[2px]">
            <span className="ss-general text-[var(--text-primary)]">
              Correlation Panel Layouts
            </span>
          </div>
        </SectionHeader>
      </div>
    </div>
  )
}
