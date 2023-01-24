const colors = require('tailwindcss/colors')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				surface: {
					DEFAULT: colors.slate[800],
					l: colors.slate[700],
					d: colors.slate[900],
					on: colors.slate[200],
				},
				primary: {
					DEFAULT: 'hsl(151.5,100%,84%)',
					l: 'hsl(151.5,100%,88%)',
					d: 'hsl(151.5,100%,80%)',
					on: 'hsl(151.5,100%,20%)',
				},
				secondary: {
					DEFAULT: 'hsl(271, 100%, 84%)',
					l: 'hsl(271, 100%, 88%)',
					d: 'hsl(271, 100%, 80%)',
					on: 'hsl(271, 100%, 20%)',
				},
			},
		},
	},

	plugins: [],
}

module.exports = config
