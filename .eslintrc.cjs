/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['dist/', 'out/', '@/'],
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-bitwise': 'off',
    'no-return-await': 'off',
    'no-continue': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'default-case': 'off',
    'prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.js',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        'utils/**/*',
      ],
      rules: {
        /* used only during build */
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
