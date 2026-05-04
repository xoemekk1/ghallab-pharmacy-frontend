import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// هنا نخبر Vite باستخدام Tailwind بطريقتها الجديدة
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})