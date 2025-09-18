import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  School,
  Users,
  Heart,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    studentsCount: "",
    currentSupport: "",
    specificNeeds: "",
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      inquiryType: "",
      name: "",
      email: "",
      phone: "",
      organization: "",
      position: "",
      studentsCount: "",
      currentSupport: "",
      specificNeeds: "",
      message: "",
      newsletter: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Let's Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Start Your Partnership Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to transform special education at your school? We're here to help you create an inclusive learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Email Us</h3>
                          <p className="text-muted-foreground">info@lumipath.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-secondary/5 to-accent/5">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Call Us</h3>
                          <p className="text-muted-foreground">+91 99860 19010</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-accent/5 to-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Visit Us</h3>
                          <p className="text-muted-foreground">Educational Excellence Hub<br />Bangalore, India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Response Time</h3>
                          <p className="text-muted-foreground">Within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Why Choose LumiPath
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>15+ years specialized expertise</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>IIM-IIT alumni partnership</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>NIOS framework compliance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Proven track record</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 bg-gradient-to-br from-card to-muted/10">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <School className="h-6 w-6 mr-2 text-primary" />
                    Contact Form
                  </CardTitle>
                  <CardDescription className="text-base">
                    Tell us about your school's needs and we'll customize our approach to support your inclusive education goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school-partnership">School Partnership</SelectItem>
                          <SelectItem value="parent-inquiry">Parent Inquiry</SelectItem>
                          <SelectItem value="teacher-training">Teacher Training</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@school.edu"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Your Position</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          placeholder="Principal, Director, Parent, etc."
                        />
                      </div>
                    </div>

                    {/* Organization Information */}
                    <div className="space-y-2">
                      <Label htmlFor="organization">School/Organization Name *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="Name of your school or organization"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentsCount">Number of Students</Label>
                        <Select 
                          value={formData.studentsCount} 
                          onValueChange={(value) => handleInputChange("studentsCount", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select student count range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100">Under 100</SelectItem>
                            <SelectItem value="100-500">100 - 500</SelectItem>
                            <SelectItem value="500-1000">500 - 1,000</SelectItem>
                            <SelectItem value="1000-plus">1,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentSupport">Current Special Education Support</Label>
                        <Select 
                          value={formData.currentSupport} 
                          onValueChange={(value) => handleInputChange("currentSupport", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Current support level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No specialized support</SelectItem>
                            <SelectItem value="basic">Basic support available</SelectItem>
                            <SelectItem value="partial">Some trained teachers</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive program exists</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Specific Needs */}
                    <div className="space-y-2">
                      <Label htmlFor="specificNeeds">Specific Areas of Interest</Label>
                      <Select 
                        value={formData.specificNeeds} 
                        onValueChange={(value) => handleInputChange("specificNeeds", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dyslexia">Dyslexia Support</SelectItem>
                          <SelectItem value="adhd">ADHD Management</SelectItem>
                          <SelectItem value="autism">Autism Spectrum Support</SelectItem>
                          <SelectItem value="general-ld">General Learning Disabilities</SelectItem>
                          <SelectItem value="teacher-training">Teacher Training Focus</SelectItem>
                          <SelectItem value="policy-compliance">Policy & Compliance</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us More About Your Needs</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please share any specific challenges, goals, or questions you have about implementing inclusive education at your school..."
                        rows={4}
                      />
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for special education insights and updates
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our partnership process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly can we start the partnership?",
                answer: "We can begin initial assessment within 2 weeks of signing the partnership agreement. Full implementation typically takes 3-6 months depending on school size."
              },
              {
                question: "What is the investment for schools?",
                answer: "Our partnerships are customized based on school size and needs. We offer flexible payment plans and can discuss government funding opportunities available under various schemes."
              },
              {
                question: "Do you provide ongoing support after initial training?",
                answer: "Yes, our partnership includes continuous support, regular reviews, refresher training sessions, and 24/7 consultation access for the duration of our agreement."
              },
              {
                question: "How do you ensure compliance with government policies?",
                answer: "We stay updated with all relevant policies (NEP 2020, RPwD Act 2016, NIOS guidelines) and provide documentation support to ensure your school meets all regulatory requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
