import stylistic from "@stylistic/eslint-plugin";
import type { Linter } from "eslint";

export default [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/array-bracket-newline": ["error", "consistent"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/arrow-spacing": ["warn", { after: true, before: true }],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { after: true, before: false }],
      "@stylistic/comma-style": "error",
      "@stylistic/computed-property-spacing": ["error", "never"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/function-paren-newline": ["error", "multiline"],
      "@stylistic/generator-star-spacing": ["error", "both"],
      "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
      "@stylistic/indent-binary-ops": "error",
      "@stylistic/jsx-child-element-spacing": "error",
      "@stylistic/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "@stylistic/jsx-closing-tag-location": "error",
      "@stylistic/jsx-curly-brace-presence": ["error", {
        children: "never",
        propElementValues: "always",
        props: "never",
      }],
      "@stylistic/jsx-curly-newline": ["error", {
        multiline: "consistent",
        singleline: "consistent",
      }],
      "@stylistic/jsx-curly-spacing": ["error", { when: "never" }],
      "@stylistic/jsx-equals-spacing": ["error", "never"],
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "@stylistic/jsx-indent": ["error", 2],
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: { multi: 1, single: 4 } }],
      "@stylistic/jsx-newline": ["error", { allowMultilines: false, prevent: true }],
      "@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
      "@stylistic/jsx-props-no-multi-spaces": "error",
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/jsx-self-closing-comp": ["error", { component: true, html: true }],
      "@stylistic/jsx-sort-props": "off",
      "@stylistic/jsx-tag-spacing": "error",
      "@stylistic/jsx-wrap-multilines": ["error", {
        arrow: "parens-new-line",
        assignment: "parens-new-line",
        condition: "parens-new-line",
        declaration: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
        return: "parens-new-line",
      }],
      "@stylistic/key-spacing": "error",
      "@stylistic/keyword-spacing": "error",
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/lines-around-comment": "off",
      "@stylistic/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
      "@stylistic/max-len": ["warn", { code: 128 }],
      "@stylistic/max-statements-per-line": ["error", { max: 1 }],
      "@stylistic/member-delimiter-style": ["error", {
        multiline: { delimiter: "comma", requireLast: true },
        multilineDetection: "brackets",
        singleline: { delimiter: "comma", requireLast: false },
      }],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/new-parens": ["error", "always"],
      "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
      "@stylistic/no-confusing-arrow": "error",
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 1 }],
      "@stylistic/no-tabs": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/nonblock-statement-body-position": ["error", "beside"],
      "@stylistic/object-curly-newline": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
      "@stylistic/operator-linebreak": "error",
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/padding-line-between-statements": "error",
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/rest-spread-spacing": ["error", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": ["error", { after: true, before: false }],
      "@stylistic/semi-style": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/space-before-function-paren": ["error", {
        anonymous: "never",
        asyncArrow: "always",
        named: "never",
      }],
      "@stylistic/space-in-parens": "error",
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-unary-ops": "error",
      "@stylistic/spaced-comment": "error",
      "@stylistic/switch-colon-spacing": ["error", { after: true, before: false }],
      "@stylistic/template-curly-spacing": ["error", "never"],
      "@stylistic/template-tag-spacing": ["error", "never"],
      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/type-generic-spacing": "error",
      "@stylistic/type-named-tuple-spacing": "error",
      "@stylistic/wrap-iife": ["error", "outside"],
      "@stylistic/wrap-regex": "error",
      "@stylistic/yield-star-spacing": ["error", "both"],
    },
  },
] as Linter.Config[];
