# Anonymity audit before publishing

The site must not identify its author.

- Built output: search for names, handles, email addresses, machine paths,
  and generator metadata (`<meta name="author">`, package.json author).
- Repository: a public repository exposes commit author names, email
  addresses, commit trailers and the owner handle in the URL, even when the
  pages themselves are clean. The learner accepted this on 2026-11-12
  ("author name etc is fine"), so the audit covers the built site and its
  metadata only.
- Working files (`.loom/`, `.glean/`, `.lore/`, `.nest/`) hold project
  history; decide whether they belong in whatever gets published.
- Re-run after the last content change.

## Result, 2026-11-12

Built the site with and without `PATH_PREFIX=/m8-course/` and searched
`_site/` for personal names, handles, email addresses, home-directory paths
and tool names: no matches. No external `src` or `href`, no `<script>`, no
author or generator meta tags; `package.json` has no author, repository or
homepage field. The check covers the scaffold, components, worksheets and
draft stubs only; `final-review` repeats it once the modules exist.
