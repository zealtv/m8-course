# Composing with the M8

A twelve-week course on composing with the Dirtywave M8 tracker, built as a
static website with [Eleventy](https://www.11ty.dev/) from Markdown. The site
loads no scripts, fonts or trackers from elsewhere and works with JavaScript
off.

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

Before the first deploy, set the Pages source: in the repository's Settings,
under Pages, choose "GitHub Actions" as the source. Until that is set, the
deploy job fails. The site publishes to `https://<owner>.github.io/m8-course/`
and is public.

The workflow uploads the built `_site/` as an artifact rather than serving a
branch, so GitHub's Jekyll step never runs and no `.nojekyll` file is needed.

## Layout of the repository

| Path | Holds |
|------|-------|
| `course/` | Content. `index.md` is the home page, `syllabus.md` the syllabus, `week-NN-slug.md` one file per week, `appendices/` the appendices, `reader.njk` the whole-course page. |
| `site/_includes/` | Layouts: `home`, `module`, `appendix`, `reader`, plus `base` and `page`. |
| `site/_data/site.js` | Site title and description. It has no author or contact fields, by design. |
| `site/assets/` | `style.css`, copied to `_site/assets/`. |
| `eleventy.config.js` | Collections, the contents filter and the path prefix. |
| `docs/` | The plan: manual notes, syllabus, module template. Not published. |

## Writing content

- A week file at `course/week-NN-slug.md` needs only the front matter set out
  in `docs/module-template.md`. It gets the module layout and the address
  `/weeks/week-NN-slug/` automatically, and appears in the week list, the
  previous/next links, the home page, the syllabus table and the reader.
- An appendix goes in `course/appendices/`. Optional `order` in its front
  matter sorts the list.
- `##` and `###` headings receive ids and feed the in-page contents.
- Markdown files pass through Nunjucks, so write `{% raw %}{{ ... }}{% endraw %}`
  around any literal double braces.
- British spelling. Name no author anywhere, in front matter or prose.
