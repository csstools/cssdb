// internal tooling
const path = require('path');

// external tooling
const caniuse = require('caniuse-lite');
const cssnano = require('cssnano');
const eslit   = require('eslit');
const fetch   = require('node-fetch');
const fs      = require('fse');
const marked  = require('marked');
const postcss = require('postcss');
const preset = require('postcss-preset-env');

// source files
const htmlTmpl = path.join(__dirname, 'start-template.html');
const pcssTmpl = path.join(__dirname, 'style-template.css');
const stagesMD = path.join(__dirname, '../STAGES.md');

// destination (configure the gh-pages directory to be the gh-pages branch)
const htmlDest = path.join(__dirname, '../gh-pages/index.html');
const pcssDest = path.join(__dirname, '../gh-pages/style.css');
const pmapDest = path.join(__dirname, '../gh-pages/style.css.map');

// option to update gh-pages without updating badges (npm start -- --no-badges)
const noBadges = process.argv.slice(2).includes('--no-badges');

// render cssdb features as html
Promise.all([
	fs.readJson('cssdb.json'),
	fs.readFile(stagesMD, 'utf8'),
	fs.readFile(pcssTmpl, 'utf8')
]).then(
	// render html from eslit template
	([ features, staging, styles ]) => Promise.all([
		eslit(
			htmlTmpl,
			{
				features: features.slice(0).sort(sortFeatures).filter(filterFeatures).map(formatFeature),
				staging:  marked(staging, markedOptions),
				mdnLogo: 'https://img.shields.io/badge/-docs-green.svg?colorA=000&colorB=919393&logoWidth=40&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMTAyLjgiPjxwYXRoIGQ9Ik0zNDMuOCA3My43Yy0uNy4yLTEuMy4zLTEuOS4zLTIuMSAwLTMuMS0uOS0zLjEtMy41VjUxYzAtMTAuMy04LjItMTUuMy0xNy45LTE1LjMtNy40IDAtMTEuNC45LTE5LjMgNC4xTDMwMCA1MC4ybDEwLjMgMS4xIDEuNS01LjFjMi4xLTEuMSA0LjItMS4zIDYuOS0xLjMgNy4zIDAgNy40IDUuNSA3LjQgMTAuMXYxLjVjLTIuMy0uMy00LjktLjQtNy40LS40LTEwLjMgMC0yMSAyLjYtMjEgMTMuNyAwIDkuNCA3LjQgMTIuOSAxMy45IDEyLjkgNy4zIDAgMTEuOS00LjQgMTQuNS05IC42IDUuNSAzLjkgOSA5LjkgOSAyLjggMCA1LjctLjggOC4xLTIuMWwtLjMtNi45em0tMjcuNi0uM2MtMy45IDAtNS4zLTIuMy01LjMtNS4yIDAtNC45IDQtNi4yIDguNi02LjIgMi4xIDAgNC40LjMgNi41LjYtLjMgNy41LTUuMiAxMC44LTkuOCAxMC44em0tMTcuMy02MC41bC0xOS41IDY4LjdoLTEyLjdsMTkuNS02OC43aDEyLjd6bS0yNi4yIDBsLTE5LjUgNjguN2gtMTIuN0wyNjAgMTIuOWgxMi43em0tNTQgMjMuN2gxMy41djE2LjJoLTEzLjVWMzYuNnptMCAyOC45aDEzLjV2MTYuMmgtMTMuNVY2NS41em0tMTkuNy0uNmwxMC4yIDEtMi44IDE1LjhoLTM5LjNsLTEuMy02LjggMjQuOC0yOC41aC0xNC4xbC0yIDctOS4zLTEgMS42LTE1LjhoMzkuNWwxIDYuOC0yNSAyOC41aDE0LjZsMi4xLTd6bS02NC41LTI5LjJjLTE2LjIgMC0yNC4yIDEwLjktMjQuMiAyNC4xIDAgMTQuNCA5LjYgMjIuOSAyMy41IDIyLjkgMTQuNCAwIDI0LjgtOS4xIDI0LjgtMjMuNSAwLTEyLjYtNy45LTIzLjUtMjQuMS0yMy41em0tLjMgMzdjLTcgMC0xMC42LTYtMTAuNi0xMy44IDAtOC41IDQuMS0xMy40IDEwLjctMTMuNCA2LjEgMCAxMSA0LjEgMTEgMTMuMiAwIDguNy00LjQgMTQtMTEuMSAxNHptLTM1LjUtLjloNnY5LjhIODUuOVY1Ni4zYzAtNy44LTIuNi0xMC44LTcuNy0xMC44LTYuMiAwLTguNyA0LjQtOC43IDEwLjd2MTUuN2g2djkuOEg1Ni42VjU2LjNjMC03LjgtMi42LTEwLjgtNy43LTEwLjgtNi4yIDAtOC43IDQuNC04LjcgMTAuN3YxNS43aDguNnY5LjhIMjEuNHYtOS44aDZWNDYuNGgtNnYtOS44aDE4Ljl2Ni44YzIuNy00LjggNy40LTcuNyAxMy43LTcuNyA2LjUgMCAxMi41IDMuMSAxNC43IDkuNyAyLjUtNiA3LjYtOS43IDE0LjctOS43IDguMSAwIDE1LjUgNC45IDE1LjUgMTUuNnYyMC41eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
			}
		),
		postcss([
			preset({ stage: 0 }),
			cssnano({ preset: 'default' }),
		]).process(styles, { from: pcssTmpl, to: pcssDest, map: { inline: false } })
	]).then(
		// write the rendered html
		([ html, css ]) => Promise.all([
			fs.writeFile(htmlDest, html),
			fs.writeFile(pcssDest, css),
			fs.writeFile(pmapDest, css.map)
		])
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
	array => console.log(`\x1b[32m✔\x1b[0m cssdb successfully published ${ array.length } features.`) || process.exit(0),
	error => console.log(`\x1b[31m✖\x1b[0m cssdb failed to published a feature.\x1b[0m\n  → ${ error }`) || process.exit(1)
);

// marked renderer
const markedOptions = {
	renderer: new marked.Renderer()
};

// marked heading renderer
markedOptions.renderer.heading = (text, level) => {
	const escapedText = text
		// strip any opening "the", "an", "a"
		.replace(/^\s*(an?|the)\s+/i, '')
		// strip colons followed by anything
		.replace(/:.+$/, '')
		// strip opening and closing non-word characters
		.replace(/^[^\w]+|[^\w]+$/g, '')
		// replace remaining non-word character strings with dashes
		.replace(/[^\w]+/g, '-')
		// lowercase the entire string
		.toLowerCase();

	return `<h${level}><a id="${escapedText}" href="#${escapedText}">${text}</a></h${level}>`;
};

// sort features by stage or title
function sortFeatures({ stage: a, id: aa }, { stage: b, id: bb }) {
	return b - a || (aa < bb ? -1 : aa > bb ? 1 : 0);
}

// filter features by stage
function filterFeatures({ stage }) {
	return stage >= 0;
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
		caniuse: 'caniuse-compat' in feature
			? { stats: feature['caniuse-compat'] }
		: feature.caniuse in caniuse.features
			? caniuse.feature(caniuse.features[feature.caniuse])
		: false,
		caniuseURL: feature.caniuse
	});
}

// format css as syntax-highlighted HTML
function postcssToHTML(root, builder) {
	function toString(node) {
		if ('atrule' === node.type) {
			return atruleToString(node);
		} if ('rule' === node.type) {
			return ruleToString(node);
		} else if ('decl' === node.type) {
			return declToString(node);
		} else if ('comment' === node.type) {
			return commentToString(node);
		} else {
			return node.nodes ? node.nodes.map(childNodes => toString(childNodes)).join('') : '';
		}
	}

	function replaceVars(string) {
		return string
			.replace(/:?--[\w-]+/g, '<span class=css-var>$&</span>')
	}

	function replaceVarsAndFns(string) {
		return replaceVars(string)
			.replace(/(:?[\w-]+)\(/g, '<span class=css-function>$1</span>(')
			.replace(/"[^"]+"/g, '<span class=css-string>$&</span>')
	}

	function atruleToString(atrule) {
		return `${atrule.raws.before||''}<span class=css-atrule><span class=css-atrule-name>@${atrule.name}</span>${atrule.raws.afterName||''}<span class=css-atrule-params>${replaceVarsAndFns(atrule.params)}</span>${atrule.raws.between||''}${atrule.nodes?`<span class=css-block>{${atrule.nodes.map(node => toString(node)).join('')}${atrule.raws.after||''}}</span>`:';'}</span>`;
	}

	function ruleToString(rule) {
		return `${rule.raws.before||''}<span class=css-rule><span class=css-selector>${replaceVars(rule.selector)}</span>${rule.raws.between||''}<span class=css-block>{${rule.nodes.map(node => toString(node)).join('')}${rule.raws.after||''}}</span></span>`;
	}

	function declToString(decl) {
		return `${decl.raws.before || ''}<span class=css-declaration><span class=css-property>${decl.prop}</span>${decl.raws.between || ':'}<span class=css-value>${replaceVarsAndFns(decl.value)}</span>;</span>`;
	}

	function commentToString(comment) {
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
		response => response.text()
	).then(
		// write the shield svg to the badge directory
		svg => fs.writeFile(
			path.join(__dirname, `../gh-pages/badge/${feature.id}.svg`),
			svg
		)
	);
}
