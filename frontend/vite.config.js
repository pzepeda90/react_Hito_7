import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['sweetalert2'],
      output: {
        globals: {
          'sweetalert2': 'Swal'
        }
      }
    }
  }
})
