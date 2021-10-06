//export a function that returns some settings
module.exports = config => {
return {
  //tell 11ty that markdown, data and HTML files are processed by Nunjucks.js
  markdownTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  //tel 11ty to look in the src folder for content, templates and other source code and
  //use dist as output folder
  dir: {
    input: 'src',
    output: 'dist'
  }
};
