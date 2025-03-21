import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    include: ["i18next-fs-backend"], // optionally specify dependency name
    esbuildOptions: {
      supported: {
        "top-level-await": true
      },
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
