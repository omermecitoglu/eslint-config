import importPlugin from "eslint-plugin-import";
import type { Linter } from "eslint";

export default [
  {
    files: ["**/*.+(js|jsx|ts|tsx)"],
    ignores: ["node_modules/"],
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
] as Linter.Config[];
