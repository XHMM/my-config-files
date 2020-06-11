module.exports = {
  extends: ["./ts-base.js", "plugin:security/recommended", "plugin:node/recommended"],
  plugins: ["security"],
  rules: {
    "import/no-default-export": ["error"]
  },
  env: {
    node: true
  }
};
