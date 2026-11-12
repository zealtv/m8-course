// {% fmalgo "07" %} draws one of the M8 FM Synth's twelve algorithms as an
// original inline SVG: boxes A-D, an arrow from each modulator to the operator
// it modulates, carriers on the bottom row with a heavy outline and an output
// stub. Say once on the page that arrows run from modulator to modulated
// operator and heavy boxes are carriers. Everything uses currentColor, so it follows the theme and prints black.
//
// The edges below come from the routing strings in docs/manual-notes.md
// section 5.3 ("modulator > carrier", "+" for parallel). They are our reading
// of that text, not a copy of any figure, and nobody has checked them against
// the unit.

const ALGORITHMS = {
  "00": { routing: "A>B>C>D", edges: ["AB", "BC", "CD"] },
  "01": { routing: "[A+B]>C>D", edges: ["AC", "BC", "CD"] },
  "02": { routing: "[A>B+C]>D", edges: ["AB", "BD", "CD"] },
  "03": { routing: "[A>B+A>C]>D", edges: ["AB", "AC", "BD", "CD"] },
  "04": { routing: "[A+B+C]>D", edges: ["AD", "BD", "CD"] },
  "05": { routing: "[A>B>C]+D", edges: ["AB", "BC"] },
  "06": { routing: "[A>B>C]+[A>B>D]", edges: ["AB", "BC", "BD"] },
  "07": { routing: "[A>B]+[C>D]", edges: ["AB", "CD"] },
  "08": { routing: "[A>B]+[A>C]+[A>D]", edges: ["AB", "AC", "AD"] },
  "09": { routing: "[A>B]+[A>C]+D", edges: ["AB", "AC"] },
  "0A": { routing: "[A>B]+C+D", edges: ["AB"] },
  "0B": { routing: "A+B+C+D", edges: [] },
};

const OPERATORS = ["A", "B", "C", "D"];
const BOX_W = 40;
const BOX_H = 30;
const GAP_X = 36;
const GAP_Y = 44;
const PAD = 8;
const STUB = 16;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const n = (x) => Math.round(x * 10) / 10;

export default function fmalgo(id) {
  const key = String(id).toUpperCase().padStart(2, "0");
  const algo = ALGORITHMS[key];
  if (!algo) throw new Error(`fmalgo: no algorithm "${id}"; use 00 to 0B`);

  const targets = Object.fromEntries(OPERATORS.map((o) => [o, []]));
  for (const [from, to] of algo.edges) targets[from].push(to);
  const carriers = OPERATORS.filter((o) => targets[o].length === 0);

  // Level 0 is the bottom row (carriers); a modulator sits one row above the
  // highest-level operator it feeds.
  const level = {};
  const levelOf = (o) => (level[o] ??= targets[o].length ? 1 + Math.max(...targets[o].map(levelOf)) : 0);
  OPERATORS.forEach(levelOf);
  const top = Math.max(...Object.values(level));

  const rows = Array.from({ length: top + 1 }, () => []);
  for (const o of OPERATORS) rows[top - level[o]].push(o);

  const widest = Math.max(...rows.map((r) => r.length));
  const innerW = widest * BOX_W + (widest - 1) * GAP_X;
  const width = innerW + PAD * 2;
  const height = PAD * 2 + (top + 1) * BOX_H + top * GAP_Y + STUB;

  const pos = {};
  rows.forEach((row, r) => {
    const rowW = row.length * BOX_W + (row.length - 1) * GAP_X;
    row.forEach((o, i) => {
      pos[o] = { x: PAD + (innerW - rowW) / 2 + i * (BOX_W + GAP_X), y: PAD + r * (BOX_H + GAP_Y) };
    });
  });

  const arrow = (x1, y1, x2, y2) => {
    // Line plus a small filled head at (x2, y2).
    const a = Math.atan2(y2 - y1, x2 - x1);
    const L = 8;
    const W = 3.5;
    const bx = x2 - L * Math.cos(a);
    const by = y2 - L * Math.sin(a);
    const p1 = [bx + W * Math.sin(a), by - W * Math.cos(a)];
    const p2 = [bx - W * Math.sin(a), by + W * Math.cos(a)];
    return (
      `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(bx)}" y2="${n(by)}"/>` +
      `<polygon points="${n(x2)},${n(y2)} ${n(p1[0])},${n(p1[1])} ${n(p2[0])},${n(p2[1])}" fill="currentColor" stroke="none"/>`
    );
  };

  let body = "";
  for (const [from, to] of algo.edges) {
    const a = pos[from];
    const b = pos[to];
    body += arrow(a.x + BOX_W / 2, a.y + BOX_H, b.x + BOX_W / 2, b.y);
  }
  for (const o of OPERATORS) {
    const { x, y } = pos[o];
    const isCarrier = carriers.includes(o);
    body += `<rect x="${n(x)}" y="${n(y)}" width="${BOX_W}" height="${BOX_H}" rx="3" stroke-width="${isCarrier ? 3 : 1.5}"/>`;
    body += `<text x="${n(x + BOX_W / 2)}" y="${n(y + BOX_H / 2 + 1)}" text-anchor="middle" dominant-baseline="central" fill="currentColor" stroke="none" font-family="system-ui, sans-serif" font-size="15" font-weight="600">${o}</text>`;
    if (isCarrier) body += arrow(x + BOX_W / 2, y + BOX_H, x + BOX_W / 2, y + BOX_H + STUB);
  }

  const label = `FM algorithm ${key}, ${algo.routing}. Carriers: ${carriers.join(", ")}.`;
  return (
    `<figure class="fmalgo">\n` +
    `<svg viewBox="0 0 ${n(width)} ${n(height)}" width="${n(width)}" height="${n(height)}" role="img" aria-label="${esc(label)}" fill="none" stroke="currentColor" stroke-width="1.5">${body}</svg>\n` +
    `<figcaption>Algorithm ${key}: ${esc(algo.routing)}. Carriers: ${carriers.join(", ")}.</figcaption>\n` +
    `</figure>`
  );
}
