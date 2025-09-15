import RazorpayPayment from "@/components/RazorpayPayment";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart,
  CheckCircle,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

const Pricing = () => {
  const customPackages = [
    {
      title: "Enterprise Schools",
      description: "For schools with 1000+ students requiring comprehensive transformation",
      features: [
        "Complete ecosystem overhaul",
        "Dedicated on-site team",
        "Custom curriculum development",
        "Multi-year partnership terms",
        "Research collaboration opportunities"
      ]
    },
    {
      title: "Government Partnerships", 
      description: "Special pricing for government schools and educational districts",
      features: [
        "Bulk pricing for multiple schools",
        "Government compliance documentation",
        "Policy implementation support",
        "Training certification programs",
        "Long-term sustainability planning"
      ]
    },
    {
      title: "NGO & Non-Profit",
      description: "Subsidized rates for non-profit organizations working in special education",
      features: [
        "Reduced pricing structure",
        "Grant application support", 
        "Volunteer training programs",
        "Community outreach initiatives",
        "Impact measurement tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Invest in Inclusive Education
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Flexible pricing options designed to make special education support accessible for every school size and budget
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Component */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RazorpayPayment />
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored packages for unique requirements and special circumstances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customPackages.map((pkg, index) => (
              <Card key={index} className="border-0 bg-gradient-to-b from-card to-muted/10 text-center">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 text-center">
                    <p className="text-lg font-semibold text-primary">Contact for Quote</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Security & Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Payment Support & Security
              </h2>
              <p className="text-xl text-muted-foreground">
                We ensure secure transactions and provide comprehensive support throughout your payment process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Heart className="h-6 w-6 mr-2 text-primary" />
                    Payment Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Secure online payments via Razorpay</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Bank transfer for larger amounts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Flexible payment terms for schools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>EMI options for premium packages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Government fund utilization support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-accent/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Phone className="h-6 w-6 mr-2 text-primary" />
                    Support & Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Pre-purchase consultation calls</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Custom package design assistance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Government compliance documentation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Budget planning support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>ROI calculation and reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Custom Pricing */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Every school is unique. Let's discuss how we can create a tailored solution 
              that fits your specific needs and budget constraints.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-primary-foreground/80">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-primary-foreground/80">pricing@lumipath.education</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-semibold">Schedule Call</div>
                  <div className="text-primary-foreground/80">Free consultation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;