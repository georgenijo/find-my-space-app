import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SpotCard from "@/components/spots/SpotCard";
import { 
  MapPin, 
  Search, 
  Filter, 
  Map,
  List,
  SlidersHorizontal,
  Calendar,
  Clock,
  DollarSign
} from "lucide-react";

const Discover = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for spots
  const spots = [
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
    },
    {
      id: "4",
      title: "University Parking",
      address: "321 College Dr",
      price: 5,
      priceType: 'hourly' as const,
      images: ["/placeholder.svg"],
      rating: 4.3,
      reviews: 156,
      distance: "1.2 miles",
      features: ["Student Discount", "Bike Rack"],
      isAvailable: true,
      isFavorite: false
    },
    {
      id: "5",
      title: "Shopping Mall Parking",
      address: "555 Mall Blvd",
      price: 3,
      priceType: 'hourly' as const,
      images: ["/placeholder.svg"],
      rating: 4.5,
      reviews: 92,
      distance: "1.8 miles",
      features: ["Free 1st Hour", "Shopping"],
      isAvailable: false,
      isFavorite: false
    },
    {
      id: "6",
      title: "Event Center Parking",
      address: "777 Event Way",
      price: 15,
      priceType: 'daily' as const,
      images: ["/placeholder.svg"],
      rating: 4.4,
      reviews: 78,
      distance: "0.5 miles",
      features: ["Event Parking", "Large Vehicles"],
      isAvailable: true,
      isFavorite: false
    }
  ];

  const quickFilters = [
    { label: "Available Now", active: true },
    { label: "Under $10/hr", active: false },
    { label: "Covered", active: false },
    { label: "EV Charging", active: false },
    { label: "24/7 Access", active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Header */}
      <section className="bg-surface border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Discover Parking Spots</h1>
          
          {/* Search and Filters Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Where do you need to park?"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            
            {/* Date/Time Picker */}
            <div className="flex gap-2">
              <Button variant="outline" className="h-12 px-4">
                <Calendar className="w-4 h-4 mr-2" />
                Today
              </Button>
              <Button variant="outline" className="h-12 px-4">
                <Clock className="w-4 h-4 mr-2" />
                2:00 PM
              </Button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button className="h-12 px-6 bg-gradient-primary">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-4"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {quickFilters.map((filter, index) => (
              <Badge 
                key={index}
                variant={filter.active ? "default" : "outline"}
                className="px-3 py-1 cursor-pointer hover:bg-primary/10 transition-smooth"
              >
                {filter.label}
              </Badge>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Found {spots.length} parking spots
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4 mr-1" />
                List
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="w-4 h-4 mr-1" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="bg-white border-b border-border py-6 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Min" className="h-9" />
                    <span>-</span>
                    <Input placeholder="Max" className="h-9" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Distance</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="cursor-pointer">Within 0.5 miles</Badge>
                  <Badge variant="outline" className="cursor-pointer">Within 1 mile</Badge>
                  <Badge variant="outline" className="cursor-pointer">Within 2 miles</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="covered" className="rounded" />
                    <label htmlFor="covered" className="text-sm">Covered</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="ev" className="rounded" />
                    <label htmlFor="ev" className="text-sm">EV Charging</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="security" className="rounded" />
                    <label htmlFor="security" className="text-sm">Security</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="available" className="rounded" defaultChecked />
                    <label htmlFor="available" className="text-sm">Available Now</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="instant" className="rounded" />
                    <label htmlFor="instant" className="text-sm">Instant Booking</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spots.map((spot, index) => (
                <div key={spot.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <SpotCard 
                    spot={spot}
                    onFavorite={(id) => console.log('Favorite spot:', id)}
                    onBook={(id) => console.log('Book spot:', id)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 bg-surface rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Map View</h3>
                <p className="text-muted-foreground">
                  Interactive map will be integrated here with Mapbox
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discover;