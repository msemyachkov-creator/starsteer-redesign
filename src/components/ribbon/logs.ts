/**
 * The three logs of StarSteer_sample_project the Min/Max row was measured on,
 * kept here so the row can be seen in all three unit cases without a project.
 * Values are the ones the prototype shows for them.
 */
export interface LogState {
  id: string
  name: string
  /** null means a Unitless log: the fields take the unit's place. */
  unit: string | null
  min: string
  max: string
  fillMin: string
  fillMax: string
}

export const SAMPLE_LOGS: LogState[] = [
  {
    id: "gamma",
    name: "Gamma",
    unit: "gAPI",
    min: "0",
    max: "150",
    fillMin: "0",
    fillMax: "150",
  },
  {
    id: "resistivity-shallow",
    name: "Resistivity Shallow",
    unit: "ohm.m",
    min: "0",
    max: "2000",
    fillMin: "0.8",
    fillMax: "2000",
  },
  {
    id: "total-gas",
    name: "Total Gas",
    unit: null,
    min: "0",
    max: "2000",
    fillMin: "0",
    fillMax: "2000",
  },
]
