import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Car, Zap, Heart, Star, Navigation } from "lucide-react";

interface SpotCardProps {
  spot: {
    id: string;
    title: string;
    address: string;
    price: number;
    priceType: 'hourly' | 'daily' | 'monthly';
    images: string[];
    rating: number;
    reviews: number;
    distance: string;
    features: string[];
    isAvailable: boolean;
    isFavorite?: boolean;
  };
  variant?: 'default' | 'compact';
  onFavorite?: (id: string) => void;
  onBook?: (id: string) => void;
}

export const SpotCard = ({ spot, variant = 'default', onFavorite, onBook }: SpotCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavorite?.(spot.id);
  };

  const handleBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBook?.(spot.id);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'covered':
        return <Car className="w-3 h-3" />;
      case 'ev charging':
        return <Zap className="w-3 h-3" />;
      case '24/7':
        return <Clock className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getPriceUnit = (priceType: 'hourly' | 'daily' | 'monthly') => {
    switch (priceType) {
      case 'hourly': return 'hr';
      case 'daily': return 'day';
      case 'monthly': return 'mo';
      default: return 'hr';
    }
  };

  const getPriceUnitLong = (priceType: 'hourly' | 'daily' | 'monthly') => {
    switch (priceType) {
      case 'hourly': return 'hour';
      case 'daily': return 'day';
      case 'monthly': return 'month';
      default: return 'hour';
    }
  };

  if (variant === 'compact') {
    return (
      <Card className="w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50">
        <CardContent className="p-3">
          <div className="relative mb-3">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={imageError ? '/placeholder.svg' : spot.images[0]}
              alt={spot.title}
              className="w-full h-32 object-cover rounded-md"
              onError={handleImageError}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white/90 transition-colors duration-200"
              onClick={handleFavorite}
            >
              <Heart className={`w-4 h-4 ${spot.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-sm line-clamp-1">{spot.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-1">{spot.address}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{spot.distance}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-primary">
                ${spot.price}/{getPriceUnit(spot.priceType)}
              </span>
              <div className="flex items-center text-xs">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{spot.rating}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border-border/50">
      <div className="relative">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={imageError ? '/placeholder.svg' : spot.images[0]}
          alt={spot.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          onError={handleImageError}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-10 w-10 bg-white/80 hover:bg-white/90 transition-colors duration-200"
          onClick={handleFavorite}
        >
          <Heart className={`w-5 h-5 ${spot.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
        
        {/* Availability Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant={spot.isAvailable ? "default" : "secondary"} className="text-xs">
            {spot.isAvailable ? 'Available' : 'Occupied'}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{spot.title}</h3>
            <div className="flex items-center text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{spot.address}</span>
            </div>
            <div className="flex items-center text-muted-foreground mb-4">
              <Navigation className="w-4 h-4 mr-2" />
              <span className="text-sm">{spot.distance}</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {spot.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                {getFeatureIcon(feature)}
                {feature}
              </Badge>
            ))}
            {spot.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{spot.features.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-medium">{spot.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">({spot.reviews} reviews)</span>
          </div>
          
          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-primary">${spot.price}</span>
              <span className="text-muted-foreground">
                /{getPriceUnitLong(spot.priceType)}
              </span>
            </div>
            <Button 
              className="bg-gradient-hero hover:bg-gradient-hero/90 transition-all duration-200"
              onClick={handleBook}
            >
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

SpotCard.displayName = "SpotCard";

export default SpotCard;