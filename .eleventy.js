module.exports = function (eleventyConfig) {
  // Static passthrough — emitted to the site root
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  // Filters
  eleventyConfig.addFilter("startsWith", (s, p) => String(s).startsWith(p));
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("htmlDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  );

  // Blog collection (newest first)
  eleventyConfig.addCollection("posts", (c) =>
    c.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // A11y: mark decorative inline SVGs (those without a label/role) as hidden
  // from assistive tech and non-focusable. Meaningful SVGs keep their aria/role.
  eleventyConfig.addTransform("decorativeSvg", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(/<svg(?![^>]*\b(aria-hidden|aria-label|role)=)([^>]*)>/g,
      '<svg aria-hidden="true" focusable="false"$2>');
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
