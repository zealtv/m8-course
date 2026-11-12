---
title: "Glossary"
order: 4
---
Tracker and M8 terms as this course uses them, plus the course's own terms
for the form method. Page numbers point to the manual edition named in the
course notes. Music theory and programming terms are left undefined, as in
the modules.

## A

**Absolute command.** A command that sets a parameter to its value outright,
as opposed to a relative command that adds to it (p. 69).

**AHD.** A modulation type with attack, hold and decay stages. Its times
count ticks, so they follow tempo (p. 18).

**ADSR.** A modulation type with attack, decay, sustain and release. It
reaches its release only on a note-off, from an `OFF` note or command
(p. 18).

**Algorithm.** In the FM Synth, one of twelve fixed routings that decide
which of the four operators modulate which (p. 59). Numbered `00` to `0B`.

**Auxiliary table.** A second table run on a track beside the instrument's
own, started with `TBX` and stopped with `TBX 00` (p. 72).

## B

**Bench test.** The course's name for a short experiment on the unit that
settles something the manual leaves open. Record each answer with the date
and firmware version.

**Bookmark.** A marker in song view for finding a place again: chain
bookmarks with [OPTION] pressed three times (p. 11), and coloured row
bookmarks since firmware 6.6.0.

**Bundle.** A project-view action that gathers the project, its samples and
its instruments into one folder (p. 39). Project files do not contain
samples, so bundle after resampling.

## C

**Carrier.** An FM operator whose output you hear, as opposed to one that
only modulates another.

**Chain.** A list of up to 16 phrases, each with a transpose in semitones
(p. 12). A chain ends at its first empty phrase cell. Song cells name
chains.

**Chain view.** The view that edits one chain's list of phrases and their
transposes (p. 12).

**Clear unused.** A project-view action that frees chains, phrases,
instruments, EQs and tables the song no longer uses (p. 38).

**Clone.** A copy that shares what lies below it. A cloned chain lists the
same phrases as its source, so you can change its order or transposes
without touching the source, but a note edit still reaches both (p. 11).

**Cue.** In live mode, to queue a chain on a track so that it starts when the
playing chain finishes, unless LIVE QUANTIZE says otherwise (pp. 10-11, 38).

## D

**Deep clone.** A copy that shares nothing: a new chain with new phrases
(p. 11). Since firmware 6.6.1 a third level also copies the instruments.

**Default command.** The command an empty FX cell offers first. Highlighting
a parameter and moving to a phrase or table makes that parameter's command
the default (pp. 17, 75).

**Density curve.** In a one-page plan, a graph of how many layers sound, or
how busy they are, across the whole piece.

**DRUM.** A modulation type for percussion: PEAK shapes the transient, BODY
holds, DEC decays (p. 18).

## E

**Empty chain.** A chain of empty phrases used to keep a track silent while
it keeps its place. The manual suggests chain `00` or `FE`; the course uses
`FE` (p. 10).

**EQ bank.** A three-band parametric EQ. A project has 128 for instruments,
plus one for the main mix and one for each send effect (p. 32).

## F

**Feedback (FB).** An FM operator's output fed back into its own input,
which adds harmonics of that operator's frequency (p. 58).

**FM Synth.** The engine with four operators and twelve algorithms; the main
engine of weeks 2 and 3 (pp. 58-59).

**FX column.** One of the three command columns on a phrase step or table
row. Each holds a three-letter command and a two-digit value (p. 14).

## G

**Groove.** A list of up to 16 values, each the number of ticks one phrase
step lasts. It loops at its first empty row; a row of `00` skips its step
(p. 26). Groove `00` is every track's default.

**Groove resolution.** The number of ticks per quarter note a groove counts
in: 24 by default, or 48, 96 or 192 for finer swing (p. 26).

## H

**Headless.** The same firmware run on a bare board connected to a host
computer over USB, with the screen and keys provided by a display client on
the host. The course assumes standard hardware and notes where headless may
differ.

**Help view.** The unit's on-screen explanation of a command or value, which
the manual defers to for some details (for example `NTH`).

**Hypersynth.** A chord engine: up to six intervals from one note, each a
pair of detuned saws, plus a sub-oscillator (pp. 60-61).

## I

**Index.** In FM, the depth of modulation. On the M8 a modulator's LEV sets
it, so it controls brightness.

**Instrument.** A sound: an engine type plus its settings, four modulation
slots and a table. A project has 128 (p. 16).

**Instrument pool.** A view listing every instrument slot, for reordering
and quick mixer edits (p. 22).

**Inventory.** In the form method, the list of material a piece is built
from, under five headings: motifs, grooves, instruments, harmonic areas,
textures.

## L

**LEV.** An FM operator's level: loudness on a carrier, modulation index on
a modulator (p. 58).

**LFO.** A modulation type that cycles. Its shapes include triangle, sine,
ramps, squares, random and drunk, each with a faster "T" form; TRIG sets
whether it runs free, restarts on each note, holds or runs once (p. 18).

**Live mode.** A song-view mode for cueing, playing and stopping chains
track by track from anywhere in the song, entered with [SHIFT]+[LEFT]
(pp. 10-11). Week 10 uses it to audition section orders.

## M

**Macro (MOD1 to MOD4).** In the FM Synth, four values that each operator's
two MOD slots can route to its level, ratio, pitch or feedback (p. 58). The
instrument's modulation slots drive them; the exact destination names are a
bench test.

**Macrosynth.** An engine of 44 models, each with two controls, TIMBRE and
COLOR (pp. 52-53, 76-80). It includes drum, bell, plucked and chord models.

**Modulation slot.** One of four places per instrument for an envelope, LFO,
TRIG or TRACKING, each with a type and a destination (p. 18). A slot can
also modulate its neighbour's amount or rate.

**Modulator.** An FM operator that bends another operator's phase and is not
heard directly.

## N

**Named contrast.** In the form method, one of the dimensions in which two
adjacent sections differ, stated in the plan: pitch material, rhythm,
timbre, register, density, harmony, metre.

**Note-off.** The end of a note, entered as `OFF` in the note column or sent
by the `OFF` command (pp. 14, 72). Needed to release an ADSR.

## O

**One-page plan.** In the form method, the sections with bar counts, a
density curve, a register curve and one sentence per boundary, written
before sequencing.

**Operator.** One of the FM Synth's four oscillators, A to D, each with a
shape, RATIO, LEV, FB and two MOD slots (p. 58).

**OTT.** A parallel multi-band compressor on the main mix; from `80` upward
the dry signal fades out (p. 30).

## P

**Partial.** One sine component of a sound. Harmonic partials sit at whole
multiples of a fundamental; inharmonic ones do not.

**Phrase.** Sixteen steps of note, volume, instrument and three FX columns
(p. 14). On the default groove a phrase lasts one bar of 4/4.

**Phrase view.** The view that edits one phrase's steps (p. 14).

**Polymeter.** In this course, the same pulse grouped in cycles of different
lengths on different tracks, which realign after their least common
multiple. Week 6.

**Polyrhythm.** In this course, the same span divided into different numbers
of equal parts on different tracks. Week 5.

**Preview.** Playing an instrument from its own view with [EDIT]+[PLAY]
(p. 17).

## R

**RATIO.** An FM operator's frequency as a multiple of the played note
(p. 58).

**Register curve.** In a one-page plan, a graph of the pitch range in use
across the whole piece.

**Relative command.** A command that adds to a parameter's current value:
`01` to `7F` up, `FF` to `80` down. The change accumulates until the
instrument retriggers (p. 69).

**Render.** Writing the song, or part of it, to a wav file on the card,
mixed or as stems (p. 47).

**Repeat budget.** The largest number of times any phrase may sound
unchanged in succession in an etude. A change of transpose counts as a
change. It starts at 4 and falls to 2.

**Resample.** Rendering a selection straight into a new Sampler instrument,
to free tracks or turn a chord built across tracks into one stab (p. 48).

**Retrigger.** Restarting an instrument's note and envelopes: by a number in
the I column, or repeatedly with `RET` (pp. 69-70).

**Row.** One line of a phrase, chain, table, groove or the song, numbered in
hex from `0` (or `00` in the song).

## S

**Sampler.** The engine that plays wav files from the card; in this course,
only for resampling (pp. 54-57).

**Scale.** One of 16 per project: twelve intervals, each on or off, each
with a detune. Scales quantise transposition, note entry and some commands
(p. 28).

**Selection mode.** Entered with [SHIFT]+[OPTION], for copying, cutting,
pasting and transforming a block of cells (p. 7).

**Send.** One of three effects fed from every track: ModFX, delay and reverb
(pp. 36-37).

**Shared phrase.** A phrase named in more than one place. An asterisk by its
number marks it, and an edit reaches every use (p. 14).

**Sideband.** In FM, a partial created by modulation, at the carrier's
frequency plus or minus a whole multiple of the modulator's.

**Sketch area.** The rows below the end of the song, used for trying
arrangements without disturbing the piece (p. 10).

**Snapshot.** A stored copy of the song state, taken and recalled from the
mixer or project view (pp. 31, 39).

**Song.** Eight tracks side by side, each a column of up to 256 chain
numbers (p. 10).

**Step.** One row of a phrase, a 16th note on the default groove (p. 14).

**Stems.** A render with each track in its own file (p. 47).

## T

**Table.** Sixteen rows of transpose, volume and three FX columns that run
beside an instrument at their own rate, set by TABLE TIC or `TIC` (p. 24).
Each instrument has one; 128 more stand free.

**TABLE TIC.** The instrument setting for how fast its table advances: one
row per trigger at `00`, one row per given number of ticks from `01`, and
octave, velocity and note maps at `FC`, `FD` and `FE` (p. 24).

**Tick.** The sequencer's smallest unit of time. By default a quarter note
holds 24, so one tick lasts 2.5 / BPM seconds (p. 26).

**Track.** One of eight identical sequencer lanes. Each plays one note at a
time and keeps its own play position (p. 5).

**TRACKING.** A modulation type that maps note, velocity or velocity
takeover to a parameter between two values, for key scaling and
velocity-to-timbre (p. 18).

**TRANSP.** An instrument setting that switches off transposition for that
instrument, meant for percussion (p. 16).

**Transition chain.** In the form method, a chain composed for one join
between sections, usually a clone of the last chain with its final phrase
replaced.

**TRIG.** A modulation type: a two-way AHD fired by another instrument, or by
any instrument on a given track, for ducking and cross-track interaction
(p. 18).

**TSP.** Transpose. In a chain row, the semitones by which that phrase plays
shifted (p. 12); as a command, a shift of the whole song (p. 72).

## V

**Volume.** The V column of a phrase step, `00` to `7F`, default `64`
(p. 14). In a table, V multiplies the phrase volume (p. 24).

## W

**Wavsynth.** A wavetable and noise engine: nine base shapes and 61
wavetables of 64 waveforms each, with SIZE, MULT, WARP and SCAN (pp. 50-51,
82-89).
