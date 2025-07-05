import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Upload, 
  MapPin, 
  DollarSign, 
  Clock, 
  Car,
  Shield,
  Zap,
  Camera,
  CheckCircle
} from "lucide-react";

const ListSpot = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    priceHourly: "",
    priceDaily: "",
    priceMonthly: "",
    instructions: "",
    isCovered: false,
    hasEvCharging: false,
    has24HourAccess: false,
    hasSecurity: false,
    spotSize: "standard"
  });

  const [images, setImages] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // In a real app, you'd upload these to your storage service
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImages(prev => [...prev, e.target.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting spot listing:', { ...formData, images });
    // Handle form submission
  };

  const features = [
    {
      icon: <Car className="w-6 h-6 text-primary" />,
      title: "Easy Setup",
      description: "List your parking spot in just a few minutes"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Earn Extra Income",
      description: "Make money from your unused parking space"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Safe & Secure",
      description: "All renters are verified and insured"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Flexible Scheduling",
      description: "Set your own availability and pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">List Your Parking Spot</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Turn your unused parking space into a source of income. 
            Join thousands of hosts earning money with FindMySpot.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Spot Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Downtown Covered Parking"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street, City, State, ZIP"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your parking spot, nearby landmarks, accessibility features..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Any special instructions for renters (access codes, parking tips, etc.)"
                    value={formData.instructions}
                    onChange={(e) => handleInputChange('instructions', e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="priceHourly">Hourly Rate ($)</Label>
                    <Input
                      id="priceHourly"
                      type="number"
                      placeholder="8.00"
                      value={formData.priceHourly}
                      onChange={(e) => handleInputChange('priceHourly', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="priceDaily">Daily Rate ($)</Label>
                    <Input
                      id="priceDaily"
                      type="number"
                      placeholder="25.00"
                      value={formData.priceDaily}
                      onChange={(e) => handleInputChange('priceDaily', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="priceMonthly">Monthly Rate ($)</Label>
                    <Input
                      id="priceMonthly"
                      type="number"
                      placeholder="150.00"
                      value={formData.priceMonthly}
                      onChange={(e) => handleInputChange('priceMonthly', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Features & Amenities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="spotSize">Spot Size</Label>
                  <select
                    id="spotSize"
                    value={formData.spotSize}
                    onChange={(e) => handleInputChange('spotSize', e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    <option value="compact">Compact</option>
                    <option value="standard">Standard</option>
                    <option value="large">Large/SUV</option>
                    <option value="oversized">Oversized/Truck</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Covered Parking</Label>
                      <p className="text-sm text-muted-foreground">Protected from weather</p>
                    </div>
                    <Switch
                      checked={formData.isCovered}
                      onCheckedChange={(checked) => handleInputChange('isCovered', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>EV Charging Station</Label>
                      <p className="text-sm text-muted-foreground">Electric vehicle charging available</p>
                    </div>
                    <Switch
                      checked={formData.hasEvCharging}
                      onCheckedChange={(checked) => handleInputChange('hasEvCharging', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>24/7 Access</Label>
                      <p className="text-sm text-muted-foreground">Available any time of day</p>
                    </div>
                    <Switch
                      checked={formData.has24HourAccess}
                      onCheckedChange={(checked) => handleInputChange('has24HourAccess', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Security Features</Label>
                      <p className="text-sm text-muted-foreground">Gated, cameras, or security patrol</p>
                    </div>
                    <Switch
                      checked={formData.hasSecurity}
                      onCheckedChange={(checked) => handleInputChange('hasSecurity', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Upload Photos</h3>
                    <p className="text-muted-foreground mb-4">
                      Add photos of your parking spot to attract more renters
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <Button type="button" variant="outline" asChild>
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        Choose Photos
                      </label>
                    </Button>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Spot photo ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                className="px-8 bg-gradient-primary hover:opacity-90"
              >
                List My Parking Spot
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListSpot;