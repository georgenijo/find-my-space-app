import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const ListSpot = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { number: 1, title: "Location Details", icon: <MapPin className="w-5 h-5" /> },
    { number: 2, title: "Pricing & Availability", icon: <DollarSign className="w-5 h-5" /> },
    { number: 3, title: "Features & Photos", icon: <Camera className="w-5 h-5" /> },
    { number: 4, title: "Review & Submit", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = (step: number) => {
    switch(step) {
      case 1:
        return formData.title && formData.address;
      case 2:
        return formData.priceHourly || formData.priceDaily || formData.priceMonthly;
      case 3:
        return images.length > 0;
      default:
        return false;
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitting spot listing:', { ...formData, images });
      setIsSubmitting(false);
      // Redirect to success page or show success message
    }, 2000);
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
      <section className="bg-gradient-hero text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">List Your Parking Spot</h1>
              <p className="text-xl text-white/90">
                Turn your unused parking space into steady income
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="relative flex items-center justify-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-300 z-10
                      ${
                        currentStep >= step.number
                          ? 'bg-white text-primary shadow-lg'
                          : 'bg-white/20 text-white/60'
                      }
                    `}>
                      {isStepComplete(step.number) ? (
                        <CheckCircle className="w-6 h-6 text-secondary" />
                      ) : (
                        step.icon
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`
                        absolute left-12 w-full h-1 transition-all duration-300
                        ${
                          currentStep > step.number
                            ? 'bg-white'
                            : 'bg-white/20'
                        }
                      `} style={{ width: 'calc(100vw / 8)' }} />
                    )}
                  </div>
                  <span className="hidden md:block ml-3 text-sm font-medium whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Only show on first step */}
      {currentStep === 1 && (
        <section className="py-12 bg-surface">
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
      )}

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Location Details */}
            {currentStep === 1 && (
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Listing Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Downtown Covered Parking"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      required
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Create a catchy title that describes your parking spot
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Full Address *</Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street, City, State, ZIP"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Your exact address will only be shown after booking confirmation
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your parking spot, nearby landmarks, accessibility features..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className="mt-1"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Help renters understand what makes your spot special
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="instructions">Access Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Any special instructions for renters (access codes, parking tips, etc.)"
                      value={formData.instructions}
                      onChange={(e) => handleInputChange('instructions', e.target.value)}
                      rows={3}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Pricing & Availability */}
            {currentStep === 2 && (
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Set Your Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Set competitive rates to attract more bookings. You can offer different pricing options.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="priceHourly">Hourly Rate</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                          <Input
                            id="priceHourly"
                            type="number"
                            placeholder="8.00"
                            value={formData.priceHourly}
                            onChange={(e) => handleInputChange('priceHourly', e.target.value)}
                            className="pl-8"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Recommended: $5-15/hr</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="priceDaily">Daily Rate</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                          <Input
                            id="priceDaily"
                            type="number"
                            placeholder="25.00"
                            value={formData.priceDaily}
                            onChange={(e) => handleInputChange('priceDaily', e.target.value)}
                            className="pl-8"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Recommended: $20-50/day</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="priceMonthly">Monthly Rate</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                          <Input
                            id="priceMonthly"
                            type="number"
                            placeholder="150.00"
                            value={formData.priceMonthly}
                            onChange={(e) => handleInputChange('priceMonthly', e.target.value)}
                            className="pl-8"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Recommended: $100-300/mo</p>
                      </div>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        Pro Tip
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Offering multiple pricing options increases your bookings by 40%. Consider adding special event pricing for concerts or games nearby.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Features & Photos */}
            {currentStep === 3 && (
              <>
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Parking Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="spotSize">Parking Spot Size</Label>
                      <select
                        id="spotSize"
                        value={formData.spotSize}
                        onChange={(e) => handleInputChange('spotSize', e.target.value)}
                        className="w-full mt-1 p-3 border border-input rounded-md bg-background"
                      >
                        <option value="compact">Compact - Small cars only</option>
                        <option value="standard">Standard - Most vehicles</option>
                        <option value="large">Large - SUVs & trucks</option>
                        <option value="oversized">Oversized - RVs & trailers</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Amenities & Features</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Label className="font-medium">Covered Parking</Label>
                            <p className="text-sm text-muted-foreground">Protected from weather</p>
                          </div>
                          <Switch
                            checked={formData.isCovered}
                            onCheckedChange={(checked) => handleInputChange('isCovered', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Label className="font-medium">EV Charging</Label>
                            <p className="text-sm text-muted-foreground">Electric vehicle charging</p>
                          </div>
                          <Switch
                            checked={formData.hasEvCharging}
                            onCheckedChange={(checked) => handleInputChange('hasEvCharging', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Label className="font-medium">24/7 Access</Label>
                            <p className="text-sm text-muted-foreground">Available anytime</p>
                          </div>
                          <Switch
                            checked={formData.has24HourAccess}
                            onCheckedChange={(checked) => handleInputChange('has24HourAccess', checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <Label className="font-medium">Security</Label>
                            <p className="text-sm text-muted-foreground">Gated or monitored</p>
                          </div>
                          <Switch
                            checked={formData.hasSecurity}
                            onCheckedChange={(checked) => handleInputChange('hasSecurity', checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Camera className="w-5 h-5" />
                      Add Photos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Good photos increase bookings by up to 3x. Add at least 3 photos showing different angles.
                      </p>
                      
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-neutral-50 transition-colors">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Drop photos here or click to upload</h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          PNG, JPG up to 10MB each
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
              </>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Review Your Listing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Location Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Title:</span> {formData.title || 'Not set'}</p>
                        <p><span className="text-muted-foreground">Address:</span> {formData.address || 'Not set'}</p>
                        <p><span className="text-muted-foreground">Description:</span> {formData.description || 'Not set'}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Pricing</h3>
                      <div className="space-y-2 text-sm">
                        {formData.priceHourly && <p><span className="text-muted-foreground">Hourly:</span> ${formData.priceHourly}/hr</p>}
                        {formData.priceDaily && <p><span className="text-muted-foreground">Daily:</span> ${formData.priceDaily}/day</p>}
                        {formData.priceMonthly && <p><span className="text-muted-foreground">Monthly:</span> ${formData.priceMonthly}/mo</p>}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Features</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Size:</span> {formData.spotSize}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.isCovered && <Badge variant="secondary">Covered</Badge>}
                          {formData.hasEvCharging && <Badge variant="secondary">EV Charging</Badge>}
                          {formData.has24HourAccess && <Badge variant="secondary">24/7 Access</Badge>}
                          {formData.hasSecurity && <Badge variant="secondary">Security</Badge>}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Photos</h3>
                      <p className="text-sm text-muted-foreground">{images.length} photos uploaded</p>
                      {images.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {images.slice(0, 3).map((image, index) => (
                            <img 
                              key={index}
                              src={image} 
                              alt={`Preview ${index + 1}`}
                              className="w-full h-16 object-cover rounded"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Your listing is protected</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All bookings include liability insurance and 24/7 support. You're covered up to $1 million in damages.
                    </p>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What happens next?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Your listing will be reviewed within 24 hours</li>
                      <li>• Once approved, it will be live on FindMySpot</li>
                      <li>• You'll receive an email when you get your first booking</li>
                      <li>• Payments are deposited weekly to your bank account</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6">
              <Button 
                type="button"
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className="min-w-[120px]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all ${
                      step === currentStep ? 'w-8 bg-primary' : 'bg-neutral-300'
                    }`}
                  />
                ))}
              </div>
              
              {currentStep < 4 ? (
                <Button 
                  type="button"
                  onClick={nextStep}
                  className="min-w-[120px] bg-gradient-primary"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="min-w-[120px] bg-gradient-primary"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    'List My Spot'
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListSpot;