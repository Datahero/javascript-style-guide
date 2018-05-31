module.exports = {
  extends: [
    './linters/cloudability/base',
  ].map(require.resolve)
};
