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

## Deferred, 2026-11-12

The learner deferred the deploy on 2026-11-12. State that day:

- The repository read as private, and GitHub refused to enable Pages on the
  current plan. Deploying needs the learner to make the repository public
  (their decision, not an agent's).
- The workflow's build job passed after a lockfile fix (`fsevents` had been
  recorded as extraneous instead of optional, which broke `npm ci` on
  Linux). The deploy job fails until Pages exists.
- The workflow now runs only on manual dispatch, so pushes no longer produce
  failed runs.

To deploy later: make the repository public, enable Pages with the "GitHub
Actions" source (`gh api -X POST repos/<owner>/m8-course/pages -f
build_type=workflow`), restore the push trigger in
`.github/workflows/pages.yml`, push, and check the published URL.
