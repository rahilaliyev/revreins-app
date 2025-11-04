import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const reactPlugin = pluginReact.configs.flat.recommended;
const IGNORES_FOLDERS = ['dist', 'node_modules', 'build', 'coverage'];

export default defineConfig([
  {
    ignores: IGNORES_FOLDERS,
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  ...(Array.isArray(reactPlugin) ? reactPlugin : [reactPlugin]),
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, prettier: prettierPlugin, 'simple-import-sort': simpleImportSort },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'max-params': ['error', 3],
      'no-console': 'warn',
      'no-alert': 'error',
      'no-unused-vars': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      semi: ['off'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^src/api'],
            ['^@mui'],
            ['^(src/components|src/pages|src/constants|src/contexts|src/hooks|src/routes|src/ts|src/utils)'],
            ['^(\\.\\.)'],
            ['^(\\.)'],
            ['^(src/assets)'],
            ['(.s?css)$'],
          ],
        },
      ],

      '@typescript-eslint/array-type': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        { selector: ['function', 'parameter'], format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
        { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'], prefix: ['T'] },
        { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
      ],
      '@typescript-eslint/unified-signatures': 'error',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-key': ['error', { warnOnDuplicates: true }],
      'react/self-closing-comp': 'error',
      'react/jsx-no-useless-fragment': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]);
