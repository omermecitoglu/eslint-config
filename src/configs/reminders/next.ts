import { missingOptionalDepsRule } from "../../rules/missing-optional-deps.js";
import type { Linter } from "eslint";

export default [{
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
