import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Swal from 'sweetalert2'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['sweetalert2', 'sweetalert2/dist/sweetalert2.js'],
      output: {
        globals: {
          'sweetalert2': 'Swal',
          'sweetalert2/dist/sweetalert2.js': 'Swal'
        }
      }
    }
  },
  optimizeDeps: {
    include: ['sweetalert2']
  }
})