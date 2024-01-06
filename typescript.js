module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": { "delimiter": "comma", "requireLast": true },
      "multilineDetection": "brackets",
      "singleline": { "delimiter": "comma", "requireLast": false },
    }],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/semi": ["error", "always"],
  },
};
