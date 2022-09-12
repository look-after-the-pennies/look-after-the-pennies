import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
	darkMode: 'class',
	mode: 'jit',
	safelist: 'p-3 p-4 p-5',
	theme: {
		extend: {
			colors: {
				teal: {
					100: '#096'
				},
				sbanana: {
					100: '#fcf2c3',
					200: '#fae684',
					800: '#362c28',
					900: '#2c2421'
				}
			},
			ringColor: ['focus']
		}
	},
	plugins: [formsPlugin]
});
