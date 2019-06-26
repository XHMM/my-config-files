module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    /*--- @typescript-eslint/eslint-plugin ---*/
    /* change recommended */
    "@typescript-eslint/array-type": ["error", "array-simple"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", {"allowExpressions": true,allowTypedFunctionExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-non-null-assertion": "off"
    /* add custom */
    "@typescript-eslint/ban-ts-ignore": ["warn"],
    "@typescript-eslint/member-ordering": ["error"],
    "@typescript-eslint/restrict-plus-operands": ["error"],

    /*--- eslint-plugin-import ---*/
    /* i don't why extend recommended rules not work, so i build my custom  rules*/
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
    sourceType: "module",
    "project": "./tsconfig.json",
    "tsconfigRootDir": ".",
  }
};
