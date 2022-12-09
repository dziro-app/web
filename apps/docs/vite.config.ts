import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ViteSvelteBlueprint from './Blueprint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    ViteSvelteBlueprint({
      src: '../../packages/ui/lib/',
      dst: 'src/Docs',
      template: '../../lib/Template.svelte'
    })
  ],
  build: {
    rollupOptions: {
      watch: {
        exclude: ['./src/Docs/**']
      }
    }
  }
})
