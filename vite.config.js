import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react(), tailwindcss(),autoprefixer()],
  server: {
    host: '0.0.0.0',  // Allow external access
    port: parseInt(import.meta.env.PORT) || 3000,
  }
})
