import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cloud, Shield, Network, Building2, Headphones, Code, 
  Wifi, Server, Camera, Mail, Globe, Cpu 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud & Data Center Solutions",
      description: "Comprehensive cloud infrastructure, hosting, and data center services for businesses of all sizes.",
      features: ["IaaS, SaaS, PaaS", "Virtual Private Servers", "Cloud Backup & Storage", "Disaster Recovery"]
    },
    {
      icon: Building2,
      title: "Government Digital Services",
      description: "Specialized digital infrastructure solutions for government agencies and MDAs.",
      features: ["GovConnect", "GovNet Direct", "Govmail", "GovDNS (.gov.ng)"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Enterprise-grade security solutions to protect your digital assets and infrastructure.",
      features: ["Security Consulting (ISMS)", "Protection Services", "Security Advisory", "Compliance Management"]
    },
    {
      icon: Network,
      title: "IT & Network Solutions",
      description: "End-to-end IT solutions from network design to custom system development.",
      features: ["Network Setup & Optimization", "Hardware Procurement", "Custom ERP Systems", "CCTV & Surveillance"]
    },
    {
      icon: Headphones,
      title: "Contact & Collaboration",
      description: "Hosted communication solutions for seamless business operations.",
      features: ["Contact Center Services", "Teleconferencing", "Video Conferencing", "Unified Communications"]
    },
    {
      icon: Code,
      title: "Consulting & Training",
      description: "Expert IT consulting and comprehensive capacity building programs.",
      features: ["IT Consulting", "Project Management", "Training & Certification", "Technical Augmentation"]
    },
    {
      icon: Wifi,
      title: "Internet Services",
      description: "High-speed, reliable internet connectivity for homes and businesses in Abuja and Lagos.",
      features: ["Fiber to the Home (FTTH)", "Dedicated Internet", "Unlimited Plans", "Managed WiFi"]
    },
    {
      icon: Server,
      title: "Email & Domain Services",
      description: "Professional email hosting, domain registration, and web hosting solutions.",
      features: ["Email as a Service", "Domain Sales", "Shared Linux Hosting", "Virtual Machines"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 gradient-hero z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Digital
              <span className="text-gradient"> Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive ICT solutions for homes, businesses, and government agencies across Nigeria. 
              From cloud services to cybersecurity, we power your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="text-lg px-8 py-6 hover-glow">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end ICT solutions tailored to meet the unique needs of your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Dotmac?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by businesses and government agencies across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "Cutting-Edge Technology", 
                description: "Latest infrastructure and innovative solutions"
              },
              { 
                icon: Shield, 
                title: "Enterprise Security", 
                description: "Bank-grade security and compliance standards"
              },
              { 
                icon: Headphones, 
                title: "24/7 Support", 
                description: "Round-the-clock technical assistance"
              },
              { 
                icon: Building2, 
                title: "Proven Track Record", 
                description: "Serving SMEs, enterprises, and government"
              }
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to discuss your ICT infrastructure needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
              <a 
                href="https://wa.me/2348121179536" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
