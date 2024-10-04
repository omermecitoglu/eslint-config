import jsxA11y from "eslint-plugin-jsx-a11y";
import type { Linter } from "eslint";

export default [
  jsxA11y.flatConfigs.recommended,
  {
    rules: {
      "jsx-a11y/no-autofocus": "off",
    },
  },
] as Linter.Config[];
