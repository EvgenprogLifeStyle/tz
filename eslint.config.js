import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'gulp/**', 'gulpfile.js', 'src/js/libs/**', '**/*.min.js', '*.config.js'],
  },
  js.configs.recommended,
  {
    files: ['src/js/**/*.js', 'src/components/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'no-console': 'off',
    },
  },
];
