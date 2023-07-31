/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#00a884'
			},
			textColor: {
				primary: '#00a884'
			},
			backgroundColor: {
				active: '#323739',
				primary: '#131c21',
				thumb: '#394045',
				hover: '#555'
			}
		}
	},
	plugins: []
};
