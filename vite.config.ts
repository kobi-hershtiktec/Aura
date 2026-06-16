import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // משתמש בנתיב יחסי נוכחי, פותר בעיות 404 ב-GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
