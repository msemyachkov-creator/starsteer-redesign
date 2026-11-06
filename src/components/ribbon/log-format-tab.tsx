import { useState } from "react"
import { Minus, Circle, Palette, Type, PaintBucket } from "lucide-react"
import { RangeRow } from "./range-row"
import {
  RibbonCheckbox,
  RibbonColumn,
  RibbonGroup,
  RibbonRow,
  RibbonSeparator,
} from "./ribbon-parts"
import type { LogState } from "./logs"

interface LogFormatTabProps {
  log: LogState
  onChange: (next: LogState) => void
}

/**
 * LOG FORMAT, the two groups the Min/Max row lives in.
 *
 * Only Format and Fill are built here. The rest of the tab is untouched by
 * STARSTEER-32971, and showing what does not change only distracts a review.
 */
export function LogFormatTab({ log, onChange }: LogFormatTabProps) {
  const [line, setLine] = useState(true)
  const [point, setPoint] = useState(false)
  const [discrete, setDiscrete] = useState(false)
  const [numeral, setNumeral] = useState(false)
  const [solid, setSolid] = useState(false)
  const [palette, setPalette] = useState(false)

  const unit = discrete ? null : log.unit

  return (
    <div className="flex items-stretch">
      <RibbonGroup label="Format">
        <RibbonColumn>
          <RibbonRow>
            <RibbonCheckbox
              checked={line}
              onChange={setLine}
              label="Line"
              icon={Minus}
              iconClassName="text-[var(--color-success)]"
              hasDropdown
              labelWidth={32}
            />
          </RibbonRow>
          <RibbonRow>
            <RibbonCheckbox
              checked={point}
              onChange={setPoint}
              label="Point"
              icon={Circle}
              iconClassName="text-[var(--color-yellow)]"
              hasDropdown
              labelWidth={32}
            />
          </RibbonRow>
          <RibbonRow>
            <RangeRow
              min={log.min}
              max={log.max}
              unit={unit}
              onMinChange={(min) => onChange({ ...log, min })}
              onMaxChange={(max) => onChange({ ...log, max })}
              minLabel="Scale minimum"
              maxLabel="Scale maximum"
            />
          </RibbonRow>
        </RibbonColumn>

        <RibbonSeparator />

        <RibbonColumn>
          <RibbonRow>
            <RibbonCheckbox
              checked={discrete}
              onChange={setDiscrete}
              label="Discrete"
              labelWidth={56}
            />
          </RibbonRow>
          <RibbonRow>
            <RibbonCheckbox checked={false} disabled label="" icon={Type} />
          </RibbonRow>
          <RibbonRow>
            <RibbonCheckbox
              checked={numeral}
              onChange={setNumeral}
              label="Numeral"
              hasDropdown
              labelWidth={56}
            />
          </RibbonRow>
        </RibbonColumn>
      </RibbonGroup>

      <RibbonSeparator />

      <RibbonGroup label="Fill">
        <RibbonColumn>
          <RibbonRow>
            <RibbonCheckbox
              checked={solid}
              onChange={setSolid}
              label="Solid color"
              icon={PaintBucket}
              hasDropdown
              labelWidth={62}
            />
          </RibbonRow>
          <RibbonRow>
            <RibbonCheckbox
              checked={palette}
              onChange={setPalette}
              label="Palette"
              icon={Palette}
              hasDropdown
              labelWidth={62}
            />
          </RibbonRow>
          <RibbonRow>
            <RangeRow
              min={log.fillMin}
              max={log.fillMax}
              unit={unit}
              onMinChange={(fillMin) => onChange({ ...log, fillMin })}
              onMaxChange={(fillMax) => onChange({ ...log, fillMax })}
              minLabel="Fill minimum"
              maxLabel="Fill maximum"
            />
          </RibbonRow>
        </RibbonColumn>
      </RibbonGroup>
    </div>
  )
}
