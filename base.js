module.exports = {
  extends: [
    "eslint:recommended",
  ],
  rules: {
    "curly": ["error", "multi-line", "consistent"],
    "max-nested-callbacks": ["error", { max: 4 }],
    "max-statements-per-line": ["error", { max: 2 }],
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-empty-function": "error",
    "no-lonely-if": "error",
    "no-shadow": ["error", { allow: ["err", "resolve", "reject"] }],
    "no-var": "error",
    "prefer-const": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "yoda": "error",
  },
};
