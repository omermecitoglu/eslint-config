import react from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    rules: {
      "react/jsx-no-literals": ["error", {
        allowedStrings: [
          "&copy;",
        ],
      }],
    },
  },
];
