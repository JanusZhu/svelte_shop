import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/svelte_shop/", // change to your repo name
    plugins: [svelte()],
});