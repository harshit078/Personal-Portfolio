import mdx from '@astrojs/mdx'

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'

import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
	integrations: [tailwind(), svelte(), mdx()],
	vite: {
		plugins: [Icons({
			compiler: 'astro',
		})],
	},
	output: 'hybrid',
	adapter: cloudflare({
		imageService: 'compile',
	}),
})
