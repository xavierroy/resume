export default function(eleventyConfig) {
  eleventyConfig.addGlobalData(
    'layout', 
    './layouts/index.liquid' // Relative to `./src/_includes`
  );
  eleventyConfig.addPassthroughCopy("./src/assets");
  return {
    dir: {
      input: "./src",
      output: "./_site"
    }
  };
};