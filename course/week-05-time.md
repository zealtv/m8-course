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

> **Draft.** This week's module has not been written yet. The headings below follow the module template.

## Overview

To be written.

## Before you start

To be written.

## Concepts

### Three against four inside one beat

A groove tells the sequencer how many ticks each phrase step lasts. With the
default 24 ticks per quarter note, the default groove gives every step 6
ticks, so four steps fill a beat (4 × 6 = 24) and sixteen fill a bar
(16 × 6 = 96).

Nothing ties a track to that groove. Each track can run its own, set with
`GRV` in a phrase. So give one track steps of 8 ticks: three of them fill
the same beat (3 × 8 = 24). One track now plays three evenly spaced notes in
the time another plays four. That makes a polyrhythm in the strict sense:
the same span, divided two ways.

One snag. A phrase still has sixteen rows, and three steps of 8 ticks use
only three of every four. The groove handles this with a row of `00`, which
skips a step outright:

```groove
# GROOVE 01  (triplets, 24 ticks per quarter)
0  08
1  08
2  08
3  00      ; skip the 4th step: 8+8+8 = 24 ticks = one quarter note
```

The groove loops every four rows, so rows `3`, `7`, `B` and `F` of the
phrase never sound. Whatever you put there stays silent. Twelve rows remain,
three per beat, and the phrase still lasts 96 ticks, so it stays in step with
a straight track at the bar line.

```phrase
# PHRASE 12  (track 2, hats in triplets)
0  C-4 64 03  GRV 01   .   .
1  C-4 40 03  .        .   .
2  C-4 40 03  .        .   .
3  .   .  .   .        .   .      ; skipped
4  C-4 64 03  .        .   .
5  C-4 40 03  .        .   .
6  C-4 40 03  .        .   .
7  .   .  .   .        .   .      ; skipped
```

Rows `8` to `F` repeat the pattern. Against a track of straight 16ths on the
default groove, the onsets within each beat fall like this, in ticks:

```cycles
straight  |0 . . . . . 6 . . . . . 12 . . . . . 18 . . . . . |
triplet   |0 . . . . . . . 8 . . . . . . . 16 . . . . . . . |
```

They share only tick 0. The straight track's third note (tick 12) lands
midway between the triplet's second and third (ticks 8 and 16), which gives
the pattern its familiar lilt.

`GRV` holds until another groove command arrives on that track, so one
command at the top of the first phrase covers everything after it. To return
the track to straight time, place `GRV 00`.

> **Try it.** Build groove 01 and phrase 12 as above on a hi-hat, with a
> straight 16th pattern on another track. Then change the groove's rows to
> `0C`, `0C`, `00`, `00`. Work out what you expect to hear before you press
> [PLAY].

> **Bench test.** Does a `GRV` on row `0` take effect for row `0` itself, or
> from the next row? Listen to the first beat after a stop and start.

## Worked examples

To be written.

## Lab

To be written.

## Etude

To be written.

## Listening review

To be written.

## Rubric

To be written.

## Going further

To be written.

## Summary

To be written.
