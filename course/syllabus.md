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
