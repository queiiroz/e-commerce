// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        checkout: resolve(__dirname, "checkout/index.html"),
        main: resolve(__dirname, "index.html"),
        pedidos: resolve(__dirname, "pedidos/index.html"),
      },
    },
  },
});