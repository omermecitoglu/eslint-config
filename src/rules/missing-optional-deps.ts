import fs from "node:fs";
import path from "node:path";
import type { Rule } from "eslint";

function isNextProject(root: string) {
  return (
    fs.existsSync(path.join(root, "next.config.js")) ||
    fs.existsSync(path.join(root, "next.config.mjs")) ||
    fs.existsSync(path.join(root, "next.config.ts"))
  );
}

function hasPackage(name: string, cwd: string) {
  try {
    require.resolve(name, { paths: [cwd] });
    return true;
  } catch {
    return false;
  }
}

export const missingOptionalDepsRule: Rule.RuleModule = {
  create(context) {
    const missing: string[] = [];

    if (!isNextProject(context.cwd)) {
      return {};
    }

    if (!hasPackage("@next/eslint-plugin-next", context.cwd)) {
      missing.push("@next/eslint-plugin-next");
    }

    if (!hasPackage("eslint-plugin-react", context.cwd)) {
      missing.push("eslint-plugin-react");
    }

    if (!hasPackage("eslint-plugin-jsx-a11y", context.cwd)) {
      missing.push("eslint-plugin-jsx-a11y");
    }

    if (missing.length === 0) {
      return {};
    }

    return {
      Program(node) {
        context.report({
          message:
            "Detected a Next.js project, but the following ESLint plugins are not installed:\n" +
            missing.map(p => `- ${p}`).join("\n") +
            "\n\nInstall them with:\n" +
            `npm install -D ${missing.join(" ")}`,
          node,
        });
      },
    };
  },
  meta: {
    docs: {
      description: "Warn when required optional ESLint plugins are missing",
    },
    schema: [],
    type: "problem",
  },
};
