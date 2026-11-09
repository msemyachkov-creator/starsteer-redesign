# LOG FORMAT | Units — Min/Max row geometry

Concept spec for **STARSTEER-32971** (`[DES] OBJECTS | Units`), the design subtask of
**STARSTEER-32970** (`[AN] OBJECTS | Units`, epic STARSTEER-9465, article REQ 6701252611).

Written to the rules on
[StarSteer Vibecoding Decisions](https://starsteer.atlassian.net/wiki/spaces/DESIGN/pages/6613336083/StarSteer+Vibecoding+Decisions):
decision 2 (measure before coding), decision 3 (branch off the branch compared against),
decision 4 (this file).

## 0. Base

| What | Value |
| --- | --- |
| Compared against | `STARSTEER-32970-units-prototype`, commit `c360c6bca2f` (base master `af92564b2f2`) |
| Prototype build measured | `2027.0.14406804 c360c6bc`, job 14406804, installed in `C:\Program Files\StarSteer\27.0` |
| Release build measured | `2027.0.32 82bda6e1`, installed in `C:\Program Files\StarSteer\Prototype` |
| Concept branch (this work) | `STARSTEER-32971-log-format-min-max` in the design repo `msemyachkov-creator/starsteer-redesign`, commit `ce02ecc` |
| Project used | `StarSteer_sample_project`, logs Gamma / Resistivity Shallow / Total Gas of well Doha Qatar |
| Mockup | Figma frame "LOG FORMAT: unit after Min/Max and Fill min/max, the fields give it their width" (20522:7865 / 20563:9598) |

The concept is a **web prototype**, not a branch of the product repository: it reproduces the
ribbon row in React at the exact pixel geometry so the numbers can be agreed before anyone
touches C++. The product-side change, when it is wanted, is a separate Team Vibe task.

> **Note on the base.** The prototype is built from a master about five days newer than the
> release build, so a difference between the two builds is not proof that the prototype
> introduced it. Every finding below was cross-checked against the integration list in the
> analyst's context file `2026-11-02-objects-units-prototype-context.md`.

## 1. B0 — what the code does today

Measured on the two installed builds by scanning pixels in window captures; control
measurements of the React build taken with `getBoundingClientRect`. Both sides agree.

### Format group, Min/Max row

| Build and case | Row width | Min / Max fields | Space left of the right frame |
| --- | --- | --- | --- |
| Release, no unit shown | 130 px | 50 / 51 px | — |
| Prototype, unit `gAPI` | 130 px | 36 / 37 px | — |
| Prototype, unit `ohm.m` | 130 px | 30 / 30 px | **2 px** after `2000` |
| Prototype, unitless log | 130 px | 50 / 51 px | — |

The Fill group's min/max row measures identically in every case.

**The mechanism is right, the numbers are not.** The prototype already keeps the row at one
constant width whatever the unit is — the unit's place is reserved and the fields give it
their width, exactly as the mockup asks. What it does not do is widen the row: the unit was
inserted into the release's 130 px, so the fields paid for it. With `ohm.m` a value of
`2000` clears the frame by 2 px and a seven-digit value is cut mid-glyph with no ellipsis.

Internal padding of the field is effectively zero: the value starts 2 px from the inner edge
of the frame, and the selection highlight begins on the frame itself.

### Other places the unit appears

Verified by A/B against the release build; all of them are on the analyst's integration list.

| Element | Release | Prototype |
| --- | --- | --- |
| Ribbon group `Data` | one large `Log spreadsheet` button | small `Log spreadsheet` row plus `Unit` combo, 91 px |
| `LOG FAMILY FORMAT` | no `Data` group | `Unit` combo, **102 px** — 11 px wider than the same control one tab away |
| `MD range` min/max | `min` / `max` centred in 49 px fields | same 49 px fields with `ft` painted **inside** |
| Unit list | — | 127 symbols in ~25 quantity groups, popup 917 px tall |
| Track headers | `GAMMA` | `GAMMA gAPI` — unit upright, name bold italic |
| Log spreadsheet headers | `MD` / `ROP` | `MD ft` / `Gamma gAPI` |
| Object tree tooltip | 39×30, name only | 137×78, name + `Unit: gAPI (determined automatically)` |
| LAS Import, `Unit` column | read-only text, raw spelling, 100 px | editable combo, normalized spelling, 140 px |
| `Change unit` dialog | does not exist | 518×177, buttons 80 / 85 / 80 × 26 px |

## 2. Concepts

Only one concept is implemented; it follows the mockup literally. If the review wants a
second one, it becomes a variant group in the **Design Switcher** rather than another build —
baseline `V0` is the measured prototype state in the table above.

### V0 — baseline: the prototype as built

Row 130 px, fields 36/37 · 30/30 · 50/51, no internal padding. The control sample.

### V1 — the mockup geometry (this concept)

| Token | Value |
| --- | --- |
| `RANGE_ROW_WIDTH` | 179 |
| `RANGE_ROW_GAP` | 4 |
| `FIT_BUTTON_SIZE` | 20 |
| `CONTROL_HEIGHT` | 21 (19 content + 2 × 1 px border) |
| `ROW_GAP` | 4 |
| `FIELD_PADDING_X` | 4 |

The row keeps one width (179 px) in every case; the two fields are flex children that share
whatever the unit leaves, so the ribbon never jumps when the selection changes. Measured in
the built concept: `gAPI` 60 / 61, `ohm.m` 55 / 55, unitless 76 / 75 px, with 22 px of slack
to the right of `2000` in the `ohm.m` case.

**Why 179 and not "whatever fits".** Maxim's rule of 05.11: the mockup's row width is law and
the field width follows from it. Checked with the parallel session against the task notes —
the 60 px of the `gAPI` case is derived from 179, not the other way round. If the review
decides otherwise, one number in `src/components/ribbon/geometry.ts` changes.

## 3. Where the code is

| Part | File |
| --- | --- |
| Geometry constants | `src/components/ribbon/geometry.ts` |
| The row itself | `src/components/ribbon/range-row.tsx` |
| Field control | `src/components/ribbon/ribbon-field.tsx` |
| Ribbon primitives | `src/components/ribbon/ribbon-parts.tsx` |
| LOG FORMAT tab | `src/components/ribbon/log-format-tab.tsx` |
| Sample logs as data | `src/components/ribbon/logs.ts` |
| Legacy ribbon colours | `src/styles/theme.css`, the `--ribbon-*` block |

The `--ribbon-*` variables carry raw values on purpose: they are the colours of the shipping
ribbon and of the Figma frames, so the row can be compared with a product screenshot pixel
for pixel. Replacing them with redesign tokens would make that comparison meaningless.

## 4. Acceptance criteria

1. The Min/Max row is 179 px wide for a log with a unit, for a log without one, and while the
   selection changes between them — the row never changes width.
2. With `gAPI` the fields measure 60 / 61 px; with `ohm.m`, 55 / 55; with no unit, 76 / 75.
3. `2000` in the `ohm.m` Max field clears the right frame by at least 16 px.
4. Field height is 21 px and the value starts 4 px from the inner edge of the frame.
5. The Fill group's min/max row is built from the same component and measures the same.
6. `vite build` and `tsc --noEmit` pass.

Items 1–5 were verified by pixel measurement of the running concept; item 6 on every commit.

## 5. Open points

- **Unit combo width.** 91 px on `LOG FORMAT`, 102 px on `LOG FAMILY FORMAT`. One width has to
  win and become a constant; neither looks chosen on purpose. Not decided.
- **Where the unit sits.** Outside the field in Format and Fill, inside the field in
  `MD range`. One rule has to apply in both; by the mockup it is the label outside.
- **The unit list.** 127 entries, no visible search affordance, no group headings, popup
  clipped by screen height with the last row sliced mid-glyph, `%` listed twice under two
  quantities. Needs a design pass of its own.
- **`Cutoff`.** The unit on `Cutoff` is in the analyst's list but the field stays disabled
  while `Fill in` is `Track to Log`, so it was not measured.

## 6. Not verified live

- Disabled states of the `Unit` field — discrete, locked, dynamic and resistivity logs.
  `Discrete` is greyed out for a continuous log, locked objects need Solo, and no dynamic log
  was found in the sample project. Needs the analyst's `docs/prototypes/las-units/` files.
- The calculator's `Input logs have different units` dialog: only one log name resolves in
  formulas in this project, so a two-log formula cannot be built.
- Typelog fill legend and `Log to Attribute`.
