import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Car, Zap, Heart, Star } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

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

const SpotCard = ({ 
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
      <Card className="w-64 hover:shadow-md transition-smooth cursor-pointer">
        <CardContent className="p-3">
          <div className="relative mb-3">
            <LazyImage
              src={spot.images[0]}
              alt={spot.title}
              placeholderSrc="/placeholder.svg"
              className="w-full h-32 object-cover rounded-md"
              onError={() => setImageError(true)}
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
              onClick={handleFavorite}
            >
              <Heart className={`w-4 h-4 ${spot.isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
            </Button>
          </div>
          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{spot.title}</h3>
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
    <Card className="overflow-hidden hover:shadow-lg transition-smooth cursor-pointer group">
      <div className="relative">
        <LazyImage
          src={spot.images[0]}
          alt={spot.title}
          placeholderSrc="/placeholder.svg"
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          onError={() => setImageError(true)}
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-9 h-9 p-0 bg-white/80 hover:bg-white"
          onClick={handleFavorite}
        >
          <Heart className={`w-4 h-4 ${spot.isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
        </Button>
        <div className="absolute top-3 left-3">
          <Badge variant={spot.isAvailable ? "default" : "secondary"} className="bg-success">
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
            className="bg-gradient-primary hover:opacity-90"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpotCard;