import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";
import { Palette, Globe, BarChart3, Search, Percent, ShieldCheck } from "lucide-react";

export const SpecialOfferSection = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToElement("lead-form", 20, true);
  };
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Urgency banner */}
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 text-center animate-pulse">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              NOVEMBER SPECIAL: Launch Before 2026 & Save Big
            </p>
            <p className="text-xs sm:text-sm md:text-base mt-2 leading-tight">
              Only <span className="font-black text-xl sm:text-2xl">4</span> project slots available | Offer expires Nov 30, 2025 @ 11:59 PM
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center mb-6 sm:mb-8 leading-tight">
              Book Your Project This Month & Receive:
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[
                { icon: Palette, title: "FREE UI/UX Design Consultation", value: "🇿🇦 Worth R2,500 | 🇳🇬 Worth ₦150,000" },
                { icon: Globe, title: "FREE 1-year domain + SSL certificate", value: "🇿🇦 Worth R750 | 🇳🇬 Worth ₦45,000" },
                { icon: BarChart3, title: "FREE Project management tools", value: "🇿🇦 Worth R1,400/year | 🇳🇬 Worth ₦80,000/year" },
                { icon: Search, title: "FREE SEO audit & optimization", value: "🇿🇦 Worth R2,000 | 🇳🇬 Worth ₦120,000" },
                { icon: Percent, title: "15% Discount on total project cost", value: "Applies to any project size" },
                { icon: ShieldCheck, title: "Extended Support: 6 months", value: "Instead of 3 months FREE" },
              ].map((bonus, index) => {
                const IconComponent = bonus.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="text-white flex-shrink-0">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 break-words">{bonus.title}</h3>
                        <p className="text-white/90 text-xs sm:text-sm leading-tight break-words">{bonus.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">Example Savings:</h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white text-primary p-4 sm:p-6 rounded-xl">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🇿🇦 SOUTH AFRICA</div>
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
                    <p className="font-semibold">R50,000 Project</p>
                    <p className="text-secondary font-bold">→ Pay only R42,500</p>
                    <p className="text-xs sm:text-sm">Plus R6,650 in FREE bonuses</p>
                    <div className="border-t-2 border-secondary pt-2 mt-2">
                      <p className="font-black text-lg sm:text-xl md:text-2xl">Total savings: R14,150</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-primary p-4 sm:p-6 rounded-xl">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🇳🇬 NIGERIA</div>
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
                    <p className="font-semibold">₦3M Project</p>
                    <p className="text-secondary font-bold">→ Pay only ₦2.55M</p>
                    <p className="text-xs sm:text-sm">Plus ₦395K in FREE bonuses</p>
                    <div className="border-t-2 border-secondary pt-2 mt-2">
                      <p className="font-black text-lg sm:text-xl md:text-2xl">Total savings: ₦845K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-2">
              <Button
                size="lg"
                onClick={handleScrollToForm}
                className="bg-white text-primary hover:bg-white/90 font-black text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 shadow-2xl hover:scale-105 transition-transform duration-300 animate-pulse w-full sm:w-auto"
              >
                <span className="hidden md:inline">CLAIM YOUR NOVEMBER SLOT NOW →</span>
                <span className="md:hidden">CLAIM NOVEMBER SLOT</span>
              </Button>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/90 px-2">
                Priority Development: Start within 7 days (vs. 3-4 weeks wait)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
