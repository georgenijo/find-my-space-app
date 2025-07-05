import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 animate-fade-in-up">
              Find Your Perfect{" "}
              <span className="text-yellow-300">Parking Spot</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Discover and book parking spots instantly. Join thousands of drivers 
              who never worry about parking again.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Where do you need to park?"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-12 h-12 border-0 text-foreground placeholder:text-muted-foreground bg-transparent"
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-gradient-primary text-white shadow-glow">
                  <Search className="w-5 h-5 mr-2" />
                  Find Parking
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spots */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Parking Spots</h2>
            <p className="text-muted-foreground text-lg">
              Discover popular parking locations in your area
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
            <Button asChild variant="outline" size="lg">
              <Link to="/discover">
                View All Spots
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How FindMySpot Works</h2>
            <p className="text-muted-foreground text-lg">
              Getting started is simple and takes just minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-glow">
                  {step.icon}
                </div>
                <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FindMySpot?</h2>
            <p className="text-muted-foreground text-lg">
              The smart solution for all your parking needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-smooth animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Parking Smarter?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of drivers who have already discovered the easiest way to find and book parking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button asChild size="lg" variant="secondary" className="flex-1">
              <Link to="/discover">Find Parking</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/list-spot">List Your Spot</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;