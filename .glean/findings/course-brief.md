# Course brief: learner, scope and constraints

When planning or writing any part of the M8 course: who it is for, what the learner chose on 2026-11-12, and the limits on what may be published.

- Learner: reads music fluently (jazz training), programs professionally,
  already makes 4-8 bar loops on the M8 and wants to get past them.
- Chosen on 2026-11-12: 12 weeks at about 5 h/week; synthesis first, with the
  Sampler only for resampling; Markdown + Eleventy on GitHub Pages; printable.
- Aims: sound design (FM, drums, pianos, bells, vibes, basses); counterpoint,
  variation, polymeter, polyrhythm; a framework of exercises for longer forms.
- Anonymised: the published pages and their metadata must not name or
  identify the author. The repository will be public; the learner said on
  2026-11-12 that author details in git history are fine.
- The manual belongs to its manufacturer: cite by section and page, write
  original prose and diagrams, and never commit the PDF (gitignored).
- The manual that arrived on 2026-11-12 describes version 6.5.2 (April 2026).
  The learner said on 2026-11-12 that they run headless firmware 6.6.4
  (`M8_V6_6_4_HEADLESS.hex`), so the firmware runs ahead of the manual.
- Write for standard hardware with the manual's standard key names, and note
  where headless might differ. Nothing specific to the learner's own device.
- The plan lives on the loom under `m8-course`. Three documents written on
  2026-11-12 govern the modules: `docs/manual-notes.md` (what the instrument
  does, with page references, changes up to firmware 6.6.4, and open
  questions to bench-test), `docs/syllabus.md` (weeks, outcomes, the form
  method; a draft until the learner agrees it) and `docs/module-template.md`
  (sections, notation blocks, voice, honesty rules).
- As of 2026-11-12 nothing in the notes had been tried on a unit. Bench-test
  answers from the learner go back into the notes.

- Working method agreed on 2026-11-12: one stitch at a time, each written by
  the model named on the stitch (Fable for weeks 5, 6, 8, 10 and the final
  review; Opus for the other weeks; Sonnet for site work), in an interactive
  session at high effort, briefed by a file that points at the notes,
  syllabus, template and the finished modules. Commit by path and push after
  each. The Pages deploy stays deferred until the learner makes the
  repository public.
- State on 2026-11-13, about 10:10: all twelve weeks and the appendices
  written, tied and pushed; the final review tied the same morning (its
  result sits at the foot of the tied `final-review` stitch). Only
  `deploy-pages` remains, waiting on the learner making the repository
  public. On 2026-11-13 the learner asked that the deploy also give the
  README a short introduction (what the course covers, prerequisites) with
  the live-site link front and centre; the stitch carries that.
- As of the 2026-11-13 review: nothing had been tried on a unit; section 10
  of the notes held 28 open questions. Word counts run over the template's
  5,000 guide in most weeks (week 12 about 7,000). Weeks 7, 9, 11 and 12
  came from delegated Opus sessions; the review read all twelve.
- Whole-course PDFs get made by printing `/reader/` from headless Chrome
  (`--print-to-pdf --no-pdf-header-footer`) into `tmp/print/` (gitignored);
  for A4, serve a copy of `_site` with `@page { size: A4; }` appended to
  `assets/print.css`. A list item starting `[ ]` renders as a tick box.
- Delegation that worked on 2026-11-13: a brief per stitch under
  `tmp/briefs/` (gitignored; `week-07.md` and `week-09.md` serve as
  patterns), sent to a second Claude Code session (in a tmux pane:
  `claude --model opus --effort high --permission-mode auto '<prompt>'`), which claims, writes,
  builds, ties, commits by path and pushes. An Opus week cost roughly 11-17%
  of a Pro 5-hour window, a Fable week written in a warm context about 8-10%.
- Each module since week 5 appends the questions it raised to section 10 of
  `docs/manual-notes.md` (26 open questions as of week 10).

## Triggers

- syllabus
- anonymised
- manual
