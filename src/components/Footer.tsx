import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import dotmacLogo from "@/assets/dotmac-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Plans", path: "/plans" },
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Cloud Solutions",
    "Cybersecurity",
    "Network Setup",
    "Government Digital Services",
    "Consulting Services",
    "Internet Services",
  ];

  return (
    <>
      {/* Newsletter Section */}
      <section className="relative bg-background pb-0 -mb-1">
        <div className="container mx-auto px-4 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Join our newsletter</h3>
              <p className="text-muted-foreground mb-6">
                We'll send you nice updates regularly. No spam.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit" size="lg" className="px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Curved top edge for footer */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary" style={{
          clipPath: 'ellipse(70% 100% at 50% 0%)'
        }} />
      </section>
    
      <footer className="bg-primary text-white relative">
        <div className="container mx-auto px-4 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info with Mission/Vision */}
            <div className="space-y-4">
              <img src={dotmacLogo} alt="Dotmac Technologies" className="h-10 w-auto brightness-0 invert" />
              <div>
                <h4 className="font-bold text-white mb-2">Our Vision</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  To be the leading provider of innovative technology solutions that improve the quality of life.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Our Mission</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  To design and deploy innovative and beneficial technology solutions, while creating value for all our stakeholders.
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                {quickLinks.slice(0, 6).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Send us a message</p>
                    <a href="mailto:info@dotmac.ng" className="text-white/80 hover:text-white transition-colors">
                      info@dotmac.ng
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Talk to us</p>
                    <a href="tel:02019125161" className="text-white/80 hover:text-white transition-colors block">
                      02019125161
                    </a>
                    <a
                      href="https://wa.me/2348121179536"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      +234 812 117 9536
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Where we are</p>
                    <p className="text-white/80 text-xs">
                      Abuja: Area 11, Garki<br />
                      Lagos: Allen Avenue, Ikeja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="container mx-auto px-4 pb-8">
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/dotmac.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://twitter.com/dotmac_ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://instagram.com/dotmac_ng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com/company/dotmac-broadband-internet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto px-4 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-sm text-white/80">
              © {currentYear} Dotmac Technologies PLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
