import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.stories.*", "!src/**/*.test.*"],
  format: ["esm", "cjs"],
  deps: { neverBundle: ["react", "react-dom"] },
});
