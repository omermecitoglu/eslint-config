import globals from "globals";
import type { Linter } from "eslint";

export async function loadReactConfig() {
  try {
    const { default: react } = await import("eslint-plugin-react");
    return [
      {
        files: ["src/**/*.+(jsx|tsx)", "./*.+(jsx|tsx)"],
        ignores: ["node_modules/"],
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
              "&laquo;",
              "&raquo;",
              "&hellip;",
            ],
          }],
        },
      },
    ] as Linter.Config[];
  } catch {
    return [];
  }
}
