import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.stories.*", "!src/**/*.test.*"],
  deps: { neverBundle: ["react", "react-dom"] },
});
