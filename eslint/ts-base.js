module.exports = {
  extends: [
    /*--- eslint ---*/
    "eslint:recommended",

    /*--- typescript ---*/
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    /*--- eslint-plugin-import ---*/
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",

    /*--- prettier ---*/
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    /*--- eslint:recommended ---*/
    "require-atomic-updates": "off",
    "no-empty-pattern": ["off"],
    "prefer-rest-params": "off",

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
    "@typescript-eslint/interface-name-prefix": ["warn", {"prefixWithI": "never"}],
    "@typescript-eslint/no-use-before-define": "off",
    // "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/camelcase": "off",
    // add custom
    "@typescript-eslint/ban-ts-ignore": ["warn"],
    "@typescript-eslint/member-ordering": ["error"],
    "require-await": "off",
    "@typescript-eslint/require-await": ["error"],
    "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }],
    "@typescript-eslint/no-this-alias": "off",
    // use comma instead semi(default) so we can quickly create a corresponding object without change semi to colon
    // (this rule conflicts with prettier and disabled by default, because prettier semi option also works on interface)
    /*"@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "comma",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": true
      }
    }],*/

    /*--- eslint-plugin-import ---*/
    "import/no-default-export": ["error"],
    "import/order": "error",
    "import/no-unresolved": 0 // eslint-plugin-import not work well with ts path alias, disabled it, let IDE help us
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  },
  settings: {

  }
};
