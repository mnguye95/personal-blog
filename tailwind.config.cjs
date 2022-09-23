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
				'honeydew' : '#f0fff1',
				'deep-saffron' : '#ff9b42',
				'magic-mint' : '#acfcd9',
				'cinnamon-satin' : '#d55672',
				'blue-crayola' : '#5c7aff',
				'raisin-black' : '#332e3c'
			}
		},
		fontFamily: {
			'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
			'montserrat': ['"Montserrat"', 'sans-serif'],
			'bungee': ['"Bungee"', 'sans-serif'],
			'germania': ['"Germania One"', 'cursive']
		},
		boxShadow: {
			'rb' : '3px 3px 0 #fff'
		}
	},
	plugins: [],
}
