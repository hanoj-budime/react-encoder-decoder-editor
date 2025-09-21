import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-encoder-decoder-editor/", // 👈 important for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  publicDir: "public", // 👈 ensures public folder is included
});