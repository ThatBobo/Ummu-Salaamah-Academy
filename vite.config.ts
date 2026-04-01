import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Ummu-Salaamah-Academy/",
  plugins: [react()],
  publicDir: "public"
})
