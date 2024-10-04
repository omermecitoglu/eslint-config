import base from "./base";
import importPlugin from "./import";
import jsxAccessibility from "./jsx-a11y";
import react from "./react";
import stylistic from "./stylistic";
import typescript from "./typescript";
import unusedImports from "./unused-imports";
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
