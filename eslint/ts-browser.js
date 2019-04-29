module.exports = {
  env: {
    "browser": true
  },
  extends: ["plugin:no-unsanitized/DOM" , "./ts-base.js"],
  plugins: ["no-unsanitized"]
}