import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-slot', '@radix-ui/react-label', '@radix-ui/react-toast'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        // Use smaller chunks
        experimentalMinChunkSize: 10 * 1024, // 10kb
      },
    },
    // Better tree shaking
    treeshake: {
      preset: 'recommended',
      moduleSideEffects: false,
    },
    // Enable source maps for debugging
    sourcemap: mode === 'development',
    // Optimize deps
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@supabase/supabase-js'],
  },
}));
