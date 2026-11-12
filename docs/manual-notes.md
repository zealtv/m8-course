# Manual notes

A capability reference for the course, written in our own words. Modules cite
this file so that nobody has to re-read the manual to check a claim.

## Sources and how to read these notes

| Tag | Source | Read on |
|-----|--------|---------|
| (p. N) | Operation manual, cover "Version 6.5.2 04/21/2026", 98 pages; N is the printed page number. Catalogued as `lore:2026-11-12-m8-operation-manual-6-5-2`. | 2026-11-12 |
| [CL x.y.z] | The manufacturer's firmware changelog (`changelog.txt` in their firmware repository), entries from 6.5.2 to 6.6.4 A. | 2026-11-12 |
| [HL] | The manufacturer's headless setup guide and headless firmware readme. | 2026-11-12 |
| [untested] | Inferred, or the sources leave it open. Listed again under "Open questions". Try it on a unit before a module states it as fact. | |

The learner runs headless firmware 6.6.4, which the changelog dated
2026-11-06. The manual describes 6.5.2, so anything the changelog adds after
6.5.2 does not appear in the manual; those items carry a [CL] tag here.

Nothing in these notes has been tried on a unit. They report what the
documents say.

Key names follow the manual: [SHIFT], [OPTION], [EDIT], [PLAY] and the four
[DIRECTION] keys. Values are hexadecimal unless marked otherwise.

---

## 1. The data model

### 1.1 Hierarchy and limits

| Level | Holds | Size and limits | Page |
|-------|-------|-----------------|------|
| Song | 8 tracks side by side, each a column of chain numbers | up to 256 rows | 10 |
| Chain | a list of phrases, each with a transpose (TSP) in semitones | up to 16 rows, so up to 256 steps | 12 |
| Phrase | steps of note, volume, instrument and 3 FX columns | 16 steps | 14 |
| Table | rows of transpose, volume and 3 FX columns, run beside an instrument | 16 rows; one per instrument plus 128 free tables, 256 in all | 24, 91 |
| Groove | ticks consumed by each phrase step | 16 rows | 26 |
| Scale | 12 intervals, each on or off with a detune | 16 per project | 28 |
| Instrument | settings, 4 modulation slots, its own table | 128 per song, 7 types | 16 |
| EQ bank | 3-band parametric EQ | 128 instrument banks, plus main mix and each send effect | 32 |

- The specification page counts "255 Patterns/Phrases & chains" (p. 91).
- Every track plays one note at a time (pp. 5, 91). Eight tracks give eight
  simultaneous voices, before any chord engine.
- All eight tracks behave identically (p. 5). No track is reserved for drums.
- A phrase or chain may be referenced from many places. An asterisk beside
  the phrase number marks a phrase used elsewhere (p. 14). Editing a shared
  phrase edits every use.

### 1.2 How the song plays

- Each track keeps its own play position (p. 5). A track walks down its
  column of chains until it meets an empty cell, then loops back to the start
  of its list of chains (p. 10).
- Chains may differ in length, so tracks may drift out of alignment with each
  other. The manual treats this as a property to design around: give chains
  equal lengths to keep tracks aligned (p. 10).
- To hold a track silent while keeping its place, use a chain of empty
  phrases. The manual suggests chain 00 or FE (p. 10).
- A chain ends at its first empty phrase cell (p. 12).
- Rows below the song serve as a sketch area for trying arrangements without
  disturbing the piece (p. 10).
- Chain bookmarks: [OPTION] three times (p. 11). Row select by pressing
  [LEFT] twice on track 1, with row moves and coloured bookmarks [CL 6.6.0].
- Holding [OPTION] in song view with playback stopped shows the track's time
  in minutes and seconds (p. 11). Useful for duration targets.

### 1.3 The phrase row

| Column | Meaning | Page |
|--------|---------|------|
| N | note across the full 128-note MIDI range; an OFF can be entered | 14 |
| V | volume 00 to 7F, default 64 | 14 |
| I | instrument number; left empty, the note changes without retriggering the instrument | 14 |
| FX1 to FX3 | command plus value; available commands depend on the instrument type | 14 |

By default one step lasts a 16th note; the groove may change that (p. 14).

### 1.4 Copying, cloning and reuse

| Action | Keys | Page |
|--------|------|------|
| Clone a chain (new chain, same phrases) | [SHIFT]+[OPTION] then [EDIT] in song view | 11 |
| Deep clone (new chain and new phrases) | [SHIFT]+[OPTION] then double-tap [EDIT] | 11 |
| Deep clone including instruments | a third [EDIT] | [CL 6.6.1] |
| Clone a phrase | [SHIFT]+[OPTION] then [EDIT] in chain view | 13 |
| Clone an instrument, table or groove | same keys on the instrument column or a TBL/TBX/GRV/GGR value | 15 |
| New unused chain, phrase or instrument | double-tap [EDIT] | 11, 13, 15 |
| Selection mode, copy, paste, cut | [SHIFT]+[OPTION]; [OPTION]; [SHIFT]+[EDIT]; [EDIT]+[OPTION] | 7 |
| Interpolate a selected column | [SHIFT]+[EDIT] in selection mode (phrase) | 15 |
| Shift selected rows up or down | [EDIT]+[UP or DOWN] in selection mode | 15 |
| Note fill and randomise | [OPTION]+[DIRECTION] in selection mode on the note column; paste undoes | 15 |
| Song snapshot and recall | [SHIFT]+[OPTION] and [SHIFT]+[EDIT] in mixer or project view | 31, 39 |

The distinction between clone and deep clone matters for variation work: a
clone shares phrases with its source, a deep clone does not.

### 1.5 Live mode

Entered with [SHIFT]+[LEFT] from song view. Tracks can be cued, played and
stopped one at a time from anywhere in the song. A cued chain waits for the
playing chain to finish unless LIVE QUANTIZE in project view says otherwise.
[LEFT]+[PLAY] cues a whole song row (pp. 10-11, 38).

---

## 2. Time

### 2.1 Ticks and grooves

- A groove lists how many ticks each phrase step consumes (p. 26).
- Default resolution: 24 ticks per quarter note, so 6 ticks per 16th-note
  step and 96 ticks per 16-step phrase (p. 26).
- A groove loops at its first empty row. A row of 00 skips that phrase step
  (p. 26).
- A groove may be set to 24, 48, 96 or 192 ticks per quarter note for finer
  swing (p. 26).
- Groove 00 is the default for every track. Each track may run its own
  groove, set with GRV in a phrase; GGR sets all tracks (pp. 26, 70). GRV
  holds until the next groove command on that track.
- The groove editor sums the ticks at the bottom of the screen (p. 26).
- One tick at 24 per quarter lasts 2.5 / BPM seconds: about 20.8 ms at 120
  BPM (arithmetic, not from the manual).

Groove examples from the manual's appendix (p. 81), with our arithmetic:

| Name | Rows | What happens |
|------|------|--------------|
| Swing | 07, 05 (or 08, 04) | pairs of steps still total 12 ticks; the first is longer |
| Triplets | 08, 08, 08, 00 | three steps share a quarter note, the fourth is skipped: 12 sounding steps per bar |
| Double speed | 03 | 16 steps pass in two beats |
| 3/4 | twelve rows of 06, four of 00 | the phrase lasts 72 ticks, three quarter notes |
| Swing last step | fourteen rows of 06, then 07, 05 | only the last pair swings |

Two consequences the course builds on:

- **Polyrhythm** comes from tracks running different grooves over the same
  span. A track on 08-tick steps against a track on 06-tick steps gives 3
  against 4 within each quarter note.
- **Phrase length** follows from the groove's tick total. A groove that skips
  steps or sums to something other than 96 gives that track a different bar
  length, which is one route to polymeter.

Divisions that do not divide the tick count evenly (5 or 7 across a beat or
bar) need uneven rows, such as 05, 05, 05, 05, 04 for five across a quarter
note. The error stays under one tick [untested by ear].

### 2.2 Commands that change when things sound

| Command | In a phrase | In a table | Page |
|---------|-------------|------------|------|
| GRV xx | set this track's groove | | 70 |
| GGR xx | set every track's groove | | 70 |
| DEL xx | delay the whole row by xx ticks | delay the table play head | 69 |
| MTT xx | shift the row by eighths of a tick, either way; no negative shift on the first row | no action | 72 |
| RET xy | retrigger: with y non-zero, every y ticks, x ramping volume down (0-7) or up (8-F); with y zero, one retrigger after x ticks | | 70 |
| KIL xx | stop the note after xx ticks | | 70 |
| OFF xx | note off after xx ticks; releases an ADSR | | 72 |
| HOP xy | jump to row y of the next phrase; HOP FF stops the track | jump to row y, x times | 70 |
| SNG xx | move this track to a song row relative to its position; ignored if not playable | | 71 |
| RMX xy | set the phrase position (y) of tracks to the left; x selects which | | 71 |
| TPO xx | set tempo; help text converts the value | | 72 |
| TIC xx | set the table tick rate for the instrument | per column, each FX column can run at its own rate | 72 |

HOP in a phrase shortens that phrase, which gives a second route to
polymeter: a 12-step phrase on one track against 16 on another.

Tempo can also be tapped with [EDIT] on TEMPO in project view (p. 38).

### 2.3 Tables

- Tables play beside an instrument at their own rate, set by TABLE TIC in the
  instrument view or the TIC command; phrases follow tempo and groove, tables
  do not (p. 24).
- Columns: N transposes the instrument for that row; V multiplies the phrase
  volume; three FX columns behave as in a phrase, with some differences
  (p. 24).
- A table loops from the bottom to the top for as long as the instrument
  sounds. HOP shortens or loops it (p. 24).
- A TIC command on the last row applies to all rows (pp. 24, 72).
- TBL assigns a table to the instrument. TBX runs an auxiliary table on the
  track in parallel; TBX 00 stops it; a TIC on the same row sets its rate.
  THO jumps to a table row and moves all columns (p. 72).

| TIC value | Behaviour | Page |
|-----------|-----------|------|
| 00 | advance one row each time the instrument triggers | 24 |
| 01 to FB | that many ticks per row | 24 |
| FC | octave map: the playing octave picks the row | 24 |
| FD | velocity map: velocity picks the row | 24 |
| FE | note map: the note picks the row; HOP 00 on row 0C limits it to 12 notes | 24 |
| FF | advance at 200 Hz | 24 |

TIC 00 makes a table a per-trigger sequence: each new note meets the next
row. That gives round-robin variation, cycling accents and cycles whose
length differs from the phrase.

---

## 3. Pitch, scales and harmony

- Chain TSP transposes a phrase in semitones (p. 12). Project TRANSPOSE
  shifts the whole song; TSP as a command does the same (pp. 38, 72).
- An instrument's TRANSP. setting switches off all transposition for that
  instrument. Meant for percussion (p. 16).
- Scales quantise: project and chain transpose, note entry, ARP, the PIT
  command, the PIT modulation in FM Synth, and the MIDI Out chord commands
  (p. 28). So a chain transposed inside a scale moves diatonically.
- Sixteen scales per project; each of 12 intervals on or off, detune from
  -24.00 to +24.00 semitones (p. 28). Detune allows other tunings.
- SCA xy sets key (x) and scale (y) for a track; SCG for the song (p. 71).
- The SD card carries 92 factory scales (p. 28).

| Command | Effect | Page |
|---------|--------|------|
| ARP xy | fast three-note arpeggio: the note, +x and +y semitones | 69 |
| ARC xy | arpeggio mode (x) and speed in ticks (y) | 69 |
| PSL xx | portamento, time in ticks | 71 |
| PBN xx | continuous bend up (00-7F) or down (80-FF) | 71 |
| PVB xy | vibrato, speed x and depth y; PVX the stronger form | 71 |
| PIT xx | offset pitch in semitones | 75 |
| FIN xx | fine tune within a semitone either way | 75 |

Chords under the one-note-per-track limit: Hypersynth (up to six intervals
from one track), ARP, the Macrosynth paraphonic and triple-oscillator
models, tables, or voices split across tracks.

---

## 4. Variation, chance and conditions

| Command | Effect | Page |
|---------|--------|------|
| CHA xy | phrase: probability for what sits left (x) and right (y) of the command, 0 never to F always. Table: one value 00-FF for everything to the left | 69 |
| RND xy | randomise the previously active command; x and y set the range of its left and right digits | 70 |
| RNL xy | randomise the command to the left; in the first FX column, randomises note and instrument (phrase) or note and velocity (table) | 70 |
| REP xx | repeat the last command each step, adding xx each time; persists until a new command or REP 00; a `^^` marks an active REP carried from an earlier phrase | 70 |
| RTO xx | after REP: the value at which the repeat stops | 71 |
| NTH xy | conditional on loop count: skips what sits left (x) or right (y) in a phrase, or everything to the left in a table; the help text explains each value | 71 |
| SED xx | set the random seed for the track, so random results repeat | 71 |
| INS xx | trigger or change instrument as a command | 70 |
| NXT xx | play instrument xx on the track to the right with the current note and velocity; not on track 8 | 72 |

Relative and absolute commands (p. 69): a relative command adds to the
parameter's current value (01-7F up, FF-80 down) and accumulates until the
instrument retriggers, by an instrument number in the I column or by RET.
An absolute command sets the value outright.

Almost every instrument parameter has its own command. Highlighting a
parameter and moving to the phrase or table sets it as the default command
(pp. 17, 75). The same now works from the mixer and effect settings by
tapping [EDIT] on the parameter [CL 6.6.1].

SED plus RND gives repeatable "random" variation: composed, not thrown.
NTH gives variation tied to how many times a phrase has looped, which
lengthens the period of a short loop without new phrases.

---

## 5. Instruments

### 5.1 Common to all synth engines

- General settings: TYPE, LOAD/SAVE, NAME, TRANSP., TABLE TIC, EQ (p. 16).
- Filter: low-pass, high-pass, band-pass, band-stop, LP>HP, and zero-delay
  low-pass and high-pass; CUTOFF and RES (p. 51 and each engine).
- Amp: AMP drives the signal; LIM chooses what happens above the limit:
  CLIP, SIN, FOLD, WRAP, POST, POST:AD, POST:W1-W3 (p. 51).
- Mixer: DRY, and sends MFX, DEL, REV (p. 51).
- [EDIT]+[PLAY] previews an instrument (p. 17).
- The instrument pool lists all slots and allows reordering and mixer edits
  (p. 22).

### 5.2 Modulation (pp. 18-21)

Four slots per instrument. Each has a type, a destination and, where it
applies, a source.

| Type | Behaviour |
|------|-----------|
| AHD | attack, hold, decay; times in ticks, so they follow tempo |
| ADSR | needs an OFF note or command to reach release |
| DRUM | PEAK shapes the transient (duck and peak time), BODY holds, DEC decays |
| LFO | shapes: TRI, SIN, RAMP DN, RAMP UP, EXP DN, EXP UP, SQU DN, SQU UP, RANDOM, DRUNK, each again in a faster tick-rate "T" form. TRIG: FREE, RETRIG, HOLD, ONCE. FREQ in steps, or ticks for T shapes |
| TRIG | a bipolar AHD fired by another instrument (00-7F) or by any instrument on a track (80-87) |
| TRACKING | maps NOTE, VELOCITY or VELOCITY TAKEOVER to a parameter between LVAL and HVAL; the two may be reversed |

- A slot may modulate its neighbour's amount, rate or both (1 to 2, 2 to 3,
  3 to 4, 4 to 1) through MOD AMT, MOD RATE, MOD BOTH (p. 18).
- Envelope and LFO commands: EA, AT, HO, DE, ET (retrigger), LA, LF, LT
  (p. 75).
- ADSR retriggered by the same instrument resumes its attack from the
  current level [CL 6.6.0].
- TRIG gives sidechain-style ducking and cross-track interaction. TRACKING
  gives key scaling and velocity-to-timbre, which the piano and mallet work
  depends on.

### 5.3 FM Synth (pp. 58-59)

Four operators, A to D. Each has a shape, RATIO, LEV, FB (feedback) and two
MOD slots.

- RATIO sets frequency relative to the played note: 2.00 an octave up, 0.50
  an octave down.
- Each operator's two MOD slots assign one of the four macro values MOD1-4 to
  a destination: LEV (from 00 up to the set level), RAT (adds 0.00 to 16.00
  to the ratio), PIT (adds semitones to that operator), FBK (from 00 up to
  the set feedback).
- The instrument's modulation slots can drive MOD1-4, which is how an
  envelope reaches a modulator's level [untested: confirm the destination
  names on the unit].
- Operator shapes named in the manual: SIN, SW2 to SW6, TRI, SAW, SQU, PUL,
  IMP, NOISE, then wavetable shapes from "W" on. The changelog also mentions
  a CLICK oscillator [CL 6.6.3 B].
- Operator settings copy and paste between operators (p. 58).

Algorithms, read as "modulator > carrier", with + for parallel:

| No. | Routing | Carriers |
|-----|---------|----------|
| 00 | A>B>C>D | D |
| 01 | [A+B]>C>D | D |
| 02 | [A>B+C]>D | D |
| 03 | [A>B+A>C]>D | D |
| 04 | [A+B+C]>D | D |
| 05 | [A>B>C]+D | C, D |
| 06 | [A>B>C]+[A>B>D] | C, D |
| 07 | [A>B]+[C>D] | B, D |
| 08 | [A>B]+[A>C]+[A>D] | B, C, D |
| 09 | [A>B]+[A>C]+D | B, C, D |
| 0A | [A>B]+C+D | B, C, D |
| 0B | A+B+C+D | all four; the manual calls this additive mode |

The carriers column comes from reading the routing, not from the manual's
wording. Algorithm 07 (two independent pairs) suits two-layer sounds such as
tine plus body; 0B suits organ and additive bell partials.

### 5.4 Wavsynth (pp. 50-51, 82-89)

- A wavetable and noise engine. Nine base shapes: four pulse widths (12% to
  75%), saw, triangle, sine, pitched noise, noise. Then 61 wavetables of 64
  waveforms each.
- SIZE, MULT (repeats, like hard sync), WARP, SCAN (mirror position on base
  shapes; position within a wavetable).
- Pulse-width modulation: PULSE 50% with the mirror parameter moved.
- Four extra filter modes apply the filter inside the waveform: WAV LP, HP,
  BP, BS.
- Wavetable families by prefix: OSC, BNK, HRM, EFX, VOX.

### 5.5 Macrosynth (pp. 52-53, 76-80)

44 models, each with TIMBRE and COLOR, plus DEGRADE and REDUX. The model
descriptions carry a CC BY-SA 3.0 licence from their original author. The
course's sound families map onto these models:

| Use | Models | TIMBRE / COLOR |
|-----|--------|----------------|
| Kick | KICK | decay / tone; pitch tunes it |
| Snare | SNARE | tone balance / noise amount |
| Hats, cymbals | CYMBAL | band-pass cutoff / square-to-noise balance |
| Metallic percussion | STRUCK DRUM | damping / brightness |
| Bells | STRUCK BELL | damping / inharmonicity |
| Plucked bass, strings | PLUCKED | damping / pluck position |
| Two-operator FM | FM, FEEDBACK FM, CHAOTIC FEEDBACK FM | modulation amount / ratio |
| Additive | HARMONICS | centre / spread of 12 harmonics |
| Chords, pads | WAV PARAPHONIC, TRIPLE SAW/SQUARE/TRIANGLE/SIN, SAW SWARM | see manual |
| Noise sources | FILTERED NOISE, TWIN PEAKS NOISE, CLOCKED NOISE, GRANULAR CLOUD, PARTICLE NOISE | see manual |
| Basses, leads | CSAW, MORPH, SAW SQUARE, SQUARE SUB, SAW SUB, SYNC models, digital filter models | see manual |

### 5.6 Hypersynth (pp. 60-61)

- A chord engine: up to six intervals from one note, each a pair of detuned
  saws, plus a square sub-oscillator one or two octaves down.
- 16 chord banks; SCALE picks a project scale (00 follows the song or
  track); SHIFT cross-fades the first three intervals against the second
  three; SWARM detunes; WIDTH spreads; SUBOSC mixes the sub.
- A SHAPE parameter offers twelve waveforms beyond saw [CL 6.6.0].

### 5.7 Sampler (pp. 54-57)

In scope only for resampling. Plays mono or stereo PCM wav files streamed
from the card. SLICE, PLAY modes (forward, reverse, loops, ping-pong,
oscillator modes, repitch to tempo), START, LOOP ST., LEN, DETUNE, DEGRADE.
The sample editor crops, normalises, fades, slices and saves.

### 5.8 MIDI Out and External Instrument (pp. 62-64)

Out of scope for the course. External Instrument sends MIDI out and brings
audio back through the filter and amp.

---

## 6. Mix and effects

- Signal path: tracks, inputs and send effects sum, then pass through OTT,
  main EQ, limiter, DJ filter and main volume (p. 30).
- Track volume in the mixer also scales that track's sends (p. 30).
- Three sends (pp. 36-37): ModFX (chorus, phaser, flanger; comb filter added
  [CL 6.6.0]), ping-pong delay (TIME L:R in beats and fractions, FEEDBACK,
  WIDTH, REVERB SEND), reverb (SIZE, DECAY, SHIMMER, MOD DEPTH, MOD FREQ,
  WIDTH). Each has an input EQ.
- EQ: three bands, each with GAIN, FREQ, Q, TYPE (low cut, low shelf, bell,
  band-pass, high shelf, high cut, all-pass) and MODE (stereo, mid, side,
  left, right) (pp. 32-33). A spectrum display arrived in [CL 6.6.0].
- Limiter and scope view: ZOOM, PEAK, SOFT CLIP, ATK, REL, DJ filter type and
  resonance, OTT amount, TIME and COLOR (pp. 34-35).
- OTT: parallel multi-band compression; from 80 up the dry mix fades out
  (p. 30).

Commands for automating the mix over a form (pp. 73-74):

| Group | Commands |
|-------|----------|
| EQ | EQM, EQI (assign an EQ slot to the mix or the instrument) |
| Volumes | VMV (main), VT1-VT8 (tracks), VMX, VDE, VRE (send returns) |
| ModFX | XMT, XMM, XMF, XMW, XMR |
| Delay | XDT, XDF, XDW, XDR |
| Reverb | XRS, XRD, XRM, XRF, XRW, XRZ (freeze) |
| DJ filter | DJC, DJR, DJT |
| Inputs | IVO, IMX, IDE, IRV; second input IV2, IM2, ID2, IR2; USB |

These change the values shown in the mixer and effect views, so an automated
change stays until something sets it back.

---

## 7. Render and resampling

- Render view (p. 47): start and last song row, repeats, track selection,
  each send and the limiter on or off, 16 or 32 bit, MIXED or STEMS; files
  land in `/Renders` on the card.
- Selection to sample (p. 48): select in song view, double-tap [EDIT]. QUICK
  RENDER works offline; REALTIME also records inputs; EXTERNAL ONLY records
  an External Instrument. The result arrives as a new Sampler instrument.
- Use in the course: bounce several tracks to one to free voices; turn a
  chord built across tracks into a single-track stab.
- Project files do not contain samples; BUNDLE gathers project, samples and
  instruments into one folder (p. 39). After resampling, bundle.
- CLEAR UNUSED frees chains, phrases, instruments, EQs and tables the song no
  longer uses (p. 38).

---

## 8. Changes after the manual (6.5.2 to 6.6.4 A)

From the changelog. New behaviour a module might rely on:

- 6.6.0: EQ spectrum; firmware update from the SD card; ModFX comb filter;
  Hypersynth SHAPE; song row select and coloured row bookmarks; ADSR resumes
  attack from the current level on a same-instrument retrigger.
- 6.6.1: mixer and effect parameters capture their FX command on [EDIT];
  a third clone level in song view that also clones instruments.
- 6.6.2 to 6.6.4 A: fixes. Several touch commands the course uses: RMX, RET,
  REP and RTO, ARP with OFF and KIL, PSL reset on retrigger, TRIG envelopes,
  table maps (TIC FC, FD, FE), SED in an auxiliary table, INS in a table at
  TIC FF, render length and tempo alignment.

A learner on firmware older than 6.6.4 may meet the bugs those entries fixed.
The course assumes 6.6.4.

---

## 9. Where headless might differ

The course assumes a standard hardware unit. A headless unit runs the same
firmware on a bare microcontroller board connected to a host over USB [HL].

| Area | Standard hardware | Headless |
|------|-------------------|----------|
| Screen and keys | built in | a display client on the host shows the screen and maps host keys or a gamepad to the eight keys [HL] |
| Audio out | headphone socket, speaker | through the host over USB audio [HL] |
| Audio in | line input; microphone on Model:02 | USB audio from the host; line input and microphone likely absent [untested] |
| MIDI | TRS in and out, USB | USB; TRS sockets likely absent [untested] |
| Touchscreen | parameter editing and mapping | absent [untested] |
| Battery, charging, speaker and backlight settings | apply | do not apply |
| SD card | sprung slot | the board's own slot; the same formatting and speed advice applies [HL] |
| Firmware update | USB, or from the SD card since 6.6.0 | flashed from the host [HL] |

None of this changes the sequencer, the engines or the commands, which is
where the course spends its time. The differences matter in week 11 (inputs,
recording, render) and wherever a module mentions the microphone, the line
input or the touchscreen.

---

## 10. Open questions

Things the sources leave unsaid or that these notes inferred. Each wants a
short test on a unit; record the answer here with the date and firmware.

1. **Track loop point.** When a track meets an empty song cell, the manual
   says it returns to the beginning of its list of chains (p. 10). Does that
   mean song row 00, or the top of the block the cursor started from?
2. **HOP and its own row.** Does the note on the row that carries HOP sound
   before the jump? This decides whether a HOP on row 0B gives 11 or 12
   steps.
3. **Groove resolution across tracks.** A groove can run at 48, 96 or 192
   ticks per quarter. How do two tracks with grooves at different resolutions
   line up, and does the setting belong to the groove or the project?
4. **Largest groove row value**, and so the longest single step.
5. **FM modulation routing.** Exact destination names that let a modulation
   slot drive MOD1-4 and operator levels; whether TRACKING can reach them.
6. **FM operator shape list** on 6.6.4, including CLICK and the wavetable
   shapes, and the FM-specific command names in the help view.
7. **NTH value table.** The manual defers to on-screen help. Copy the
   meanings out by hand.
8. **RMX track selection.** How the first digit selects tracks.
9. **Table versus phrase FX differences.** The manual says some commands
   behave differently in tables without a full list.
10. **Uneven tuplet grooves** (5 and 7): whether the sub-tick error is
    audible, and whether MTT can correct it.
11. **Headless inputs**: confirm line input, TRS MIDI and touchscreen
    absence on the learner's unit.
12. **Chain TSP inside a scale**: confirm it moves by scale degree, as p. 28
    implies, and what happens to notes outside the scale.
13. **Deep clone and repeated phrases.** If a chain lists the same phrase
    several times, does a deep clone make one new phrase or one per row?
    (Raised while writing week 1, 2026-11-12.)
14. **When a groove command bites.** Does `GRV` on a row act on that row or
    from the next? Does a groove's position restart with each phrase, or run
    on across phrase boundaries (it matters for grooves whose length does
    not divide 16)? Which groove does a track use when playback starts below
    the row that set it? (Raised while writing week 5, 2026-11-13.)
15. **RET's reach.** Do retriggers carry on past the step that holds the
    command until the next note on the track? Does x = 0 mean no volume
    ramp? (Week 5.)
16. **DEL longer than its step**, and **MTT's value encoding** (which values
    move a row early, which late, and the range). (Week 5.)
17. **SNG's value and timing.** How the value encodes a move up or down the
    song, and whether the jump happens at the command or at the end of the
    chain. Whether RMX sounds the note on its target row. Whether the
    [OPTION] time display in song view accounts for phrases shortened by
    HOP or a groove. (Raised while writing week 6, 2026-11-13.)
18. **Row shift at the phrase edge.** When [EDIT]+[UP or DOWN] in selection
    mode (p. 15) moves rows past row F (or above row 0), do they wrap to the
    other end, drop off, or does the shift refuse? Decides whether
    displacement by shifting keeps the note that crosses the bar line.
    (Raised while writing week 7, 2026-11-13.)
19. **What NTH counts.** Plays of the phrase since [PLAY], consecutive
    repeats within a chain, or passes of the chain; whether the count
    belongs to the track or the phrase; whether it resets when the track
    moves to a new chain or song row; whether the first pass counts as 0
    or 1. Decides the period of any NTH variation. (Raised while writing
    week 7, 2026-11-13.)
20. **SED, CHA and RND.** Which random commands SED governs (RND and RNL
    certainly; CHA?); whether meeting a SED again restarts the sequence, so
    a SED on row 0 repeats its results every pass; whether the sequence runs
    on across phrases. Whether CHA's digits scale linearly (x / 15). What
    "previously active command" means for RND: the command to its left on
    the row, or the last one on the track. (Raised while writing week 7,
    2026-11-13.)
21. **REP's timing and reach.** Whether REP acts on its own row or from the
    next; whether a command in another FX column, or an instrument
    retrigger, ends it; where RTO must sit (beside REP, or on a later row).
    (Raised while writing week 7, 2026-11-13.)
22. **Pan, and downward chain transpose.** Whether an instrument or track
    has a pan or width control (these notes record only DRY and the three
    sends), and how a chain TSP below zero is entered and displayed.
    (Raised while writing week 8, 2026-11-13.)
