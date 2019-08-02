module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["./ts-browser.js", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    /* eslint-plugin-react */
    "react/prop-types": ["off"],
    "react/display-name": ["off"],

    /* eslint-plugin-react-hooks */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    version: "detect"
  }
};
