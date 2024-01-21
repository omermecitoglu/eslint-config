module.exports = {
  extends: [
    "./base",
    "./stylistic",
    "./jsx",
  ],
  plugins: [
    "import",
    "unused-imports",
  ],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type", "object"],
        pathGroups: [
          { group: "internal", pattern: "~/**" },
        ],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
    ],
  },
};
