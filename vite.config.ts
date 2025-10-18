import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository.
  // This is crucial for GitHub Pages to load assets correctly.
  base: '/your-repo-name/', 
})
