import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SpotCard } from '@/components/spots/SpotCard';
import { 
  MapPin, 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List
} from 'lucide-react';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'distance' | 'price' | 'rating'>('distance');

  // Sample spot data
  const sampleSpots = [
    {
      id: '1',
      title: 'Downtown Parking Garage',
      address: '123 Main St, Downtown',
      price: 15,
      priceType: 'hourly' as const,
      images: ['/placeholder.svg'],
      rating: 4.5,
      reviews: 128,
      distance: '0.2 miles',
      features: ['Covered', 'Security', 'EV Charging'],
      isAvailable: true,
      isFavorite: false,
    },
    {
      id: '2',
      title: 'Street Parking Spot',
      address: '456 Oak Ave, Midtown',
      price: 5,
      priceType: 'hourly' as const,
      images: ['/placeholder.svg'],
      rating: 4.2,
      reviews: 86,
      distance: '0.5 miles',
      features: ['Street Level', 'Metered'],
      isAvailable: true,
      isFavorite: true,
    },
    {
      id: '3',
      title: 'Private Driveway',
      address: '789 Pine Rd, Uptown',
      price: 120,
      priceType: 'daily' as const,
      images: ['/placeholder.svg'],
      rating: 4.8,
      reviews: 45,
      distance: '1.2 miles',
      features: ['Private', 'Gated', 'Overnight'],
      isAvailable: false,
      isFavorite: false,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  const handleFavorite = (spotId: string) => {
    // Handle favorite logic
    console.log('Toggling favorite for spot:', spotId);
  };

  const handleBook = (spotId: string) => {
    // Handle booking logic
    console.log('Booking spot:', spotId);
  };

  const filteredSpots = sampleSpots.filter(spot =>
    spot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spot.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedSpots = [...filteredSpots].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
      default:
        return parseFloat(a.distance) - parseFloat(b.distance);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Parking Spot
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover available parking spots near you with real-time availability
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, address, or landmark..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-2 bg-primary hover:bg-primary/90"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-4 flex items-center">
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Under $10/hr</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$10-25/hr</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$25+/hr</span>
                  </label>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Covered</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Security</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>EV Charging</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>24/7 Access</span>
                  </label>
                </div>
              </div>

              {/* Distance */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Distance</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="distance" className="mr-2" />
                    <span>Within 0.5 miles</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="distance" className="mr-2" />
                    <span>Within 1 mile</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="distance" className="mr-2" />
                    <span>Within 2 miles</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  {sortedSpots.length} spots found
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'distance' | 'price' | 'rating')}
                    className="border border-border rounded-md px-3 py-1 text-sm"
                  >
                    <option value="distance">Distance</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedSpots.map((spot) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  variant={viewMode === 'grid' ? 'default' : 'compact'}
                  onFavorite={handleFavorite}
                  onBook={handleBook}
                />
              ))}
            </div>

            {/* No Results */}
            {sortedSpots.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No spots found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find more parking spots.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;