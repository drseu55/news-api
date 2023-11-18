module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["commitlint.config.cjs"],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    semi: [2, "always"],
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "always-multiline"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    curly: ["error", "all"],
    "generator-star-spacing": 0,
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1, maxEOF: 1 }],
    eqeqeq: ["error", "always"],
    "prefer-const": "error",
    "max-len": ["error", { code: 120 }],
  },
};
