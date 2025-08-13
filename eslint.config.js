import dist from "./dist/index.js";

export default [
  ...dist,
  {
    rules: {
      "sort-keys": ["error", "asc", { caseSensitive: true, natural: false }],
    },
  },
];
