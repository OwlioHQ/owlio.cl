import adapter from '@sveltejs/adapter-netlify';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const is_dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		script: true,
	}),
	kit: {
		adapter: adapter({
			edge: false,
			split: false,
		}),
	},
	compilerOptions: {
		hmr: is_dev,
		dev: is_dev,
		runes: true,
		modernAst: true,
		experimental: {
			async: true,
		},
	},
};

export default config;
