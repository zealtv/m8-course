---
title: "Command quick reference"
order: 1
---
Every sequencer, mixer and common instrument command the course uses, one
line each, grouped by what it does musically. Page numbers point to the
manual edition named in the course notes (version 6.5.2). Where the manual
leaves a command's detail to the unit's on-screen help, this page says so.

A command occupies an FX column as three letters and a two-digit hex value:
`GRV 01`, `HOP 0B`. Which commands an FX column offers depends on the
instrument type on that step (p. 14). Most commands work in a table too,
some with different behaviour; the manual gives no full list of the
differences, so where this page names a table behaviour it comes from the
manual's own entry for that command.

> **Manual.** The command list, pp. 69-75; tables, p. 24.

## Reading the values

**Relative and absolute.** A relative command adds to a parameter's current
value: `01` to `7F` raise it, `FF` down to `80` lower it, and the change
accumulates until the instrument retriggers, either through a number in the
I column or through `RET`. An absolute command sets the value outright
(p. 69). Reading `FF` as −1 and `F4` as −12 follows from that rule; see the
[arithmetic appendix]({{ '/appendices/arithmetic/' | url }}) for the sum.

**Two-digit commands.** Where a value splits into two digits, written *xy*,
each digit does its own job: `ARP 47` adds 4 and 7 semitones, `CHA 8F`
gives one probability to what sits left of the command and another to what
sits right.

**Commands that persist.** `GRV`, `REP`, `TIC` and every mixer and effect
command leave something changed after the step that carries them. The
change holds until another command sets it back. Plan the reset as part of
the form.

## Time

Commands that change when or how long things sound.

| Command | What it does | Page |
|---------|--------------|------|
| `GRV xx` | Switches this track to groove *xx*; holds until the next groove command on the track. | 70 |
| `GGR xx` | Switches every track to groove *xx* at once. | 70 |
| `DEL xx` | Delays the whole row by *xx* ticks. | 69 |
| `MTT xx` | Nudges the row by eighths of a tick, early or late; the first row of a phrase cannot move early. | 72 |
| `RET xy` | Retriggers the note. With *y* non-zero, every *y* ticks, *x* ramping the volume down (`0`-`7`) or up (`8`-`F`); with *y* at zero, once after *x* ticks. | 70 |
| `KIL xx` | Cuts the note dead after *xx* ticks. | 70 |
| `OFF xx` | Sends a note-off after *xx* ticks, which lets an ADSR enter its release. | 72 |
| `TPO xx` | Sets the tempo; the help text converts the value for you. | 72 |

Tempo also responds to tapping [EDIT] on TEMPO in the project view (p. 38).

> **Bench test.** Does a `GRV` on row `0` take effect for row `0` itself, or
> from the next row? Week 5 asks the same question; record the answer once.

## Pitch

Commands that move, bend or decorate pitch, and the scale commands that
constrain it.

| Command | What it does | Page |
|---------|--------------|------|
| `TSP xx` | Transposes the whole song, as the project TRANSPOSE setting does. | 38, 72 |
| `ARP xy` | Plays a fast three-note arpeggio: the note, the note + *x*, the note + *y* semitones. | 69 |
| `ARC xy` | Sets the arpeggio's mode (*x*) and its speed in ticks (*y*). | 69 |
| `PSL xx` | Slides from the previous pitch to this one over *xx* ticks. | 71 |
| `PBN xx` | Bends pitch continuously: `00`-`7F` upward, `80`-`FF` downward. | 71 |
| `PVB xy` | Pitch vibrato, speed *x*, depth *y*. | 71 |
| `PVX xy` | A stronger vibrato in the same form as `PVB`. | 71 |
| `PIT xx` | Offsets the instrument's pitch by *xx* semitones. | 75 |
| `FIN xx` | Fine-tunes within a semitone, up or down. | 75 |
| `SCA xy` | Sets this track's key (*x*) and scale (*y*). | 71 |
| `SCG xy` | Sets key and scale for the whole song. | 71 |

Chain TSP, in the chain's second column, transposes one phrase in semitones
without a command (p. 12). Inside a scale, project and chain transpose, note
entry, `ARP` and `PIT` all snap to the scale (p. 28), so a transposed chain
should move by scale degree.

> **Bench test.** Transpose a chain inside a scale by `02` and listen: does
> each note move two scale degrees or two semitones, and what happens to a
> note that lies outside the scale? Week 7's lab asks for this.

## Variation and chance

Commands that make a phrase play differently on different passes.

| Command | What it does | Page |
|---------|--------------|------|
| `CHA xy` | In a phrase: the chance that what sits left (*x*) and right (*y*) of the command happens, from `0` never to `F` always. | 69 |
| `RND xy` | Randomises the previously active command; *x* and *y* set the range for its left and right digits. | 70 |
| `RNL xy` | Randomises the command to its left; in FX column 1 it randomises note and instrument instead. | 70 |
| `REP xx` | Repeats the last command on each later step, adding *xx* each time, until a new command or `REP 00`. | 70 |
| `RTO xx` | After `REP`: the value at which the repetition stops. | 71 |
| `NTH xy` | Skips what sits left (*x*) or right (*y*) according to how many times the phrase has looped. | 71 |
| `SED xx` | Sets the track's random seed, so the same "random" results come back every time. | 71 |
| `INS xx` | Triggers or switches to instrument *xx* from an FX column. | 70 |
| `NXT xx` | Plays instrument *xx* on the track to the right, with this step's note and velocity; not available on track 8. | 72 |

A `^^` in an FX column marks a `REP` still running from an earlier phrase
(p. 70).

> **Bench test.** The manual leaves the meaning of each `NTH` value to the
> unit's help view (p. 71). Copy the table of values out by hand, with your
> firmware version, before you plan a variation on it. Week 7's lab asks
> for this.

## Structure

Commands that change which row, phrase or song position plays next.

| Command | What it does | Page |
|---------|--------------|------|
| `HOP xy` | In a phrase: jumps to row *y* of the next phrase, cutting the rest of this one. `HOP FF` stops the track. | 70 |
| `SNG xx` | Moves this track to a song row counted from its current position; ignored if that row cannot play. | 71 |
| `RMX xy` | Sets the phrase position (*y*) of tracks to the left of this one; *x* chooses which tracks. | 71 |

`HOP` in a phrase shortens the phrase, which gives a cycle shorter than 16
steps for polymeter.

> **Bench test.** Does the row that carries `HOP` sound before the jump?
> On that answer a `HOP` on row `0B` gives 12 steps or 11. Week 1's lab
> settles it.

> **Bench test.** The manual does not say how the first digit of `RMX`
> selects tracks. Week 6's lab asks for this.

## Tables

Commands that assign, run and steer tables. A table plays beside an
instrument at its own rate and, unlike a phrase, does not follow tempo or
groove (p. 24).

| Command | What it does | Page |
|---------|--------------|------|
| `TBL xx` | Assigns table *xx* to the instrument. | 72 |
| `TBX xx` | Runs table *xx* on the track as an auxiliary table, in parallel with the instrument's own; `TBX 00` stops it. | 72 |
| `THO xx` | Jumps the table to row *xx*, moving every column together. | 72 |
| `TIC xx` | Sets the table's tick rate; each FX column of a table can run at its own rate. On the last row it sets the rate for every row. | 24, 72 |
| `HOP xy` | In a table: jumps to row *y*, *x* times. | 70 |
| `DEL xx` | In a table: delays the table's play head. | 69 |
| `CHA xx` | In a table: one probability, `00`-`FF`, for everything to its left. | 69 |
| `NTH xx` | In a table: skips everything to its left according to the loop count. | 71 |
| `RNL xy` | In FX column 1 of a table: randomises note and velocity. | 70 |
| `MTT xx` | No effect in a table. | 72 |

A `TIC` on the same row as a `TBX` sets the auxiliary table's rate (p. 72).
The TABLE TIC setting in the instrument view does the same job as `TIC` for
the instrument's own table (p. 24).

Special values of TIC (p. 24):

| Value | The table advances |
|-------|--------------------|
| `00` | one row each time the instrument triggers |
| `01`-`FB` | one row every that many ticks |
| `FC` | to the row chosen by the playing octave |
| `FD` | to the row chosen by velocity |
| `FE` | to the row chosen by the note; `HOP 00` on row `0C` limits it to twelve notes |
| `FF` | at 200 Hz |

`TIC 00` turns a table into a per-trigger sequence: each new note meets the
next row, so a five-row table cycles every five notes, whatever the phrase
does.

## Mix and effects

Commands that automate the mixer and the send effects over a form
(pp. 73-74). They change the values shown in the mixer and effect views, so
a change stays until another command sets it back.

The manual groups these commands, and the notes record the groups. Where the
meaning of a single letter does not appear in the notes, the right-hand
column gives our reading of the letter against the parameter names on the
effect pages (pp. 36-37). Treat those readings as guesses: check each on
your unit with the help view before you automate with it.

| Command | What it does | Source |
|---------|--------------|--------|
| `EQM xx` | Assigns EQ slot *xx* to the main mix. | pp. 73-74 |
| `EQI xx` | Assigns EQ slot *xx* to the instrument. | pp. 73-74 |
| `VMV xx` | Main volume. | pp. 73-74 |
| `VT1 xx` to `VT8 xx` | Volume of track 1 to 8; track volume also scales that track's sends (p. 30). | pp. 73-74 |
| `VMX xx` | Return level of the ModFX send. | pp. 73-74 |
| `VDE xx` | Return level of the delay send. | pp. 73-74 |
| `VRE xx` | Return level of the reverb send. | pp. 73-74 |
| `XMT`, `XMM`, `XMF`, `XMW`, `XMR` | ModFX parameters: by analogy with the delay and reverb letters, probably type, modulation depth, modulation frequency, width and reverb send. Check. | pp. 73-74; reading ours |
| `XDT xx` | Delay time, probably. | pp. 73-74; reading ours |
| `XDF xx` | Delay feedback, probably. | pp. 73-74; reading ours |
| `XDW xx` | Delay width, probably. | pp. 73-74; reading ours |
| `XDR xx` | Delay's send to the reverb, probably. | pp. 73-74; reading ours |
| `XRS xx` | Reverb size, probably. | pp. 73-74; reading ours |
| `XRD xx` | Reverb decay, probably. | pp. 73-74; reading ours |
| `XRM xx` | Reverb modulation depth, probably. | pp. 73-74; reading ours |
| `XRF xx` | Reverb modulation frequency, probably. | pp. 73-74; reading ours |
| `XRW xx` | Reverb width, probably. | pp. 73-74; reading ours |
| `XRZ xx` | Reverb freeze. | pp. 73-74 |
| `DJC`, `DJR`, `DJT` | The DJ filter: probably cutoff, resonance and type. | pp. 73-74; reading ours |
| `IVO`, `IMX`, `IDE`, `IRV` | The input: probably its volume and its sends to ModFX, delay and reverb. | pp. 73-74; reading ours |
| `IV2`, `IM2`, `ID2`, `IR2` | The same four for the second input. | pp. 73-74; reading ours |
| `USB` | Listed with the input commands; the notes leave its function open. | pp. 73-74 |

Since firmware 6.6.1, tapping [EDIT] on a parameter in the mixer or an
effect view sets that parameter's command as the default for the next FX
cell you enter, which saves looking the letters up (firmware changelog, 6.6.1).

> **Headless.** A headless unit probably has no line input or microphone;
> its audio input arrives from the host over USB. The input commands may
> therefore act differently or not at all. Check this on your unit; week 11
> sets it as a bench test.

## Modulation and instrument parameters

Commands that reach an instrument's envelopes, LFOs and settings from a
phrase or table.

| Command | What it does | Page |
|---------|--------------|------|
| `EA` | An envelope's amount, probably. | 75; reading ours |
| `AT` | An envelope's attack, probably. | 75; reading ours |
| `HO` | An envelope's hold, probably. | 75; reading ours |
| `DE` | An envelope's decay, probably. | 75; reading ours |
| `ET` | Retriggers an envelope. | 75 |
| `LA` | An LFO's amount, probably. | 75; reading ours |
| `LF` | An LFO's frequency, probably. | 75; reading ours |
| `LT` | Retriggers an LFO, probably, by analogy with `ET`. | 75; reading ours |

The notes record these as two-letter stems. A command takes three
characters, so the third presumably picks the modulation slot: check on
your unit how the slot gets chosen.

Beyond these, almost every instrument parameter has a command of its own.
Highlight a parameter in the instrument view and move to the phrase or the
table: that parameter's command becomes the default for the next FX cell
you fill (pp. 17, 75). This works for filter CUTOFF and RES, the amp, the
sends and each engine's own controls.

> **Bench test.** The FM Synth's own command names (for RATIO, LEV, FB and
> the operator MOD macros) do not appear in the notes. Use the trick above
> on each FM parameter in turn and list the names the unit offers, with
> your firmware version. Week 3's lab asks for this.
