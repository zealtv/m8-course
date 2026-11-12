---
title: "Time, groove and polyrhythm"
week: 5
strand: rhythm
outcomes: [4]
needs: [1, 4]
duration_target: "56 bars"
repeat_budget: 3
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "26-27, 69-72, 81"
---

## Overview

So far every step has lasted a 16th note, because nothing told it otherwise. This week you take charge of the tick, the unit under the step, and so of how each track divides the bar. That gives the form method a new dimension of contrast: a section can change its rhythmic division while its pitches stay put, which costs no new material and reads at once as a new section.

By the end of the week you can:

- write a groove from tick arithmetic and predict how long a phrase lasts under it;
- state a swing as a ratio and choose it per track;
- realise 3:2, 4:3 and 3:4 exactly, and 5 and 7 approximately, with the error stated;
- place a tuplet by groove, by `RET`, by `DEL` or by table, and say what each costs;
- plan and realise 56 bars whose layers divide the bar differently, and differently in each section.

## Before you start

You need week 1 (ticks, and your results for bench tests 3 and 4: where the groove resolution lives, and the largest groove row) and week 4 (the kit in slots `30` to `3A`, and bench test 9 item a: whether table ticks follow the tempo). Open the kit project, with a mallet from week 2 and a bass from week 3.

If you take the composition weeks alone, factory percussion stands in for the kit; ignore the slot numbers.

Set 120 BPM, which every time figure below assumes: a tick lasts 2.5 / 120 = 20.8 ms. Keep the arithmetic appendix open at its tick table.

> **Manual.** Groove View, pp. 26-27; sequencer commands, pp. 69-72; groove examples, p. 81.

> **Starting point.** Nobody has tried any groove, command value or envelope time in this module on a unit. The tick sums follow from arithmetic; how the unit behaves at the edges is what the bench tests find out.

## Concepts

### The tick, and the groove as a list of lengths

The sequencer counts time in ticks: by default 24 to a quarter note (p. 26). A phrase step has no fixed length. A **groove** is a list of up to sixteen rows, each saying how many ticks one phrase step consumes (p. 26). Groove `00`, which every track uses until told otherwise, says 6 for each: 4 × 6 = 24, so four steps make a quarter note, and 16 × 6 = 96 make a bar.

Three rules cover everything this week (p. 26):

- A groove loops at its first empty row. A one-row groove of `06` covers all sixteen steps.
- A row of `00` skips its phrase step outright: no time passes and nothing on that row sounds.
- A phrase lasts the sum of the ticks its sixteen rows receive. The Groove view shows the sum at the bottom of the screen.

So a groove changes two things at once: where each step falls, and how long the phrase lasts. This week keeps every phrase at 96 ticks, so that tracks stay together at the bar line and a song row still means four bars. Next week breaks that rule on purpose.

Each track can run its own groove. `GRV xx` in a phrase switches that track to groove xx and holds until the track meets another groove command; `GGR xx` switches all eight tracks (p. 70).

A single row of `03` halves every step: sixteen steps pass in 16 × 3 = 48 ticks, half a bar, so a phrase must play twice to fill the bar. A single row of `0C` (12) doubles them: 16 × 12 = 192 ticks, two bars. These are diminution and augmentation, and week 7 uses them as such.

> **Try it.** Make groove `0F` a single row of `0C`. Put `GRV 0F` on step 0 of a hat phrase beside a straight kick. Predict how many bars the hat phrase lasts, then count. Clear the command afterwards.

### Swing as a ratio

Swing lengthens the first of each pair of steps and shortens the second, with the pair's total unchanged. A pair of 16ths holds 12 ticks, so a two-row groove whose rows sum to 12 swings 16ths and keeps the bar at 8 × 12 = 96 ticks.

| Groove rows | Long : short | Long step's share | Name |
|-------------|--------------|-------------------|------|
| `06 06` | 6 : 6 | 50% | straight |
| `07 05` | 7 : 5 | 7 / 12 = 58% | light |
| `08 04` | 8 : 4 | 67% | triplet swing, 2 : 1 |
| `09 03` | 9 : 3 | 75% | dotted, 3 : 1 |

At 24 ticks to the quarter, that list is the whole menu for 16ths: one tick moves the share by 1 / 12 = 8.3 points. Two routes give finer steps.

- **Swing the 8ths instead.** A pair of 8ths holds four steps and 24 ticks, so a four-row groove can split it in units of 1 / 24. Rows `07 06 06 05` give the first 8th 7 + 6 = 13 ticks and the second 6 + 5 = 11: 13 / 24 = 54%. The 16ths inside each 8th come out slightly uneven (7 then 6), so use this for parts that move in 8ths.
- **Raise the resolution.** A groove can run at 48, 96 or 192 ticks to the quarter (p. 26). At 48 a pair of 16ths holds 24 ticks, and `0D 0B` gives 13 / 24 = 54% on the 16ths themselves. Your bench test 3 result says where that setting lives and whether tracks at different resolutions stay together; do not mix resolutions in a piece until it does.

Because grooves belong to tracks, swing can too. Hats at 58% over a straight kick, or a bass at 67% under straight hats, are choices a drummer makes by feel and you make by number. A swing that differs between two tracks playing the same subdivision makes a flam at every off-step: at 120 BPM, `07 05` against straight puts the off-step 1 tick, 20.8 ms, late.

> **Try it.** Run the week-4 hat phrase under `07 05`, `08 04` and `09 03` in turn against a straight kick and snare. Then give the snare track the same groove as the hats. Which pairing do you want for this kit?

### Three against four inside one beat

A groove tells the sequencer how many ticks each phrase step lasts. With the default 24 ticks per quarter note, the default groove gives every step 6 ticks, so four steps fill a beat (4 × 6 = 24) and sixteen fill a bar (16 × 6 = 96).

Nothing ties a track to that groove. Each track can run its own, set with `GRV` in a phrase. So give one track steps of 8 ticks: three of them fill the same beat (3 × 8 = 24). One track now plays three evenly spaced notes in the time another plays four. That makes a polyrhythm in the strict sense: the same span, divided two ways.

One snag. A phrase still has sixteen rows, and three steps of 8 ticks use only three of every four. The groove handles this with a row of `00`, which skips a step outright:

```groove
# GROOVE 01  (triplets, 24 ticks per quarter)
0  08
1  08
2  08
3  00      ; skip the 4th step: 8+8+8 = 24 ticks = one quarter note
```

The groove loops every four rows, so rows `3`, `7`, `B` and `F` of the phrase never sound. Whatever you put there stays silent. Twelve rows remain, three per beat, and the phrase still lasts 96 ticks, so it stays in step with a straight track at the bar line.

```phrase
# PHRASE 12  (track 3, hats in triplets)
0  C-6 64 32  GRV 01   .   .
1  C-6 40 32  .        .   .
2  C-6 40 32  .        .   .
3  .   .  .   .        .   .      ; skipped
4  C-6 64 32  .        .   .
5  C-6 40 32  .        .   .
6  C-6 40 32  .        .   .
7  .   .  .   .        .   .      ; skipped
```

Rows `8` to `F` repeat the pattern. Against a track of straight 16ths on the default groove, the onsets within each beat fall like this, in ticks:

```cycles
straight  |0 . . . . . 6 . . . . . 12 . . . . . 18 . . . . . |
triplet   |0 . . . . . . . 8 . . . . . . . 16 . . . . . . . |
```

They share only tick 0. The straight track's third note (tick 12) lands midway between the triplet's second and third (ticks 8 and 16), which gives the pattern its familiar lilt.

`GRV` holds until another groove command arrives on that track, so one command at the top of the first phrase covers everything after it. To return the track to straight time, place `GRV 00`.

> **Try it.** Build groove 01 and phrase 12 as above on HAT C, with a straight 16th pattern on another track. Then change the groove's rows to `0C`, `0C`, `00`, `00`. Work out what you expect to hear before you press [PLAY].

> **Bench test.** Does a `GRV` on row `0` take effect for row `0` itself, or from the next row? Listen to the first beat after a stop and start. Lab task 1 takes this further.

### Any division of any span

The triplet groove is one case of a general recipe. To put *n* equal notes across a span of *S* ticks, each note gets *S* / *n* ticks. When *n* divides *S* the result is exact:

| Polyrhythm | Span | Each note | Rows |
|------------|------|-----------|------|
| 3 : 2, three across two beats | 48 | 48 / 3 = 16 | `10 10 10 00 00 00 00 00` |
| 4 : 3, four across three beats | 72 | 72 / 4 = 18 | none needed: every third step of the straight grid |
| 3 : 4, three across the bar | 96 | 96 / 3 = 32 | `20 20 20`, then thirteen rows of `00` |
| 6 : 4, six across the bar | 96 | 96 / 6 = 16 | the 3 : 2 groove, twice a bar |

Read *m* : *n* as *m* equal notes in the span of *n* beats. The skip rows pad each group to a count that divides sixteen, so the phrase still totals 96 ticks: for 3 : 2, 3 × 16 = 48 over eight rows, twice. Whether your unit accepts a row as large as `20` (32), your bench test 4 result says.

Two parts dividing one span into *m* and *n*, with *m* and *n* coprime, coincide only at its start, and together sound *m* + *n* − 1 onsets. To see the composite rhythm, count in units of the span divided by lcm(*m*, *n*). For 3 : 2 the unit is 48 / 6 = 8 ticks:

```cycles
three (16 ticks)  |x . x . x . |
two (24 ticks)    |x . . x . . |
composite         |x . x x x . |
```

For 4 : 3 the unit is 72 / 12 = 6 ticks, one ordinary step, which is why it needs no groove:

```cycles
four (18 ticks)   |x . . x . . x . . x . . |
three (24 ticks)  |x . . . x . . . x . . . |
composite         |x . . x x . x . x x . . |
```

Six onsets: 4 + 3 − 1. A 4 : 3 spans three beats, so in 4/4 it either stops after twelve steps or runs on across the bar line. The second case, a three-step cycle against a sixteen-step bar, belongs to next week.

**Five and seven.** Neither divides 24, 48 or 96, so the rows take the nearest whole ticks. Round each ideal onset to a whole tick, then read the rows off as the differences. Five across the bar, ideal spacing 96 / 5 = 19.2 ticks:

| Note | 1 | 2 | 3 | 4 | 5 | next bar |
|------|---|---|---|---|---|----------|
| Ideal onset | 0 | 19.2 | 38.4 | 57.6 | 76.8 | 96 |
| Rounded | 0 | 19 | 38 | 58 | 77 | 96 |
| Row (difference) | 19 | 19 | 20 | 19 | 19 | |

So the rows read `13 13 14 13 13` (19 + 19 + 20 + 19 + 19 = 96), then eleven rows of `00`. Rounding never misses by more than half a tick; here the worst case is 0.4 tick, 0.4 × 20.8 = 8.3 ms at 120 BPM. The notes' simpler recipe for five across a beat, `05 05 05 05 04`, puts its onsets at 0, 5, 10, 15, 20 against the ideal 0, 4.8, 9.6, 14.4, 19.2 and so misses by up to 0.8 tick; `05 05 04 05 05` (onsets 0, 5, 10, 14, 19) halves that to 0.4. The appendix gives five and seven across a half note worked the same way. Whether you can hear 8 ms of unevenness is bench test 10.

A finer resolution shrinks the error in time but never removes it: 5 and 7 divide no power of two times 24. At 192 ticks to the quarter a tick lasts an eighth as long, so the worst case falls from 10.4 ms (half a tick at 120 BPM) to 1.3 ms.

> **Try it.** Build the 3 : 4 groove as groove `06`, and a tom phrase with `GRV 06` and notes on rows `0`, `1`, `2`. Play it against four kicks to the bar and count the composite aloud: six onsets, with gaps of 24, 8, 16, 16, 8 and 24 ticks.

### Tuplets without a groove: RET and tables

A groove retimes a whole track. Two other tools make a tuplet inside one note.

**`RET xy`** retriggers the note on its row (p. 70). With y non-zero, it retriggers every y ticks, and x ramps the volume: `0` to `7` down, `8` to `F` up. With y at zero, it retriggers once, after x ticks. So on the straight grid:

| Command | Retrigger every | Hits in a quarter note (24 ticks) |
|---------|-----------------|-----------------------------------|
| `RET 03` | 3 ticks | 8: 32nd notes |
| `RET 04` | 4 ticks | 6: 16th-note triplets |
| `RET 08` | 8 ticks | 3: 8th-note triplets |
| `RET 09` | 9 ticks | hits at 0, 9, 18: a group that does not fill the beat |

The table assumes two things the sources leave open: that the retriggers carry on past the end of the step until the next note on the track, and that x = `0` means no ramp. Lab task 4 checks both. `RET` repeats one pitch at one spacing, so it suits rolls, ratchets and drum fills, and it cannot make five or seven: 24 / 5 is no whole number of ticks. The firmware fixes between 6.6.2 and 6.6.4 A touched `RET`, so an older unit may behave differently.

**A table** steps at its own rate. If your bench test 9 item a showed that table ticks follow the tempo, a table at TABLE TIC `08` moves a row every 8 ticks, three rows to the beat, whatever groove the phrase runs. Put transpositions `00`, `04`, `07` on rows 0 to 2 and loop them with the `HOP` your bench test 9 items c and d support, and one held note in the phrase becomes a triplet arpeggio. The table changes pitch and volume inside a note; it does not restart the instrument's envelopes, so on a plucked or struck sound only the first row speaks clearly. Use it on sustained instruments.

> **Try it.** Put `D-3 64 31` on step `C` of a snare phrase with `RET 04` beside it and nothing on steps `D` to `F`. Count the hits before the next bar: six, if the retriggers carry on. Then try `RET 84` and `RET 44` and note what the first digit does.

### Placing one note: DEL, MTT and tick-counted envelopes

`DEL xx` delays everything on its row by xx ticks (p. 69). On the default groove step *s* starts at tick 6*s*, so any whole-tick position *t* in the bar can be reached from the straight grid:

step = *t* div 6, `DEL` = *t* mod 6.

Three across the bar wants ticks 0, 32 and 64: step `0`; step `5` (tick 30) with `DEL 02`; step `A` (tick 60) with `DEL 04`. No groove, and the track's other notes stay straight. `DEL 01` on every snare gives a backbeat 20.8 ms behind the hats; `DEL 02` on every off-step swings a part at 8 : 4 with no groove at all. The cost is an FX column on each row moved. Whether a delay longer than its own step works, the sources do not say: keep `DEL` below the step's length until you have tried it.

`MTT xx` moves a row by eighths of a tick, early or late, and cannot move the first row of a phrase early (p. 72). An eighth of a tick lasts 20.8 / 8 = 2.6 ms at 120 BPM. The notes do not record how the value encodes the direction; the help text on the unit should, and bench test 10 has you write it down. `MTT` is the tool for the half-tick errors of five and seven: 0.4 tick is close to 3 / 8.

**Tick-counted envelopes.** AHD times count ticks (pp. 18-21), so an envelope is a note value: DEC `08` lasts a triplet 8th at any tempo, and a `KIL 03` cuts a note to a 32nd. Two consequences for this week. First, match decay to division: a hat with DEC `06` rings exactly one straight step but only three quarters of a triplet step, so the same instrument sounds shorter-breathed under groove 01. Second, a tempo change rescales every tick-counted time in the piece together, while a table at TIC `FF` keeps its 5 ms rows. Worked example 3 depends on this.

> **Try it.** Enter three toms across the bar by `DEL` as above, against four kicks. Then move the middle tom to step `5` with no `DEL`, 2 ticks early. How wrong does 41.7 ms sound?

## Worked examples

### One bar, three divisions

Kick in four, toms in three, hats in five, all across one bar. Track 1 stays on groove `00` with KICK on steps `0`, `4`, `8`, `C`.

```groove
# GROOVE 06  (three across the bar)
0  20      ; 32 ticks
1  20
2  20      ; 3 x 32 = 96 ticks
3  00      ; and 00 on every row down to F: thirteen skips
```

```groove
# GROOVE 08  (five across the bar)
0  13      ; 19   onsets 0, 19, 38, 58, 77
1  13      ; 19   ideal  0, 19.2, 38.4, 57.6, 76.8
2  14      ; 20   the long step sits in the middle, where rounding puts it
3  13      ; 19
4  13      ; 19   19+19+20+19+19 = 96 ticks
5  00      ; and 00 on every row down to F: eleven skips
```

```phrase
# PHRASE 41  (track 4, toms three across the bar)
0  A-2 64 36  GRV 06   .   .
1  D-3 64 36  .        .   .
2  G-3 64 36  .        .   .      ; rows 3 to F never play
```

```phrase
# PHRASE 31  (track 3, hats five across the bar)
0  C-6 64 32  GRV 08   .   .
1  C-6 40 32  .        .   .
2  C-6 50 32  .        .   .
3  C-6 40 32  .        .   .
4  C-6 50 32  .        .   .      ; rows 5 to F never play
```

| Layer | Onsets in ticks |
|-------|-----------------|
| Kick, 4 | 0, 24, 48, 72 |
| Toms, 3 | 0, 32, 64 |
| Hats, 5 | 0, 19, 38, 58, 77 |
| Composite | 0, 19, 24, 32, 38, 48, 58, 64, 72, 77 |

Four, three and five are pairwise coprime, so the layers meet only on the downbeat and the composite has 4 + 3 + 5 − 2 = 10 onsets. The gaps run 19, 5, 8, 6, 10, 10, 6, 8, 5, 19 ticks (sum 96): a palindrome, as it must be, since each layer is symmetric about the middle of the bar. The tightest pair, a hat then a kick 5 ticks later, sits 104 ms apart at 120 BPM, close enough to smear if both instruments ring. Give the hat a short decay.

Each phrase uses three or five rows to fill a bar, so a 4-bar chain still needs four phrases per track. HAT C's three-row round robin from week 4 meets five hits a bar: lcm(3, 5) = 15 hits, three bars, as before.

If your unit refuses a row of `20` or `14`, place the same onsets with `DEL` on the straight grid. The hats: step `0`; step `3` (18) with `DEL 01`; step `6` (36) with `DEL 02`; step `9` (54) with `DEL 04`; step `C` (72) with `DEL 05`.

### One triplet fill, three ways

A snare fill of three even hits across beat 4. Beat 4 starts at step `C`, tick 72, so the hits want ticks 72, 80 and 88.

By groove, switching the track for one beat:

```phrase
# PHRASE 2A  (track 2, by groove)
4  D-3 64 31  .        .   .      ; the backbeat, still straight
C  D-3 50 31  GRV 01   .   .      ; row C takes groove row 0, since C (12) = 3 x 4
D  D-3 60 31  .        .   .
E  D-3 70 31  .        .   .      ; row F is skipped: 8+8+8 = 24 ticks
```

The next phrase on the track must carry `GRV 00` on row 0. This version leans on two things lab task 1 tests: that `GRV` acts on its own row, and that the groove starts from its row 0 when the command arrives.

By retrigger:

```phrase
# PHRASE 2B  (track 2, by RET)
4  D-3 64 31  .        .   .
C  D-3 50 31  RET 88   .   .      ; every 8 ticks: 72, 80, 88; first digit 8 = ramp up, a starting point
```

One row, one pitch, and a crescendo if the ramp behaves. The next note on the track, at tick 96, should end it.

By delay:

```phrase
# PHRASE 2C  (track 2, by DEL)
4  D-3 64 31  .        .   .
C  G-3 50 36  .        .   .      ; tick 72
D  D-3 60 36  DEL 02   .   .      ; 13 x 6 = 78, + 2 = 80
E  A-2 70 36  DEL 04   .   .      ; 14 x 6 = 84, + 4 = 88
```

Each hit has its own row, so each can take its own note, volume and instrument: here the toms come down in fourths.

| Method | Rows | Own pitch per hit | Leans on |
|--------|------|-------------------|----------|
| Groove | 3, plus a reset | yes | `GRV` timing (lab task 1) |
| `RET` | 1 | no | retriggers carrying on (lab task 4) |
| `DEL` | 3 | yes | nothing untested, if `DEL` stays below 6 |

### The triplet becomes the 16th

A join that changes tempo without disturbing the fastest pulse. Section A runs at 120 BPM with hats in triplets: each lasts 8 ticks, 8 × 2.5 / 120 = 0.1667 s. Section B has straight 16ths of 6 ticks. For the hat pulse to continue unbroken, a 16th at the new tempo must last as long as a triplet did at the old:

6 × 2.5 / *T* = 0.1667, so *T* = 15 / 0.1667 = 90 BPM.

In general the tempo scales by new step ÷ old step: 120 × 6 / 8 = 90. The hats do not change speed; the beat under them slows in the ratio 4 : 3, and a bar now lasts 240 / 90 = 2.67 s in place of 2 s.

`TPO xx` sets the tempo from a phrase, and the help text converts the value (p. 72): put it on row 0 of the first phrase of section B, on one track, with `GRV 00` on the hat track's first phrase. Every tick-counted envelope stretches by 4 / 3 with the tick (20.8 ms to 27.8 ms); tables at TIC `FF` do not.

Going the other way, straight 16ths becoming triplets, multiplies by 8 / 6: 90 to 120. A plan that uses this join counts its duration section by section, since bars no longer last the same time.

## Lab

Allow 1 h 45 min. Keep adding to the results record from weeks 1 and 4: item, what you heard, firmware, date.

1. **Bench test: when a groove command bites** (15 min). Two questions the sources leave open.

   - (a) *Row 0.* Play phrase 12 (triplet hats, `GRV 01` on row 0) once after a straight phrase on the same track. If the first hat step lasts 6 ticks and the rest 8, the command acts from the next row. Listen against four kicks: does the hat's second note fall on the triplet or early?
   - (b) *Groove position.* Make groove `0E` five rows: `06 06 06 06 0C`. Put a hat on every step of a phrase with `GRV 0E` on row 0 and loop it alone. If the groove restarts with each phrase, the long step falls after rows `4`, `9` and `E` on every pass, and the phrase lasts 13 × 6 + 3 × 12 = 114 ticks. If the groove runs on across the phrase boundary, the long step moves on by one row each pass (16 mod 5 = 1). Count which.
   - (c) Start playback from the second song row of a track whose `GRV` sits in the first. Which groove does the track use?

   *Product:* three lines in the results record, and a rule for where you will put `GRV` commands. Until (b) is settled, use only grooves whose length divides sixteen.

2. **Groove library** (30 min). Build these, checking each sum against the figure at the bottom of the Groove view (p. 26). The numbers match the appendix and the examples above.

   | No. | Groove | Rows | Working | Steps sounding per bar |
   |-----|--------|------|---------|------------------------|
   | `01` | triplets | `08 08 08 00` | 3 × 8 = 24 per four rows | 12 |
   | `02` | light swing | `07 05` | 7 + 5 = 12 | 16 |
   | `03` | triplet swing | `08 04` | 8 + 4 = 12 | 16 |
   | `04` | hard swing | `09 03` | 9 + 3 = 12 | 16 |
   | `05` | five across a half note | `0A 09 0A 09 0A 00 00 00` | 10 + 9 + 10 + 9 + 10 = 48 per eight rows | 10 |
   | `06` | three across the bar | `20 20 20`, thirteen `00` | 3 × 32 = 96 | 3 |
   | `07` | seven across a half note | `07 07 07 06 07 07 07 00` | 6 × 7 + 6 = 48 per eight rows | 14 |
   | `08` | five across the bar | `13 13 14 13 13`, eleven `00` | 4 × 19 + 20 = 96 | 5 |
   | `09` | your own | | | |

   For `09`, choose a division this list lacks and derive it by the rounding method. Seven across the bar makes a good case: 96 / 7 = 13.71, ideal onsets 0, 13.7, 27.4, 41.1, 54.9, 68.6, 82.3. Finish it, and check that your rows sum to 96.

   Clone a groove with [SHIFT]+[OPTION] then [EDIT] on a `GRV` value (p. 15) when you want a variant.
   *Product:* nine grooves, each with its rows, tick sum, onsets and worst error written in your notes.

3. **Bench test 10: five, seven and MTT** (25 min). Settles open question 10 in the course notes.

   - (a) Loop HAT C on groove `05` against a kick on straight quarter notes, for a minute. Does the five sound even?
   - (b) Clone the groove and spoil it: `0A 0A 0A 09 09 00 00 00` (onsets 0, 10, 20, 29, 38 against the ideal 0, 9.6, 19.2, 28.8, 38.4; worst error 0.8 tick, 16.7 ms). Switch between the two without looking. Can you tell them apart? At 80 BPM, where 0.8 tick lasts 25 ms?
   - (c) *MTT's encoding.* Put the same closed hat on step `4` of two tracks, hard left and right if your mixer allows. Add `MTT 01` to one, then raise the value. Read the help text, and listen: which values move the note late, which early, and where does the range end? Try an early value on row 0 to confirm that it has no effect (p. 72).
   - (d) Correct groove `05`'s rounding in a phrase. Its onsets sit at 10, 19, 29 and 38 against 9.6, 19.2, 28.8 and 38.4, so rows `1` to `4` want −3, +2, −2 and +3 eighths of a tick. That leaves errors of 0.025, 0.05, 0.05 and 0.025 tick, at most 1 ms. Can you hear the correction against the uncorrected groove?

   *Product:* results-record lines for (a) to (d), the `MTT` encoding in your own words, and a decision: do you correct fives and sevens, or leave them?

4. **Tuplets by RET and by table** (15 min).

   - (a) A snare on step `C` with `RET 08`, steps `D` to `F` empty, a kick on the next downbeat on another track. Three hits or one? Then put a snare on the next step `0`: does the roll stop there?
   - (b) `RET 00`, `RET 40`, then `RET 48` and `RET C8`: what do x and y do alone, and how steep is each ramp?
   - (c) On a sustained week-2 or week-3 instrument, set TABLE TIC `08` and build the three-row arpeggio from the Concepts section. Hold one note for a bar under groove `00`, then under groove `02`. Does the arpeggio keep its triplets while the phrase swings?

   *Product:* results-record lines, and one sentence on when you would reach for each.

5. **Polyrhythm sheet** (20 min). Realise 3 : 2, 4 : 3, 3 : 4 and 5 : 4 in turn, each on two kit voices, each looping for at least a minute. For each, before you play, write the span, both sets of onsets in ticks and the composite rhythm with its gaps; then check by ear and by counting. Realise one of them twice, by groove and by `DEL`.
   *Product:* the sheet, and a mark beside the one you want in the etude.

## Etude

**Brief.** A piece in which at least three layers divide the bar differently at once, and the divisions change from section to section.

**Forces.** Up to six tracks: the week-4 kit, a bass from week 3 and a mallet or piano from weeks 2 and 3.

**Constraints.**

- Every phrase lasts 96 ticks, so tracks meet at every bar line and one song row means four bars. Check each groove's sum; unequal lengths wait for week 6.
- Four or five sections. In each, at least three sounding layers use different divisions of the bar.
- At every section boundary at least one layer changes division, and the pitch material of at least one layer carries across unchanged, so the division does the contrasting.
- At least one approximate division (five or seven), with its error stated in the plan in ticks and milliseconds.
- At least one tuplet made by `RET` or `DEL`, and at least one track that swings while another plays straight.
- The first phrase of every section carries a groove command on every track that sounds, `GRV 00` included, unless lab task 1 showed you a safer rule.
- One composed join, in its own chain. The metric modulation of worked example 3 is one option.

**Duration target.** 56 bars: fourteen song rows of 4-bar chains. At 120 BPM, 56 × 2 = 112 s, 1 min 52 s; at 100 BPM, 56 × 2.4 = 134 s, 2 min 14 s.

**Repeat budget.** 3, counted as in week 4. A phrase replayed under a new division counts as changed; under a new swing amount it does not.

**Plan.** One page, before you open Song view, showing:

- the inventory: instruments, motifs as note names, and the grooves by number with their rows and sums;
- sections with bar numbers and song rows;
- a **division map**: for each section and track, the division of the bar, the means (groove number, `RET`, `DEL` or table) and the swing;
- for each section, the composite rhythm of its two most prominent layers, in ticks;
- density and register curves over all 56 bars;
- at each boundary, which layers change division, which material carries across, and the join.

A division map of this shape meets the constraints:

| Section | Bars | Song rows | Kick (1) | Hats (3) | Toms, metal (4) | Bass (5) | Mallet (6) |
|---------|------|-----------|----------|----------|-----------------|----------|------------|
| A | 1-12 | `00`-`02` | 4, straight | 12, groove `01` | rest | 8, straight | 3, groove `06` |
| B | 13-28 | `03`-`06` | 4, straight | 16 at 58%, groove `02` | 3, by `DEL` | 6, 3 : 2 groove | 5, groove `08` |
| C | 29-40 | `07`-`09` | rest | 10, groove `05` | 3, groove `06` | 4, straight | 12, groove `01` |
| D | 41-56 | `0A`-`0D` | 4, straight | 12, groove `01`; `RET 04` fills | 5, groove `08` | 8 at 67%, groove `03` | 3, groove `06` |

Row *r* starts at bar 4*r* + 1, so `03` starts bar 13, `07` bar 29, `0A` bar 41; 12 + 16 + 12 + 16 = 56. The mallet's three-across figure from A returns in D over a changed bass: a return with difference.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: which division change read most clearly, which you could not hear, and what you would do with a fourth layer.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. At each boundary, could you hear the division change without counting? Mark the ones you only knew about.
2. In each section, which layer did you hear as "the beat"? Did that match the plan?
3. Did the five or seven sound like a division, or like bad timing? Would a correction, or a different instrument, change that?
4. Where did two close onsets smear into one? Find the pair in your composite rhythms.

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | The division map is missing or has gaps; tick sums are not shown. | The map covers every track and section, every groove sums to its span on paper, and each departure has a reason. |
| Technique of the week | Triplets appear on one layer; other divisions come from one method only. | Three layers divide the bar differently in every section; groove, `RET` or `DEL`, and per-track swing all appear; the approximate division's error is stated. |
| Development | Sections differ, but a division persists throughout, or a phrase exceeds the budget of 3. | At each boundary a division changes while named material carries across; the budget holds; the join is composed. |
| Sound | Close onsets smear; decays ignore the division. | Each layer reads as its own stream; decays suit the step lengths; the fastest layer stays clean. |

## Going further

- Rework one groove at 48 ticks to the quarter, once bench test 3 tells you how resolutions combine, and compare the five's error: at most half of a tick half as long.
- Give an LFO a period of 32 ticks, if your unit's tick-rate LFO shapes allow it (pp. 18-21): three cycles to the bar, a polyrhythm in timbre that costs no track.
- Listen to a West African bell pattern in 12/8 and write its onsets in ticks; then to a piano study by Conlon Nancarrow with tempos in a stated ratio, and work out where its voices meet.
- Read a drummer's account of displacement and metric modulation, and translate one example into `DEL` values and a `TPO` change.

## Summary

- A groove lists the ticks each step consumes; `00` skips a step; a phrase lasts the sum.
- Swing is the long step's share of its pair; grooves, and so swings, belong to tracks.
- A polyrhythm divides one span two ways: *S* / *n* ticks a note, exact when *n* divides *S*, rounded to within half a tick when not.
- A groove retimes a track, `RET` repeats a note, `DEL` and `MTT` place one row, a table works inside a note.
- Tick-counted times are note values, so a tempo change in the ratio of two steps keeps the pulse and moves the beat.

Week 6 lets the phrases themselves differ in length: the same pulse, grouped in cycles that drift apart and meet again where you plan it.
