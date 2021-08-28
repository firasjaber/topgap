module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				exo: ['"Exo 2"', 'sans-serif'],
				inter: ['"Inter"', 'sans-serif'],
			},
			screens: {
				xxs: '420px',
				xs: '500px',
			},
			colors: {
				blue: {
					50: '#EAF6FF',
					950: '#0466C8',
					1000: '#000A1C',
				},
			},
			borderWidth: {
				3: '3px',
			},
		},
	},
	variants: {
		extend: {
			textColor: ['responsive', 'hover', 'focus', 'group-hover'],
			backgroundColor: ['hover'],
		},
	},
	plugins: [],
};
