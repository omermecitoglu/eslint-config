import jsxA11y from "eslint-plugin-jsx-a11y";
import type { Linter } from "eslint";

export default [
  {
    files: ["src/**/*.+(jsx|tsx)", "./*.+(jsx|tsx)"],
    ignores: ["node_modules/"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/no-autofocus": "off",
    },
  },
] as Linter.Config[];
