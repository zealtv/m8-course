// markdown-it extensions for the course's notation conventions
// (docs/module-template.md sections 4 to 8):
//
//   - tracker fences (phrase, chain, song, table, groove, patch, cycles)
//     become <figure class="tracker tracker--TAG">;
//   - blockquotes that open with a bold label become callouts;
//   - [SHIFT]-style key names become <kbd> keycaps;
//   - number ranges in table cells ("17-46") are kept from breaking, and
//     cells with a phrase of text are marked "long".
//
// Untagged and other-tagged fences stay ordinary code blocks.

const TRACKER_TAGS = new Set(["phrase", "chain", "song", "table", "groove", "patch", "cycles"]);
// Tags whose first token, when it starts in column 0, is a row index or label.
const ROW_TAGS = new Set(["phrase", "chain", "song", "table", "groove"]);

const CALLOUT_LABELS = new Set(["try it", "bench test", "headless", "starting point", "manual", "draft"]);

const KEY_NAMES = ["SHIFT", "OPTION", "EDIT", "PLAY", "UP", "DOWN", "LEFT", "RIGHT"];
const KEY_RE = new RegExp(`\\[(${KEY_NAMES.join("|")})\\]`, "g");

const RANGE_RE = /\b\d+[-–]\d+\b/;
const RANGE_SPLIT = /(\b\d+[-–]\d+\b)/;
const LONG_CELL = 30; // characters of source text

function renderLine(line, tag, esc) {
  let code = line;
  let comment = "";
  const semi = line.indexOf(";");
  if (semi >= 0) {
    code = line.slice(0, semi);
    comment = line.slice(semi);
  }
  let html = "";
  let firstToken = true;
  for (const part of code.split(/(\s+)/)) {
    if (part === "") continue;
    if (/^\s+$/.test(part)) {
      html += part; // exact spacing, so columns stay aligned
      continue;
    }
    const atColumnZero = firstToken && code.startsWith(part);
    firstToken = false;
    if (atColumnZero && ROW_TAGS.has(tag)) html += `<span class="tracker__row">${esc(part)}</span>`;
    else if (atColumnZero && tag === "patch") html += `<span class="tracker__label">${esc(part)}</span>`;
    else if (part === ".") html += `<span class="tracker__empty">.</span>`;
    else html += esc(part);
  }
  if (comment) html += `<span class="tracker__comment">${esc(comment)}</span>`;
  return html;
}

function renderTracker(tag, content, esc) {
  const lines = content.replace(/\s+$/, "").split("\n");
  let caption = "";
  let headRow = "";
  if (lines.length && lines[0].startsWith("#")) {
    const first = lines.shift();
    // A song title line may carry the track numbers: "# SONG   1  2  3 ...".
    // Keep the numbers as a header row above the grid, in their original
    // columns, and the name as the caption.
    const m = tag === "song" && first.match(/^(#\s*)(.+?)(\s{2,})(\d[\d ]*)$/);
    if (m) {
      caption = m[2];
      headRow = " ".repeat(m[1].length + m[2].length + m[3].length) + m[4].trimEnd();
    } else {
      caption = first.replace(/^#\s*/, "").trim();
    }
  }
  const rows = lines.map((l) => renderLine(l.replace(/\s+$/, ""), tag, esc));
  if (headRow) rows.unshift(`<span class="tracker__head">${esc(headRow)}</span>`);
  return (
    `<figure class="tracker tracker--${tag}">\n` +
    (caption ? `<figcaption class="tracker__caption">${esc(caption)}</figcaption>\n` : "") +
    `<pre class="tracker__grid" tabindex="0">${rows.join("\n")}</pre>\n` +
    `</figure>\n`
  );
}

export default function markdownComponents(md) {
  const esc = md.utils.escapeHtml;

  // Tracker fences.
  const defaultFence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const tag = token.info.trim().split(/\s+/)[0];
    if (!TRACKER_TAGS.has(tag)) return defaultFence(tokens, idx, options, env, self);
    return renderTracker(tag, token.content, esc);
  };

  // Callouts: a blockquote whose first paragraph opens with a bold label.
  md.core.ruler.push("callouts", (state) => {
    const t = state.tokens;
    for (let i = 0; i < t.length; i++) {
      if (t[i].type !== "blockquote_open") continue;
      const para = t[i + 1];
      const inline = t[i + 2];
      if (para?.type !== "paragraph_open" || inline?.type !== "inline") continue;
      // markdown-it can leave an empty text token ahead of the opening "**".
      const kids = (inline.children || []).filter((k, j) => !(j === 0 && k.type === "text" && k.content === ""));
      if (kids[0]?.type !== "strong_open" || kids[1]?.type !== "text" || kids[2]?.type !== "strong_close") continue;
      const label = kids[1].content.trim().replace(/\.$/, "").toLowerCase();
      if (!CALLOUT_LABELS.has(label)) continue;
      t[i].attrJoin("class", `callout callout--${label.replace(/\s+/g, "-")}`);
    }
  });

  // Number ranges in table cells ("99-114", "75–82") never break at the dash,
  // so a narrow Bars column does not split a range over two lines.
  // A cell holding a phrase or more of text is marked "long", so that on a
  // phone, where a wide table scrolls, its column keeps a readable width
  // instead of shrinking to its longest word (see .prose td.long).
  md.core.ruler.push("cell_ranges", (state) => {
    let cell = null;
    for (const block of state.tokens) {
      if (block.type === "td_open" || block.type === "th_open") cell = block;
      else if (block.type === "td_close" || block.type === "th_close") cell = null;
      if (!cell || block.type !== "inline" || !block.children) continue;
      if (block.content.length >= LONG_CELL) cell.attrJoin("class", "long");
      const out = [];
      for (const child of block.children) {
        if (child.type !== "text" || !RANGE_RE.test(child.content)) {
          out.push(child);
          continue;
        }
        for (const [i, part] of child.content.split(RANGE_SPLIT).entries()) {
          if (part === "") continue;
          const t = new state.Token(i % 2 ? "html_inline" : "text", "", 0);
          t.content = i % 2 ? `<span class="nobr">${esc(part)}</span>` : part;
          out.push(t);
        }
      }
      block.children = out;
    }
  });

  // Key names: [SHIFT] -> <kbd class="key">SHIFT</kbd>. Code spans and fences
  // are left alone because only plain text tokens are rewritten.
  md.core.ruler.push("keys", (state) => {
    for (const block of state.tokens) {
      if (block.type !== "inline" || !block.children) continue;
      const out = [];
      for (const child of block.children) {
        if (child.type !== "text" || !child.content.includes("[")) {
          out.push(child);
          continue;
        }
        let last = 0;
        for (const m of child.content.matchAll(KEY_RE)) {
          if (m.index > last) {
            const t = new state.Token("text", "", 0);
            t.content = child.content.slice(last, m.index);
            out.push(t);
          }
          const k = new state.Token("html_inline", "", 0);
          k.content = `<kbd class="key">${m[1]}</kbd>`;
          out.push(k);
          last = m.index + m[0].length;
        }
        if (last === 0) out.push(child);
        else if (last < child.content.length) {
          const t = new state.Token("text", "", 0);
          t.content = child.content.slice(last);
          out.push(t);
        }
      }
      block.children = out;
    }
  });
}
