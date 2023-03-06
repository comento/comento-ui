import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

const LIBRARY_NAME = 'comento-ui';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), svgLoader()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/style/base/main";`,
			},
		},
	},
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'lib/main.js'),
			name: 'ComentoUi',
			// the proper extensions will be added
			fileName: format => `${LIBRARY_NAME}.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
				assetFileNames: `${LIBRARY_NAME}.[ext]`,
			},
		},
	},
});
