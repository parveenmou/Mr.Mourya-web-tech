import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://parveenmou.github.io/Mr.Mourya-web-tech/
  base: '/Mr.Mourya-web-tech/',
  plugins: [react(), tailwindcss()],
})
