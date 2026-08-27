import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path
  // Using './' so that relative paths work in all deployments
  base: './',
  server: {
    // Honor an externally-assigned port (e.g. preview tooling) if provided.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    watch: {
      ignored: ['**/*.pdf', '**/*.png', '**/*.jpg', '**/*.jpeg'],
    },
  },
})
