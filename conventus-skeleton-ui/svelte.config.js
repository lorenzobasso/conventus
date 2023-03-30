import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$api: path.resolve('./src/api'),
			$atoms: path.resolve('./src/atoms'),
			$molecules: path.resolve('./src/molecules'),
			$compounds: path.resolve('./src/compounds'),
		},
	},
	preprocess: [
		vitePreprocess({
			postcss: true,
		}),
	],
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true,
			},
		},
	},
}

export default config
