const path = require('path');

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	css: {
		// extract: false,
		loaderOptions: {
			scss: {
				additionalData: '@import "~@/assets/style/base/main.scss";',
			},
		},
	},
	chainWebpack: config => {
		config.resolve.alias.set('vue', '@vue/compat');

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => {
				return {
					...options,
					compilerOptions: {
						compatConfig: {
							MODE: 2,
						},
					},
				};
			});

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('vue-loader')
			.loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');

		// const svgRule = config.module.rule('svg');
		//
		// svgRule.uses.clear();
		//
		// svgRule
		// 	.use('babel-loader')
		// 	.loader('babel-loader')
		// 	.end()
		// 	.oneOf('inline')
		// 	.resourceQuery(/inline/)
		// 	.use('vue-svg-loader')
		// 	.loader('vue-svg-loader')
		// 	.options({
		// 		svgo: false,
		// 	})
		// 	.end()
		// 	.end()
		// 	.oneOf('external')
		// 	.use('file-loader')
		// 	.loader('file-loader')
		// 	.options({
		// 		name: 'assets/[name].[hash:8].[ext]',
		// 		esModule: false,
		// 	});

		config.resolve.alias.set('@', path.join(__dirname, 'src/'));
	},
});
