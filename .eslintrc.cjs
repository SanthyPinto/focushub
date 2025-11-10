const { default: plugin } = require("eslint-plugin-import");

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {jsx: true}
    },
    settings: {
        react: { version : "detect" }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["error", { "endOfLine": "auto" }]
    },
    ignorePatterns: ["dist/", "node_modules/"]
};
