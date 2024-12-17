module.exports = {
	content: [
		"./templates/*.html",
		"./templates/*/*.html",
		"./*/templates/*.html",
		"./*/templates/*/*.html",
		"./*/templates/*/*/*.html",
		// "./*/static/home/assets/src/js/modules/*.js",

	],
	safelist: [
		'flex',
		'flex-wrap',
		'w-20',
		'h-20',
		'breadcrumb-wrapper',
		'errorlist',
	],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': "#fff",
			'white-10-o': "rgba(255, 255, 255, 0.1)",
			'neutral-02': '#FAFAFA',
			'neutral-05': '#F2F2F2',
			'neutral-10': '#E6E6E6',
			'neutral-20': '#CCCCCC',
			'neutral-30': '#B3B3B3;',
			'neutral-40': '#999999',
			'neutral-50': '#808080',
			'neutral-60': '#666666',
			'neutral-70': ' #4D4D4D',
			'neutral-80': '#333333',
			'neutral-90': '#1A1A1A',
			'neutral-100': '#212529',
			'neutral-black': '#000',
			'neutral-black-10': '#E6E6E6',
			'neutral-black-o-6': 'rgba(0, 0, 0, 0.6)',
			'neutral-black-o-8': 'rgba(0, 0, 0, 0.8)',
			'primary-pure': '#004993',
			'primary-pure-light': '#E6EDF5',
			'primary-pure-light-o': '#E6EDF5',
			'primary-pure-dark': '#033971',
			'primary-pure-4': '#F5F8FB',
			'primary-pure-40': '#80A4C9',
			'primary-pure-op-4': 'rgba(0, 73, 147, 0.04)',
			'primary-bg': '#F7F9FB',
			'bg-sidebar-level': '#F2F6F9',
			'negative': '#CD0F0F',
			'positivo': '#00763D',
			'borda-10': '#E9ECEF',
			//alerts
			'alert-red-100': '#EC3539',
			'alert-red-10': '#FEEBEC',
			'alert-red-10-o': 'rgba(236, 53, 57, 0.1)',

			'alert-green-100': '#A6CE44',
			'alert-green-10': '#F7FBED',
			'alert-green-10-o': 'rgba(28, 192, 102, 0.1)',

			'alert-warning-100': '#FDD426',
			'alert-warning-10': '#FFFBEA',
			'alert-warning-10-o': 'rgba(253, 212, 38, 0.1)',

		},

		spacing: {
			'0': '0',
			'1': '1px',
			'2': '0.125rem',
			'4': '0.25rem',
			'6': '0.375rem',
			'8': '0.5rem',
			'10': '.625rem',
			'12': '0.75rem',
			'14': '0.875rem',
			'16': '1rem',
			'20': '1.25rem',
			'24': '1.5rem',
			'28': '1.75rem',
			'32': '2rem',
			'40': '2.5rem',
			'48': '3rem',
			'56': '3.5rem',
			'64': '4rem',
			'72': '4.5rem',
			'80': '5rem',
			'96': '6rem',
			'120': '7.5rem',
			'160': '10rem',

		},

		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},

		lineHeight: {
			'100': '100%',
			'140': '140%',
			'150': '150%',
		},

		screens: {
			'min2xl': { 'min': '1441px' },
			// => @media (max-width: 1535px) { ... }

			'2xl': { 'max': '1441px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1367px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1281px' },
			// => @media (max-width: 1023px) { ... }

			'md2': { 'max': '1180px' },
			// => @media (max-width: 767px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }
		},



		extend: {
			letterSpacing: {
				'tight': '-0.02em'
			},
			gridTemplateColumns: {
				'grid-tabela-7': 'minmax(200px, 260px) repeat(7, minmax(80px, 200px))',
				'grid-tabela-2':'minmax(200px, 280px) 1fr'
			},

			fontSize: {
				'2xl': ['1.5rem', {
					lineHeight: '150%',
				}],
				'xl': ['1.125rem', {
					lineHeight: '150%',
				}],
				'base': ['1rem', {
					lineHeight: '150%',
				}],
				'sm': ['0.875rem', {
					lineHeight: '150%',
				}],
				'xs': ['.75rem', {
					lineHeight: '150%',
					letterSpacing: '0.03em',
				}],
				'xs-space': ['.75rem', {
					lineHeight: '150%',
					letterSpacing: '0.1em',
				}],
			},
			backgroundImage: {
				'bg-login': "url('../images/bg-login.png')",

			},


			boxShadow: {
				'xs': '0px 1px 2px #CED4DA',
				'sm': '0px 1px 2px rgba(0, 0, 0, 0.06)',
				'regular': '0px 8px 16px rgba(204, 204, 204, 0.3)',
				'lg': '0px 24px 32px rgba(204, 204, 204, 0.25)',
				'blue': '0px 0px 0px 2px rgba(0, 73, 147, 0.2)'

			}
		},
	},

	plugins: [],
}
