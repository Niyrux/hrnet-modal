import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "index.jsx", 
      name: "HrnetModal",
      fileName: (format) => `hrnet-modal.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});