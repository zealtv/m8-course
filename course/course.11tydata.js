// Defaults for everything under course/.
//
// - Week files (course/week-NN-slug.md) need no layout or permalink in their
//   front matter: they get the module layout and live at /weeks/<slug>/.
// - Front matter and more specific directory data still override these.
export default {
  layout: "module.njk",
  permalink(data) {
    const stem = data.page.filePathStem; // e.g. /week-05-time, /appendices/index
    if (/^\/week-\d\d-/.test(stem)) return `/weeks${stem}/`;
    if (stem === "/index") return "/";
    if (stem.endsWith("/index")) return `${stem.slice(0, -"index".length)}`;
    return `${stem}/`;
  },
};
