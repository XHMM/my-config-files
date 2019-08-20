module.exports = {
  extends: ["./ts-browser.js", "prettier/react", "plugin:react/recommended"],
  plugins: ["react-hooks"],
  rules: {
    /* eslint-plugin-react */
    "react/prop-types": ["off"],
    "react/display-name": ["off"],
    /* eslint-plugin-react-hooks */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    version: "detect"
  }
};
