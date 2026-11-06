/**
 * LOG FORMAT ribbon geometry — STARSTEER-32971.
 *
 * Numbers come from the Figma frame "LOG FORMAT: unit after Min/Max and Fill
 * min/max, the fields give it their width" (20522:7865 / 20563:9598), not from
 * the shipping product: the units prototype 2027.0.14406804 builds the same row
 * 130 px wide, which squeezes the fields until the value touches the frame.
 *
 * The rule of the mockup: the row keeps ONE width whatever the unit is. The
 * unit's place is reserved, so the fields give it their width and the ribbon
 * never jumps when the selected log changes. The two fields simply share
 * whatever the unit leaves — that is why they are flex children here and not
 * fixed widths: with gAPI they land on 60 / 60, with no unit on 76 / 75, and a
 * wider unit such as ohm.m narrows them without touching the row.
 */

/** Total width of the Min/Max row, from the left frame of Min to the right frame of the fit button. */
export const RANGE_ROW_WIDTH = 179

/** Gap between every pair of controls inside the row. */
export const RANGE_ROW_GAP = 4

/** Fit-to-range button, square. */
export const FIT_BUTTON_SIZE = 20

/** Control height of the legacy ribbon: 19 px of content plus two 1 px borders. */
export const CONTROL_HEIGHT = 21

/** Vertical gap between rows inside a ribbon group. */
export const ROW_GAP = 4

/** Space between the field frame and the first glyph of the value. */
export const FIELD_PADDING_X = 4
