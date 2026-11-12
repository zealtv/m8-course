---
title: "Variation"
week: 7
strand: composition
outcomes: [5]
needs: [1, 5, 6]
duration_target: "80 bars"
repeat_budget: 2
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "11-15, 69-72"
---

## Overview

Weeks 5 and 6 changed when things sound; this week changes the material. A variation is a theme plus an operation, and the nine classical operations (transposition, inversion, retrograde, augmentation, diminution, fragmentation, displacement, re-instrumentation, ornament) each land on one M8 level at a known cost. The conditional and chance commands let one phrase play differently on different passes. Both get you past a repeat budget that falls to 2 without new material in every bar.

By the end of the week you can:

- name the level and cost of each motivic operation on the M8, and choose the cheapest that does the job;
- transpose a motif really and tonally, invert it and reverse it;
- augment, diminish, fragment and displace a motif while song rows stay four bars long;
- use `NTH`, `CHA`, `RND`, `RNL`, `SED`, `REP` and `RTO` as controlled variation, and state the period of what they generate;
- plan and realise 80 bars of theme and variations ordered by a stated principle.

## Before you start

You need week 1 (the baseline project, inventory and plan; your results for bench tests 1 and 2 and for the deep clone of a repeated phrase), week 5 (lab task 1: when a groove command bites) and week 6. Tables lean on week-4 bench test 9: whether table ticks follow the tempo, whether `HOP` with x = 0 holds a row, and whether each note restarts the table.

**A convention.** As in week 6, a cycle of *n* steps carries `HOP 00` on row *n* − 1, the case where the `HOP` row sounds. If your bench test 2 found otherwise, put every `HOP` one row lower.

Save the baseline under a new name and work in the copy. The examples use week 1's invented material in D dorian at 96 BPM: M1, the bass ostinato, on track 1 with instrument `00`; M2, the mallet call (D-F-G-A, then a held C), on track 2 with `01`; hats as `05` on track 4. A tick lasts 2.5 / 96 = 26.0 ms, a bar 2.5 s.

> **Manual.** Cloning, Chain and Phrase views, selection, pp. 11-15; commands, pp. 69-72. Also p. 28 (scales) and p. 24 (tables).

> **Starting point.** Nobody has tried any example in this module on a unit. The row arithmetic holds whatever the unit does; what the generated commands do is for the bench tests.

## Concepts

### Operations, levels and costs

Week 1's rule: make each change at the highest level that can express it. Applied to the classical operations:

| Operation | Means | Level | Cost | Leans on |
|-----------|-------|-------|------|----------|
| Transposition, real | chain TSP (p. 12) | chain | a chain clone | |
| Transposition, tonal | a TSP that keeps the mode, or TSP in a scale (p. 28) | chain | a chain clone, plus a phrase for `SCA` | bench test 12 |
| Inversion, retrograde | notes rewritten on a clone (pp. 11, 13) | phrase | a phrase per bar | week-1 deep clone |
| Augmentation, diminution | `GRV` to a one-row groove (pp. 26, 70) | groove | a groove, a phrase for the command | week-5 lab task 1 |
| Fragmentation | `HOP` in a cloned phrase (p. 70) | phrase | a phrase | bench test 2 |
| Displacement | rows shifted (p. 15), `DEL` (p. 69) | phrase | a phrase | open question 18 |
| Re-instrumentation | I column, instrument clone (pp. 14-15) | phrase, instrument | a phrase, perhaps an instrument | |
| Ornament | a table (p. 24), `ARP` (p. 69) | instrument | an instrument clone | bench test 9 |
| Conditional | `NTH` (p. 71) | phrase | an FX column | bench test 7 |
| Chance, ramp | `CHA`, `RND`, `RNL`, `SED`, `REP`, `RTO` (pp. 69-71) | phrase | FX columns | lab task 3 |

Only transposition lives above the phrase, so the budget of 2 will cost you phrases. The pool of 255 (p. 91) leaves room.

A variation also needs an **invariant**: the property of the theme it keeps, which the listener holds on to. Transposition keeps rhythm and intervals; retrograde keeps the pitch set; displacement keeps pitches and order. Name the invariant before you choose the operation.

> **Try it.** Without the unit, write for each row of the table what a variation of your baseline's leading motif would keep and what it would cost. Circle the three cheapest.

### Pitch: transposition, inversion, retrograde

**Real transposition** costs a chain clone and a TSP value (pp. 11, 12). The phrases stay shared, so a correction to the theme reaches every transposed statement. An instrument with TRANSP. off ignores TSP (p. 16), so the drums stay put.

**Tonal transposition** can come two ways. The first needs no scale: choose TSP values that land every note of the motif in the mode. M1 uses D, A and C, pitch classes 2, 9 and 0 counting from C; D dorian holds 0, 2, 4, 5, 7, 9 and 11. Add *t* to each and keep the values where every sum, mod 12, stays in the set (a blank means an earlier note already failed):

| *t* | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|-----|---|---|---|---|---|---|---|---|---|----|----|
| D + *t* | 3 ✗ | 4 | 5 | 6 ✗ | 7 | 8 ✗ | 9 | 10 ✗ | 11 | 0 | 1 ✗ |
| A + *t* | | 11 | 0 | | 2 | | 4 | | 6 ✗ | 7 | |
| C + *t* | | 2 | 3 ✗ | | 5 | | 7 | | | 10 ✗ | |

Only `02`, `05` and `07` keep M1 in D dorian. Without the C, `03` and `0A` pass too, which is why fragments sequence well (worked example 2).

The second lets a scale do it: a scale quantises chain transpose (p. 28), and `SCA xy` sets a track's key and scale (p. 71). Whether TSP `02` then moves each note two semitones and snaps it, or two scale degrees, bench test 12 finds out. `SCA` needs a phrase to carry it: clone the variation's first.

**Inversion and retrograde** have no command: the selection tools copy, paste, shift and interpolate (pp. 7, 15), but nothing reverses or mirrors. Rewrite the notes on a copy. A deep clone ([SHIFT]+[OPTION] then [EDIT] twice in Song view, p. 11) copies a chain and its phrases, at a cost your week-1 result fixes; a chain clone plus one phrase clone in Chain view (p. 13) costs exactly one of each.

D dorian measured from D holds 0, 2, 3, 5, 7, 9 and 10, and negating those mod 12 gives the same set. So inversion about D stays in the mode, and real and tonal inversion coincide. About any other note some fall outside: about A, C becomes F#.

To reverse a line, reverse its list of (pitch, duration) pairs and rebuild the onsets from the durations. Mirroring row numbers (*r* to 15 − *r*) instead gives M1 onsets 1, 5, 9, 12 and 15 in place of 0, 2, 6, 10 and 13, which is a different rhythm. Worked example 1 does both operations.

> **Try it.** Find every TSP value that keeps your baseline's motif inside its mode, as in the table. Clone the chain and try two of them.

### Time: augmentation, diminution, fragmentation, displacement

**Augmentation.** A groove of one row of `0C` gives each step 12 ticks: 16 × 12 = 192 ticks, two bars a phrase (week 5). Build it as groove `0A`. A 4-bar row then holds two phrases, not four. Clone M1 as phrase `1A` with `GRV 0A` on row 0 and give the chain `1A`, `10`. `GRV` holds (p. 70), so `10` inherits it and the next chain must open with `GRV 00`. The two phrases hold the same notes: one run of 2.

Envelope times count ticks (pp. 18-21), and a groove changes how many ticks a step takes, not how long a tick lasts. So an augmented note keeps its old decay with twice the space after it: a legato line comes out detached unless you lengthen the decay on a clone of the instrument.

**Diminution.** One row of `03` gives 16 × 3 = 48 ticks, half a bar. Build it as groove `0B`. A 4-bar row now holds eight phrases, and eight plays of one phrase would break the budget, so vary the TSP from the table above: `1B 00`, `10 05`, `10 00`, `10 07`, and so on, where `1B` is M1 with `GRV 0B` on row 0. The TSP pattern becomes a bass line of its own.

**Fragmentation.** Clone the phrase and put `HOP 00` on row 7: eight steps play, then the next chain row (p. 70). Rows 8 to F stay in the phrase, so deleting the `HOP` restores the motif. Keep fragments to 8, 4 or 2 steps unless you want week 6's drift.

**Displacement.** Moving a one-bar ostinato two steps later rotates it: onset *s* goes to (*s* + 2) mod 16. In selection mode [EDIT]+[DOWN] shifts the selected rows (p. 15). M1's onsets 0, 3, 6, 10 and 14 become 2, 5, 8, 12 and 0, so the A that ended the bar lands on the downbeat:

```phrase
# PHRASE 16  (track 1, M1 displaced two steps)
0  A-3 50 00  .   .   .      ; from row E: 14 + 2 = 16, wrapped to 0
2  D-3 64 00  .   .   .
5  D-3 50 00  .   .   .
8  A-3 60 00  .   .   .
C  C-4 58 00  .   .   .
```

Whether a shift wraps rows past F to row 0 or drops them, the sources do not say: check this on your unit. For less than a step, `DEL xx` delays its row by xx ticks (p. 69): `DEL 03` on every note puts the line half a step late, 3 × 26.0 = 78 ms. Keep `DEL` below 6 (week 5).

> **Try it.** Build phrase 16 by shifting a clone of your motif, noting whether the last note wrapped. Then try a shift of 4. Which moves the accent off the beat?

### Colour: re-instrumentation and ornament

**Re-instrumentation.** The I column names each step's instrument (p. 14), so a phrase clone with a new I column re-scores one bar. Since 6.6.1 a third [EDIT] on a deep clone clones the instruments too, so the variation can re-voice its own copies; check that the new phrases name them. `INS xx` (p. 70) and `NXT xx` (p. 72) change or double the instrument from an FX column; try each before relying on it.

**Ornament by table.** A clone of the mallet with a short table decorates every note it plays. An upper-neighbour grace note:

```table
# INST 06's table  (TIC 02; instrument 06 = clone of the mallet 01)
0  02 .   .        .   .      ; a step up for 2 ticks: 2 x 26.0 = 52 ms
1  00 .   HOP 01   .   .      ; then the written note, held, if HOP with x = 0 has no limit
```

Put `06` in the I column only on the notes you want ornamented. The table's N column is not in p. 28's list of what a scale quantises, so treat it as chromatic. In D dorian, +2 above D, F, G, A and C stays in the mode, which covers all of M2; above E or B it gives F# or C#.

**Ornament by `ARP`.** `ARP xy` plays the note, the note + x and the note + y semitones; `ARC xy` sets mode and speed (p. 69). Choose digits by chord quality: in D dorian `ARP 37` over D or A, `ARP 47` over C. A scale quantises `ARP` too (p. 28).

> **Try it.** Build instrument `06`. In a clone of M2's first phrase give `06` to the second and fourth notes only, and play it against the theme. Decoration, or a new line?

### Generated variation: conditions, chance and ramps

The operations above change the material once, by hand. These commands make one phrase play differently on different passes (pp. 69-71).

**`NTH xy`** skips part of its row according to how many times the phrase has looped: x what sits to its left, y what sits to its right (p. 71). Read literally, in FX 1 the left is the note, volume and instrument and the right is FX 2 and 3. The values' meanings live in the unit's help text, and the notes say neither which value means "every second pass" nor what counts as a loop. Bench test 7 finds both. Below, `<a>` and `<b>` stand for values it found.

**`CHA xy`** gives a probability to each side, `0` never to `F` always (p. 69). So `CHA 80` in FX 1 would silence FX 2 and 3 every time: write `CHA 8F`. If the scale is linear, `8` means 8 / 15 = 53%; the notes give only its ends.

**`RND xy`** randomises the previously active command within ranges set by x and y; **`RNL xy`** randomises the command to its left, or in FX 1 the note and instrument (p. 70). Read the help text for the ranges first.

**`SED xx`** sets the track's random seed, so the same results come back (p. 71). Chance becomes a menu: try seeds `01`, `02`, `03` and keep the one you like. Which commands the seed governs, and whether meeting a `SED` again restarts the sequence, lab task 3 checks.

**`REP xx`** repeats the last command each step, adding xx, until a new command or `REP 00`; `RTO xx` names where it stops; `^^` marks a `REP` carried from an earlier phrase (pp. 70-71). A ramp's length is (stop − start) ÷ step. A filter opening over one 4-bar row:

```phrase
# PHRASE 1E  (track 1: clone of M1, starts a 4-bar ramp; rows 3-E as phrase 10)
0  D-3 64 00  .   <CUTOFF> 20  .        ; the start value
1  .   .  .   .   REP 02       RTO A0   ; +2 a step until A0
```

`A0` − `20` = `80` = 128, and 128 ÷ 2 = 64 steps, four bars. Chain `1E`, `10`, `10 05`, `10 05` carries it (phrase 10 has nothing in FX 2) within budget. If `REP` acts on its own row, the ramp reaches `A0` on the next row's first step; otherwise one step later. `<CUTOFF>` stands for the command you get by highlighting CUTOFF and moving to the phrase (pp. 17, 75); check that it sets the value outright.

> **Try it.** Put `CHA 8F` beside every off-beat hat in a phrase and loop eight bars, counting the hits. Add `SED 01` on row 0 and loop again: does every bar now match?

### Stating the period

A generated variation's **period** is the number of passes before its pattern comes round. The plan states it, as week 6's plans stated a realignment.

**Conditions.** Rows that skip with periods *p* and *q* repeat after lcm(*p*, *q*) passes: periods 2 and 3 on a one-bar phrase give six bars. A reset cuts that short: if the count restarts with each chain, a 4-bar chain caps it at four. As in week 6, a period that completes arrives; one cut by a reset is an edit.

**Seeded chance.** If `SED` restarts the sequence, the period is the distance between seeds: one bar for a `SED` in a phrase that plays every bar, four for one `SED` at the top of a 4-bar chain.

**Unseeded chance.** No period: state the expectation and the extremes. Three hits at `CHA 8F` give 3 × 8 / 15 = 1.6 a bar on average if the scale is linear; a bar with none comes with probability (7 / 15)³ = 343 / 3,375 ≈ 10%, a bar with all three (8 / 15)³ = 512 / 3,375 ≈ 15%.

Across tracks, the variation repeats after the lcm of the periods. The check that matters most: **a period no longer than the song row is a loop at a larger size.** Plan longer periods, or change something at every row.

**The budget this week** counts as before: consecutive plays of one phrase at one TSP on one track. A pass whose notes or rhythm differ from the last by a rule written in the plan (an `NTH` pattern, or a seeded result you have heard and written down) counts as changed. Unseeded chance never counts, since you cannot promise the change; nor does volume or timbre alone.

> **Try it.** The bass phrase has conditions of period 2 and 4; the hats have one `SED` at the top of a 4-bar chain. With no resets, what is the pair's period? (lcm(2, 4) = 4, and lcm(4, 4) = 4 bars: a loop the size of the row. Make the bass's 4 a 3 and the bass runs lcm(2, 3) = 6, the pair lcm(6, 4) = 12.)

## Worked examples

### M1 by hand: retrograde and inversion

The theme, with durations in steps:

```phrase
# PHRASE 10  (track 1, M1: the theme)
0  D-3 64 00  .   .   .      ; 3 steps
3  D-3 50 00  .   .   .      ; 3
6  A-3 60 00  .   .   .      ; 4
A  C-4 58 00  .   .   .      ; 4
E  A-3 50 00  .   .   .      ; 2, to the bar line: 3+3+4+4+2 = 16
```

**Retrograde.** Reverse the pairs: A 2, C 4, A 4, D 3, D 3. The onsets are the running sums 0, 2, 6, 10, 13, and the last note runs 3 steps to 16.

```phrase
# PHRASE 18  (track 1, M1 retrograde)
0  A-3 50 00  .   .   .      ; 2 steps
2  C-4 58 00  .   .   .      ; 4
6  A-3 60 00  .   .   .      ; 4
A  D-3 50 00  .   .   .      ; 3
D  D-3 64 00  .   .   .      ; 3: the accent travels with its note, off the beat
```

Decide by ear whether the accent stays on row D or returns to the downbeat.

**Inversion about D-3.** A-3 lies 7 semitones above, so it becomes G-2, 7 below; C-4 lies 10 above and becomes E-2.

```phrase
# PHRASE 19  (track 1, M1 inverted about D-3)
0  D-3 64 00  .   .   .
3  D-3 50 00  .   .   .
6  G-2 60 00  .   .   .      ; D-3 - 7
A  E-2 58 00  .   .   .      ; D-3 - 10
E  G-2 50 00  .   .   .
```

G and E belong to D dorian, as the symmetry promised. Inverting phrase 18 gives the retrograde inversion: G-2, E-2, G-2, D-3, D-3 on rows 0, 2, 6, A and D. Each form costs one phrase; a row of retrograde within budget might run `18 00`, `18 00`, `18 05`, `18 05`.

### A fragment in sequence

```phrase
# PHRASE 1C  (track 1, M1's first half: a clone of 10)
0  D-3 64 00  .        .   .
3  D-3 50 00  .        .   .
6  A-3 60 00  .        .   .
7  .   .  .   HOP 00   .   .      ; 8 steps, then the next chain row
```

The fragment holds only D and A, so TSP `03` and `0A` stay in D dorian along with `02`, `05` and `07`:

```chain
# CHAIN 1C  (track 1, a rising sequence: 8 x 8 = 64 steps = 4 bars)
0  1C 00      ; D D A
1  1C 00
2  1C 03      ; F F C
3  1C 03
4  1C 05      ; G G D
5  1C 05
6  1C 07      ; A A E
7  1C 0A      ; C C G
```

The sequence's first notes spell D, F, G, A, C, which are M2's pitches: the bass quotes the mallet, a link the plan can name. Runs of 2, 2, 2, 1, 1 keep the budget. If your `HOP` row does not sound, each fragment lasts 7 steps and the chain 56, half a bar short; move the `HOP` to row 8.

### A generated variation and its period

Bass and hats, a 4-bar chain each, over three song rows. The bass chain lists phrase `1D` four times:

```phrase
# PHRASE 1D  (track 1, M1 with two conditional notes)
0  D-3 64 00  .        .   .
3  D-3 50 00  .        .   .
6  A-3 60 00  .        .   .
A  C-4 58 00  .        .   .
C  G-3 48 00  NTH <b>  .   .      ; an added passing note, period 3
E  A-3 50 00  NTH <a>  .   .      ; the last note, period 2
```

Suppose bench test 7 gave you `<a>`, letting row E sound on odd passes, and `<b>`, letting row C sound on every third:

| Pass | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Row C, G | . | . | G | . | . | G |
| Row E, A | A | . | A | . | A | . |

Row E alternates, so no two neighbouring passes match and `1D` may follow itself under this week's budget rule. The bass period is lcm(2, 3) = 6 bars.

The hat chain runs `48`, `49`, `49`, `49`. Phrase 48 has hats on the even rows, `SED 01` on row 0 and `CHA 8F` beside the off-beats on rows 2, 6 and A; on row E, `DEL 00` with `RND 03` beside it should scatter the last hit 0 to 3 ticks late, if `RND` acts on the `DEL`. Phrase 49 is 48 without the `SED`.

| Case | Bass | Hats | The pair repeats after |
|------|------|------|------------------------|
| Counts run on; `SED` restarts and governs `CHA` | 6 bars | 4 bars | lcm(6, 4) = 12 bars: the whole section |
| `NTH` count restarts each chain | 4 bars | 4 bars | 4 bars: a loop the size of the row |
| `SED` does not restart, or misses `CHA` | 6 bars | none | no period: state expectations |

Only the first case gives twelve bars from two phrases with no four bars heard twice. Bench test 7 and lab task 3 say which case you have. In the second, give each row its own seed or `NTH` value, so the change falls at the row.

## Lab

Allow 1 h 45 min. Keep adding to the results record: item, what you heard, firmware, date.

1. **Bench test 7: what `NTH` does** (25 min). Settles open questions 7 and 19 in the course notes.

   *Set-up.* In a scratch project, track 1 plays chain 01: phrase 05 eight times. Phrase 05 holds one marker, `C-5` on row 0 on a long-decay mallet, with the `NTH` in FX 1 and `KIL 03` in FX 2. Track 2 is a ruler: phrase 03 (a high note) then phrase 04 (a low note) seven times, so the high note marks pass 1.

   - (a) Record the help text for `NTH` values `10`, `20`, `30`, `40`, `80`, `01`, `02` and `22`.
   - (b) Before playing, write down the passes on which the marker should sound under three readings of x:

     | Value | A: skip every x-th pass | B: play only every x-th | C: x as four bits, one per pass of four, low bit = pass 1, set = skip |
     |-------|-------------------------|-------------------------|-----------------------------------------------------------------------|
     | `20` | 1, 3, 5, 7 | 2, 4, 6, 8 | 1, 3, 4, 5, 7, 8 |
     | `30` | 1, 2, 4, 5, 7, 8 | 3, 6 | 3, 4, 7, 8 |
     | `40` | 1, 2, 3, 5, 6, 7 | 4, 8 | 1, 2, 4, 5, 6, 8 |
     | `80` | 1-7 | 8 | 1, 2, 3, 5, 6, 7 |

     `20` alone tells them apart. If the help text implies another reading, write its prediction first.
   - (c) Play each value and mark the passes heard. A match one pass out means the count starts at 0.
   - (d) Try `02`: the marker should always sound, the `KIL` only on some passes. Which?
   - (e) *What counts*, with `20`: (i) as set up; (ii) 05 once in its chain, looping by the song; (iii) 05 alternating with an empty phrase 06 (an empty cell would end the chain, p. 12): does 05 count 1, 2, 3, 4 or 1, 3, 5, 7?; (iv) two song rows of 05 four times: does the count carry over?; (v) after stop and start?

   *Product:* the value table in your own words, the counting rule in one sentence, results-record lines.

2. **Bench test 12: chain transpose inside a scale** (20 min). Settles open question 12.

   *Set-up.* In Scale view make scale 01 dorian, intervals 0, 2, 3, 5, 7, 9 and 10 on (p. 28), or load one from the card. Enter the notes first and the `SCA` last, in case the scale quantises entry:

   ```phrase
   # PHRASE 01  (track 1, scale test)
   0  D-3 64 00  SCA 21   .   .      ; key 2 = D if the digit counts semitones from C:
                                     ; check the help text
   4  A-3 64 00  .        .   .
   8  C-4 64 00  .        .   .
   C  F#3 64 00  .        .   .      ; outside D dorian on purpose
   ```

   Chain 01 lists phrase 01 at TSP `00`, `01`, `02` and `07`.

   - (a) Predict:

     | TSP | Semitones, then snapped | Scale degrees | Scale ignored |
     |-----|-------------------------|---------------|---------------|
     | `00` | D A C, F# to F or G | D A C, F# ? | D A C F# |
     | `01` | D or E, A or B, C or D, G | E B D, F# ? | D# A# C# G |
     | `02` | E B D, G# to G or A | F C E, F# ? | E B D G# |
     | `07` | A E G, C# to C or D | D A C an octave up | A E G C# |

     `07` answers most clearly: a fifth up or an octave up.
   - (b) Play and record each row note by note, including what happens to the F#.
   - (c) Stop, remove the `SCA`, play again: does the scale persist, as a groove does?

   *Product:* results-record lines, and the rule you will use for tonal transposition: through a scale, or by the table in Concepts.

3. **Twelve variations** (60 min). Take your baseline's leading motif. Leave song row `3F` empty and build one variation per row from `40` to `4B`, below the etude's rows. Each row lasts four bars; the other tracks play the theme's accompaniment or rest on chain `FE`.

   | No. | Operation | Means |
   |-----|-----------|-------|
   | 1, 2 | Transposition, real and tonal | chain clone and TSP; task 2's rule |
   | 3, 4 | Inversion, retrograde | by hand on a clone |
   | 5, 6 | Augmentation, diminution | grooves `0A` (two phrases a row) and `0B` (eight, TSP varied) |
   | 7 | Fragmentation | `HOP`, a length dividing 16 |
   | 8 | Displacement | row shift (record whether rows wrapped) or `DEL` |
   | 9 | Re-instrumentation | I column, or a third-[EDIT] deep clone |
   | 10 | Ornament | table or `ARP`, on chosen notes |
   | 11 | Conditional | `NTH`, from task 1 |
   | 12 | Seeded chance | `SED` with `CHA` or `RND` |

   For variation 12, settle open question 20: (i) with `SED 01` on row 0, do two passes match? (ii) with the `SED` only in the chain's first phrase, does the row repeat exactly next time round? (iii) does the seed fix `CHA` as well as `RND`? Then try three seeds and keep one.

   *Product:* twelve labelled rows, and a note of each one's invariant and cost, the periods of 11 and 12, and a mark beside the six you want in the etude.

### Results record

| Test | Prediction | Observed | Firmware | Date |
|------|------------|----------|----------|------|
| 7b-d `NTH` x and y; reading A, B, C or other | | | | |
| 7e What `NTH` counts, and when it resets | | | | |
| 12b TSP inside a scale; the F# | | | | |
| 12c Does `SCA` persist | | | | |
| Row shift past F: wrap, drop or refuse | | | | |
| Third-[EDIT] clone names the new instruments | | | | |
| `SED`: same each pass; 4-bar repeat; governs `CHA` | | | | |

## Etude

**Brief.** Theme and variations on your baseline material, ordered by a principle you state in the plan.

**Forces.** The baseline's tracks, plus up to two more. Any instruments from weeks 2 to 4.

**Constraints.**

- The theme comes first: the baseline, revised wherever it breaks the budget of 2.
- 80 bars in 4-bar rows, `00` to `13`. An augmented or diminished passage balances its row.
- At least six variations, each labelled with its operations and the invariant it keeps; at least six of the Overview's nine operations across the piece.
- One conditional and one seeded chance variation, each period worked in the plan. Unseeded chance only on a layer that does not carry the theme.
- One `REP` ramp, with start, step, stop and length in steps.
- One composed join in its own chain, and a final return of the theme, changed.

**Duration target.** 80 bars, twenty song rows. At 96 BPM, 80 × 2.5 = 200 s, 3 min 20 s; at 120 BPM, 80 × 2 = 160 s, 2 min 40 s.

**Repeat budget.** 2, per track, counted as in the Concepts section. Phrases holding the same notes under different numbers count as one run.

**Plan.** One page, before you open Song view, showing:

- the theme's motifs as note names with onsets;
- the ordering principle in one sentence, with a score per variation;
- a variation table: bars, rows, operations, invariant, score, density;
- each generated variation's periods and combined period, with the working, and the ramp's arithmetic;
- density and register curves over the 80 bars;
- a sentence each for the join and the return.

One plan that meets the constraints, ordered by growing distance from the theme. The score counts which of five properties a variation changes: pitch level, contour, order, rhythm, colour.

| Section | Bars | Rows | Operations | Invariant | Score |
|---------|------|------|------------|-----------|-------|
| Theme | 1-8 | `00`-`01` | the baseline at budget 2 | | 0 |
| Var. 1 | 9-16 | `02`-`03` | ornament: `06` on M2, `ARP 47` on its C | pitches, rhythm | 1 |
| Var. 2 | 17-24 | `04`-`05` | displacement: phrase 16 | pitches, order | 1 |
| Var. 3 | 25-32 | `06`-`07` | fragment in sequence: chain `1C` | intervals | 2 |
| Var. 4 | 33-40 | `08`-`09` | inversion about D; mallet re-scored | rhythm | 2 |
| Var. 5 | 41-48 | `0A`-`0B` | M2 augmented an octave down, M1 diminished | pitch order | 2 |
| Var. 6 | 49-56 | `0C`-`0D` | retrograde with conditional notes, as in worked example 3 | pitch set | 3 |
| Var. 7 | 57-64 | `0E`-`0F` | retrograde inversion; seeded hats, seeds `01`, `02` | pitch set | 3 |
| Join | 65-68 | `10` | M1 alone under the ramp: chain `1E` | | |
| Theme′ | 69-80 | `11`-`13` | theme with var. 1's ornament; M1 augmented to close | pitches | 1, then 2 |

Row *r* starts at bar 4*r* + 1, so `10` (16) starts bar 65 and `13` (19) bar 77; 8 × 8 + 4 + 12 = 80 bars. The scores run 0, 1, 1, 2, 2, 2, 3, 3; the return stands outside the order, as habit 5 asks. Var. 6's six-bar period completes only if the `NTH` count runs on across rows.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: which operation read most clearly, which you could not hear, and what order you would try next.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. At each variation, could you name the operation without the plan? Mark the ones you only knew about.
2. Where did the theme stop being recognisable? Does that match the scores?
3. Did the generated variations sound composed or arbitrary? Did you hear a period come round?
4. Did the return sound like an arrival or like starting again?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | The principle or scores are missing, or the bars do not sum to 80. | The order follows the stated principle; every variation has its operation, invariant and cost; every period is worked; departures have reasons. |
| Technique of the week | Most variations transpose; generated commands appear without periods. | Six or more operations, each at its level; a conditional and a seeded variation with periods checked by ear; the ramp lands where planned. |
| Development | The variations sound like the baseline with layers changed, or a phrase exceeds the budget of 2. | Each variation keeps a named invariant and changes named properties; distance grows as planned; the budget holds; the theme returns changed. |
| Sound | Ornament or chance blurs the theme; augmented notes die early. | The theme stays audible throughout; envelopes suit the augmented and diminished steps. |

## Going further

- P, I, R and RI form a group: each undoes itself, and any two compose to the third. Build RI of M2 by composing your two phrases.
- Listen to Bach's Goldberg Variations, where every third variation is a canon at a rising interval: an ordering principle you can hear. Then Brahms's variations on a theme attributed to Haydn, which end in a passacaglia.
- Read Gunther Schuller's essay on Sonny Rollins and thematic improvisation, and label each development in one solo with an operation from this week.

## Summary

- A variation is a theme, an operation and a named invariant. Each operation lands on one level at a known cost; only transposition lives above the phrase.
- Tonal transposition chooses TSP values that keep the mode, or lets a scale snap; bench test 12 decides.
- Grooves augment and diminish, `HOP` fragments, row shifts and `DEL` displace, the I column and tables re-colour.
- `NTH`, `CHA`, `RND`, `RNL`, `SED` and `REP` generate variation. State each period; a period no longer than the row is a loop.

Week 8 sets voices against each other: canon by offset entries and chain transposition, invertible counterpoint, and checkpoint piece 2, 96 bars at a budget of 2.
