import unusedImports from "eslint-plugin-unused-imports";
import type { Linter } from "eslint";

export default [
  {
    files: ["**/*.+(js|jsx|ts|tsx)"],
    ignores: ["node_modules/"],
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
      ],
    },
  },
] as Linter.Config[];
