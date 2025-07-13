import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, MapPin, Calendar, Clock, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  variant?: "default" | "hero" | "compact";
  showLocation?: boolean;
  showDatePicker?: boolean;
  className?: string;
}

const SearchBar = React.memo(({
  placeholder = "Search for parking spots...",
  value: propValue = "",
  onSearch,
  onChange,
  variant = "default",
  showLocation = false,
  showDatePicker = false,
  className
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState(propValue);
  const value = onChange ? propValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(value);
  };

  const handleClear = () => {
    if (onChange) {
      onChange("");
    } else {
      setInternalValue("");
    }
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={cn("w-full", className)}>
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-2">
            {showLocation && (
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter location..."
                  className="pl-12 h-14 border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            )}
            <div className="flex-[2] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="pl-12 pr-12 h-14 border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {value && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            {showDatePicker && (
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="h-14">
                  <Calendar className="w-5 h-5 mr-2" />
                  Today
                </Button>
                <Button variant="outline" size="lg" className="h-14">
                  <Clock className="w-5 h-5 mr-2" />
                  Now
                </Button>
              </div>
            )}
            <Button type="submit" size="lg" variant="gradient" className="h-14 px-8 shadow-lg">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </form>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("relative", className)}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="pl-9 pr-9 h-9 text-sm"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            aria-label="Clear search"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </form>
    );
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="pl-10 pr-32"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={handleClear}
          className="absolute right-24 top-1/2 -translate-y-1/2"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      <Button
        type="submit"
        variant="gradient"
        size="sm"
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        Search
      </Button>
    </form>
  );
});

SearchBar.displayName = "SearchBar";

export { SearchBar };