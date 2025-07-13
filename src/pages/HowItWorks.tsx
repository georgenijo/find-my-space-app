import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Search, 
  Calendar, 
  CreditCard, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Search for Parking",
      description: "Enter your destination and browse through thousands of verified parking spots. Filter by price, distance, and amenities to find your perfect match.",
      icon: <Search className="w-8 h-8" />,
      details: [
        "Real-time availability updates",
        "Detailed photos and descriptions",
        "User reviews and ratings",
        "Street view integration"
      ]
    },
    {
      number: "02",
      title: "Choose Your Dates",
      description: "Select your parking duration - whether it's for a few hours, days, or monthly. Get instant pricing with no hidden fees.",
      icon: <Calendar className="w-8 h-8" />,
      details: [
        "Flexible hourly, daily, or monthly rates",
        "Early bird and advance booking discounts",
        "Free cancellation options",
        "Calendar integration"
      ]
    },
    {
      number: "03",
      title: "Book & Pay Securely",
      description: "Complete your booking in seconds with our secure payment system. Receive instant confirmation and parking details.",
      icon: <CreditCard className="w-8 h-8" />,
      details: [
        "Multiple payment methods accepted",
        "Bank-level encryption",
        "Digital receipts",
        "Expense tracking"
      ]
    },
    {
      number: "04",
      title: "Park with Confidence",
      description: "Navigate to your spot using our mobile app. Access codes and instructions are provided for seamless entry.",
      icon: <Car className="w-8 h-8" />,
      details: [
        "Turn-by-turn navigation",
        "QR code or digital access",
        "24/7 customer support",
        "Parking timer reminders"
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Save Money",
      description: "Up to 50% cheaper than traditional parking garages"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time",
      description: "No more circling blocks looking for parking"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stay Safe",
      description: "All spots are verified and insured for your protection"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Community",
      description: "Connect with thousands of drivers and spot owners"
    }
  ];

  const faqs = [
    {
      question: "How do I know my spot is legitimate?",
      answer: "All parking spots are verified by our team. We check ownership documents, conduct site visits, and ensure proper insurance coverage before listing any spot."
    },
    {
      question: "What if I need to cancel my booking?",
      answer: "Most bookings can be cancelled for free up to 24 hours before your parking time. Some spots offer flexible cancellation up to 1 hour before."
    },
    {
      question: "Is my vehicle insured while parked?",
      answer: "Yes! All parking spots on FindMySpot include liability insurance coverage. Your vehicle is protected against damage while parked."
    },
    {
      question: "Can I extend my parking time?",
      answer: "Absolutely! You can extend your parking duration directly from the app, subject to availability. You'll only pay for the additional time."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              How FindMySpot Works
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              From search to park in just 4 simple steps. Experience the future of parking today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="secondary" className="shadow-lg">
                <Link to="/discover">
                  Find Parking Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/list-spot">List Your Spot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Parking Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've simplified parking into four easy steps. No more stress, just seamless parking experiences.
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="animate-fade-in-up">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white shadow-lg">
                        {step.icon}
                      </div>
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-surface rounded-2xl p-8 shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="aspect-video bg-gradient-surface rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          {step.icon}
                        </div>
                        <p className="text-muted-foreground">Interactive demo coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FindMySpot?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of smart drivers who've discovered a better way to park.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of drivers who never worry about parking again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link to="/discover">
                Find Parking
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/list-spot">List Your Spot</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;