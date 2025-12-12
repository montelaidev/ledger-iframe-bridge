const nodeFiles = ['*.cjs', '**/*.config.cjs'];

module.exports = {
  root: true,

  env: {
    browser: true,
    es2022: true,
  },

  extends: ['@metamask/eslint-config'],

  overrides: [
    {
      files: nodeFiles,
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@metamask/eslint-config-nodejs'],
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        'import/no-nodejs-modules': 'off',
      },
    },
    {
      files: ['src/ledger-bridge.js'],
      rules: {
        'import/no-unresolved': 'off',
        'import/no-nodejs-modules': 'off',
      },
    },
  ],

  ignorePatterns: [
    '.prettierrc.cjs',
    'node_modules',
    'dist/',
    'docs/',
    '.yarn/',
  ],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
