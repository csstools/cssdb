// tooling
const eslit   = require('eslit');
const fs      = require('fse');
const marked  = require('marked');
const path    = require('path');
const postcss = require('postcss');

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
			features: features.slice(0).sort((a, b) => b.stage - a.stage).map((feature) => {
				feature.title = marked.inlineLexer(feature.title, [], {});

				feature.example = postcss().process(feature.example, {
					stringifier: (root, builder) => {
						function toString(node, semicolon) {
							if ('atrule' === node.type) {
								return atruleToString(node, semicolon);
							} if ('rule' === node.type) {
								return ruleToString(node, semicolon);
							} else if ('decl' === node.type) {
								return declToString(node, semicolon);
							} else {
								return node.nodes ? node.nodes.map((childNodes) => toString(childNodes, semicolon)).join('') : '';
							}
						}

						function atruleToString(atrule, semicolon) {
							return `${atrule.raws.before||''}<span class=css-atrule><span class=css-atrule-name>@${atrule.name}</span>${atrule.raws.afterName||''}<span class=css-atrule-params>${atrule.params}</span>${atrule.raws.between||''}${atrule.nodes?`<span class=css-block>{${atrule.nodes.map((node) => toString(node, atrule.raws.semicolon)).join('')}${atrule.raws.after||''}}</span>`:semicolon?';':''}</span>`;
						}

						function ruleToString(rule, semicolon) {
							return `${rule.raws.before||''}<span class=css-rule><span class=css-selector>${rule.selector}</span>${rule.raws.between||''}<span class=css-block>{${rule.nodes.map((node) => toString(node, rule.raws.semicolon)).join('')}${rule.raws.after||''}}</span></span>`;
						}

						function declToString(decl, semicolon) {
							return `${decl.raws.before || ''}<span class=css-declaration><span class=css-property>${decl.prop}</span>${decl.raws.between || ':'}<span class=css-value>${decl.value}</span>${semicolon?';':''}</span>`;
						}

						builder(toString(root));
					}
				}).css;

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
