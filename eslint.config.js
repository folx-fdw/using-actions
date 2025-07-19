import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import { configs } from 'eslint-config-airbnb-extended/legacy';

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.git/',
      'coverage/',
      'tmp/',
      '**/*.min.js',
      '**/*.d.ts',
    ],
  },

  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  ...configs.base.legacy,
  eslintConfigPrettier,

  {
    plugins: {
      prettier: eslintPluginPrettier, // Assuming you import prettierPlugin from 'eslint-plugin-prettier'
    },
    rules: {
      'prettier/prettier': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    },
  },
];
