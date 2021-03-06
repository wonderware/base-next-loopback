const fs = require("fs");
const alias = require("./make-alias");

fs.writeFileSync("./.eslintrc", JSON.stringify({
		"globals": {
			"bundle": false
		},
		"parser": "babel-eslint",
		"extends": [
			"airbnb-base",
			"eslint:recommended",
			"plugin:react/recommended"
		],
		"plugins": [
			"react",
			"chai-expect",
			"chai-friendly"
		],
		"env": {
			"browser": true,
			"node": true,
			"jasmine": true,
			"mocha": true,
			"es6": true
		},
		"settings": {
			"import/resolver": {
				"babel-module-alias": alias
			}
		},
		"rules": {
			"no-console": "warn",
			"indent": [
				"warn",
				"tab",
				{"SwitchCase":1}
			],
			"comma-dangle": [
				"warn",
				"never"
			],
			"no-extra-parens": [
				"warn",
				"all"
			],
			"import/first": ["warn"],
			"complexity": [
				"error",
				10
			],
			"curly": [
				"warn",
				"all"
			],
			"no-eval": "error",
			"yoda": [
				"warn",
				"never"
			],
			"no-use-before-define": [
				"error",
				"nofunc"
			],
			"camelcase": [
				"warn",
				{
					"properties": "always"
				}
			],
			"comma-spacing": [
				"warn",
				{
					"before": false,
					"after": true
				}
			],
			"brace-style": [
				"warn",
				"1tbs"
			],
			"consistent-this": [
				"error",
				"self"
			],
			"func-call-spacing": [
				"warn",
				"never"
			],
			"jsx-quotes": [
				"warn",
				"prefer-double"
			],
			"key-spacing": [
				"warn",
				{
					"beforeColon": false,
					"afterColon": true,
					"mode": "strict"
				}
			],
			"keyword-spacing": [
				"warn",
				{
					"before": true
				}
			],
			"max-depth": [
				"error",
				{
					"max": 3
				}
			],
			"max-nested-callbacks": [
				"error",
				{
					"max": 2
				}
			],
			"no-nested-ternary": "error",
			"no-unneeded-ternary": "error",
			"newline-after-var": [
				"warn",
				"always"
			],
			"newline-before-return": "warn",
			"no-inline-comments": "warn",
			"no-lonely-if": "warn",
			"no-mixed-operators": "error",
			"no-multiple-empty-lines": [
				"warn",
				{
					"max": 1,
					"maxEOF": 1,
					"maxBOF": 1
				}
			],
			"one-var-declaration-per-line": [
				"warn",
				"always"
			],
			"quotes": [
				"warn",
				"double",
				{
					"avoidEscape": true
				}
			],
			"semi-spacing": [
				"warn",
				{
					"before": false,
					"after": true
				}
			],
			"react/jsx-indent": [
				2,
				"tab"
			],
			"react/jsx-indent-props": [
				2,
				"tab"
			],
			"react/jsx-key": "error",
			"react/jsx-max-props-per-line": [
				"warn",
				{
					"maximum": 3
				}
			],
			"react/jsx-no-duplicate-props": [
				"error",
				{
					"ignoreCase": true
				}
			],
			"react/jsx-no-undef": "error",
			"react/jsx-pascal-case": [
				"warn",
				{
					"allowAllCaps": false
				}
			],
			"react/jsx-uses-vars": "warn",
			"import/no-extraneous-dependencies": ["warn"],
			"import/extensions": ["warn"],
			"import/no-unresolved": ["warn"],
			"import/prefer-default-export": ["off"],
			"import/newline-after-import": ["warn"],
			"no-unused-expressions": 0,
			"chai-friendly/no-unused-expressions": 2
		},
		"parserOptions": {
			"ecmaFeatures": {
				"jsx": true
			}
		}
	}
));
