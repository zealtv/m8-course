---
title: "Counterpoint"
week: 8
strand: composition
outcomes: [6]
needs: [3, 7]
duration_target: "96 bars"
repeat_budget: 2
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "10-15, 28-29"
---

## Overview

Every track plays one note at a time, so the M8 is a consort of eight single-line voices, and counterpoint is its native texture. This week you write lines that stay independent and still agree, using what the instrument makes cheap: a shared phrase on a second track is a canon, a chain transpose is an answer or an inversion of registers. Counterpoint also solves the length problem from another side: a voice that enters, rests and returns gives a piece events without new material.

By the end of the week you can:

- allocate voices to tracks by register, timbre and envelope so that each line stays audible;
- check two lines for intervals and for rhythmic independence with a table, before you listen;
- build a canon from shared phrases, an offset entry and a chain transpose;
- write two-part counterpoint that survives the exchange of its registers, and say why;
- give a percussion track a line of its own;
- plan and realise 96 bars for three pitched voices and one percussion voice.

## Before you start

You need week 3 (pitched instruments) and week 7 (clone against deep clone, chain TSP, and your bench test 12 result on chain transpose inside a scale). Week 6's "song on several clocks" returns here, because an offset entry puts a track on its own clock.

Have three pitched instruments open that differ plainly: one for the top, one for the middle, a bass. At least one must sustain for a full bar; a suspension on a sound that has died is no suspension. Set 96 BPM: a bar lasts 240 / 96 = 2.5 s.

You know the rules of counterpoint from practice, so this module does not teach them. It gives you a way to apply them on a grid with no staff.

> **Manual.** Song, Chain and Phrase views, pp. 10-15; Scale view, pp. 28-29.

> **Starting point.** Nobody has played any example in this module on a unit. The intervals were checked by arithmetic, which says whether a line is correct, not whether it is good.

## Concepts

### Eight tracks, eight voices

A track plays one note at a time (pp. 5, 91), and all eight behave alike (p. 5). Nothing on the unit distinguishes a "melody" track from a "bass" track. You do that, by keeping each voice apart from its neighbours in as many ways as you can afford:

| Dimension | How to separate | On the M8 |
|-----------|-----------------|-----------|
| Register | give each voice a home octave and a stated range | the note column; chain TSP moves a whole voice (p. 12) |
| Timbre | contrast spectrum: dark against bright, hollow against full | a different instrument per voice |
| Envelope | contrast attack and length: struck against sustained | AHD or ADSR in the instrument (pp. 18-21) |
| Rhythm | when one voice moves, another holds | the next section |
| Space | place voices apart in the stereo field | check this on your unit: the notes record the instrument's sends but no pan control |

Register does most of the work. As a starting point: bass from `C-2` to `G-3`, middle voice from `G-3` to `D-5`, top from `D-4` to `A-5`. Adjacent ranges overlap so lines can move; crossing is allowed when you plan it, and timbre is what keeps a crossing legible.

A voice continues until something stops it. A struck instrument stops itself; a sustained one holds until the next note on its track, an `OFF` in the note column (p. 14) or a `KIL` (p. 70). So on a sustaining instrument a rest must be written. Rests are material: a voice that has been silent for four bars is heard when it returns, and an entry is the cheapest event there is. To rest a track for whole bars, use a chain of empty phrases (p. 10).

> **Try it.** Play one 2-bar line on your three instruments in turn, each in its home octave. Then play it on two at once, an octave apart. Which pair stays two voices, and which fuses into one sound?

### Independence, and how to check it without a staff

Voices sound independent when they differ in contour (one rises as the other falls), in rhythm (their onsets do not coincide for long) and in where their high points fall. They agree when their vertical intervals behave. Both can be checked on paper with two small tables: a lint pass for counterpoint.

**The interval table.** At every step where either voice takes a new note, write the interval from the lower to the upper voice in semitones, then reduce it mod 12:

| Class (semitones mod 12) | Interval | Two-part verdict |
|--------------------------|----------|------------------|
| 0 | unison, octave | perfect consonance |
| 7 | fifth | perfect consonance |
| 3, 4 | thirds | imperfect consonance |
| 8, 9 | sixths | imperfect consonance |
| 5 | fourth | dissonant above the lowest voice |
| 1, 2, 6, 10, 11 | seconds, tritone, sevenths | dissonant |

Then apply the rules you know, as tests on the column of classes:

- a dissonance must be a passing or neighbour note off the beat, or a prepared suspension;
- no two successive 0s or two successive 7s between the same pair of voices when both voices move;
- approach a 0 or a 7 by contrary or oblique motion where the texture is thin.

To count semitones quickly, number the pitch classes from C (C 0, C# 1, D 2, D# 3, E 4, F 5, F# 6, G 7, G# 8, A 9, A# 10, B 11) and add 12 per octave: `A-3` to `C-5` is (0 + 60) − (9 + 36) = 15, class 3.

**The rhythm table.** Write each voice's onsets for a bar as sixteen characters. Two voices double each other's rhythm when their strings match:

```cycles
top     |x . . . x . . . x . . . x . x . |
middle  |x . . . . . . . x . . . x . . . |
bass    |. . x . . . x . . . x . . . x . |
```

Here the top and middle share three onsets but not a string; the bass sounds only where neither does. Good complementary rhythm fills the composite: read down the columns, and few stay empty.

**Species on the grid.** The species are rhythm ratios, so they map straight onto rows. Against a cantus of one note per bar on row `0`:

| Species | Added voice sounds on rows | Dissonance allowed |
|---------|----------------------------|--------------------|
| First | `0` | none |
| Second | `0`, `8` | passing, on row `8` |
| Third | `0`, `4`, `8`, `C` | passing and neighbour, off the beat |
| Fourth | `8`, held over the next row `0` | the suspension: prepared on `8`, dissonant as the cantus moves on `0`, resolved down a step on the next `8` |
| Fifth | free mixture | all of the above |

Fourth species needs two things from the instrument: the note must still sound a bar later, and row `0` of the suspended voice must stay empty so that nothing retriggers it.

A cantus in whole notes wastes phrases at one note each. A single-row groove of `18` (24 ticks a step) stretches a phrase to 16 × 24 = 384 ticks, four bars, with whole notes on rows `0`, `4`, `8` and `C`, if your bench test 4 found that the unit accepts a row that large.

> **Try it.** Enter a four-note cantus (`D-3`, `F-3`, `E-3`, `D-3`), a bar each, on a sustained bass. Above it write a second-species line on rows `0` and `8`. Fill in the interval table before you play it.

### Canon: one line, two tracks

A phrase can be used from many places, and editing it edits every use (p. 14). So a canon needs no copying: put the leader's phrases in a second chain on another track, delay that track, and transpose its chain.

Three decisions make a canon.

- **The interval**, set by chain TSP, which transposes each phrase in semitones (p. 12). TSP `0C` gives the octave, `07` the fifth above. This module keeps the follower's chain at TSP `00` and raises the leader's, since the notes do not record how a downward TSP is entered.
- **The delay.** The follower's column starts with a resting chain as long as the delay: one empty phrase for a bar. For less than a bar, shorten the empty phrase with `HOP` as in week 6: `HOP 00` on row `7` gives eight steps, by the convention used there. From then on the follower's rows start at different bars from the leader's, so write the ledger.
- **The ending.** The follower finishes late by the length of the delay. The leader needs that much free material, a coda, composed against the follower's last bar.

Shared phrases keep the canon exact however you revise it, and they cost you one thing: the I column belongs to the phrase, so both voices play the same instrument and only register separates them. For different timbres, deep clone the follower's chain (p. 11) and change the instrument in the copies. After that the two voices no longer follow each other's edits, so deep clone last.

Composing a canon is a small recurrence. At a delay of one bar, bar *n* + 1 of the leader sounds against bar *n* of itself, transposed. Write bar 1 freely; write bar 2 to fit bar 1; then bar 3 to fit bar 2. Each bar is both a counterpoint to the last and the cantus for the next.

**Real and diatonic answers.** A chain TSP of `07` with a chromatic scale moves every note exactly seven semitones: a real answer, which leaves the mode (D dorian's F becomes C, but its B becomes F#). With a scale set, chain transpose gets quantised to it (p. 28), which should give a diatonic answer; your bench test 12 result says what TSP value produces a fifth inside a scale.

> **Try it.** Put any 1-bar phrase of yours in a chain of four on one track, and the same phrase in a chain at TSP `0C` on another, behind a 1-bar resting chain. Edit one note of the phrase while it plays. Both voices should change, a bar apart.

### Invertible counterpoint

Two lines are invertible at the octave when either can be the bass. Move the lower voice up an octave past the upper and every interval between them turns into its complement: class *i* becomes 12 − *i*.

| Original class | 0 | 3 | 4 | 7 | 8 | 9 | 5 |
|----------------|---|---|---|---|---|---|---|
| Inverted class | 0 | 9 | 8 | 5 | 4 | 3 | 7 |

Thirds and sixths trade places and octaves stay octaves. The fifth becomes a fourth, which is dissonant above the lowest voice. So a pair of lines inverts cleanly if every 7 in its interval table is treated as a dissonance would be: off the beat, passing. Seconds and sevenths trade places too, so a 7-6 suspension in the original becomes a 2-3 in the inversion, which also works.

On the M8 the exchange is two chain clones (a clone shares its phrases, p. 11): the lower voice's chain at TSP `0C`, the upper voice's unchanged. That works while the voices stay within an octave of each other. If they range wider, use TSP `18` (24), two octaves: the classes come out the same, since 24 mod 12 = 0. The lines stay on their own tracks and instruments; only the registers swap, so check that each instrument still speaks in its new octave.

The pay-off for form: sixteen bars of invertible counterpoint are thirty-two bars of music, and the second sixteen count as a return with difference at the cost of two chains.

> **Try it.** Take the interval classes of any two-voice passage you have written this term. Apply the table. How many strong beats now hold a 5?

### A drum part as a voice

A percussion track obeys the same test as any other voice: does it have a line? A timekeeping pattern does not; it has a texture. A drum voice has a motif, answers other voices, rests, and enters.

Three ways to give it one:

- **Pitch.** The week-4 toms sit a fourth apart (`A-2`, `D-3`, `G-3`), enough for a contour. A three-note tom motif can state the subject's outline.
- **Rhythmic imitation.** Give the drum track the subject's rhythm, on one drum or spread across the kit, a bar after the subject: a canon in rhythm alone.
- **Complement.** Let the drum sound only in the gaps of the rhythm table, so that it completes the composite.

The checkpoint rule that no voice may double another's rhythm for more than a bar applies to the drum voice too, which rules out a kick that shadows the bass for a section.

> **Try it.** Take the rhythm of a 1-bar subject and enter it for the three toms, choosing the drum for each note by the subject's contour: low, middle, high. Play it a bar behind the subject.

## Worked examples

### A canon at the octave

Two voices on tracks 6 and 7, sharing one instrument (`10`, a sustaining one), the follower one bar behind and an octave below. The phrases are written at the follower's pitch; the leader's chain raises them.

```phrase
# PHRASE 40  (canon, bar 1 of the line)
0  D-3 64 10  .  .  .
4  F-3 64 10  .  .  .
8  A-3 64 10  .  .  .
C  G-3 64 10  .  .  .
E  F-3 64 10  .  .  .
```

```phrase
# PHRASE 41  (bar 2: slow, against bar 1's quarters)
0  F-3 64 10  .  .  .      ; held for two beats
8  C-4 64 10  .  .  .
C  D-4 64 10  .  .  .
```

```phrase
# PHRASE 42  (bar 3: eighths, against bar 2's long notes)
0  C-4 64 10  .  .  .
2  A-3 64 10  .  .  .
4  F-3 64 10  .  .  .
6  A-3 64 10  .  .  .
8  G-3 64 10  .  .  .
A  E-3 64 10  .  .  .
C  F-3 64 10  .  .  .
```

```phrase
# PHRASE 43  (bar 4: quarters, against bar 3's eighths)
0  E-3 64 10  .  .  .
4  F-3 64 10  .  .  .
8  E-3 64 10  .  .  .
C  D-3 64 10  .  .  .
```

```phrase
# PHRASE 44  (leader's coda, written at pitch, against bar 4 below)
0  G-4 64 10  .  .  .
4  A-4 64 10  .  .  .
8  C-5 64 10  .  .  .
C  D-5 64 10  .  .  .
```

```chain
# CHAIN 40  (track 6, leader)
0  40 0C      ; up an octave: D-4, F-4 ...
1  41 0C
2  42 0C
3  43 0C
```

```chain
# CHAIN 48  (track 7, follower: the same phrases, untransposed)
0  40 00
1  41 00
2  42 00
3  43 00
```

```song
# SONG   6  7
00       40 F1     ; track 6 bars 1-4;  track 7 rests bar 1 (chain F1: one empty phrase)
01       41 48     ; track 6 bar 5, the coda (chain 41: phrase 44);  track 7 bars 2-5
```

The ledger: track 6 plays 4 + 1 = 5 bars, track 7 plays 1 + 4 = 5. Row `01` starts at bar 5 on track 6 and at bar 2 on track 7.

The interval table for bar 3, the leader's phrase 42 an octave up over the follower's phrase 41:

| Row | Leader | Follower | Semitones | Class |
|-----|--------|----------|-----------|-------|
| `0` | `C-5` | `F-3` | 19 | 7 |
| `2` | `A-4` | `F-3` | 16 | 4 |
| `4` | `F-4` | `F-3` | 12 | 0 |
| `6` | `A-4` | `F-3` | 16 | 4 |
| `8` | `G-4` | `C-4` | 7 | 7 |
| `A` | `E-4` | `C-4` | 4 | 4 |
| `C` | `F-4` | `D-4` | 3 | 3 |

Every class is consonant, and so are those of bars 2, 4 and 5: bar 2 runs 3, 0, 3, 7, 9; bar 4 runs 4, 7, 0, 8, 9, 0, 9; bar 5 runs 3, 4, 8, 0. The two 7s in bar 3 are not successive, and the fifth on row `8` arrives by contrary motion (leader down from `A-4`, follower up from `F-3`). The close moves from a sixth to the octave by step in contrary motion: `C-5` over `E-3`, then `D-5` over `D-3`.

The rhythm table shows the recurrence at work: each bar's rhythm is chosen against the one before, so the voices never match until the cadence.

```cycles
bar       |2 . . . . . . . . . . . . . . . |3 . . . . . . . . . . . . . . . |
leader    |x . . . . . . . x . . . x . . . |x . x . x . x . x . x . x . . . |
follower  |x . . . x . . . x . . . x . x . |x . . . . . . . x . . . x . . . |

bar       |4 . . . . . . . . . . . . . . . |5 . . . . . . . . . . . . . . . |
leader    |x . . . x . . . x . . . x . . . |x . . . x . . . x . . . x . . . |
follower  |x . x . x . x . x . x . x . . . |x . . . x . . . x . . . x . . . |
```

Bar 5 doubles the rhythm, for one bar, at the cadence: within the checkpoint's rule.

This canon is strict to a fault: it has no dissonance at all. Add passing notes on rows `2`, `6`, `A` or `E` once it plays, and re-run the table on the bars either side of each.

### Why the same canon fails at the fifth, and upside down

Change chain 40's transposes from `0C` to `07` and the leader sounds a fifth above the follower's pitch. Every interval between the voices shrinks by 12 − 7 = 5 semitones, so each class *i* becomes (*i* − 5) mod 12:

| Class at the octave | 0 | 3 | 4 | 7 | 8 | 9 |
|---------------------|---|---|---|---|---|---|
| Class at the fifth | 7 | 10 | 11 | 2 | 3 | 4 |

Only octaves and sixths survive; thirds and fifths turn into sevenths and seconds. Bar 3's classes 7, 4, 0, 4, 7, 4, 3 become 2, 11, 7, 11, 2, 11, 10: six dissonances in seven. A canon is composed for its interval. To write one at the fifth, run the recurrence again with the new sum: each new bar must fit the last bar a fifth lower.

Now invert the octave canon: raise the follower's chain by `18` so that it sits above the leader. Bar 3's classes become 12 − *i*: 5, 8, 0, 8, 5, 8, 9. The two fifths, on beats 1 and 3, are now fourths above the bass, on the same strong beats. The canon is not invertible, and the table said so before any note was moved: it has 7s on strong beats.

Repairing bar 3 for inversion means replacing its 7s. Over the held `F-3`, start the leader on `A-4` (class 4) in place of `C-5`; over `C-4`, take `A-4` (9) or `E-4` (4) on row `8`. Each change alters phrase 42, which is also the follower's bar 4 and the cantus for the leader's bar 4, so the recurrence runs forward again from there. That is the real cost of a canon: every note has two jobs.

## Lab

Allow 1 h 45 min. Do the tables on paper before the unit.

1. **Three voices** (10 min). Choose the top, middle and bass instruments and write each one's home range. Look in the Instrument view and the mixer for a pan or width control and record what you find. Play one line on each pair, an octave apart.
   *Product:* a three-line voice sheet (instrument, range, envelope type, placement), and a results-record line on panning.

2. **Canon at the octave** (25 min). Build the worked example and check its ledger with the [OPTION] time display (p. 11). Then extend it: discard the coda, compose bars 5 to 8 of the line by the recurrence, and write a new coda. Fill in the interval and rhythm tables for each new bar before entering it, and allow yourself passing notes.
   *Product:* an 8-bar canon with coda, and its tables.

3. **Canon at the fifth** (25 min). Set chain 40 to TSP `07` and listen to four bars of the worked example: do you hear what the table predicted? Then compose a new 4-bar canon at the fifth above, one bar's delay, using the shifted classes: a bar fits if its intervals against the previous bar, at the octave, have classes 5, 8, 9, 0, 1 or 2, since subtracting 5 mod 12 turns those into 0, 3, 4, 7, 8 and 9. If your bench test 12 showed chain transpose moving by scale degree, make a second version with a scale set and compare the answers: which keeps the mode?
   *Product:* a 4-bar canon at the fifth with its table, and a line on real against diatonic answers.

4. **A two-part invention** (30 min). Sixteen bars for two different instruments, top and middle or middle and bass:

   | Bars | Content |
   |------|---------|
   | 1-2 | subject alone in the upper voice |
   | 3-4 | answer in the lower voice (the subject's phrases in a chain at another TSP), countersubject above |
   | 5-8 | episode: a fragment of the subject in sequence, by week 7's method, the voices trading it |
   | 9-12 | subject in the lower voice in a related key, countersubject above |
   | 13-16 | a second episode shortened to two bars, then the cadence |

   Write for inversion from the start: no class 7 on rows `0`, `4`, `8` or `C`, and keep the voices within two octaves. Hold to the repeat budget of 2.
   *Product:* the invention, its interval table for bars 3-4 and 9-12, and one rhythm table showing the two voices never match for a full bar.

5. **The invention inverted** (15 min). Clone both voices' chains. Raise the lower voice's clones by `0C` or `18` until it lies above the other throughout. Run the complement table on bars 3-4, play it, and repair any fourth that the table or your ear finds on a beat. Check that each instrument still speaks in its new register.
   *Product:* the inverted invention, and a list of what you had to repair.

## Etude

This week's etude is **checkpoint piece 2**.

**Brief.** A contrapuntal piece for three pitched voices and one percussion voice, in which the percussion has a line of its own.

**Forces.** Four tracks: top, middle, bass, percussion. A fifth track may double nothing; leave it empty or use it only where a voice changes instrument.

**Constraints.**

- No voice doubles another's rhythm for more than one bar at a time. The rhythm table proves it for any passage you doubt.
- A canon of at least eight bars between two of the pitched voices.
- A passage of at least eight bars in invertible counterpoint, heard both ways round.
- The percussion voice states or imitates a motif at least twice, and rests for at least eight bars in all.
- Every pitched voice rests for at least four consecutive bars somewhere, and each re-entry is named in the plan.
- At least one technique from weeks 5 to 7, named: a polyrhythm between two voices, a voice in a cycle of its own length, or a labelled variation of the subject.
- Six sections; each boundary changes a stated two or three dimensions.

**Duration target.** 96 bars: twenty-four song rows of 4-bar chains, wherever voices share a clock. At 96 BPM, 96 × 2.5 = 240 s, 4 min; at 120 BPM, 96 × 2 = 192 s, 3 min 12 s.

**Repeat budget.** 2, per track, counted as in week 7. A canon's follower playing the leader's phrases is not a repeat: the budget counts one track at a time.

**Plan.** One page, before you open Song view, showing:

- the inventory: subject, countersubject and percussion motif as note names and rhythms; the voice sheet;
- an **entry chart**: one line per voice across all 96 bars, showing where it plays, rests and enters, and with what material;
- the sections with bar numbers and song rows, and the ledger for any passage where a voice runs offset;
- the interval table for the first two bars of the canon and of the invertible passage, in both positions;
- density and register curves, the register curve drawn per voice;
- the named contrasts at each boundary, and the technique from weeks 5 to 7 with its arithmetic.

One shape that meets the constraints, six sections of sixteen bars:

| Section | Bars | Song rows | Top | Middle | Bass | Percussion |
|---------|------|-----------|-----|--------|------|------------|
| A, exposition | 1-16 | `00`-`03` | subject, then countersubject | enters bar 5 with the answer | enters bar 9 with the subject | rests |
| B, episode | 17-32 | `04`-`07` | rests bars 17-24, then trades fragments with middle | fragments in sequence | long notes | enters bar 17 with its motif |
| C, canon | 33-48 | `08`-`0B` | leader | rests | follower, a bar behind, two octaves below | complements the canon's rhythm |
| D, inversion | 49-64 | `0C`-`0F` | upper line of an invertible pair; from bar 57 the same line, now the lower | lower line; from bar 57 raised above the top by chain TSP | rests bars 49-56, then free | imitates the subject's rhythm on toms |
| E, polymeter | 65-80 | `10`-`13` | subject varied, 16 steps | countersubject in a 12-step cycle | enters bar 73 | 16 steps |
| F, close | 81-96 | `14`-`17` | subject in augmentation | subject | subject a bar behind: stretto | motif, then the final bar alone |

6 × 16 = 96 bars; row *r* starts at bar 4*r* + 1, so section C starts on row `08` at bar 33. In E the 12-step cycle realigns every 3 bars (lcm(16, 12) = 48 steps), and sixteen bars hold 256 steps, which 12 does not divide (256 = 21 × 12 + 4): plan a 4-step lead-in or a reset at bar 81 and label it.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: which voice you could follow throughout, which one disappeared, and which entry worked best.

**The checkpoint rule.** Score the piece with the rubric after the listening review. A score below 3 on any criterion suggests reworking and re-scoring before week 9.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. Follow one voice from start to finish, then say where you lost it and what covered it.
2. Mark each entry you heard on the entry chart. Which planned entries passed unnoticed?
3. Did the inverted passage sound like a return or like new music?
4. Did the percussion ever sound like a voice? Where did it fall back to keeping time?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | An entry chart exists, but tables or ledger are missing, or entries fall elsewhere than planned without comment. | The entry chart matches the piece; the tables are present and correct; each departure has a reason. |
| Technique of the week | Voices move together or in parallel for long stretches; the canon or the inversion has unhandled dissonances on beats. | Three independent lines by contour and rhythm; the canon is exact; the invertible passage works both ways; the percussion carries a motif. |
| Development | The subject returns unchanged, or a phrase exceeds the budget of 2. | Each return of the subject is varied by a named operation; rests and entries articulate the form; the budget holds. |
| Sound | Voices mask each other, or one instrument fails in a register it was moved to. | Each voice stays audible in its register throughout, including after the inversion; sustained notes last as long as the counterpoint needs. |

## Going further

- Write a canon in augmentation: the follower plays the leader's phrases under a single-row groove of `0C`, at half speed. Work out how many of the leader's bars each follower bar must fit.
- Write a three-voice canon by adding a second follower two bars behind, and run the interval table on all three pairs.
- Listen to a two-part invention by J. S. Bach with the entry chart in mind, then to a canon at the fifth from his Goldberg set, following only the follower.
- Read the chapters on two-part writing in a species counterpoint text you trust, translating each exercise into rows as you go.

## Summary

- Eight monophonic tracks are eight voices; register, timbre, envelope and rhythm keep them apart.
- An interval table and a rhythm table check a passage before you hear it.
- A canon is shared phrases, a delay and a chain transpose, composed bar against previous bar.
- Invertible counterpoint treats the fifth as a dissonance, because inversion turns class 7 into class 5.
- A percussion track becomes a voice when it has a motif, rests and entries.
- Rests and entries are formal events that cost no new material.

Week 9 adds the vertical view: chords, voicings and textures under the same one-note-per-track limit.
