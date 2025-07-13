/**
 * Performance monitoring utilities
 */

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private reportCallback?: (metrics: PerformanceMetric[]) => void;

  constructor(reportCallback?: (metrics: PerformanceMetric[]) => void) {
    this.reportCallback = reportCallback;
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals if available
    if ('PerformanceObserver' in window) {
      this.observeLCP();
      this.observeFID();
      this.observeCLS();
      this.observeFCP();
      this.observeTTFB();
    }

    // Monitor resource loading
    this.monitorResourceTiming();
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        this.recordMetric({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: this.rateLCP(lastEntry.renderTime || lastEntry.loadTime),
          timestamp: Date.now(),
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (_e) {
      console.debug('LCP observer not supported');
    }
  }

  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as any;
        
        this.recordMetric({
          name: 'FID',
          value: firstEntry.processingStart - firstEntry.startTime,
          rating: this.rateFID(firstEntry.processingStart - firstEntry.startTime),
          timestamp: Date.now(),
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
          } catch (_e) {
        console.debug('FID observer not supported');
    }
  }

  private observeCLS() {
    let clsValue = 0;
    const clsEntries: any[] = [];

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += entry.value;
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });

      // Report CLS when page is hidden
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.recordMetric({
            name: 'CLS',
            value: clsValue,
            rating: this.rateCLS(clsValue),
            timestamp: Date.now(),
          });
        }
      });
          } catch (_e) {
        console.debug('CLS observer not supported');
    }
  }

  private observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint') as any;
        
        if (fcpEntry) {
          this.recordMetric({
            name: 'FCP',
            value: fcpEntry.startTime,
            rating: this.rateFCP(fcpEntry.startTime),
            timestamp: Date.now(),
          });
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
          } catch (_e) {
        console.debug('FCP observer not supported');
    }
  }

  private observeTTFB() {
    window.addEventListener('load', () => {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as any;
      
      if (navigationTiming) {
        const ttfb = navigationTiming.responseStart - navigationTiming.fetchStart;
        
        this.recordMetric({
          name: 'TTFB',
          value: ttfb,
          rating: this.rateTTFB(ttfb),
          timestamp: Date.now(),
        });
      }
    });
  }

  private monitorResourceTiming() {
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      
      const summary = {
        totalResources: resources.length,
        totalSize: 0,
        totalDuration: 0,
        slowResources: [] as { name: string; duration: number }[],
      };

      resources.forEach((resource) => {
        const {duration} = resource;
        summary.totalDuration += duration;

        // Track slow resources (> 500ms)
        if (duration > 500) {
          summary.slowResources.push({
            name: resource.name,
            duration: Math.round(duration),
          });
        }
      });

      // Log summary for debugging
      console.debug('Resource Loading Summary:', summary);
    });
  }

  private recordMetric(metric: PerformanceMetric) {
    this.metrics.push(metric);
    
    // Report to analytics or monitoring service
    if (this.reportCallback) {
      this.reportCallback([metric]);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
    }
  }

  // Rating functions based on Web Vitals thresholds
  private rateLCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private rateFID(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  private rateCLS(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  private rateFCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private rateTTFB(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  public getMetrics(): PerformanceMetric[] {
    return this.metrics;
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor((_metrics) => {
  // In production, send metrics to analytics service
  // Example: sendToAnalytics(metrics);
});

// Utility to measure component render time
export const measureComponentPerformance = (componentName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (process.env.NODE_ENV === 'development' && duration > 16) {
      console.warn(`${componentName} took ${duration.toFixed(2)}ms to render`);
    }
  };
};