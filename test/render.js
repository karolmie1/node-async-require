var React = require('react/addons');
require('node-jsx').install();
require('../index').install({
	preParser: "rt",
	async: false
});

module.exports = function render(componentFilePath) {
	// body...
	var component = require(componentFilePath);
	var contents = React.renderToStaticMarkup(React.createElement(component));
	console.log(contents);
	return contents;
}