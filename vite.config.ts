import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // מגדיר ל-Vite שהאתר והאייקונים יושבים תחת תיקיית Aura ב-GitHub Pages
  base: '/Aura/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
