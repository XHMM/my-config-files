module.exports = {
  env: {
    browser: true
  },
  extends: [
    "./ts-base.js",
    "plugin:no-unsanitized/DOM",
    // "plugin:compat/recommended"
  ],
  plugins: ["no-unsanitized"],
  rules: {}
};
