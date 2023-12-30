const postcssPresetEnv = require('postcss-preset-env');

module.exports = (ctx) => {
	return {
		map: ctx.options.map,
		plugins: [
			postcssPresetEnv({
				stage: 0,
			})
		],
	}
}
