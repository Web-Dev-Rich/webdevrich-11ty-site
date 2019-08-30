module.exports = function(config) {

  config.addPassthroughCopy('_input/css');
  config.addPassthroughCopy('_input/img');
  config.addPassthroughCopy('_input/portfolio');

  return {
    dir: {
      input: "_input",
      output: "docs"
    },
    templateFormats: [
      "md",
      "html"
    ],
    passthroughFileCopy: true
  };
};