export const measurePerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return;

  // Log navigation timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.group('⚡ Performance Metrics');
      console.log(`Page Load Time: ${pageLoadTime}ms`);
      console.log(`Connect Time: ${connectTime}ms`);
      console.log(`Render Time: ${renderTime}ms`);
      
      // Web Vitals
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log(`LCP: ${lastEntry.startTime.toFixed(0)}ms`);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
          });
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log(`CLS: ${clsValue.toFixed(3)}`);
        }).observe({ entryTypes: ['layout-shift'] });
      }
      
      console.groupEnd();
    }, 0);
  });
};

// Track route changes
export const trackRouteChange = (pathname: string) => {
  if (import.meta.env.DEV) {
    console.log(`🔄 Route changed to: ${pathname}`);
  }
};