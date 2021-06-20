module.exports = {
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        mocha: true
    },
    globals: {
        process: true,
        NodeJS: true
    },
    overrides: [
        {
            parser: '@typescript-eslint/parser',
            files: ['*.ts', '*.tsx'],
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended'
            ]
        }, {
            files: ['*.json'],
            extends: [
                'plugin:json/recommended'
            ],
            rules: {
                'json/*': ['error', { allowComments: true }]
            }
        }, {
            files: ['*.js', '*.jsx'],
            extends: [
                'standard',
                'airbnb/base',
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:promise/recommended'
            ]
        }, {
            files: ['*.jsx', '*.tsx'],
            extends: [
                'airbnb'
            ]
        }, {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            plugins: [
                'jsdoc',
                'prefer-arrow'
            ],
            extends: [
                'eslint:recommended'
            ],
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
            }
        }, {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-use-before-define': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-useless-constructor': 'error',
                '@typescript-eslint/no-inferrable-types': 'off',
                'space-unary-ops': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            }
        }
    ]
};
