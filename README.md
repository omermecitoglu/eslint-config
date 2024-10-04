# @omer-x/eslint-config

[![npm version](https://img.shields.io/npm/v/@omer-x/eslint-config?logo=npm&logoColor=CB3837&color=CB3837)](https://www.npmjs.com/package/@omer-x/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@omer-x/eslint-config?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTI4OCAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDI0Mi43LTczLjQtNzMuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBzLTEyLjUgMzIuOCAwIDQ1LjNsMTI4IDEyOGMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwxMjgtMTI4YzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zcy0zMi44LTEyLjUtNDUuMyAwTDI4OCAyNzQuNyAyODggMzJ6TTY0IDM1MmMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAzMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0xMDEuNSAwLTQ1LjMgNDUuM2MtMjUgMjUtNjUuNSAyNS05MC41IDBMMTY1LjUgMzUyIDY0IDM1MnptMzY4IDU2YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiIGZpbGw9IiMwMDc4MjAiIC8+PC9zdmc+&color=007820)](https://www.npmjs.com/package/@omer-x/eslint-config)
[![codecov](https://codecov.io/gh/omermecitoglu/eslint-config/branch/main/graph/badge.svg)](https://codecov.io/gh/omermecitoglu/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTM4NCAzMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzOTguNCA5NmMtNS4yIDI1LjgtMjIuOSA0Ny4xLTQ2LjQgNTcuM0wzNTIgNDQ4bDE2MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xOTIgMC0xOTIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNjAgMCAwLTI5NC43Yy0yMy41LTEwLjMtNDEuMi0zMS42LTQ2LjQtNTcuM0wxMjggOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTI4IDBjMTQuNi0xOS40IDM3LjgtMzIgNjQtMzJzNDkuNCAxMi42IDY0IDMyem01NS42IDI4OGwxNDQuOSAwTDUxMiAxOTUuOCA0MzkuNiAzMjB6TTUxMiA0MTZjLTYyLjkgMC0xMTUuMi0zNC0xMjYtNzguOWMtMi42LTExIDEtMjIuMyA2LjctMzIuMWw5NS4yLTE2My4yYzUtOC42IDE0LjItMTMuOCAyNC4xLTEzLjhzMTkuMSA1LjMgMjQuMSAxMy44bDk1LjIgMTYzLjJjNS43IDkuOCA5LjMgMjEuMSA2LjcgMzIuMUM2MjcuMiAzODIgNTc0LjkgNDE2IDUxMiA0MTZ6TTEyNi44IDE5NS44TDU0LjQgMzIwbDE0NC45IDBMMTI2LjggMTk1Ljh6TS45IDMzNy4xYy0yLjYtMTEgMS0yMi4zIDYuNy0zMi4xbDk1LjItMTYzLjJjNS04LjYgMTQuMi0xMy44IDI0LjEtMTMuOHMxOS4xIDUuMyAyNC4xIDEzLjhsOTUuMiAxNjMuMmM1LjcgOS44IDkuMyAyMS4xIDYuNyAzMi4xQzI0MiAzODIgMTg5LjcgNDE2IDEyNi44IDQxNlMxMS43IDM4MiAuOSAzMzcuMXoiIGZpbGw9IiNEMEE4MUMiIC8+PC9zdmc+)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/omermecitoglu/eslint-config?color=c977be&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIUZvbnQgQXdlc29tZSBGcmVlIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuLS0+PHBhdGggZD0iTTMyMCAzMzZhODAgODAgMCAxIDAgMC0xNjAgODAgODAgMCAxIDAgMCAxNjB6bTE1Ni44LTQ4QzQ2MiAzNjEgMzk3LjQgNDE2IDMyMCA0MTZzLTE0Mi01NS0xNTYuOC0xMjhMMzIgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDEzMS4yIDBDMTc4IDE1MSAyNDIuNiA5NiAzMjAgOTZzMTQyIDU1IDE1Ni44IDEyOEw2MDggMjI0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xMzEuMiAweiIgZmlsbD0iI0M5NzdCRSIgLz48L3N2Zz4=)](https://github.com/omermecitoglu/eslint-config/commits/main/)
[![GitHub issues](https://img.shields.io/github/issues/omermecitoglu/eslint-config?color=a38eed&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4KICA8cGF0aCBkPSJNOCA5LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNaIiBmaWxsPSIjQTM4RUVEIj48L3BhdGg+CiAgPHBhdGggZD0iTTggMGE4IDggMCAxIDEgMCAxNkE4IDggMCAwIDEgOCAwWk0xLjUgOGE2LjUgNi41IDAgMSAwIDEzIDAgNi41IDYuNSAwIDAgMC0xMyAwWiIgZmlsbD0iI0EzOEVFRCI+PC9wYXRoPgo8L3N2Zz4=)](https://github.com/omermecitoglu/eslint-config/issues)
[![GitHub stars](https://img.shields.io/github/stars/omermecitoglu/eslint-config?style=social)](https://github.com/omermecitoglu/eslint-config)

This package contains my favorite ESLint rules, created following [this tutorial](https://eslint.org/docs/latest/extend/shareable-configs) on ESLint's shareable configs.

## Installation

Install this package via npm:

```bash
npm install @omer-x/eslint-config --save-dev
```

Ensure you have the following peer dependencies installed:

- `eslint >= 9`

## Usage

Add the configuration to your ESLint configuration file (e.g., `eslint.config.js` or `eslint.config.mjs`):

```javascript
import omer from "@omer-x/eslint-config";

export default [
  ...omer,
  {
    rules: {
      // add your other rules here
    },
  },
];
```

Or you can install components individually

```javascript
import base from "@omer-x/eslint-config/base";
import stylistic from "@omer-x/eslint-config/stylistic";
import typescript from "@omer-x/eslint-config/typescript";
import react from "@omer-x/eslint-config/react";
import jsxAccessibility from "@omer-x/eslint-config/jsx-a11y";
import importPlugin from "@omer-x/eslint-config/import";
import unusedImports from "@omer-x/eslint-config/unused-imports";

export default [
  ...base,
  ...stylistic,
  ...typescript,
  ...react,
  ...jsxAccessibility,
  ...importPlugin,
  ...unusedImports,
  {
    rules: {
      // add your other rules here
    },
  },
];
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
