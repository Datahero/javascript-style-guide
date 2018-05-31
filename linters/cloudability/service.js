module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  env: {
    browser: false,
    node   : true,
  },
  rules: {

    // Some libraries use callbacks with a common callback structure. Do not vary this structure
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
      argsIgnorePattern : '^done$',
      varsIgnorePattern : '^_|CloudyError|config|qlog$',
    }],
  },
};
