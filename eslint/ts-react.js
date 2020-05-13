module.exports = {
  extends: [
    "./ts-browser.js",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:compat/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    /*-- eslint-plugin-react --*/
    "react/prop-types": ["off"],
    "react/display-name": ["off"],
    "react/no-unescaped-entities": ["off"],

    /*--- eslint-plugin-import ---*/
    "import/no-default-export": "off"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
