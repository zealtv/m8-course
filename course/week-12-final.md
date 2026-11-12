---
title: "Final piece and portfolio"
week: 12
strand: capstone
outcomes: [1, 2, 3, 4, 5, 6, 7, 8]
needs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
duration_target: "4 to 6 minutes"
repeat_budget: 2
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "10-12, 38-39, 47-48, 70, 73-74"
---

## Overview

This week adds no new feature. It asks for one piece of 4 to 6 minutes that uses what the other eleven weeks built: your instruments, your grooves, a polymeter or polyrhythm, counterpoint, variation, a composed join and a mix that follows the form. Most of the work is planning and judgement: turning a brief into a plan, a plan into milestones, and knowing when to stop. Then you gather the course's work into a portfolio.

By the end of the week you can:

- plan a piece of 4 to 6 minutes from an inventory, with its time budget, voice budget and requirement map worked out (outcome 7);
- predict where independent tracks realign, and balance the ledger so every section starts together (outcomes 1 and 4);
- choose instruments from your FM library and kit for roles in a long piece, and adjust each for its role with a stated reason (outcomes 2 and 3);
- make a planned realignment a formal event (outcome 4);
- bring material back changed by a named operation (outcome 5);
- write a passage of counterpoint in at least three voices (outcome 6);
- mix, automate, resample, render and bundle the piece (outcome 8);
- realise the plan through five milestones, revise it against a rendered listening, stop, and assemble the portfolio (outcome 7).

## Before you start

You need every week. In particular, have to hand:

- your instrument library (weeks 2-4 and 9) with its rationales, and the kit in slots `30`-`3A`;
- your groove library from week 5, with the tick sums;
- every one-page plan with its listening-review annotations, and the week-10 and week-11 projects;
- your results record from week 1 onward.

Start a new project for the piece. Load instruments into it with LOAD/SAVE (p. 16) rather than copying an old project, so that nothing unused comes along.

> **Manual.** Song view, pp. 10-11; Chain view, p. 12; Project view (BUNDLE, CLEAR UNUSED), pp. 38-39; Render view and selection to sample, pp. 47-48; `HOP`, p. 70; mixer and effect commands, pp. 73-74.

> **Starting point.** Nobody has tried the procedures or values in this module on a unit. The worked plan is hypothetical: its numbers show the arithmetic, not settings.

## Concepts

### From brief to plan

The brief has five requirements, a duration and one restriction on instruments. That leaves almost everything open, and an open field is where the loop habit returns: you start at bar 1 and polish it. So narrow the field first, in two steps.

**Inventory.** List what you already have under week 1's five headings: motifs, grooves, instruments, harmonic areas, textures. Draw on the whole course. Weeks 2-4 and 9 gave instruments; week 5 grooves; week 6 cycle sets you have checked; week 7 variations with their operations named; week 8 a subject, a canon and an invertible pair; week 9 voicings and pads; weeks 10 and 11 joins and mix states. An item that already exists costs minutes, not hours. Mark each item with the week it came from and whether it needs work.

**Constraints.** Then choose three or four limits of your own, written at the top of the plan:

- one tempo, or one planned tempo change (week 5's ratio, week 10's metric modulation);
- two or three harmonic areas, and how you move between them;
- a fixed instrument list, at most one new patch;
- one set of cycle lengths for the polymeter, taken from a phase table you have already checked on the unit.

A constraint removes decisions you would otherwise make at the unit, one bar at a time. It also tells you what to leave out of the inventory: anything that breaks a constraint goes on a list for another piece.

Then choose a form from week 10's five. The requirements suggest sections without dictating them: the polymeter wants a section long enough for a realignment to arrive, the counterpoint a texture thin enough to follow three lines, the return a section of its own.

> **Try it.** Write your inventory on one page in fifteen minutes, from memory first, then check it against your plans. Circle the four items you would least like to lose.

### The time budget

Duration fixes the bar count, and the bar count fixes everything after it. At one tempo, a bar of 4/4 lasts 240 / BPM seconds, so the target in bars is seconds × BPM / 240:

| Tempo | Bar | 4 min (240 s) | 6 min (360 s) |
|-------|-----|---------------|---------------|
| 96 BPM | 2.5 s | 240 × 96 / 240 = 96 bars | 360 × 96 / 240 = 144 bars |
| 100 BPM | 2.4 s | 100 bars | 150 bars |
| 120 BPM | 2.0 s | 120 bars | 180 bars |

Plan near the middle, not at the floor. Revision mostly cuts: a section that outstays its welcome loses four bars, a join gets elided. A plan at 100 bars and 100 BPM has no margin; one at 122 bars can lose 22 bars, 52.8 s, and still pass 4 minutes. Write the margin on the plan in bars and seconds, so that a cut late in the week comes with its cost attached.

Then divide the bars among the sections and show the sum. With 4-bar chains, row *r* starts at bar 4*r* + 1. A polymeter section breaks that rule, because its song rows need not last four bars (week 6); after such a section, work out the new formula and write it on the plan. With sections at different tempos, add their durations one by one, bars × 240 / BPM each (week 10).

Two cross-checks keep the sum honest. Holding [OPTION] in Song view with playback stopped shows the track's time at the cursor (p. 11); whether it counts phrases that `HOP` shortens is open question 17, so read it on a track whose phrases run the full sixteen steps. And the render has a length: compare it with the sum.

> **Try it.** Take your week-10 piece. Write its bar count and tempo, work out its length, and check it against the [OPTION] display at its last row. How many bars would it need to reach 4 min 30 s?

### The voice budget

Eight tracks, one note each (pp. 5, 91). Week 9's voice-budget table puts tracks against sections and says what each track does in each. For a piece this long it becomes the plan's main device after the section table, because three requirements compete for tracks: counterpoint needs three independent lines, a polymeter needs a layer on each cycle, and the high point wants everything at once.

Count two numbers at the foot of each column: **tracks** in use and **voices** sounding. They differ where one track carries more than one voice: a Hypersynth chord, an `ARP`, a resampled chord (weeks 9 and 11).

Then read the table for three things.

- **The peak.** If the highest point of the density curve needs more than eight tracks, decide there what to resample. A passage spread over *n* tracks and bounced to one frees *n* − 1 tracks (week 11).
- **The thin places.** A section on four tracks or fewer gives counterpoint room to be heard, and gives the ear a rest before the peak.
- **The handovers.** A track can change role between sections: one note column, many instruments. The table shows where track 6 stops being a canon voice and becomes a chord voice, so the join there needs a written instrument change.

Resampling has costs you plan for, not discover. The passage stops being editable, so it must be finished first; its source stays in the sketch area from row `80`; the new Sampler instrument takes a slot, which must not collide with the kit's `30`-`3A`; and the project now depends on a sample file, so it must be bundled (p. 39). Place the resample late in the week's order, after the passage is settled.

> **Try it.** Draw a blank voice-budget table for your form: eight rows, one column per section. Fill in only the tracks the five requirements need, and count what is left.

### The requirement map

A requirement that has no bar range gets done last, or not at all. So the plan gets a **requirement map**: one row per requirement, saying where it happens (section, bars, song rows), how (tracks and means), and what on the plan proves it (the table or arithmetic from the week that taught it).

| Requirement | Taught in | Proof on the plan |
|-------------|-----------|-------------------|
| Counterpoint in at least three voices | week 8 | entry chart; interval and rhythm tables for the first two bars |
| Polyrhythm or polymeter with a planned realignment | weeks 5, 6 | division map, or phase table and ledger; the bar of the meeting and what happens there |
| Return varied by a named operation | week 7 | the operation, the invariant it keeps, the source bars |
| A composed transition | week 10 | its own chains, the means, which side its bars belong to |
| Mix automation tied to the form | week 11 | mix-state table, reset row, section heads, a mix change in a boundary sentence |

Three rules for placing them.

- **Give each requirement its own place.** Two requirements can share a section, but a section that carries the canon and the polymeter at once makes both harder to hear and to check.
- **Put the hardest one early in the order of work, not early in the piece.** Week 10's rule, high point first, applies: realise the section you are least sure of on day one.
- **Let them do formal work.** A realignment makes a good arrival at a boundary; a thin contrapuntal section makes a good contrast after a dense one; the varied return belongs late, where the listener can recognise it.

> **Try it.** For your chosen form, write the five rows of the map with bar ranges only. Check that no two requirements claim the same bars unless you meant them to.

### Milestones and what "done" means

The syllabus sets five milestones: inventory and plan; a rough realisation of every section; transitions and variation; mix and render; reflection. Each needs a definition of done that you can check, or a milestone becomes a mood.

| Milestone | Done when |
|-----------|-----------|
| 1. Inventory and plan | The plan fits one page; bar, row and duration sums check; the requirement map gives every requirement a bar range; the voice budget fits eight tracks or names its resample. |
| 2. Rough realisation | Every song row of the piece holds a chain on every track, resting or rough; the song plays from row `00` to a stop; the ledger balances; the [OPTION] time at the last row agrees with the sum. |
| 3. Transitions and variation | Every join has its own chains; every return carries its named operation; the repeat budget holds on every track; the reset row is in place. |
| 4. Mix and render | The mix-state table is realised with section heads; the resample is done and its source kept; a MIXED render exists, its length checked; the project is bundled. |
| 5. Reflection | The listening review is annotated on the plan; the rubric and the requirement checklist are scored; the reflection is written; the portfolio checklist is complete. |

Milestone 2 matters most. It is week 10's skeleton rule at full scale: the last bar exists on the first working day. Its sections may sound crude; the test is that the piece is the right length, plays through, and stops.

Check each milestone in writing before starting the next: the check and its result, with any fix. A failed check costs minutes at the milestone where it happens and hours two milestones later.

> **Try it.** Copy the table onto the back of your plan. Add one check of your own to milestone 2, drawn from the departure you noted most often in week 10.

### When to stop revising

A piece this size can absorb revision without limit, and much of it makes the piece different rather than better (week 11's listening question). A stopping rule decides in advance.

- **Revise against annotations, not against mood.** After milestone 4's render and the next day's listening, each revision answers a written annotation: a time, what happened, what you will change. No annotation, no change.
- **One pass.** Take the annotations in order of the rubric criterion they affect, make each change once, re-render once.
- **Protect the frame.** A revision that breaks a requirement, the duration or the repeat budget gets reverted, however good the bar sounds.
- **Keep a list for the next piece.** Ideas that need new material, a new section or a new instrument go on it. They are the first item of the next inventory, not a reason to reopen this one.

Then stop, and write down what you would still change. That list becomes part of the reflection: it says what you hear now that you could not hear in week 1.

> **Try it.** Read your week-11 change note. Mark each line "better" or "different". Count them.

## Worked examples

### A complete plan

A hypothetical final piece, through-composed and framed by a return. The plan states its constraints first.

- **Tempo:** 100 BPM throughout; a bar lasts 240 / 100 = 2.4 s, a tick 2.5 / 100 = 0.025 s.
- **Harmonic areas:** H1 D dorian; H2 G dorian, the same a fourth up, by chain TSP `05`.
- **Instruments:** bass (week 3), mallet and bell (week 2), electric piano (week 3), kit `30`-`3A` (week 4), pad (week 9), and one resampled chord.
- **Cycles:** 16 : 12 : 10, a set checked in week 6's lab.

The inventory, briefly: M1 a 1-bar bass ostinato; M2 a 4-bar mallet tune; S a 4-bar canon subject from week 8; grooves `00` straight and `01` swing at 58% (`07 05`); a three-note shell voicing per chord from week 9.

**Sections.**

| Section | Bars | Count | Song rows | Seconds | Content | Boundary into it |
|---------|------|-------|-----------|---------|---------|------------------|
| A | 1-16 | 16 | `00`-`03` | 38.4 | M1, then M2 over it, the pad, the hats; H1 | (opening) |
| B | 17-46 | 30 | `04`-`07` | 72.0 | bass, mallet and drums in 16 : 12 : 10 | build: drums enter; meter and rhythm change |
| C | 47-70 | 24 | `08`-`0D` | 57.6 | S in three-voice canon over a free bass; no drums | arrival: the cycles realign on bar 47; density and timbre change |
| T | 71-74 | 4 | `0E` | 9.6 | the composed transition | thinning over a build, pivot A |
| D | 75-98 | 24 | `0F`-`14` | 57.6 | H2; full texture; the high point at bars 83-90 | harmony, density, groove (hats swing) |
| A′ | 99-114 | 16 | `15`-`18` | 38.4 | M2 inverted, on the bell, over M1; H1 | silence: a bar of pad alone at bar 98 |
| Coda | 115-122 | 8 | `19`-`1A` | 19.2 | A's entries in reverse, down to the bass | thinning; ends on a tail |
| Tail | 123-124 | 2 | `1B` | 4.8 | resting chains for the reverb to decay | |

Check the sums. Bars: 16 + 30 + 24 + 4 + 24 + 16 + 8 = 122. Seconds: 38.4 + 72.0 + 57.6 + 9.6 + 57.6 + 38.4 + 19.2 = 292.8, which agrees with 122 × 2.4 = 292.8 s, 4 min 52.8 s; with the tail, 124 × 2.4 = 297.6 s. Rows: 4 + 4 + 6 + 1 + 6 + 4 + 2 = 27, `00` to `1A` (26), then the tail at `1B`. Margin above 4 minutes: 292.8 − 240 = 52.8 s, 22 bars.

Row and bar. Rows `00`-`03` follow 4*r* + 1. B's four rows hold 30 bars, so from row `08` on, row *r* starts at bar 47 + 4(*r* − 8) = 4*r* + 15. Check: `0E` (14) at bar 71; `0F` (15) at 75; `15` (21) at 99; `19` (25) at 115; `1A` (26) at 119, bars 119-122.

Start times, as bars before × 2.4: B at 38.4 s, C at 46 × 2.4 = 110.4 s (1:50.4), D at 74 × 2.4 = 177.6 s (2:57.6), the high point at 82 × 2.4 = 196.8 s (3:16.8), A′ at 98 × 2.4 = 235.2 s (3:55.2). The high point starts 82 / 122 = 67% of the way through, past the middle.

**The polymeter in B.** Track 4 (kick and snare) and track 5 (hats) run 16-step phrases. Track 1's bass runs a 12-step cycle and track 2's mallet a 10-step cycle, both by `HOP` (p. 70): `HOP 00` on row `B` for 12 steps and on row `9` for 10, by week 6's convention, which your bench test 2 confirms or moves by a row.

lcm(16, 12) = 48 steps, 3 bars; lcm(16, 10) = 80 steps, 5 bars; lcm(48, 80) = 240 steps, 15 bars. So the three cycles meet on the downbeat every 15 bars: at bar 17 + 15 = 32 and at bar 47, the first bar of C. B lasts two periods, 2 × 240 = 480 steps, 30 bars.

The phase table gives, at each downbeat, which step of its own cycle each short layer plays: 16*n* mod 12 and 16*n* mod 10, *n* bars after bar 17.

```cycles
bar       |17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 |
12-cycle  | 0  4  8  0  4  8  0  4  8  0  4  8  0  4  8  0 |
10-cycle  | 0  6  2  8  4  0  6  2  8  4  0  6  2  8  4  0 |
```

The 12-cycle meets the bar every 3 bars (17, 20, 23, 26, 29, 32), the 10-cycle every 5 (17, 22, 27, 32); bars 32 to 47 repeat the table. The 12- and 10-cycles meet each other every lcm(12, 10) = 60 steps, at steps 60, 120 and 180, which fall inside bars 20, 24 and 28 (60 = 3 × 16 + 12, so row `C` of bar 20). The plan marks only the two full meetings: at bar 32 the pad enters, and bar 47 is the boundary into C.

The ledger, 480 steps per track over rows `04`-`07`:

| Track | Steps | Phrases × steps | Chains, phrases per row |
|-------|-------|-----------------|-------------------------|
| 4, 5 (drums, hats) | 16 | 30 × 16 = 480 | 8, 7, 8, 7 |
| 1 (bass) | 12 | 40 × 12 = 480 | 10, 10, 10, 10 |
| 2 (mallet) | 10 | 48 × 10 = 480 | 12, 12, 12, 12 |
| 7 (pad) | 16 | 30 × 16 = 480 | rest 8, rest 7, then 8, 7 |
| 3, 6, 8 | 16 | 30 × 16 = 480 | rest 8, 7, 8, 7 |

Inside B the song rows do not line up across tracks: the bass's row `04` lasts 120 steps, the drums' 128. Only the totals must match. The resting tracks need rest chains of eight and seven rows, each row listing an empty phrase, since a chain ends at its first empty cell (p. 12); the usual `FE` lasts four bars. The repeat budget still applies: the mallet's 48 phrases alternate at least two phrases and TSPs, so no phrase sounds more than twice running at one TSP.

**Voice budget.**

| Track | A | B | C | T | D build 75-82 | D peak 83-90 | D fall 91-98 | A′ | Coda |
|-------|---|---|---|---|---------------|--------------|--------------|----|------|
| 1 | M1 | M1, 12-cycle | free bass from bar 51 | bass | bass | bass | bass | M1 displaced a step | M1, last voice |
| 2 | M2 from bar 5 | M2 fragments, 10-cycle | canon, 2nd voice | leaves after bar 72 | rests | S, stretto | rests | rests | rests |
| 3 | rests | rests | canon, leader | pivot A held | comp | S, stretto | comp | counter-line | rests |
| 4 | rests | 16 | rests | build, `RET` roll | kit | kit | kit | kit | rests |
| 5 | hats from bar 13 | 16 | rests | build | hats, `GRV 01` | hats | hats | hats, `GRV 00` | rests |
| 6 | rests | rests | canon, 3rd voice | leaves after bar 71 | chord, lower | S, stretto | rests | M2 inverted | rests by bar 119 |
| 7 | pad from bar 9 | pad from bar 32 | rests | rests | chord, middle | pad, ducked | pad | pad | rests by bar 117 |
| 8 | rests | rests | rests | rests | chord, upper | chord sample (3 voices) | rests | rests | rests |
| Tracks | 4 | 4, then 5 | 4 | 6 down to 4 | 7 | 8 | 5 | 6 | 3 down to 1 |
| Voices | 4 | 4, then 5 | 4 | 6 down to 4 | 7 | 10 | 5 | 6 | 3 down to 1 |

The peak needs the chord's three voices and three stretto voices, more than eight tracks. So the chord of bars 83-90, voiced on tracks 6-8 as in week 9, gets finished in the sketch area at rows `80`-`81` and resampled to one Sampler instrument on track 8 (week 11, worked example 2). Tracks 6 and 7 come free for the bell's stretto entry and the pad. Voices at the peak: 7 tracks of one voice, plus 3 on track 8, 7 + 3 = 10. The sample lasts 8 × 2.4 = 19.2 s.

**Requirement map.**

| Requirement | Section | Bars | Rows | How |
|-------------|---------|------|------|-----|
| Counterpoint, 3 voices | C | 47-70 | `08`-`0D` | S in canon at the octave: piano leads at bar 47; mallet one bar behind at chain TSP `0C`; bell two bars behind at `18` (24 semitones); free bass from bar 51 |
| Polymeter, planned realignment | B | 17-46 | `04`-`07` | 16 : 12 : 10, full meetings at bars 32 and 47 |
| Return by a named operation | A′ | 99-114 | `15`-`18` | M2 inverted about D (invariant: its rhythm), re-instrumented from mallet to bell |
| Composed transition | T | 71-74 | `0E` | thinning of the canon over a drum build; the piano's A, common to H1 and H2, held across into D |
| Mix automation tied to the form | all | 1-124 | every section head | the mix-state table below |

The canon uses upward chain transposes only, so open question 22 (downward TSP) does not arise. The interval and rhythm tables for its first two bars go on the plan, as in week 8.

**Mix state and reset row.** Three values move, plus the hats' groove. The numbers stand in for values you capture with [EDIT] (week 11); they show only direction.

| Section | Density | `VRE` | `VDE` | `VT7` | Track 5 groove | Why |
|---------|---------|-------|-------|-------|----------------|-----|
| A | 1-4 | 30 | 00 | 40 | `00` | thin: the reverb fills |
| B | 4-5 | 18 | 00 | 40 | `00` | dry, so the three cycles stay distinct |
| C | 4 | 38 | 00 | 40 | `00` | wet and delay-free: the canon supplies the echoes |
| T, D | 4-8 | 10 | 18 | 58 | `01` | driest at the peak; the pad up under its duck |
| A′ | 6 | 30 | 18 | 40 | `00` | A's reverb with D's delay: the mix returns changed |
| Coda | 3-1 | 48 | 18 | 30 | `00` | wettest last, for the tail |

`VRE` runs against density, lowest at the peak. Every section head restates all four values. The reset row is A's head, at row `00`:

```phrase
# PHRASE 10  (track 1, first phrase of chain 10: reset row and A's head)
0  D-3 70 01  VRE 30   VDE 00   .        ; global values on the first track that sounds
```

Tracks 5 and 7 rest at row `00`, so each gets a resting chain of its own, `50` and `70`, whose phrase holds `GRV 00` or `VT7 40` on row `0`; `FE` stays empty, since a command there would fire at every rest (week 11). Without the `GRV 00`, a second play would start with D's swing on the hats.

B's head shows the cycle and the head together:

```phrase
# PHRASE 14  (track 1, first phrase of chain 14: B's head, 12-step cycle)
0  D-3 70 01  VRE 18   VDE 00   .        ; B's mix state
4  F-3 60 01  .        .        .
8  A-3 60 01  .        .        .
B  .   .  .   HOP 00   .        .        ; 12 steps, if row B counts (bench test 2)
```

**Ending.** The coda thins in A's order reversed: hats and drums are already gone, the pad leaves by bar 117, the bell by 119, and the bass plays its last D on the downbeat of bar 122. Row `1B` holds on every track a resting chain of two phrases, the second with `HOP FF` on row `F` (p. 70), so the tracks stop after the tail. The render's last row is `1B` (p. 47). Whether a render runs on past its last row, and whether `HOP FF` on every track stops the song, is open question 26.

### A milestone check

Milestone 2 on this plan, after an hour of rough realisation. The check, written out:

| Check | Expected | Found | Action |
|-------|----------|-------|--------|
| Every row `00`-`1B` holds a chain on every track | yes | yes | none |
| Plays from `00` and stops | all tracks stop after `1B` | track 6 rings on | the bell's tail chain lacked its `HOP FF`: added |
| [OPTION] time on track 4 at row `1B` | 122 × 2.4 = 292.8 s, 4:52.8 | 4:52 | none: track 4 has no shortened phrases |
| B's ledger, 480 steps per track | 30 × 16, 40 × 12, 48 × 10 | track 2: chains of 12, 12, 12, 11 | one phrase short: added |
| Every section starts together | all tracks at bar 47 on row `08` | track 2 early | follows from the ledger |
| Reset row present | row `00`: `VRE`, `VDE`, `GRV 00`, `VT7` | `VRE`, `VDE` only | the resting chains `50` and `70`: written |

The ledger fault is the one that would have cost most. Track 2 had 47 × 10 = 470 steps in B, 10 short of 480. Since each track keeps its own position (p. 5), track 2 reaches row `08` 10 steps early, 10 × 6 = 60 ticks, 60 × 0.025 = 1.5 s at 100 BPM, and stays 10 steps ahead for the rest of the piece. The canon's second voice, meant to enter a bar after the leader, would come in 16 − 10 = 6 steps after it. By milestone 3 that would have sounded like a fault in the counterpoint, and you would have looked for it in C, not in B.

Note what the check did not look at: the sound of any section, the repeat budget, the variation in A′ (still a copy of A). Those belong to milestone 3. Milestone 2 was done after the three fixes, about ten minutes' work.

## Lab

This week the lab and the etude are one job: the five milestones, spread across the week's five hours.

| Milestone | Minutes | Hours budget |
|-----------|---------|--------------|
| Reading this module | 45 | reading |
| 1. Inventory and plan | 45 | lab |
| 2. Rough realisation | 60 | lab |
| 3. Transitions and variation | 60 | etude |
| 4. Mix and render | 60 | etude |
| 5. Reflection, with the listening review | 30 | review |

45 + 45 + 60 + 60 + 60 + 30 = 300 minutes, 5 hours. That only works because the inventory already exists. If a milestone overruns, cut scope (a shorter coda, a simpler join) rather than skip a check.

No new bench tests this week. Before milestone 2, read your results record for the open questions the piece depends on, typically 2 (`HOP` and its row), 17 (the [OPTION] display and `HOP`), 26 (renders and `HOP FF`) and 27 (selection to sample), and answer any still blank on a copy of a project.

1. **Inventory and plan** (45 min). Paper only. The inventory with each item's week; three or four constraints; the form; the section table with bars, rows, seconds and their sums, the row-to-bar formula after any polymeter section, and the margin above 4 minutes; density and register curves by row with one highest point past the middle; a sentence per boundary naming the dimensions changed and the join's means; the voice budget, with any resample named; the requirement map; the ending's type. Use the [form-plan worksheet]({{ '/appendices/worksheet-form-plan/' | url }}) and, for rows and chains, the [chain and song worksheet]({{ '/appendices/worksheet-chain-song/' | url }}).
   *Product:* the one-page plan, and milestone 1's check written on its back.

2. **Rough realisation** (60 min). Skeleton first: every song row filled with placeholder or resting chains, the rest chains for any polymeter section, the reset row, the `HOP FF`s. Then rough content for every section, the high point and the polymeter section first. Balance the ledger before you listen to anything in it.
   *Product:* a project that plays from row `00` to a stop at the planned length, and milestone 2's check, as in worked example 2.

3. **Transitions and variation** (60 min). Compose the transition in its own chains, then the other joins. Realise each return's operation and write its invariant on the plan. Audit the repeat budget track by track: every run of one phrase at one TSP on one track, counted. Play from the top twice and from each section's first row.
   *Product:* the piece complete in notes, and milestone 3's check, with the budget audit.

4. **Mix and render** (60 min). Stage gain from the high point; EQ from each instrument's lowest note; the mix-state table, section heads and reset row; the TRIG duck, if the piece uses one. Then the resample: source to the sketch area from row `80`, QUICK RENDER (p. 48), check pitch, length, sends, slot and alignment, clear the freed tracks and write their new parts. Render MIXED with the limiter on (p. 47), compare its length with the sum, and bundle (p. 39).
   *Product:* the render, the bundle, the mix-state table on the plan, and milestone 4's check.

5. **Reflection** (30 min, the next day). The listening review below, then the rubric, the requirement checklist and the reflection, on the [self-assessment worksheet]({{ '/appendices/worksheet-self-assessment/' | url }}). Then one revision pass by the stopping rule, if the annotations call for one, and the portfolio checklist.
   *Product:* the annotated plan, the scored rubric and checklist, the reflection, and the completed portfolio.

## Etude

**Brief.** A piece of 4 to 6 minutes, using only instruments built in the course, that contains a passage of counterpoint in at least three voices, a polyrhythm or a polymeter with a planned realignment, material that returns varied by a named operation, a composed transition, and mix automation tied to the form.

**Forces.** Up to eight tracks. Instruments from your library: weeks 2-4 and 9, the kit in `30`-`3A`, and any Sampler instrument resampled from them in this piece.

**Constraints.**

- The five requirements, each at a bar range in the requirement map. Counterpoint means three lines independent by week 8's test: no voice doubles another's rhythm for more than a bar.
- A planned realignment means cycle lengths, their lcm in steps and bars, the bar of the meeting and what happens there, all on the plan before you sequence it. A polyrhythm needs its division map (week 5) and a point where the divisions change by plan.
- At least four sections of at least three different lengths; at least three means of joining (week 10).
- One highest point, past the middle, on the density curve.
- A reset row and a section head at every section for every persistent value: grooves, any tempo, transpose or scale change, and every automated mix value.
- Every return differs in a way the plan names.
- A composed ending of a stated type; every track stopped by `HOP FF` or by design.
- If the voice budget needs more than eight tracks anywhere, a resample, its source kept in the sketch area, and the project bundled.

**Duration target.** 4 to 6 minutes, 240 to 360 s, measured on the render. At one tempo, seconds × BPM / 240 bars: 100 to 150 bars at 100 BPM, 96 to 144 at 96, 120 to 180 at 120. Plan with a margin above 4 minutes and write it down.

**Repeat budget.** 2, per track: consecutive unchanged plays of one phrase at one TSP on one track. A polymeter does not excuse a phrase (week 6), and a canon's follower does not count against its leader (week 8).

**Plan.** One page, before you open Song view: inventory, constraints, form, section table with sums and margin, curves, boundary sentences, voice budget, requirement map, and for each requirement the proof from the week that taught it. The mix-state table joins it at milestone 4. Milestone checks go on the back.

**Hand in to yourself.** The bundle, the render, the plan with its annotations and milestone checks, the scored rubric and requirement checklist, and the reflection: three lines on the piece (where it departs from the plan, which requirement did most for the form, what you would still change) and three on the course (what you can do now that you could not in week 1, the weakest of the eight outcomes in your work, and what you will study next and why).

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, noting times. Convert times to bars (bar = seconds × BPM / 240, and after a polymeter section use the plan's own formula) and annotate the plan in a different colour. Thirty minutes, including the scoring.

1. Could you hear each of the five requirements without looking at the plan? Give the time at which you noticed each one, and compare it with its bar range.
2. Where did your attention drop? Convert the time to a bar and name what the curves and the voice budget show there.
3. Did the planned realignment arrive as an event, or pass unnoticed? Did the three canon voices stay separate?
4. Put on your week-1 baseline loop, then the first minute of this piece. Write one sentence on what changed.

## Rubric

Score each criterion 1 to 4. Level 1 falls below the descriptor for 2; level 3 sits between 2 and 4.

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A plan exists, but lacks a requirement map, a voice budget or checked sums, or the piece departs from it without comment. | The plan is complete on one page, its sums check against the render, every milestone check is written, and every departure carries a reason. |
| Technique of the week | Some requirements appear, but one lacks its proof on the plan, or a second play or a start from mid-song lands in the wrong state. | All five requirements are audible at their mapped bars, each with its proof; the reset row and section heads hold; the piece stops cleanly. |
| Development | Sections differ, but a return comes back unchanged, or a phrase exceeds the budget of 2. | Every return names its change, one highest point sits past the middle, and the budget holds across 4 to 6 minutes. |
| Sound | Instruments suit their roles alone, but the peak blurs or the counterpoint loses a voice. | Each layer stays audible at the peak, the three lines stay separate, and changes in the mix sound like decisions. |

The brief's requirements are pass or fail. Tick each one only if the plan shows where it happens and the render shows it there.

- [ ] Counterpoint in at least three independent voices, with entry chart, interval and rhythm tables.
- [ ] A polyrhythm or polymeter with a planned realignment: lengths, lcm, the bar, the event.
- [ ] Material that returns varied by a named operation, with its invariant.
- [ ] A composed transition in its own chains, its means named.
- [ ] Mix automation tied to the form: mix-state table, reset row, section heads.

And the frame: a render of 4 to 6 minutes; only your own instruments.

### Portfolio checklist

The portfolio is complete or not. Tick each item when it exists in one place, outside the unit.

- [ ] **Instrument library**: every instrument saved with LOAD/SAVE (p. 16), each with its rationale in three sentences (week 3's form: role, the value that matters most, what you changed from the starting point and why). The bells and vibes, pianos and basses, the kit `30`-`3A` with its alternatives, the pads.
- [ ] **Groove library**: week 5's grooves, each with its rows and tick sum.
- [ ] **Etudes**: weeks 1 to 12, each as a project file and a render; weeks 11 and 12 as bundles.
- [ ] **Plans**: every one-page plan, with its listening-review annotations.
- [ ] **Bench-test results**: the results record, each line with its firmware version and date, and the open questions you answered, ready to go back into the notes.
- [ ] **Reflection**: the etude's reflection, naming what to study next.

**Bundle and back up.** A project file does not contain its samples; BUNDLE in Project view gathers project, samples and instruments into one folder (p. 39). Bundle every project that holds a resample, then copy the bundles, the instrument library and the `/Renders` folder (p. 47) off the card to two places. Open one bundled project from the copy to check that it loads with its samples (open question 28). CLEAR UNUSED (p. 38) frees what the song no longer uses; run it on a copy, and check the sketch area afterwards.

> **Headless.** Renders and bundles land on the card in the board's own slot, with the same formatting advice (notes, section 9, [HL]): plan how you will get files off it. REALTIME recording also records the inputs, which on a headless unit arrive as USB audio from the host; use QUICK RENDER for any resample in the final piece (notes, section 9).

## Going further

The course ends here, but its strands do not. The [further study]({{ '/appendices/further-study/' | url }}) appendix lists reading and listening by strand, each entry with the week it extends; use your reflection's weakest outcome to choose where to start.

Three projects that use the course's method directly:

- Realise a second plan from the same inventory in a different form, and compare the two renders.
- Write a piece of 8 to 10 minutes. The time budget, voice budget and requirement map scale; the milestones stretch to two weeks.
- Take your answered open questions and check them on the next firmware, so your results record stays current.

## Summary

- A brief becomes a plan through an inventory, a few chosen constraints and a form.
- The time budget fixes the bars at a stated tempo, with a margin; the voice budget fixes the tracks, and resampling buys back the difference at the peak.
- A requirement map gives every requirement a bar range and a proof on the plan.
- Milestones have checkable definitions of done, and the rough realisation of every section comes before any polish.
- Revision answers written annotations, in one pass, and then stops.

That closes the course. What remains is the reflection, the portfolio, and the further study it points you to.
