import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  {
    rules: {
      "array-callback-return": "error",
      "class-methods-use-this": "error",
      "curly": ["error", "multi-line", "consistent"],
      "dot-notation": "error",
      "eqeqeq": "error",
      "line-comment-position": "off",
      "max-nested-callbacks": ["error", { max: 4 }],
      "max-statements-per-line": ["error", { max: 2 }],
      "no-console": "warn",
      "no-duplicate-imports": "error",
      "no-empty-function": "error",
      "no-lonely-if": "error",
      "no-shadow": ["error", { allow: ["err", "resolve", "reject"] }],
      "no-var": "error",
      "prefer-const": "error",
      "require-await": "warn",
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "unicode-bom": ["error", "never"],
      "yoda": "error",
    },
  },
];
