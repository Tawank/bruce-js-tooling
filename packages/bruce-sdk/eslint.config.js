import prettier from 'eslint-plugin-prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },

    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 11,
        sourceType: 'module',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],

      'import/prefer-default-export': 'off',
      'no-shadow-restricted-names': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-var': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
]);
