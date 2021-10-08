const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

//export a function that returns some settings
module.exports = config => {
    // pass src folders through to the output folder
    config.addPassthroughCopy('./src/images/');

    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
	return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
	return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
	    x => x.data.featured
	);
    });


    // Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection => {

	//using spread syntax to create a copy of the original array itself instead of mutating the original
	//the reverse method can now safely apply the mutation on the copy
	return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();

    });

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
};
