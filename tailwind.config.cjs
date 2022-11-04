// const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// transparent: 'transparent',
				// current: 'currentColor',
				primary: {
					light: colors.indigo[200]
				},
				secondary: {
					light: colors.green[200]
				}
				// black: colors.black,
				// white: colors.white,
				// gray: colors.trueGray,
				// indigo: colors.indigo,
				// red: colors.rose,
				// yellow: colors.amber,
			}
		},
		fontFamily: {
			sans: ['Inter', 'ui-monospace']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
