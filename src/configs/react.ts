import globals from "globals";
import type { Linter } from "eslint";

export async function loadReactConfig(): Promise<Linter.Config[]> {
  try {
    const { default: react } = await import("eslint-plugin-react");
    return [
      {
        files: ["**/*.+(jsx|tsx)"],
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
              "&nbsp;",
              "&copy;",
              "&laquo;",
              "&raquo;",
              "&hellip;",
              "&rarr;",
              "&ndash;",
            ],
          }],
        },
      },
    ];
  } catch {
    return [];
  }
}
