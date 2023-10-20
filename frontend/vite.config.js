import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    '/api': {
      port: 3000,
      proxy: {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})