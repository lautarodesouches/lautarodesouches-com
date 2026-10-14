import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    ".astro/**",
    "dist/**",
    "node_modules/**",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

export default eslintConfig;
