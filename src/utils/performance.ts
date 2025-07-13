import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

interface PerformanceMetrics {
  CLS?: number;
  FID?: number;
  FCP?: number;
  LCP?: number;
  TTFB?: number;
}

/**
 * Performance monitoring utility class
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};
  private observers: Map<string, PerformanceObserver> = new Map();

  private constructor() {
    this.initializeWebVitals();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private initializeWebVitals() {
    const handleMetric = (metric: Metric) => {
      this.metrics[metric.name as keyof PerformanceMetrics] = metric.value;
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, metric.value.toFixed(2));
      }
    };

    getCLS(handleMetric);
    getFID(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Measure component render time
   */
  measureComponentRender(componentName: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(
          `[Performance] ${componentName} took ${renderTime.toFixed(2)}ms to render (>16ms frame budget)`
        );
      }
    };
  }

  /**
   * Create a custom performance mark
   */
  mark(name: string): void {
    performance.mark(name);
  }

  /**
   * Measure between two marks
   */
  measure(name: string, startMark: string, endMark: string): number | null {
    try {
      performance.measure(name, startMark, endMark);
      const entries = performance.getEntriesByName(name);
      const lastEntry = entries[entries.length - 1];
      return lastEntry ? lastEntry.duration : null;
    } catch (error) {
      console.error(`Failed to measure ${name}:`, error);
      return null;
    }
  }

  /**
   * Monitor long tasks (>50ms)
   */
  monitorLongTasks(callback: (duration: number) => void): () => void {
    if (!('PerformanceObserver' in window)) {
      console.warn('PerformanceObserver not supported');
      return () => {};
    }

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            callback(entry.duration);
          }
        }
      });

      observer.observe({ entryTypes: ['longtask'] });
      this.observers.set('longtask', observer);

      return () => {
        observer.disconnect();
        this.observers.delete('longtask');
      };
    } catch (error) {
      console.error('Failed to monitor long tasks:', error);
      return () => {};
    }
  }

  /**
   * Monitor memory usage (if available)
   */
  getMemoryUsage(): { usedJSHeapSize?: number; totalJSHeapSize?: number; limit?: number } | null {
    if ('memory' in performance) {
      const {memory} = (performance as any);
      return {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  }

  /**
   * Get resource timing data
   */
  getResourceTimings(): PerformanceResourceTiming[] {
    return performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  }

  /**
   * Clear all performance data
   */
  clear(): void {
    performance.clearMarks();
    performance.clearMeasures();
    this.metrics = {};
  }
}

/**
 * React hook for performance monitoring
 */
export const usePerformanceMonitor = (componentName: string) => {
  const monitor = PerformanceMonitor.getInstance();
  
  // Measure render time
  const endMeasure = monitor.measureComponentRender(componentName);
  
  // Cleanup
  if (typeof window !== 'undefined') {
    requestAnimationFrame(endMeasure);
  }
};

/**
 * Utility to check if performance budget is exceeded
 */
export interface PerformanceBudget {
  FCP?: number;
  LCP?: number;
  CLS?: number;
  TTFB?: number;
  bundleSize?: number;
}

export const checkPerformanceBudget = (
  metrics: PerformanceMetrics,
  budget: PerformanceBudget
): { passed: boolean; violations: string[] } => {
  const violations: string[] = [];

  Object.entries(budget).forEach(([metric, threshold]) => {
    const value = metrics[metric as keyof PerformanceMetrics];
    if (value !== undefined && threshold !== undefined && value > threshold) {
      violations.push(`${metric}: ${value.toFixed(2)} (budget: ${threshold})`);
    }
  });

  return {
    passed: violations.length === 0,
    violations,
  };
};

/**
 * Debounce utility for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle utility for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};