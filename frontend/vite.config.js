import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  },
  resolve: {
    alias: {
      'sweetalert2/dist/sweetalert2.js': 'sweetalert2'
    }
  }
})

