import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
      routes: resolve(__dirname, "src/routes"),
      components: resolve(__dirname, "src/components"),
      utils: resolve(__dirname, "src/utils"),
    },
  },
});
