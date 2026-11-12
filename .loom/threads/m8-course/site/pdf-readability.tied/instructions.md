# Readability pass: the PDF and the website

Asked by the learner on 2026-11-13, after reading the whole-course PDF.

Go through the printed course and the site for formatting that hinders
reading, and fix each case, by adjusting the content or the rendering
(stylesheets, components, print settings), whichever reads better.

Reported by the learner:

- comments in tracker blocks and tables spill onto the next line;
- some characters get chopped, "for example the index".

Seen on 2026-11-13 in `tmp/print/composing-with-the-m8-a4.pdf`: on page 1
the contents list loses the first digit of numbers 10 to 23 at the left
margin; on page 47 a patch block's comment wraps ("12-tick / tail"); on
page 184 the patch worksheet's right border falls outside the page; on
page 144 a heading sits alone above most of a blank page because the wide
table after it moved to the next page.

The website gets the same treatment: desktop, phone width, light and dark.

## Model

Opus (the learner's choice on 2026-11-13).

## Result, 2026-11-13

Before and after, printed from headless Chrome as the course brief
describes: A4 188 → 187 pages, Letter 201 → 198. Worksheets one page each
in both sizes, before and after. Final PDFs in `tmp/print/`
(`composing-with-the-m8-a4.pdf`, `-letter.pdf`); the 10:00 versions are kept
beside them as `-before.pdf`.

Defect classes, counted in the A4 print before any change:

1. **Contents numbers clipped** (the reported "index"): the reader's
   contents lost the first digit of 10 to 23, 14 numbers. Rendering: a
   wider list gutter in print.
2. **Comments wrapping inside tracker blocks** (the reported spill and the
   p. 47 "12-tick / tail"): 21 blocks wrapped in A4, 17 in Letter, measured
   in the print layout at the printed width. In the source, 56 lines in 20
   blocks ran past the printed width, and 60 past the screen column (91
   characters at top level, 87 in a list item). Rendering: less side padding
   on blocks in print. Content: 52 lines in weeks 3, 4, 5, 6, 7 and 9 and the
   FM crib; a comment whose row is already long moves to a comment-only
   line beneath, at the block's comment column; a long comment splits over
   two lines; 5 comments reworded shorter. A script confirmed that every
   row's code part (everything before `;`) is unchanged, and prose outside
   the blocks is untouched.
3. **`cycles` grids too wide** (111 to 143 characters), so wrapping broke the
   alignment they exist to show: 3 blocks (week 6 twice, week 8). Content:
   each split at a bar line into two stacked systems, as a score does; every
   row's sequence of steps checked identical to the original.
4. **Lead-in or run-in heading stranded at a page foot**, its table, block or
   list on the next page (the p. 144 "Voice budget." case): about 28 pages
   in A4, found from the text of each page's last line. Rendering: a
   paragraph keeps with the block, table or list that follows it; tables of
   ten rows or more may break between rows, their head repeating. After:
   none.
5. **Tables too wide or cramped on paper**: the 17-column hex table ran past
   the A4 measure (1); number ranges broke at the hyphen in narrow columns
   ("47- / 70", week 12 and others). Rendering: tighter cell padding in
   print; number ranges in table cells never break (`.nobr`, added at build
   time, 110 ranges).
6. **Gaps before punctuation after inline code** in print, from code padding
   that has no tint on paper: 597 code spans followed by punctuation.
   Rendering: no padding in print.
7. **Worksheets in the reader** (the p. 184 border): the worksheet rules did
   not reach the reader, whose part carries `.reader-part--worksheet`, not
   `.worksheet`, so tables took the generic 100% width and their collapsed
   right border lay half outside the printable area: 5 worksheets. A long
   field label ("Longest unchanged repeat") also squeezed its line to
   nothing. Rendering: the rules now apply in the reader, grids sit 1 pt
   inside the measure, and field lines keep a minimum length.

Website, same pass (desktop 1280 px and phone 390 px, light and dark):

8. **Tracker blocks capped at the prose measure**: `article > *` limited the
   `.prose` wrapper (and each reader section) to 68ch, so blocks scrolled
   sideways at desktop width; blocks inside list items were narrower still.
   After the list change, 28 blocks on the standalone pages still scrolled at
   1280 px. Rendering: the wrappers and lists holding blocks span the column
   while their text keeps the measure. After: no block or table overflows at
   1280 px.
9. **Cramped cells on phones**: wide tables scroll (no table overflows the
   page), but their text columns shrank to one word per line (week 12's
   section table: eight-line rows). Rendering: cells with 30 or more
   characters get `class="long"` at build time and a minimum width under
   40rem.
10. **Chopped words in worksheets on phones**: "Settin|g", "TRANSP|.",
    "Instrume|nts"; on the chain sheet, column heads overlapped. Rendering:
    under 30rem, smaller grid type, labels break only between words, paired
    tables stack, inventory boxes go three to a row, score columns narrow.

Looked at as images (72 dpi, two pages at a time; worksheet edges at 300 dpi
crops). Before: every page of weeks 4, 6 and 12; the contents page and
syllabus; the first two or three pages of each of the five reading
appendices; all five worksheets. After: contents and syllabus (A4 and
Letter), week 3's lab patches, week 4's worked examples, week 6's two
`cycles` blocks, week 8's, week 12 pp. 144-147, the command reference and
arithmetic appendices, all five worksheets in A4 and Letter. Website
screenshots: the reader's contents, week 3's lab, week 6's first `cycles`
block, week 12's section table, and all five worksheets, across desktop and
phone, light and dark.

Not looked at as images: the rest of weeks 1, 2, 3, 5, 7, 8, 9, 10 and 11 and
the remaining appendix pages (about 120 printed pages). Those got
measurement only: wrapped rows and overflowing tables in the print layout at
A4 and Letter width (0 and 0 after); lead-ins and short pages from the PDF
text; block and table overflow on every built page at 1280 and 390 px.

Left:

- On a phone, tracker blocks still scroll sideways, as designed (224
  blocks); a comment-only continuation line shows only its `;` until
  scrolled. Between about 960 and 1150 px of window width, a few blocks in
  lists scroll by a few pixels.
- The line budget (91 characters at top level, 87 in a list item) and the
  comment-only continuation line are not in `docs/module-template.md`
  section 5 or in glean; this stitch was not to touch either. Worth adding
  before more blocks get written.
- Some pages now end short where a large block, or a lead-in with its
  table, moved on whole (A4 pp. 37, 154; Letter pp. 40, 42, 149): the
  intended trade.
