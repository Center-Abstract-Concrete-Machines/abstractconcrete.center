module.exports = function (eleventyConfig) {
  // Create the filter function.
  function sortByName(values) {
    let vals = values;
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }

  eleventyConfig.addWatchTarget("src/assets/js/");
  const FOOTNOTE_MAP = [];
  eleventyConfig.addPairedShortcode(
    "footnoteref",
    function footnoteref(content, id, description) {
      const key = this.page.inputPath;
      const footnote = { id, description };

      FOOTNOTE_MAP[key] = FOOTNOTE_MAP[key] || {};
      FOOTNOTE_MAP[key][id] = footnote;

      return `<a href="#${id}-note" id="${id}-ref" aria-describedby="footnotes-label" role="doc-noteref" class="Footnotes__ref">${content}</a>`;
    }
  );
  eleventyConfig.addPassthroughCopy("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addFilter("sortByName", sortByName);
  eleventyConfig.addPassthroughCopy("src/assets/img/");
  eleventyConfig.addWatchTarget("src/assets/img/");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("src/assets/pdf/");
  eleventyConfig.addWatchTarget("src/assets/pdf/");
  eleventyConfig.addPassthroughCopy("src/assets/js/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
