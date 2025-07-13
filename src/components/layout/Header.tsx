import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
        : "bg-background/80 backdrop-blur-md border-b border-transparent"
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl group">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            FindMySpot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/discover" className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group">
            Find Parking
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/list-spot" className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group">
            List Your Spot
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors duration-200 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hover:bg-accent/50">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm" className="border-border/50 hover:border-primary/50">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" variant="gradient" className="shadow-sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={cn(
          "md:hidden border-b border-border transition-all duration-300",
          "bg-background/95 backdrop-blur-lg",
          "animate-slide-down"
        )}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/discover" 
              className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Parking
            </Link>
            <Link 
              to="/list-spot" 
              className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Spot
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="outline" className="w-full border-border/50 hover:border-primary/50">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button variant="gradient" className="w-full shadow-sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;