module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xxs: '420px',
				xs: '500px',
			}, 
			colors: {
				blue: {
					1000 : '#000A1C'
				}
			}
		},

	},
	variants: {
		extend: {},
	},
	plugins: [],
};
