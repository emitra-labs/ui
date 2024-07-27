/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],
	theme: {
		extend: {}
	},
	plugins: [],
	presets: [require('./src/lib/preset.cjs')]
};
