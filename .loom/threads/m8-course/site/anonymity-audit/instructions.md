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
