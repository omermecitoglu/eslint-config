module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
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
  },
};
