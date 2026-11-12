---
title: "FM ratio and algorithm crib"
order: 3
---
The FM Synth on one page, for the sound families of weeks 2 to 4: the
twelve algorithms, the sideband arithmetic, a table of ratio pairs and what
they yield, and starting-point recipes for ten instruments. Week 2 teaches
the reasoning behind all of it; this page collects the results.

> **Manual.** FM Synth, pp. 58-59; modulation, pp. 18-21.

> **Starting point.** Nobody has tried any level, feedback, envelope or
> filter value on this page on a unit. Ratios, partials and tick sums follow
> from arithmetic and hold anywhere; everything else needs your ear. Where a
> weekly module gives a different value for the same instrument, the module
> wins.

## The operator

Four operators, A to D, each with a shape, RATIO, LEV (level), FB
(feedback) and two MOD slots (p. 58).

- **RATIO** sets the operator's frequency as a multiple of the played note:
  2.00 an octave up, 0.50 an octave down. It takes two decimal places.
- **LEV** on a carrier sets loudness; on a modulator it sets the modulation
  index, so brightness.
- **FB** feeds the operator back into itself, adding harmonics of its own
  frequency on the way towards noise.
- **MOD slots** each assign one of four macros, MOD1 to MOD4, to the
  operator's LEV, RAT, PIT or FBK. On LEV the macro sweeps the level from
  `00` up to the value set, so the set LEV becomes the peak.

The instrument's own modulation slots then drive the macros. The manual does
not name those destinations, and nobody has checked the chain on a unit:
week 2's bench test 5 settles it. The recipes below name destinations by
function in brackets, as week 2 does: use whatever names the unit shows.

## Algorithms

Routings as the manual writes them, read "modulator > modulated", with +
for operators in parallel (p. 59). A carrier is an operator that feeds the
output rather than another operator; the carriers column comes from reading
each routing, not from the manual's wording.

| No. | Routing | Carriers | Count | Suits |
|-----|---------|----------|-------|-------|
| `00` | A>B>C>D | D | 1 | one voice, deep stacked modulation: growls, noise |
| `01` | [A+B]>C>D | D | 1 | two modulators summed, then a third stage |
| `02` | [A>B+C]>D | D | 1 | a modulated and a plain modulator onto one carrier |
| `03` | [A>B+A>C]>D | D | 1 | one source feeding two modulators onto one carrier |
| `04` | [A+B+C]>D | D | 1 | three modulators side by side onto one carrier |
| `05` | [A>B>C]+D | C, D | 2 | a stacked voice plus a free sine |
| `06` | [A>B>C]+[A>B>D] | C, D | 2 | one stack branching onto two carriers |
| `07` | [A>B]+[C>D] | B, D | 2 | two independent pairs: tine plus body, click plus body |
| `08` | [A>B]+[A>C]+[A>D] | B, C, D | 3 | one modulator over three carriers: metallic clusters |
| `09` | [A>B]+[A>C]+D | B, C, D | 3 | a shared modulator on two carriers, one free sine |
| `0A` | [A>B]+C+D | B, C, D | 3 | one pair plus two placed partials: mallets |
| `0B` | A+B+C+D | A, B, C, D | 4 | additive: four sines, no modulation |

Choose by counting carriers: each carrier contributes its own partial, or
its own family of sidebands. One carrier gives one complex voice; several
carriers let you place a sound's strong partials one by one.

In the drawings, arrows run from a modulator to the operator it modulates,
and heavy boxes mark carriers. They follow our reading of the routing text
and have not been checked against the unit.

<div class="fmalgo-grid">
{% for id in ["00","01","02","03","04","05","06","07","08","09","0A","0B"] -%}
{% fmalgo id %}
{% endfor %}
</div>

## Sidebands

One carrier at ratio *c* and one modulator at ratio *m*, both sine, on a
note of frequency *f*:

```
partials at  f × |c ± k·m|     for k = 0, 1, 2, 3, ...
```

Order *k* gives an upper sideband at *c + k·m* and a lower one at
*c − k·m*; a negative lower sideband reflects about zero and sounds at its
absolute value. Where a reflected partial lands on another, the two may add
or partly cancel, so positions hold exactly and strengths at shared
positions need the ear.

**Harmonic or not.** Reduce *c : m* to whole numbers in lowest terms,
*N1 : N2*. Every partial then falls on a harmonic of *f × c / N1*.

- *N1* = 1: every partial lies on the harmonic series of the played note.
  Pitched.
- *N1* = 2 to 5: the partials lie on harmonics of a fundamental below the
  note, which may or may not sound. Bells and mallets.
- *N1* large: the implied fundamental falls below hearing, and no harmonic
  reading remains. Gongs, metal, noise.

Worked: 1.00 : 3.50 = 100 : 350 = 2 : 7, so the partials fall on harmonics
of *f* × 1 / 2, an octave below the note.

**The index.** The modulator's level sets the modulation index *I*. The
strength of the order-*k* sideband pair follows the Bessel function
*J<sub>k</sub>(I)*; the carrier takes *J<sub>0</sub>(I)*. Values computed
from the series for *J*:

| I | carrier | k = 1 | k = 2 | k = 3 | k = 4 |
|---|---------|-------|-------|-------|-------|
| 0.5 | 0.94 | 0.24 | 0.03 | 0.00 | 0.00 |
| 1 | 0.77 | 0.44 | 0.11 | 0.02 | 0.00 |
| 2 | 0.22 | 0.58 | 0.35 | 0.13 | 0.03 |
| 3 | −0.26 | 0.34 | 0.49 | 0.31 | 0.13 |
| 4 | −0.40 | −0.07 | 0.36 | 0.43 | 0.28 |

A minus sign means inverted phase. Roughly *I* + 1 orders carry useful
energy. The carrier vanishes near *I* = 2.40 and again near 5.52, the first
two zeros of *J<sub>0</sub>*: a landmark for calibrating LEV by ear, since
the manual gives no formula from LEV to index.

**Feedback** on a modulator makes it act as several modulators at once, at
*m*, 2*m*, 3*m* and so on, so the spectrum thickens; on a carrier it adds
harmonics of that carrier only. A shape other than SIN does the same, in a
fixed proportion.

## Ratio table

One sine carrier and one sine modulator, sideband orders *k* = 0 to 3, with
lower sidebands reflected and duplicates removed. Partials are multiples of
the played note's frequency *f*; a partial at 0 adds nothing audible and
is left out. The verdict column applies the *N1* rule above.

| Carrier | Modulator | m : c | c : m reduced | Partials, × f | Harmonics of | Verdict |
|---------|-----------|-------|---------------|---------------|--------------|---------|
| 1.00 | 1.00 | 1 | 1 : 1 | 1, 2, 3, 4 | f | harmonic: every harmonic |
| 1.00 | 2.00 | 2 | 1 : 2 | 1, 3, 5, 7 | f | harmonic: odd harmonics only, the hollow spectrum of week 2 |
| 1.00 | 3.00 | 3 | 1 : 3 | 1, 2, 4, 5, 7, 8, 10 | f | harmonic: every third missing |
| 1.00 | 4.00 | 4 | 1 : 4 | 1, 3, 5, 7, 9, 11, 13 | f | harmonic: odd only, spread wider than 1 : 2 at the same index |
| 1.00 | 5.00 | 5 | 1 : 5 | 1, 4, 6, 9, 11, 14, 16 | f | harmonic: sparse |
| 1.00 | 7.00 | 7 | 1 : 7 | 1, 6, 8, 13, 15, 20, 22 | f | harmonic: wide gaps above the fundamental |
| 1.00 | 14.00 | 14 | 1 : 14 | 1, 13, 15, 27, 29, 41, 43 | f | harmonic: a high cluster over the fundamental (the tine piano below) |
| 2.00 | 1.00 | 0.5 | 2 : 1 | 1, 2, 3, 4, 5 | f | harmonic: every harmonic, weight centred on the 2nd |
| 3.00 | 1.00 | 0.33 | 3 : 1 | 1, 2, 3, 4, 5, 6 | f | harmonic: weight on 2-3-4, weak fundamental (tubular bell, week 2) |
| 1.00 | 0.50 | 0.5 | 2 : 1 | 0.5, 1, 1.5, 2, 2.5 | f / 2 | harmonic an octave down: sounds at half the note |
| 1.00 | 1.50 | 1.5 | 2 : 3 | 0.5, 1, 2, 2.5, 3.5, 4, 5.5 | f / 2 | harmonic an octave down, every third harmonic missing |
| 1.00 | 2.50 | 2.5 | 2 : 5 | 1, 1.5, 3.5, 4, 6, 6.5, 8.5 | f / 2 | inharmonic to the note: f / 2 itself absent |
| 1.00 | 3.50 | 3.5 | 2 : 7 | 1, 2.5, 4.5, 6, 8, 9.5, 11.5 | f / 2 | inharmonic to the note: bell (week 2) |
| 1.00 | 1.40 | 1.4 | 5 : 7 | 0.4, 1, 1.8, 2.4, 3.2, 3.8, 5.2 | f / 5 | inharmonic: bell with a hum at 0.4 (week 2) |
| 1.00 | 1.41 | 1.41 | 100 : 141 | 0.41, 1, 1.82, 2.41, 3.23, 3.82, 5.23 | f / 100 | inharmonic: gong (week 2) |
| 1.00 | 7.93 | 7.93 | 100 : 793 | 1, 6.93, 8.93, 14.86, 16.86, 22.79, 24.79 | f / 100 | inharmonic: glockenspiel's 4th mode at 8.93 (week 2) |
| 1.00 | 1.01 | 1.01 | 100 : 101 | 1, 1.02, 2.01, 2.03, 3.02, 4.03 | f / 100 | near-harmonic: pairs of partials 0.02 × f apart beat at 8.8 Hz on a 440 Hz note |

Working for two rows, to check the method:

- 1.00 : 1.50. *k* = 1 gives 2.5 and |1 − 1.5| = 0.5; *k* = 2 gives 4 and
  |1 − 3| = 2; *k* = 3 gives 5.5 and |1 − 4.5| = 3.5. As halves of *f*:
  1, 2, 4, 5, 7, 8, 11. Multiples of 3 never appear.
- 1.00 : 1.01. *k* = 1 gives 2.01 and 0.01, the second at 4.4 Hz on a
  440 Hz note, below hearing; *k* = 2 gives 3.02 and 1.02; *k* = 3 gives
  4.03 and 2.03. The 1.02 sits 0.02 × 440 = 8.8 Hz above the carrier, and
  2.03 sits 8.8 Hz above 2.01.

Two placed-partial targets from week 2, for algorithms `0A` and `0B`:

| Target | Partials, × strike pitch | Source of the figures |
|--------|--------------------------|-----------------------|
| Glockenspiel bar | 1, 2.76, 5.40, 8.93 | a uniform free bar: 3.011², 5², 7², 9² over 3.011² |
| Vibraphone bar | 1, 4, 10 | bars undercut to tune the second mode to the double octave |
| Tubular bell | 2.00, 2.99, 4.17, with 1.21 and 0.62 weaker | modes near 9², 11², 13² over 40.5 |
| Church bell | 0.5, 1, 1.2, 1.5, 2 | hum, prime, tierce, quint, nominal |
| Drum head | 1, 1.59, 2.14, 2.30, 2.65 | an ideal circular membrane: Bessel zeros 2.405, 3.832, 5.136, 5.520, 6.380 over 2.405 |

## Envelope times

AHD and DRUM times count ticks, so they follow tempo (p. 18). One tick lasts
2.5 / BPM seconds at the default 24 ticks per quarter note. The values used
in the recipes:

| Value | Ticks | Note value | At 96 BPM (ms) | At 120 BPM (ms) |
|-------|-------|------------|----------------|-----------------|
| `02` | 2 | a twelfth of a beat | 52 | 42 |
| `03` | 3 | a 32nd | 78 | 63 |
| `04` | 4 | a 16th triplet | 104 | 83 |
| `06` | 6 | a 16th | 156 | 125 |
| `08` | 8 | an 8th triplet | 208 | 167 |
| `0C` | 12 | an 8th | 313 | 250 |
| `18` | 24 | a quarter | 625 | 500 |
| `30` | 48 | a half | 1,250 | 1,000 |
| `60` | 96 | a bar | 2,500 | 2,000 |
| `90` | 144 | a bar and a half | 3,750 | 3,000 |
| `A0` | 160 | a bar and two-thirds | 4,167 | 3,333 |
| `C0` | 192 | two bars | 5,000 | 4,000 |

Working for one row: `0C` = 12 ticks; 12 × 2.5 / 120 = 0.25 s.

Because the times follow tempo, a drum tuned at 120 BPM rings 25% longer at
96 BPM (120 / 96 = 1.25). Retune decays when you change tempo by much.

> **Bench test.** Week 2 asks whether a decay of `60` lasts 96 ticks. Until
> you have the answer, read every millisecond figure on this page as "if
> the value counts ticks".

## Recipes

Each recipe lists only what differs from a fresh FM Synth, in the patch
format of the weekly modules. `OPMOD` shows each operator's MOD slot
assignments: `1>LEV` means macro MOD1 scales that operator's level. Slot
lines give the instrument's modulation slots. Instrument numbers stand as
suggestions; the bells keep week 2's numbers.

All ten start as clones of one routing patch, as in week 2's lab: build the
envelopes once, check them, then clone with [SHIFT]+[OPTION] then [EDIT] on
the instrument column (p. 15).

### Bell

Week 2's tubular bell, unchanged. Pair A>B at 1 : 3 gives partials 2, 3 and
4 with a weak fundamental; pair C>D at 3.5 : 1 adds the inharmonic 2.5 and
4.5 at the strike, then fades to a sine.

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

For a church bell, place the five partials instead: algorithm `0B` with
ratios 0.50, 1.00, 1.20 and 2.00, each with its own decay, longest at the
bottom (week 2, Going further).

### Glockenspiel

Week 2's lab: algorithm `0A` with carriers on the free bar's first three
modes and a modulator chosen so its first upper sideband lands on the
fourth. A at 7.93 against B at 1.00: 1 + 7.93 = 8.93, and the lower
sideband at |1 − 7.93| = 6.93.

```patch
# INST 12  FMSYNTH  "GLOCK"
ALGO   0A            ; [A>B]+C+D: one pair, two placed partials
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  7.93   1.00   2.76   5.40   ; bar modes 1, 2.76, 5.40; A's sideband at 8.93
LEV    20     70     30     20     ; starting points; upper modes much quieter
FB     00     00     00     00
OPMOD  1>LEV  .      2>LEV  2>LEV  ; macro 1: mallet index; macro 2: upper modes
SLOT1  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC 90   ; a bar and a half
SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 04   ; mallet: a 16th triplet
SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 0C   ; upper modes: an 8th
```

Everything but B decays fast, as week 2 asks. In the instrument's real
register the upper modes climb past 10 kHz: at a 2,000 Hz note, D sits at
2,000 × 5.40 = 10,800 Hz and A's sideband at 2,000 × 8.93 = 17,860 Hz.
Drop the operators you cannot hear.

### Vibraphone

Week 2's vibraphone, unchanged. Carriers on the bar's partials 1, 4 and 10;
A at 3.00 modulates B, so its first sidebands fall at 1 + 3 = 4 (reinforcing
the tuned partial) and |1 − 3| = 2.

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

The LFO goes to level, not pitch, because a vibraphone's motor varies
loudness. TRIG FREE lets it run across notes.

### Tine piano

Two pairs on algorithm `07`: a body and a tine. The body pair runs 1 : 1 at
a low index, which adds the 2nd and 3rd harmonics to a near-sine. The tine
pair runs 1 : 14: its first sidebands at 14 − 1 = 13 and 14 + 1 = 15, then
27 and 29, all harmonic because *N1* = 1, so the ping stays in tune. A fast
decay on the tine's index makes it a strike, not a tone.

```patch
# INST 20  FMSYNTH  "TINE"
ALGO   07            ; [A>B]+[C>D]: body pair, tine pair
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  1.00   1.00   14.00  1.00   ; body 1, 2, 3; tine 13, 15, then 27, 29
LEV    20     70     40     50     ; starting points; A low for a soft body
FB     00     00     00     00
OPMOD  2>LEV  .      1>LEV  .      ; macro 1: tine index; macro 2: body index
SLOT1  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 06   ; tine: a 16th
SLOT2  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC C0   ; two bars
SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 60   ; body darkens over a bar
SLOT4  TRACKING  SRC VELOCITY  DEST: MOD AMT (slot 1)  LVAL 10  HVAL 7F   ; harder = more tine
```

The tine envelope sits in slot 1 because a slot can modulate only its
neighbour, and slot 4's neighbour is slot 1 (p. 18). So velocity, through
slot 4, scales the depth of the tine envelope: a soft note gets a dull
strike, a hard one a bright ping. For a slow chorus, set B to 1.01: against
D at 1.00 the two fundamentals beat at 1% of the note, 4.4 Hz on a 440 Hz
note.

> **Bench test.** Check that TRACKING can take VELOCITY as its source and
> MOD AMT of slot 1 as its destination, and that LVAL `10` leaves a soft
> note some tine. If it cannot, put the TRACKING slot on the amp level and
> accept a fixed tine.

### Reed piano

Reed plus bark, again on algorithm `07`. The reed pair runs 1 : 2, which
gives odd harmonics only, 1, 3, 5, 7: a hollow, nasal core at a steady,
moderate index. The bark pair runs 1 : 1 with feedback on its modulator,
which fills in every harmonic and more; velocity decides how much of it a
note gets.

```patch
# INST 21  FMSYNTH  "REED"
ALGO   07            ; [A>B]+[C>D]: reed pair, bark pair
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  2.00   1.00   1.00   1.00   ; reed 1, 3, 5, 7; bark every harmonic
LEV    38     70     30     40     ; starting points
FB     00     00     40     00     ; feedback on C thickens the bark
OPMOD  2>LEV  .      1>LEV  .      ; macro 1: bark index; macro 2: reed index
SLOT1  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 18   ; bark: a beat
SLOT2  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC A0   ; shorter than the tine piano
SLOT3  AHD  DEST: (macro MOD2)  ATK 00  HOLD 00  DEC 60   ; reed mellows over a bar
SLOT4  TRACKING  SRC VELOCITY  DEST: MOD AMT (slot 1)  LVAL 00  HVAL 7F   ; soft = no bark
```

With LVAL at `00` a soft note has no bark at all, and the change from soft
to hard becomes a change of timbre, not only of level. For more grit on hard
notes, raise the amp's AMP with LIM set to SIN (p. 51) and adjust by ear.

### Sub bass

One pair at 1 : 1 and a low, fixed index. A pure sine disappears on small
speakers; the 2nd and 3rd harmonics that a little modulation adds (1 + 1 = 2,
then 1 + 2 = 3) let the line read without changing its weight. No index
envelope: the timbre stays put.

```patch
# INST 22  FMSYNTH  "SUB"
ALGO   0A            ; [A>B]+C+D: one pair; C and D silent
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  1.00   1.00   1.00   1.00   ; partials 1, 2, 3
LEV    18     70     00     00     ; starting points; A low: a hint of harmonics
FB     00     00     00     00
SLOT1  AHD  DEST: (amp level)   ATK 01  HOLD 18  DEC 30   ; one tick of attack avoids a click
FILTER LOWPASS  CUTOFF 50  RES 00  ; trims anything the index adds above the 3rd
```

Slides belong in the phrase: `PSL` on a step glides into its note over the
given number of ticks (p. 71). Week 3 builds bass lines on this.

### Plucked bass

The same pair, now with feedback on the modulator and a fast index decay:
bright at the pluck, then a rounder tone. Feedback gives A harmonics at
2, 3, 4 and so on, and each acts as a modulator at a whole-number ratio
against B, so every partial stays on the harmonic series. D adds a steady
sine at the fundamental, so the note keeps its weight after the pluck has
gone.

```patch
# INST 23  FMSYNTH  "PLUCK"
ALGO   0A            ; [A>B]+C+D: pluck pair plus a free sine
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  1.00   1.00   1.00   1.00   ; all harmonic
LEV    50     60     00     40     ; starting points; C silent
FB     30     00     00     00     ; feedback on A: saw-like bite at the pluck
OPMOD  1>LEV  .      .      .      ; macro 1: pluck index
SLOT1  AHD  DEST: (amp level)   ATK 00  HOLD 00  DEC 30   ; half a bar
SLOT2  AHD  DEST: (macro MOD1)  ATK 00  HOLD 00  DEC 08   ; pluck: an 8th triplet
FILTER LOWPASS  CUTOFF 90  RES 20  ; starting point
```

### Kick

A drum as pitch sweep plus transient plus envelope. Pair C>D supplies the
body: C at LEV `00` leaves D a pure sine. Pair A>B supplies a click: A at
13.00 against B at 1.00 throws the first sidebands to 12 and 14 times the
note, well above the body: on a 60 Hz kick, 12 × 60 = 720 Hz and
14 × 60 = 840 Hz, and twice that while the table holds the pitch an octave
up. Both A and B fade within a few ticks. The instrument's own table
supplies the pitch sweep; the block below numbers it 30 to match the
instrument, which the notes do not confirm.

```patch
# INST 30  FMSYNTH  "KICK"
ALGO   07            ; [A>B]+[C>D]: click pair, body pair
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  13.00  1.00   1.00   1.00   ; click partials 1, 12, 14, then 25, 27
LEV    50     40     00     70     ; starting points; C silent, so D is a pure sine
FB     00     00     00     00
OPMOD  1>LEV  1>LEV  .      .      ; macro 1 fades the whole click pair
SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 06  DEC 18   ; body holds a 16th, decays over a beat
SLOT2  AHD   DEST: (macro MOD1) ATK 00  HOLD 00  DEC 02   ; click: two ticks
TABLE TIC 01         ; one tick per table row
```

```table
# TABLE 30  (TIC 01, kick pitch drop)
0  0C .   .        .        .      ; an octave above the played note
1  07 .   .        .        .      ; a fifth above
2  03 .   .        .        .      ; a minor third above
3  00 .   HOP 03   .        .      ; the played note; hold on this row
```

The sweep falls an octave in three rows. At `TIC 01`, if a table tick lasts
as long as a sequencer tick, it reaches the note after 3 × 2.5 / 120 =
0.0625 s, about 63 ms at 120 BPM. Pick the played note by ear, low in the
range.

> **Bench test.** Three things to settle on the unit. Whether table ticks
> follow tempo: the manual says tables do not follow tempo and groove
> (p. 24). Whether `HOP 03` on row 3, with a first digit of 0, holds the
> table on that row. And whether setting TRANSP. off, which the manual
> suggests for percussion (p. 16), also stops the table's transpose column:
> if it does, the sweep disappears.

### Snare

A drum head plus wires. The ideal circular membrane has modes at 1, 1.59,
2.14, 2.30 and 2.65 times its fundamental. Pair A>B at 1.30 : 1 places two
of them by sideband: 1 + 1.30 = 2.30, and |1 − 2 × 1.30| = 1.60. D places
2.14 directly. C, on the NOISE shape, plays the wires. The pair reduces to
10 : 13, so it sounds inharmonic, as a drum should.

```patch
# INST 31  FMSYNTH  "SNARE"
ALGO   0A            ; [A>B]+C+D: head pair, wires, one placed mode
       A      B      C      D
SHAPE  SIN    SIN    NOISE  SIN
RATIO  1.30   1.00   1.00   2.14   ; B's sidebands at 2.30, 0.30, 3.60, 1.60
LEV    30     60     50     30     ; starting points
FB     00     00     00     00
OPMOD  3>LEV  2>LEV  1>LEV  2>LEV  ; 1: wires; 2: head; 3: head pair's index
SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 02  DEC 0C   ; about an 8th in all
SLOT2  AHD   DEST: (macro MOD1) ATK 00  HOLD 00  DEC 0C   ; wires ring longest
SLOT3  AHD   DEST: (macro MOD2) ATK 00  HOLD 00  DEC 06   ; head: a 16th
SLOT4  AHD   DEST: (macro MOD3) ATK 00  HOLD 00  DEC 03   ; strike brightness: a 32nd
FILTER HIGHPASS  CUTOFF 30  RES 00 ; removes the 0.30 sideband if it booms
```

The lower sideband at |1 − 1.30| = 0.30 falls below the head's fundamental.
The high-pass filter keeps it from turning into a thud; raise CUTOFF until
it goes.

> **Bench test.** What does RATIO do on a NOISE operator: nothing, or does
> it colour the noise? Week 3's lab lists the operator shapes; add this
> answer to it.

### Hat

Metal from one modulator over three carriers, algorithm `08`. The carrier
ratios 1.00, 1.47 and 2.13 against a modulator at 3.17 reduce to 100 : 317,
147 : 317 and 213 : 317: large numbers, so nothing fuses into a pitch. First
sidebands: 4.17 and 2.17 from B; 4.64 and 1.70 from C; 5.30 and 1.04 from D.
Feedback on A then multiplies all of them. A high-pass filter removes the
low end.

```patch
# INST 32  FMSYNTH  "HAT C"
ALGO   08            ; [A>B]+[A>C]+[A>D]: one modulator, three carriers
       A      B      C      D
SHAPE  SIN    SIN    SIN    SIN
RATIO  3.17   1.00   1.47   2.13   ; all reduce to large ratios: inharmonic
LEV    60     50     50     50     ; starting points
FB     50     00     00     00     ; feedback on A: from cluster towards noise
SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 00  DEC 04   ; closed: a 16th triplet
FILTER HIGHPASS  CUTOFF A0  RES 00 ; starting point
```

Play it high. For an open hat, clone it and raise DEC to `20` (32 ticks,
667 ms at 120 BPM). Put both on one track, so that a closed hat cuts an
open one, because a track plays one note at a time (p. 5).

D's lower sideband at 1.04 sits 0.04 × *f* above B. On a note of 1,000 Hz
that gives a 40 Hz beat, heard as roughness, which suits a hat.

For comparison, the Macrosynth has KICK, SNARE and CYMBAL models with two
controls each (pp. 76-80). Week 4 builds from both engines.
