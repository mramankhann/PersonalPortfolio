import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Heart,
  ArrowUp,
  Code,
  Coffee
} from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mramankhann", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-aman3128/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full">
      {/* Main Footer */}
      <Card className="w-full mb-4 p-8 bg-gradient-card shadow-card">
        <div className="flex w-full flex-wrap gap-8 justify-between">
          
          {/* Brand Section */}
          <div className="w-full lg:w-[48%] space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mohd Aman</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full Stack Developer passionate about creating innovative web solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>mohdaman2629@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9984473128</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="text-sm  text-muted-foreground">
            © {currentYear} Mohd Aman. All rights reserved.
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </Card>
    </footer>
  );
};
