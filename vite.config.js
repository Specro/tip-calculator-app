import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tip-calculator-app/',
  plugins: [react()],
})
