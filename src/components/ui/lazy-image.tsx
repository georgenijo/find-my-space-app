import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

export const LazyImage = ({ 
  src, 
  alt, 
  placeholderSrc,
  className,
  ...props 
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || "");
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && imageSrc === (placeholderSrc || "")) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, placeholderSrc, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={cn("transition-opacity duration-300", className)}
      loading="lazy"
      {...props}
    />
  );
};