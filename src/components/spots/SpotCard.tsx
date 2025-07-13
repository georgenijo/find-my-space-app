import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Car, Zap, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

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

const SpotCard = React.memo(({ 
  spot, 
  variant = 'default', 
  onFavorite, 
  onBook 
}: SpotCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onFavorite?.(spot.id);
  };

  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onBook?.(spot.id);
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

  if (variant === 'compact') {
    return (
      <Card className="w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50">
        <CardContent className="p-3">
          <div className="relative mb-3">
            <img
              src={imageError ? '/placeholder.svg' : spot.images[0]}
              alt={spot.title}
              className="w-full h-32 object-cover rounded-md"
              onError={() => setImageError(true)}
            />
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
              onClick={handleFavorite}
              aria-label={spot.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={cn(
                "w-4 h-4 transition-colors",
                spot.isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
              )} />
            </Button>
          </div>
          <h3 className="font-semibold text-sm mb-1 line-clamp-1 text-foreground">{spot.title}</h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
            <MapPin className="w-3 h-3 inline mr-1" />
            {spot.address}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary">
              ${spot.price}/{spot.priceType === 'hourly' ? 'hr' : spot.priceType === 'daily' ? 'day' : 'mo'}
            </span>
            <div className="flex items-center text-xs">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              {spot.rating}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border-border/50">
      <div className="relative">
        <img
          src={imageError ? '/placeholder.svg' : spot.images[0]}
          alt={spot.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          onError={() => setImageError(true)}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
          onClick={handleFavorite}
          aria-label={spot.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={cn(
            "w-4 h-4 transition-colors",
            spot.isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
          )} />
        </Button>
        <div className="absolute top-3 left-3">
          <Badge 
            variant={spot.isAvailable ? "default" : "secondary"} 
            className={cn(
              "shadow-sm backdrop-blur-sm",
              spot.isAvailable ? "bg-success/90 text-white" : "bg-destructive/90 text-white"
            )}
          >
            {spot.isAvailable ? 'Available' : 'Occupied'}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{spot.title}</h3>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{spot.rating}</span>
            <span className="text-muted-foreground ml-1">({spot.reviews})</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-3 flex items-center">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{spot.address}</span>
          <span className="ml-2 text-xs">• {spot.distance}</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {spot.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {getFeatureIcon(feature)}
              <span className="ml-1">{feature}</span>
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">${spot.price}</span>
            <span className="text-muted-foreground">
              /{spot.priceType === 'hourly' ? 'hour' : spot.priceType === 'daily' ? 'day' : 'month'}
            </span>
          </div>
          <Button 
            onClick={handleBook}
            variant="gradient"
            className="shadow-sm"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

SpotCard.displayName = "SpotCard";

export default SpotCard;