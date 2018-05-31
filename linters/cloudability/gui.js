module.exports = {
  plugins: ['cloudability'],
  extends: [
    './base',
    './disable/react-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': 'webpack',
  },
  env: {
    browser: true,
    node   : true,
  },
  globals: {
    $       : false,
    _       : false,
    Backbone: false,
    jQuery  : false,

    DEBUG    : false,
    cui      : false,
    cuiLodash: false,
  },

  rules: {

    /*
     *
     * Custom Cloudability created rules
     *
     */

    // 'cloudability/foo': 'error',

    /*
     *
     * Extra ES6-related restrictions and misc AirBnB overrides
     *
     */

    // GUI team has decided against dangling commas
    'comma-dangle': ['error', 'never'],

    // With modules, `use-strict` is superfluous but we have a mixed building system
    strict: 'off',

  },
};
