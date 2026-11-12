# Deploy to GitHub Pages

- GitHub Actions workflow that builds and publishes on push to main.
- Correct path prefix for a project page.
- Confirm the published URL loads and that the print view works there.
- Publishing makes the site public: confirm with the learner before the first
  deploy, after `anonymity-audit` has passed.

## Model

Sonnet (suggested on 2026-11-12): routine site work.

## State, 2026-11-12

`.github/workflows/pages.yml` and the README's Deploying section exist and
are committed, not pushed. Pushing main triggers the first deploy once the
repository's Pages source reads "GitHub Actions". Left for the learner to
approve: the push, the Pages setting, and a check of the published URL.

## Blocked, 2026-11-12

Pushed main on 2026-11-12; the workflow ran and failed. The repository read
as private that day, and GitHub answered a request to enable Pages with "Your
current plan does not support GitHub Pages for this repository." Deploying
needs the learner to make the repository public (their decision, not an
agent's), after which: enable Pages with the "GitHub Actions" source
(`gh api -X POST repos/<owner>/m8-course/pages -f build_type=workflow`),
re-run the workflow, and check the published URL. Until then each push to
main produces a failed workflow run.
