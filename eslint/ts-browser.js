module.exports = {
  env: {
    browser: true
  },
  extends: [
    "plugin:no-unsanitized/DOM",
    "./ts-base.js",
    // "plugin:compat/recommended"
  ],
  plugins: ["no-unsanitized"],
  rules: {}
};
