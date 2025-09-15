import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Heart,
  Target,
  BookOpen,
  Globe,
  CheckCircle,
  Star
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "Every child deserves understanding and support in their unique learning journey"
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our approaches are grounded in research and proven methodologies"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work hand-in-hand with schools, teachers, and families"
    },
    {
      icon: Globe,
      title: "Inclusive",
      description: "Creating barrier-free education environments for all children"
    }
  ];

  const teamHighlights = [
    {
      title: "Experienced Educationist",
      description: "15+ years of hands-on experience with children having special needs",
      icon: Award
    },
    {
      title: "IIM Alumni Partnership",
      description: "Strategic guidance from India's premier management institute graduates",
      icon: Star
    },
    {
      title: "IIT Technical Expertise",
      description: "Technology-driven solutions from top engineering institute alumni",
      icon: BookOpen
    }
  ];

  const milestones = [
    { year: "2008", event: "Founder begins special education journey" },
    { year: "2015", event: "Research collaboration with IIM-IIT alumni begins" },
    { year: "2020", event: "NEP 2020 alignment and framework development" },
    { year: "2023", event: "LumiPath Education Solutions officially launched" },
    { year: "2024", event: "First school partnerships under NIOS framework" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Born from Belief
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              LumiPath Education Solutions was born out of this belief—that every child deserves a chance to shine in their own way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To partner with schools as their learning-disability-focused partner under the NIOS framework, 
                  empowering every child to learn at their own pace and potential.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Bridge the gap in special education support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Empower teachers with specialized training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Create sustainable inclusive education ecosystems</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A world where learning disabilities are not barriers but different pathways to success, 
                supported by equipped educators and inclusive school environments.
              </p>
              <div className="bg-card p-6 rounded-xl border">
                <p className="text-foreground font-medium italic">
                  "When schools have the right support, every child can reach their full potential—regardless of how they learn."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded by an experienced educationist with prestigious alumni partners from India's top institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamHighlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-b from-card to-muted/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Building expertise over years of dedicated service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <Badge variant="outline" className="font-bold text-primary">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Challenge We Address
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Understanding the scale of learning disability support needed in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">8-10%</div>
                <div className="text-primary-foreground/90">Children have learning disabilities</div>
                <div className="text-sm text-primary-foreground/70 mt-1">Indian Pediatrics, 2018</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1%</div>
                <div className="text-primary-foreground/90">Teachers trained in special education</div>
                <div className="text-sm text-primary-foreground/70 mt-1">NCERT Reports</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">42%</div>
                <div className="text-primary-foreground/90">Teachers report high stress</div>
                <div className="text-sm text-primary-foreground/70 mt-1">Education Surveys</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">26:1</div>
                <div className="text-primary-foreground/90">Student-teacher ratio</div>
                <div className="text-sm text-primary-foreground/70 mt-1">UDISE Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;