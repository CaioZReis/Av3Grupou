module.exports = {
  root: true,
  plugins: ['standard'],
  extends: [
    'eslint:recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
