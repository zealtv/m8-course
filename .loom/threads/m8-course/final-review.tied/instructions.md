# Final review

- Accuracy: check every command, parameter name and limit in the published
  pages against `docs/manual-notes.md`; list anything still untested on a
  unit.
- Coherence: read the course in order as the learner; fix forward references
  and uneven workloads against the 5 h/week budget.
- Print: produce the whole-course PDF and read it through.
- Links, headings, alt text, phone width, dark theme.
- Hand the learner the URL and the PDF.

## Model

Fable (suggested on 2026-11-12): later work builds on this, or its examples must be exactly right.

## Anonymity re-check

Repeat the `anonymity-audit` search on the final `_site/` (names, handles,
email addresses, machine paths, external assets, scripts, author meta) after
the last content change and before the learner pushes.

## Result, 2026-11-13

- Accuracy: read weeks 1-12 and the appendices in order against
  `docs/manual-notes.md` and re-worked the arithmetic (tick sums, lcm and
  phase tables, frequencies, interval tables, durations, ledgers). Every
  command token and page citation in the published pages appears in the
  notes. No instrument claim found that the notes contradict. Fixes made:
  week 2 lab timings (115 min down to 105) and one density claim; a groove
  number in week 5's etude map; the FM crib's piano and bass slot numbers
  (now week 3's); bass instrument number in weeks 11 and 12; week 12's canon
  now says its three instruments need deep-cloned chains; checklists render
  as tick boxes.
- Still untested on a unit: everything. Section 10 of the notes lists 28
  open questions; every patch value stands as a starting point.
- Coherence: forward and backward references between weeks resolve. Every
  lab sums to 1 h 45 min (week 10: 3 h, by agreement). Word counts run over
  the template's 5,000 guide in most weeks (5,100 to 7,000; week 12 about
  7,000), left as written.
- Print: whole-course reader printed to PDF from headless Chrome, A4 (188
  pages) and Letter (201), under `tmp/print/` (gitignored). Text extracted
  and searched; eight sample pages read as images (grids, wide tables,
  checklist, worksheet). The other pages were not viewed as images.
- Site: 26 built pages; no broken links or anchors, no skipped heading
  levels, one h1 each, no images without alt text. Phone width (390 px) and
  the dark theme viewed on two module pages.
- Anonymity: `_site/` built with and without `PATH_PREFIX=/m8-course/`
  searched for names, handles, email addresses, machine paths, tool names,
  scripts, external references and author or generator meta: no matches.
  The PDF's metadata carries a title and the browser's name, no author.
- Not done: "hand the learner the URL". No URL exists until the deferred
  deploy.
