// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(), // This is correct
    kit: {
        adapter: adapter()
    }
};
export default config;