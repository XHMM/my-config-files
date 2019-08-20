module.exports = {
  extends: ["./ts-base.js", "plugin:security/recommended"],
  plugins: ["security"],
  env: {
    node: true
  }
};
