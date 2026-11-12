---
title: "Drum synthesis"
week: 4
strand: sound
outcomes: [3]
needs: [1, 2]
duration_target: "48 bars"
repeat_budget: 3
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "20, 24-25, 50-53, 76-80"
---

## Overview

Weeks 2 and 3 built pitched sounds whose spectra you could calculate. A drum asks for less spectrum and more time: most of a kick happens in its first 60 ms. You build a kit from three engines, using each instrument's table as a sequencer inside one hit. The first checkpoint piece then gives the drums different jobs, since a drum part that does one thing throughout is the loop in its purest form.

By the end of the week you can:

- build a drum from a pitch sweep, a noise component and a DRUM envelope;
- say what FM Synth, Macrosynth and Wavsynth each offer for each drum;
- write tables that sweep pitch, gate noise and vary each hit, at a chosen tick mode;
- lay out a kit in the instrument pool, with chokes and transposition settled;
- plan and realise 48 bars in which the drums change role at least twice.

## Before you start

You need weeks 1 to 3 and your bench test 5 and 6 results. As there, a destination in brackets, such as `(amp level)`, names a function, and a command the notes do not name appears in angle brackets, such as `<SHAPE>`: highlight the parameter and move to a table to find it (pp. 17, 75).

Open the project with your week-2 and week-3 instruments, for the checkpoint; keep slots `30` to `3F` free. Set 120 BPM, which every figure below assumes: a tick lasts 2.5 / 120 = 20.8 ms, a step 125 ms.

> **Manual.** p. 16 (TRANSP.), pp. 18-21 (modulation), p. 22 (instrument pool), pp. 24-25 (tables), pp. 50-53 and 76-80 (Wavsynth, Macrosynth), pp. 69-72 (commands).

> **Starting point.** Nobody has tried any level, envelope, filter, model or table value in this module on a unit. Tick sums, frequencies and cycle lengths follow from arithmetic; your ear decides the rest.

## Concepts

### A drum in three parts

Strike a drumhead and its pitch falls as the tension the strike added eases; it makes noise (wires, stick, shell); and it dies fast, usually within a beat. So a drum has three parts:

- a **pitch sweep**, from the N column of the instrument's table;
- a **noise component**, from a noise shape or model;
- an **amplitude envelope**, usually DRUM.

The proportions make the drum: a kick is mostly sweep and envelope, a hat mostly noise or dense metal, a snare all three. A head's modes are not harmonic: an ideal membrane rings at 1, 1.59, 2.14, 2.30 and 2.65 times its lowest mode (ratios of Bessel-function zeros, listed in the FM crib), so a tom has pitch without a string's fused tone.

**The DRUM envelope** is a modulation type (pp. 18-21). PEAK shapes the transient, which the notes summarise as a duck and a peak time; BODY holds; DEC decays. How PEAK's value splits between the two, check on your unit. Where AHD climbs through an attack, DRUM accents the first moment and holds a body under it: a click over a boom.

AHD times count ticks (p. 18); whether DRUM's do, the notes do not say, so check this on your unit. If they do, BODY `06` and DEC `18` last 6 + 24 = 30 ticks, 30 × 2.5 / 120 = 0.625 s at 120 BPM, and 25% longer at 96 BPM (120 / 96 = 1.25): a tempo change retunes every decay in the kit.

> **Try it.** On a Wavsynth SINE, put DRUM on the amp level with BODY `06`, DEC `18`. Play every beat at 120 BPM, then 60. If hits keep their length relative to the beat, DRUM counts ticks. Then step through PEAK values.

### Three engines, six drums

FM Synth gives four operators (pp. 58-59). Macrosynth gives a model per drum with two controls, TIMBRE and COLOR, plus DEGRADE and REDUX (pp. 52-53, 76-80). Wavsynth gives one oscillator, noise shapes, and filter modes inside the waveform (pp. 50-51). All three share the filter, amp and limiter (p. 51).

| Drum | FM Synth | Macrosynth | Wavsynth |
|------|----------|------------|----------|
| Kick | swept sine, high pair for click | KICK: TIMBRE decay, COLOR tone | swept SINE |
| Snare | head modes, NOISE operator for wires | SNARE: TIMBRE tone balance, COLOR noise | tone, then noise, switched by the table |
| Hats | one modulator, three carriers (`08`), feedback | CYMBAL: TIMBRE band-pass cutoff, COLOR square-to-noise | NOISE, high-pass |
| Tom | placed head modes on `0A` | KICK, tuned up | swept SINE or TRI |
| Clap | NOISE operator, gated by the table | noise model, gated | NOISE, band-pass, gated |
| Metal | inharmonic ratios, as week 2's gong | STRUCK DRUM: TIMBRE damping, COLOR brightness | wavetables, by ear |

Use Macrosynth when two controls will do, FM when a drum must answer velocity or place a partial, and Wavsynth when the table should do the work. The model summaries come from the notes; read each model's page for more.

> **Try it.** Play a Macrosynth KICK at `C-2` on every beat. Sweep TIMBRE, then COLOR: which changes length, which tone?

### Tables as micro-sequencers

An instrument's table runs beside every note it plays, at its own rate, and loops from bottom to top while the note sounds (p. 24). Each row can transpose (N), scale the volume (V) and run three commands. TABLE TIC, or the `TIC` command, sets the rate (pp. 24, 72):

| TIC | A row lasts, at 120 BPM |
|-----|-------------------------|
| `00` | one trigger: round robin |
| `01` | 1 tick, 20.8 ms |
| `02` | 2 ticks, 41.7 ms |
| `06` | 6 ticks, 125 ms: a row per step |
| `FC`, `FD`, `FE` | octave, velocity or note picks the row |
| `FF` | 5 ms at any tempo (200 Hz) |

The manual says tables, unlike phrases, do not follow tempo and groove (p. 24), so what a tick means at TIC `01` to `FB` stays open. This module assumes the sequencer's tick; bench test 9 checks.

A table loops, so a drop needs a `HOP` to hold its last row. In a table `HOP xy` jumps to row y, x times (p. 70); whether x = 0 means "for ever" is bench test 9's item c. A `TIC` on the last row applies to all rows, and each FX column may run at its own rate (pp. 24, 72).

Three jobs:

- **Pitch drop.** N steps down to `00`; each hit must restart it (bench test 9 checks).
- **Noise burst.** V gates the sound at `FF`: worked example 2.
- **Flam.** In a phrase, `RET 20` retriggers once after 2 ticks, 41.7 ms (p. 70). In a table a retrigger might also restart the table and flam every 2 ticks, so keep flams in the phrase until bench test 9 has spoken.

Where a later row changes a column, give every row its own value there: the notes say neither whether an empty V cell keeps the last value nor what scale V multiplies by (p. 24).

> **Try it.** On an FM sine, build the crib's drop (`0C`, `07`, `03`, then `00` with `HOP 03`) at TABLE TIC `01`. Play at 120 and 60 BPM, then at TIC `FF`. Which changed with the tempo?

### TIC 00: a different hit every time

At TABLE TIC `00` the table moves one row per trigger (p. 24). So a short table gives a cycle of small differences, a round robin, which cures the "machine gun" of identical hits. A 3-row cycle on *h* hits per bar repeats after lcm(3, *h*) hits: at 16 hits that is 48, three bars; at 5, 15, three bars; at 6, just 6, so the cycle locks to the bar as a fixed accent pattern. A cycle length coprime to the hit count drifts; one that divides it locks.

Bench test 9 settles three open points: whether a `HOP` row uses up a trigger (rows 0-2 plus `HOP 00` on row 3 give 3 or 4), which row the first hit after [PLAY] gets, and whether each instrument counts separately. The examples assume 3, row 0, and yes.

> **Try it.** Give a hat's table TIC `00`: N `00` V `7F`; N `01` V `60`; N `00` V `70`; `HOP 00` alone on row 3. Play 16ths and count the cycle; then play six hits a bar and hear it lock.

### One track, one hit: chokes and TRANSP.

A track plays one note at a time (p. 5). For drums that gives a **choke group**: put both hats on one track and each closed hit cuts the open one, as a hi-hat pedal does. A crash that nothing should cut needs its own track. Two phrase rules follow:

- Fill the I column on every hit. Left empty, the note changes without retriggering (p. 14), bending a dying hit.
- `KIL xx` stops a note after xx ticks (p. 70). An open hat with `KIL 0C` lasts 12 ticks, 250 ms: a choke without a second note.

**TRANSP.** off switches off all transposition for an instrument, and the manual means it for percussion (p. 16). The drum ignores chain TSP and project TRANSPOSE, so a chain can lift the harmony without dragging the kick along. If it also stops the table's N column, though, every pitch drop disappears. Bench test 9 finds out: if the drops survive, set TRANSP. off on every drum; if not, leave it on and keep drum chains at TSP `00`. Scales also quantise note entry (p. 28), so under a non-chromatic scale check that you can still enter a drum's tuning note.

> **Try it.** Alternate an open and a closed hat on 8ths on one track. Then add `KIL 06` (125 ms) to the open hits and choose between the versions.

### A kit in the pool

The instrument pool lists every slot and lets you reorder instruments and edit their mixer settings (p. 22). Lay a kit out so the I column reads at a glance:

| Slots | Kick | Snare | Others |
|-------|------|-------|--------|
| `30`-`33` | `30` KICK | `31` SNARE | `32` HAT C, `33` HAT O |
| `34`-`37` | `34` KICK MS | `35` SNARE MS | `36` TOM, `37` CLAP (Wavsynth) |
| `38`-`3A` | `38` KICK WS | `39` SNARE WS | `3A` METAL (Macrosynth) |
| `3F` | | | PROBE, bench test 9 only |

MS marks Macrosynth, WS Wavsynth; the rest are FM Synth. Adding 4 to a kick or snare number swaps in its alternative: one hex digit per hit. `30` to `32` keep the FM crib's numbers.

Each instrument has its own table (p. 24). Check on your unit whether a clone ([SHIFT]+[OPTION] then [EDIT] on the instrument column, p. 15) copies it, and whether reordering updates phrases. Save each drum with LOAD/SAVE (p. 16) for week 5.

> **Try it.** In the pool, change one drum's mixer volume, then confirm it in Instrument view.

## Worked examples

### One drop, two clocks

The crib's FM kick falls an octave in three rows at TIC `01`. At `C-2`, 65.4 Hz (scientific pitch, assuming as in week 3 that the unit follows it):

```table
# KICK's table  (TIC 01)
0  0C .   .        .  .      ; 130.8 Hz from 0 ms
1  07 .   .        .  .      ; 98.0 Hz from 20.8 ms
2  03 .   .        .  .      ; 77.8 Hz from 41.7 ms
3  00 .   HOP 03   .  .      ; 65.4 Hz from 62.5 ms, held
```

Row *n* starts at *n* × 2.5 / 120 s; 65.4 × 2^(7/12) = 65.4 × 1.498 = 98.0 Hz. A row holds only 1.6 to 2.7 cycles (0.0208 s × 77.8 Hz; × 130.8 Hz), so the steps may fuse or chirp.

KICK WS uses TIC `FF`: finer steps fixed in milliseconds, falling fastest at first, as a head's pitch does. The offset is 24 × e^(−*t* / 15 ms) semitones, rounded, a row every 5 ms:

```table
# KICK WS's table  (TIC FF: two octaves in 60 ms)
0  18 .  .        .  .      ; 0 ms: 24
1  11 .  .        .  .      ; 5 ms: 24 x e^(-1/3) = 17.2
2  0C .  .        .  .      ; 10 ms: 12.3
3  09 .  .        .  .      ; 8.8
4  06 .  .        .  .      ; 6.3
5  05 .  .        .  .      ; 4.5
6  03 .  .        .  .      ; 3.2
7  02 .  .        .  .      ; 2.3
8  02 .  .        .  .      ; 1.7
9  01 .  .        .  .      ; 1.2
A  01 .  .        .  .      ; 0.9
B  01 .  .        .  .      ; 0.6
C  00 .  HOP 0C   .  .      ; 60 ms: 0.4, the note, held
```

Hex check: `18` = 24, `11` = 17, `0C` = 12. It starts at 65.4 × 4 = 261.6 Hz and lands at row `C` (12): 12 × 5 = 60 ms, within 2.5 ms of KICK at 120 BPM but at no other tempo. Choose TIC `01` for a drop that scales with the song, `FF` for one that keeps its character at any tempo.

### A clap from four bursts

A hand clap is several impacts milliseconds apart, then a noisy tail.

```patch
# INST 37  WAVSYNTH  "CLAP"
SHAPE  NOISE                        ; all noise: the table gates it
FILTER BANDPASS  CUTOFF 90  RES 30  ; a clap's energy sits mid-range
SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 02  DEC 0C
                                    ; body spans the bursts; 12-tick tail
TABLE TIC  FF                       ; 5 ms a row at any tempo
TRANSP. OFF                         ; once bench test 9 item m allows it
```

```table
# CLAP's table  (TIC FF)
0  .  7F  .        .  .      ; burst, 0 ms
1  .  00  .        .  .
2  .  7F  .        .  .      ; burst, 10 ms
3  .  00  .        .  .
4  .  00  .        .  .      ; a longer gap, so the bursts fall unevenly
5  .  7F  .        .  .      ; burst, 25 ms
6  .  00  .        .  .
7  .  7F  HOP 07   .  .      ; burst, 35 ms, held as the tail
```

Even 10 ms gaps would repeat at 1 / 0.010 = 100 Hz, a possible buzz; the 15 ms gap breaks it. Every row sets V, assuming `7F` leaves the phrase volume alone and `00` silences (bench test 9 item k).

The body must outlast the last burst: BODY `02` = 2 × 2.5 / 120 = 41.7 ms, past 35 ms. If DRUM counts ticks, it falls below 35 ms once a tick drops under 17.5 ms, above 2.5 / 0.0175 = 143 BPM; there, use BODY `03`.

### A hat line that breathes

Both hats share track 3, so closed chokes open. HAT C's table gives the round robin:

```table
# HAT C's table  (TIC 00: a row per hit)
0  00 7F  .        .  .      ; as patched
1  01 60  .        .  .      ; a semitone up, quieter
2  00 70  .        .  .      ; in tune, a little quieter
3  .  .   HOP 00   .  .      ; a cycle of 3, if the HOP row takes no hit
```

```phrase
# PHRASE 30  (track 3, hats)
0  C-6 60 32  .  .  .
2  C-6 40 32  .  .  .
4  C-6 60 32  .  .  .
6  C-6 50 33  .  .  .      ; open
A  C-6 60 32  .  .  .      ; chokes it: 4 steps x 6 = 24 ticks, 500 ms
C  C-6 40 32  .  .  .
E  C-6 50 33  .  .  .      ; open: the next step 0 chokes it after 12 ticks
```

HAT O decays over 32 ticks, so both open hits get cut, at 24 and 12 ticks. Five closed hits a bar on a 3-row cycle repeat after lcm(3, 5) = 15 hits, 3 bars. Digits mark each closed hit's row, `o` the open hat:

```cycles
bar 1  |0 . 1 . 2 . o . . . 0 . 1 . o . |
bar 2  |2 . 0 . 1 . o . . . 2 . 0 . o . |
bar 3  |1 . 2 . 0 . o . . . 1 . 2 . o . |
bar 4  |0 . 1 . 2 . o . . . 0 . 1 . o . |    ; = bar 1
```

Bar 2 starts on row 2 because 5 mod 3 = 2. Three plays of phrase 30, the full budget, now differ in detail, yet still count as repeats.

## Lab

Allow 1 h 45 min. Save each instrument with LOAD/SAVE (p. 16), noting its most important value. The notes do not record the shape and model selectors' labels, so they appear as SHAPE and MODEL.

1. **Bench test 9: tables against phrases** (30 min). The manual says some commands act differently in a table, without a list (notes, open question 9). Test each in both places, at the same moment, on the same note.

   *Set-up.* 120 BPM. Build PROBE in `3F`:

   ```patch
   # INST 3F  WAVSYNTH  "PROBE"
   SHAPE  SINE                       ; a pure tone: every change audible
   SLOT1  ADSR  DEST: (amp level)  attack 00, decay 00, sustain full, release 0C
                                     ; holds until an OFF
   TABLE TIC  06                     ; a row per step,
                                     ; if table ticks match sequencer ticks
   ```

   Its table holds one marker, N `0C` on row 0: an octave jump whenever the table passes row 0. Track 1 plays `C-4 64 3F` on step 0 only; track 2 plays HAT C on steps `0`, `4`, `8`, `C`. If ticks match, 16 rows × 6 = 96 ticks puts the marker on every downbeat.

   *Method.* Per item, run A puts the command in FX1 of phrase step 4, run B in FX1 of table row 4; at TIC `06` both land on tick 24. Listen four bars each, note both, clear.

   - (a) *Clock.* No command; 120, then 60 BPM. If table ticks follow tempo the marker stays on the downbeat; at a fixed rate it falls twice a bar at 60.
   - (b) *Restart.* Add `C-4 64 3F` on step 8. A marker there too means a trigger restarts the table.
   - (c) *HOP.* `HOP 20` in the table: by p. 70, rows 0-4 three times, then on. Markers 4 steps apart mean the HOP row takes no time; 5, one row. Then `HOP 00`: a marker every beat, or no jump?
   - (d) *HOP at TIC 00.* TIC `00`; rows 0-2 N `00`, `04`, `07`; `HOP 00` alone on row 3; a note every step. C, E, G repeating means a cycle of 3; C, E, G, C, C means 4. Note which row the first hit after [PLAY] gets.
   - (e) `KIL 03`. Phrase: the note stops 3 ticks after step 4 (p. 70). Table: the note, the table, or nothing?
   - (f) `OFF 03`. Phrase: the ADSR releases (p. 72). Table?
   - (g) `RET 03`, then `RET 30`. Phrase: retriggers every 3 ticks; then once after 3 (p. 70). Table: a retrigger? A returning marker means the table restarted.
   - (h) `DEL 03`. Phrase: a note on step 4 sounds 62.5 ms late (p. 69). Table: it delays the play head, so the next marker should come 3 ticks late, later each bar if it builds up.
   - (i) `PSL 0C`. Phrase: `G-4 64 3F` on step 4 glides up over 12 ticks, 250 ms (p. 71). Table, with N `07` on row 4: glide or jump?
   - (j) `CHA 80`. Table: one value for everything to its left (p. 69), so N `0C` on row 4 should sound on about half the passes (`80` of `FF`). Phrase: the left digit, 8, should give about half too.
   - (k) *V.* Rows 4-7: V `7F`, `40`, `00`, empty. Does `7F` leave the volume alone, `00` silence it, the empty row keep `00`?
   - (l) `INS 32`. Phrase: triggers HAT C (p. 70). Table: the same? [CL 6.6.2 to 6.6.4 A] fixed INS in a table at TIC `FF`.
   - (m) *TRANSP.* PROBE's TRANSP. off, chain TSP `05`. The note should stay on C (p. 16). Does the marker survive?

   *Product:* a results record (item, phrase, table, firmware, date) for items a to m and this week's Try it checks, and one line on which commands to trust in a table.

2. **The FM kit** (20 min). If item m showed TRANSP. off silencing N, leave TRANSP. on throughout this lab. KICK follows the FM crib, with TRANSP. added:

   ```patch
   # INST 30  FMSYNTH  "KICK"
   ALGO   07            ; [A>B]+[C>D]: click pair, body pair
          A      B      C      D
   SHAPE  SIN    SIN    SIN    SIN
   RATIO  13.00  1.00   1.00   1.00   ; click partials 1, 12, 14, then 25, 27
   LEV    50     40     00     70     ; C silent, so D is a pure sine
   FB     00     00     00     00
   OPMOD  1>LEV  1>LEV  .      .      ; macro 1 fades the whole click pair
   SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 06  DEC 18   ; 30 ticks, 625 ms
   SLOT2  AHD   DEST: (macro MOD1) ATK 00  HOLD 00  DEC 02   ; click: 2 ticks
   TABLE TIC  01                     ; worked example 1's table
   TRANSP. OFF                       ; ignores chain TSP
   ```

   Build SNARE (`31`) and HAT C (`32`) as the crib's Snare and Hat recipes, whose comments give the reasons; add TRANSP. off to both, and worked example 3's round robin (TIC `00`) to HAT C. HAT O (`33`): clone HAT C, DEC `20`, 32 ticks, 667 ms. Tune SNARE from `F#3` (185.0 Hz). At `C-6` the hat's partial at 1.04 beats against B's at 0.04 × 1,046.5 = 42 Hz: roughness. Play phrase 30.
   *Product:* four saved drums, the cycle you heard, where each choke falls.

3. **Alternative kicks and snares** (25 min). Play KICK MS at `C-2`, like KICK, so a swap keeps the tuning. A model that sustains gets the DRUM slot of the drum it replaces.

   ```patch
   # INST 34  MACROSYNTH  "KICK MS"
   MODEL  KICK            ; TIMBRE decay, COLOR tone (pp. 76-80)
   TIMBRE 40              ; match KICK's 625 ms by ear, so a swap keeps the length
   COLOR  30              ; dark: leaves the upper bass range to the bass line
   TRANSP. OFF
   ```

   ```patch
   # INST 35  MACROSYNTH  "SNARE MS"
   MODEL  SNARE           ; TIMBRE tone balance, COLOR noise (pp. 76-80)
   TIMBRE 50              ; neither tone dominates
   COLOR  70              ; mostly noise, so the wires cut through the piano
   SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 02  DEC 0C   ; SNARE's 14 ticks
   FILTER HIGHPASS  CUTOFF 30  RES 00   ; as SNARE: out of the bass
   TRANSP. OFF
   ```

   ```patch
   # INST 38  WAVSYNTH  "KICK WS"
   SHAPE  SINE                        ; one partial: the sweep is the sound
   SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 06  DEC 18   ; KICK's 30 ticks
   AMP    20  LIM SIN                 ; drive for harmonics on small speakers;
                                      ; the curve is unknown
   TABLE TIC  FF                      ; worked example 1's table
   TRANSP. OFF
   ```

   SNARE WS's one oscillator plays head and wires in turn: 30 ms of falling tone, then noise.

   ```patch
   # INST 39  WAVSYNTH  "SNARE WS"
   SHAPE  TRI                         ; the head: weak odd harmonics,
                                      ; if TRI matches its name
   SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 02  DEC 0C   ; SNARE's 14 ticks
   FILTER HIGHPASS  CUTOFF 30  RES 00
   TABLE TIC  FF
   TRANSP. OFF
   ```

   ```table
   # SNARE WS's table  (TIC FF)
   0  07 .  <SHAPE> TRI    .       .   ; head, a fifth up; restores the shape on every hit
   1  05 .  .              .       .
   2  03 .  .              .       .
   3  02 .  .              .       .
   4  01 .  .              .       .
   5  00 .  .              .       .   ; 25 ms: the head's pitch
   6  00 .  <SHAPE> NOISE  HOP 06  .   ; from 30 ms: wires, held
   ```

   Row 0 sets TRI again, since the notes do not say whether a command's value survives a retrigger. Move the switch row until the parts fuse.
   *Product:* four saved drums, each with a line on what it offers that its FM counterpart does not.

4. **Tom, clap and metal** (20 min). TOM places three head modes as carriers:

   ```patch
   # INST 36  FMSYNTH  "TOM"
   ALGO   0A            ; [A>B]+C+D: a strike pair, two placed modes
          A      B      C      D
   SHAPE  SIN    SIN    SIN    SIN
   RATIO  1.65   1.00   1.59   2.14   ; modes 1, 1.59, 2.14; A's upper sideband on 2.65
   LEV    30     70     40     28     ; higher modes quieter
   FB     00     00     00     00
   OPMOD  1>LEV  .      2>LEV  2>LEV  ; macro 1: strike; macro 2: upper modes
   SLOT1  DRUM  DEST: (amp level)  PEAK 00  BODY 03  DEC 24   ; 3 + 36 = 39 ticks, 813 ms
   SLOT2  AHD   DEST: (macro MOD1) ATK 00  HOLD 00  DEC 03   ; strike: 3 ticks
   SLOT3  AHD   DEST: (macro MOD2) ATK 00  HOLD 00  DEC 0C
                                      ; upper modes die first, as on a head
   TABLE TIC  02
   TRANSP. OFF
   ```

   ```table
   # TOM's table  (TIC 02)
   0  03 .  .        .  .      ; a minor third up
   1  02 .  .        .  .
   2  01 .  .        .  .
   3  00 .  HOP 03   .  .      ; from 6 ticks, 125 ms: the note, held
   ```

   1 : 1.65 reduces to 20 : 33: an inharmonic strike, whose lower sideband at 0.65 leaves with it. Play `A-2`, `D-3`, `G-3` (110.0, 146.8, 196.0 Hz): fourths, so toms can carry a motif. Build CLAP from worked example 2. Then:

   ```patch
   # INST 3A  MACROSYNTH  "METAL"
   MODEL  STRUCK DRUM     ; TIMBRE damping, COLOR brightness (pp. 76-80)
   TIMBRE 50              ; aim to ring under a beat, so 8th-note patterns stay clear
   COLOR  80              ; bright: metal against dark drums
   FILTER HIGHPASS  CUTOFF 40  RES 00   ; above the kick and tom
   TRANSP. OFF
   ```

   *Product:* three saved drums and your tom notes.

5. **Kit sheet** (10 min). Arrange the pool as laid out above. For each drum write slot, engine, tuning note, length in ticks and milliseconds, and a reason. Play a two-bar beat on `30`/`31`, then add 4, then 8.
   *Product:* the sheet and your choice of main kick and snare.

## Etude

This week's etude is **checkpoint piece 1**.

**Brief.** A piece in four sections in which the drums change role at least twice.

**Forces.** Up to eight tracks; only instruments built in weeks 2 to 4, no factory instruments, no samples. One layout: 1 kick, 2 snare and clap, 3 both hats, 4 tom and metal, 5 bass, 6 to 8 piano or mallets.

**Constraints.**

- Four sections of 12 bars, each three song rows of 4-bar chains of equal length; chain `FE` for a resting track (p. 10).
- A drum role per section: timekeeper, punctuation (phrase ends only), colour, line (toms or metal carrying a motif), or silent. It changes at two or more boundaries.
- Each boundary changes two or three named dimensions, with a join in its own chain (the last chain cloned, last phrase replaced), each by a different means.
- Audible at least once each: a table pitch drop, a round robin, a choke, a clap or flam.
- An alternative kick or snare in at least one section, with the reason in the plan.
- One section moves the harmony by chain TSP while the drums stay put.
- The last bar ends the piece on purpose.

**Duration target.** 48 bars. At 120 BPM a bar lasts 240 / 120 = 2 s: 96 s, 1 min 36 s.

**Repeat budget.** 3, counted as in week 1: consecutive plays of one phrase at one TSP on one track. A new TSP on a TRANSP.-off drum, or a round robin, is no change. So a one-bar beat fills three bars of a chain and the fourth differs: A, A, A, B.

**Plan.** One page, before you open Song view, showing:

- the inventory: instruments with slot, engine, track and role; motifs as note names;
- sections with bar numbers, a twelve-row song outline, the track map with the choke pair;
- density and register curves over all 48 bars;
- the drum role per section, and at each change a sentence on what the drums now do and who takes their old job;
- the named contrasts at bars 13, 25 and 37, and each join's means;
- where each table technique sounds, and its tick mode;
- the phrase order in every drum chain, with repeat counts.

An outline of this shape meets the constraints; chain numbers give track, then row:

```song
# SONG   1  2  3  4  5
00       FE FE 30 40 50    ; A  bars 1-4    drums as colour
01       FE FE 31 41 51    ; A  bars 5-8
02       FE 22 32 42 52    ; A  bars 9-12   join: snare pickup
03       13 23 33 43 53    ; B  bars 13-16  timekeeper
04       14 24 34 44 54    ; B  bars 17-20
05       15 25 35 45 55    ; B  bars 21-24  join: thinning
06       FE FE 36 46 56    ; C  bars 25-28  toms as line; pitched chains at TSP 05
07       FE FE 37 47 57    ; C  bars 29-32
08       FE 28 38 48 58    ; C  bars 33-36  join: clap flam
09       19 29 39 49 59    ; D  bars 37-40  timekeeper, MS kick and snare
0A       1A 2A 3A 4A 5A    ; D  bars 41-44
0B       1B 2B 3B 4B 5B    ; D  bars 45-48  ending
```

Tracks 6 to 8 follow the same numbering. Row *r* starts at bar 4*r* + 1, so `09` starts bar 37; 12 × 4 = 48. The role changes at all three boundaries.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: what the plan got right, what you changed, which drum you would rebuild.

**The checkpoint rule.** Score the piece with the rubric after the listening review. By the syllabus's rule, a checkpoint scoring below 3 on any criterion suggests repeating the etude before moving on: rework and re-score before week 5.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. Where did the drums change role? Did another track take over their job?
2. Did the round robin sound like life or like a pattern? Could you hear its period?
3. Could you hear kick and bass apart? Mark any bar where one hid the other.
4. Which choked open hats were cut on purpose, and which by accident?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | Drum roles, track map or curves are missing, or the piece departs from the plan without comment. | Every item is present, the bar arithmetic checks, each departure has a reason. |
| Technique of the week | The kit plays, but from one engine, without tables, or without reasons. | Eight or more drums saved with reasons; drop, round robin, choke and clap or flam sound where planned. |
| Development | The drums change role once, or a phrase exceeds the budget of 3. | Two or more role changes, each with a stated hand-over; the budget holds; joins differ audibly. |
| Sound | Kick and bass mask each other, or hats and bells collide. | Each drum keeps its register; kick and bass both read; chokes sound chosen. |

## Going further

- Put a set of toms in one instrument: at TIC `FE` the note picks the row (p. 24).
- Read Gordon Reid's "Synth Secrets" articles on drum synthesis (Sound On Sound, 1999-2004) and translate one circuit into M8 terms.
- Listen to tabla and talking drum: which strokes bend, which way, how fast?

## Summary

- A drum is a pitch sweep, noise and an envelope, in proportion.
- FM places partials, Macrosynth gives a drum per model, Wavsynth leaves the work to the table.
- TIC `01` sweeps in ticks, `FF` in 5 ms rows at any tempo, `00` gives each hit its own row.
- One note per track gives chokes; TRANSP. off keeps drums still, if it spares the table.
- A kit laid out by rule makes a swap one digit.

Week 5 puts this kit to work on grooves, swing and polyrhythm.
