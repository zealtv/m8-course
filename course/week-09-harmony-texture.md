---
title: "Harmony and texture"
week: 9
strand: composition
outcomes: [3, 6]
needs: [3, 8]
duration_target: "96 bars or more"
repeat_budget: 2
hours: { reading: 0.75, lab: 1.75, etude: 2, review: 0.5 }
manual_pages: "28-29, 50-53, 60-61, 69, 76-80"
---

## Overview

Week 8 treated the eight tracks as eight lines. This week treats them as a keyboard with eight fingers, most of which are already busy. A chord on the M8 costs either tracks or control: spread it across tracks and every voice leads where you want it; hand it to a chord engine on one track and the voices move together, as one shape. Longer pieces need both, at different times, so this week also adds a plan for who does what: the voice budget.

By the end of the week you can:

- put shell and rootless voicings on tracks, and measure their voice leading in semitones before you listen;
- voice one progression on Hypersynth, on three tracks and as an arpeggio on one track, and state what each costs;
- use a scale to change chord quality and mode, and work out the arithmetic of a detuned scale;
- build two pads, one on Wavsynth and one on Macrosynth, that hold and move without re-attacking;
- plan a 96-bar piece with a voice-budget table, and realise it.

## Before you start

You need week 3 (TINE `14`, SUB `16`, PLUCK `17`) and week 8 (the voice sheet, the interval table's semitone counting, the entry chart). Your bench test 12 result on chain transpose inside a scale matters again here, and so does bench test 9 (a): whether table ticks follow the tempo.

Set 96 BPM: a bar lasts 2.5 s and a tick 2.5 / 96 = 26.0 ms. The examples use no scale unless they say so, so chain TSP moves notes by exact semitones.

You read jazz harmony fluently, so this module does not explain what a shell voicing is, or a tritone substitution. It shows how to put them on tracks and what the instrument charges for each.

> **Manual.** Scale view, pp. 28-29; Wavsynth, pp. 50-51; Macrosynth, pp. 52-53 and the model list, pp. 76-80; Hypersynth, pp. 60-61; ARP and ARC, p. 69.

> **Starting point.** Nobody has played any example in this module on a unit. The spellings and semitone sums were checked by arithmetic; the patch values are places to start adjusting by ear.

## Concepts

### Five routes to a chord

A track plays one note at a time (pp. 5, 91). The notes list five ways round that (section 3):

| Route | Tracks | What you control | Source |
|-------|--------|------------------|--------|
| Voices split across tracks | one per voice | every voice: pitch, rhythm, instrument, rests | pp. 5, 10-14 |
| Hypersynth chord bank | one | the bank's interval set; the played note moves the whole set | pp. 60-61 |
| `ARP` and `ARC` | one | three notes in turn: the note, +x and +y semitones | p. 69 |
| A table | one | any intervals up to sixteen rows, at the table's own rate | p. 24 |
| Macrosynth chord and pad models | one | what TIMBRE and COLOR set in that model | pp. 52-53, 76-80 |

Read the second column as the price and the third as what the price buys. Splitting costs tracks and gives independent voice leading. The four one-track routes cost one track and give you a shape: the voices start together, share an envelope and a timbre, and move in parallel unless you change the shape.

That parallel motion is the thing to plan around. Jazz voicing moves each voice by the smallest step to the next chord, which a shape moved by its root cannot do. Each one-track route has a partial answer, below; none matches split tracks.

> **Try it.** Put `C-4` on row `0` of a phrase with `ARP 47` beside it, on any sustained instrument. Then change the note to `D-4`, then to `F-4`. Write down which chord you expect at each before you play it: C, D and F major, all in root position.

### Shells and rootless voicings on tracks

A shell (root, 3rd, 7th) costs three tracks: the bass and two guide tones. In a ii-V-I each change by fifth keeps one guide tone and moves the other by a semitone, so a ii-V-I-VI in C as two guide-tone lines over a bass reads:

| Bar | Chord | Track 1 (bass) | Track 2 | Track 3 | Moves on 2 + 3 |
|-----|-------|----------------|---------|---------|----------------|
| 1 | Dm7 | `D-2` | `F-3` (3rd) | `C-4` (7th) | |
| 2 | G7 | `G-2` | `F-3` (7th) | `B-3` (3rd) | 0 + 1 = 1 |
| 3 | Cmaj7 | `C-2` | `E-3` (3rd) | `B-3` (7th) | 1 + 0 = 1 |
| 4 | A7 | `A-2` | `G-3` (7th) | `C#4` (3rd) | 3 + 2 = 5 |
| 1 | Dm7 | `D-2` | `F-3` | `C-4` | 2 + 1 = 3 |

Count semitones as in week 8 (pitch class from C, plus 12 per octave): `F-3` is 5 + 36 = 41, `C-4` 48, `B-3` 47, `E-3` 40, `G-3` 43, `C#4` 49. The loop costs 1 + 1 + 5 + 3 = 10 semitones of motion in the upper voices. The two changes by fifth cost 1 each; the change by a third, Cmaj7 to A7, costs 5, because no tone is common.

That sum is the vertical counterpart of week 8's interval table, a check on paper: compare voicings by their sums, and look for the change that costs most.

**One phrase per voice, moved by chain TSP.** A guide-tone track plays one note per chord, so it needs one phrase, and the voicing lives in the chain's TSP column. Track 2's phrase holds `E-3` and its chain reads `01`, `01`, `00`, `03` (F, F, E, G); its voice-leading distance is the sum of the differences down that column, 0 + 1 + 3 + 2 = 6. Worked example 1 builds it.

**Rootless voicings** drop the root to the bass and add the 9th or 13th. Four voices plus the bass cost five tracks:

| Chord | Form | Voices, low to high | Above the root | Moves |
|-------|------|---------------------|----------------|-------|
| Dm9 | 3-5-7-9 | `F-3` `A-3` `C-4` `E-4` | 3, 7, 10, 2 | |
| G13 | 7-9-3-13 | `F-3` `A-3` `B-3` `E-4` | 10, 2, 4, 9 | 0 + 0 + 1 + 0 = 1 |
| Cmaj9 | 3-5-7-9 | `E-3` `G-3` `B-3` `D-4` | 4, 7, 11, 2 | 1 + 2 + 0 + 2 = 5 |

Check the third column against the chord: G13 above G (pitch class 7) gives F 5 − 7 + 12 = 10, A 9 − 7 = 2, B 4, E 4 − 7 + 12 = 9. Five tracks out of eight leaves three for melody, a counter-line and drums. That is the voice budget's first hard choice.

On tracks a common tone can also *hold*: on a sustained instrument, leave that voice's row empty at the change (week 8). And a note with the I column empty changes pitch without retriggering the instrument (p. 14). No one-track route does either for one voice alone.

> **Try it.** Enter the Dm9, G13 and Cmaj9 voicings above on four tracks, one bar each, on a sustained instrument. In G13 leave rows `0` empty on the three voices that do not move. Then fill them in and compare.

### One-track chords: Hypersynth, ARP, tables, Macrosynth

**Hypersynth** plays up to six intervals from one note, each as a pair of detuned saws, with a square sub-oscillator one or two octaves down; it has 16 chord banks, a SCALE setting, SHIFT, SWARM, WIDTH and SUBOSC (pp. 60-61), and a SHAPE choice since 6.6.0 [CL 6.6.0]. The notes say little more. They do not record where the banks live, how an interval is entered or how far it may reach, whether the played note sounds whatever the bank holds, or how a phrase changes bank. Bench test 23 finds out; until then, plan banks as interval sets and enter them however your unit allows.

The shell progression above needs three banks if the played note is the bass root:

| Chord | Play | Bank (semitones above the played note) | Sounds |
|-------|------|----------------------------------------|--------|
| Dm7 | `D-2` (26) | 0, 15, 22 | `D-2`, `F-3` (41), `C-4` (48) |
| G7 | `G-2` (31) | 0, 10, 16 | `G-2`, `F-3` (41), `B-3` (47) |
| Cmaj7 | `C-2` (24) | 0, 16, 23 | `C-2`, `E-3` (40), `B-3` (47) |
| A7 | `A-2` (33) | 0, 10, 16 | `A-2`, `G-3` (43), `C#4` (49) |

The pitches match the split version exactly, and G7 and A7 share a bank. A bank behaves like a shared phrase: edit A7's to add a ♭13 and G7 changes with it. Give A7 its own bank first. If your unit sounds the played note whatever the bank holds, drop the 0. Turn SUBOSC down: below `D-2` the sub would land one or two octaves lower still.

Two Hypersynth features recover some voice leading. SHIFT cross-fades the first three intervals against the second three (pp. 60-61), so one bank can hold two voicings over one played note. Over `D-2`, intervals 0, 15, 22 give Dm7 and 5, 15, 21 give G7 (`G-2` 31 − 26 = 5; `B-3` 47 − 26 = 21). Moving SHIFT then changes chord without a new note. Almost every parameter has a command of its own, found by highlighting it and moving to the phrase (pp. 17, 75), so SHIFT can change on a row. What the cross-fade gives at its midpoint, check on your unit.

The second is SCALE, which picks a project scale or, at `00`, follows the song or the track (pp. 60-61). If it quantises the bank, one bank can play several chord qualities. Bench test 23 includes the experiment.

**`ARP xy`** plays the note, the note + x and the note + y semitones; **`ARC xy`** sets the mode (x) and the speed in ticks (y) (p. 69). The digits are hex, so neither interval can exceed `F` (15). A shell fits in three notes:

| Chord | `ARP` | From C | Why |
|-------|-------|--------|-----|
| m7 | `3A` | C, D#, A# | +3, +10 |
| 7 | `4A` | C, E, A# | +4, +10 |
| maj7 | `4B` | C, E, B | +4, +11 |
| m7, 7th below a high 3rd | `AF` | C, A#, D# an octave up | +10, +15 |

The wide form works for minor chords only: a dominant's 3rd above its 7th needs +16, one more than a hex digit holds. The note column chooses the lowest tone, so you can start the arpeggio on a guide tone: G7 as `F-3` with `ARP 6E` gives `F-3`, `B-3` (41 + 6 = 47) and `G-4` (41 + 14 = 55). That gives back a little voice leading at the price of the root.

The notes do not list the ARC modes, say whether y counts ticks per note, or say whether an arpeggio keeps cycling after its own step: bench test 24. A scale quantises ARP (p. 28), so `ARP 37` in a scale may give diatonic triads, depending on which way out-of-scale notes go (bench test 12).

**A table** gives four notes or more, any intervals, at its own rate (p. 24). The N column transposes the instrument per row. Week 7 treated it as chromatic, since p. 28's list of what a scale quantises does not include it.

```table
# INST 43's table  (TIC 06, a four-note minor seventh in 16ths)
0  00 .  .  .  .      ; root
1  03 .  .  .  .      ; minor 3rd
2  07 .  .  .  .      ; 5th
3  0A .  .  .  .      ; minor 7th: 4 rows × 6 ticks = 24, one beat
```

Fill rows `4` to `F` with the same four values, so the cycle stays in beats whatever the loop does: 16 × 6 = 96 ticks, one bar, if table ticks match the phrase's (your bench test 9 (a)). Each chord quality needs its own table: clone the instrument (p. 15) or run a second table with `TBX` (p. 72).

**Macrosynth** offers WAV PARAPHONIC, TRIPLE SAW, TRIPLE SQUARE, TRIPLE TRIANGLE, TRIPLE SIN and SAW SWARM for chords and pads (pp. 52-53, 76-80). The notes do not record what TIMBRE and COLOR do in these models. Read each model's description on pp. 76-80 and write it down. If they set the extra oscillators' intervals, a triple model is a fixed three-note shape, like a bank, moved by the played note.

> **Try it.** Put `D-4 ARP 3A` on row `0`, `G-3 ARP 4A` on row `4`, `C-4 ARP 4B` on row `8` and `A-3 ARP 4A` on row `C`. Before you play it, write the twelve notes and the upper voices' movement at each change. Then try `ARC` with y = `8` and with y = `6`.

### Scales and detuned scales

A project holds sixteen scales; each has twelve intervals, each on or off with a detune from −24.00 to +24.00 semitones (p. 28). `SCA xy` sets a track's key and scale, `SCG` the song's (p. 71). A scale quantises chain and project transpose, note entry, ARP, the PIT command and FM's PIT modulation (p. 28). The SD card carries 92 factory scales. The notes do not record the Scale view's layout or which `SCA` value means which key: open the view and the help text, and write both down.

For harmony a scale does three jobs.

- **Mode per section.** With a scale set, chain TSP should move a voicing diatonically (bench test 12), so a shell sequenced by scale degree changes quality as it goes.
- **Quality from one shape.** If Hypersynth's SCALE quantises a bank, one bank of 0, 15, 22 played on `D-2`, `G-2` and `C-2` under C major could give the whole ii-V-I. On G, 31 + 15 = 46 (`A#3`) lies outside the scale; on C, 39 (`D#3`) and 46 do. Each sits a semitone from a scale note either side, so the result shows which way your unit moves them. Up gives `G-2` `B-3` `F-4` and `C-2` `E-3` `B-3`, G7 and Cmaj7; down gives `G-2` `A-3` `F-4` and `C-2` `D-3` `A-3`. For A7, switch that bar to D harmonic minor with `SCA` (0, 2, 3, 5, 7, 8, 11 from D): 33 + 22 = 55 (`G-4`) lies inside, and 48 (`C-4`) sits a semitone below `C#4`, two above `A#3`. Up gives the A7 shell `A-2` `C#4` `G-4`.
- **Tuning.** Detune lets a scale leave equal temperament.

A **detuned scale** retunes steps. If each detune offsets its step from its equal-tempered pitch, as the range suggests, five-limit just intonation in C reads:

| Step | Ratio | Cents | Equal-tempered | Detune |
|------|-------|-------|----------------|--------|
| C | 1/1 | 0.0 | 0 | 0.00 |
| D | 9/8 | 203.9 | 200 | +0.04 |
| E | 5/4 | 386.3 | 400 | −0.14 |
| F | 4/3 | 498.0 | 500 | −0.02 |
| G | 3/2 | 702.0 | 700 | +0.02 |
| A | 5/3 | 884.4 | 900 | −0.16 |
| B | 15/8 | 1088.3 | 1100 | −0.12 |

Cents = 1200 × log₂(ratio); detune = (cents − equal-tempered) / 100, rounded to the two places the unit shows. A septimal 7th for a dominant, 7/4, comes to 968.8 cents: −0.31 on the step a minor 7th up.

Such a scale suits one key and fails others, by arithmetic. Cmaj7 and the G7 triad come out pure. Dm7 does not: D to A spans (9 − 0.16) − (2 + 0.04) = 6.80 semitones, the 40/27 fifth, about 20 cents narrower than equal temperament and 22 narrower than pure. Tune a detuned scale to the chord or pedal you hold longest, which usually means a pad.

> **Bench test.** Build the C just scale above. Play a held `C-4`, `E-4`, `G-4` on three tracks under `SCA` with that scale, then with the chromatic scale. Does the detune reach notes entered in the note column, or only values the scale quantises? Record the answer with the firmware (bench test 25).

> **Try it.** Find D harmonic minor and C major among the factory scales, or build them. Set one track to each with `SCA`, enter `A-3`, `C-4` and `D#4`, and write down where each note goes.

### Pads and sustained textures

A pad turns harmony into a surface: a slow attack, a long release, a slow change inside the sound so it never sits still. Each engine gives the change differently.

- **Wavsynth** (pp. 50-51): moving SCAN on a base shape moves its mirror position, so PULSE 50% with SCAN moved gives pulse-width modulation. On a wavetable, SCAN moves through its 64 waveforms. An LFO on SCAN gives a pad its slow motion. The WAV LP, HP, BP and BS filters work inside the waveform.
- **Macrosynth** (pp. 52-53): the chord and pad models above, plus DEGRADE and REDUX.
- **Hypersynth**: SWARM detunes each saw pair and WIDTH spreads (pp. 60-61). Whether WIDTH means stereo, check against open question 22.

Four rules carry from the instrument into the score.

- An ADSR needs an `OFF` to release (p. 18): write it, and leave room for the release before the next section.
- An ADSR retriggered by the same instrument resumes its attack from its current level [CL 6.6.0], so a re-struck pad note does not restart from silence.
- To move a pad voice, enter the new note with the I column empty: the pitch changes, the envelope and LFO carry on (p. 14). On split tracks that gives legato voice leading one voice at a time; whether a chord engine moves its whole shape the same way is bench test 23 (f).
- Pads hold tracks for whole sections: three for a split pad, one for a chord engine.

The notes record DRY and the three sends but no pan (p. 51, open question 22), so width comes from the ModFX and reverb sends.

> **Try it.** On any sustained instrument, play `C-4` with the instrument number on row `0`, then `D-4` and `E-4` on rows `4` and `8` with the I column empty. Then fill in the I column on rows `4` and `8`. Write down which version re-attacks.

### The voice budget

Eight tracks is the whole orchestra, drums included. Each role costs a known number:

| Role | Tracks |
|------|--------|
| Melody | 1 |
| Bass | 1 |
| Shell voicing over the bass | 2 |
| Rootless voicing over the bass | 4 |
| Chord engine (Hypersynth, ARP, table, Macrosynth) | 1 |
| Split pad | 2-4 |
| Inner line, counter-melody | 1 each |
| Drums, one voice at a time | 1-3 |

A full rootless texture with melody and bass costs 4 + 1 + 1 = 6 and leaves two. Add a split three-voice pad and you need nine tracks, one over budget before any drums. So plan harmony section by section, as a table of tracks against sections with a count at the foot of each column. The counts are your density curve.

Three ways to free a track, from cheapest up: let a voice rest (week 8: an entry is the cheapest event there is); hand the chords to a chord engine for a section, and give the freed tracks to a counter-line; resample a passage to one track (week 11). A section that changes route, from split shells to Hypersynth for instance, is a named contrast in texture, so the budget table doubles as a list of boundaries.

> **Try it.** Count the tracks in your checkpoint piece 2, section by section. Where could a chord have been added without dropping a voice?

## Worked examples

### The progression on three tracks

The shell progression from Concepts, a bar per chord: one phrase per track, the voicing in the chains. Bass on SUB `16`; both guide tones on TINE `14`, so they blend as one hand, in the Charleston rhythm: beat 1 (row `0`) and the 8th after beat 2 (row `6`).

```phrase
# PHRASE 50  (track 1, bass; written at C, moved by chain TSP)
0  C-2 64 16  .  .  .      ; root
8  G-2 64 16  .  .  .      ; 5th: all four chords have a perfect fifth
```

```phrase
# PHRASE 51  (track 2, lower guide tone)
0  E-3 50 14  .  .  .      ; beat 1
6  E-3 50 14  .  .  .      ; the "and" of 2
```

```phrase
# PHRASE 52  (track 3, upper guide tone)
0  B-3 50 14  .  .  .
6  B-3 50 14  .  .  .
```

Phrases 51 and 52 sit at the lowest pitch each line reaches, so every TSP stays at zero or above.

```chain
# CHAIN 50  (track 1, roots)
0  50 02      ; Dm7: D-2, A-2
1  50 07      ; G7: G-2, D-3
2  50 00      ; Cmaj7: C-2, G-2
3  50 09      ; A7: A-2, E-3
```

```chain
# CHAIN 51  (track 2)
0  51 01      ; F-3, 3rd of Dm7
1  51 01      ; F-3, 7th of G7: the common tone
2  51 00      ; E-3, 3rd of Cmaj7
3  51 03      ; G-3, 7th of A7
```

```chain
# CHAIN 52  (track 3)
0  52 01      ; C-4, 7th of Dm7
1  52 00      ; B-3, 3rd of G7
2  52 00      ; B-3, 7th of Cmaj7: the common tone
3  52 02      ; C#4, 3rd of A7
```

```song
# SONG   1  2  3
00       50 51 52     ; ii-V-I-VI in C, 4 bars
```

Check the pitches: `C-2` (24) + 2 = 26 `D-2`, + 7 = 31 `G-2`, + 9 = 33 `A-2`; the fifths 31 + 2 = 33 `A-2`, 31 + 7 = 38 `D-3`, 31 + 9 = 40 `E-3`. Track 2: `E-3` (40) + 1 = 41 `F-3`, + 3 = 43 `G-3`. Track 3: `B-3` (47) + 1 = 48 `C-4`, + 2 = 49 `C#4`. All match the table in Concepts.

The voice leading reads straight off the TSP columns. Track 2: 01, 01, 00, 03, back to 01, so 0 + 1 + 3 + 2 = 6. Track 3: 01, 00, 00, 02, back to 01, so 1 + 0 + 2 + 1 = 4. The total, 10, matches the table.

The repeat budget counts one phrase at one TSP on one track, so phrase 51 at `01` in bars 1 and 2 makes two consecutive plays: at the limit of 2, not over it. Looped, the chain never plays any phrase-and-TSP pair three times running.

The cost: three tracks, three phrases, three chains, two instruments. In return, a common tone can hold (a clone with row `0` emptied), each voice's rhythm can change by section, and track 3 can take a ♭9 on A7 alone.

### The same progression on one track

Track 4 on TINE `14`, one chord per bar as an arpeggio. The ARP digits fix the quality, so three phrases cover four chords, and the chain moves them.

```phrase
# PHRASE 53  (minor-seventh shape)
0  C-4 64 14  ARP 3A  ARC <m>6  .     ; C-4, D#4, A#4 as written
```

```phrase
# PHRASE 54  (dominant shape)
0  G-3 64 14  ARP 4A  ARC <m>6  .     ; G-3, B-3, F-4
```

```phrase
# PHRASE 55  (major-seventh shape)
0  C-4 64 14  ARP 4B  ARC <m>6  .     ; C-4, E-4, B-4
```

`<m>` stands for the ARC mode your bench test 24 finds plays the notes in order, up.

```chain
# CHAIN 53  (track 4)
0  53 02      ; Dm7: D-4, F-4, C-5
1  54 00      ; G7: G-3, B-3, F-4
2  55 00      ; Cmaj7: C-4, E-4, B-4
3  54 02      ; A7: A-3, C#4, G-4
```

Check: phrase 53, 48 + 2 = 50 `D-4`, 50 + 3 = 53 `F-4`, 50 + 10 = 60 `C-5`. Phrase 54 at `02`: 43 + 2 = 45 `A-3`, 45 + 4 = 49 `C#4`, 45 + 10 = 55 `G-4`. Phrase 55: 48, 52, 59.

The voice leading, slot by slot (note, +x, +y): Dm7 to G7, 7 + 6 + 7 = 20; G7 to Cmaj7, 5 + 5 + 6 = 16; Cmaj7 to A7, 3 + 3 + 4 = 10; A7 to Dm7, 5 + 4 + 5 = 14. Total 60, against 10 on three tracks: the shape moves in parallel with its root.

If ARC's y counts ticks per note, y = 6 puts each note on a 16th, and the three-note cycle takes 18 ticks against a 24-tick beat. A bar of 96 ticks holds 96 ÷ 6 = 16 notes: five cycles (15 notes) and one more root. The root falls on steps 0, 3, 6, 9, 12 and 15:

```cycles
beats      |x . . . x . . . x . . . x . . . |
arp root   |x . . x . . x . . x . . x . . x |
```

That is three against four inside the chord, realigning with the beat every lcm(18, 24) = 72 ticks, three beats. Whether the cycle restarts with each new note decides the bar line. If it restarts, bar 2 opens on the new root right after bar 1's last root (step 15, then step 0). If it runs on, the next root falls at tick 108, step 2 of bar 2. With y = 8 the cycle takes 3 × 8 = 24 ticks, one beat, and the roots fall on the beats as 8th-note triplets.

The cost: one track, three phrases, one instrument. Neither common tone can hold, every chord sits in root position, and the arpeggio's rhythm belongs to ARC, not to you.

## Lab

Allow 1 h 45 min. Write the semitone sums before you touch the unit.

1. **Bench test 23: Hypersynth banks** (15 min). Make a Hypersynth instrument, `40`. Find out, and record: (a) where the 16 banks live and how an interval is entered; (b) the largest and smallest interval it accepts, and whether 0 must be entered for the played note to sound; (c) how a phrase changes bank: highlight the bank setting and move to the phrase (pp. 17, 75), and note any command it gives; (d) the one-bank experiment from Concepts, SCALE at `00` and the track on C major by `SCA`; (e) what SHIFT gives at its midpoint; (f) whether a new note with the I column empty moves the chord without re-attacking.
   *Product:* six lines in the results record.

2. **Three tracks** (15 min). Build worked example 1. Play it, then make a clone of phrase 51 with row `0` empty and use it in bar 2, so `F-3` carries over from bar 1 (TINE decays, so listen for whether it is still there). Then voice A7 the other way up, 3rd below 7th: `C#3` on track 2, `G-3` on track 3. Neither line reaches it by a TSP of zero or more from its phrase, so give each a new phrase for that bar. Recompute the sums into and out of A7, and check them: 3 + 4 = 7 and 4 + 5 = 9, against 5 and 3.
   *Product:* the progression and a voice-leading table for both A7 versions.

3. **Hypersynth** (20 min). Enter the three banks from Concepts on instrument `40`, and play the progression on one track by whatever bank change test 23 found. Then give A7 its own bank with a ♭13 (0, 10, 16, 20: `A-2`, `G-3`, `C#4`, `F-4`) and check that G7 still plays as before. If test 23 (d) worked, make a second version from one bank and two scales, switching the A7 bar to D harmonic minor.
   *Product:* the bank list with each interval checked, and one or two versions of the progression.

4. **Arpeggio, and bench test 24** (20 min). Build worked example 2. Record: (a) the ARC modes from the help text; (b) whether y counts ticks per note (at y = 6, do you hear 16ths?); (c) whether the arpeggio keeps cycling after row `0`'s step; (d) whether it restarts at each new note: at the bar line, two roots running, or the root on step 2? Then give bar 2 a new phrase, `F-3 ARP 6E` (phrase 54 also plays A7), and compare.
   *Product:* four lines in the results record and the revised chain.

5. **What each version costs** (10 min). Fill in this table from tasks 2 to 4.

   | Version | Tracks | Phrases | Instruments, banks | Voices that move independently | Can a common tone hold? | Sum of moves |
   |---------|--------|---------|--------------------|--------------------------------|-------------------------|--------------|
   | Three tracks | 3 | | | | | 10 |
   | Hypersynth | 1 | | | | | |
   | Arpeggio | 1 | | | | | 60 |

   *Product:* the table and three sentences: which version you would use under a melody, which as a section's texture, and which you would resample in week 11.

6. **Two pads** (25 min). Build both below and save them. Play each through the progression, first as split voices on tracks 5-7 with the I column empty on moving notes (Wavsynth), then on one track (Macrosynth). Adjust attack and release until a chord change one bar long sounds joined.

   ```patch
   # INST 41  WAVSYNTH  "PAD W"
   SHAPE  PULSE 50%                    ; the square: moving SCAN then gives
                                       ; pulse-width modulation (pp. 50-51)
   SLOT1  ADSR  DEST: (amp level)  attack 40, decay 00, sustain full, release 60
                                       ; ends at an OFF
   SLOT2  LFO   DEST: (scan)  SHAPE TRI  TRIG FREE  FREQ by ear
                                       ; free-running, so a new note does not restart it
   FILTER LOWPASS  CUTOFF 50  RES 10    ; dark, so the pad sits under the guide tones
   MIXER  REV 40  MFX 30               ; width from the sends, since no pan is recorded
   ```

   If ADSR times count ticks, as AHD's do (pp. 18-21), attack `40` is 64 × 26.0 = 1,667 ms and release `60` is 96 ticks, one bar at 96 BPM. Whether SCAN appears among the destinations, check: if not, record which Wavsynth parameters do.

   ```patch
   # INST 42  MACROSYNTH  "PAD M"
   MODEL  TRIPLE SAW                   ; a chord and pad model (pp. 76-80)
   TIMBRE from the model page          ; the notes do not record
                                       ; what TIMBRE and COLOR do here
   COLOR  from the model page
   SLOT1  ADSR  DEST: (amp level)  attack 30, decay 00, sustain full, release 40
   SLOT2  LFO   DEST: (cutoff)  SHAPE SIN  TRIG FREE  FREQ by ear
   FILTER LOWPASS  CUTOFF 60  RES 20
   MIXER  REV 50
   ```

   Read the six chord and pad models on pp. 76-80 and write one line for each: what TIMBRE and COLOR set.
   *Product:* two saved pads, the six-line model list, and the attack and release you settled on.

### Results record

| Test | Prediction | Observed | Firmware | Date |
|------|------------|----------|----------|------|
| 23a Where banks live; entering an interval | | | | |
| 23b Interval range; is 0 needed | | | | |
| 23c Changing bank from a phrase | | | | |
| 23d SCALE on a bank: which way out-of-scale notes move | up gives G7 and Cmaj7 | | | |
| 23e SHIFT at its midpoint | | | | |
| 23f New note, I column empty | | | | |
| 24a ARC modes | | | | |
| 24b ARC y in ticks per note | 16ths at y = 6 | | | |
| 24c ARP after its own step | | | | |
| 24d Restart on a new note | | | | |
| 25 Detune reaches the note column | | | | |

## Etude

**Brief.** A reharmonised tune or an original progression, with a melody, a bass and a moving inner part, in which the way the harmony is voiced changes with the form.

**Forces.** Up to eight tracks: melody, bass, inner part, the chord tracks, a pad, and drums if you want them. Instruments from weeks 2 to 4 and this week's pads.

**Constraints.**

- If you reharmonise a tune, use one in the public domain or your own. The plan lists the original changes and the new ones for at least eight bars, each substitution named (tritone substitute, related ii, backdoor, and so on).
- Harmony by at least two routes: split across tracks in at least one section, a one-track route (Hypersynth, ARP, table or Macrosynth) in another, each chosen for a stated reason.
- The inner part has its own track and moves at least once in every bar of at least 32 bars, mostly by step or common tone at chord changes.
- One section of at least eight bars in shell or rootless voicings across tracks, with a voice-leading table. At each change by fifth, each guide tone moves by 0, 1 or 2 semitones.
- One section governed by `SCA`: a mode or scale other than the chromatic, stated in the plan.
- A pad, on Wavsynth or Macrosynth, for at least sixteen bars, with at least one voice moving legato (I column empty).
- No section uses all eight tracks, and at least one uses four or fewer.

**Duration target.** 96 bars or more: twenty-four song rows of 4-bar chains, row *r* starting at bar 4*r* + 1. At 96 BPM, 96 × 2.5 = 240 s, 4 min; at 120 BPM, 96 × 2 = 192 s, 3 min 12 s.

**Repeat budget.** 2, per track. A comping phrase reused at a new TSP for each chord is not a repeat, but a 4-bar chain looped is a loop at a larger size (week 7): change something at every song row.

**Plan.** One page, before you open Song view:

- the inventory: melody, bass line and inner line as note names and rhythms, the changes (original and new), the instruments, the banks, scales and tables;
- the sections with bar numbers and song rows, density and register curves, and the named contrasts at each boundary;
- the **voice-budget table**: one row per track, one column per section, saying what each track does there, with the number of active tracks at the foot of each column;
- the voice-leading table for the split passage, with its sums.

One shape that meets the constraints, six sections of sixteen bars:

| Track | A 1-16 | A' 17-32 | B 33-48 | C 49-64 | A'' 65-80 | Coda 81-96 |
|-------|--------|----------|---------|---------|-----------|------------|
| 1 | bass, two-feel | bass, walking | pedal | bass | bass, walking | bass |
| 2 | shell, lower | rootless 1 | Hypersynth | ARP comp | shell, lower | rootless 1 |
| 3 | shell, upper | rootless 2 | rests | counter-melody | shell, upper | rootless 2 |
| 4 | rests | rootless 3 | rests | rests | rests | rootless 3 |
| 5 | melody | melody, reharmonised | fragments | melody, varied | melody | melody, augmented |
| 6 | inner line | rootless 4 and inner line | rests | inner line | inner line | rests |
| 7 | rests | rests | PAD M | rests | PAD W | PAD W, last 8 bars |
| 8 | drums | drums | rests | drums | drums | rests |
| Active | 6 | 7 | 4 | 6 | 7 | 6 |

B takes its mode from `SCA` over the pedal; Hypersynth and the pad carry the harmony, so the inner line and drums rest and B meets the four-or-fewer rule. The inner line moves in A, A', C and A'': 64 bars. A'' returns to shells with the pad added; the coda takes three-voice rootless voicings over the pad.

**Hand in to yourself.** The project file, a render, the plan, and three lines of reflection: which route you would use again, where the inner part disappeared, and which section's budget felt wrong.

## Listening review

Render the piece. The next day, listen once, away from the unit, without stopping, then annotate the plan in a different colour. Thirty minutes in all.

1. Follow the inner part from start to finish. Where did it merge into the chords, and which track covered it?
2. At which chord changes did you hear the voices lead, and where did the harmony jump as a block? Mark both on the voice-leading table.
3. Did the change of route at each boundary register as a change of texture? Which boundary passed unnoticed?
4. Did the melody stay on top of the chords and the pad throughout? Where was it masked?

## Rubric

| Criterion | 2 | 4 |
|-----------|---|---|
| Plan and realisation | A voice-budget table exists, but tracks do other jobs in Song view than it says, without comment. | The table matches Song view section by section; the voice-leading table and the list of substitutions are present and correct; each departure has a reason. |
| Technique of the week | Chords come by one route only, or a voicing has a wrong note; the inner part rarely moves. | Two or more routes, each chosen for a stated reason; guide tones move by 0-2 semitones at fifth changes; the `SCA` section and the pad do what the plan says. |
| Development | The progression loops with the same voicing, or a phrase exceeds the budget of 2. | Each return of the head brings a named harmonic change: new changes, a new voicing or a new route; the budget holds. |
| Sound | Chords or pad mask the melody, or low voicings blur. | Melody, inner part and bass stay audible in their registers; pads hold and move without unplanned re-attacks. |

## Going further

- Voice a quartal chord on one Hypersynth bank: 0, 5, 10, 15, 19 from `E-3` gives E, A, D, G, B, the voicing from a well-known modal jazz record. Move it diatonically with a scale and compare it with the same five notes on five tracks.
- Tune a scale to 7/4 for the dominant (−0.31 on the minor 7th), and hold a dominant pad on it for eight bars.
- Listen to a Bill Evans trio recording with the left hand in mind, and to an arranger such as Gil Evans for voicings spread across instruments.
- Read the left-hand voicing chapters of a jazz piano text you trust, and translate each voicing into a bank and into tracks.

## Summary

- A chord costs tracks or control: split voices lead independently, one-track routes move as a shape.
- Voice leading can be measured as a sum of semitone moves, and on split tracks read off the chain TSP column.
- Hypersynth banks, ARP digits and tables are interval sets; SHIFT and SCALE recover some motion.
- A scale sets mode per section and may set chord quality; a detuned scale suits one key and the chords you hold longest.
- Pads hold harmony; an empty I column moves a voice without re-attack.
- The voice-budget table is the plan's view of texture: tracks against sections.

Week 10 states the form method in full, with every etude so far as evidence; the voice-budget table can join its one-page plan.
