import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

export const ServicesSection = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToElement("lead-form", 20, true);
  };
  const services = [
    {
      id: "mobile",
      icon: "📱",
      title: "Custom Mobile Apps",
      features: [
        "iOS & Android (Native or Cross-platform Flutter)",
        "E-commerce, Fintech, Logistics, Healthcare, Uber-like apps",
        "Backend APIs, Payment gateways (Paystack, Flutterwave, PayFast, Yoco)",
        "Push notifications, GPS tracking, Analytics",
      ],
      pricing: {
        za: "From R25,000 (Simple) to R180,000+ (Complex)",
        ng: "From ₦1.5M (Simple) to ₦10M+ (Complex)",
      },
      timeline: "8-16 weeks",
    },
    {
      id: "web",
      icon: "🌐",
      title: "Web Applications",
      features: [
        "SaaS platforms, Admin dashboards, CRM/ERP systems",
        "E-commerce platforms, Booking/Reservation systems",
        "Database architecture, API development",
        "Real-time features (chat, notifications)",
      ],
      pricing: {
        za: "From R12,000 (Basic) to R90,000+ (Advanced)",
        ng: "From ₦800K (Basic) to ₦6M+ (Advanced)",
      },
      timeline: "6-12 weeks",
    },
    {
      id: "website",
      icon: "💻",
      title: "Corporate Websites",
      features: [
        "Modern, fast-loading, SEO-optimized",
        "Fully mobile-responsive (works on all devices)",
        "CMS integration (WordPress, custom admin)",
        "Contact forms, Google Analytics, Chatbots",
        "Hosting setup included",
      ],
      pricing: {
        za: "From R5,500 (5 pages) to R25,000+ (Custom)",
        ng: "From ₦350K (5 pages) to ₦1.8M+ (Custom)",
      },
      timeline: "3-4 weeks",
    },
    {
      id: "design",
      icon: "🎨",
      title: "UI/UX Design",
      features: [
        "User research & journey mapping",
        "Wireframing & prototyping (Figma)",
        "High-fidelity mockups",
        "Design systems & brand guidelines",
        "Usability testing",
      ],
      pricing: {
        za: "From R3,500 to R18,000+",
        ng: "From ₦200K to ₦1.2M+",
      },
      timeline: "2-4 weeks",
    },
    {
      id: "integration",
      icon: "🔗",
      title: "System Integration",
      features: [
        "Connect existing software systems",
        "Payment gateway integration (Stripe, PayPal, local providers)",
        "Third-party API connections (accounting, shipping, etc.)",
        "Custom API development",
        "Legacy system modernization",
      ],
      pricing: {
        za: "From R5,000 to R45,000+",
        ng: "From ₦300K to ₦3M+",
      },
      timeline: "2-8 weeks",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-primary">
            Complete Digital Solutions
            <br />
            <span className="text-foreground">Under One Roof</span>
          </h2>
        </div>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 bg-muted p-1 sm:p-2 h-auto overflow-x-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="text-xs sm:text-sm md:text-base py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap"
              >
                <span className="mr-1 sm:mr-2 text-base sm:text-lg">{service.icon}</span>
                <span className="hidden sm:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-4 sm:mt-6 md:mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 border border-border">
                <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                  <span className="text-4xl sm:text-5xl md:text-6xl">{service.icon}</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary break-words">{service.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">What's Included:</h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm sm:text-base text-foreground break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-4 sm:p-6 rounded-xl">
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pricing & Timeline</h4>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2">
                          <span className="text-xl sm:text-2xl">🇿🇦</span>
                          <span className="font-bold text-sm sm:text-base">South Africa</span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/90 break-words">{service.pricing.za}</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2">
                          <span className="text-xl sm:text-2xl">🇳🇬</span>
                          <span className="font-bold text-sm sm:text-base">Nigeria</span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/90 break-words">{service.pricing.ng}</p>
                      </div>

                      <div className="bg-secondary/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg border-2 border-secondary">
                        <div className="flex items-center gap-2">
                          <span className="text-xl sm:text-2xl">⏱️</span>
                          <div>
                            <span className="font-bold block text-sm sm:text-base">Timeline</span>
                            <span className="text-xs sm:text-sm text-white/90">{service.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      onClick={handleScrollToForm}
                      className="w-full mt-4 sm:mt-6 bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base py-3 sm:py-4"
                    >
                      Get Free Quote →
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <Button
            size="lg"
            onClick={handleScrollToForm}
            className="bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 shadow-glow-secondary w-full sm:w-auto"
          >
            <span className="hidden sm:inline">→ DISCUSS YOUR PROJECT NOW ←</span>
            <span className="sm:hidden">DISCUSS YOUR PROJECT NOW</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
