// Base config for all apps
module.exports = {
  extends: ["@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "prefer-const": "error",
    "no-var": "error"
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  }
};
