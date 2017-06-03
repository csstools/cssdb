// tooling
const eslit = require('eslit');
const fs    = require('fse');
const path  = require('path');

// features directory
const dir = path.join(path.dirname(__dirname), 'css-features');
const md  = path.join(dir, 'README.md');
const tpl = path.join(__dirname, 'templates', '_features.md');

// promise a list of files within the features directory
fs.readdir(dir).then(
	(basenames) => Promise.all(
		basenames.filter(
			// filter out non-json files
			(basename) => basename.slice(-5) === '.json'
		).map(
			// read the json file
			(basename) => fs.readFile(
				path.resolve(dir, basename),
				'utf8'
			).then(
				// parse it as an object
				(content) => JSON.parse(content)
			)
		)
	)
).then(
	// use eslit to templatize the feature data
	(features) => eslit(
		path.join(tpl),
		{
			features
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
