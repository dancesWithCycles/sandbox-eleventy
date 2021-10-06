//export a function that returns some settings saying
//look in the src folder for content, templates and other source code and
//use dist as output folder
module.exports = config => {
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
