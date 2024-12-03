import type { Linter } from "eslint";

export async function loadNextConfig() {
  try {
    const { default: nextPlugin } = await import("@next/eslint-plugin-next");
    return [
      {
        plugins: {
          "@next/next": nextPlugin,
        },
        rules: {
          ...nextPlugin.configs.recommended.rules,
          ...nextPlugin.configs["core-web-vitals"].rules,
        },
      },
    ] as Linter.Config[];
  } catch {
    return [];
  }
}
