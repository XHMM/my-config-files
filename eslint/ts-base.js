module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
    "@typescript-eslint/interface-name-prefix": ["error", "always"],

    /* i don't why eslint-plugin-import builtin extended rules not work, so i build my custom  rules*/
    /* Style guide */
    "import/first": ["error"],
    "import/exports-last": ["error"],
    "import/no-duplicates": ["error"],
    "import/order": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-anonymous-default-export": ["error"],
    "import/group-exports": ["error"],
    /* Module systems */
    "import/no-nodejs-modules": ["error"]
  },
  parserOptions: {
    sourceType: "module"
  }
}