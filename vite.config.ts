import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";
// dotenv.config();
// const apiGateway = process.env.API_GATEWAY;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      __generated__: path.resolve(__dirname, "__generated__"),
      "@src": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
  },
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: apiGateway,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
