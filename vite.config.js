import { resolve } from "path";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: [resolve(__dirname, "lib/index.js"), resolve(__dirname, "lib/components.js")],
      name: "TestUI",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
