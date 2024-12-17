import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/sweetalert2/],
    },
    rollupOptions: {
      external: ['sweetalert2'],
      output: {
        globals: {
          'sweetalert2': 'Swal'
        },
        paths: {
          'sweetalert2/dist/sweetalert2.js': 'sweetalert2'
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