import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default antfu(
    {
        rules: {
            curly: ['error', 'all'],
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
            'node/prefer-global/process': 'off',
            'style/brace-style': ['error', '1tbs'],
            'style/comma-dangle': ['error', 'always-multiline'],
            'style/eol-last': ['error', 'always'],
            'style/linebreak-style': ['error', 'unix'],
            'style/quote-props': ['error', 'as-needed'],
            'style/quotes': ['error', 'single', { avoidEscape: true }],
            'vue/block-lang': ['error', { script: { lang: 'ts' } }],
        },

        stylistic: {
            indent: 4,
            semi: true,
        },

        yaml: false,
    },
    ...compat.config({
        plugins: ['unused-imports'],
        extends: ['plugin:tailwindcss/recommended'],
        rules: {
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    }),
);
