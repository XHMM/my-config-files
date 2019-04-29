module.exports = {
  extends: ["plugin:security/recommended", "./ts-base.js"],
  env: {
    "node": true
  },
  plugins: ['security']
}