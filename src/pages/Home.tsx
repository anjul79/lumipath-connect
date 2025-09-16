import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Shield
} from "lucide-react";
import lumiPathLogo from "@/assets/lumipath-logo-transparent.png";

const Home = () => {
  const stats = [
    { number: "8-10%", label: "Children have learning disabilities", source: "Indian Pediatrics, 2018" },
    { number: "15+", label: "Years of expertise", source: "Experienced leadership" },
    { number: "<1%", label: "Get structured support", source: "NCERT Reports" },
    { number: "29%", label: "School dropouts cite academic difficulties", source: "MHRD Report" }
  ];

  const services = [
    {
      icon: BookOpen,
      title: "NIOS Framework Partnership",
      description: "Seamless integration with schools under the NIOS framework for flexible, inclusive education."
    },
    {
      icon: Users,
      title: "Teacher Training & Support",
      description: "Comprehensive training programs to equip educators with special education expertise."
    },
    {
      icon: Target,
      title: "Learning Disability Assessment",
      description: "Early identification and structured intervention plans for children with specific learning needs."
    },
    {
      icon: Shield,
      title: "Policy Compliance",
      description: "Full adherence to NEP 2020, RPwD Act 2016, and SDG4 inclusive education mandates."
    }
  ];

  const testimonials = [
    {
      name: "Principal Sharma",
      role: "DPS Bangalore",
      content: "LumiPath transformed our approach to inclusive education. Our teachers are now confident and equipped.",
      rating: 5
    },
    {
      name: "Mrs. Priya Kumar",
      role: "Parent",
      content: "My daughter with dyslexia is thriving thanks to LumiPath's structured support system.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <img 
                src={lumiPathLogo} 
                alt="LumiPath" 
                className="h-24 md:h-32 lg:h-40 mx-auto mb-4 bg-transparent"
                style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
              />
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                ✨ The Inclusive Education Partner
              </Badge>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Every Child Deserves to Shine</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering <strong>schools</strong> and supporting <strong>parents</strong> with expert special education solutions under the NIOS framework. 
              Built by experienced educationists and IIM-IIT alumni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support system designed to bridge the gap in special education within schools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-b from-card to-muted/20">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Schools Choose LumiPath
              </h2>
              <p className="text-xl text-muted-foreground">
                Schools cannot handle special education alone. We provide the expertise and support they need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Leadership</h3>
                    <p className="text-muted-foreground">15+ years of special education expertise with IIM-IIT alumni support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reduced Teacher Burden</h3>
                    <p className="text-muted-foreground">Address the 26:1 student-teacher ratio challenge with specialized support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Government Compliance</h3>
                    <p className="text-muted-foreground">Full alignment with NEP 2020 and RPwD Act 2016 requirements</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Framework</h3>
                    <p className="text-muted-foreground">NIOS-based flexible curriculum and adapted assessments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teacher Empowerment</h3>
                    <p className="text-muted-foreground">Transform the 1% trained teachers statistic through comprehensive training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sustainable Support</h3>
                    <p className="text-muted-foreground">Long-term partnership approach, not just one-time training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from schools and families we've empowered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-b from-card to-muted/10">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Education at Your School?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join us in creating an inclusive learning environment where every child can thrive. 
              Let's discuss how LumiPath can support your school's journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Partnership
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;