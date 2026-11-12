# Syllabus

Status: the learner agreed this syllabus on 2026-11-12, asking for duration
targets pushed a little and allowing week 10 to run heavy. Both changes appear
below.

Every instrument claim below rests on `docs/manual-notes.md`; section numbers
in brackets, such as [N 2.1], point there. Items marked "bench test" resolve
an open question from those notes on the unit.

## 1. Course description

A twelve-week course in composing with the M8 tracker, at about five hours a
week. It assumes a learner who reads music fluently, knows harmony and
counterpoint from practice, programs, and can already build a short loop on
the M8. It does not teach music theory or what a tracker is. It teaches how
to make this instrument carry long, developed pieces, and how to build its
sounds from the synthesis engines.

Three strands run side by side:

- **Sound**: building instruments from FM Synth, Wavsynth, Macrosynth and
  Hypersynth: bells, vibes, electric pianos, basses, drums, pads.
- **Composition**: rhythm (groove, polyrhythm, polymeter), variation,
  counterpoint, harmony under a one-note-per-track limit.
- **Form**: a working method for planning and finishing pieces longer than a
  loop. This strand appears every week, not only in week 10.

The Sampler appears only as a resampling tool in week 11. MIDI and external
instruments fall outside the course.

The course assumes a standard hardware unit on firmware 6.6.4 and uses the
manual's key names. Notes mark where a headless unit might differ.

## 2. Learning outcomes

By the end, the learner can:

1. **Model the instrument.** Explain how song, chain, phrase, table, groove
   and instrument relate, predict where independent tracks will realign, and
   choose the level at which to make a given change.
2. **Design FM instruments from principle.** Choose an algorithm, ratios and
   modulator envelopes to reach a target timbre (bell, mallet, tine piano,
   bass), and explain each choice.
3. **Build a complete synthesised kit and instrument library**, with no
   samples, organised for reuse across projects.
4. **Compose with time.** Write grooves from tick arithmetic; realise
   polyrhythms and polymeters; plan and state their cycle lengths.
5. **Vary material deliberately.** Apply motivic transformations and the
   conditional and chance commands so that a listener hears development, and
   state the period of any generated variation.
6. **Write counterpoint for monophonic tracks**: two to four independent
   voices, including a canon and invertible counterpoint.
7. **Plan and complete a form.** Produce a one-page plan before sequencing,
   realise it in song view, and revise it against a rendered listening.
8. **Finish.** Mix with EQ, sends and limiter, automate over the form,
   resample to free voices, and render.

## 3. The form method

The course's answer to "I only ever write four or eight bars". Five habits,
introduced in week 1 and used in every etude:

1. **Inventory.** Before sequencing, list the material: motifs, grooves,
   instruments, harmonic areas, textures. A piece gets built from an
   inventory, and a loop is one inventory item, not a piece.
2. **Plan on one page.** Sections with bar counts, a density curve and a
   register curve across the whole duration, and one sentence per boundary
   saying what changes there. Written before opening song view.
3. **Named contrasts.** Adjacent sections differ in a stated, small number of
   dimensions: pitch material, rhythm, timbre, register, density, harmony,
   meter. Changing everything at once sounds like a new piece; changing
   nothing sounds like the loop.
4. **Transitions as objects.** A join gets its own chain, composed for the
   job: a fill, a thinning, a pivot note, a metric modulation, a silence.
5. **Return with difference.** Anything that comes back comes back changed,
   and the plan says how.

One measurable rule keeps the method honest, the **repeat budget**: each
etude states the largest number of times any phrase may sound unchanged in
succession. The budget starts at 4 and falls to 2.

Each etude carries a duration target. Targets rise each week, from 24 bars in week 2 to 96 by week 8, so that
length becomes ordinary before week 10 names the method outright.

## 4. Weekly schedule

Time per week: reading 45 min, lab 1 h 45 min, etude 2 h, listening review
30 min. Week 10 runs heavy by agreement, at about 8 hours. "Bars" means bars of 4/4 at the piece's tempo unless a week says
otherwise.

### Week 1: The M8 as a compositional system

- **Outcomes**: 1; introduces 7.
- **Reading**: manual pp. 5-15, 24-27, 38. [N 1, 2.1]
- **Concepts**: the hierarchy as a data model: what each level can vary and
  what a change there costs; shared versus cloned phrases; independent track
  positions; the song view as a score and its spare rows as a sketchbook; hex
  fluency; the form method.
- **Lab**: bench tests 1-4 from the notes (track loop point, HOP and its own
  row, groove resolution, largest groove value). Hex and tick drills. An
  audit of three existing loops: what level holds the interest, what never
  changes.
- **Etude**: the baseline. One 8-bar loop on at most four tracks, plus its
  inventory and a one-page plan for a 64-bar piece built from it. The plan
  does not get realised yet; later weeks return to this material.
- **Duration target**: 8 bars sequenced, 64 planned. **Repeat budget**: n/a.

### Week 2: FM I, bells and vibes

- **Outcomes**: 2, 3.
- **Reading**: manual pp. 16-21, 58-59. [N 5.2, 5.3]
- **Concepts**: carriers and modulators; ratio and the spectrum it yields;
  why whole-number ratios sound pitched and others sound metallic;
  modulation index as brightness; the modulator-level envelope as the main
  shaper of a struck sound; the twelve algorithms sorted by how many
  carriers they offer; feedback.
- **Lab**: bench test 5 (FM modulation routing). From one starting patch,
  build a family: tubular bell, glockenspiel, vibraphone (with an LFO for the
  motor), and one deliberately inharmonic gong.
- **Etude**: a piece for mallets and bells alone, three tracks at most.
- **Duration target**: 24 bars, in three contrasted 8-bar sections with
  written joins. **Repeat budget**: 4.

### Week 3: FM II, electric pianos and basses

- **Outcomes**: 2, 3.
- **Reading**: manual pp. 18-21, 58-59, 69-72, 75. [N 3, 5.1-5.3]
- **Concepts**: two-layer patches on the paired algorithms (tine plus body,
  reed plus bark); velocity to timbre and key scaling with TRACKING; the
  filter and amp stages as tone controls; pitch envelopes for attack; bass
  types (sub, plucked, growl) and slides with PSL; relative and absolute
  commands.
- **Lab**: bench test 6 (operator shapes and FM commands). Two electric
  pianos and three basses, each saved with a short written rationale.
- **Etude**: a duo for piano and bass with a composed bass line that has its
  own contour and rhythm, in four sections.
- **Duration target**: 32 bars. **Repeat budget**: 4.

### Week 4: Drum synthesis

- **Outcomes**: 3.
- **Reading**: manual pp. 20, 24-25, 50-53, 76-80. [N 2.3, 5.4, 5.5]
- **Concepts**: a drum as pitch sweep plus noise plus envelope; the DRUM
  envelope; kick, snare, hats, toms, clap and metallic percussion from FM
  Synth, Macrosynth and Wavsynth; tables as per-note micro-sequencers (pitch
  drops, noise bursts, flams); TIC 00 for round-robin variation; choke
  groups by sharing a track; kit layout in the instrument pool; TRANSP. off
  for percussion.
- **Lab**: bench test 9 (table versus phrase command differences). A full kit
  of at least eight instruments, with two alternative kicks and snares.
- **Checkpoint piece 1**: for the instruments of weeks 2-4 only. Four
  sections; the drums must change role at least twice.
- **Duration target**: 48 bars. **Repeat budget**: 3.

### Week 5: Time, groove and polyrhythm

- **Outcomes**: 4.
- **Reading**: manual pp. 26-27, 69-72, 81. [N 2.1, 2.2]
- **Concepts**: the tick as the unit of time; grooves as lists of step
  lengths; swing as a ratio; per-track grooves; polyrhythm defined as the
  same span divided differently; 3:2, 4:3, 3:4 exactly, and 5 and 7
  approximately with the error stated; tuplets by groove, by RET and by
  table; DEL and MTT for placement; tempo-relative envelopes.
- **Lab**: bench test 10 (uneven tuplet grooves). A groove library with the
  arithmetic written beside each: three swings, triplets, quintuplet,
  septuplet, and one of the learner's design.
- **Etude**: a piece in which at least three layers divide the bar
  differently, and the divisions change between sections.
- **Duration target**: 56 bars. **Repeat budget**: 3.

### Week 6: Polymeter

- **Outcomes**: 1, 4.
- **Reading**: manual pp. 10-13, 26, 70-71. [N 1.2, 2.1, 2.2]
- **Concepts**: polymeter defined as the same pulse grouped in cycles of
  different length; three ways to shorten a cycle (HOP in a phrase, a groove
  that skips steps, chains of unequal length); phase and least common
  multiple; planning the realignment as a formal event; isorhythm as a
  pitch cycle against a rhythm cycle of another length; RMX and SNG.
- **Lab**: bench test 8 (RMX). Phase tables for chosen length sets (for
  example 16:12, 16:12:10, 16:15), each realised on the unit and checked
  against the prediction.
- **Etude**: a piece built on a planned realignment: the cycle lengths, the
  bar where the layers meet, and what happens there, all stated in the plan.
- **Duration target**: 64 bars. **Repeat budget**: 3.

### Week 7: Variation

- **Outcomes**: 5.
- **Reading**: manual pp. 11-15, 69-72. [N 1.4, 4]
- **Concepts**: motivic operations and how each gets done on the M8:
  transposition (chain TSP, real or within a scale), inversion and
  retrograde (by hand, on a deep clone), augmentation and diminution (by
  groove), fragmentation (HOP), displacement (shifting rows, DEL),
  re-instrumentation (INS, tables), ornament (tables, ARP). Then generated
  variation: NTH for loop-count conditions, CHA for probability, RND and RNL
  with SED for repeatable chance, REP and RTO for ramps. Stating the period
  of a generated variation.
- **Lab**: bench tests 7 and 12 (NTH values; chain transpose inside a
  scale). Twelve variations on the week-1 baseline, each labelled with the
  operation used.
- **Etude**: theme and variations on the baseline material. The plan orders
  the variations by a stated principle: rising density, growing distance
  from the theme, or another of the learner's choosing.
- **Duration target**: 80 bars. **Repeat budget**: 2.

### Week 8: Counterpoint

- **Outcomes**: 6.
- **Reading**: manual pp. 10-15, 28-29. [N 1.1, 3]
- **Concepts**: eight monophonic tracks as a voice ensemble; independence of
  contour, rhythm and register; timbre and stereo placement as aids to
  separation; species exercises adapted to the phrase grid; imitation and
  canon by offset entries and chain transposition; invertible counterpoint
  by swapping registers; a drum part as a voice with its own line; rests as
  material.
- **Lab**: a two-voice canon at the octave, then at the fifth; a 16-bar
  two-part invention; the same invention inverted.
- **Checkpoint piece 2**: three pitched voices and one percussion voice. No
  voice may double another's rhythm for more than a bar. Uses at least one
  technique from weeks 5-7.
- **Duration target**: 96 bars. **Repeat budget**: 2.

### Week 9: Harmony and texture

- **Outcomes**: 3, 6.
- **Reading**: manual pp. 28-29, 50-53, 60-61, 69, 76-80. [N 3, 5.4-5.6]
- **Concepts**: chords without polyphony: Hypersynth chord banks, ARP and
  ARC, tables, paraphonic and multi-oscillator Macrosynth models, and
  voicings split across tracks; shell and rootless voicings with voice
  leading drawn from jazz practice; scales and the scale view, including
  detuned scales; the voice budget across a piece; pads and sustained
  textures from Wavsynth and Macrosynth.
- **Lab**: one progression voiced three ways (Hypersynth, split across three
  tracks, arpeggiated on one track), with a note on what each costs in
  tracks and in control over voice leading. Two pads.
- **Etude**: a reharmonised tune or original progression with a melody, a
  bass and a moving inner part. The plan includes a voice-budget table: what
  each track does in each section.
- **Duration target**: 96 bars or more. **Repeat budget**: 2.

### Week 10: Form

- **Outcomes**: 7.
- **Reading**: manual pp. 10-11, 38-39, 47. [N 1.2, 1.5, 7]
- **Concepts**: the form method stated in full, with the earlier etudes as
  evidence; forms beyond verse and loop: through-composed, arch, rondo,
  process and additive forms, large two-part forms; density and register
  curves; tempo and key change as structural events (TPO, TSP, SCG);
  composing transitions; endings; song view practice: bookmarks, spare rows,
  live mode for auditioning section orders, snapshots; listening away from
  the unit.
- **Lab**: from one inventory, three different one-page plans in three
  forms. Audition two of them roughly in live mode. Then compose three
  transitions between the same pair of sections, each by a different means,
  and choose one.
- **Hours**: about 8 this week: reading 1, lab 3, etude 3 h 30 min, review
  30 min.
- **Etude**: realise one plan as a through-composed piece. No section may
  return unchanged.
- **Duration target**: at least 3 min 30 s. **Repeat budget**: 2.

### Week 11: Mix, effects and resampling

- **Outcomes**: 8.
- **Reading**: manual pp. 30-37, 47-48, 54-57, 73-74. [N 5.7, 6, 7, 9]
- **Concepts**: the signal path; gain staging and the limiter and scope
  view; EQ per instrument and on the mix; the three sends as compositional
  material; automating mix and effects over the form with commands, and
  resetting what was changed; TRIG envelopes for ducking; resampling a
  multi-track passage to one track to free voices; render settings and
  stems; bundling.
- **Lab**: bench test 11 for headless learners (inputs). Mix the week-10
  piece. Resample one chordal passage and rebuild that section with the
  freed tracks.
- **Etude**: a revision of the week-10 piece whose automation follows the
  formal plan, with a short note listing what changed and why.
- **Duration target**: as week 10. **Repeat budget**: 2.

### Week 12: Final piece and portfolio

- **Outcomes**: all.
- **Brief**: a piece of 4 to 6 minutes using only instruments built in the
  course. It must contain: a passage of counterpoint in at least three
  voices; a polyrhythm or a polymeter with a planned realignment; material
  that returns varied by a named operation; a composed transition; mix
  automation tied to the form.
- **Milestones across the week**: inventory and plan; rough realisation of
  every section; transitions and variation; mix and render; reflection.
- **Portfolio**: the instrument library with rationales; the groove library;
  all etudes as project files and renders; every one-page plan; bench-test
  results; a reflection naming what to study next.

## 5. Assessment

The course runs as self-study, so assessment means the learner judging their
own work against stated criteria.

- **Etude rubric**, used every week. Four criteria, each scored 1 to 4 with
  descriptors given in the module:
  1. *Plan and realisation*: the piece matches its plan, or the departures
     get explained.
  2. *Technique of the week*: used accurately and audibly.
  3. *Development*: material changes over time; the repeat budget holds.
  4. *Sound*: instruments suit their roles; the mix reads clearly.
- **Listening review**: render the etude, wait until the next day, listen
  away from the unit once without stopping, then annotate the plan with what
  was heard. Thirty minutes, part of each week.
- **Checkpoints**: weeks 4 and 8, each a slightly larger piece that draws on
  the preceding weeks. A checkpoint scoring below 3 on any criterion
  suggests repeating that week's etude before moving on.
- **Final piece**: the rubric plus the brief's five requirements.
- **Portfolio**: a checklist, complete or not.

## 6. Prerequisites between weeks

| Week | Needs |
|------|-------|
| 1 | basic M8 operation |
| 2 | 1 |
| 3 | 2 |
| 4 | 2 (envelopes), 1 (tables) |
| 5 | 1, 4 (a kit to hear rhythm on) |
| 6 | 5 |
| 7 | 1, 5, 6 |
| 8 | 3 (pitched instruments), 7 |
| 9 | 3, 8 |
| 10 | 7, 8, 9 |
| 11 | 10 |
| 12 | all |

The weeks are written to be taken in order. A learner mainly after the
composition strand can take 1, 5, 6, 7, 8, 10 with factory instruments and
return to the sound weeks later; the modules say where that substitution
works.

## 7. Conventions

- Parameter values in patches serve as starting points to adjust by ear.
  None had been tried on a unit when this syllabus was drafted. Bench-test
  results and corrections from the learner go back into
  `docs/manual-notes.md`.
- Page references point to the manual edition named in the notes.
- The site names no author and carries no affiliation with the manufacturer.
