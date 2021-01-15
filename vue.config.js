const path = require('path');

module.exports = {
	css: {
		// extract: false,
		loaderOptions: {
			scss: {
				additionalData: '@import "~@/assets/style/base/main.scss";',
			},
		},
	},
	chainWebpack: config => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.oneOf('inline')
			.resourceQuery(/inline/)
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
			.options({
				svgo: false,
			})
			.end()
			.end()
			.oneOf('external')
			.use('file-loader')
			.loader('file-loader')
			.options({
				name: 'assets/[name].[hash:8].[ext]',
				esModule: false,
			});

		config.resolve.alias.set('@', path.join(__dirname, './'));
	},
	transpileDependencies: ['dom7', 'swiper'],
};
