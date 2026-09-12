import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import reactHooks from "eslint-plugin-react-hooks";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
  {
    extends: [...nextCoreWebVitals],
  },
  {
    // eslint-config-next 16 ships these as errors in anticipation of the
    // React Compiler (not enabled here - no `reactCompiler: true` in
    // next.config.js). They flag standard, correct effect-based patterns
    // (syncing derived UI state from a route/prop change) as if compiler
    // memoization already depended on them. Downgrade to warn until this
    // project actually adopts the compiler and does a real pass.
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
    },
  },
]);