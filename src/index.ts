import base from "./configs/base.js";
import importPlugin from "./configs/import.js";
import { loadJsxAccessibilityConfig } from "./configs/jsx-a11y.js";
import { loadNextConfig } from "./configs/next.js";
import { loadReactConfig } from "./configs/react.js";
import nextJsReminder from "./configs/reminders/next.js";
import stylistic from "./configs/stylistic.js";
import typescript from "./configs/typescript.js";
import unusedImports from "./configs/unused-imports.js";
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
