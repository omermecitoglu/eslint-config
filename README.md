# @omer-x/eslint-config

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This package contains my favorite ESLint rules, created following [this tutorial](https://eslint.org/docs/latest/extend/shareable-configs) on ESLint's shareable configs.

## Installation

Install this package via npm:

```bash
npm install @omer-x/eslint-config --save-dev
```

Ensure you have the following peer dependencies installed:

- `eslint >= 8`

## Usage

Add the configuration to your ESLint configuration file (e.g., `.eslintrc.js`):

```javascript
module.exports = {
  extends: [
    "@omer-x/eslint-config",
    "@omer-x/eslint-config/typescript" // optional
  ],
  // other configurations...
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
