import importPlugin from "eslint-plugin-import";

export default [
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": ["error", {
        alphabetize: {
          caseInsensitive: false,
          order: "asc",
        },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "type", "object"],
        pathGroups: [
          { group: "internal", pattern: "~/**" },
        ],
      }],
    },
  },
];
