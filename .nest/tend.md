# Tend

## Purpose

This nest receives source material and requests for the M8 course; tending
routes each to where it will be used and leaves a receipt.

## Recognise

* A source document (manual, changelog, article, patch notes): a file.
* A request or correction from the learner: a Markdown note, or a directory
  with `request.md` and `attachments/`.
* Findings from trying something on the unit: a Markdown note.

## Route

Claim with `nestling.sh claim`, read the whole item, then:

1. Source document → keep it whole in lore with a catalog card. If someone
   else holds its copyright, keep the file at a gitignored path and track
   only the card, checksum and where to obtain it.
2. A fact the course should now rely on (a tested patch value, a firmware
   difference, a decision) → revise or add a glean finding, and correct
   `docs/manual-notes.md` if it contradicts it.
3. Work to be done → a stitch on the loom.
4. A fix to a published page → make it under `course/`, or a stitch if large.
5. Hatch a receipt with `nestling.sh complete` naming each route
   (`lore:<id>`, `glean:<id>`, `loom:<id>`, `path:<path>`). If no route fits,
   `nestling.sh drop` with the reason.

## Hard rules

* Never commit third-party copyrighted files; this repository is public.
* Nothing that identifies the author goes into `course/` or the built site.
* Do not invent missing material or intent; ask the learner.
* Do not publish or deploy without the learner's approval.

## Context

* `AGENTS.md` for the repository's shape.
* `.glean/findings/INDEX.md`, especially `course-brief`.
