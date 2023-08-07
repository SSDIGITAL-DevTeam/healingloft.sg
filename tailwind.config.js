/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#553A31',
				secondary: '#FFC26F',
				tertiary: '#B1602B',
				footer: '#E5E1E0',
			},

			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
}
