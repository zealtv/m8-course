---
title: "Mix, effects and resampling"
week: 11
strand: production
outcomes: [8]
needs: [10]
duration_target: "at least 3 min 30 s"
repeat_budget: 2
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "30-37, 47-48, 54-57, 73-74"
---

## Overview

Until now the mix has been whatever the instruments did on their own. This week makes it a layer of the composition: levels, EQ and the three sends change at the boundaries your week-10 plan names, and the plan gains a third curve. Resampling buys back tracks, so a dense section can hold more voices than eight tracks allow.

By the end of the week you can:

- trace the signal path and stage gain from the loudest section down;
- give each instrument an EQ that follows its register and role;
- use the delay, reverb and ModFX sends as material, not as polish;
- automate the mix over the form with commands, and reset everything you change;
- duck a sustained layer under the kick with a TRIG envelope;
- resample a multi-track passage to one track and rebuild the section with the freed tracks;
- render, and bundle a project that now depends on a sample file.

## Before you start

You need week 10's piece: project, plan and listening-review annotations. Save the project under a new name, since this week changes it throughout. You also need the kit from week 4 (slots `30`-`3A`), week 9's voice-budget table, week 5's tick arithmetic and week 7's `REP`.

> **Manual.** Mixer and effects, pp. 30-37; Render view and selection to sample, pp. 47-48; Sampler, pp. 54-57; mixer and effect commands, pp. 73-74. For the instrument's own mixer and the TRIG envelope, p. 51 and pp. 18-21; for bundling, p. 39.

> **Starting point.** Nobody has tried the procedures in this module on a unit, and the notes record the names of the mixer and effect commands but not their value scales. Every value in this module marks a position or a direction, not a setting; lab task 1 finds the real ones.

## Concepts

### The signal path, and where to stand

The manual's mixer diagram gives one path (p. 30). The eight tracks, the inputs and the three send effects sum; the sum passes through OTT, the main EQ, the limiter, the DJ filter and the main volume, in that order. Before that, each instrument has its own stage: AMP drives the signal, LIM chooses what happens above the limit (CLIP, SIN, FOLD, WRAP and the POST modes), and the instrument's mixer sets DRY and the three sends, MFX, DEL and REV (p. 51). Its EQ sits among the general settings (p. 16).

A track's volume also scales its sends (p. 30). So the instrument's DRY and sends balance a sound against its effects, and the track volume places that bundle in the mix.

**Gain staging** means setting levels so that no stage clips by accident and the limiter does only what you ask of it. Work in this order:

1. **Instruments first.** Set AMP and LIM in each instrument, then leave them. LIM decides what happens to the signal above the limit, so it belongs to the patch, not the mix.
2. **The loudest section next.** Loop the song rows of the high point on your density curve. Set the track volumes there, watching the limiter and scope view (pp. 34-35), until every layer you want is present and the limiter is not working constantly. A quiet section mixed first leaves no room for the peak.
3. **Then the thinnest section.** Decide whether it should be quieter, or as loud with fewer layers. That is a compositional choice, and it goes on the plan.
4. **The limiter last.** The view offers ZOOM, PEAK, SOFT CLIP, ATK and REL, the DJ filter's type and resonance, and OTT's amount, TIME and COLOR (pp. 34-35). The notes do not record what each limiter setting does: read the help text first.

OTT is parallel multi-band compression on the whole mix; from `80` up the dry signal fades out (p. 30). The notes record no command for it, so it stays one setting for the piece; set it after the levels.

> **Headless.** Audio leaves a headless unit through the host over USB, so the host's volume and any processing sit after the M8's limiter. Keep the host's level fixed while you stage gain, and judge by the scope. Audio in arrives as USB audio from the host; a line input and microphone are likely absent (notes, section 9, [untested]). Lab task 1 checks.

> **Try it.** Loop your week-10 high point and watch the limiter and scope view through one pass. Pull every track volume down by the same amount and watch again. Write down which you would rather start from.

### EQ that follows the register curve

Every EQ has three bands, each with GAIN, FREQ, Q, a TYPE (low cut, low shelf, bell, band-pass, high shelf, high cut, all-pass) and a MODE: stereo, mid, side, left or right (pp. 32-33). Firmware 6.6.0 added a spectrum display [CL 6.6.0]. EQs sit in each instrument, on the main mix after OTT, and at the input of each send effect (pp. 32-33, 36-37).

Your week-10 register curve already says where each layer lives, so let it set the instrument EQs:

- **Cut below the part.** Give every instrument except the bass and the kick a low cut a little under its lowest note, so the bottom octaves belong to those two.
- **One bell per conflict.** Where two layers share a register, cut a little from one where the other has its weight, and leave the rest alone. The spectrum display helps find the overlap.
- **Mid and side.** The notes record no pan control (open question 22), so MODE and the effects' WIDTH are what you have for placing things across the field. A low cut on the side channel alone keeps the low end in the middle.

EQs appear to live in numbered slots: `EQI` assigns an EQ slot to an instrument and `EQM` one to the mix (pp. 73-74), and CLEAR UNUSED frees unused EQs (p. 38). So a phrase can swap an EQ: give the mallet a second, narrower EQ, and `EQI` at a section's head changes its colour without touching the patch. What `EQI`'s value selects, and whether instruments can share a slot, check on your unit.

A send's input EQ shapes what goes into the effect: a low cut at the reverb's input keeps the bass out of the reverb whatever its REV send says.

> **Try it.** Beside your register curve, write each instrument's lowest note anywhere in the piece. Set two instruments' low cuts just under those notes and listen to the section where they meet.

### The three sends as material

The send effects are a ModFX (chorus, phaser, flanger, and a comb filter since 6.6.0 [CL 6.6.0]), a ping-pong delay and a reverb (pp. 36-37). The delay has TIME L:R in beats and fractions, FEEDBACK, WIDTH and a REVERB SEND of its own; the reverb has SIZE, DECAY, SHIMMER, MOD DEPTH, MOD FREQ and WIDTH. Each return has a level that commands reach (`VMX`, `VDE`, `VRE`). Treat each effect as a layer with a part.

**The delay as a rhythm.** Its time counts beats, so it plays a rhythm against the source. Three quarters of a beat is a dotted 8th: 18 ticks, three steps on the default groove. The echoes land at steps 3, 6, 9 and 12, three against the beat's four, and meet the beat again after the least common multiple of 3 and 4: 12 steps, three beats. At 100 BPM a tick lasts 60 / (100 × 24) = 0.025 s, so the delay is 18 × 0.025 = 0.45 s, three quarters of the 0.6 s beat. Week 5's polyrhythm, made by an effect. How TIME L:R relates the two sides, read on the unit.

**The reverb as density.** A long reverb carries each note into the gap after it, adding to density without a track. A common choice runs it against density, wetter on thin sections and drier on dense ones, to keep dense passages legible. Its freeze (`XRZ`, pp. 73-74) might let a week-10 silence join hold a sound; test what it holds and how it releases first.

**A send-only voice.** Set an instrument's DRY to its lowest and its REV or DEL send up, and you hear only the effect's return: a pad that exists only as reverb, or a part heard only as echoes. Whether DRY at its lowest silences the dry signal, check.

> **Try it.** Send one mallet phrase to the delay with TIME at three quarters of a beat, against straight hats. Write the first two beats' onsets as a `cycles` block, tune and echoes on separate lines, and check that what you hear matches.

### Automating the mix over the form

Pages 73-74 list commands for nearly everything in the mixer and effect views:

| Group | Commands |
|-------|----------|
| EQ | `EQM`, `EQI` |
| Volumes | `VMV` main, `VT1`-`VT8` tracks, `VMX`, `VDE`, `VRE` send returns |
| ModFX | `XMT`, `XMM`, `XMF`, `XMW`, `XMR` |
| Delay | `XDT`, `XDF`, `XDW`, `XDR` |
| Reverb | `XRS`, `XRD`, `XRM`, `XRF`, `XRW`, `XRZ` (freeze) |
| DJ filter | `DJC`, `DJR`, `DJT` |
| Inputs | `IVO`, `IMX`, `IDE`, `IRV`; second input `IV2`, `IM2`, `ID2`, `IR2`; `USB` |

The initials suggest which parameter each drives (`XDF` beside FEEDBACK), but the notes record only names, not meanings or value scales. Since 6.6.1, [EDIT] on a mixer or effect parameter captures its FX command [CL 6.6.1]: set a parameter by ear, capture it, and you have the command and value. How the capture reaches a phrase, check on your unit.

**These values persist.** A mixer or effect command changes the value shown in the view, so the change stays until something sets it back (pp. 73-74). That is week 10's lesson about `TPO`, `TSP`, `SCG` and `GRV` at a larger scale: a piece that raises the reverb in C starts its second play, or its next render, with C's reverb.

So extend week 10's **reset row** (the persistent commands set again at the top of the song) to every mixer and effect value the piece changes anywhere. Then give every section a **section head**: on the first row of its first phrases, set every automated value to that section's state, changed at this boundary or not. Playing from a section's first row, as you will constantly while mixing, then gives that section's mix. And the mix becomes a table on the plan, one row per section and one column per value, from which you can read a third curve.

The cost is commands: three FX columns per phrase row. Two rules keep it tidy:

- **Put `VT`*n* on track *n*.** The notes do not say whether a track-volume command acts from any track; on its own track it works either way.
- **Put the global values on one track,** track 1 say. If nothing else sounds yet, the head can spill over the first two or three rows of its phrase.

One trap: a track resting at a section head has no phrase of its own, and the rest chain `FE` is shared by every rest in the piece, so commands written into it fire everywhere. Give the resting track its own chain at that row.

For a change within a section, `REP` repeats a command with an amount added each step (p. 70; week 7); whether it ramps a mixer command, lab task 2 checks. Without it, a ramp becomes a terrace: a new value at each chain's head.

> **Try it.** Capture the reverb return with [EDIT] at an obvious value and place it on row `0` of a phrase mid-song. Play from the top through it, stop, and play from the top again. Then add the reset and repeat.

### Ducking with a TRIG envelope

A TRIG modulation slot is a bipolar attack-hold-decay envelope fired not by the instrument's own notes but by another instrument (`00`-`7F`) or by any instrument on a track (`80`-`87`) (pp. 18-21). Aimed at a pad's amp level with a negative amount, it pulls the pad down at each kick and lets it back over the decay: sidechain-style ducking inside the instrument.

```patch
# INST 12  "PAD"   (track 5, the engine as you built it: duck under the kick)
SLOT4  TRIG  DEST: (amp level)  SRC 30  AMT (negative)  ATK 00  HOLD 00  DEC 0C
```

- **SRC `30`**, the kick's slot, not `83`, the drum track: a track source fires on any instrument on that track, so `83` would duck under the hats too. (That `80`-`87` stand for tracks 1-8 in order, confirm.)
- **ATK `00`, HOLD `00`:** the duck arrives with the kick.
- **DEC `0C`:** if DEC counts ticks one for one, as the AHD envelopes did in weeks 2 and 4, 12 ticks, 2 steps, 12 × 0.025 = 0.3 s at 100 BPM. Against a kick every beat (24 ticks), the pad recovers over the first half of each beat. A starting point.
- **AMT negative:** read off the slot how the unit shows it. Start shallow.

The duck follows tempo, since it counts ticks. Fixes to TRIG envelopes landed between 6.6.2 and 6.6.4 A [CL]. A TRIG from the bass onto the mallet makes one layer give way at every bass note: counterpoint written into the patch.

> **Try it.** Add the slot to a sustained instrument over a four-on-the-floor kick. Then set SRC to the drum track's number and listen for what else now ducks it.

### Resampling, rendering and bundling

**Selection to sample** renders part of the song into a new instrument (p. 48). Select song rows in the Song view and double-tap [EDIT]. QUICK RENDER works offline; REALTIME also records the inputs; EXTERNAL ONLY records an External Instrument. The result arrives as a new Sampler instrument, which streams mono or stereo wav files from the card, with SLICE, PLAY modes, START, LOOP ST., LEN, DETUNE and DEGRADE (pp. 54-57).

Its use here is **freeing tracks**: a chord voiced across three tracks becomes one track, and two tracks come free. The price is that the passage stops being editable. So:

- **Finish the passage first.** Balance its voices before you resample; its overall level you can still set with its new track's volume.
- **Keep the source** in the sketch area from row `80`. The source chains stay in use, CLEAR UNUSED (p. 38) leaves them, and you can resample again.
- **Check what came out.** The notes do not record whether it renders only the selected tracks, includes the sends, limiter or automated mix state, comes out mono or stereo, or which slot it takes. If the reverb is in the sample, the new instrument's REV send doubles it; a slot among `30`-`3A` collides with the kit.

> **Headless.** REALTIME records the inputs, which on a headless unit arrive as USB audio from the host (notes, section 9). Whether REALTIME records that stream, check. Use QUICK RENDER this week.

**Rendering.** The Render view (p. 47) takes a start and last song row, repeats, a track selection, each send and the limiter on or off, 16 or 32 bit, and MIXED or STEMS; files land in `/Renders` on the card. A MIXED render with everything on is your listening copy. What a stem holds, and whether the returns get stems, check on your first stem render. Fixes to render length and tempo alignment landed between 6.6.2 and 6.6.4 A [CL]. For a reverb tail, keep week 10's resting row after the last notes (open question 26).

**Bundling.** A project file does not contain its samples (p. 39), so after a resample, copying the project alone loses the passage. BUNDLE in Project view gathers project, samples and instruments into one folder (p. 39). Bundle after every resample.

> **Headless.** Renders and bundles land on the card in the board's own slot, with the same formatting and speed advice (notes, section 9, [HL]). Plan how you will get files off it before the listening review.

> **Try it.** QUICK RENDER one song row of a short song. Note the new instrument's slot and TYPE, whether the sample is mono or stereo, and its length against the row's length in seconds.

## Worked examples

### A mix plan for an arch

Week 10's Plan X: an arch, A B C B′ A′, 88 bars at 100 BPM in song rows `00` to `15`, a bar lasting 240 / 100 = 2.4 s. Tracks: 1 bass, 2 mallet, 3 piano, 4 drums, 5 pad. Seven values change: the reverb and delay returns (`VRE`, `VDE`), three track volumes (`VT2`, `VT3`, `VT5`), the mallet's EQ (`EQI`) and the freeze (`XRZ`).

> **Starting point.** The numbers in this table and the blocks below stand in for values you capture with [EDIT]. They show only where a value goes and whether it rises or falls; the notes record no scale for these commands.

| Section | Rows | Density (week 10) | `VRE` | `VDE` | `VT2` | `VT3` | `VT5` | Mallet EQ | Why |
|---------|------|-------------------|-------|-------|-------|-------|-------|-----------|-----|
| A | `00`-`03` | 1 1 2 2 | 30 | 00 | 60 | 60 | 00 | 01, full | thin: the reverb fills the space |
| B | `04`-`07` | 3 3 4 4 | 18 | 28 | 60 | 50 | 00 | 02, narrow | denser and swung: drier; the tune gains its dotted-8th echo |
| C | `08`-`0D` | 2 3 4 5 5 6 | 40, 30, 20 | 10 | 50 | 60 | 60 | 01 | opens wet; dries by terraces towards the high point |
| B′ | `0E`-`11` | 4 4 3 3 | 18 | 28 | 50 | 68 | 50 | 02 | the tune moves to the piano, so the piano comes up |
| A′ | `12`-`15` | 2 2 1 1 | 30, 48 | 00 | 60 | 60 | 00 | 01 | wetter than A, then the freeze on the last D |

Read down the `VRE` column for the third curve: it moves against density, lowest at the high point. A′ ends wetter than A began, so the mix joins the return with difference.

The terraces fall on chain boundaries. Row *r* starts at bar 4*r* + 1, so C's steps at rows `08`, `0A` (10) and `0C` (12) fall at bars 33, 41 and 49, the last meeting the high point; A′ steps up at row `14` (20), bar 81.

The reset row is A's section head. Only the bass plays at row `00` (density 1), so the global values go on track 1's first phrase:

```phrase
# PHRASE 00  (track 1, first phrase of chain 10: the reset row and A's head)
0  D-3 70 00  VRE 30   VDE 00   .          ; the bass's first note
1  .   .  .   .        .        .          ; XRZ here, with its "off" value
```

Row `1` takes `XRZ` with the value the help text gives for off. Tracks 2, 3 and 5 rest at row `00`, so each gets a resting chain of its own, `20`, `30` and `50`, whose one phrase holds only `VT2 60`, `VT3 60` or `VT5 00` on row `0`; `FE` stays empty. `EQI 01` goes on row `0` of the mallet's first playing phrase, at song row `02`. If lab task 2 shows that `VT` commands act from any track, the volumes can move to track 1's row `1` and the resting chains revert to `FE`.

C's head, on the first phrases of row `08`'s chains:

```phrase
# PHRASE 18  (track 1, first phrase of chain 18: C's head)
0  D-3 70 00  VRE 40   VDE 10   .         ; every global value restated
```

```phrase
# PHRASE 58  (track 5, first phrase of chain 58: the pad enters)
0  D-4 60 12  VT5 60   .        .         ; the pad, with its TRIG duck
```

Tracks 2 and 3 have chains of their own at row `08`, playing or resting, whose first phrases carry `VT2 50` with `EQI 01`, and `VT3 60`. Count: 2 + 2 + 1 + 1 = 6 commands, every automated value but the freeze, which only A′ changes and so needs setting only there and at the top.

Play from row `08`, then from row `00` twice through: all three starts should give their section's state.

### Resampling the high point's pad

Suppose your high point, rows `0C`-`0D`, bars 49 to 56, uses all eight tracks, with the pad's chord voiced one note per track on 5, 6 and 7, as in week 9. The voice budget before:

| Rows | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Tracks | Voices |
|------|---|---|---|---|---|---|---|---|--------|--------|
| `0C`-`0D` | bass | tune | M3 | drums | pad | pad | pad | M3 echo | 8 | 8 |

Week 10 had C grow into the tune in canon, and no track is left for the canon's second voice. On the copy of the project:

1. Copy song rows `0C`-`0D` of tracks 5-7 to rows `80`-`81`, with an empty row `82` after them. The source now lives in the sketch area.
2. Select rows `0C`-`0D`, tracks 5-7, double-tap [EDIT] and choose QUICK RENDER. The passage lasts 8 bars, 8 × 2.4 = 19.2 s; check that the sample does too.
3. Find the new Sampler instrument and note its slot. If the sample includes the reverb, set its REV send to its lowest; if not, set its sends to match the pad's.
4. Find which note plays the sample at its recorded pitch (the notes do not say) by playing it against rows `80`-`81`. If the Sampler has the engines' TRANSP. setting (p. 16), turn it off, so a later `TSP` does not transpose a passage that already carries its pitch.
5. Write a new chain for track 5 at row `0C`: one phrase with that note on row `0`, the rest of the chain empty. At row `0D`, the rest chain `FE`. Check that the sample runs on through row `0D` and that nothing stops it; then check that it stays aligned with the bass at the end of bar 56.
6. Clear rows `0C`-`0D` on tracks 6 and 7.

Tracks 6 and 7 are now free for those 8 bars. Spend them on the plan: the canon's follower on track 6, entering at row `0C`'s second phrase, one bar behind the tune, and a third canon voice on track 7 from row `0D`, bar 53.

| Rows | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Tracks | Voices |
|------|---|---|---|---|---|---|---|---|--------|--------|
| `0C` | bass | tune | M3 | drums | pad sample (3) | follower | . | M3 echo | 7 | 9 |
| `0D` | bass | tune | M3 | drums | pad sample (3) | follower | third voice | M3 echo | 8 | 10 |

Check: row `0C` has 7 tracks, one carrying 3 voices, so 6 + 3 = 9 voices; row `0D` adds the third voice, 7 + 3 = 10. From now on, count voices as well as tracks on the density curve.

`VT5` still scales the new track. The pad's TRIG duck, if the sample captured it, can no longer change; to change it, resample again from the sketch rows. Then bundle (p. 39).

## Lab

Allow 1 h 45 min. Work on the copy of the week-10 project.

1. **Bench test 11, headless only** (10 min). If you use a standard unit, add these minutes to task 3.
   - (a) Note any line-input, microphone or TRS MIDI sockets on the board, and whether the display client offers anything touch-like.
   - (b) Play audio from the host into the unit's USB audio input and watch the mixer's input channels.
   - (c) With it playing, place `IVO` with a high value, then a low one, and listen whether the input follows. Note whether `USB` appears as a control of its own.

   *Product:* a results-record line with the firmware version, for open question 11.

2. **Commands and persistence** (15 min).
   - (a) Capture a track volume, the reverb return and a delay parameter with [EDIT]; note each command, its value and how it reached the phrase.
   - (b) Does `VT5` placed on track 1 change track 5's volume?
   - (c) Does `REP` beside `VRE` ramp the return?
   - (d) Set `VRE` mid-song and play from the top twice: does it persist?

   *Product:* results-record lines (a) to (d), and the value scales you found.

3. **Mix the week-10 piece** (30 min).
   - (a) Stage gain from the high point, as in the first Concepts section.
   - (b) Give every instrument an EQ from its lowest note.
   - (c) Draw up the mix-state table: a row per section, a column per automated value, and a reason.
   - (d) Write the reset row and the section heads.

   *Product:* the table on the plan, and a project in which playing from the start of any section gives that section's mix.

4. **Sends and ducking** (15 min). Give one sustained layer a TRIG duck from the kick's slot. Give one part a delay timed in steps that relates to the groove, and write its arithmetic as in Concepts. Try one send-only voice.
   *Product:* the TRIG slot as a patch block with its reasons; the delay's arithmetic; one line on whether the send-only voice stays in the piece.

5. **Resample and rebuild** (35 min). Choose one chordal passage spread over two or more tracks and follow worked example 2, checking pitch, length, sends and alignment. Rebuild the section with the freed tracks, by the plan, render it, and bundle.
   *Product:* the voice budget before and after, results-record lines on what the sample contained (tracks, sends, mono or stereo, slot), and the bundle.

## Etude

**Brief.** Revise your week-10 piece so that its mix moves with its form: every section has a mix state the plan names, and the effects take part in at least one boundary and one return.

**Forces.** The week-10 tracks and instruments, plus the resampled passage from lab task 5 and the parts it made room for.

**Constraints.**

- A mix-state table, one row per section, and a third curve drawn from it.
- A reset row and a section head at every section, covering every automated value, so that starting from any section gives its state.
- At least one boundary sentence names a mix change among its dimensions, and at least one return differs from its source in the mix as well as the notes.
- One send used as material: a delay rhythm, a send-only voice, or a reverb freeze across a join.
- One TRIG duck, with its reason on the plan.
- The resampled passage, its freed tracks in use, and the source kept in the sketch area.
- Gain staged from the high point; a MIXED render with the limiter on; the project bundled.

**Duration target.** As week 10: at least 3 min 30 s, 210 s. At one tempo, 210 × BPM / 240 bars, rounded up: 88 bars at 100 BPM (88 × 2.4 = 211.2 s), plus any resting rows for a tail.

**Repeat budget.** 2.

**Order of work.** About 2 hours:

| Minutes | Task |
|---------|------|
| 20 | the mix-state table and the third curve, on paper |
| 15 | reset row and section heads, with any resting chains they need |
| 45 | the automation, section by section, high point first |
| 15 | the joins and the ending: effects across boundaries, the tail |
| 10 | play from the top twice, then from each section's first row |
| 10 | render and bundle |
| 5 | the change note |

**Plan.** The week-10 plan, revised: the mix-state table, the third curve, the rebuilt section's voice budget, and mix changes added to the boundary sentences, in a different colour.

**Change note.** Up to ten lines, each a change and its reason, notes and sections included: "C's reverb return falls by terraces, so the high point sits drier than its approach."

**Hand in to yourself.** The bundle, a render, the revised plan, the change note, and three lines of reflection: which mix change did most for the form, which could go, and whether the week-10 annotations got their answer.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, noting times. Convert times to bars (bar = seconds × BPM / 240) and annotate the revised plan beside last week's annotations. Thirty minutes in all.

1. Where did the mix draw your attention to itself, as a change rather than as part of the music? Was that a boundary you intended to mark?
2. Did the dense sections stay legible? Name the layer you lost first.
3. Compare the week-10 render at the same three moments, one per section type. Which changes made the form clearer, and which only made it different?
4. Was the resampled passage audible as a seam, at its start, its end, or anywhere it meets live tracks?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A mix-state table exists, but the piece departs from it, or the change note is missing. | The table, the third curve and the change note match the piece, and every departure has a reason. |
| Technique of the week | Some values are automated, but a second play, or playing from mid-song, starts in the wrong state; or the resampled passage doubles its effects or drifts. | Every automated value is reset and restated at each section head; a send works as material; the duck and the resample are checked and documented; the project is bundled. |
| Development | The mix stays fixed while sections change, or a phrase exceeds the budget of 2. | The mix changes at boundaries the plan names, a return differs in its mix, and the budget holds across at least 3 min 30 s. |
| Sound | Layers mask each other in the dense sections, or the limiter is working throughout. | Each layer stays audible at the high point, registers are kept apart by EQ, and effect changes sound like decisions. |

## Going further

- Resample a single chord and play it as a stab across a phrase, with the Sampler's START and SLICE settings choosing where it begins. Note which settings keep it in time.
- Plan a piece whose form the mix alone carries: one loop, eight sections differing only in levels, sends and EQ.
- Listen to a dub mix of your choice, with the delay and reverb returns in mind, and write a section table in which the effects are the instruments.

## Summary

- The path runs from instrument (AMP, LIM, DRY and sends) through track volume, which scales the sends, to OTT, main EQ, limiter, DJ filter and main volume.
- Stage gain from the high point down; set EQ from each instrument's lowest note and role.
- Delay, reverb and ModFX are layers: a rhythm, a register, a voice heard only as its effect.
- Mixer and effect values persist, so every automated value gets reset at the top and restated at each section head.
- TRIG envelopes duck one instrument under another; resampling buys back tracks at the cost of editability, so keep the source and bundle.

Week 12 asks for mix automation tied to the form as one of the final piece's five requirements: this week's table and section heads are the method.
