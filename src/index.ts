import base from "./base.js";
import stylistic from "./stylistic.js";
import typescript from "./typescript.js";
import react from "./react.js";
import jsxAccessibility from "./jsx-a11y.js";
import importPlugin from "./import.js";
import unusedImports from "./unused-imports.js";

export default [
  ...base,
  ...stylistic,
  ...typescript,
  ...react,
  ...jsxAccessibility,
  ...importPlugin,
  ...unusedImports,
];
