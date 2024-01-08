module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-nullish-coalescing": ["error", {
      ignorePrimitives: {
        string: true,
      },
    }],
  },
};
