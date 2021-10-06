//export a function that returns some settings
module.exports = config => {
    // pass src folders through to the output folder
    config.addPassthroughCopy('./src/images/');

    //add collection named work
    config.addCollection('work', collection => {

	//return work items, sorted by displayOrder
	return collection
	    .getFilteredByGlob('./src/work/*.md')
	    .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    //add collection named featuredWork
    config.addCollection('featuredWork', collection => {

	//return work items, sorted by dispalayOder, with featured equals to true
	return collection
	    .getFilteredByGlob('./src/work/*.md')
	    .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
	    .filter(x => x.data.featured);
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
