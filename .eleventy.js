module.exports = function(config) {

  config.addPassthroughCopy('_input/css')
  
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