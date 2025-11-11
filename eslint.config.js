import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
    settings: {
      react: { version: "detect" },
    },
    ignores: ["dist/", "node_modules/"],
  },
];
