import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Award, 
  Target,
  Shield,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  GraduationCap,
  FileText,
  Calendar
} from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      icon: BookOpen,
      title: "NIOS Framework Partnership",
      description: "Seamless integration with schools under the National Institute of Open Schooling framework",
      features: [
        "Flexible curriculum adaptation",
        "Alternative assessment methods", 
        "Individualized education plans",
        "Progress tracking systems"
      ],
      highlight: "Government Approved Framework"
    },
    {
      icon: Users,
      title: "Teacher Training & Development",
      description: "Comprehensive programs to transform teachers into special education champions",
      features: [
        "Specialized learning disability training",
        "Classroom adaptation techniques",
        "Assistive technology integration",
        "Ongoing mentorship support"
      ],
      highlight: "15+ Years Expertise"
    },
    {
      icon: Target,
      title: "Learning Assessment & Intervention", 
      description: "Early identification and structured support for children with learning disabilities",
      features: [
        "Comprehensive LD screening",
        "Personalized intervention plans",
        "Regular progress monitoring",
        "Parent guidance sessions"
      ],
      highlight: "Evidence-Based Approach"
    },
    {
      icon: Shield,
      title: "Policy Compliance & Support",
      description: "Complete alignment with government mandates and educational policies",
      features: [
        "NEP 2020 implementation",
        "RPwD Act 2016 compliance",
        "SDG4 alignment",
        "Documentation support"
      ],
      highlight: "Regulatory Excellence"
    }
  ];

  const supportServices = [
    {
      icon: ClipboardList,
      title: "Administrative Support",
      description: "Reduce teacher burden with specialized administrative assistance"
    },
    {
      icon: GraduationCap,
      title: "Parent Education",
      description: "Empowering families with knowledge and strategies for home support"
    },
    {
      icon: FileText,
      title: "Resource Development",
      description: "Custom teaching materials and assessment tools for your school"
    },
    {
      icon: Calendar,
      title: "Ongoing Consultation",
      description: "Regular review meetings and continuous improvement support"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Reduced Teacher Stress",
      description: "Address the 42% teacher stress rate with specialized support",
      metric: "42% → 15%"
    },
    {
      title: "Improved Student Outcomes", 
      description: "Better learning outcomes for the 8-10% with learning disabilities",
      metric: "3x Success Rate"
    },
    {
      title: "Policy Compliance",
      description: "100% alignment with NEP 2020 and government mandates",
      metric: "100% Compliant"
    },
    {
      title: "Teacher Empowerment",
      description: "Transform untrained teachers into confident special educators",
      metric: "1% → 80%"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transforming Special Education
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Complete ecosystem support for schools to implement inclusive education effectively under the NIOS framework
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four pillars of support that make inclusive education successful in your school
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Support Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support ecosystem for sustainable success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur hover:bg-card transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable outcomes that transform your school's special education capability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to implementing inclusive education at your school
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "Comprehensive evaluation of current capabilities and needs assessment"
                },
                {
                  step: "02", 
                  title: "Team Training",
                  description: "Intensive teacher training program and resource development"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Gradual rollout with ongoing support and monitoring"
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous improvement based on outcomes and feedback"
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">{phase.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Inclusive Education Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Partner with LumiPath to transform your school into an inclusive education leader. 
              Let's discuss how our services can be customized for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;