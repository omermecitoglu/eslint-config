import type { Linter } from "eslint";

export async function loadJsxAccessibilityConfig() {
  try {
    const { default: jsxA11y } = await import("eslint-plugin-jsx-a11y");
    return [
      {
        files: ["**/*.+(jsx|tsx)"],
        ignores: ["node_modules/"],
        plugins: {
          "jsx-a11y": jsxA11y,
        },
        rules: {
          ...jsxA11y.flatConfigs.recommended.rules,
          "jsx-a11y/no-autofocus": "off",
        },
      },
    ] as Linter.Config[];
  } catch {
    return [];
  }
}
