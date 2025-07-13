import React from "react";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  period?: "hourly" | "daily" | "weekly" | "monthly";
  size?: "sm" | "md" | "lg" | "xl";
  showCents?: boolean;
  className?: string;
}

const PriceDisplay = React.memo(({
  amount,
  currency = "$",
  period,
  size = "md",
  showCents = true,
  className
}: PriceDisplayProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
    xl: "text-3xl"
  };

  const periodLabels = {
    hourly: "hr",
    daily: "day",
    weekly: "week",
    monthly: "mo"
  };

  const formatPrice = (price: number) => {
    if (showCents) {
      return price.toFixed(2);
    }
    return Math.floor(price).toString();
  };

  return (
    <div className={cn("inline-flex items-baseline gap-0.5", className)}>
      <span className={cn("font-bold text-primary", sizeClasses[size])}>
        {currency}{formatPrice(amount)}
      </span>
      {period && (
        <span className={cn(
          "text-muted-foreground",
          size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"
        )}>
          /{periodLabels[period]}
        </span>
      )}
    </div>
  );
});

PriceDisplay.displayName = "PriceDisplay";

export { PriceDisplay };