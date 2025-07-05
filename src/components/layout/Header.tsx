import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Search, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            FindMySpot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/discover" className="text-foreground/80 hover:text-primary transition-smooth">
            Find Parking
          </Link>
          <Link to="/list-spot" className="text-foreground/80 hover:text-primary transition-smooth">
            List Your Spot
          </Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-smooth">
            How It Works
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
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
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
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
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;