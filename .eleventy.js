module.exports = function(config) {

  config.addPassthroughCopy('_input/css');
  config.addPassthroughCopy('_input/img');
  config.addPassthroughCopy('_input/README.md');


  return {
    dir: {
      input: "_input",
      output: "_output"
    },
    templateFormats: [
      "md",
      "html"
    ],
    passthroughFileCopy: true
  };
};