import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative base so the built files work when embedded at any path
  // on the non-Vue site (e.g. /quiz-widget/quiz.js)
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Fixed (non-hashed) filenames so the host page's <script>/<link>
        // tags don't need to be updated after every rebuild
        entryFileNames: 'quiz.js',
        chunkFileNames: 'quiz-[name].js',
        assetFileNames: 'quiz.[ext]'
      }
    }
  }
})
