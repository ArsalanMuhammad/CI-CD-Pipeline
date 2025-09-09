import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];
