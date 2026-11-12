# Composing with the M8

**Read the course: <https://zealtv.github.io/m8-course/>**

A free, twelve-week course on composing with the Dirtywave M8 tracker, at
about five hours a week. It teaches how to make the instrument carry long,
developed pieces rather than four-bar loops, and how to build its sounds from
the synthesis engines.

## What it covers

- **Sound.** FM synthesis from first principles (bells, vibes, electric
  pianos, basses) and a complete drum kit from the FM Synth, Macrosynth and
  Wavsynth. No samples; the Sampler appears only for resampling.
- **Composition.** Grooves and polyrhythm from tick arithmetic, polymeter
  with planned realignments, variation by named operations, counterpoint for
  monophonic tracks, harmony and texture under the one-note-per-track limit.
- **Form.** A method for planning and finishing pieces longer than a loop:
  an inventory, a one-page plan, named contrasts, composed transitions and a
  repeat budget. Then mixing, automation, resampling and rendering.

Each week has reading, a lab, an etude with a rubric and a listening review.
Etudes grow from 24 bars in week 2 to a final piece of 4 to 6 minutes. The
appendices hold a command reference, an FM crib, the arithmetic, a glossary
and printable worksheets, and the [whole course on one page](https://zealtv.github.io/m8-course/reader/)
prints as a single document.

## What it assumes

- You read music fluently and know harmony and counterpoint from practice;
  the course does not teach theory.
- You are at ease with programming ideas such as references, hexadecimal and
  least common multiples.
- You can already operate an M8 and build a short loop on it.
- A standard hardware unit on firmware 6.6.4 and the manufacturer's manual
  to hand (the course cites it by page). Notes mark where a headless unit
  might differ.

One caution: when the course was written, none of its patch values or
procedures had been tried on a unit. Values stand as starting points, and
the modules include bench tests for what the manual leaves open.

The course has no affiliation with the manufacturer.

## About this repository

The site is static, built with [Eleventy](https://www.11ty.dev/) from
Markdown. It loads no scripts, fonts or trackers from elsewhere and works
with JavaScript off.

## Build and serve

You need Node 18 or later.

```sh
npm install
npm run build    # writes the site to _site/
npm run serve    # builds, serves at http://localhost:8080/ and rebuilds on change
```

### Path prefix

A GitHub Pages project page lives under a sub-path, so every internal link
needs a prefix. Set `PATH_PREFIX` when building:

```sh
PATH_PREFIX=/m8-course/ npm run build
```

Leave it unset for the root (`/`) build that `npm run serve` uses. All links go
through Eleventy's `url` filter, which applies the prefix; write new links in
templates as `{{ '/syllabus/' | url }}`.

## Deploying

Pushing to `main` runs `.github/workflows/pages.yml`, which builds the site
with `PATH_PREFIX=/m8-course/` and publishes `_site/` to GitHub Pages. You can
also run it by hand from the repository's Actions tab ("Deploy to GitHub
Pages", then "Run workflow").

The Pages source in the repository's Settings reads "GitHub Actions". The
site publishes to <https://zealtv.github.io/m8-course/>.

The workflow uploads the built `_site/` as an artifact rather than serving a
branch, so GitHub's Jekyll step never runs and no `.nojekyll` file is needed.

## Printing

The site links `site/assets/print.css` for print only. Use the browser's print
command on any page. `/reader/` holds the syllabus, every week and every
appendix in one document: a title and contents page, then each part on a new
page. Each blank worksheet under the appendices fits one A4 or Letter page.
Black on white, no navigation, and external link addresses appear after the
link text. Tracker blocks shrink and wrap rather than scroll, and are kept
whole across page breaks.

To make a PDF without a dialog (Chrome shown; write into the ignored `tmp/`):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --print-to-pdf=tmp/reader.pdf http://localhost:8080/reader/
```

Running titles and page numbers use CSS page margin boxes, which current
Chromium honours; other browsers print without them. The reader's contents list
carries no page numbers, because no browser checked supports the CSS needed.

## Layout of the repository

| Path | Holds |
|------|-------|
| `course/` | Content. `index.md` is the home page, `syllabus.md` the syllabus, `week-NN-slug.md` one file per week, `appendices/` the appendices, `reader.njk` the whole-course page. |
| `site/_includes/` | Layouts: `home`, `module`, `appendix`, `reader`, plus `base` and `page`. |
| `site/_data/site.js` | Site title and description. It has no author or contact fields, by design. |
| `site/assets/` | `style.css` and `print.css`, copied to `_site/assets/`. |
| `eleventy.config.js` | Collections, the contents filter and the path prefix. |
| `docs/` | The plan: manual notes, syllabus, module template. Not published. |

## Writing content

- A week file at `course/week-NN-slug.md` needs only the front matter set out
  in `docs/module-template.md`. It gets the module layout and the address
  `/weeks/week-NN-slug/` automatically, and appears in the week list, the
  previous/next links, the home page, the syllabus table and the reader.
- An appendix goes in `course/appendices/`. Optional `order` in its front
  matter sorts the list. The five blank worksheets there are plain HTML in
  `.njk` files with `worksheet: true`; they use the `hex` filter for row labels.
- `##` and `###` headings receive ids and feed the in-page contents.
- Markdown files pass through Nunjucks, so write `{% raw %}{{ ... }}{% endraw %}`
  around any literal double braces.
- Tracker data goes in fences tagged `phrase`, `chain`, `song`, `table`,
  `groove`, `patch` or `cycles`; callouts are blockquotes that open with a bold
  label (**Try it.**, **Bench test.**, **Headless.**, **Starting point.**,
  **Manual.**, **Draft.**); keys written as `[SHIFT]` become keycaps. The
  conventions are in `docs/module-template.md`; the code is in
  `site/lib/markdown-components.js`. `{% fmalgo "07" %}` draws FM algorithm 07.
- `course/appendices/components.md` shows every component. It has
  `draft: true`, so it appears under `npm run serve` and stays out of
  `npm run build`.
- British spelling. Name no author anywhere, in front matter or prose.
