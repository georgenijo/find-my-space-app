import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import './styles/globals.css'
import { initializeResourceHints } from './lib/resource-hints'
import { registerServiceWorker } from './lib/service-worker'

// Initialize performance optimizations
if (import.meta.env.PROD) {
  // Performance monitoring
  import('./lib/performance-monitoring').then(({ performanceMonitor: _performanceMonitor }) => {
    // Performance monitor will auto-initialize
    console.log('Performance monitoring initialized');
  });
  
  // Service Worker registration
  registerServiceWorker();
}

// Initialize resource hints
initializeResourceHints();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system">
    <App />
  </ThemeProvider>
);
