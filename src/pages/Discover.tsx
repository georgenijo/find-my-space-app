import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  DollarSign,
  Shield,
  Plus,
  Minus,
  ArrowRight
} from "lucide-react";

const Discover = () => {
  const [searchParams] = useSearchParams();
  const [searchLocation, setSearchLocation] = useState("");
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: { min: null, max: null },
    distance: 'all',
    features: [] as string[],
    availability: 'all'
  });
  const [sortBy, setSortBy] = useState('recommended');

  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setSearchLocation(location);
    }
  }, [searchParams]);

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

  const [quickFilters, setQuickFilters] = useState([
    { id: 'available', label: "Available Now", active: true },
    { id: 'budget', label: "Under $10/hr", active: false },
    { id: 'covered', label: "Covered", active: false },
    { id: 'ev', label: "EV Charging", active: false },
    { id: '24-7', label: "24/7 Access", active: false }
  ]);

  const toggleQuickFilter = (id: string) => {
    setQuickFilters(prev => prev.map(filter => 
      filter.id === id ? { ...filter, active: !filter.active } : filter
    ));
  };

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching for:', searchLocation);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Header */}
      <section className="bg-gradient-to-b from-surface to-background border-b border-border py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Find Your Perfect Parking Spot</h1>
            <p className="text-muted-foreground text-center mb-8">Search from {spots.length}+ verified parking locations</p>
          
            {/* Search and Filters Row */}
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Where do you need to park?"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="pl-12 h-12 text-base border-neutral-200 focus:border-primary"
                  />
                </div>
                
                {/* Date/Time Picker */}
                <div className="flex gap-2">
                  <Button variant="outline" className="h-12 px-4 border-neutral-200 hover:bg-neutral-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Today
                  </Button>
                  <Button variant="outline" className="h-12 px-4 border-neutral-200 hover:bg-neutral-50">
                    <Clock className="w-4 h-4 mr-2" />
                    2:00 PM
                  </Button>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSearch}
                    className="h-12 px-6 bg-gradient-primary hover:shadow-lg transition-all"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`h-12 px-4 border-neutral-200 ${showFilters ? 'bg-primary text-white' : 'hover:bg-neutral-50'}`}
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {quickFilters.map((filter) => (
                <Badge 
                  key={filter.id}
                  variant={filter.active ? "default" : "outline"}
                  onClick={() => toggleQuickFilter(filter.id)}
                  className={`px-4 py-1.5 cursor-pointer transition-all ${
                    filter.active 
                      ? 'bg-primary text-white border-primary' 
                      : 'hover:bg-primary/10 hover:border-primary/50'
                  }`}
                >
                  {filter.label}
                </Badge>
              ))}
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">
                  {spots.length} parking spots found
                </p>
                <p className="text-sm text-muted-foreground">
                  {searchLocation || 'All locations'}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 text-sm border border-input rounded-md bg-background"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="distance">Distance: Nearest</option>
                  <option value="rating">Rating: Highest</option>
                </select>
                
                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'shadow-sm' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'map' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('map')}
                    className={viewMode === 'map' ? 'shadow-sm' : ''}
                  >
                    <Map className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <section className="bg-white border-b border-border py-8 animate-slide-down shadow-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                        <Input placeholder="0" className="h-10 pl-8" type="number" />
                      </div>
                      <span className="text-muted-foreground">-</span>
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                        <Input placeholder="50" className="h-10 pl-8" type="number" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Per hour</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Distance
                  </h3>
                  <div className="space-y-2">
                    {['0.5 miles', '1 mile', '2 miles', '5+ miles'].map((distance) => (
                      <label key={distance} className="flex items-center space-x-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="distance" 
                          value={distance}
                          className="text-primary focus:ring-primary" 
                        />
                        <span className="text-sm group-hover:text-primary transition-colors">
                          Within {distance}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Features
                  </h3>
                  <div className="space-y-2">
                    {[
                      { id: 'covered', label: 'Covered Parking' },
                      { id: 'ev', label: 'EV Charging' },
                      { id: 'security', label: 'Security/CCTV' },
                      { id: 'disabled', label: 'Disabled Access' },
                      { id: 'valet', label: 'Valet Service' }
                    ].map((feature) => (
                      <label key={feature.id} className="flex items-center space-x-2 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          id={feature.id} 
                          className="rounded text-primary focus:ring-primary" 
                        />
                        <span className="text-sm group-hover:text-primary transition-colors">
                          {feature.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Booking Options
                  </h3>
                  <div className="space-y-2">
                    {[
                      { id: 'available', label: 'Available Now', checked: true },
                      { id: 'instant', label: 'Instant Booking' },
                      { id: 'flexible', label: 'Flexible Cancellation' },
                      { id: 'monthly', label: 'Monthly Rates' }
                    ].map((option) => (
                      <label key={option.id} className="flex items-center space-x-2 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          id={option.id} 
                          defaultChecked={option.checked}
                          className="rounded text-primary focus:ring-primary" 
                        />
                        <span className="text-sm group-hover:text-primary transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    // Reset filters logic
                    setShowFilters(false);
                  }}
                >
                  Clear All Filters
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowFilters(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowFilters(false)} className="bg-gradient-primary">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {viewMode === 'list' ? (
              <>
                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spots.map((spot, index) => (
                    <div key={spot.id} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}>
                      <SpotCard 
                        spot={spot}
                        onFavorite={(id) => console.log('Favorite spot:', id)}
                        onBook={(id) => console.log('Book spot:', id)}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg" className="group">
                    Load More Spots
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="relative">
                <div className="h-[600px] bg-surface rounded-2xl overflow-hidden shadow-lg">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
                  
                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <Button size="sm" variant="secondary" className="shadow-md">
                      <MapPin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="shadow-md">
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="shadow-md">
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                    <h4 className="font-semibold mb-2">Map Legend</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-secondary rounded-full" />
                        <span>Available Spots</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-neutral-400 rounded-full" />
                        <span>Occupied Spots</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                        <span>Your Location</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center Message */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                      <Map className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                      <p className="text-muted-foreground mb-4">
                        View all parking spots on an interactive map
                      </p>
                      <Button variant="outline">
                        Switch to List View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discover;