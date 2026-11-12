# Module template and notation conventions

Every weekly module follows this file. It fixes the sections, the way tracker
data appears on the page, and the voice. The site's components
(`loom:site-components`) render the notation blocks defined here.

Drafted 2026-11-12.

## 1. File and front matter

One Markdown file per week at `course/week-NN-slug.md`.

```yaml
---
title: "Time, groove and polyrhythm"
week: 5
strand: rhythm            # foundations | sound | rhythm | composition | form | production | capstone
outcomes: [4]             # course outcome numbers from the syllabus
needs: [1, 4]             # prerequisite weeks
duration_target: "56 bars"
repeat_budget: 3
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "26-27, 69-72, 81"
---
```

No author or contact fields, here or anywhere.

## 2. Sections, in this order

Each module has these ten second-level headings, with these names, so that
the printed reader and the in-page contents line up across weeks.

| # | Heading | Contents | Length guide |
|---|---------|----------|--------------|
| 1 | Overview | Two or three sentences: what this week adds and why it matters for longer pieces. Then the outcomes as a short list, each starting with a verb. | 150 words |
| 2 | Before you start | Prerequisite weeks, what to have open (project, instruments from earlier weeks), manual pages to read. | 100 words |
| 3 | Concepts | The teaching text. Three to six third-level sections, each one idea, each ending in something to try on the unit in under five minutes. | 1,500-2,500 words |
| 4 | Worked examples | Two or three complete, small examples in notation blocks, with the reasoning for every non-obvious value. | 600-1,000 words |
| 5 | Lab | Numbered tasks with a stated product (a patch, a groove, a table of results). Includes any bench tests assigned to the week. | 1 h 45 min of work |
| 6 | Etude | The brief, the constraints, the duration target, the repeat budget, and what the one-page plan must contain. | 2 h of work |
| 7 | Listening review | The protocol, plus three or four questions specific to this week. | 30 min of work |
| 8 | Rubric | The four course criteria with descriptors written for this week's etude. | one table |
| 9 | Going further | Optional extensions and what to listen to or read, described in words. | 150 words |
| 10 | Summary | The week in five or six lines, and what next week builds on. | 100 words |

A whole module runs to roughly 3,500-5,000 words.

## 3. Voice

- Address the learner as "you". Direct, plain, no cheerleading.
- Assume fluent music theory and programming. Use the terms of both without
  defining them: "least common multiple", "invertible counterpoint",
  "modulation index". Define tracker and M8 terms on first use in each
  module, in a few words.
- Give the reason with the instruction. "Set B's ratio to 3.50, so the
  partials fall between the harmonics" beats "set B to 3.50".
- Prefer one worked case to three described ones.
- Keep paragraphs short. A learner reads this with the unit in hand.
- British spelling.

### Honesty rules

- **Untried values.** A parameter value that nobody has tried on a unit gets
  presented as a starting point: "start near 40 and adjust by ear". No
  module claims a patch "sounds like" anything until someone has heard it.
- **Sources.** A claim about how the instrument behaves cites the manual
  page, or the changelog version, by way of `docs/manual-notes.md`. A claim
  the notes mark [untested] appears in the module as a bench test or with
  the words "check this on your unit".
- **Arithmetic gets shown.** Tick sums, cycle lengths and ratios appear with
  their working, so an error can be found.
- **Hardware.** Assume a standard unit and the manual's key names. Where
  headless might differ, add a headless note (section 5.8). Nothing specific
  to any one host device or display client.
- **The manual stays the manual's.** Cite and paraphrase; do not copy its
  sentences or reproduce its figures.

## 4. Keys and values

- Keys in square brackets and capitals, as in the manual: [SHIFT], [OPTION],
  [EDIT], [PLAY], [UP], [DOWN], [LEFT], [RIGHT]. Combinations with a plus:
  [SHIFT]+[OPTION]. A sequence with "then": [SHIFT]+[OPTION] then [EDIT].
- Values are hexadecimal, two digits, capitals: `0C`, `7F`. Where the decimal
  matters, give it once in brackets: `60` (96).
- Commands as three capitals and a value: `GRV 01`, `HOP 0B`, `RET 43`.
- View names capitalised as on the unit: Song, Chain, Phrase, Table, Groove,
  Instrument.
- Parameter names in capitals as on the unit: RATIO, CUTOFF, TABLE TIC.
- Notes as the unit shows them: `C-4`, `D#4`, `A#3`.
- Tracks numbered 1 to 8. Rows numbered in hex from `0`.

## 5. Notation blocks

Tracker data goes in fenced code blocks with a language tag. The raw
Markdown stays readable as plain text; the site renders each tag as a styled
grid, and print keeps them unbroken across pages where it can.

One page convention differs from the screen: **an empty cell prints as a
dot** (`.`), so that the data stands out. On the unit empty cells show as
dashes.

Every block may start with a title line beginning `#`, and may carry
comments after `;` on any row.

### 5.1 Phrase

Columns: row, note, volume, instrument, then up to three commands.

````
```phrase
# PHRASE 12  (track 2, hats in triplets)
0  C-4 64 03  GRV 01   .        .
1  C-4 40 03  .        .        .
2  C-4 40 03  .        .        .
3  .   .  .   .        .        .      ; skipped by the groove
4  C-4 64 03  .        .        .
```
````

Rows not shown are empty. Show all sixteen rows only when the empty ones
matter. `OFF` in the note column marks a note-off.

### 5.2 Chain

Columns: row, phrase, transpose.

````
```chain
# CHAIN 05
0  12 00
1  12 00
2  13 00
3  12 05      ; up a fourth
```
````

### 5.3 Song

Columns: row, then the chain number for each of the eight tracks. Label the
tracks in the title line or a comment.

````
```song
# SONG   1  2  3  4  5  6  7  8
00       01 05 .  .  .  .  .  .     ; A  (8 bars)
01       01 05 09 .  .  .  .  .     ; A' bass enters
02       02 06 09 .  .  .  .  .     ; B
```
````

Section letters and bar counts go in the comments, so the block doubles as a
score outline.

### 5.4 Table

Columns: row, transpose, volume, then up to three commands. State the tick
rate in the title.

````
```table
# TABLE 03  (TIC 01, kick pitch drop)
0  0C .   .        .        .
1  07 .   .        .        .
2  03 .   .        .        .
3  00 .   HOP 03   .        .      ; hold on this row
```
````

### 5.5 Groove

One value per row, with the tick sum worked in a comment.

````
```groove
# GROOVE 01  (triplets, 24 ticks per quarter)
0  08
1  08
2  08
3  00      ; skip the 4th step: 8+8+8 = 24 ticks = one quarter note
```
````

### 5.6 Instrument patch

A patch block lists only the parameters that differ from a fresh instrument
of that type, grouped as on the unit. FM operators go in a small grid.

````
```patch
# INST 04  FMSYNTH  "BELL A"
ALGO   07            ; [A>B]+[C>D]: two independent pairs
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  3.50   1.00   7.00   1.00   ; non-integer modulators give inharmonic partials
LEV    60     80     40     60     ; starting points, adjust by ear
FB     00     00     00     00
MOD1   AHD  DEST: (mod macro 1)  ATK 00  HOLD 00  DEC 60
FILTER LOWPASS  CUTOFF D0  RES 00
```
````

Every non-obvious value gets a comment with its reason. Values nobody has
tried carry "starting point".

### 5.7 Staff ideas

The site carries no staff notation. Where a musical idea needs stating
before it becomes rows, write it as note names with durations in a short
table (voice, bar, notes), or as scale degrees. Rhythms as counts or as
onset positions in 16ths: `x . . x . . x . | x . . x . x . .`.

For polyrhythm and polymeter, show cycles as aligned rows of onsets so the
realignment can be seen:

````
```cycles
16 steps  |x . . . x . . . x . . . x . . . |x . . . x . . . x . . . x . . . |
12 steps  |x . . x . . x . . x . . |x . . x . . x . . x . . |x . . x . . x .
```
````

### 5.8 Callouts

Blockquotes with a bold label. The site styles them by label.

```markdown
> **Try it.** Change row 1 of the groove from 08 to 09 and listen for the limp.

> **Bench test.** Put HOP 0B on a row that also holds a note. Does the note sound?
> Record the answer in your notes with the firmware version.

> **Headless.** No line input: use USB audio from the host for this step.

> **Starting point.** Nobody has tried these values on a unit. Adjust by ear.

> **Manual.** Groove View, pp. 26-27.
```

Use Try it at the end of each Concepts subsection. Use Headless only where
section 9 of the notes shows a difference that affects the step in hand.

## 6. Lab and etude format

A lab task states its product:

```markdown
1. **Groove library.** Build grooves 01-05: three swings, triplets, a quintuplet.
   *Product:* five grooves, each with its tick sum written in your notes.
```

An etude brief has these parts, in this order:

```markdown
**Brief.** One or two sentences.
**Forces.** Which tracks and instruments.
**Constraints.** The technical requirements, as a short list.
**Duration target.** In bars, with the approximate time at a suggested tempo.
**Repeat budget.** The number.
**Plan.** What the one-page plan must show this week.
**Hand in to yourself.** Project file, render, plan, three lines of reflection.
```

## 7. Rubric format

The four course criteria, four levels. Write descriptors for levels 2 and 4
only; 1 falls below 2 and 3 sits between.

```markdown
| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists; the piece departs from it without comment. | The piece matches the plan, or each departure has a stated reason. |
| Technique of the week | Triplets appear on one layer. | Three layers divide the bar differently and the divisions change by section. |
| Development | Sections differ, but some phrases exceed the repeat budget. | The repeat budget holds and each return brings a named change. |
| Sound | Instruments work alone but mask each other. | Each layer stays audible; roles suit registers. |
```

## 8. Worked sample: one Concepts subsection

A sample at the intended length and voice, drawn from week 5. It uses only
behaviour recorded in `docs/manual-notes.md` section 2.1.

---

### Three against four inside one beat

A groove tells the sequencer how many ticks each phrase step lasts. With the
default 24 ticks per quarter note, the default groove gives every step 6
ticks, so four steps fill a beat (4 × 6 = 24) and sixteen fill a bar
(16 × 6 = 96).

Nothing ties a track to that groove. Each track can run its own, set with
`GRV` in a phrase. So give one track steps of 8 ticks: three of them fill
the same beat (3 × 8 = 24). One track now plays three evenly spaced notes in
the time another plays four. That makes a polyrhythm in the strict sense:
the same span, divided two ways.

One snag. A phrase still has sixteen rows, and three steps of 8 ticks use
only three of every four. The groove handles this with a row of `00`, which
skips a step outright:

```groove
# GROOVE 01  (triplets, 24 ticks per quarter)
0  08
1  08
2  08
3  00      ; skip the 4th step: 8+8+8 = 24 ticks = one quarter note
```

The groove loops every four rows, so rows `3`, `7`, `B` and `F` of the
phrase never sound. Whatever you put there stays silent. Twelve rows remain,
three per beat, and the phrase still lasts 96 ticks, so it stays in step with
a straight track at the bar line.

```phrase
# PHRASE 12  (track 2, hats in triplets)
0  C-4 64 03  GRV 01   .   .
1  C-4 40 03  .        .   .
2  C-4 40 03  .        .   .
3  .   .  .   .        .   .      ; skipped
4  C-4 64 03  .        .   .
5  C-4 40 03  .        .   .
6  C-4 40 03  .        .   .
7  .   .  .   .        .   .      ; skipped
```

Rows `8` to `F` repeat the pattern. Against a track of straight 16ths on the
default groove, the onsets within each beat fall like this, in ticks:

```cycles
straight  |0 . . . . . 6 . . . . . 12 . . . . . 18 . . . . . |
triplet   |0 . . . . . . . 8 . . . . . . . 16 . . . . . . . |
```

They share only tick 0. The straight track's third note (tick 12) lands
midway between the triplet's second and third (ticks 8 and 16), which gives
the pattern its familiar lilt.

`GRV` holds until another groove command arrives on that track, so one
command at the top of the first phrase covers everything after it. To return
the track to straight time, place `GRV 00`.

> **Try it.** Build groove 01 and phrase 12 as above on a hi-hat, with a
> straight 16th pattern on another track. Then change the groove's rows to
> `0C`, `0C`, `00`, `00`. Work out what you expect to hear before you press
> [PLAY].

> **Bench test.** Does a `GRV` on row `0` take effect for row `0` itself, or
> from the next row? Listen to the first beat after a stop and start.

---

That subsection runs to about 330 words of prose plus three blocks. It shows
the arithmetic, cites nothing it cannot support from the notes, ends with a
task the learner can do in five minutes, and turns the one thing the sources
leave open into a bench test.
