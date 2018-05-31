const reactRules = require('../../../packages/eslint-config-airbnb/rules/react');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: Object.keys(reactRules.rules).reduce((acc, key) => {
    if (key.startsWith('react')) {
      acc[key] = 'off';
    }

    return acc;
  }, {}),
};
