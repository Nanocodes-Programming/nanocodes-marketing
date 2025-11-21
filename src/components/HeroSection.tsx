import { LeadForm } from "./LeadForm";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left: Headline & Subheadline */}
          <div className="text-white space-y-4 sm:space-y-6 order-1 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Is Your Business Losing{" "}
              <span className="text-secondary block sm:inline">R30K/₦2M+</span>{" "}
              <span className="block sm:inline">Monthly Because of</span>{" "}
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent block sm:inline">
                Bad Software?
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Stop wasting money on buggy apps, slow websites, and "developers" who disappear. 
              Nanocodes delivers <span className="font-bold text-secondary">enterprise-grade custom software</span> that 
              actually works – on time, on budget, with zero headaches.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm"></div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-semibold text-sm sm:text-base">Trusted by 42+ businesses</p>
                <p className="text-xs sm:text-sm text-white/80">across Nigeria & South Africa</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">67+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">94% Client Retention</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">0% Project Abandonment</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="lg:mt-0 order-2 lg:order-2 w-full">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
