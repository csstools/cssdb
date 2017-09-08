// internal tooling
const path = require('path');

// external tooling
const eslit   = require('eslit');
const fs      = require('fse');
const marked  = require('marked');
const postcss = require('postcss');

// source files
const template = path.join(__dirname, 'start-template.html');
const stagesMD = path.join(__dirname, '../STAGES.md');

// destination (configure the gh-pages directory to be the gh-pages branch)
const destination = path.join(__dirname, '../gh-pages/index.html');

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
		// return the array of features
		() => features
	)
).then(
	// report success or errors
	(array) => console.log(`\x1b[32m✔\x1b[0m css-db successfully published ${ array.length } features.`),
	(error) => console.log(`\x1b[31m✖\x1b[0m css-db failed to published a feature.\x1b[0m\n  → ${ error }`)
);

// marked renderer
const markedOptions = {
	renderer: new marked.Renderer()
};

// marked heading renderer
markedOptions.renderer.heading = (text, level) => {
	const escapedText = text.toLowerCase().replace(/:.+/, '').replace(/[^\w]+$/, '').replace(/[^\w]+/g, '-');

	return `<h${level}><a id="${escapedText}" href="#${escapedText}">${text}</a></h${level}>`;
};

// sort features by stage or title
function sortFeatures(a, b) {
	return b.stage - a.stage || b.title.toLowerCase() < a.title.toLowerCase();
}

// format feature for HTML output
function formatFeature(feature) {
	return Object.assign({}, feature, {
		// format id as title
		id: String(feature.title).toLowerCase().replace(/[^\w]+/g, '-'),
		// format title using marked inline lexer
		title: marked.inlineLexer(feature.title, [], {}),
		// format example as syntax-highlighted html
		example: postcss().process(feature.example, {
			stringifier: postcssToHTML
		}).css
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

	builder(
		toString(root)
	);
}
