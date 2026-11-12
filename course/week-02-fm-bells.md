---
title: "FM I, bells and vibes"
week: 2
strand: sound
outcomes: [2, 3]
needs: [1]
duration_target: "24 bars"
repeat_budget: 4
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "16-21, 58-59"
---

## Overview

This week you build struck metal from sine waves: bells, a glockenspiel, a
vibraphone and a gong, all on the FM Synth. The point goes beyond the four
patches. Once you can predict a spectrum from two ratios and a level, you can
design a sound towards a target and say why each value sits where it does.
Long pieces need instruments you can vary on purpose, and that starts here.

The etude makes the first real step past the loop: 24 bars in three
contrasted sections, with the joins between them composed.

By the end of the week you can:

- calculate the partials of a carrier and modulator pair from their ratios;
- predict whether a ratio pair will sound pitched, bell-like or clangorous;
- shape a struck sound with an envelope on a modulator's level;
- choose an algorithm by the number of carriers a sound needs;
- build and save a family of four related instruments, each with a rationale;
- plan and sequence a 24-bar piece with written joins.

## Before you start

You need week 1: the data model, cloning, and the one-page plan.

Open a new project. Keep instruments `10` to `13` free for this week's
family, and keep your week-1 notes on bench tests 1 to 4 to hand.

Read the manual's pages on instruments and modulation (pp. 16-21) and on the
FM Synth (pp. 58-59). Have a calculator or a REPL nearby. Every ratio in this
module comes with its working, and you will do the same for your own patches.

> **Starting point.** Nobody has tried any level, feedback or envelope value
> in this module on a unit. The ratios and the frequencies follow from
> arithmetic and hold anywhere. Everything else needs your ear.

## Concepts

### One pair: carrier, modulator, sidebands

The FM Synth has four operators, A to D (p. 58). Each operator makes one
waveform at a frequency set by RATIO, a multiple of the played note. An
operator you hear acts as a carrier. An operator that bends another
operator's phase, and that you do not hear directly, acts as a modulator.

Take one pair with sine shapes. The note has frequency *f*, the carrier has
ratio *c* and the modulator ratio *m*. The output contains the carrier and
pairs of sidebands spaced at the modulator's frequency:

```
partials at  f × |c ± k·m|     for k = 0, 1, 2, 3, ...
```

The upper sideband of order *k* sits at *c + k·m*, the lower at *c − k·m*.
When *c − k·m* goes negative, the partial reflects about zero and appears at
the absolute value.

Work one case. With *c* = 1 and *m* = 2:

| k | upper, 1 + 2k | lower, 1 − 2k | lower, reflected |
|---|---------------|---------------|------------------|
| 0 | 1 | 1 | 1 |
| 1 | 3 | −1 | 1 |
| 2 | 5 | −3 | 3 |
| 3 | 7 | −5 | 5 |

The result holds only odd harmonics: 1, 3, 5, 7. That spectrum has the hollow
quality of a square wave or a clarinet's low register, from two sines.

Two more, with the lower sidebands already reflected:

| c : m | k = 0 | k = 1 | k = 2 | k = 3 | Series |
|-------|-------|-------|-------|-------|--------|
| 1 : 1 | 1 | 2, 0 | 3, 1 | 4, 2 | every harmonic |
| 1 : 3 | 1 | 4, 2 | 7, 5 | 10, 8 | 1, 2, 4, 5, 7, 8, 10: every third one missing |

In the 1 : 1 case the first lower sideband lands at 0 Hz and adds nothing you
can hear, and the second lands back on the carrier. A reflected sideband
arrives with its own sign, so where it meets another partial the two may add
or partly cancel. The positions above hold exactly; the strengths at shared
positions need the ear.

The manual does not say whether the engine modulates frequency or phase. The
sidebands fall in the same places either way, so the arithmetic stands.

> **Try it.** On a fresh FM Synth, choose algorithm `00` and set C's LEV to
> `00`, so that only C modulates D. Leave D at RATIO 1.00. Step C's RATIO
> through 1.00, 2.00 and 3.00 at a moderate LEV and match what you hear to the
> three series above. Preview with [EDIT]+[PLAY].

### Why some ratios ring true and others clang

Every partial above came out as a whole number, so each one belongs to the
harmonic series of the played note. The ear fuses a harmonic series into one
pitch.

Now set the modulator to 3.50 against a carrier of 1.00:

| k | upper, 1 + 3.5k | lower, reflected |
|---|-----------------|------------------|
| 0 | 1 | |
| 1 | 4.5 | 2.5 |
| 2 | 8 | 6 |
| 3 | 11.5 | 9.5 |

At 440 Hz that gives 440, 1100, 1980, 2640, 3520, 4180 and 5060 Hz. The
partials at 2.5 and 4.5 fit no harmonic series on the played note, and the
ear stops hearing one fused tone. It hears a strike with a pitch and a
separate shimmer above it: a bell.

A stricter statement helps you design. RATIO takes two decimal places, so
every ratio pair reduces to a fraction of whole numbers. Reduce *c : m* to
lowest terms, *N1 : N2*. All partials then fall on harmonics of *f·c / N1*:

- 1 : 3.5 reduces to 2 : 7. The partials 1, 2.5, 4.5, 6, 8 become harmonics
  2, 5, 9, 12, 16 of a fundamental at *f* / 2. That fundamental does not
  sound, and the harmonics lie too far apart to imply it firmly.
- 1 : 1.4 reduces to 5 : 7. The partials 1, 2.4, 0.4, 3.8, 1.8 become
  harmonics 5, 12, 2, 19, 9 of *f* / 5. The ear has no chance of fusing
  those. This ratio comes from John Chowning's 1973 paper on FM, which used
  it for a bell.
- 1 : 1.41 reduces to 100 : 141. The implied fundamental lies at *f* / 100,
  below hearing for any note you would play. The result has no harmonic
  reading at all.

So the working rule: **the smaller N1, the more pitched; the larger, the more
metallic.** With *N1* = 1 the pair sounds like a pitched tone at the carrier.
With 2 to 5 it sounds like a bell or a mallet. Beyond that it moves towards
gongs and noise. Note also that 1 : 1.4 puts a partial at 0.4, below the
played note (176 Hz under a 440 Hz carrier), which reads as a bell's hum.

> **Try it.** With the same single pair, compare modulator ratios 3.00, 3.50
> and 3.51 at one LEV. Reduce each ratio to lowest terms first and write down
> what you expect. 3.51 against 1.00 gives 100 : 351.

### Modulation index: the modulator's level sets brightness

Ratios fix where partials may fall. The modulation index *I*, the depth of
the modulation, fixes how strong each one gets. A Bessel function gives the
strength of the order-*k* sideband pair: *J<sub>k</sub>(I)*. The carrier
takes *J<sub>0</sub>(I)*.

| I | carrier | k = 1 | k = 2 | k = 3 | k = 4 |
|---|---------|-------|-------|-------|-------|
| 0.5 | 0.94 | 0.24 | 0.03 | 0.00 | 0.00 |
| 1 | 0.77 | 0.44 | 0.11 | 0.02 | 0.00 |
| 2 | 0.22 | 0.58 | 0.35 | 0.13 | 0.03 |
| 3 | −0.26 | 0.34 | 0.49 | 0.31 | 0.13 |

A minus sign means inverted phase; the loudness follows the size. Three
things to take from the table:

- At a low index you hear the carrier and one sideband pair. Roughly *I* + 1
  orders carry useful energy, so brightness rises with the index.
- Energy moves outward. By *I* = 2 the first sidebands outweigh the carrier.
- The carrier vanishes altogether near *I* = 2.40, the first zero of
  *J<sub>0</sub>*, and again near 5.52.

On the M8 the modulator's LEV sets the index (p. 58). The manual gives no
formula from LEV to index, so treat LEV as a brightness control and calibrate
it once by ear, using the vanishing carrier as a landmark.

A second modulator in series (A into B into C, as in algorithm `05`) gives
the middle operator its own sidebands, and each of those then makes
sidebands on the carrier. The spectrum thickens fast. Stay with single pairs
this week until the arithmetic feels routine.

> **Bench test.** Set a carrier at 1.00 and its modulator at 7.00, so the
> sidebands (6 and 8, then 13 and 15) sit far from the carrier. Raise the
> modulator's LEV slowly from `00` and note the value at which the
> fundamental drops out. That LEV corresponds to an index near 2.40. Record
> it with your firmware version. Keep going and look for the second null.

### The envelope on the index makes the strike

Strike a metal bar and the high modes ring briefly while the low ones last.
The sound starts bright and decays towards a nearly pure tone. An amplitude
envelope alone cannot do that, because it scales every partial together.

FM gets it almost for free. Let the index fall during the note and the
energy drains from the outer sidebands back into the carrier, as the table
shows read from bottom to top. So a struck sound needs two envelopes:

1. one on loudness, with no attack and a long decay;
2. one on the modulator's level, with no attack and a shorter decay.

The second envelope matters more for character. A fast index decay gives a
hard mallet on a clean bar. A slow one gives a bell whose clang lingers. An
index that rises after the strike gives the bloom of a gong.

The routing takes two links (pp. 18-21, 58). Each operator has two MOD slots,
and each can assign one of four macros, MOD1 to MOD4, to that operator's
level, ratio, pitch or feedback. With a macro assigned to LEV, the level
runs from `00` up to the LEV you set, so the LEV becomes the peak index. An
instrument modulation slot of type AHD then drives the macro. The manual
leaves the destination names unstated, and nobody has checked this chain on
a unit: bench test 5 in the lab settles it.

AHD times run in ticks, so they follow tempo (p. 18). One tick lasts
2.5 / BPM seconds at the default 24 ticks per quarter note. At 96 BPM that
comes to 2.5 / 96 = 0.026 s, and a decay of 96 ticks lasts one bar of 4/4:
96 × 0.026 = 2.5 s. Check on your unit that a decay value of `60` (96) means
96 ticks.

> **Try it.** Once bench test 5 has given you the routing, set the amp decay
> long and sweep only the index decay from very short to equal with the amp
> decay. Find the point where the sound stops reading as "struck" and starts
> reading as "bowed metal".

### Algorithms by number of carriers

An algorithm fixes which operators modulate which. For design, sort the
twelve (p. 59) by how many carriers they give, because each carrier
contributes its own partial or its own family of sidebands.

| Carriers | Algorithms | Use |
|----------|------------|-----|
| 1 | `00` to `04` | one voice with a deep or complex modulator section: thick, noisy, vocal spectra |
| 2 | `05`, `06`, `07` | two layers. `07` gives two independent pairs |
| 3 | `08`, `09`, `0A` | several placed partials. `0A` gives one pair plus two free sines |
| 4 | `0B` | additive: four sines, no modulation |

The carrier counts come from reading the routings, not from the manual's
wording.

{% fmalgo "07" %}

{% fmalgo "0A" %}

Struck metal wants several carriers, because real bars and bells have a few
strong partials at known, mostly inharmonic, positions. Idealised figures,
relative to the pitch you hear:

| Instrument | Partials | Source of the figures |
|------------|----------|-----------------------|
| Glockenspiel bar | 1, 2.76, 5.40, 8.93 | a uniform free bar: 3.011², 5², 7², 9² over 3.011² |
| Vibraphone bar | 1, 4, 10 | bars undercut to tune the second mode to the double octave |
| Tubular bell | 2.00, 2.99, 4.17, with 1.21 and 0.62 weaker below | modes near 9², 11², 13² over 40.5 |
| Church bell | 0.5, 1, 1.2, 1.5, 2 | hum, prime, tierce, quint, nominal |

The tubular bell has no partial at its strike pitch. Its fourth, fifth and
sixth modes fall near 2, 3 and 4 times a frequency that does not sound
(81 / 40.5 = 2.00, 121 / 40.5 = 2.99, 169 / 40.5 = 4.17), and the ear
supplies the missing fundamental. A church bell's tierce at 1.2 makes a
minor third (6 : 5) over the prime, which gives bells their minor colour.

Two design routes follow. Place carriers directly on the strong partials
(algorithms `0A` and `0B`), or pick a pair whose sidebands land near them
(algorithm `07`). The worked examples take one route each.

> **Try it.** On algorithm `0B`, set the four ratios to 0.50, 1.00, 1.20 and
> 2.00 with equal LEV. You should hear a chord-like cluster. Then imagine
> each partial with its own decay, longest at the bottom: that step turns
> the cluster into a bell, and the lab gives you the means.

### Feedback and operator shapes

FB feeds an operator's output into its own phase (p. 58). On a sine operator,
rising feedback adds harmonics of that operator's own frequency, heading
towards a sawtooth-like spectrum and then, at high values, towards noise.

On a modulator, feedback thickens everything downstream: each harmonic *n*
of the modulator behaves like another modulator at ratio *n·m*, with its own
sidebands at *c ± k·n·m*. On a carrier it adds harmonics of that carrier
only.

For bells, use little or none. Their character lives in a few clean
partials, and feedback fills the gaps between them. For a gong, feedback on
the modulator supplies the wash.

Shapes other than SIN work the same way: a shape with harmonics acts as
several modulators or several carriers at once. Keep every operator on SIN
this week, so that what you hear matches what you calculated. Week 3 opens
the shape list.

> **Try it.** Take your 1 : 3.50 pair at a moderate index and raise the
> modulator's FB in steps of `10`. Note the value where the pitch of the
> strike stops being clear. Stay below it for bells.

## Worked examples

### A tubular bell on two pairs

The target has strong partials near 2, 3 and 4 with nothing at 1. One pair
reaches that directly: a carrier at 3.00 with a modulator at 1.00.

| k | upper, 3 + k | lower, 3 − k |
|---|--------------|--------------|
| 0 | 3 | |
| 1 | 4 | 2 |
| 2 | 5 | 1 |

At an index near 1 the table of strengths gives 0.77 for the carrier (3),
0.44 for the pair at 2 and 4, and 0.11 for the pair at 1 and 5. That matches
the tube's shape: three strong partials and a weak fundamental. It lacks the
tube's stretch (2.99 and 4.17 against 3 and 4), so alone it sounds too
polite.

The second pair supplies the metal: carrier 1.00, modulator 3.50, the pair
from the Concepts section. Its partials at 2.5 and 4.5 fall between the
first pair's 2, 3 and 4, and its carrier firms up the strike pitch.

```patch
# INST 10  FMSYNTH  "TUBE"
ALGO   07            ; [A>B]+[C>D]: two independent pairs
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  1.00   3.00   3.50   1.00   ; A>B gives 2, 3, 4; C>D gives 1, 2.5, 4.5
LEV    40     70     50     50     ; starting points; A sets the index of pair 1
FB     00     00     00     00     ; none: keep the partials clean
OPMOD  1>LEV  .      2>LEV  .      ; macro 1 scales A's level, macro 2 scales C's
SLOT1  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC C0   ; 192 ticks, two bars
SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 60   ; index of pair 1: one bar
SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 18   ; clang: one beat
```

Reasons for the envelope values. The clang pair (C into D) loses its index
in 24 ticks, one beat, so the inharmonic partials mark the strike and then
leave D as a plain sine at the strike pitch. Pair 1 keeps its sidebands for
a bar, so the 2-3-4 cluster rings on. The amp decay runs longest. The
destination names in brackets describe a function; use whatever names bench
test 5 finds.

### A vibraphone on one pair and two free partials

The target: partials at 1, 4 and 10, a soft strike, and the slow pulse of
the motor. Algorithm `0A` gives a pair (A into B) and two free carriers.

Place the carriers on the bar's partials: B at 1.00, C at 4.00, D at 10.00.
At 440 Hz those sit at 440, 1760 and 4400 Hz.

A models the mallet. Give it ratio 3.00: against B's 1.00 its first sidebands
fall at 1 + 3 = 4 and |1 − 3| = 2. The upper one lands on the tuned partial
at 4 and reinforces it during the strike; the lower adds an octave. The next
pair falls at 7 and 5, which only a hard strike should reach, so keep A's
level low.

```patch
# INST 11  FMSYNTH  "VIBES"
ALGO   0A            ; [A>B]+C+D: one pair, two free sines
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  3.00   1.00   4.00   10.00  ; bar partials 1, 4, 10; A's sidebands at 4 and 2
LEV    28     70     30     18     ; starting points; upper partials much quieter
FB     00     00     00     00
OPMOD  1>LEV  .      2>LEV  2>LEV  ; macro 1: mallet index; macro 2: upper partials
SLOT1  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC C0   ; two bars
SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 0C   ; mallet: half a beat
SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 30   ; partials 4 and 10: two beats
SLOT4  LFO  DEST: (amp level)   SHAPE SIN  TRIG FREE  FREQ by ear   ; the motor
```

The motor on a real vibraphone turns discs in the resonators, which varies
loudness and a little tone, not pitch. So the LFO goes to level, with a
shallow amount. TRIG FREE lets the pulse run on across notes, as the motor
does; RETRIG would restart it on every strike and sound mechanical in a
different way. Set FREQ by ear to a few cycles per second.

If macro 2 scales C and D to `00` at the end of its decay, the long tail
holds only the fundamental. That matches the instrument: the upper modes of
a bar die quickly.

### A join for the etude

A join carries the listener from one section's terms to the next. This one
moves from a vibraphone melody in the middle register (section A) to a
high glockenspiel texture (section B) at bar 8, by three means: the melody
thins to one held note, the bell marks a pivot pitch, and the glockenspiel
enters early with a pickup.

```phrase
# PHRASE 08  (track 1, vibes: bar 8, the melody thins out)
0  D-4 64 11  .   .   .
4  F-4 50 11  .   .   .
8  A-4 60 11  .   .   .      ; held to the bar line: the pivot pitch
```

```phrase
# PHRASE 18  (track 2, tube: bar 8)
8  A-3 70 10  .   .   .      ; the bell doubles the pivot an octave down
```

```phrase
# PHRASE 28  (track 3, glock: bar 8, enters with a pickup)
C  A-5 30 12  .   .   .
E  A-5 48 12  .   .   .      ; crescendo into bar 9
```

Reasons. The vibes have played four notes a beat through section A; three
notes in the bar halve the density twice, so the ear expects a change. A
appears in three octaves across the bar, which hands the pitch from the
old register to the new one. The glockenspiel's first two notes sit at low
volume, so its entry sounds prepared, not sudden.

One constraint shapes every bar you write this week: a track plays one note
at a time (p. 5). A new note on a track replaces whatever still rings there.
Check on your unit how abruptly. In the join the bell strikes only once, so
it rings across the bar line into section B on its own track.

## Lab

Allow 1 h 45 min. Keep a table in your notes as you go: instrument, algorithm,
ratios, the partials you calculated, and one line on what you heard.

1. **Bench test 5: FM modulation routing** (20 min). On a fresh FM Synth,
   algorithm `00`, C modulating D. In C's first MOD slot, assign macro 1 to
   LEV. Then, in the instrument's modulation slots, find the destination
   that drives macro 1 and put an AHD on it. Answer four questions: what
   the destinations are called on the unit; whether C falls silent when
   nothing drives the macro; whether a decay of `60` lasts one bar; whether
   TRACKING can reach a macro.
   *Product:* the four answers in your notes, with firmware version and date.

   If no modulation slot reaches the macros on your firmware, shape
   brightness with an AHD on the filter CUTOFF instead, and say so in each
   rationale. The ratios still apply.

2. **Starting patch** (15 min). Build instrument `0F`, "STRUCK 0": algorithm
   `07`, all SIN, a single 1 : 1 pair sounding and the other pair at LEV
   `00`, with the amp and index envelopes routed as in the worked examples.
   Save it with LOAD/SAVE. Every instrument below starts as a clone of it
   ([SHIFT]+[OPTION] then [EDIT] on the instrument column).
   *Product:* one saved instrument that holds the routing and nothing else.

3. **Index calibration** (10 min). Run the bench test from the modulation
   index section on a clone of the starting patch.
   *Product:* the LEV values of the first and, if you find it, second
   carrier null.

4. **Tubular bell and vibraphone** (25 min). Build instruments `10` and `11`
   from the worked examples. Adjust levels and decays by ear over a range of
   two octaves. For the vibraphone, find a motor speed and depth you would
   keep.
   *Product:* two saved instruments, each with the values you changed and
   why.

5. **Glockenspiel** (15 min). Build instrument `12` on algorithm `0A` with
   the free-bar partials: B at 1.00, C at 2.76, D at 5.40. Choose A's ratio
   so that its first upper sideband lands on the bar's fourth partial:
   8.93 − 1.00 = 7.93. Work out where the lower sideband falls before you
   listen (|1 − 7.93| = 6.93). Use very short decays on everything but B.
   Then play it in its real register. At a note of 2000 Hz the partials sit
   at 5520, 10800 and 17860 Hz, so decide which of them still earn a place.
   *Product:* a saved instrument and a list of the operators you kept.

6. **Gong** (20 min). Build instrument `13` to be inharmonic on purpose.
   Start from a 1.00 carrier with a 1.41 modulator. Calculate its first three
   sideband pairs yourself, then check: 2.41 and 0.41, 3.82 and 1.82, 5.23
   and 3.23. Add a second pair with ratios of your own that reduce to large
   whole numbers; show the reduction. Give the index envelope a slow attack,
   so the brightness blooms after the strike, and add feedback on one
   modulator until the wash appears. Play it low.
   *Product:* a saved instrument, the reduced ratios, and the calculated
   partials for both pairs.

7. **Family check** (10 min). Play one four-note figure on all four
   instruments in turn. Note which two sit closest together, and change one
   of them until every pair can be told apart in a single note.
   *Product:* the completed table, and the four instruments saved to the
   card for your library.

## Etude

**Brief.** A piece for mallets and bells alone, in three contrasted sections
joined by composed transitions.

**Forces.** At most three tracks. Only this week's instruments: tubular
bell, vibraphone, glockenspiel, gong. No drums, no bass, no other engine.

**Constraints.**

- 24 bars: three sections of 8 bars each.
- Bars 8 and 16 serve as written joins. Each sits in its own chain, built for
  that boundary, and each uses a different means: a thinning, a pivot note,
  a pickup, a silence, a change of register.
- Each pair of adjacent sections differs in two or three named dimensions
  from this list: pitch material, rhythm, timbre, register, density. Not
  more than three.
- The last bar ends the piece on purpose. A final strike left to ring
  counts; a loop that stops does not.
- Ringing counts as material. Decide for each track where a new note may cut
  an old one and where the old one must ring, and move notes between tracks
  to get it.
- Give every track chains of equal length on each song row, with chains of
  empty phrases for rests, so the tracks stay aligned (manual p. 10).

**Duration target.** 24 bars. At 96 BPM that makes 96 beats, so one minute.

**Repeat budget.** 4. No phrase sounds unchanged more than four times in
succession. An ostinato may therefore run for half a section before
something in it changes.

**Plan.** One page, written before you open the Song view. It must show:

- the inventory: instruments with track assignments, motifs as note names
  or scale degrees, the pitch collection of each section;
- the three sections with bar numbers, and a song outline of nine rows:
  for each section, a 4-bar chain, a 3-bar chain and a 1-bar join or ending;
- a density curve and a register curve across all 24 bars;
- for each of the two joins, one sentence naming its means and what it
  prepares;
- the named contrasts for A to B and for B to C;
- a ring map: which track holds the long notes in each section;
- a repeat count for any phrase used more than twice in a row.

A song outline in this shape meets the constraints. Chain numbers stand as
examples:

```song
# SONG   1  2  3  4  5  6  7  8
00       01 11 21 .  .  .  .  .     ; A   bars 1-4
01       02 12 22 .  .  .  .  .     ; A   bars 5-7   (3-phrase chains)
02       03 13 23 .  .  .  .  .     ; join, bar 8    (1-phrase chains)
03       04 14 24 .  .  .  .  .     ; B   bars 9-12
04       05 15 25 .  .  .  .  .     ; B   bars 13-15
05       06 16 26 .  .  .  .  .     ; join, bar 16
06       07 17 27 .  .  .  .  .     ; C   bars 17-20
07       08 18 28 .  .  .  .  .     ; C   bars 21-23
08       09 19 29 .  .  .  .  .     ; ending, bar 24
```

Bar count: 4 + 3 + 1 = 8 per section, and 3 × 8 = 24.

**Hand in to yourself.** The project file, a render, the plan, and three
lines of reflection: what the plan got right, what you changed, and which
instrument you would rebuild.

## Listening review

Render the etude. Wait until the next day. Listen once, away from the unit,
without stopping. Then annotate the plan with what you heard, in a different
colour from the plan itself. Thirty minutes in all.

Questions for this week:

1. Without the plan in front of you, where did you hear the two section
   boundaries? Did they fall at bars 9 and 17, and did the joins announce
   them or hide them?
2. Which notes got cut short by the next note on their track? Mark each one
   as intended or not.
3. Could you tell the four instruments apart in the densest bar? If two
   blurred, which partials do they share?
4. Did any instrument's strike sound brighter or duller than its role
   needed? Name the envelope you would change.

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists with three sections; the joins or the curves go missing, or the piece departs from the plan without comment. | The plan shows every required item, and the piece matches it or each departure has a stated reason. |
| Technique of the week | The instruments work, but their ratios came from trial alone, or two of them sound alike. | Each instrument has its partials calculated and a rationale; index envelopes give each a distinct strike; all are saved. |
| Development | Three sections can be told apart, but a phrase exceeds the repeat budget or a join repeats the bar before it. | The budget holds, each boundary has two or three named contrasts, and each join uses a different, audible means. |
| Sound | Notes cut each other by accident; the registers crowd together. | Ringing and cutting both sound chosen; each instrument holds a register and a role; the ending rings out. |

## Going further

- Read John Chowning, "The Synthesis of Complex Audio Spectra by Means of
  Frequency Modulation", Journal of the Audio Engineering Society, 1973. It
  runs to a few pages and covers brass, woodwind and bell tones with the
  same arithmetic you used this week.
- Build a church bell on algorithm `0B` from the ratios 0.50, 1.00, 1.20 and
  2.00, with macros giving each operator its own decay, longest at the
  bottom. Compare it with your FM tubular bell: placed partials against
  sideband partials.
- Detune one carrier of a pair to 1.01. Against a partner at 1.00 the two
  beat at 1% of the note's frequency: 4.4 Hz at 440 Hz, and twice that an
  octave up. Real bells beat in a similar way.
- Load the Macrosynth's STRUCK BELL model (manual pp. 76-80) and describe in
  two sentences how it differs from your patches.
- Listen to a recording of a carillon and one of a gamelan. Write down
  which partials you can sing back.

## Summary

- A carrier and modulator pair puts partials at *f* × |*c* ± *k·m*|. You can
  work out a spectrum before you hear it.
- Reduce the ratio pair to lowest terms: small numbers fuse into a pitch,
  large ones clang.
- The modulator's level sets the index, and the index sets brightness. An
  envelope on it makes the strike.
- Choose an algorithm by counting carriers: pairs for layered sounds, free
  carriers for placed partials.
- A track plays one note at a time, so ringing has to be composed.
- A 24-bar piece needs a plan, named contrasts and written joins.

Week 3 keeps the paired algorithms and the index envelope, and adds velocity
and key tracking, operator shapes and the filter, for electric pianos and
basses.
