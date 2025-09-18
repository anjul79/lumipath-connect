import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, Lock, CheckCircle2, GraduationCap, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import lumiPathLogo from "@/assets/lumipath-logo-transparent.png";

// Global Razorpay type
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  basePrice: number;
  options: {
    duration: string;
    price: number;
    popular?: boolean;
  }[];
}

const Payment = () => {
  const [razorpayKey, setRazorpayKey] = useState<string>("");
  const [showConfig, setShowConfig] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [studentName, setStudentName] = useState<string>("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const { toast } = useToast();

  const paymentOptions: PaymentOption[] = [
    {
      id: "tuition",
      name: "Tuition Fees",
      description: "Regular academic tuition and learning support",
      icon: GraduationCap,
      basePrice: 5000,
      options: [
        { duration: "Monthly", price: 5000 },
        { duration: "Quarterly", price: 14000, popular: true },
        { duration: "Half-Yearly", price: 27000 },
        { duration: "Yearly", price: 50000 }
      ]
    },
    {
      id: "consultation",
      name: "Educational Consultation", 
      description: "Professional guidance and personalized academic planning",
      icon: MessageSquare,
      basePrice: 2000,
      options: [
        { duration: "Single Session", price: 2000 },
        { duration: "3 Sessions", price: 5500 },
        { duration: "5 Sessions", price: 8500, popular: true },
        { duration: "10 Sessions", price: 15000 }
      ]
    }
  ];

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    document.body.appendChild(script);

    // Check for saved Razorpay key
    const savedKey = localStorage.getItem("razorpay_public_key");
    if (savedKey) {
      setRazorpayKey(savedKey);
    } else {
      setShowConfig(true);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleConfigSave = () => {
    if (!razorpayKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Razorpay public key",
        variant: "destructive",
      });
      return;
    }
    localStorage.setItem("razorpay_public_key", razorpayKey);
    setShowConfig(false);
    toast({
      title: "Configuration Saved",
      description: "Razorpay key has been saved successfully",
    });
  };

  const getSelectedOption = () => {
    const service = paymentOptions.find(opt => opt.id === selectedService);
    if (!service) return null;
    
    const option = service.options.find(opt => opt.duration === selectedDuration);
    return option ? { ...service, selectedOption: option } : null;
  };

  const handlePayment = () => {
    if (!studentName.trim()) {
      toast({
        title: "Required Field",
        description: "Please enter student name",
        variant: "destructive",
      });
      return;
    }

    const selectedOption = getSelectedOption();
    if (!selectedOption || !isRazorpayLoaded) {
      toast({
        title: "Error",
        description: "Please select a service and duration",
        variant: "destructive",
      });
      return;
    }

    const options = {
      key: razorpayKey,
      amount: selectedOption.selectedOption.price * 100,
      currency: "INR",
      name: "LumiPath Education Solutions",
      description: `${selectedOption.name} - ${selectedOption.selectedOption.duration}`,
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
        // Reset form
        setStudentName("");
        setSelectedService("");
        setSelectedDuration("");
      },
      prefill: {
        name: studentName,
      },
      theme: {
        color: "hsl(221, 71%, 12%)",
      },
      modal: {
        ondismiss: function () {
          toast({
            title: "Payment Cancelled",
            description: "Payment process was cancelled",
            variant: "destructive",
          });
        },
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  if (showConfig || !razorpayKey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="shadow-lg border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">Payment Configuration</CardTitle>
              <CardDescription>
                Configure your Razorpay settings to enable payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="razorpay-key">Razorpay Public Key</Label>
                <Input
                  id="razorpay-key"
                  type="text"
                  value={razorpayKey}
                  onChange={(e) => setRazorpayKey(e.target.value)}
                  placeholder="Enter your Razorpay public key"
                  className="font-mono text-sm"
                />
              </div>
              <Button onClick={handleConfigSave} className="w-full">
                Save Configuration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const selectedOption = getSelectedOption();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={lumiPathLogo} 
            alt="LumiPath" 
            className="h-24 md:h-32 lg:h-40 mx-auto mb-4 bg-transparent"
            style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Fees
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure payment gateway for tuition fees and educational consultation services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Service Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            {paymentOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card 
                  key={option.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedService === option.id 
                      ? 'ring-2 ring-primary shadow-lg border-primary/50' 
                      : 'hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedService(option.id)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{option.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {option.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {option.options.map((opt) => (
                        <div
                          key={opt.duration}
                          className={`p-3 rounded-lg border text-center cursor-pointer transition-colors ${
                            selectedService === option.id && selectedDuration === opt.duration
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'hover:bg-muted/50'
                          } ${opt.popular ? 'border-accent' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(option.id);
                            setSelectedDuration(opt.duration);
                          }}
                        >
                          <div className="font-semibold text-sm">{opt.duration}</div>
                          <div className="text-lg font-bold">₹{opt.price.toLocaleString()}</div>
                          {opt.popular && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Payment Form */}
          {selectedService && selectedDuration && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Complete Payment</span>
                </CardTitle>
                <CardDescription>
                  Complete your payment for {selectedOption?.name} - {selectedOption?.selectedOption.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="student-name">Student Name</Label>
                  <Input
                    id="student-name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter student's full name"
                  />
                </div>

                {selectedOption && (
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Service:</span>
                      <span>{selectedOption.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{selectedOption.selectedOption.duration}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-primary">₹{selectedOption.selectedOption.price.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handlePayment} 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  disabled={!isRazorpayLoaded || !studentName.trim()}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Pay Securely ₹{selectedOption?.selectedOption.price.toLocaleString()}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Security Information */}
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Shield className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Secure Payments</h3>
                  <p className="text-sm text-muted-foreground">
                    256-bit SSL encryption ensures your payment data is safe
                  </p>
                </div>
                <div className="space-y-2">
                  <Lock className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Privacy Protected</h3>
                  <p className="text-sm text-muted-foreground">
                    Your personal information is never stored or shared
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Instant Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive immediate confirmation and receipt via email
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowConfig(true)}
              className="text-muted-foreground"
            >
              Payment Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;