module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        'prettier',
        '@typescript-eslint',
        'react'
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        }
    },
    rules: {
        '@typescript-eslint/ban-ts-ignore': 'off'
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
}
