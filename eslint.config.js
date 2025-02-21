import vue from 'eslint-plugin-vue';
import airbnbBase from 'eslint-config-airbnb-base'; 
import prettier from 'eslint-config-prettier';

export default [
  {
    root: true,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    env: {
      node: true,
    },
    plugins: {
      vue,
    },
    extends: [
      'plugin:vue/recommended',
      airbnbBase, 
      prettier,
    ],
    rules: {
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['acc', 'accumulator', 'e', 'el', 'state'],
        },
      ],
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/__tests__/*.js', '**/*.spec.js'],
    env: {
      'vitest/globals': true,
    },
  },
];
