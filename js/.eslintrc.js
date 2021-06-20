module.exports = {
    root: true,
    extends: [
        'standard',
        'eslint:recommended',
        'airbnb/base',
        'plugin:json/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:promise/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        'class-methods-use-this': 'off',
        'no-use-before-define': ['error', 'nofunc'],
        'no-plusplus': 'off',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'log']
            }
        ],
        'no-labels': ['error', { allowSwitch: true, allowLoop: true }],
        'eol-last': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'no-empty-pattern': ['off'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'max-len': ['error', { code: 140 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always'],
        'no-extra-semi': 'error',
        quotes: ['error', 'single', { avoidEscape: true }],
        'space-in-parens': ['error', 'never'],
        'comma-spacing': ['error', { before: false, after: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-before-blocks': ['error', { functions: 'always', keywords: 'always', classes: 'always' }],
        'array-bracket-spacing': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error', {
                words: true,
                nonwords: true,
                overrides: {
                    '++': false,
                    '--': false,
                    '-': false,
                    '+': false
                }
            }
        ]
    },
    env: {
        // change as necessary
        node: true
    }
};
