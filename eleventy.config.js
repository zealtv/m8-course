// Eleventy configuration for the M8 course site.
//
// Content lives in course/, templates and assets in site/. The site works
// with JavaScript off and loads nothing from outside its own origin.
//
// PATH_PREFIX sets the URL prefix for a project page, e.g. PATH_PREFIX=/m8-course/
// (see README.md). Every internal link goes through the `url` filter, which
// applies it.

import markdownComponents from "./site/lib/markdown-components.js";
import fmalgo from "./site/lib/fmalgo.js";

const rawPrefix = process.env.PATH_PREFIX || "/";
const pathPrefix = "/" + rawPrefix.replace(/^\/+|\/+$/g, "") + (/^\/*$/.test(rawPrefix) ? "" : "/");

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "site/assets": "assets" });

  // Give every h2-h4 a stable id, so the in-page contents and the whole-course
  // reader can link to it. Duplicate headings get -2, -3, ...
  const slugify = eleventyConfig.getFilter("slugify");
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.push("heading_ids", (state) => {
      const seen = new Map();
      const tokens = state.tokens;
      for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t.type !== "heading_open" || !/^h[2-4]$/.test(t.tag) || t.attrGet("id")) continue;
        const text = tokens[i + 1].children
          .filter((c) => c.type === "text" || c.type === "code_inline")
          .map((c) => c.content)
          .join("");
        const base = slugify(text) || "section";
        const n = (seen.get(base) || 0) + 1;
        seen.set(base, n);
        t.attrSet("id", n === 1 ? base : `${base}-${n}`);
      }
    });
  });

  // Pages with `draft: true` appear under `npm run serve` but not in a build.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") return false;
  });

  // Tracker figures, callouts and key notation (see site/lib/markdown-components.js).
  eleventyConfig.amendLibrary("md", markdownComponents);
  eleventyConfig.addShortcode("fmalgo", fmalgo);

  // Weeks in course order; appendices by `order`, then title.
  eleventyConfig.addCollection("weeks", (api) =>
    api.getFilteredByGlob("course/week-*.md").sort((a, b) => a.data.week - b.data.week),
  );
  eleventyConfig.addCollection("appendices", (api) =>
    api
      .getFilteredByGlob("course/appendices/*.md")
      .filter((p) => p.filePathStem !== "/appendices/index")
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99) || a.data.title.localeCompare(b.data.title)),
  );

  // Contents list for a page: an <ol> of h2 headings, each with an inner <ol>
  // of its h3 headings. Only headings that carry an id are listed.
  eleventyConfig.addFilter("toc", (html) => {
    const strip = (s) => s.replace(/<[^>]+>/g, "").trim();
    const groups = [];
    for (const m of String(html).matchAll(/<h([23]) id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)) {
      const item = { id: m[2], text: strip(m[3]), children: [] };
      if (m[1] === "2" || !groups.length) groups.push(item);
      else groups[groups.length - 1].children.push(item);
    }
    if (!groups.length) return "";
    const link = (i) => `<a href="#${i.id}">${i.text}</a>`;
    const inner = (g) =>
      g.children.length ? `<ol>${g.children.map((c) => `<li>${link(c)}</li>`).join("")}</ol>` : "";
    return `<ol>${groups.map((g) => `<li>${link(g)}${inner(g)}</li>`).join("")}</ol>`;
  });

  // For the whole-course reader: demote headings one level (each part gets its
  // own h2), and prefix heading ids and in-page links so twelve "Overview"
  // sections do not collide.
  eleventyConfig.addFilter("forReader", (html, prefix) =>
    String(html)
      .replace(/<(\/?)h([2-5])\b/g, (_, slash, n) => `<${slash}h${Number(n) + 1}`)
      .replace(/(<h[1-6][^>]*\sid=")([^"]+)"/g, `$1${prefix}-$2"`)
      .replace(/(href=")#([^"]+)"/g, `$1#${prefix}-$2"`),
  );

  return {
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "course",
      output: "_site",
      includes: "../site/_includes",
      data: "../site/_data",
    },
  };
}
