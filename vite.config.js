import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     'shader-park-core': path.resolve(__dirname, './shim/shader-park-core.umd.min.js'),
  //   },
  // },

  resolve: {
    alias: {
      'shader-park-core': path.resolve(__dirname, 'node_modules/shader-park-core/dist/shader-park-core.esm.js')
    },
  },
  build: {},
  // optimizeDeps: {
  //   exclude: ['shader-park-core'],
  // },
})