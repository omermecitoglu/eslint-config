import base from "./base.js";
import importPlugin from "./import.js";
import jsxAccessibility from "./jsx-a11y.js";
import react from "./react.js";
import stylistic from "./stylistic.js";
import typescript from "./typescript.js";
import unusedImports from "./unused-imports.js";
import type { Linter } from "eslint";

export default [
  ...base,
  ...stylistic,
  ...typescript,
  ...react,
  ...jsxAccessibility,
  ...importPlugin,
  ...unusedImports,
] as Linter.Config[];
