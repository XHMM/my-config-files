module.exports = {
  extends: [
    /*--- eslint ---*/
    "eslint:recommended",
    /*--- typescript ---*/
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    /*--- prettier ---*/
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    /*--- @typescript-eslint/eslint-plugin ---*/
    // change recommended
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": ["warn", "always"],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    // add custom
    "@typescript-eslint/ban-ts-ignore": ["warn"],
    "@typescript-eslint/member-ordering": ["error"],
    "@typescript-eslint/restrict-plus-operands": ["error"],
    "@typescript-eslint/require-await": ["error"],
    "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }],

    /*--- eslint-plugin-import ---*/
    // i don't why extend recommended rules not work, so i build my custom  rules
    // Style guide
    "import/first": ["error"],
    "import/exports-last": ["error"],
    "import/no-duplicates": ["error"],
    "import/order": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-anonymous-default-export": ["error"],
    "import/group-exports": ["error"],
    // Module systems
    "import/no-nodejs-modules": ["error"]
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  }
};
