import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: '/etc/letsencrypt/live/dashboard.quansys.ai/privkey.pem',
      cert: '/etc/letsencrypt/live/dashboard.quansys.ai/fullchain.pem',
    },
  },
});