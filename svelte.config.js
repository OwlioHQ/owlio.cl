import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const is_dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		script: true,
	}),
	kit: {
		adapter: adapter({
			precompress: true,
		}),
	},
	compilerOptions: {
		hmr: is_dev,
		dev: is_dev,
		runes: true,
		modernAst: true,
	},
};

export default config;
