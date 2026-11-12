---
title: "Syllabus"
layout: page.njk
tags: syllabus
---
## Course description

A twelve-week course in composing with the M8 tracker, at about five hours a
week. It assumes a learner who reads music fluently, knows harmony and
counterpoint from practice, programs, and can already build a short loop on
the M8. It does not teach music theory or what a tracker is. It teaches how to
make this instrument carry long, developed pieces, and how to build its sounds
from the synthesis engines.

The course assumes a standard hardware unit on firmware 6.6.4 and uses the
manual's key names. Notes mark where a headless unit might differ.

## Learning outcomes

By the end, you can:

1. **Model the instrument.** Explain how song, chain, phrase, table, groove and
   instrument relate, predict where independent tracks will realign, and choose
   the level at which to make a given change.
2. **Design FM instruments from principle.** Choose an algorithm, ratios and
   modulator envelopes to reach a target timbre, and explain each choice.
3. **Build a complete synthesised kit and instrument library**, with no
   samples, organised for reuse across projects.
4. **Compose with time.** Write grooves from tick arithmetic; realise
   polyrhythms and polymeters; plan and state their cycle lengths.
5. **Vary material deliberately**, and state the period of any generated
   variation.
6. **Write counterpoint for monophonic tracks**: two to four independent
   voices, including a canon and invertible counterpoint.
7. **Plan and complete a form.** Produce a one-page plan before sequencing,
   realise it in song view, and revise it against a rendered listening.
8. **Finish.** Mix, automate over the form, resample to free voices, and render.

## The form method

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

## Weekly schedule

{% for w in collections.weeks -%}
{%- if loop.first %}
| Week | Topic | Strand | Duration target | Repeat budget |
|------|-------|--------|-----------------|---------------|
{% endif -%}
| {{ w.data.week }} | [{{ w.data.title }}]({{ w.url | url }}) | {{ w.data.strand }} | {{ w.data.duration_target }} | {{ w.data.repeat_budget or "n/a" }} |
{% endfor %}
Time per week: reading 45 min, lab 1 h 45 min, etude 2 h, listening review
30 min. Week 10 runs heavy, at about 8 hours. "Bars" means bars of 4/4 at the
piece's tempo unless a week says otherwise.

## Assessment

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

## Prerequisites between weeks

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

## Conventions

- Parameter values in patches serve as starting points to adjust by ear.
  None had been tried on a unit when this syllabus was drafted.
- The site names no author and carries no affiliation with the manufacturer.
