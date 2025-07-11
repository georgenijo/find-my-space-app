import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  CreditCard, 
  Car, 
  Camera, 
  DollarSign, 
  Calendar,
  Shield,
  CheckCircle,
  Users,
  Clock,
  Smartphone
} from "lucide-react";

const HowItWorks = () => {
  const findingSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search for Spots",
      description: "Enter your destination and browse available parking spaces nearby. Filter by price, distance, and amenities."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Choose Your Time",
      description: "Select when you need parking - hourly, daily, or monthly. See real-time availability."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Book & Pay",
      description: "Reserve your spot instantly with secure payment. Get a confirmation and directions."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Park & Go",
      description: "Navigate to your spot and park worry-free. Extend your booking anytime from your phone."
    }
  ];

  const listingSteps = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "List Your Space",
      description: "Take photos of your parking space and add details like size, access hours, and amenities."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Set Your Price",
      description: "Choose your rates for hourly, daily, or monthly parking. We'll help you price competitively."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Manage Availability",
      description: "Control when your space is available. Block dates for personal use anytime."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Earn Money",
      description: "Get paid automatically after each booking. Track your earnings in your dashboard."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Insured",
      description: "All bookings are protected with our comprehensive insurance coverage."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Our customer support team is always available to help you."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Easy Management",
      description: "Control everything from our mobile app - bookings, payments, and more."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Community",
      description: "All users are verified for a safe and trustworthy experience."
    }
  ];

  const faqs = [
    {
      question: "How do I know my car will be safe?",
      answer: "All parking spaces are verified and insured. We also have a rating system and 24/7 support for any issues."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "You can cancel up to 24 hours before your booking for a full refund. Last-minute cancellations receive a 50% refund."
    },
    {
      question: "How do I get paid for my parking space?",
      answer: "Payments are processed automatically after each completed booking and deposited to your account within 2-3 business days."
    },
    {
      question: "Can I extend my parking time?",
      answer: "Yes! You can extend your booking through the app as long as the space remains available."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Find My Space Works
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Whether you're looking for parking or have a space to share, 
              we make it simple, secure, and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/discover">Find Parking</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/list-spot">List Your Space</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Parking Seekers */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">For Parking Seekers</Badge>
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Parking Spot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skip the hassle of searching for parking. Book guaranteed spots in advance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {findingSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    {step.icon}
                  </div>
                  <div className="absolute top-6 right-6 text-4xl font-bold text-muted-foreground/20">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/discover">Start Searching</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* For Space Owners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">For Space Owners</Badge>
            <h2 className="text-3xl font-bold mb-4">Turn Your Empty Space Into Income</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              List your parking space in minutes and start earning passive income.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {listingSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4 text-success">
                    {step.icon}
                  </div>
                  <div className="absolute top-6 right-6 text-4xl font-bold text-muted-foreground/20">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/list-spot">List Your Space</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Find My Space?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building a community of parking space owners and seekers with trust at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Have more questions?</p>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already saving time and money with Find My Space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/discover">Find Parking Now</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/list-spot">Start Earning</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;