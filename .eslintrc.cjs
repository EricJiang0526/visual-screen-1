/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser'
	},
	parser: 'vue-eslint-parser',
	rules: {
		'vue/multi-word-component-names': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'quotes': ['error', 'single'],
		'no-unused-vars': 'off',
		'no-empty': ['error', {
			'allowEmptyCatch': true
		}],
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'comma-dangle': ['error', 'never'],
		'@typescript-eslint/no-explicit-any': 'off'
	}
}
