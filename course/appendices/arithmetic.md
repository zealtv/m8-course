---
title: "Hex, tick and tempo arithmetic"
order: 2
---
Tables for the sums the course keeps asking for. Every figure here comes from
arithmetic on what the manual states (24 ticks per quarter note by default,
6 ticks per step, 16 steps per phrase). Nobody had checked the groove recipes
on a unit when this page was written.

> **Manual.** Groove View, pp. 26-27; groove examples, p. 81.

## Hexadecimal

A two-digit hex value means 16 × first digit + second digit. `3C` gives
16 × 3 + 12 = 60.

| Hex digit | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
|-----------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| × 16 | 0 | 16 | 32 | 48 | 64 | 80 | 96 | 112 | 128 | 144 | 160 | 176 | 192 | 208 | 224 | 240 |

Landmarks worth knowing by heart:

| Hex | Decimal | Where it turns up |
|-----|---------|-------------------|
| `0C` | 12 | an octave in semitones; an eighth note in ticks |
| `10` | 16 | the steps in a phrase, the rows in a chain |
| `18` | 24 | a quarter note in ticks |
| `20` | 32 | a quarter of the 00-7F range |
| `40` | 64 | the middle of the 00-7F range |
| `60` | 96 | a bar of 4/4 in ticks |
| `64` | 100 | the default step volume |
| `7F` | 127 | the top of the volume range |
| `80` | 128 | half of 00-FF |
| `FF` | 255 | the top of a two-digit value |

Relative commands add with `01` to `7F` and subtract with `FF` down to `80`
(manual p. 69). Reading `FF` as −1, `FE` as −2 and so on, a subtraction of n
would be written as 256 − n: `F4` for −12, since 256 − 12 = 244 = 16 × 15 + 4.
That reading comes from our inference, so check it on your unit.

## Ticks and note values

At the default 24 ticks per quarter note:

| Note value | Ticks | Hex | Steps of 6 ticks |
|------------|-------|-----|------------------|
| Whole note (bar of 4/4) | 96 | `60` | 16 |
| Half note | 48 | `30` | 8 |
| Dotted quarter | 36 | `24` | 6 |
| Quarter | 24 | `18` | 4 |
| Dotted eighth | 18 | `12` | 3 |
| Quarter-note triplet | 16 | `10` | 2⅔ |
| Eighth | 12 | `0C` | 2 |
| Eighth-note triplet | 8 | `08` | 1⅓ |
| Sixteenth | 6 | `06` | 1 |
| Sixteenth-note triplet | 4 | `04` | ⅔ |
| Thirty-second | 3 | `03` | ½ |

These values serve `DEL`, `KIL`, `OFF`, `RET`, groove rows, `TABLE TIC` and
the AHD envelope times, all of which count ticks and so follow the tempo.

## Tempo and time

One quarter note lasts 60 / BPM seconds, so:

- one tick = 60 / (24 × BPM) = 2.5 / BPM seconds;
- one step of 6 ticks = 15 / BPM seconds;
- one bar of 4/4 = 240 / BPM seconds;
- bars per minute = BPM / 4.

| BPM | Tick (ms) | Step (ms) | Quarter (ms) | Bar (s) | Bars per minute |
|-----|-----------|-----------|--------------|---------|-----------------|
| 60 | 41.7 | 250 | 1000 | 4.00 | 15.0 |
| 70 | 35.7 | 214 | 857 | 3.43 | 17.5 |
| 80 | 31.2 | 188 | 750 | 3.00 | 20.0 |
| 90 | 27.8 | 167 | 667 | 2.67 | 22.5 |
| 100 | 25.0 | 150 | 600 | 2.40 | 25.0 |
| 110 | 22.7 | 136 | 545 | 2.18 | 27.5 |
| 120 | 20.8 | 125 | 500 | 2.00 | 30.0 |
| 130 | 19.2 | 115 | 462 | 1.85 | 32.5 |
| 140 | 17.9 | 107 | 429 | 1.71 | 35.0 |
| 150 | 16.7 | 100 | 400 | 1.60 | 37.5 |
| 160 | 15.6 | 94 | 375 | 1.50 | 40.0 |
| 170 | 14.7 | 88 | 353 | 1.41 | 42.5 |
| 180 | 13.9 | 83 | 333 | 1.33 | 45.0 |

### Duration targets in minutes and seconds

Duration = bars × 240 / BPM seconds.

| Bars | 80 BPM | 100 BPM | 120 BPM | 140 BPM | 160 BPM |
|------|--------|---------|---------|---------|---------|
| 8 | 0:24 | 0:19 | 0:16 | 0:14 | 0:12 |
| 16 | 0:48 | 0:38 | 0:32 | 0:27 | 0:24 |
| 24 | 1:12 | 0:58 | 0:48 | 0:41 | 0:36 |
| 32 | 1:36 | 1:17 | 1:04 | 0:55 | 0:48 |
| 48 | 2:24 | 1:55 | 1:36 | 1:22 | 1:12 |
| 56 | 2:48 | 2:14 | 1:52 | 1:36 | 1:24 |
| 64 | 3:12 | 2:34 | 2:08 | 1:50 | 1:36 |
| 80 | 4:00 | 3:12 | 2:40 | 2:17 | 2:00 |
| 96 | 4:48 | 3:50 | 3:12 | 2:45 | 2:24 |
| 128 | 6:24 | 5:07 | 4:16 | 3:39 | 3:12 |

Going the other way, bars = minutes × BPM / 4. Week 10's 3 min 30 s needs
3.5 × 120 / 4 = 105 bars at 120 BPM, or 70 bars at 80 BPM.

## Groove recipes

Each row of a groove gives the ticks one phrase step consumes. A row of `00`
skips its step, and the groove loops at its first empty row (manual p. 26).
A phrase lasts the sum of the ticks its sixteen rows receive.

> **Starting point.** The first five recipes restate the manual's examples
> (p. 81) with our arithmetic. The rest follow from the same rules and nobody
> has tried them on a unit.

| Groove | Rows | Working | Phrase lasts |
|--------|------|---------|--------------|
| Straight | `06` | 16 × 6 = 96 | one bar |
| Light swing | `07 05` | 7 + 5 = 12; first step takes 7/12 = 58% of the pair | one bar |
| Triplet swing | `08 04` | 8 + 4 = 12; 8/12 = 67%, a 2:1 ratio | one bar |
| Hard swing | `09 03` | 9 + 3 = 12; 9/12 = 75%, dotted | one bar |
| Triplets | `08 08 08 00` | 8 + 8 + 8 = 24 per four rows; 4 × 24 = 96; 12 steps sound | one bar |
| Double speed | `03` | 16 × 3 = 48 | half a bar |
| Half speed | `0C` | 16 × 12 = 192 | two bars |
| 3/4 | twelve of `06`, four of `00` | 12 × 6 = 72 | three quarters |
| 7/8 | fourteen of `06`, two of `00` | 14 × 6 = 84 | seven eighths |
| 5/8 | ten of `06`, six of `00` | 10 × 6 = 60 | five eighths |
| 5/4 in eighths | ten of `0C`, six of `00` | 10 × 12 = 120 | five quarters |
| Quarter-note triplets | `10 10 10 00 00 00 00 00` | 3 × 16 = 48 per eight rows; 2 × 48 = 96; 6 steps sound | one bar |

### Five and seven

Five or seven equal steps do not divide 48 or 96 ticks evenly, so the rows
take the nearest whole ticks. Place each onset at the ideal position rounded
to a whole tick, then read the rows off as the differences.

Five across a half note: ideal spacing 48 / 5 = 9.6 ticks.

```groove
# GROOVE 05  (five across a half note)
0  0A      ; onsets at 0, 10, 19, 29, 38
1  09      ; ideal    0, 9.6, 19.2, 28.8, 38.4
2  0A      ; largest error 0.4 tick
3  09
4  0A      ; 10+9+10+9+10 = 48 ticks
5  00
6  00
7  00      ; three skips: 8 rows per half note, 16 rows = 96 ticks
```

Seven across a half note: ideal spacing 48 / 7 = 6.86 ticks.

```groove
# GROOVE 07  (seven across a half note)
0  07      ; onsets at 0, 7, 14, 21, 27, 34, 41
1  07      ; ideal    0, 6.9, 13.7, 20.6, 27.4, 34.3, 41.1
2  07      ; largest error 0.43 tick
3  06
4  07
5  07
6  07      ; 7+7+7+6+7+7+7 = 48 ticks
7  00      ; one skip: 8 rows per half note, 16 rows = 96 ticks
```

Five across a whole bar: ideal spacing 96 / 5 = 19.2 ticks. Rows `13 13 14
13 13` (19 + 19 + 20 + 19 + 19 = 96), then eleven rows of `00`. Onsets fall
at 0, 19, 38, 58, 77 against the ideal 0, 19.2, 38.4, 57.6, 76.8, so the
largest error stays at 0.4 tick.

At 120 BPM a tick lasts 20.8 ms, so an error of 0.4 tick comes to about 8 ms.

> **Bench test.** Build groove 05 against straight quarter notes. Can you hear
> the unevenness? Does the unit accept a row as large as `13`? Record the
> answers with your firmware version; they settle open questions 4 and 10 in
> the course notes.

## Least common multiples for polymeter

Two cycles of a and b steps, started together, realign after lcm(a, b) steps.
Read the row and column for the two lengths:

| | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|---|---|---|---|---|---|----|----|----|----|----|----|----|
| **5** | 5 | 30 | 35 | 40 | 45 | 10 | 55 | 60 | 65 | 70 | 15 | 80 |
| **6** | 30 | 6 | 42 | 24 | 18 | 30 | 66 | 12 | 78 | 42 | 30 | 48 |
| **7** | 35 | 42 | 7 | 56 | 63 | 70 | 77 | 84 | 91 | 14 | 105 | 112 |
| **8** | 40 | 24 | 56 | 8 | 72 | 40 | 88 | 24 | 104 | 56 | 120 | 16 |
| **9** | 45 | 18 | 63 | 72 | 9 | 90 | 99 | 36 | 117 | 126 | 45 | 144 |
| **10** | 10 | 30 | 70 | 40 | 90 | 10 | 110 | 60 | 130 | 70 | 30 | 80 |
| **11** | 55 | 66 | 77 | 88 | 99 | 110 | 11 | 132 | 143 | 154 | 165 | 176 |
| **12** | 60 | 12 | 84 | 24 | 36 | 60 | 132 | 12 | 156 | 84 | 60 | 48 |
| **13** | 65 | 78 | 91 | 104 | 117 | 130 | 143 | 156 | 13 | 182 | 195 | 208 |
| **14** | 70 | 42 | 14 | 56 | 126 | 70 | 154 | 84 | 182 | 14 | 210 | 112 |
| **15** | 15 | 30 | 105 | 120 | 45 | 30 | 165 | 60 | 195 | 210 | 15 | 240 |
| **16** | 80 | 48 | 112 | 16 | 144 | 80 | 176 | 48 | 208 | 112 | 240 | 16 |

Sets against a 16-step bar, with the realignment in bars (steps / 16) and in
time (steps × 15 / BPM seconds):

| Cycle lengths | Realign after | Bars of 16 | At 120 BPM | At 90 BPM |
|---------------|---------------|------------|------------|-----------|
| 16 : 12 | 48 steps | 3 | 0:06 | 0:08 |
| 16 : 10 | 80 steps | 5 | 0:10 | 0:13 |
| 16 : 14 | 112 steps | 7 | 0:14 | 0:19 |
| 16 : 9 | 144 steps | 9 | 0:18 | 0:24 |
| 16 : 15 | 240 steps | 15 | 0:30 | 0:40 |
| 16 : 12 : 9 | 144 steps | 9 | 0:18 | 0:24 |
| 16 : 12 : 10 | 240 steps | 15 | 0:30 | 0:40 |
| 16 : 15 : 12 | 240 steps | 15 | 0:30 | 0:40 |
| 16 : 14 : 12 | 336 steps | 21 | 0:42 | 0:56 |

For three lengths, take the lcm of the first two, then the lcm of that with
the third: lcm(16, 12) = 48, then lcm(48, 10) = 240.

The same sums work in any unit. Chains of 3 and 4 phrases realign after 12
phrases; a 5-row table at `TIC 00` against a 16-step phrase realigns after
80 triggers if every step holds a note.

> **Bench test.** A `HOP` on row `0B` gives a cycle of 12 steps only if that
> row sounds before the jump. Week 1's lab settles this; until then, count the
> steps you hear before trusting a row of this table.
