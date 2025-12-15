import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  // Recommended JS rules for the entire monorepo
  js.configs.recommended,

  // General configuration of the monorepo
  {
    files: ["**/*.js", "**/*.jsx"],
    ignores: ["dist/", "build/", "node_modules/"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },

  // FRONTEND Overrides (React)
  {
    files: ["frontend/**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Overrides for BACKEND
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Overrides for the BOT
  {
    files: ["bot/**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
