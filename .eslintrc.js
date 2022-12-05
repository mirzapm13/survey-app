module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    semi: 0,
    'linebreak-style': ['error', 'windows'],
    'react/jsx-indent': ['error', 2],
    'max-len': [2, 140, 2],
    'no-console': 'warn',
    // 'react/prop-types': [2, { ignore: ['history'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-set-state': 'off',
    'prettier/prettier': 0,
    'react/jsx-props-no-spreading': 'off',
    'prefer-promise-reject-errors': 'off',
    camelcase: 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'import/no-unresolved': 'off',
  },
};
