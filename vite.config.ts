import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This base path matches your GitHub repository name.
  // This is crucial for GitHub Pages to load assets correctly.
  base: '/EMS-v2/', 
})