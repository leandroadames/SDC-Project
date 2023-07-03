import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allows for you to just type /api/* in the front end and redirect to the backend
  server: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
});
