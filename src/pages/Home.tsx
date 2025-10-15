import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cloud, Shield, Network, Building2, Headphones, Code, 
  Wifi, Server, Camera, Mail, Globe, Cpu 
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import LogoCarousel from "@/components/LogoCarousel";
import DottedMap from "@/components/DottedMap";
import ScrollReveal from "@/components/ScrollReveal";
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
      <section className="relative pt-32 pb-0 overflow-hidden bg-primary">
        {/* Dotted Map Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <DottedMap />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="animate-fade-in text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Nigeria Through
                <span className="block mt-2">Innovative Technology Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Comprehensive ICT and digital infrastructure provider, delivering cutting-edge solutions for homes, businesses, and government agencies across Nigeria.
              </p>
              <Link to="/services">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Right Floating Cards */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-0 right-0 glass rounded-2xl p-6 w-48 animate-float">
                <Cloud className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Cloud Solutions</h3>
              </div>
              <div className="absolute top-1/4 left-0 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Cybersecurity</h3>
              </div>
              <div className="absolute bottom-1/4 right-12 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '2s' }}>
                <Building2 className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">Gov Services</h3>
              </div>
              <div className="absolute bottom-0 left-1/4 glass rounded-2xl p-6 w-48 animate-float" style={{ animationDelay: '3s' }}>
                <Network className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-foreground">IT Solutions</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section with Curved Transition */}
        <div className="relative mt-16">
          {/* Curved top edge */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
            clipPath: 'ellipse(70% 100% at 50% 100%)',
            transform: 'translateY(-100%)'
          }} />
          
          <div className="bg-background pt-16 pb-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years of Innovation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Service Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="mask">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end ICT solutions tailored to meet the unique needs of your organization
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
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
          <ScrollReveal direction="mask">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Dotmac?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted by businesses and government agencies across Nigeria
              </p>
            </div>
          </ScrollReveal>

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
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} direction="up" delay={index * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="mask">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
