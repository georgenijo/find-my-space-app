import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { SearchBar } from "@/components/ui/search-bar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SpotCard from "@/components/spots/SpotCard";
import { 
  MapPin, 
  Search, 
  Shield, 
  Clock, 
  DollarSign, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Car,
  Smartphone
} from "lucide-react";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  
  const handleSearch = (value: string) => {
    // Navigate to discover page with search query
    window.location.href = `/discover?location=${encodeURIComponent(value)}`;
  };

  // Mock data for featured spots
  const featuredSpots = [
    {
      id: "1",
      title: "Downtown Covered Parking",
      address: "123 Main St, Downtown",
      price: 8,
      priceType: 'hourly' as const,
      images: ["/placeholder.svg"],
      rating: 4.8,
      reviews: 127,
      distance: "0.3 miles",
      features: ["Covered", "24/7", "Security"],
      isAvailable: true,
      isFavorite: false
    },
    {
      id: "2",
      title: "Airport Long-term Parking",
      address: "456 Airport Blvd",
      price: 25,
      priceType: 'daily' as const,
      images: ["/placeholder.svg"],
      rating: 4.6,
      reviews: 89,
      distance: "2.1 miles",
      features: ["Shuttle", "EV Charging", "24/7"],
      isAvailable: true,
      isFavorite: true
    },
    {
      id: "3",
      title: "Business District Spot",
      address: "789 Corporate Ave",
      price: 12,
      priceType: 'hourly' as const,
      images: ["/placeholder.svg"],
      rating: 4.7,
      reviews: 203,
      distance: "0.8 miles",
      features: ["Covered", "Security", "Easy Access"],
      isAvailable: true,
      isFavorite: false
    }
  ];

  const features = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Find Instantly",
      description: "Search thousands of parking spots near your destination with real-time availability."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Secure & Safe",
      description: "All parking locations are verified and monitored for your safety and peace of mind."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Best Prices",
      description: "Save up to 50% compared to traditional parking with our competitive marketplace rates."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "24/7 Access",
      description: "Book parking anytime, anywhere with instant confirmation and flexible timing options."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "15K+", label: "Parking Spots" },
    { number: "25+", label: "Cities" },
    { number: "4.9★", label: "Average Rating" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Search",
      description: "Enter your destination and find available parking spots nearby",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Book",
      description: "Choose your preferred spot and book instantly with secure payment",
      icon: <Car className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Park",
      description: "Arrive at your spot and park with confidence using our mobile app",
      icon: <Smartphone className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                50% off your first booking
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Never Circle for
              <span className="block text-accent">Parking Again</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/90 animate-fade-in-up max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Book guaranteed parking spots in seconds. Save time, money, and stress with trusted spots from real people.
            </p>
            
            {/* Search Bar */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <SearchBar
                variant="hero"
                placeholder="Where do you need to park?"
                value={searchLocation}
                onChange={setSearchLocation}
                onSearch={handleSearch}
                showLocation={true}
                showDatePicker={true}
                className="max-w-4xl mx-auto"
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Instant Booking</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm">50K+ Happy Drivers</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spots */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-4">
              <Star className="w-4 h-4 mr-2" />
              Top Rated
            </div>
            <h2 className="text-4xl font-bold mb-6">Featured Parking Spots</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hand-picked locations with the best reviews and availability in your area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredSpots.map((spot) => (
              <div key={spot.id} className="animate-fade-in-up">
                <SpotCard 
                  spot={spot}
                  onFavorite={(id) => console.log('Favorite spot:', id)}
                  onBook={(id) => console.log('Book spot:', id)}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/discover">
                Explore All Spots
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-surface to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From search to park in just 3 simple steps. It's that easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px bg-gradient-to-r from-border to-transparent" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-accent text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="link" className="group">
              <Link to="/how-it-works">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Drivers Love FindMySpot</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands who've discovered a smarter way to park
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative group p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-neutral-200 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-0">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Trusted by Thousands</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what our community is saying about FindMySpot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah M.",
                role: "Daily Commuter",
                content: "FindMySpot has completely changed my morning routine. I save 20 minutes every day!",
                rating: 5
              },
              {
                name: "James K.",
                role: "Business Traveler",
                content: "Airport parking used to be a nightmare. Now I book in advance and save 50% on fees.",
                rating: 5
              },
              {
                name: "Maria L.",
                role: "Event Goer",
                content: "Never miss the start of a concert again! Guaranteed spots near every venue.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Parking Smarter Today</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join 50,000+ drivers who never worry about parking. Your perfect spot is waiting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all flex-1">
              <Link to="/discover">
                <Search className="w-5 h-5 mr-2" />
                Find Parking Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur">
              <Link to="/list-spot">
                <DollarSign className="w-5 h-5 mr-2" />
                Earn from Your Spot
              </Link>
            </Button>
          </div>
          
          <p className="mt-8 text-white/70 text-sm">
            No credit card required • Free to join • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;