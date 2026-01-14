import { Trophy, FileText, Code, RefreshCw, ShieldCheck, Zap, Globe2, Briefcase } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "67+ successful projects across Nigeria & South Africa | 94% client retention | 0% project abandonment",
    },
    {
      icon: FileText,
      title: "Fixed-Price, Fixed-Timeline Contracts",
      description: "No surprise costs. No endless delays. We guarantee it in writing with legal contracts.",
    },
    {
      icon: Code,
      title: "Senior Developers Only",
      description: "No juniors experimenting on your project. Average team experience: 7+ years | GitHub verified",
    },
    {
      icon: RefreshCw,
      title: "Agile Development Process",
      description: "See progress every week via live demos. Make changes easily. Stay in complete control.",
    },
    {
      icon: ShieldCheck,
      title: "Post-Launch Support Included",
      description: "3-6 months FREE support & bug fixes after delivery (not 'extra charges')",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "React, Node.js, Flutter, Python, AWS, Docker – built to scale as you grow",
    },
    {
      icon: Globe2,
      title: "Multi-Currency, Multi-Region",
      description: "We handle payments in both ZAR & NGN. Teams in Lagos & Cape Town for local support.",
    },
    {
      icon: Briefcase,
      title: "Legal Protection",
      description: "Written contracts, NDA protection, and source code ownership transferred to you 100%",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 leading-tight">
            Enterprise Grade Development
            <br />
            <span className="text-secondary">Without Enterprise Prices</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2">
            Why Top African Businesses Choose Nanocodes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-secondary"
              >
                <div className="mb-3 sm:mb-4 text-secondary">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-secondary">{benefit.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-2">
          <div className="inline-flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">67+</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">42</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Active Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">94%</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Client Retention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl border border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">5</div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">Years Track Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
