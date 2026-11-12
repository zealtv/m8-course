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
