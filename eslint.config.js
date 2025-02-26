import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from 'eslint-plugin-jsx-a11y';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: [
      '.DS_Store',
      'node_modules/',
      '.react-router/',
      'build/'
    ]
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } }, },
  jsxA11y.flatConfigs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];