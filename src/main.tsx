import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { measurePerformance } from './lib/performance'

// Initialize performance monitoring in development
if (import.meta.env.DEV) {
  measurePerformance();
}

createRoot(document.getElementById("root")!).render(<App />);
