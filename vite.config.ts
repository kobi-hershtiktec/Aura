import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// הגדרת ה-Base מבטיחה שהאתר לא יעלה כמסך לבן ב-GitHub Pages
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Aura/', 
})
