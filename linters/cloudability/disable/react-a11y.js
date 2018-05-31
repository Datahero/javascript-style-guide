const a11yRules = require('../../../packages/eslint-config-airbnb/rules/react-a11y');

module.exports = {
  rules: Object.keys(a11yRules.rules).reduce((acc, key) => {
    if (key.startsWith('jsx-a11y')) {
      acc[key] = 'off';
    }

    return acc;
  }, {}),
};
