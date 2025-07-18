module.exports = {
  extends: ["@repo/eslint-config"], // Just base config
  env: {
    node: true
  },
  rules: {
    "no-console": "warn"  // Backend-specific rules
  }
};