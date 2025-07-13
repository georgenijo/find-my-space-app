import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const LoadingSpinner = React.memo(({ 
  size = "md", 
  className 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
    xl: "w-16 h-16 border-4"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-neutral-200 border-t-primary",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
});

LoadingSpinner.displayName = "LoadingSpinner";

interface LoadingOverlayProps {
  show?: boolean;
  message?: string;
  className?: string;
}

const LoadingOverlay = React.memo(({ 
  show = true, 
  message = "Loading...", 
  className 
}: LoadingOverlayProps) => {
  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card shadow-lg border">
        <LoadingSpinner size="lg" />
        {message && (
          <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
        )}
      </div>
    </div>
  );
});

LoadingOverlay.displayName = "LoadingOverlay";

export { LoadingSpinner, LoadingOverlay };