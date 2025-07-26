// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/k1-Site/',  // Set the base path for your project
  plugins: [react()],
})
