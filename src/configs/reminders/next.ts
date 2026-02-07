import { missingOptionalDepsRule } from "../../rules/missing-optional-deps.js";
import type { Linter } from "eslint";

export default [{
  files: ["**/*.+(jsx|tsx)"],
  plugins: {
    internal: {
      rules: {
        "missing-optional-deps": missingOptionalDepsRule,
      },
    },
  },
  rules: {
    "internal/missing-optional-deps": "warn",
  },
}] as Linter.Config[];
