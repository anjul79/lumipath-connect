import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, BookOpen, Heart } from "lucide-react";
import lumipathLogo from "@/assets/lumipath-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={lumipathLogo} 
              alt="LumiPath Education Solutions" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Empowering every child to learn at their own pace and potential through inclusive education solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">Supporting 15+ years of expertise</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Learning Disabilities Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">NIOS Framework Partnership</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Teacher Training</span>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Inclusive Education</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">info@lumipath.education</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Educational Excellence Hub<br />
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 LumiPath Education Solutions. All rights reserved. Empowering inclusive education across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;