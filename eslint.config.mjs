import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const sourceFiles = ['src/**/*.{js,jsx}'];
const nodeFiles = ['scripts/**/*.js', 'tests/**/*.js', '*.mjs'];

export default [
  { ignores: ['build/**', 'coverage/**', 'playwright-report/**', 'test-results/**'] },
  {
    files: [...sourceFiles, ...nodeFiles],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: js.configs.recommended.rules,
  },
  { files: sourceFiles, languageOptions: { globals: globals.browser } },
  { files: nodeFiles, languageOptions: { globals: globals.node } },
  { files: ['tests/smoke/**/*.js'], languageOptions: { globals: globals.browser } },
  { files: ['scripts/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['src/**/*.test.{js,jsx}'],
    languageOptions: { globals: { beforeEach: 'readonly', expect: 'readonly', test: 'readonly' } },
  },
  { files: sourceFiles, ...reactHooks.configs.flat.recommended },
];
