module.exports = {
  env: {
    "browser": true
  },
  extends: ["plugin:no-unsanitized/DOM" , "./ts-base.js", "plugin:compat/recommended", "plugin:react/recommended"],
  plugins: ["no-unsanitized"],
  rules: {
    /* eslint-plugin-react */
    "react/prop-types": ["off"],
    "react/display-name": ["off"]
  }
}