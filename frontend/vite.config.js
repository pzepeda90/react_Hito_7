import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['sweetalert2']
    }
  },
  resolve: {
    alias: {
      'sweetalert2': 'sweetalert2/dist/sweetalert2.js'
    }
  }
})