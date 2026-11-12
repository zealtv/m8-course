---
title: "FM II, electric pianos and basses"
week: 3
strand: sound
outcomes: [2, 3]
needs: [2]
duration_target: "32 bars"
repeat_budget: 4
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "18-21, 58-59, 69-72, 75"
---

## Overview

Week 2's bells answered every strike alike. This week's instruments answer how you play them: a harder note sounds brighter, not only louder, and a high note behaves differently from a low one. An instrument that responds to the volume column can change character across a long form with no new patch and no new phrase. You build two electric pianos and three basses, then write a duo in which the bass carries a composed line, not a riff.

By the end of the week you can:

- build a two-layer FM patch on a paired algorithm and give each layer its own envelope;
- map velocity and pitch to timbre with TRACKING and with table maps;
- use the filter, the amp stage and pitch envelopes to shape tone and attack;
- design sub, plucked and growl basses and choose between them by role;
- write slides with `PSL`, and choose between relative and absolute commands;
- plan and sequence a 32-bar duo whose bass line has its own contour and rhythm.

## Before you start

You need week 2: sideband arithmetic, ratios in lowest terms, the index envelope, and your bench test 5 answers, which give the modulation destination names and whether TRACKING can drive a macro. This module writes a destination in brackets, such as `(macro MOD1)`, to name a function; substitute the names you recorded.

Open a new project and load "STRUCK 0" from the card. Keep instruments `0E` and `14` to `18` free.

> **Manual.** Read pp. 18-21 (modulation), 58-59 (FM Synth), 69-72 and 75 (commands). Also look at p. 14 (the phrase row), p. 24 (tables) and p. 51 (filter and amp).

> **Starting point.** Nobody has tried any level, envelope, tracking or filter value in this module on a unit. Ratios, partials and tick times follow from arithmetic. Everything else needs your ear.

## Concepts

### Two layers: tine and body, reed and bark

An electric piano makes two sounds at once. In a tine piano a hammer strikes a steel tine coupled to a heavier tone bar, and a magnetic pickup reads it: a brief, glassy ping over a rounder, nearly sinusoidal tone that lasts. Play hard and the tine swings close to the pickup, whose non-linear response adds the growl players call bark. A reed piano strikes a steel reed read by an electrostatic pickup; it sounds more nasal and barks more readily.

So each patch wants two layers with separate envelopes, which means two carriers. Three algorithms have two (p. 59):

| No. | Routing | Layers |
|-----|---------|--------|
| `05` | [A>B>C]+D | a two-modulator stack on C, and D free |
| `06` | [A>B>C]+[A>B>D] | one shared stack feeding two carriers |
| `07` | [A>B]+[C>D] | two independent pairs |

In each diagram an arrow runs from a modulator to the operator it modulates, and a heavy box marks a carrier.

{% fmalgo "05" %}

{% fmalgo "06" %}

**Tine on `07`.** Let A>B make the tine: B at 1.00, A at 14.00. The partials fall at 1 ± 14*k*: 1, then 15 and 13, then 29 and 27. In week 2's terms 1 : 14 has *N1* = 1, so the ping stays pitched; its brightness comes from height, not inharmonicity. Let C>D make the body: both at 1.00, a low index, giving mostly the fundamental and the second harmonic (the first lower sideband lands at 0 and adds nothing).

**Reed on `05`.** Put B into C at 2.00 against 1.00: week 2's odd-harmonic pair, 1, 3, 5, 7, a hollow core standing in for the reed's nasal tone. Now let A at 1.00 modulate B. B's output gains components at 2 ± 1 = 1 and 3, so C meets modulators at 1, 2 and 3, and even harmonics appear: 1 ± 1 gives 2. You hear the bark as the octave filling in. Drive A from velocity and only hard notes bark. D, a free sine at 1.00, holds the fundamental steady as B's index thins C's.

Algorithm `06` shares one stack between its carriers, so both layers brighten together; choose it when they should move as one.

> **Try it.** On `07`, silence the body (D's LEV `00`) and play the tine pair alone with A at 14.00. Then set A to 14.10. Reduce first: 1 : 14.1 = 10 : 141, so *N1* = 10, and the ping should turn metallic.

### Velocity and key scaling with TRACKING

A TRACKING slot maps NOTE, VELOCITY or VELOCITY TAKEOVER onto a parameter, between a low value LVAL and a high value HVAL; you may set LVAL above HVAL to reverse the mapping (pp. 18-21). The notes do not explain VELOCITY TAKEOVER; read its help text on the unit.

**Velocity to timbre.** Send velocity to an index and harder notes sound brighter. Two routes:

1. TRACKING straight to the macro that scales the modulator's LEV, if bench test 5 showed that TRACKING can reach a macro.
2. TRACKING with destination MOD AMT, which scales the amount of the next slot (p. 18). Put the index AHD in that next slot. Harder notes then start brighter and decay through the same shape.

Route 2 depends on slot order: 1 reaches 2, 2 reaches 3, 3 reaches 4, and 4 wraps to 1 (p. 18), so plan the slots as a chain. The lab's patches use route 2, which works whichever way bench test 5 came out.

LVAL sets what the softest note gets. With LVAL `30` and HVAL `FF`, the softest note keeps 48/255, about a fifth, of the envelope's depth, if the mapping runs linearly. The manual calls the phrase's V column (`00` to `7F`) volume (p. 14); that VELOCITY reads it seems likely but goes unstated. Check both on your unit.

**Key scaling.** Map NOTE, reversed, onto an index and higher notes sound darker; a tine piano needs that, as its sidebands climb out of hearing (worked example 1). A sub wants the same reversal because its lowest notes need the most help from upper partials. Map NOTE the normal way onto CUTOFF and the filter follows the pitch.

Tables give a stepped alternative (p. 24): with TABLE TIC `FD` the velocity picks the row, with `FC` the octave. A row can carry several commands, where a TRACKING slot moves one parameter.

> **Try it.** On a clone of STRUCK 0, put TRACKING on VELOCITY with MOD AMT in slot 1, and the index AHD in slot 2. Play one note with V at `20`, `40`, `60` and `7F`. Brightness should change, not only loudness.

### The filter and the amp stage as tone controls

After the operators, every synth engine has a filter and an amp stage (p. 51). The filter offers low-pass, high-pass, band-pass, band-stop, LP>HP, and zero-delay low-pass and high-pass, each with CUTOFF and RES.

FM pushes energy upward; a low-pass filter sets a ceiling. The index decides how much energy goes up, the filter how much gets out. A tine piano wants a gentle low-pass with no resonance, so the ping keeps its height and loses its fizz. A bass wants resonance: a peak that the index sweeps through reads as a vowel, most of a growl.

The amp stage gives a second non-linearity. AMP drives the signal, and LIM chooses what happens above the limit: CLIP, SIN, FOLD, WRAP, POST, POST:AD or POST:W1 to W3 (p. 51). The notes record only the names. SIN suggests a rounded curve, FOLD a signal reflected at the limit, WRAP one that wraps around; read the POST modes' help text. Audition each as a waveshaper; none has a known curve yet.

If the phrase volume scales the signal before the amp, louder notes drive the limiter harder: bark from velocity, at no cost in slots. The notes do not record the order; check this on your unit.

> **Try it.** On a single sine carrier, set AMP to a moderate value and step LIM through every mode. Then pick SIN and play one note at V `20` and at `7F`. If the loud note sounds rougher, not just louder, the volume reaches the amp first.

### Pitch envelopes for attack

Real attacks start off-pitch: a plucked string sounds sharp for a moment, a struck tine starts with inharmonic modes. A short pitch envelope gives a patch that start.

**On an operator.** Each operator's MOD slots can send a macro to PIT, which adds semitones to that operator alone (p. 58). On a modulator, a pitch offset moves the ratio. Raise the tine's A by one semitone and its ratio becomes 14 × 2^(1/12) = 14 × 1.0595 = 14.83, so the first sidebands sit at 15.83 and 13.83: inharmonic. As the envelope falls they settle on 15 and 13: a strike that settles into a pitch. Drive A's PIT from the same macro as its LEV and one envelope moves both. On the carriers, the whole note bends instead.

**In a table.** The instrument's table runs beside it, and its N column transposes the instrument for that row (p. 24). At TABLE TIC `01` each row lasts one tick. A table reading `0C`, `05`, `00` jumps an octave up, then a fourth, then the note, in two ticks. At 96 BPM a tick lasts 2.5 / 96 = 0.0260 s, so the drop takes 2 × 26.0 = 52 ms. Whether semitone steps blur into a sweep at that speed needs your ear.

One trap: the manual lists the FM Synth's PIT modulation among what a project scale quantises (p. 28), so under a non-chromatic scale a pitch envelope may move in scale steps. Build them on the chromatic scale, or check this on your unit. The `PIT` and `FIN` commands give static offsets, in semitones and within one (p. 75).

> **Try it.** On a plain sine, give the instrument's table rows `0C`, `05`, `00` at TABLE TIC `01`, with `HOP 02` on row `2`. Then set TABLE TIC `02` and listen again: the same drop over 4 ticks, 104 ms.

### Three basses, and the slide

A bass in a duo does one of three jobs, each with its own patch.

- **Sub**: weight. Few partials, steady, out of the way of the piano.
- **Plucked**: articulation. Bright at the onset, dark in the tail, so the rhythm reads.
- **Growl**: voice. The timbre moves within the note, so a held note can carry a phrase.

Register first. In scientific pitch E1 lies at 41.2 Hz and E2 at 82.4 Hz. Small speakers barely reproduce E1, so a sub needs a quiet second harmonic; the ear infers the missing fundamental. This module's frequencies assume the unit's `A-4` sounds at 440 Hz; check this on your unit against a reference.

Shapes come in here. If a shape matches its name, a SAW modulator at ratio *m* acts as modulators at *m*, 2*m*, 3*m* and so on, and a SQU modulator at *m*, 3*m*, 5*m*. With integer ratios every combination still lands on a harmonic, so a saw modulator on a 1 : 1 pair gives a dense, pitched spectrum at a low LEV. NOISE does not. Bench test 6 lists your firmware's shapes.

**Slides.** `PSL xx` glides into a note over xx ticks (p. 71). `PSL 0C` takes 12 ticks: two steps, or 12 × 26.0 = 313 ms at 96 BPM. Leave the I column empty and the note changes without retriggering the instrument (p. 14), so its envelopes, LFOs and table carry on. That gives two kinds of slide:

- **legato**: I empty. One continuous note that bends. The whole run inherits one amp envelope, so it must fit inside it.
- **retriggered**: I filled. The new note restarts its envelopes and glides from the old pitch.

The changelog fixed `PSL` resetting on retrigger in 6.6.2 to 6.6.4; older firmware may differ. Whether `PSL` slides a legato note, and whether it holds for later notes, the notes do not say: check this on your unit.

> **Try it.** Set a modulator to 0.50 against a 1.00 carrier. Reduce first: 1 : 0.5 = 2 : 1, so *N1* = 2 and every partial falls on a harmonic of half the note. Raise the index and listen for the pitch to drop an octave. That trick makes a growl, and can also put a bass line in the wrong octave.

### Relative and absolute commands

Almost every instrument parameter has its own command. Highlight the parameter in Instrument view and move to a phrase or table, and that command becomes the default to enter (pp. 17, 75), so you need not know its name.

Commands come in two kinds (p. 69):

- **Absolute**: sets the parameter outright. A value of `40` means 40.
- **Relative**: adds to the current value. `01` to `7F` go up, `FF` to `80` go down: two's complement on a byte, so `F8` means −8 and `80` means −128. The change accumulates until the instrument retriggers, through a value in the I column or through `RET`.

The arithmetic: from a CUTOFF of `60`, a relative `10` on three rows gives `70`, `80`, `90`; a relative `F0` (−16) on two rows gives `50`, `40`.

The reset rule decides where each belongs. A relative ramp across legato notes keeps building, and the next retrigger puts the instrument back with no reset command. An absolute value sets a known state, which suits the top of a chain or section. How long it lasts, to the next retrigger or to the next command, the notes do not say; check this on your unit.

Nor do the notes name the FM commands or say which kind each is. Bench test 6 finds out. Until then this module writes such a command as its parameter in angle brackets, `<CUTOFF>` or `<A-LEV>`; replace it with the name you find.

> **Try it.** Hold one long note with the instrument on row `0` only. Put a modulator's level command with value `10` on rows `4`, `8` and `C`. If brightness climbs three times, the command acts relatively. Now repeat the note and instrument on row `8` and listen for the reset.

## Worked examples

### Scaling the tine across the keyboard

The tine pair puts sidebands at 13 and 15 times the note, then 27 and 29. At the C of each octave (scientific pitch):

| Note | f (Hz) | 13f to 15f | 27f to 29f |
|------|--------|------------|------------|
| `C-4` | 261.63 | 3,401 to 3,924 | 7,064 to 7,587 |
| `C-5` | 523.25 | 6,802 to 7,849 | 14,128 to 15,174 |
| `C-6` | 1,046.50 | 13,605 to 15,698 | 28,256 to 30,349 |
| `C-7` | 2,093.00 | 27,209 to 31,395 | |

Where each pair leaves hearing, taking 20 kHz as the limit:

- The second-order pair: 20,000 / (27 × 523.25) = 1.416, and 12 × log2(1.416) = 6.0 semitones above `C-5`, so near `F#5`. Check: 27 × 739.99 = 19,980 Hz.
- The first-order pair: 20,000 / (13 × 1,046.50) = 1.470, and 12 × log2(1.470) = 6.7 semitones above `C-6`, so between `F#6` (13 × 1,479.98 = 19,240 Hz) and `G-6` (13 × 1,567.98 = 20,384 Hz).

What the engine does with partials above hearing depends on its sample rate, which the notes do not record; either way they add nothing you want. So keep the full index to octave 4, reduce it through octaves 5 and 6, and switch the tine pair off from octave 7, where both pairs lie above 20 kHz.

An octave map does it in one table: with TABLE TIC `FC`, the playing octave picks the row (p. 24). Every row must carry a value, or a low note played after a high one would inherit the high note's setting.

```table
# TINE's table  (TIC FC: octave map; row n assumed to serve octave n)
0  .  .  <A-LEV> 50  .  .      ; octaves 0-4: the patch's own peak index
1  .  .  <A-LEV> 50  .  .
2  .  .  <A-LEV> 50  .  .
3  .  .  <A-LEV> 50  .  .
4  .  .  <A-LEV> 50  .  .
5  .  .  <A-LEV> 38  .  .      ; second-order pair leaves near F#5: less energy up there
6  .  .  <A-LEV> 18  .  .      ; first-order pair leaves near G-6: a trace of ping
7  .  .  <A-LEV> 00  .  .      ; octave 7 and up: B sounds alone
8  .  .  <A-LEV> 00  .  .
9  .  .  <A-LEV> 00  .  .
A  .  .  <A-LEV> 00  .  .
```

Three conditions, each to confirm in the lab: that row *n* serves octave *n*; that the A-level command acts absolutely (if bench test 6 shows it relative, use a reversed TRACKING on NOTE instead); and that the command sets the peak the macro scales from (p. 58).

### A bass line, from note names to rows

The progression: Am7 | D7 | Fmaj7 | E7(b9), at 96 BPM. The line should have a shape of its own: rise through two bars, peak in the third by a slide, fall to its lowest note at the cadence, and turn back to A. Write it first as notes and lengths in steps, before any rows.

| Bar | Chord | Step: note (length in steps) | Sum |
|-----|-------|------------------------------|-----|
| 1 | Am7 | 0: A2 (6) · 6: C3 (2) · 8: E3 (6) · E: G3 (2) | 6 + 2 + 6 + 2 = 16 |
| 2 | D7 | 0: rest (2) · 2: F#3 (4) · 6: A3 (4) · A: E3 (2) · C: D3 (4) | 2 + 4 + 4 + 2 + 4 = 16 |
| 3 | Fmaj7 | 0: F3 (4) · 4: C4, slid (8) · C: A3 (4) | 4 + 8 + 4 = 16 |
| 4 | E7(b9) | 0: G#3 (2) · 2: F3 (2) · 4: D3 (2) · 6: B2 (2) · 8: G#2 (4) · C: E2 (3) · F: G#2 (1) | 2 + 2 + 2 + 2 + 4 + 3 + 1 = 16 |

The range spans E2 to C4, 20 semitones; onsets per bar run 4, 4, 3, 7, thinnest at the peak and busiest at the cadence. Against a piano that comps on beats 2 and 4, steps `4` and `C`, the line shares no onset in bar 1 and one in bar 2:

```cycles
bass bar 1  |x . . . . . x . x . . . . . x . |
bass bar 2  |. . x . . . x . . . x . x . . . |
piano       |. . . . x . . . . . . . x . . . |
```

Now the rows. GROWL (`18`) carries bars 1 to 3; PLUCK (`17`) articulates the run in bar 4.

```phrase
# PHRASE 10  (track 1, bar 1)
0  A-2 60 18  <CUTOFF> 70  .  .   ; absolute: a known filter state on every pass
6  C-3 40 18  .            .  .
8  E-3 50 18  .            .  .
E  G-3 48 18  .            .  .
```

```phrase
# PHRASE 11  (track 1, bar 2)
0  OFF .  .   .        .  .      ; the rest: stop bar 1's G-3
2  F#3 58 18  .        .  .
6  A-3 60 18  PSL 03   .  .      ; retriggered scoop up from F#3: 3 ticks, 78 ms
A  E-3 48 18  .        .  .
C  D-3 50 18  .        .  .
```

```phrase
# PHRASE 12  (track 1, bar 3)
0  F-3 64 18  .        .            .
4  C-4 .  .   PSL 0C   <CUTOFF> 10  .   ; I empty: legato slide up a fifth in 12 ticks; relative +10
8  .   .  .   .        <CUTOFF> 10  .   ; relative +10 again: 70, 80, 90
C  A-3 50 18  .        .            .   ; retrigger: the relative change resets
```

```phrase
# PHRASE 13  (track 1, bar 4)
0  G#3 60 17  .  .  .      ; PLUCK: velocity falls by 8 per note down the run
2  F-3 58 17  .  .  .
4  D-3 50 17  .  .  .
6  B-2 48 17  .  .  .
8  G#2 58 17  .  .  .      ; the longer note, louder, so the pluck opens again
C  E-2 70 17  .  .  .      ; the low point, hardest
F  G#2 40 17  .  .  .      ; pickup into A-2
```

Reasons for the less obvious values:

- **The legato slide.** F-3 triggers at tick 0, the slide arrives at step `4` (tick 24) and A-3 retriggers at step `C` (tick 72). GROWL's amp holds 48 ticks, then decays over 48. At tick 72 it sits 24 ticks into the decay, halfway down, so the peak note fades into the A: intended. `PSL 0C` = 12 ticks = 313 ms, half a beat; 7 semitones in 12 ticks.
- **Relative in bar 3, absolute in bar 1.** The cutoff opens across the legato note and resets at the retrigger; the absolute `70` makes each pass start alike. If bench test 6 shows the cutoff command to be absolute, write `80` and `90` on rows `4` and `8`, and add `<CUTOFF> 70` on row `C`.
- **The OFF in bar 2.** Without it, GROWL's G-3 would ring through the rest.

Then the chains. The second statement clones the first and swaps its last bar for a join.

```chain
# CHAIN 10  (track 1, bass, bars 1-4)
0  10 00
1  11 00
2  12 00
3  13 00
```

```chain
# CHAIN 11  (track 1, bass, bars 5-8: a clone of 10)
0  10 00
1  11 00
2  12 00
3  14 00      ; the join: a new last bar
```

```phrase
# PHRASE 14  (track 1, bar 8: the join)
0  E-2 70 16  .  .  .      ; SUB: the floor, struck hard
4  OFF .  .   .  .  .      ; three beats of silence: the piano states the pivot alone
```

Count the repeat budget on track 1 across both chains: 10, 11, 12, 13, 10, 11, 12, 14. No phrase plays twice in succession, so the longest unchanged run is 1. A one-bar riff listed four times in a chain would use the whole budget of 4 in one row, and a fifth play in the next row would break it.

## Lab

Allow 1 h 45 min. Save every instrument with LOAD/SAVE (p. 16) and write its rationale in three sentences: its role, the value that matters most, and what you changed from the starting point and why.

> **Starting point.** Every LEV, FB, envelope, tracking, filter and amp value below comes from reasoning, not from listening. Each comment gives the reason; your ear decides the number.

1. **Bench test 6: operator shapes and FM command names** (25 min).

   - (a) *Shapes as carriers.* On a fresh FM Synth choose algorithm `0B`, set A, B and C to LEV `00` and D to LEV `60` at RATIO 1.00, and preview with [EDIT]+[PLAY]. Step D's SHAPE from first to last. Record every name in order, the count, where the wavetable shapes begin (from "W" on, p. 58), and whether and where CLICK appears (added in 6.6.3 B). Give each shape before the wavetables one word: pure, buzzy, hollow, noisy, click.
   - (b) *Shapes as modulators.* Choose algorithm `07`, set A and B to LEV `00`, and let C (RATIO 1.00, LEV `30`) modulate D (RATIO 1.00). Set C's shape to SAW, SQU, TRI and NOISE in turn. Prediction: the first three stay pitched, since their components sit at whole-number ratios; NOISE does not.
   - (c) *Command names.* For each parameter below, highlight it in Instrument view, move to a phrase and enter a command in an empty FX cell (pp. 17, 75). Record the name the unit shows: ALGO; operator A's SHAPE, RATIO, LEV and FB; MOD1 to MOD4; CUTOFF; RES; AMP; LIM. Then B's LEV, to learn whether each operator has its own commands.
   - (d) *Relative or absolute.* Read each command's help text, then confirm two by ear as in the last Try it of the Concepts: three steps of change means relative, one means absolute (p. 69).
   - (e) *Limits.* With a relative command on a level, push it past the top with repeated `40`s. Record whether it stops at the maximum or wraps.

   *Product:* the shape list, and a table of parameter, command and kind, in the results record with firmware and date.

2. **Starting patch "KEYS 0"** (10 min). Clone STRUCK 0 into `0E` ([SHIFT]+[OPTION] then [EDIT] on the instrument column, p. 15). Arrange its slots as a chain: slot 1 TRACKING on VELOCITY with MOD AMT, slot 2 the index AHD, slot 4 the amp AHD. Play it at four velocities, as in the Try it on TRACKING.
   *Product:* one saved instrument holding the velocity routing and nothing else.

3. **Electric piano 1: "TINE"** (20 min). Clone KEYS 0 into `14`, then set:

   ```patch
   # INST 14  FMSYNTH  "TINE"
   ALGO   07            ; [A>B]+[C>D]: tine pair and body pair, each with its own carrier
          A      B      C      D
   SHAPE  SIN    SIN    SIN    SIN    ; sines, so the partials stay where the arithmetic puts them
   RATIO  14.00  1.00   1.00   1.00   ; tine 1, 13, 15, 27, 29; body 1, 2, 3
   LEV    50     60     30     60     ; A peak tine index; C low body index; B, D balance the layers
   FB     00     00     00     00     ; none: feedback would fill the gap between 1 and 13
   OPMOD1 1>LEV  .      2>LEV  .      ; first MOD slots: macro 1 the tine index, macro 2 the body
   OPMOD2 1>PIT  .      .      .      ; A's second slot: macro 1 also bends A, so the strike starts inharmonic
   SLOT1  TRACKING  SRC VELOCITY  DEST: (MOD AMT, slot 2)  LVAL 30  HVAL FF   ; soft notes keep a fifth of the ping
   SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 06   ; the ping: 6 ticks, 156 ms at 96 BPM
   SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 30   ; the body darkens over two beats, 48 ticks
   SLOT4  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC C0   ; 192 ticks: two bars
   TABLE TIC  FC                     ; octave map: the table from worked example 1
   FILTER LOWPASS  CUTOFF D0  RES 00 ; a gentle ceiling; resonance would colour every note alike
   AMP    10  LIM SIN               ; slight drive: loud notes round off, if volume reaches the amp first
   ```

   Build the octave-map table from worked example 1. Play a C in each octave from 2 to 7 at V `30` and `7F`. Find the range of A's PIT offset that sounds struck rather than out of tune.
   *Product:* a saved instrument and its rationale, with the PIT range you kept and the answers to the three table conditions.

4. **Electric piano 2: "REED"** (15 min). Clone KEYS 0 into `15`:

   ```patch
   # INST 15  FMSYNTH  "REED"
   ALGO   05            ; [A>B>C]+D: a stack for reed and bark, a free sine for the body
          A      B      C      D
   SHAPE  SIN    SIN    SIN    SIN
   RATIO  1.00   2.00   1.00   1.00   ; B>C at 2:1 gives 1, 3, 5, 7; A puts 1 and 3 into B, so C gains 2, 4, 6
   LEV    40     48     60     40     ; A peak bark; B reed index, fixed; C the reed; D supports the fundamental
   FB     00     00     00     00     ; none: the bark should come from A alone, so velocity controls it
   OPMOD1 1>LEV  .      .      .      ; macro 1: bark depth
   SLOT1  TRACKING  SRC VELOCITY  DEST: (MOD AMT, slot 2)  LVAL 00  HVAL FF   ; soft notes do not bark at all
   SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 0C   ; the bark lasts half a beat, 12 ticks
   SLOT3  TRACKING  SRC NOTE  DEST: (filter cutoff)  LVAL 60  HVAL E0   ; key scaling: the filter follows pitch
   SLOT4  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC 90   ; 144 ticks, a bar and a half: shorter than TINE
   FILTER LOWPASS  CUTOFF 90  RES 18 ; base value for slot 3; slight resonance for the nasal edge
   AMP    20  LIM SIN               ; more drive than TINE: the reed barks through the amp as well
   ```

   B's index has no envelope: the hollow core lasts the whole note, and that frees slot 3 for key scaling. Listen for the octave filling in on a hard note.
   *Product:* a saved instrument and its rationale.

5. **Bass 1: "SUB"** (10 min). A fresh FM Synth in `16`:

   ```patch
   # INST 16  FMSYNTH  "SUB"
   ALGO   0B            ; A+B+C+D: placed partials, no modulation
          A      B      C      D
   SHAPE  SIN    SIN    SIN    SIN
   RATIO  .      .      2.00   1.00   ; D the fundamental; C the octave that small speakers can play
   LEV    00     00     20     70     ; A, B silent; weight from D, pitch from C
   FB     00     00     00     00     ; none: partials above 2 would thin the sub
   OPMOD1 .      .      1>LEV  .      ; macro 1: C's level by key
   SLOT1  AHD  DEST: (amp level)  ATK 01  HOLD 18  DEC 30    ; 1 tick against a click; one beat held, two to fade
   SLOT2  TRACKING  SRC NOTE  DEST: (macro MOD1)  LVAL FF  HVAL 40   ; reversed: low notes get the most octave
   MIXER  REV 00  DEL 00            ; keep the low end out of the sends
   ```

   Slot 2 needs TRACKING to reach a macro; if bench test 5 said it cannot, delete it and set C's level by ear. Play E-1 to E-3 on headphones, then on a small speaker.
   *Product:* a saved instrument, its rationale, and whether ATK `00` clicked.

6. **Bass 2: "PLUCK"** (10 min). Clone KEYS 0 into `17`:

   ```patch
   # INST 17  FMSYNTH  "PLUCK"
   ALGO   07            ; [A>B]+[C>D]: C>D the string, B a plain octave
          A      B      C      D
   SHAPE  SIN    SIN    SAW    SIN    ; C as SAW: modulators at 1, 2, 3 ...: dense but harmonic
   RATIO  .      2.00   1.00   1.00   ; all whole numbers, so every partial stays on a harmonic
   LEV    00     18     58     70     ; A silent; B a faint octave; C peak index; D the note
   FB     00     00     00     00     ; none: the saw already supplies the harmonics
   OPMOD1 .      .      1>LEV  .      ; macro 1: the pluck's index
   SLOT1  TRACKING  SRC VELOCITY  DEST: (MOD AMT, slot 2)  LVAL 40  HVAL FF   ; harder plucks start brighter
   SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 0C   ; bright for 12 ticks, half a beat, then dark
   SLOT3  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC 24   ; 36 ticks: a beat and a half
   SLOT4  TRACKING  SRC NOTE  DEST: (filter cutoff)  LVAL 70  HVAL C0   ; higher notes keep more top
   TABLE TIC  01                     ; one tick per row: the pitch drop below
   FILTER LOWPASS  CUTOFF A0  RES 20 ; base for slot 4; a little resonance marks the onset
   ```

   ```table
   # PLUCK's table  (TIC 01: pitch drop)
   0  0C .  .        .  .      ; tick 0: an octave up
   1  05 .  .        .  .      ; tick 1: a fourth up
   2  00 .  HOP 02   .  .      ; from tick 2: the note itself, held on this row
   ```

   The drop lasts 2 ticks, 52 ms at 96 BPM. `HOP` in a table jumps to row y, x times (p. 70); `HOP 02` holds the row only if x = 0 means "without limit"; check this on your unit. Play bar 4 of worked example 2.
   *Product:* a saved instrument and its rationale.

7. **Bass 3: "GROWL"** (10 min). A fresh FM Synth in `18`:

   ```patch
   # INST 18  FMSYNTH  "GROWL"
   ALGO   07            ; [A>B]+[C>D]: A>B the growl, C>D the body
          A      B      C      D
   SHAPE  SQU    SIN    SIN    SIN    ; A as SQU: modulators at 1, 3, 5 ...: a hollower set than SAW
   RATIO  1.00   1.00   1.00   1.00   ; whole numbers throughout, so the growl stays on pitch
   LEV    48     60     18     60     ; A peak growl index; C a low, steady body index
   FB     10     00     00     00     ; a little on A roughens the growl
   OPMOD1 1>LEV  .      .      .      ; macro 1: growl index
   SLOT1  LFO  DEST: (macro MOD1)  SHAPE TRI  TRIG RETRIG  FREQ 08   ; index swells and falls; every note starts alike
   SLOT2  AHD  DEST: (amp level)  ATK 00  HOLD 30  DEC 30    ; 48 ticks held, 48 to fade: one bar in all
   SLOT3  TRACKING  SRC VELOCITY  DEST: (amp drive)  LVAL 08  HVAL 48   ; harder notes fold harder
   SLOT4  TRACKING  SRC NOTE  DEST: (filter cutoff)  LVAL 50  HVAL B0   ; the resonance rises with the note
   FILTER LOWPASS  CUTOFF 70  RES 60 ; a resonant peak for the index to sweep through: the vowel
   AMP    10  LIM FOLD              ; base drive for slot 3; folding adds harmonics that grow with it
   ```

   The notes give LFO FREQ in steps (p. 18); if `08` means one cycle per 8 steps, the index swells twice a bar. Check how the unit reads it, and whether an LFO can drive a macro below zero. Play bars 1 to 3 of worked example 2.
   *Product:* a saved instrument, its rationale, and how FREQ reads.

8. **Duo check** (5 min). Hold an Am7 voicing on the piano across three tracks, one note each, since a track plays one note at a time (p. 5). Play worked example 2's line under it on each bass in turn.
   *Product:* one line per bass: which piano it suits, and in which register the two collide.

### Results record

| Test | Prediction | Observed | Firmware | Date |
|------|------------|----------|----------|------|
| 6a Shapes: count, first wavetable, CLICK | | | | |
| 6b SAW, SQU, TRI pitched; NOISE not | | | | |
| 6c Command names | | | | |
| 6d Relative or absolute, per command | | | | |
| 6e Relative past the limit: stop or wrap | | | | |
| TRACKING VELOCITY reads the V column | | | | |
| Volume reaches the amp before LIM | | | | |
| Octave map: row n serves octave n | | | | |
| `PSL` on a legato note; `PSL` persists | | | | |
| Absolute value lasts past a retrigger | | | | |
| Scale quantises an FM pitch envelope | | | | |
| `A-4` sounds at 440 Hz | | | | |

## Etude

**Brief.** A duo for electric piano and bass in four contrasted sections, with the bass composed as a line, its own contour and rhythm, not a riff under the chords.

**Forces.** Track 1 for the bass. Tracks 2 to 4 for the piano: one note per track (p. 5), so a three-note voicing takes three tracks. Only this week's five instruments; both pianos and at least two basses must appear. No drums.

**Constraints.**

- 32 bars in four sections of 8, each section two song rows of 4-bar chains. Chains of equal length on every row, with chain `FE` for a resting track (p. 10).
- Joins at bars 8, 16 and 24, each in its section's second chain, cloned from the first with the last phrase replaced, and each by a different means: a thinning, a pivot note, a pickup, a silence, a change of register.
- Each boundary changes two or three named dimensions, no more.
- The bass line written first as note names and rhythm, as in worked example 2, with each section's lowest note, highest note and direction; at least two different directions across the four.
- In every section at least half the bass onsets fall on steps where the piano has none.
- At least one legato and one retriggered slide with `PSL`; at least one relative and one absolute command, each placed for a stated reason.
- Velocity carries timbre: in at least one section the piano's V values span at least `30` to `70`.
- The last bar ends the piece on purpose.

**Duration target.** 32 bars. At 96 BPM a bar lasts 240 / 96 = 2.5 s, so 32 × 2.5 = 80 s, 1 min 20 s.

**Repeat budget.** 4. Count as in week 1: consecutive plays of the same phrase number at the same TSP on one track.

**Plan.** One page, before you open Song view. It must show:

- the inventory: instruments with tracks and roles, the chords bar by bar, motifs as note names;
- the bass line of every section as a note-and-rhythm table, bar sums checked;
- one bar per section as onset grids, bass above piano;
- the sections with bar numbers, and a song outline of eight rows;
- a density curve and two register curves, one per instrument, across all 32 bars;
- for each join, one sentence naming its means and what it prepares;
- the named contrasts at bars 9, 17 and 25;
- which piano and which bass play in each section, and why;
- a velocity map (where the piano plays hard and where soft) and a ring map (which piano notes ring and which get cut);
- a repeat count for any phrase used more than twice in a row.

An outline in this shape meets the constraints. The chain numbers serve as examples:

```song
# SONG   1  2  3  4  5  6  7  8
00       10 20 30 40 .  .  .  .     ; A  bars 1-4
01       11 21 31 41 .  .  .  .     ; A  bars 5-8, join in bar 8
02       12 22 32 42 .  .  .  .     ; B  bars 9-12
03       13 23 33 43 .  .  .  .     ; B  bars 13-16, join in bar 16
04       14 24 34 44 .  .  .  .     ; C  bars 17-20
05       15 25 35 45 .  .  .  .     ; C  bars 21-24, join in bar 24
06       16 26 36 46 .  .  .  .     ; D  bars 25-28
07       17 27 37 47 .  .  .  .     ; D  bars 29-32, ending in bar 32
```

Bar count: 8 rows × 4 bars = 32. Row *r* starts at bar 4*r* + 1, so row `07` starts at bar 29.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: what the plan got right, what you changed, and which patch you would rebuild.

## Listening review

Render the etude. Wait until the next day. Listen once, away from the unit, without stopping. Then annotate the plan with what you heard, in a different colour from the plan. Thirty minutes in all.

Questions for this week:

1. Can you sing section A's bass line after one hearing? Where it loses you, compare its rhythm with the piano's.
2. Did the piano's soft and hard notes differ in brightness, or only in loudness? If only loudness, the tracking needs more depth.
3. Did each slide arrive where you meant, given its tick count?
4. Did the bass's register ever crowd the piano's left-hand note? Mark the bar and the two notes.

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists, but the bass tables, onset grids or curves go missing, or the piece departs from it without comment. | The plan shows every item, the bar sums check, and each departure has a stated reason. |
| Technique of the week | Velocity changes only loudness, or slides and commands lack a stated reason. | Both pianos answer velocity in timbre; each bass suits its role; all five patches are saved with rationales. |
| Development | Sections differ, but the bass repeats a one-bar figure, or a phrase exceeds the repeat budget. | The bass line has a planned contour per section with at least two directions; the budget holds; each join uses a different, audible means. |
| Sound | Bass and piano collide in register, or the sub vanishes on small speakers. | Each instrument holds its register; the bass carries pitch on small speakers; hard notes bark where the plan says. |

## Going further

- Build a third piano on algorithm `06`, with the shared stack's carriers at 1.00 and 2.00. Compare it with TINE: shared brightening against independent layers.
- Rebuild GROWL's amp as an ADSR and end notes with `OFF`; an ADSR needs one to reach its release (p. 18). Since 6.6.0, an ADSR retriggered by the same instrument resumes its attack from the current level.
- Replace a TRACKING slot with a velocity-map table (TABLE TIC `FD`, p. 24) that changes two parameters per velocity band.
- Listen to a tine piano on a 1970s jazz-funk record and a reed piano in 1960s soul. Name which layer changes when the player digs in.
- Transcribe the slides in a fretless bass line from fusion: interval and rough duration of each.

## Summary

- Electric pianos want two layers on two carriers: tine and body on `07`, reed and bark on `05`.
- TRACKING maps velocity and pitch to timbre; route it through MOD AMT to scale a whole envelope. Table maps do the same in steps.
- The filter sets a ceiling on what FM pushes up; the amp stage adds a second non-linearity.
- A short pitch envelope, on a modulator or in a table, gives an attack that settles.
- Sub, plucked and growl basses do different jobs. `PSL` with the I column empty gives a legato slide.
- Relative commands accumulate until a retrigger; absolute ones set a known state.

Week 4 builds drums on the same tools: pitch-drop tables like PLUCK's, short envelopes, and noise.
