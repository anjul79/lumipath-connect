import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Settings,
  BookOpen,
  Users,
  Award,
  Target
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

const RazorpayPayment = () => {
  const { toast } = useToast();
  const [isConfigured, setIsConfigured] = useState(false);
  const [razorpayKey, setRazorpayKey] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PaymentOption | null>(null);
  const [showConfig, setShowConfig] = useState(false);

  const paymentPlans: PaymentOption[] = [
    {
      id: "basic_assessment",
      name: "Initial Assessment",
      description: "Comprehensive learning disability screening and basic consultation",
      price: 5000,
      duration: "One-time",
      features: [
        "Complete LD assessment for 1 child",
        "Detailed report with recommendations", 
        "30-minute parent consultation",
        "Resource kit for home support"
      ]
    },
    {
      id: "teacher_training_basic",
      name: "Teacher Training - Basic",
      description: "Foundational special education training for 5 teachers",
      price: 25000,
      duration: "Per batch",
      features: [
        "20 hours of specialized training",
        "Learning disability identification",
        "Classroom adaptation techniques",
        "Training materials included"
      ]
    },
    {
      id: "school_partnership_basic",
      name: "School Partnership - Basic",
      description: "Entry-level partnership for small schools (up to 200 students)",
      price: 75000,
      duration: "Per semester",
      features: [
        "NIOS framework setup",
        "Teacher training for 10 educators",
        "Monthly consultation sessions",
        "Policy compliance support"
      ],
      popular: true
    },
    {
      id: "school_partnership_premium",
      name: "School Partnership - Premium", 
      description: "Comprehensive partnership for larger schools (200+ students)",
      price: 150000,
      duration: "Per semester",
      features: [
        "Complete inclusive education setup",
        "Training for unlimited teachers",
        "Weekly on-site support",
        "Custom curriculum development",
        "Parent workshops included",
        "24/7 consultation access"
      ]
    }
  ];

  useEffect(() => {
    // Check if Razorpay key is stored in localStorage
    const storedKey = localStorage.getItem("razorpay_key");
    if (storedKey) {
      setRazorpayKey(storedKey);
      setIsConfigured(true);
    }

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleConfigSave = () => {
    if (razorpayKey.trim()) {
      localStorage.setItem("razorpay_key", razorpayKey);
      setIsConfigured(true);
      setShowConfig(false);
      toast({
        title: "Configuration Saved",
        description: "Razorpay key has been stored securely in your browser.",
      });
    }
  };

  const handlePayment = (plan: PaymentOption) => {
    if (!isConfigured) {
      toast({
        title: "Configuration Required",
        description: "Please configure Razorpay keys first.",
        variant: "destructive"
      });
      setShowConfig(true);
      return;
    }

    const options = {
      key: razorpayKey,
      amount: plan.price * 100, // Amount in paise
      currency: "INR",
      name: "LumiPath Education Solutions",
      description: plan.name,
      image: "/favicon.ico",
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Payment ID: ${response.razorpay_payment_id}. Our team will contact you within 24 hours.`,
        });
        
        // Here you would typically send the payment details to your backend
        console.log("Payment successful:", response);
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      notes: {
        service: plan.id,
        plan_name: plan.name
      },
      theme: {
        color: "#1e3a8a" // LumiPath primary color
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "You can retry the payment anytime.",
          });
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (showConfig || !isConfigured) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Payment Configuration
          </CardTitle>
          <CardDescription>
            Configure your Razorpay keys to enable payments. Keys are stored securely in your browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="razorpay-key">Razorpay Public Key</Label>
            <Input
              id="razorpay-key"
              type="text"
              placeholder="rzp_test_xxxxxxxxxx"
              value={razorpayKey}
              onChange={(e) => setRazorpayKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              This is your publishable key, safe to store in frontend
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex items-start space-x-2">
              <Shield className="h-5 w-5 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800">Security Note</p>
                <p className="text-amber-700 mt-1">
                  For production use, consider connecting to Supabase for secure secret key management. 
                  This implementation stores keys in browser localStorage only.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleConfigSave} className="flex-1">
              Save Configuration
            </Button>
            {isConfigured && (
              <Button variant="outline" onClick={() => setShowConfig(false)}>
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Service Packages & Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the right support package for your school's inclusive education journey. 
          Secure payments powered by Razorpay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentPlans.map((plan) => (
          <Card key={plan.id} className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
            plan.popular ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'
          }`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                {plan.id.includes('assessment') && <Target className="h-6 w-6 text-primary-foreground" />}
                {plan.id.includes('training') && <BookOpen className="h-6 w-6 text-primary-foreground" />}
                {plan.id.includes('partnership') && <Users className="h-6 w-6 text-primary-foreground" />}
              </div>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription className="text-sm">{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">₹{plan.price.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{plan.duration}</div>
              </div>
              
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handlePayment(plan)} 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Secure Payment Processing</h3>
          <p className="text-muted-foreground">Your payments are processed securely through Razorpay</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-semibold">Bank-Level Security</h4>
              <p className="text-sm text-muted-foreground">256-bit SSL encryption</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-semibold">Multiple Payment Options</h4>
              <p className="text-sm text-muted-foreground">Cards, UPI, Net Banking, Wallets</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-semibold">Instant Confirmation</h4>
              <p className="text-sm text-muted-foreground">Immediate payment processing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={() => setShowConfig(true)} size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Payment Settings
        </Button>
      </div>
    </div>
  );
};

export default RazorpayPayment;