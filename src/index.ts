import base from "./base.js";
import nextJsReminder from "./configs/reminders/next.js";
import importPlugin from "./import.js";
import { loadJsxAccessibilityConfig } from "./jsx-a11y.js";
import { loadNextConfig } from "./next.js";
import { loadReactConfig } from "./react.js";
import stylistic from "./stylistic.js";
import typescript from "./typescript.js";
import unusedImports from "./unused-imports.js";
import type { Linter } from "eslint";

export default [
  ...nextJsReminder,
  ...base,
  ...stylistic,
  ...typescript,
  ...(await loadReactConfig()),
  ...(await loadJsxAccessibilityConfig()),
  ...(await loadNextConfig()),
  ...importPlugin,
  ...unusedImports,
] as Linter.Config[];
