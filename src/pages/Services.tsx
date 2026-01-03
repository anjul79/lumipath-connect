import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Calendar,
  Heart,
  Trophy,
  Home,
  MessageCircle,
  Monitor
} from "lucide-react";
import lumiPathLogo from "@/assets/lumipath-logo-transparent.png";
import SEO from "@/components/SEO";
import { useContactFormDialog } from "@/contexts/ContactFormDialogContext";

const Services = () => {
  const { openContactDialog } = useContactFormDialog();

  const coreServices = [
    {
      icon: BookOpen,
      title: "NIOS Framework Partnership",
      description: "Seamless integration with schools under the National Institute of Open Schooling framework",
      features: [
        "Flexible curriculum adaptation",
        "Alternative assessment methods", 
        "Individualized Education Plans (IEP)",
        "Progress tracking systems"
      ],
      highlight: "Government Approved Framework"
    },
    {
      icon: Monitor,
      title: "Education Delivery Model – Offline & Online Classes",
      description: "Flexible learning delivery through hybrid offline and online classroom experiences",
      features: [
        "Blended learning approach",
        "Interactive online platforms",
        "On-site classroom support",
        "Technology integration training"
      ],
      highlight: "Flexible Learning"
    },
    {
      icon: Trophy,
      title: "Sports & Talent Development",
      description: "Identifying and nurturing special talents through structured sports and activity programs",
      features: [
        "Talent identification programs",
        "Adaptive sports activities",
        "Creative arts development",
        "Life skills training"
      ],
      highlight: "Holistic Development"
    },
    {
      icon: Heart,
      title: "Personalized Programs & Therapies",
      description: "Tailored intervention programs and therapeutic support for individual needs",
      features: [
        "Individual therapy sessions",
        "Group intervention programs",
        "Behavioral modification plans",
        "Sensory integration therapy"
      ],
      highlight: "Individualized Care"
    },
    {
      icon: Home,
      title: "Exam Prep, Career Guidance & Homeschooling Support",
      description: "Comprehensive support for alternative education pathways and career planning",
      features: [
        "Customized exam preparation",
        "Career counseling sessions",
        "Homeschool curriculum design",
        "Transition planning support"
      ],
      highlight: "Future Ready"
    },
    {
      icon: MessageCircle,
      title: "Parent & Child Counselling, Workshops, Stress Management & More",
      description: "Holistic family support through counselling, workshops, and stress management programs",
      features: [
        "Individual counselling sessions",
        "Family therapy programs",
        "Stress management workshops",
        "Support group meetings"
      ],
      highlight: "Mental Wellness"
    },
    {
      icon: Target,
      title: "Learning Assessment & Intervention", 
      description: "Early identification and structured support for children with learning difficulties",
      features: [
        "Psycho educational assessment",
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
    },
    {
      icon: ClipboardList,
      title: "Administrative Support for School",
      description: "Reduce teacher burden with specialized administrative assistance",
      features: [
        "Documentation management",
        "Progress report generation",
        "Parent communication support",
        "Resource coordination"
      ],
      highlight: "Streamlined Operations"
    },
    {
      icon: GraduationCap,
      title: "Parent Education",
      description: "Empowering families with knowledge and strategies for home support",
      features: [
        "Home learning strategies",
        "Behavior management techniques",
        "Educational advocacy training",
        "Support group facilitation"
      ],
      highlight: "Family Empowerment"
    },
    {
      icon: FileText,
      title: "Resource Development",
      description: "Custom teaching materials",
      features: [
        "Adaptive learning materials",
        "Assessment tools creation",
        "Visual aid development",
        "Digital resource library"
      ],
      highlight: "Customized Solutions"
    },
    {
      icon: Calendar,
      title: "Ongoing Consultation",
      description: "Regular review meetings and continuous improvement support",
      features: [
        "Monthly progress reviews",
        "Strategy refinement sessions",
        "Problem-solving support",
        "Best practice sharing"
      ],
      highlight: "Continuous Support"
    },
    {
      icon: Users,
      title: "Teacher Training & Development",
      description: "Comprehensive programs to transform teachers into special education champions",
      features: [
        "Specialized learning difficulty training",
        "Classroom adaptation techniques",
        "Assistive technology integration",
        "Ongoing mentorship support"
      ],
      highlight: "15+ Years Expertise"
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
      description: "Better learning outcomes for the 8-10% with learning difficulties",
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
    <>
      <SEO 
        title="Our Services - Transforming Special Education"
        description="LumiPath offers comprehensive special education services - NIOS framework partnership, teacher training, learning assessment, personalized therapy programs, career guidance, and inclusive education consulting."
        canonicalUrl="https://lumipath.in/services"
        keywords="LumiPath services, NIOS framework partnership, teacher training special education, learning assessment India, IEP programs, inclusive education consulting Bangalore"
      />
      <div className="min-h-screen">
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={lumiPathLogo} 
              alt="LumiPath" 
              className="h-24 md:h-32 lg:h-40 mx-auto mb-4 bg-transparent"
              style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
            />
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transforming Special Education
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Complete ecosystem support in schools to implement inclusive education effectively under the NIOS framework
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
              Four pillars of support that make inclusive education successful
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


      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable outcomes that transform school's ecosystem
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
              A structured approach to implementing inclusive education at our partnered school
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "Comprehensive evaluation of current capabilities and assessment needs"
                },
                {
                  step: "02", 
                  title: "Team Training",
                  description: "Group allocation and IEP Designing"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Gradual IEP rollout and monitoring"
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
              Partner with LumiPath to transform your environment into an inclusive education. 
              Let's discuss how our services can be customized for your specific needs.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={openContactDialog}>
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
