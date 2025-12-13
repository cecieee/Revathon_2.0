import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy 3D libraries into separate chunks
          "three-core": ["three"],
          "three-fiber": ["@react-three/fiber"],
          "three-drei": ["@react-three/drei"],
          gsap: ["gsap"],
        },
      },
    },
  },
});
