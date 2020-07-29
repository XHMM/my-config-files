module.exports = {
  extends: ["./ts-base.js", "plugin:security/recommended"],
  plugins: ["security"],
  rules: {
    "import/no-default-export": ["error"],

    /*  conflict with typescript */
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-require": "off",
    "node/no-missing-import": "off"
  },
  env: {
    node: true
  },
  parserOptions: {
    "ecmaVersion": "2020",
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  }
};
