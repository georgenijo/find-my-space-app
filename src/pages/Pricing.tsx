import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Check, X, Star, Users, Car, MapPin, Shield, TrendingUp, Clock, CreditCard, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for casual parkers",
      price: { monthly: 0, annual: 0 },
      badge: null,
      features: [
        "Find & book parking spots",
        "Real-time availability",
        "Basic customer support",
        "Mobile app access",
        "Up to 5 bookings per month",
        "Standard cancellation policy"
      ],
      notIncluded: [
        "Priority booking",
        "Advanced filters",
        "Multiple payment methods",
        "24/7 premium support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Parker Pro",
      description: "For frequent parkers",
      price: { monthly: 9.99, annual: 99.99 },
      badge: null,
      features: [
        "Everything in Basic",
        "Unlimited bookings",
        "Priority booking access",
        "Advanced search filters",
        "Multiple payment methods",
        "Flexible cancellation",
        "Booking history & analytics",
        "Early access to new features"
      ],
      notIncluded: [
        "Host dashboard",
        "Revenue analytics",
        "Custom pricing tools"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Host Starter",
      description: "Start earning from your parking space",
      price: { monthly: 19.99, annual: 199.99 },
      badge: "Most Popular",
      features: [
        "List unlimited parking spots",
        "Basic host dashboard",
        "Automated booking management",
        "Payment processing",
        "Basic analytics",
        "Host protection insurance",
        "Customer messaging system",
        "Standard listing visibility"
      ],
      notIncluded: [
        "Priority listing placement",
        "Advanced analytics",
        "Dynamic pricing tools",
        "Dedicated account manager"
      ],
      buttonText: "Start Hosting",
      buttonVariant: "default" as const,
      popular: false
    },
    {
      name: "Host Professional",
      description: "For serious parking space entrepreneurs",
      price: { monthly: 49.99, annual: 499.99 },
      badge: "Best Value",
      features: [
        "Everything in Host Starter",
        "Priority listing placement",
        "Advanced revenue analytics",
        "Dynamic pricing optimization",
        "Multi-location management",
        "Advanced calendar management",
        "Bulk operations",
        "API access",
        "Custom branding options",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      notIncluded: [],
      buttonText: "Go Professional",
      buttonVariant: "gradient" as const,
      popular: false
    }
  ];

  const enterpriseFeatures = [
    { icon: Users, title: "Custom Solutions", description: "Tailored parking management for large organizations" },
    { icon: Shield, title: "Enterprise Security", description: "Advanced security features and compliance" },
    { icon: TrendingUp, title: "Analytics & Reporting", description: "Comprehensive insights and custom reports" },
    { icon: Headphones, title: "Dedicated Support", description: "24/7 dedicated account management" }
  ];

  const faqItems = [
    {
      question: "How does the pricing work?",
      answer: "Our pricing is transparent and simple. Parker plans are subscription-based, while Host plans include a small commission on successful bookings. No hidden fees, ever."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payments are processed securely through our encrypted platform."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial for all paid plans. No credit card required to start your trial."
    },
    {
      question: "What happens if I cancel?",
      answer: "You can cancel anytime. Your account remains active until the end of your billing period, and you'll retain access to all features."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your parking needs. Start free, upgrade when you're ready.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-primary" : "text-muted-foreground")}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className={cn("text-sm font-medium", isAnnual ? "text-primary" : "text-muted-foreground")}>
              Annual
            </span>
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={cn(
                  "relative transition-all duration-300 hover:shadow-lg",
                  plan.popular && "ring-2 ring-primary/50 shadow-xl scale-105"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="py-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && plan.price.annual > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ${(plan.price.annual / 12).toFixed(2)} per month
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button 
                    className={cn("w-full", plan.buttonVariant === "gradient" && "bg-gradient-hero")}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Something More?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise solutions for large organizations, property managers, and parking operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="mr-4">
              Contact Sales
            </Button>
            <Button size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-left text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FindMySpot for their parking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 