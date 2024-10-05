import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import base from "./base.js";
import type { ESLint, Linter } from "eslint";

export default [
  {
    files: ["src/**/*.+(ts|tsx)", "./*.+(ts|tsx)"],
    ignores: ["node_modules/"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": plugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...base.map(c => c.rules).reduce((acc, val) => ({ ...acc, ...val }), {}),
      ...tseslint.configs.recommended.map(c => c.rules).reduce((acc, val) => ({ ...acc, ...val }), {}),
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/ban-tslint-comment": "warn",
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-nullish-coalescing": ["error", {
        ignorePrimitives: {
          string: true,
        },
      }],
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "class-methods-use-this": "off",
      "dot-notation": "off",
      "no-console": "warn",
    },
  },
] as Linter.Config[];
