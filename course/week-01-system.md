---
title: "The M8 as a compositional system"
week: 1
strand: foundations
outcomes: [1, 7]
needs: []
duration_target: "8 bars sequenced, 64 planned"
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "5-15, 24-27, 38"
---

## Overview

You can already build a loop. This week treats the instrument as a data model: a tree of references in which the level you edit at decides how far the edit reaches and what it costs. That model explains why loops come easily and long pieces do not, and it underlies the form method used in every etude from here on.

By the end of the week you can:

- explain how song, chain, phrase, table, groove and instrument refer to one another, and state the limits of each;
- choose the level at which to make a change, and say what the change reaches;
- tell a shared chain from a clone and a deep clone, and pick the right one;
- predict where two tracks with loops of different length realign;
- convert between hex, steps, ticks, bars and seconds without a calculator;
- write an inventory and a one-page plan for a 64-bar piece.

## Before you start

This week needs only basic operation of the unit: entering notes, moving between views, saving a project.

Have ready:

- three loops you have already made, as project files;
- a fresh project for the lab and the etude;
- any instruments you like, factory or your own. The course's own instruments start in week 2;
- a printed copy of the [one-page form plan worksheet]({{ '/appendices/worksheet-form-plan/' | url }}), or paper.

> **Manual.** Read pp. 5-15 (tracks, Song, Chain and Phrase views), pp. 24-27 (Table and Groove views) and p. 38 (project settings).

> **Headless.** The key names used here are the manual's. On a headless unit your display client maps host keys or a gamepad to the same eight keys, so learn that mapping first.

## Concepts

### The hierarchy, and what a change costs

The sequencer stores a piece as three nested levels. A **phrase** holds 16 steps, each with a note, a volume, an instrument number and three commands (p. 14). A **chain** lists up to 16 phrases, each with a transpose in semitones, TSP (p. 12). The **song** has eight tracks side by side, each a column of chain numbers, up to 256 rows deep (p. 10). Every track plays one note at a time and all eight behave alike (p. 5).

The cells at each level hold numbers, not content. A song cell names a chain; a chain row names a phrase; a phrase step names an instrument. So the structure is a graph of references, and the same phrase or chain may be named from many places (p. 14).

Three more structures sit beside that tree, and phrases refer to all three. An **instrument** holds the sound; a project has 128 (p. 16). A **table** has 16 rows of transpose, volume and commands and runs beside an instrument at its own rate (p. 24). A **groove** lists how many ticks each phrase step lasts (p. 26).

The sizes follow from time. A tick is the sequencer's smallest unit; by default a quarter note has 24 of them and a step lasts 6 (p. 26). So:

- one phrase = 16 steps × 6 ticks = 96 ticks = 4 quarter notes = one bar of 4/4;
- one full chain = 16 phrases = 16 bars = 16 × 96 = 1,536 ticks;
- one full song column = 256 rows × 16 bars = 4,096 bars.

Length never runs out. Slots do: the specification page counts 255 phrases and chains (p. 91). A 64-bar piece on four tracks contains 64 × 4 = 256 track-bars, one more than the phrase pool holds, so even that modest piece could not have a new phrase in every bar. The instrument expects reuse, and composing on it means deciding what gets reused and where.

That makes the level of an edit the main decision.

| Edit made at | Reaches | To keep it local | Page |
|--------------|---------|------------------|------|
| Song cell | one track, at one row | already local | 10 |
| Chain row (phrase number or TSP) | every song cell that names this chain | clone the chain: one chain | 11, 12 |
| Phrase step | every chain row that names this phrase | clone the phrase: one phrase | 13, 14 |
| Groove row | every track running this groove; groove `00` is every track's default | clone the groove | 15, 26 |
| Table row | every note that runs this table | clone the table | 15, 24 |
| Instrument setting | every step that names this instrument, everywhere | clone the instrument | 15, 16 |

The lower the level, the further an edit reaches. A loop habit works at the bottom: you polish phrases and instruments, where every change applies everywhere at once, so nothing can differ between bar 1 and bar 40. Difference over time lives in the top two rows of the table.

A working rule for the course: make each change at the highest level that can express it. A transposed repeat belongs in a chain row's TSP, not in a rewritten phrase.

> **Try it.** Open one of your loops. In Phrase view, look for an asterisk beside the phrase number: it marks a phrase used elsewhere (p. 14). Before you change a note, say out loud how many places the change will reach, then check.

### Shared, cloned and deep-cloned

A passage can come back in three ways, which differ in what stays linked.

**Shared.** Enter the same chain number in two song cells. Both cells play one object. Edit either and both change. Cost: nothing.

**Cloned.** In Song view, [SHIFT]+[OPTION] then [EDIT] on a chain makes a new chain that lists the same phrases (p. 11). The two chains now differ as lists: you can reorder rows, swap one phrase for another, or change TSP in the clone without touching the source. The phrases stay shared, so editing a note still changes both. Cost: one chain.

**Deep-cloned.** [SHIFT]+[OPTION] then a double tap of [EDIT] makes a new chain and new phrases (p. 11). Nothing stays linked; you can rewrite notes freely. Cost: one chain plus its phrases. Firmware 6.6.1 added a third tap that clones the instruments as well.

The same keys in Chain view clone a single phrase (p. 13), which costs one phrase and suits a one-bar change.

In programming terms: aliasing, shallow copy, deep copy. The musical reading matters more:

| You want the return to differ in | Use | Because |
|----------------------------------|-----|---------|
| nothing | shared chain | one object, and later edits keep both in step |
| order, transposition, one swapped bar | clone | the list changes; the bars stay linked |
| the notes themselves | deep clone, or clone one phrase | the copy must come apart from the source |

Sharing has one hazard: an edit meant for the return reaches the first statement too. Deep-cloning everything has the opposite one: a fix to the theme must be made in every copy by hand.

> **Try it.** In a scratch project, put one four-phrase chain in song rows `00`, `01` and `02`. Clone the second and deep-clone the third. Change one note in the first phrase of row `00` and play all three rows. Two should change and one should not.

> **Bench test.** If a chain lists the same phrase four times, does a deep clone make one new phrase or four? The sources do not say. Try it and record the answer; it decides what a deep clone costs.

### Independent track positions

Each track keeps its own play position (p. 5). A track walks down its column of chains until it meets an empty cell, then returns to the start of its list of chains (p. 10). Nothing forces the eight positions to agree.

So an empty song cell does not mean a rest. It means "end of this track's list": a track with three filled rows beside a track with four loops after three.

To keep a track silent and in step, give it a chain of empty phrases of the right length. The manual suggests chain `00` or `FE` for this (p. 10). This course uses `FE`.

Chains may differ in length, and then tracks drift; the manual's advice for staying aligned is to give chains equal lengths (p. 10). The course keeps to 4-bar chains unless a week says otherwise, so that one song row always means four bars. Drift used on purpose becomes polymeter in week 6. For now you need only predict it: two looping tracks realign after the least common multiple of their loop lengths.

Take track 1 looping a 4-bar chain and track 2 looping a 3-bar chain. lcm(4, 3) = 12, so they start together again after 12 bars, at bar 13: three passes of track 1 (3 × 4 = 12) and four of track 2 (4 × 3 = 12). In ticks, 12 × 96 = 1,152.

```cycles
bar      |1 . . . 5 . . . 9 . . . |13
track 1  |x . . . x . . . x . . . |x
track 2  |x . . x . . x . . x . . |x
```

Each `x` marks the start of a pass.

The prediction rests on one assumption: that "the start of its list" means the same row every time. The manual does not say whether that row is song row `00` or the top of the block where playback began. Bench test 1 in the lab settles it.

> **Try it.** Put a 4-phrase chain alone in song row `00` of track 1 and a 3-phrase chain alone in row `00` of track 2, each with a loud note on the first step of its first phrase. Predict the bar where the two loud notes next coincide, then count.

### The song view as score and sketchbook

With equal-length chains, the song view reads as a score turned on its side: rows run down through time, columns hold voices, and every row lasts the same number of bars. With 4-bar chains, row *r* starts at bar 4*r* + 1, so row `0A` (10) starts at bar 41.

**Number by voice.** Give each track a range of chain and phrase numbers: `10`-`1F` for track 1, `20`-`2F` for track 2, and so on. A chain number then tells you which voice it belongs to. Nothing enforces this; it is a naming convention.

**Check the clock.** With playback stopped, holding [OPTION] in Song view shows the track's time in minutes and seconds (p. 11), for comparing with the plan.

**Sketch below the piece.** The song has up to 256 rows and a 64-bar piece in 4-bar chains uses 16. The manual points out that the rows further down can hold arrangement sketches without disturbing the piece (p. 10). Leave an empty row between the piece and the sketches, since an empty cell ends each track's list. Try a section order or a transition down there, and copy it up when it works ([SHIFT]+[OPTION] starts a selection; [OPTION] copies; [SHIFT]+[EDIT] pastes, p. 7).

Firmware 6.6.0 added row selection in Song view ([LEFT] twice on track 1), with row moves and coloured row bookmarks, which suit marking section starts.

> **Try it.** In any project, leave row `10` empty and build two alternative orderings of your existing chains in rows `11`-`14` and `16`-`19`. Play each. Where playback goes when it reaches the gap is bench test 1, so watch for it.

### Hex and ticks

The unit shows values in hexadecimal. You know the base; what you need is speed with the values that recur.

| Hex | Decimal | Where it turns up |
|-----|---------|-------------------|
| `04`, `08`, `0C` | 4, 8, 12 | steps of beats 2, 3 and 4 |
| `06` | 6 | ticks in a default step (p. 26) |
| `10` | 16 | steps in a phrase; rows in a chain |
| `18` | 24 | ticks in a quarter note (p. 26) |
| `40` | 64 | steps in four bars |
| `60` | 96 | ticks in a default phrase (p. 26) |
| `7F` | 127 | top of the volume range (p. 14) |

Three conversions cover most of the course.

- **Step to tick.** On the default groove, step *n* starts at tick 6*n*. Step `A` (10) starts at tick 60: two and a half quarter notes in (60 ÷ 24 = 2.5), the "and" of beat 3.
- **Bar to song position.** With 4-bar chains, bar *b* sits at song row (*b* − 1) div 4, chain row (*b* − 1) mod 4. Bar 23: 22 = 4 × 5 + 2, so song row `05`, chain row `2`.
- **Ticks to seconds.** A quarter note lasts 60 ÷ BPM seconds and holds 24 ticks, so one tick lasts 2.5 ÷ BPM seconds and one bar lasts 96 × 2.5 ÷ BPM = 240 ÷ BPM seconds. At 96 BPM a tick lasts about 26 ms (2.5 ÷ 96 = 0.026) and a bar 2.5 s.

> **Try it.** Without the unit: which song row and chain row hold bar 50 of a piece in 4-bar chains, and how many seconds into the piece does it start at 96 BPM? Then find the row and compare with the time the unit shows when you hold [OPTION]. (49 = 4 × 12 + 1, so row `0C`, chain row `1`; 49 bars × 2.5 s = 122.5 s.)

### The form method

A loop is hard to extend because every element in it was tuned against every other, and nothing in it points anywhere. The method replaces "extend the loop" with "build a piece from an inventory in which the loop is one item". It has five habits and one rule, and every etude uses them.

**1. Inventory.** Before sequencing, list the material under five headings: motifs, grooves, instruments, harmonic areas, textures. A texture here means a combination of roles, such as "bass alone" or "melody over held chord". A list with one motif, one groove and one texture describes a loop, however good.

**2. Plan on one page.** Before opening Song view, write the sections with their bar counts, a density curve and a register curve across the whole duration, and one sentence for each boundary saying what changes there. One page, so that you see the whole piece at once, which the screen never shows.

**3. Named contrasts.** Adjacent sections differ in a stated, small number of dimensions, drawn from seven: pitch material, rhythm, timbre, register, density, harmony, metre. Change all seven and the listener hears a different piece. Change none and they hear the loop. Two or three per boundary works as a default.

**4. Transitions as objects.** A join gets its own chain, composed for the job: a fill, a thinning, a pivot note, a silence. In practice: clone the last chain of a section and replace its final phrase. The join then has a number, appears in the plan and can be revised without touching the section.

**5. Return with difference.** Anything that comes back comes back changed, and the plan says how. A return that differs in transposition or order needs a clone; one that differs in its notes needs a deep clone.

**The repeat budget.** Each etude states the largest number of times any phrase may sound unchanged in succession. This module counts it like this: follow one track through Chain and Song view and count consecutive plays of the same phrase number with the same TSP. A different transpose counts as a change. Silence from the empty chain does not count. The budget starts at 4 in week 2 and falls to 2 by week 7. This week's etude has no budget, because its product is a loop.

> **Try it.** Take one of your loops and write its inventory in five minutes. Count the entries under each heading. The heading with a single entry, or none, shows where a longer piece would have to find its contrast.

## Worked examples

One invented piece runs through all three examples: 64 bars at 96 BPM in D dorian, on four tracks. At 2.5 s a bar it lasts 64 × 2.5 = 160 s, or 2 min 40 s. Nobody has sequenced it; it shows the paperwork and the structure, not a sound.

### An inventory

| Heading | Items |
|---------|-------|
| Motifs | **M1** bass ostinato, one bar, onsets `x . . x . . x . \| . . x . . . x .` on D, D, A, C, A. **M2** mallet call, two bars, rising D-F-G-A then a held C. **M3** mallet answer, two bars, falling C-A-G-E, ending on D. |
| Grooves | **G0** default, every step 6 ticks. **G1** light swing, steps of 7 and 5 ticks alternating (7 + 5 = 12, so each pair still fills an eighth note). |
| Instruments | `00` bass. `01` mallet. `02` sustained pad, one note at a time. `03`-`05` kick, snare and hat sharing one track. |
| Harmonic areas | **H1** D dorian over a D pedal. **H2** the same material a fourth higher, G dorian. |
| Textures | **T1** bass alone. **T2** bass and drums. **T3** bass, drums and mallet. **T4** all four. **T5** mallet and pad with no bass or drums. |

H2 costs no phrases at all: a chain row's TSP of `05` moves a phrase up five semitones, a perfect fourth (p. 12), and D dorian moved up a fourth gives G dorian.

### A one-page plan

Tracks: 1 bass, 2 mallet, 3 pad, 4 drums. All chains last 4 bars, so the piece fills 64 ÷ 4 = 16 song rows, `00` to `0F`.

| Section | Bars | Count | Song rows | What happens | Density (tracks) | Register |
|---------|------|-------|-----------|--------------|------------------|----------|
| Intro | 1-8 | 8 | `00`-`01` | M1 alone; hat joins at bar 5 | 1, then 2 | low |
| A | 9-24 | 16 | `02`-`05` | M2 and M3 over M1 and full drums | 3 | low to middle |
| B | 25-40 | 16 | `06`-`09` | everything a fourth up; drums swing; pad enters | 4 | low to upper middle |
| Break | 41-48 | 8 | `0A`-`0B` | M3 fragments over held pad | 2 | middle to high |
| A′ | 49-60 | 12 | `0C`-`0E` | A returns with the pad kept and the ostinato displaced | 4 | low to high |
| Coda | 61-64 | 4 | `0F` | M1 alone, ending on a held D | 1 | low |

Check: 8 + 16 + 16 + 8 + 12 + 4 = 64 bars, and 2 + 4 + 4 + 2 + 3 + 1 = 16 rows.

The last two columns give the density and register curves.

Boundaries, one sentence each, with the dimensions named:

1. **Intro to A (bar 9).** The mallet enters with M2 and the drums fill out: density and register.
2. **A to B (bar 25).** A bass walk-up in bar 24 leads to H2, the drums move to G1 and the pad enters: harmony, rhythm, density.
3. **B to Break (bar 41).** Bass and drums stop on the downbeat after a one-bar thinning in bar 40: density and register.
4. **Break to A′ (bar 49).** Bass and drums re-enter in H1 on straight time: density, harmony, rhythm.
5. **A′ to Coda (bar 61).** Everything but the bass drops out: density.

Returns: A′ differs from A in three stated ways. The pad stays in, the mallet plays M2 an octave higher, and the bass ostinato starts two steps late.

Proposed repeat budget: 4.

### From plan to song and chains

```song
# SONG   1  2  3  4
00       10 FE FE FE     ; Intro, bars 1-4: bass alone
01       10 FE FE 40     ; bars 5-8: hat joins
02       10 20 FE 41     ; A, bars 9-12
03       10 21 FE 41     ; bars 13-16
04       10 20 FE 41     ; bars 17-20
05       11 22 FE 42     ; bars 21-24: transition chains
06       12 23 30 43     ; B, bars 25-28: up a fourth, swing
07       12 24 30 43     ; bars 29-32
08       12 23 30 43     ; bars 33-36
09       13 25 31 44     ; bars 37-40: thinning in bar 40
0A       FE 26 32 FE     ; Break, bars 41-44
0B       FE 27 32 FE     ; bars 45-48
0C       14 28 30 41     ; A', bars 49-52: displaced ostinato
0D       10 29 30 41     ; bars 53-56
0E       14 28 31 45     ; bars 57-60
0F       15 FE FE FE     ; Coda, bars 61-64
```

Tracks 5 to 8 stay empty. Chain `FE` holds four rows of an empty phrase, so a resting track still takes four bars per row and keeps its place (p. 10). An empty cell there would end the track's list and send it back to the top.

The bass column shows all three kinds of reuse.

```chain
# CHAIN 10  (bass, section A)
0  10 00      ; M1
1  10 00
2  10 00
3  11 00      ; M1 with a turn in the last beat
```

```chain
# CHAIN 11  (bass, transition into B: a clone of 10)
0  10 00
1  10 00
2  10 00
3  13 00      ; new phrase: walk-up D-E-F#-G into bar 25
```

```chain
# CHAIN 12  (bass, section B: a clone of 10)
0  10 05      ; same phrases, up a fourth (5 semitones)
1  10 05
2  10 05
3  11 05
```

```chain
# CHAIN 14  (bass, section A': a deep clone of 10, then edited)
0  16 00      ; M1 with every note moved two steps later
1  16 00
2  16 00
3  17 00
```

Chain `10` is shared across six song rows. Chains `11` and `12` are clones: they cost one chain each and, between them, one new phrase (`13`). Chain `14` had to be a deep clone, because displacing the ostinato rewrites the notes, and A must not change with it. The transition into B is an object, as habit 4 asks: chain `11`, with the mallet's and drums' own transition chains (`22`, `42`) beside it in row `05`.

Now count the budget on the bass. Rows `00` to `04` play chain `10` five times: phrase `10` three times, then `11`, then `10` three times again. The longest unchanged run is 3. Chain `11` gives 3 more and then phrase `13`. Chain `12` plays phrase `10` at TSP `05`, which counts as changed from TSP `00`, and again runs to 3. Chains `13` and `15`, not shown, keep the same three-plus-one shape. No run exceeds 3, inside the budget of 4. Had chain `10` listed phrase `10` four times, rows `00` to `04` alone would have produced a run of 5 × 4 = 20.

One state change needs care. `GRV` holds until the next groove command on that track (p. 70), so the drum chain at row `06` carries `GRV 01` on its first step and the drum chain at row `0C` must carry `GRV 00`, or A′ will swing.

## Lab

Work in a fresh project unless a task says otherwise. Record every result with the date and firmware version; week 6 depends on them.

1. **Hex and tick drills.** Answer on paper, then check against the answers at the end of the lab.

   1. `40` in decimal.
   2. `7F` in decimal.
   3. 96 in hex.
   4. 200 in hex.
   5. The tick at which step `E` starts on the default groove, and its place in the bar.
   6. The song row and chain row of bar 38, with 4-bar chains.
   7. The first and last bar of song row `0D`, with 4-bar chains.
   8. The length in ticks, and in seconds at 96 BPM, of a chain of `0C` phrases.
   9. Track 1 loops four 4-bar chains; track 2 loops three. After how many bars, and how many song rows, do they realign?
   10. The duration of 64 bars at 132 BPM.

   *Product:* ten answers and your time.

2. **Bench test 1: where a track loops to.** This test finds out what "the start of its list" (p. 10) means.

   Make four one-phrase chains, each with a single note on step `0`: chain `01` plays `C-4`, `02` plays `E-4`, `03` plays `G-4`, `04` plays `B-4`. Lay them out on track 1 in two blocks with a gap:

   ```song
   # SONG   1
   00       01      ; C
   01       02      ; E
   02       .       ; gap
   03       03      ; G
   04       04      ; B
   05       .
   ```

   - (a) Put the cursor on row `00` and press [PLAY]. Write down the notes you hear for eight bars.
   - (b) Stop. Put the cursor on row `03` and press [PLAY]. If playback does not start at the cursor row, record that. Write down eight bars again. G, B, G, B means the track loops to the top of its block; G, B, C, E means it loops to row `00`.
   - (c) Now give track 2 a longer list at the top: chain `03` at row `00`, chain `04` at rows `01` and `02`. Start from row `00`. Track 1 loops 2 bars (C, E) and track 2 loops 3 (G, B, B). If positions are independent, C and G sound together at bar 1 and next at bar 1 + lcm(2, 3) = bar 7. Count and confirm.

   *Product:* three lines in the results record.

3. **Bench test 2: HOP and its own row.** `HOP` in a phrase jumps to a row of the next phrase (p. 70), which shortens the phrase. The sources do not say whether the row carrying the command sounds first.

   On track 1, make this phrase and put it in both rows of a two-row chain:

   ```phrase
   # PHRASE 05  (track 1)
   0  G-4 . 00  .        .   .      ; marks the start of each pass
   4  C-4 . 00  .        .   .
   8  C-4 . 00  .        .   .
   B  C-5 . 00  HOP 00   .   .      ; an octave up, so you can tell if it sounds
   ```

   On track 2, loop a full 16-step phrase with one low note on step `0`.

   - (a) Play. Does the `C-5` on row `B` sound?
   - (b) Count bars on track 2 until its low note and track 1's `G-4` coincide again. If row `B` plays, the short phrase lasts 12 steps (12 × 6 = 72 ticks) and the tracks meet after lcm(12, 16) = 48 steps: 3 bars of track 2, 4 passes of track 1. If row `B` does not play, it lasts 11 steps (66 ticks) and they meet after lcm(11, 16) = 176 steps, which is 11 bars.

   *Product:* yes or no for (a), and the bar count for (b), which should agree with it.

4. **Bench test 3: groove resolution across tracks.** A groove can run at 24, 48, 96 or 192 ticks per quarter note (p. 26). Where that setting lives, and how tracks at different resolutions line up, is open.

   - (a) In Groove view, find the resolution setting. Record where it sits and what it is called.
   - (b) Make groove `01` a single row of `06` at 24 ticks per quarter. Make groove `02` a single row of `0C` at 48 ticks per quarter. Both describe a 16th-note step: 24 ÷ 4 = 6 and 48 ÷ 4 = 12. After setting groove `02`, look at groove `01` again. Did its resolution change too? That tells you whether the setting belongs to the groove or to the project.
   - (c) Put the same phrase, with notes on steps `0`, `4`, `8` and `C`, on tracks 1 and 2, with `GRV 01` on the first step of one and `GRV 02` on the other. Play for 16 bars. Record whether the two stay in unison, flam, or drift apart.
   *Product:* three lines in the results record.

5. **Bench test 4: the largest groove value.** In a spare groove, raise row `0` as far as it goes and record the value in hex and decimal. The longest single step then lasts that many ticks × 2.5 ÷ BPM seconds. To confirm, put notes on steps `0` and `1` of a phrase that uses this groove and time the gap. If the limit turned out to be `FF` (255), the gap at 120 BPM would be 255 × 2.5 ÷ 120 = 5.3 s.

   *Product:* the limit, the predicted gap and the measured gap.

6. **Audit of three loops.** Open three of your existing loops in turn and fill in one column each. Change nothing.

   | Question | Loop 1 | Loop 2 | Loop 3 |
   |----------|--------|--------|--------|
   | Tracks in use | | | |
   | Chains and phrases in use | | | |
   | Phrases marked shared (asterisk, p. 14) | | | |
   | Length in bars, and in seconds ([OPTION] held, p. 11) | | | |
   | Level that holds the interest: instrument, table, phrase, chain or song | | | |
   | Dimensions that never change, of the seven | | | |
   | Longest run of one phrase unchanged | | | |
   | Inventory headings with one entry or none | | | |

   Then write one sentence per loop: what would have to change, and at which level, for it to last 32 bars.

   *Product:* the completed table and three sentences.

### Results record

| Test | Prediction | Observed | Firmware | Date |
|------|------------|----------|----------|------|
| 1a Loop from row `00` | | | | |
| 1b Loop from a lower block | | | | |
| 1c Independent positions: C with G at bar 7 | | | | |
| 2a Row carrying `HOP` sounds | | | | |
| 2b Bars to realign | | | | |
| 3a Where the resolution setting lives | | | | |
| 3b Per groove or per project | | | | |
| 3c Alignment at 24 against 48 | | | | |
| 4 Largest groove value; longest step | | | | |
| Deep clone of a repeated phrase: one new phrase or four | | | | |

### Drill answers

1. 4 × 16 = 64.
2. 7 × 16 + 15 = 127.
3. 96 = 6 × 16, so `60`.
4. 200 = 12 × 16 + 8, so `C8`.
5. Step `E` is 14; 14 × 6 = tick 84 (`54`). 84 ÷ 24 = 3.5, so the "and" of beat 4.
6. 37 = 4 × 9 + 1, so song row `09`, chain row `1`.
7. `0D` is 13; 13 × 4 + 1 = bar 53, to bar 56.
8. `0C` is 12 phrases; 12 × 96 = 1,152 ticks; 12 bars × 2.5 s = 30 s.
9. Loops of 16 and 12 bars; lcm(16, 12) = 48 bars, which is 48 ÷ 4 = 12 song rows (`0C`). Track 1 has made 3 passes and track 2 has made 4.
10. One bar lasts 240 ÷ 132 = 1.818 s; 64 × 1.818 = 116.4 s, about 1 min 56 s.

## Etude

**Brief.** Make the baseline: one 8-bar loop that you like, written as well as you can, with its inventory and a one-page plan for a 64-bar piece built from it. Do not realise the plan. Weeks 7 and later come back to this material.

**Forces.** At most four tracks. Any instruments you already have.

**Constraints.**

- Eight bars as two song rows of 4-bar chains, every chain the same length, so the tracks stay aligned (p. 10).
- Chains and phrases numbered by track; a resting track gets the empty chain, never an empty cell.
- At least one track's two chains must be related by cloning, not built separately.

**Duration target.** 8 bars sequenced; 64 bars planned. State the tempo and work out both durations: at 96 BPM, 20 s and 2 min 40 s.

**Repeat budget.** None for the loop. Propose one for the plan.

**Plan.** On one page, using the worksheet or your own layout:

- the inventory under all five headings, with the loop's material marked and anything not yet written marked "to write";
- sections with bar ranges and counts that sum to 64, and the song rows each will occupy;
- a density curve and a register curve across the whole duration;
- one sentence per boundary, naming at most three of the seven dimensions;
- at least two transitions described as objects, each with the chain it will clone;
- every return, with how it differs and whether that needs a clone or a deep clone.

**Hand in to yourself.** The project file; a render of the loop played four times (set the repeats in the render view); the plan; three lines of reflection on what the plan asks for that the loop does not yet contain.

## Listening review

Render the loop four times through. Wait until the next day. Listen once, away from the unit, without stopping. Then annotate the plan with what you heard.

This week's questions:

1. On which repeat did your attention leave? That number gives a first, personal estimate of a repeat budget for this material.
2. Which single layer could carry eight bars alone? Does the plan use it that way anywhere?
3. Which dimension of the seven does the loop never vary? Does the plan vary it, and at which boundary?
4. Read the plan while the render plays. Can you hear, in your head, what happens at each boundary? A boundary you cannot imagine needs a better sentence.

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists, but bar counts do not sum to 64 or boundaries lack sentences. | The plan fills one page, the arithmetic checks, and every boundary and return has a stated change. |
| Technique of the week | The loop plays, but tracks rest on empty cells or chains differ in length by accident. | Chains are numbered by track and equal in length; shared, cloned and deep-cloned material can each be pointed to and justified. |
| Development | The plan repeats the loop with layers added and removed. | The plan names contrasts in two or three dimensions per boundary, treats transitions as chains, and proposes a repeat budget it can meet. |
| Sound | The loop's layers mask one another. | Each of the four tracks stays audible and has a clear role and register. |

## Going further

- Write a second one-page plan from the same inventory with a different section order and a different high point. Comparing two plans teaches more than polishing one.
- Take a recorded piece you know well, in any style, and write its plan after the fact: sections, bar counts, the two curves, a sentence per boundary. Count how many dimensions change at each boundary.
- Read the manual's account of live mode (pp. 10-11). It lets you cue chains track by track, which week 10 uses to audition section orders. Try it on your loop's two rows.

## Summary

- The sequencer stores references: song cells name chains, chain rows name phrases, steps name instruments. The level you edit at sets how far the edit reaches.
- Change over time lives in the song and chain levels. Polishing phrases and instruments alone produces loops.
- A shared chain is one object, a clone shares its phrases, a deep clone shares nothing. Choose by what the return must change.
- Tracks keep separate positions; an empty cell ends a list. Loops of different length realign at their least common multiple.
- The form method: inventory, one-page plan, named contrasts, transitions as objects, return with difference, and a repeat budget.

Next week starts the sound strand with FM bells and mallets; its etude is the first to be planned and then realised: 24 bars, repeat budget 4.
