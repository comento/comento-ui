import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
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
});
