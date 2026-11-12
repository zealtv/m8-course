---
title: "Polymeter"
week: 6
strand: rhythm
outcomes: [1, 4]
needs: [5]
duration_target: "64 bars"
repeat_budget: 3
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "10-13, 26, 70-71"
---

## Overview

Last week every layer shared the bar and divided it differently. This week the layers share the pulse and group it differently: cycles of 16, 12 and 10 steps start together, drift, and meet again at a moment you can calculate. That moment is a formal event you get for the price of arithmetic, and the stretch before it is long: three short phrases can fill fifteen bars without any exact repeat of the whole. For a composer trying to leave the 4-bar loop, a loop that does not line up with itself is a good first exit.

By the end of the week you can:

- shorten or lengthen a track's cycle by `HOP`, by groove and by chain length, and say what each costs;
- write the phase table for a set of cycle lengths and predict the bar where they realign;
- lay out a song whose tracks run on different clocks so that every section still starts on one row;
- set a pitch cycle against a rhythm cycle of another length;
- plan and realise 64 bars built on realignments that you chose in advance.

## Before you start

You need week 5 (grooves, and your lab task 1 results on when a groove command bites) and, from week 1, bench tests 1 and 2: where a track loops to, and whether the row that carries `HOP` sounds. From week 4 you need bench test 9 item d: how a table at TIC `00` counts triggers.

**A convention.** This module writes `HOP` for the case where its own row sounds, so a cycle of *n* steps carries `HOP 00` on row *n* − 1. If your bench test 2 found that the row does not sound, put every `HOP` one row lower and leave that row otherwise empty.

Open the week-5 project: the kit, a bass and a mallet. Set 120 BPM. Keep the appendix's table of least common multiples to hand.

> **Manual.** Song and Chain views, pp. 10-13; Groove view, p. 26; `HOP`, `RMX` and `SNG`, pp. 70-71.

> **Starting point.** Nobody has tried any example in this module on a unit. The cycle arithmetic holds whatever the unit does; the bench tests decide which rows the commands sit on.

## Concepts

### Same pulse, different cycle

A polyrhythm divides one span in two ways: the spans agree and the pulses differ. A **polymeter** keeps one pulse and groups it in cycles of different lengths: the pulses agree and the spans differ. Twelve steps against sixteen:

```cycles
16 steps  |x . . . . . . . . . . . . . . . |x . . . . . . . . . . . . . . . |x . . . . . . . . . . . . . . . |x
12 steps  |x . . . . . . . . . . . |x . . . . . . . . . . . |x . . . . . . . . . . . |x . . . . . . . . . . . |x
```

Each `x` marks the start of a cycle. Every 16th note lines up; the cycle starts do not. Two cycles of *a* and *b* steps that start together next start together after lcm(*a*, *b*) steps: lcm(16, 12) = 48 steps, which is three bars of sixteen and four passes of twelve.

The longer that least common multiple, the longer the music runs before the combined pattern repeats:

| Cycles | lcm in steps | In bars of 16 |
|--------|--------------|---------------|
| 16 : 12 | 48 | 3 |
| 16 : 10 | 80 | 5 |
| 16 : 14 | 112 | 7 |
| 16 : 15 | 240 | 15 |
| 16 : 12 : 10 | 240 | 15 |
| 16 : 14 : 12 | 336 | 21 |

For three lengths, fold: lcm(16, 12) = 48, then lcm(48, 10) = 240. Lengths that share factors with 16 realign soon; a length coprime to 16, such as 15, takes its own length in bars.

You met this in week 1 at a coarser grain (chains of 3 and 4 bars meet after 12 bars) and in week 4 at a finer one (a three-row table at TIC `00` against five hits a bar). The same sum governs all three.

> **Try it.** Without the unit: a 16-step kick phrase, a 12-step bass phrase and a 9-step bell phrase start together at bar 1. At which bar do all three next start together? (lcm(16, 12) = 48; lcm(48, 9) = 144 steps = 9 bars, so bar 10.)

### Three ways to change a cycle's length

**`HOP` in a phrase.** `HOP xy` jumps to row y of the next phrase (p. 70), cutting the rest of this one. `HOP 00` on row `B` gives a phrase of twelve steps:

```phrase
# PHRASE 20  (track 5, bass, 12 steps)
0  C-3 64 10  .        .   .
3  C-3 50 10  .        .   .
6  D#3 64 10  .        .   .
8  G-3 50 10  .        .   .
B  A#2 64 10  HOP 00   .   .      ; row B sounds, then on to row 0 of the next phrase: 12 steps, 72 ticks
```

The "next phrase" is the next row of the chain, so a chain of four of these lasts 4 × 12 = 48 steps, three bars. A `HOP` with y above zero enters the next phrase part-way down, which shortens that one from the front; this module keeps y at `0`. The notes say nothing about the first digit in a phrase, so leave it at `0`.

**A groove that skips steps.** Twelve rows of `06` and four of `00` make every phrase on that track last 12 × 6 = 72 ticks (pp. 26, 81): rows `C` to `F` never play. Unlike `HOP`, the groove acts on the whole track until another `GRV` arrives, needs no command in each phrase, and can produce lengths that no `HOP` can, because it counts ticks, not rows:

| Groove rows | Phrase lasts | In 16ths |
|-------------|--------------|----------|
| twelve `06`, four `00` | 72 ticks | 12 |
| fifteen `06`, one `00` | 90 ticks | 15 |
| fifteen `06`, one `0C` | 90 + 12 = 102 ticks | 17: longer than a bar |
| `08 08 08 00` three times, then four `00` | 9 × 8 = 72 ticks | 12, heard as nine triplets |

The last row combines both weeks: a bar of 3/4 in triplets against a bar of 4/4 in 16ths. A command on a skipped row presumably never runs, so do not put a `HOP` or a `GRV` where the groove skips; and until your week-5 lab task 1 has settled how a groove's position relates to the phrase, do not combine `HOP` with a skipping groove on one track.

**Chains of unequal length.** A chain holds up to sixteen phrases and ends at its first empty row (p. 12); a track loops its own list of chains (p. 10). So a chain of three phrases beside a chain of four is a polymeter in bars: lcm(3, 4) = 12 bars. This costs nothing and suits slow layers: a three-bar bass line under a four-bar harmony.

| Means | Unit | Acts on | Leans on |
|-------|------|---------|----------|
| `HOP` | steps | one phrase | bench test 2 (does the row sound) |
| Groove | ticks | a track, until changed | week-5 lab task 1 |
| Chain length | phrases | a chain | bench test 1 (the loop point), if the track loops |

> **Try it.** Loop phrase 20 alone on track 5 against four kicks to the bar on track 1. Count the bars until the bass's low `C-3` next lands on a downbeat. Three bars means twelve steps; eleven bars means your `HOP` row did not sound (lcm(11, 16) = 176 steps).

### Phase

At any barline, ask how far through its cycle the short layer has got: its **phase**. Bar *k* starts 16(*k* − 1) steps into the piece, so a cycle of *b* steps stands at phase 16(*k* − 1) mod *b*.

| Bar | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|-----|---|---|---|---|---|---|---|
| Steps elapsed | 0 | 16 | 32 | 48 | 64 | 80 | 96 |
| Phase of a 12-cycle | 0 | 4 | 8 | 0 | 4 | 8 | 0 |
| Phase of a 10-cycle | 0 | 6 | 2 | 8 | 4 | 0 | 6 |
| Phase of a 15-cycle | 0 | 1 | 2 | 3 | 4 | 5 | 6 |

Three things to read from a phase table.

- **Where the layers meet.** A zero means that layer starts a cycle on that barline. The 12-cycle meets the bar at bars 4 and 7; the 10-cycle at bar 6; both together first at bar 16.
- **How many alignments exist.** A cycle of *b* steps against a bar of 16 passes through *b* / gcd(16, *b*) phases: 12 / 4 = 3, 10 / 2 = 5, 15 / 1 = 15. The 12-cycle only ever meets the bar in three ways, so its three bars are all the variety it has; the 15-cycle shows the bar fifteen different faces.
- **Where the accents walk.** Turn the question round: the *j*-th pass of the short cycle starts at step 12(*j* − 1) mod 16 of the bar, which gives 0, C, 8, 4. The bass's first note falls on beat 1, then beat 4, then beat 3, then beat 2. A cycle one step shorter than the bar (15) starts one 16th earlier each pass; one step longer (17) starts one later.

The phase table is the score of a polymeter. Written before you sequence, it tells you which bars will sound settled and which will not.

> **Try it.** Write the phase row for a 14-cycle up to its first return to zero. (0, 2, 4, 6, 8, 10, 12, 0: seven phases, 14 / 2, so it meets the bar at bar 8.) Then say where its third pass starts. (28 steps in: 28 = 16 + 12, so step `C` of bar 2.)

### A song on several clocks

Shorten one track's phrases and its song rows stop lining up with the others. With 4-phrase chains throughout, a row of 16-step phrases lasts four bars and a row of 12-step phrases three. Row `01` of the first track starts at bar 5; row `01` of the second at bar 4. The Song view no longer reads across.

Two habits keep it readable.

**Make a section a whole number of realignment periods**, so that every track arrives at the boundary together, and write a **length ledger** that proves it: for each track and section, phrases × steps = the section's steps.

**Give every track the same number of song rows in each section**, by choosing chain lengths. Then each section starts on one song row for all tracks, and you can start playback there. For a 12-bar section of 16 against 12 (192 steps), make each row one realignment period:

| Track | Cycle | Chain | Rows | Check |
|-------|-------|-------|------|-------|
| 1, kick | 16 steps | 3 phrases = 48 steps | 4 | 4 × 3 × 16 = 192 |
| 5, bass | 12 steps | 4 phrases = 48 steps | 4 | 4 × 4 × 12 = 192 |

Every row now lasts three bars on both tracks. Where a period needs more than sixteen phrases, split it: a 15-bar section of 12-step phrases needs 240 / 12 = 20 phrases, so two chains of ten.

A resting track still needs a chain of empty phrases of the right total length (p. 10): an empty cell would send the track back to the start of its list. Three empty 16-step phrases rest for three bars.

Two checks on the unit. Holding [OPTION] in Song view with playback stopped shows a track's time in minutes and seconds (p. 11): put the cursor on each track in turn at a section's first row and compare, though check first that the figure accounts for shortened phrases. And never judge a polymeter by starting playback in the middle of a section: the tracks start their rows together, which is not where the piece would have them.

> **Try it.** Lay out the two tracks above for four rows. Start playback from row `02`. Do the bass and kick begin in phase? They should: bar 7 has phase 0.

### Meetings by arithmetic and by force

A realignment only matters if the listener can hear it coming or hear it land. Plan it as you would a cadence.

- **Mark it.** Give the meeting something that happens nowhere else: a hit on every track, a bar of silence after it, a change of harmony, a new instrument.
- **Starve the bars before it.** If the layers share no strong accent for fourteen bars, the fifteenth carries weight without help.
- **Use the partial meetings.** In 16 : 12 : 10 the 12-cycle meets the bar at bars 4, 7, 10 and 13, the 10-cycle at bars 6 and 11. Those are smaller events on the way to bar 16: a ready-made hierarchy.

You can also engineer where a meeting falls. To make a 12-cycle arrive at phase 0 on bar 5, 64 steps in, find what is left over: 64 mod 12 = 4. Start the track with a 4-step lead-in (a phrase with `HOP 00` on row `3`), then the cycles: 4 + 5 × 12 = 64.

Or you can impose a meeting. Starting a new chain puts a track at row 0 of a phrase whatever its phase was, so a section boundary where the ledger does not balance is a **reset**: the cycle gets cut off mid-way. A reset sounds like an edit, a realignment like an arrival. Use both, and say in the plan which is which.

Two commands move positions directly.

- `RMX xy` sets the phrase position of tracks to the left of the one that holds it to row y; x selects which tracks (p. 71). It shifts a track's phase in mid-flight, by command. How x selects is bench test 8.
- `SNG xx` moves its own track to another song row, counted from where it stands, and does nothing if that row cannot play (p. 71). It lets a track repeat a block of rows without an empty cell beneath it. The value's encoding and the moment of the jump are also for the bench.

Firmware fixes between 6.6.2 and 6.6.4 A touched `RMX`, so results on older firmware may differ.

> **Try it.** Build the 4-step lead-in and five passes of phrase 20 against a kick. Does the bass's `C-3` meet the downbeat of bar 5? Count: 4 + 12 + 12 + 12 + 12 + 12 = 64 = 4 × 16.

### Isorhythm: a pitch cycle against a rhythm cycle

Polymeter does not need two tracks. Medieval composers set a repeating rhythm, the *talea*, against a repeating pitch series of another length, the *color*, in one voice. The line repeats only after lcm(color, talea) notes.

On the M8 a table at TABLE TIC `00` advances one row per trigger (p. 24), and its N column transposes. So let the phrase hold the talea, every note the same pitch, and the instrument's table hold the color. Seven notes to the bar against five pitches repeat after lcm(7, 5) = 35 notes, five bars, from one phrase and one table. Worked example 3 builds it.

This leans on your bench test 9 item d (whether the `HOP` row takes a trigger, and which row the first note gets). Chain TSP still moves the whole color, and TRANSP. must stay on for the instrument.

> **Try it.** Give a mallet a TIC `00` table with N `00`, `07` on rows 0 and 1 and the loop your bench test 9 supports. Play it on steps `0`, `4` and `8` of a looping phrase. Three notes against two pitches: how many bars before the pattern repeats? (lcm(3, 2) = 6 notes, two bars.)

## Worked examples

### Sixteen against twelve, laid out

Kick on track 1 in 16-step phrases, bass on track 5 in the 12-step phrase 20 and a variant, 21. The repeat budget of 3 shapes the bass chain: three plays, then the variant, which is also exactly one realignment period.

```chain
# CHAIN 50  (track 5: one period, 4 x 12 = 48 steps = 3 bars)
0  20 00
1  20 00
2  20 00
3  21 00      ; the variant: budget of 3 kept
```

```chain
# CHAIN 10  (track 1: 3 x 16 = 48 steps = 3 bars)
0  10 00
1  10 00
2  11 00      ; kick variant with a pickup
```

```song
# SONG   1  2  3  4  5
00       10 .  .  .  50    ; bars 1-3
01       10 .  .  .  50    ; bars 4-6
02       12 .  .  .  51    ; bars 7-9    chain 51 lifts the bass: TSP 05
03       13 .  .  .  52    ; bars 10-12  join into bar 13
```

Row *r* starts at bar 3*r* + 1 on both tracks. Within each row the bass starts its passes on steps `0`, `C`, `8` and `4` of successive bars:

```cycles
bar       |1 . . . . . . . . . . . . . . . |2 . . . . . . . . . . . . . . . |3 . . . . . . . . . . . . . . . |4
kick 16   |x . . . x . . . x . . . x . . . |x . . . x . . . x . . . x . . . |x . . . x . . . x . . . x . . . |x
bass 12   |C . . C . . D . G . . A |C . . C . . D . G . . A |C . . C . . D . G . . A |C . . C . . D . G . . A |C
```

Letters stand for the notes of phrase 20 (`D` for `D#3`, `A` for `A#2`). The low `C` meets a kick on beat 1 of bar 1, beat 4 of bar 1, beat 3 of bar 2 and beat 2 of bar 3, then beat 1 of bar 4. The fourth pass is phrase 21, so the variant always falls in the same place: the last twelve steps of each period, as a turnaround.

Twelve bars hold four periods. Played unchanged that would be four identical 3-bar blocks, which is the loop again at a larger size. So rows `02` and `03` change something the polymeter does not: here, the bass's transposition and the kick's last phrase.

### Three layers, fifteen bars

Add a bell on track 6 in a 10-step phrase (`HOP 00` on row `9`). The three cycles realign after lcm(16, 12, 10) = 240 steps, fifteen bars. The phase table for the whole period:

| Bar | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|-----|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|
| Bass, 12 | **0** | 4 | 8 | **0** | 4 | 8 | **0** | 4 | 8 | **0** | 4 | 8 | **0** | 4 | 8 | **0** |
| Bell, 10 | **0** | 6 | 2 | 8 | 4 | **0** | 6 | 2 | 8 | 4 | **0** | 6 | 2 | 8 | 4 | **0** |

Check two cells: bar 6 starts 80 steps in, 80 mod 12 = 8 and 80 mod 10 = 0; bar 11 starts 160 steps in, 160 mod 12 = 4 (13 × 12 = 156) and 160 mod 10 = 0.

Events fall out of the table. The bass meets the bar at bars 4, 7, 10 and 13; the bell at bars 6 and 11; nothing but the kick is at phase 0 at bars 2, 3, 5, 8, 9, 12, 14 and 15; everything meets at bar 16. Bass and bell meet each other every lcm(12, 10) = 60 steps, at steps 60, 120 and 180, which fall inside bars 4, 8 and 12 (60 = 3 × 16 + 12, so step `C` of bar 4). A plan can hang a small accent on each.

The ledger for this 15-bar section:

| Track | Cycle | Phrases | Chains | Check |
|-------|-------|---------|--------|-------|
| 1, kick | 16 | 15 | 8 + 7 | 15 × 16 = 240 |
| 5, bass | 12 | 20 | 10 + 10 | 20 × 12 = 240 |
| 6, bell | 10 | 24 | 12 + 12 | 24 × 10 = 240 |

Two song rows on every track. The rows do not line up inside the section (the kick's second chain starts at bar 9, the bass's at step 120, half-way through bar 8), but the section starts and ends on shared rows.

### Seven notes, five pitches

The talea, in the phrase: seven notes on one pitch.

```phrase
# PHRASE 60  (track 6, mallet: the talea)
0  C-4 64 08  .   .   .
3  C-4 50 08  .   .   .
5  C-4 50 08  .   .   .
8  C-4 64 08  .   .   .
A  C-4 50 08  .   .   .
C  C-4 64 08  .   .   .
E  C-4 50 08  .   .   .      ; x . . x . x . . x . x . x . x .
```

The color, in the instrument's table: five transpositions that spell a minor pentatonic on C.

```table
# INST 08's table  (TIC 00: a row per note)
0  00 .  .        .  .      ; C
1  03 .  .        .  .      ; D#
2  07 .  .        .  .      ; G
3  0A .  .        .  .      ; A#
4  05 .  .        .  .      ; F
5  .  .  HOP 00   .  .      ; a cycle of 5, if the HOP row takes no trigger
```

Bar *k* starts on color row 7(*k* − 1) mod 5:

| Bar | Starts on row | Pitches |
|-----|---------------|---------|
| 1 | 0 | C D# G A# F C D# |
| 2 | 2 | G A# F C D# G A# |
| 3 | 4 | F C D# G A# F C |
| 4 | 1 | D# G A# F C D# G |
| 5 | 3 | A# F C D# G A# F |
| 6 | 0 | as bar 1 |

Five bars from one phrase, and the accented notes (steps `0`, `8`, `C`) get a different pitch in every bar: C, A#, C in bar 1; G, C, G in bar 2. One phrase played five times, though, is still five plays for the repeat budget: after three, change the talea or the chain's TSP.

Clone the instrument before you give it this table, so the plain mallet survives. The table belongs to the instrument, so every track that plays instrument `08` shares its trigger count, if your bench test 9 found that instruments count rather than tracks.

## Lab

Allow 1 h 45 min. Keep adding to the results record.

1. **Bench test 8: RMX, and SNG** (25 min). Settles open question 8 in the course notes.

   *Set-up.* Tracks 1 to 4 each loop one 16-step phrase with a single note on step 0: `C-4`, `E-4`, `G-4`, `B-4`, on a short mallet. Track 6 plays a quiet closed hat on every step, as a ruler. Track 5 gets a chain of four phrases: the first carries the `RMX` on step `8`, the other three are empty. A looping `RMX` would throw its targets back on every pass.

   - (a) `RMX 04` on track 5. A track sent from row `8` back to row `4` has twelve rows to go, not eight, so from then on its marker note should fall on step `4` of the bar. Which of the four markers moved?
   - (b) Change the first digit: `14`, `24`, `34`, `44`, `84`, `F4`. Stop and restart between runs. Write down which tracks move for each. Does the digit count tracks leftward, name a track, or act as a set of bits?
   - (c) Move the command to track 8 with markers on tracks 1 to 7. How far left does it reach?
   - (d) Does the note on the target row sound at the moment of the jump? Put a marker on row `4` of one target and listen at step `8`.
   - (e) `SNG`. Give track 1 four song rows holding chains with different marker pitches. Put `SNG` on the last step of row `01`'s chain and read the help text for the value. Find the value that sends the track back to row `00`. Does it jump at the command or at the end of the chain? What happens when the target cell is empty?

   *Product:* results-record lines for (a) to (e), and one sentence each on what you would use `RMX` and `SNG` for.

2. **Phase tables, predicted and checked** (35 min). For each set, write the phase table on paper up to the realignment, with the bar of every partial meeting. Then realise it and count.

   - (a) 16 : 12, the 12 by `HOP`. Predicted: 3 bars.
   - (b) 16 : 12, the 12 by a skipping groove (twelve `06`, four `00`). Does it agree with (a) to the step?
   - (c) 16 : 12 : 10. Predicted: 15 bars, with the meetings of worked example 2.
   - (d) 16 : 15, the 15 by groove (fifteen `06`, one `00`). Predicted: 15 bars, the short phrase starting one step earlier each bar.

   Use a marker note on the first step of each cycle, each on a different pitch, so a meeting sounds as a chord.
   *Product:* four phase tables, each marked "agrees" or with the difference you heard.

3. **A song on several clocks** (20 min). Lay out the 12-bar song of worked example 1, then extend it with the 15-bar section of worked example 2 in two further rows per track, a resting chain on the bell for the first twelve bars included. Write the ledger first. Check with the [OPTION] time display that all three tracks reach row `04` at the same time (12 bars at 120 BPM: 24 s), and start playback from row `04`.
   *Product:* the ledger, and a note on whether the time display counts shortened phrases.

4. **A meeting on demand** (10 min). Make a 10-cycle arrive at phase 0 on bar 4. Bar 4 starts 48 steps in; 48 mod 10 = 8, so an 8-step lead-in, then four cycles: 8 + 40 = 48. Build it and check.
   *Product:* the lead-in phrase and one line confirming the meeting.

5. **Isorhythm** (15 min). Build worked example 3. Before you play, write out bars 1 to 3 from the table above; then check them by ear. Change the color to four pitches and predict the new period (lcm(7, 4) = 28 notes, four bars).
   *Product:* the cloned instrument, saved, and the two predictions marked right or wrong.

## Etude

**Brief.** A piece built on planned realignments: layers in cycles of different lengths, whose meetings are the piece's structural events.

**Forces.** Up to six tracks: the kit, a bass, a mallet or bell, and one more pitched instrument.

**Constraints.**

- At least three sections built on different sets of cycle lengths, each lasting a whole number of its realignment periods, with a balanced ledger.
- At least one section with three simultaneous cycle lengths.
- At least two of the three means: `HOP`, a skipping groove, unequal chains.
- Every full realignment is marked by a named event, and the plan says which partial meetings you chose to mark.
- One isorhythmic line: a color and a talea of coprime lengths.
- One engineered meeting (a lead-in) or one reset, labelled as such in the plan.
- Every track has the same number of song rows in each section.
- The final bar is reached by arithmetic: the last sound of the piece is a realignment, not a cut.

**Duration target.** 64 bars. At 120 BPM, 64 × 2 = 128 s, 2 min 8 s; at 100 BPM, 64 × 2.4 = 154 s, 2 min 34 s.

**Repeat budget.** 3, counted per track as before. A phrase heard at a new phase against the bar has not changed: the polymeter does not excuse the phrase. A round such as a, a, a, b satisfies it.

**Plan.** One page, before you open Song view, showing:

- the inventory: instruments, motifs as note names, each cycle's length in steps and its means;
- sections with bar numbers, the set of cycle lengths in each, the lcm in steps and bars, and the song rows;
- a phase table for each section, with the marked meetings circled;
- the length ledger: for each track and section, phrases × steps and the chain split;
- density and register curves over all 64 bars;
- at each full realignment, what happens, in one sentence;
- the color, the talea and their period.

One shape that meets the constraints, with periods that lengthen and then resolve:

| Section | Bars | Steps | Cycles | Period | Song rows |
|---------|------|-------|--------|--------|-----------|
| A | 1-12 | 192 | 16 : 12 | 3 bars, four times | `00`-`03` |
| B | 13-27 | 240 | 16 : 12 : 10 | 15 bars, once | `04`-`05` |
| C | 28-48 | 336 | 16 : 14 : 12 | 21 bars, once | `06`-`07` |
| D | 49-64 | 256 | all 16; isorhythm 7 against 5 | 5 bars, three times, then a bar | `08`-`09` |

12 + 15 + 21 + 16 = 64 bars; 192 + 240 + 336 + 256 = 1,024 = 64 × 16 steps. The ledger for C: kick 21 × 16 = 336 in chains of 11 and 10; the 14-cycle 24 × 14 = 336 in two chains of 12; the 12-cycle 28 × 12 = 336 in two chains of 14. In D every track returns to 16 steps, so the long-awaited agreement is itself the contrast, and the isorhythmic line keeps something turning: it completes at bars 54, 59 and 64 (5, 10 and 15 bars after bar 49), and bar 64 stands alone as the ending.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: which realignment landed, which passed unnoticed, and which cycle length you would change.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. Mark each realignment where you heard it. Do your marks match the planned bars?
2. Between meetings, did the music sound directed or merely busy? Where did you lose the bar?
3. Which layer did you hear as the metre, and did that change?
4. Did the isorhythmic line sound like one melody that kept changing, or like a short loop?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | Cycle lengths are stated, but phase tables or the ledger are missing, or a section does not balance. | Every section has a phase table and a balanced ledger; the meetings fall in the planned bars; each departure has a reason. |
| Technique of the week | Two cycle lengths by one means; the realignment happens but is not used. | Three simultaneous cycles, two or more means, a working isorhythm, and each full realignment marked by its planned event. |
| Development | Periods repeat unchanged, or a phrase exceeds the budget of 3. | Something outside the polymeter changes in each period; the budget holds; resets and realignments are told apart on purpose. |
| Sound | Layers blur into one texture; cycle starts cannot be heard. | Each cycle's start reads by accent, register or timbre, so the drift itself is audible. |

## Going further

- Offset a cycle by one step with `RMX` each time it comes round, and tabulate the phases: a phasing process by command.
- Set a 17-step groove against 16 and compare its drift with 15 against 16: one walks forward through the bar, the other back.
- Listen to a phase piece by Steve Reich for two identical parts and name the moments it treats as arrivals; then to an isorhythmic motet by Guillaume de Machaut, following the tenor.
- Read about Olivier Messiaen's use of rhythmic and harmonic cycles of 17 and 29 in the opening movement of his quartet for the end of time, and work out when they would realign.

## Summary

- Polymeter keeps the pulse and varies the cycle; cycles of *a* and *b* steps realign after lcm(*a*, *b*).
- `HOP` shortens a phrase, a groove sets a track's phrase length in ticks, chain length sets a cycle in phrases.
- A phase table shows every meeting in advance; a cycle of *b* steps meets a 16-step bar in *b* / gcd(16, *b*) ways.
- Balance the ledger and equalise song rows, and sections start together even when rows inside them drift.
- A realignment arrives; a reset cuts. `RMX` and `SNG` move positions by command.
- A TIC `00` table sets a pitch cycle against a phrase's rhythm cycle.

Week 7 treats the phrases themselves: how to vary a motif by operation, by condition and by controlled chance.
