module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xxs: '420px',
				xs: '500px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
