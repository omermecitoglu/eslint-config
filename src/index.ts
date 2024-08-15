import base from "./base.js";
import stylistic from "./stylistic.js";
import typescript from "./typescript.js";
import react from "./react.js";
import jsx from "./jsx.js";
import importPlugin from "./import.js";
import unusedImports from "./unused-imports.js";

export default [
  ...base,
  ...stylistic,
  ...typescript,
  ...react,
  ...jsx,
  ...importPlugin,
  ...unusedImports,
];
