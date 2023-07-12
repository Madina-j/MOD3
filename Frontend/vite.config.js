import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  build: { outDir: "../backend/dist" },
  server: {
    proxy: {
      "/api/images/": "http://localhost:5000",
    },
  },
});
