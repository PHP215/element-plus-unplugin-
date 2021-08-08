import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from '../dist'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importElementPlus(),
  ],
})
