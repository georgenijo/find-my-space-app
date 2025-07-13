/**
 * Resource hints for optimizing loading performance
 */

/**
 * Preconnect to external domains to reduce connection overhead
 */
export const preconnectToDomains = (domains: string[]) => {
  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * DNS prefetch for domains we'll connect to later
 */
export const prefetchDNS = (domains: string[]) => {
  domains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  
  // For fonts, add crossorigin
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

/**
 * Prefetch resources for future navigation
 */
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Initialize resource hints for the app
 */
export const initializeResourceHints = () => {
  // Preconnect to critical domains
  preconnectToDomains([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    // Add Supabase domain when configured
  ]);

  // DNS prefetch for analytics/monitoring services
  prefetchDNS([
    // Add analytics domains here
  ]);

  // Preload critical fonts if using Google Fonts
  // Example:
  // preloadResource(
  //   'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  //   'style'
  // );
};

/**
 * Prefetch route components based on user behavior
 */
export const prefetchRoute = (routePath: string) => {
  // Map routes to their chunk names
  const routeChunks: Record<string, () => Promise<any>> = {
    '/discover': () => import('../pages/Discover'),
    '/list-spot': () => import('../pages/ListSpot'),
    '/how-it-works': () => import('../pages/HowItWorks'),
    '/pricing': () => import('../pages/Pricing'),
    '/design-system': () => import('../pages/DesignSystem'),
  };

  const chunkLoader = routeChunks[routePath];
  if (chunkLoader) {
    // Prefetch the route chunk
    chunkLoader();
  }
};

/**
 * Intelligent prefetching based on viewport visibility
 */
export const setupIntelligentPrefetching = () => {
  const links = document.querySelectorAll('a[href^="/"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href) {
          prefetchRoute(href);
        }
      }
    });
  }, {
    rootMargin: '50px',
  });

  links.forEach((link) => observer.observe(link));
};