import { useEffect, useRef } from 'react';
import { PerformanceMonitor } from '@/utils/performance';

interface UsePerformanceOptions {
  componentName: string;
  warnThreshold?: number; // milliseconds
  enableInProduction?: boolean;
}

/**
 * Hook to monitor component performance
 */
export const usePerformance = ({
  componentName,
  warnThreshold = 16, // 60fps budget
  enableInProduction = false,
}: UsePerformanceOptions) => {
  const renderCount = useRef(0);
  const renderStartTime = useRef<number>();
  const monitor = useRef(PerformanceMonitor.getInstance());

  // Track render start
  if (process.env.NODE_ENV === 'development' || enableInProduction) {
    renderStartTime.current = performance.now();
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' || enableInProduction) {
      renderCount.current++;
      
      // Measure render time
      if (renderStartTime.current) {
        const renderTime = performance.now() - renderStartTime.current;
        
        if (renderTime > warnThreshold) {
          console.warn(
            `[Performance] ${componentName} render #${renderCount.current} took ${renderTime.toFixed(2)}ms (threshold: ${warnThreshold}ms)`
          );
        }
      }

      // Log metrics periodically
      if (renderCount.current % 10 === 0) {
        const metrics = monitor.current.getMetrics();
        console.log(`[Performance] ${componentName} metrics after ${renderCount.current} renders:`, metrics);
      }
    }
  });

  return {
    renderCount: renderCount.current,
    monitor: monitor.current,
  };
};

/**
 * Hook to monitor memory usage
 */
export const useMemoryMonitor = (componentName: string, threshold = 50 * 1024 * 1024) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const checkMemory = () => {
        const monitor = PerformanceMonitor.getInstance();
        const memory = monitor.getMemoryUsage();
        
        if (memory?.usedJSHeapSize && memory.usedJSHeapSize > threshold) {
          console.warn(
            `[Memory] ${componentName} - High memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`
          );
        }
      };

      // Check memory on mount and after 1 second
      checkMemory();
      const timer = setTimeout(checkMemory, 1000);

      return () => clearTimeout(timer);
    }
  }, [componentName, threshold]);
};

/**
 * Hook to detect and warn about unnecessary re-renders
 */
export const useRenderWarning = (componentName: string, props: Record<string, any>) => {
  const previousProps = useRef<Record<string, any>>();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && previousProps.current) {
      const changedProps = Object.keys(props).filter(
        (key) => props[key] !== previousProps.current![key]
      );

      if (changedProps.length === 0) {
        console.warn(
          `[Performance] ${componentName} re-rendered with no prop changes. Consider memoization.`
        );
      } else {
        console.log(
          `[Performance] ${componentName} re-rendered due to:`,
          changedProps.reduce((acc, key) => {
            acc[key] = {
              old: previousProps.current![key],
              new: props[key],
            };
            return acc;
          }, {} as Record<string, any>)
        );
      }
    }

    previousProps.current = { ...props };
  });
};