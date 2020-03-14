module.exports = {
  extends: [
    "./ts-base.js",
    "plugin:no-unsanitized/DOM",
    "plugin:compat/recommended"
  ],
  plugins: ["no-unsanitized"],
  env: {
    browser: true
  }
};
