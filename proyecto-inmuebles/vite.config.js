import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://milir23.github.io/proyecto-inmuebles/',
  build: {
    
    assetsDir: "assets",
  },
})
