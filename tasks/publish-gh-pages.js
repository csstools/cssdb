// tooling
const eslit  = require('eslit');
const fs     = require('fse');
const marked = require('marked');
const path   = require('path');

// features directory
const src = path.join(path.dirname(__dirname), 'css-features');
const dir = path.join(path.dirname(__dirname), 'gh-pages');
const md  = path.join(dir, 'index.html');
const tpl = path.join(__dirname, 'templates', '_gh-pages.html');

// promise a list of files within the features directory
fs.readJson('features.json').then(
	// use eslit to templatize the feature data
	(features) => eslit(
		path.join(tpl),
		{
			features: features.slice(0).map((feature) => {
				feature.title = marked(feature.title);

				return feature;
			})
		}
	).then(
		// write the compiled template
		(compiled) => fs.writeFile(md, compiled)
	).then(
		// return the array of features
		() => features
	)
).then(
	// report success or errors
	(array) => console.log(`\x1b[32m✔\x1b[0m css-db successfully published ${ array.length } features.`),
	(error) => console.log(`\x1b[31m✖\x1b[0m css-db failed to published a feature.\x1b[0m\n  → ${ error }`)
);
