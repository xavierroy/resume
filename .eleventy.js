export default function(eleventyConfig) {
  eleventyConfig.addGlobalData(
    'layout', 
    './layouts/index.liquid' // Relative to `./src/_includes`
  );
  return {
    dir: {
      input: "./src",
      output: "./resume"
    }
  };
};