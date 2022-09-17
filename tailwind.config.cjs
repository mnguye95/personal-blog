/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'space-cadet' : '#1c2445',
				'honey-yellow' : '#fdb833',
				'pine-green' : '#037971',
				'light-cyan' : '#cdedf6',
				'honeydew' : '#f0fff1'
			}
		},
		fontFamily: {
			'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
			'montserrat': ['"Montserrat"', 'sans-serif'],
		},
		boxShadow: {
			'rb' : '3px 3px 0 #fff'
		}
	},
	plugins: [],
}
