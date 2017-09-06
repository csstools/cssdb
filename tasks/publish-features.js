// tooling
const eslit = require('eslit');
const fs    = require('fse');
const path  = require('path');

// features directory
const md  = path.join(__dirname, '..', 'FEATURES.md');
const tpl = path.join(__dirname, 'templates', '_features.md');

// promise a list of files within the features directory
fs.readJson('features.json').then(
	// use eslit to templatize the feature data
	(features) => eslit(
		path.join(tpl),
		{
			features: features.slice(0)
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
