module.exports = function(config) {

  config.addPassthroughCopy('_input/css');
  config.addPassthroughCopy('_input/img');

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