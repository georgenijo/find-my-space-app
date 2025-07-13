/**
 * Image optimization utilities for performance
 */

interface ImageLoaderProps {
  src: string;
  width?: number;
  quality?: number;
}

/**
 * Generate optimized image URL with proper sizing
 * Can be extended to use image CDN services like Cloudinary or Imgix
 */
export const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  // For now, return the original src
  // In production, integrate with an image CDN
  return src;
};

/**
 * Lazy load images using Intersection Observer
 */
export const lazyLoadImage = (imgElement: HTMLImageElement) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  imageObserver.observe(imgElement);
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generate blur placeholder for images
 */
export const generateBlurPlaceholder = (width: number, height: number): string => {
  // Simple SVG blur placeholder
  return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`;
};