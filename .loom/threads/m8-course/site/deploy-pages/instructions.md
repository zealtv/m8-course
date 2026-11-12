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
