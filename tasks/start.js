// internal tooling
const path = require('path');

// external tooling
const caniuse = require('caniuse-lite');
const eslit   = require('eslit');
const fetch   = require('node-fetch');
const fs      = require('fse');
const marked  = require('marked');
const postcss = require('postcss');

// source files
const template = path.join(__dirname, 'start-template.html');
const stagesMD = path.join(__dirname, '../STAGES.md');

// destination (configure the gh-pages directory to be the gh-pages branch)
const destination = path.join(__dirname, '../gh-pages/index.html');

// option to update gh-pages without updating badges (npm start -- --no-badges)
const noBadges = process.argv.slice(2).includes('--no-badges');

// render cssdb features as html
Promise.all([
	fs.readJson('cssdb.json'),
	fs.readFile(stagesMD, 'utf8')
]).then(
	// render html from eslit template
	([ features, staging ]) => eslit(
		template,
		{
			features: features.slice(0).sort(sortFeatures).map(formatFeature),
			staging:  marked(staging, markedOptions)
		}
	).then(
		// write the rendered html
		(html) => fs.writeFile(destination, html)
	).then(
		// conditionally empty the badge directory
		() => noBadges ? true : fs.rmdir(
			path.join(__dirname, '../gh-pages/badge')
		).then(
			// write all new badges
			() => Promise.all(
				features.map(writeStageSVG)
			)
		)
	).then(
		// return the array of features
		() => features
	)
).then(
	// report success or errors
	(array) => console.log(`\x1b[32m✔\x1b[0m css-db successfully published ${ array.length } features.`) || process.exit(0),
	(error) => console.log(`\x1b[31m✖\x1b[0m css-db failed to published a feature.\x1b[0m\n  → ${ error }`) || process.exit(1)
);

// marked renderer
const markedOptions = {
	renderer: new marked.Renderer()
};

// marked heading renderer
markedOptions.renderer.heading = (text, level) => {
	const escapedText = text.replace(/:.+$/, '').replace(/^[^\w]+|[^\w]+$/g, '').replace(/[^\w]+/g, '-').toLowerCase();

	return `<h${level}><a id="${escapedText}" href="#${escapedText}">${text}</a></h${level}>`;
};

// sort features by stage or title
function sortFeatures(a, b) {
	return b.stage - a.stage || b.title.toLowerCase() < a.title.toLowerCase();
}

// format feature for HTML output
function formatFeature(feature) {
	return Object.assign({}, feature, {
		// format title using marked inline lexer
		title: marked.inlineLexer(feature.title, [], {}),
		// format description using marked inline lexer
		description: marked.inlineLexer(feature.description, [], {}),
		// format example as syntax-highlighted html
		example: postcss().process(feature.example, {
			stringifier: postcssToHTML
		}).css,
		caniuse: feature.caniuse in caniuse.features ? caniuse.feature(caniuse.features[feature.caniuse]) : false,
		caniuseURL: feature.caniuse
	});
}

// format css as syntax-highlighted HTML
function postcssToHTML(root, builder) {
	function toString(node, semicolon) {
		if ('atrule' === node.type) {
			return atruleToString(node, semicolon);
		} if ('rule' === node.type) {
			return ruleToString(node, semicolon);
		} else if ('decl' === node.type) {
			return declToString(node, semicolon);
		} else if ('comment' === node.type) {
			return commentToString(node, semicolon);
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

	function commentToString(comment, semicolon) {
		return `${comment.raws.before}<span class=css-comment>/*${comment.raws.left}${comment.text}${comment.raws.right}*/</span>`;
	}

	builder(
		toString(root)
	);
}

function writeStageSVG(feature) {
	// shield colors
	const colors = [
		'414141',
		'ed782a',
		'd7b914',
		'899c1f',
		'3e7817',
		'005a9c'
	];

	const shieldSubject = 'cssdb';
	const shieldStatus = feature.stage === -1 ? 'Rejected' : encodeURIComponent(`Stage ${feature.stage}`);
	const shieldColor = colors[feature.stage] || 'd02c2c';

	return fetch(
		// get a shield svg from shields.io
		`https://img.shields.io/badge/${shieldSubject}-${shieldStatus}-${shieldColor}.svg`
	).then(
		// get the shield svg as text
		(response) => response.text()
	).then(
		// write the shield svg to the badge directory
		(svg) => fs.writeFile(
			path.join(__dirname, `../gh-pages/badge/${feature.specificationId}.svg`),
			svg
		)
	);
}
