---
title: "Component test page"
draft: true
order: 99
---
> **Draft.** Test page for the site's notation components. `draft: true` keeps
> it out of `npm run build`; it appears under `npm run serve`. Delete it, or
> keep it out of the published site, before deploying.

## Notation blocks

### Phrase

```phrase
# PHRASE 12  (track 2, hats in triplets)
0  C-4 64 03  GRV 01   .        .
1  C-4 40 03  .        .        .
2  OFF .  .   .        .        .
3  .   .  .   .        .        .      ; skipped by the groove <b>not bold</b> & "escaped"
```

### Chain

```chain
# CHAIN 05
0  12 00
1  12 00
2  13 00
3  12 05      ; up a fourth
```

### Song

```song
# SONG   1  2  3  4  5  6  7  8
00       01 05 .  .  .  .  .  .     ; A  (8 bars)
01       01 05 09 .  .  .  .  .     ; A' bass enters
02       02 06 09 .  .  .  .  .     ; B
```

### Table

```table
# TABLE 03  (TIC 01, kick pitch drop)
0  0C .   .        .        .
1  07 .   .        .        .
2  03 .   .        .        .
3  00 .   HOP 03   .        .      ; hold on this row
```

### Groove

```groove
# GROOVE 01  (triplets, 24 ticks per quarter)
0  08
1  08
2  08
3  00      ; skip the 4th step: 8+8+8 = 24 ticks = one quarter note
```

### Instrument patch

```patch
# INST 04  FMSYNTH  "BELL A"
ALGO   07            ; [A>B]+[C>D]: two independent pairs
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  3.50   1.00   7.00   1.00   ; non-integer modulators give inharmonic partials
LEV    60     80     40     60     ; starting points, adjust by ear
FB     00     00     00     00
FILTER LOWPASS  CUTOFF D0  RES 00
```

### Cycles

```cycles
16 steps  |x . . . x . . . x . . . x . . . |x . . . x . . . x . . . x . . . |
12 steps  |x . . x . . x . . x . . |x . . x . . x . . x . . |x . . x . . x .
```

### An ordinary code block

```
Untagged fences stay ordinary code. . ; nothing here is rewritten
```

## Callouts

> **Try it.** Change row 1 of the groove from 08 to 09 and listen for the limp.

> **Bench test.** Put HOP 0B on a row that also holds a note. Does the note sound?
> Record the answer in your notes with the firmware version.

> **Headless.** No line input: use USB audio from the host for this step.

> **Starting point.** Nobody has tried these values on a unit. Adjust by ear.

> **Manual.** Groove View, pp. 26-27.

> **Draft.** An example of the draft notice.

> **Note.** An unrecognised label stays a plain blockquote.

## Key presses

Press [SHIFT]+[OPTION] then [EDIT]. Move with [UP], [DOWN], [LEFT] and
[RIGHT]; start playback with [PLAY]. In code, `[SHIFT]` stays literal.

## FM algorithms

All twelve, as drawn by the `fmalgo` shortcode. Arrows run from modulator to the
operator it modulates; heavy boxes are carriers. The arrows follow our reading of
the routing text and have not been checked on a unit.

<div class="fmalgo-grid">
{% for id in ["00","01","02","03","04","05","06","07","08","09","0A","0B"] -%}
{% fmalgo id %}
{% endfor %}
</div>

## Rubric table

Plain Markdown tables serve for rubrics.

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists; the piece departs from it without comment. | The piece matches the plan, or each departure has a stated reason. |
| Technique of the week | Triplets appear on one layer. | Three layers divide the bar differently and the divisions change by section. |
