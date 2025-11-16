const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.config({
    extends: ["./index.js"],
  }),
  {
    ignores: ["node_modules/**"],
  },
];
