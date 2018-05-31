/* eslint-disable global-require */

const guiConfig = require('./linters/cloudability/gui');
const guiTestsConfig = require('./linters/cloudability/guiTests');
const serviceConfig = require('./linters/cloudability/service');

const customCloudyRules = {
  /* foo: require('./foo') */
};

module.exports = {
  rules  : customCloudyRules,
  configs: {
    gui: guiConfig,

    guiTests: guiTestsConfig,

    service: serviceConfig,
  },
};
