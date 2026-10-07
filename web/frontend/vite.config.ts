import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/run-excel": {
        target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/run-json": {
        target: "http://localhost:8082",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/compare-scenarios": {
        target: "http://localhost:8083",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/run-sensitivity": {
        target: "http://localhost:8084",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/run-report": {
        target: "http://localhost:8085",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/export-workbook": {
        target: "http://localhost:8086",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/compare-tariff-modes": {
        target: "http://localhost:8087",
        changeOrigin: true,
        rewrite: () => "/",
      },
    },
  },
});
