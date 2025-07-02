/**
 * Vite Configuration - Smart Fertilizer AI
 * 
 * @description Build configuration for modern React development
 * @author Developer AAR
 * @version 1.0.0
 * @repository https://github.com/UserAAR/smart-fertilizer
 * 
 * Optimized for performance and development experience
 * Configured by AAR ⚡
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ai: ['@google/generative-ai'],
          ui: ['framer-motion', '@heroicons/react']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
