import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

export const CTASection = () => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    scrollToElement("lead-form", 20, true);
  };
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Stop Losing Money to Bad Software.
            <br />
            <span className="text-secondary">Let's Build Something Exceptional.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 mb-8 sm:mb-12">
            {/* South Africa */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-white/30">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🇿🇦</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">SOUTH AFRICA CLIENTS</h3>
              <Link to="tel:+278118727306">
                <Button
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 py-4 sm:py-5 md:py-6"
                >
                  <span className="hidden sm:inline">📞 CALL NOW: 0811 872 7306</span>
                  <span className="sm:hidden">📞 0811 872 7306</span>
                </Button>
              </Link>
              <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">Mon-Fri, 9AM-6PM SAST</p>

              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToForm}
                className="w-full border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold text-sm sm:text-base py-4 sm:py-5"
              >
                BOOK FREE CONSULTATION
              </Button>
              <p className="text-[10px] xs:text-xs text-white/70 mt-2 leading-tight">Get project estimate + technical roadmap (R2,500 value FREE)</p>
            </div>

            {/* Nigeria */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-white/30">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🇳🇬</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">NIGERIA CLIENTS</h3>

              <Link to="tel:+2348118727306" className="">
                <Button
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 py-4 sm:py-5 md:py-6"
                >
                  <span className="hidden sm:inline">📞 CALL NOW: 0811 872 7306</span>
                  <span className="sm:hidden">📞 0811 872 7306</span>
                </Button>
              </Link>
              <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">Mon-Fri, 9AM-6PM WAT</p>

              <Button
                size="lg"
                variant="outline"
                onClick={handleScrollToForm}
                className="w-full border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold text-sm sm:text-base py-4 sm:py-5"
              >
                BOOK FREE CONSULTATION
              </Button>
              <p className="text-[10px] xs:text-xs text-white/70 mt-2 leading-tight">Get project estimate + technical roadmap (₦150K value FREE)</p>
            </div>
          </div>

        {/* Trust Guarantees */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Our Guarantees:</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            {[
              "✅ Free consultation (no obligation)",
              "✅ NDA signed before discussing your idea",
              "✅ Response within 2 hours (business hours)",
              "✅ Meeting in our office, yours, or Zoom",
              "✅ 100% transparent pricing (no hidden fees)",
              "✅ Pay in local currency (ZAR or NGN)",
            ].map((guarantee, index) => (
              <div key={index} className="text-left text-white/90">
                {guarantee}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              🇳🇬 NIGERIA HQ
            </h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/90">
              <p className="flex items-start gap-2">
                <span className="font-semibold">📍</span>
                <span>Lagos, Nigeria</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold">📞</span>
                <Link to="tel:+2348118727306">
                  <span>0811 872 7306</span>
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold">📧</span>
                <Link to="mailto:info@nanocodes.com.ng">
                  <span>info@nanocodes.com.ng</span>
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold">💬</span>
                <span>WhatsApp available</span>
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              🇿🇦 SOUTH AFRICA
            </h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/90">
              <p className="flex items-start gap-2">
                <span className="font-semibold">📧</span>
                <Link to="mailto:info@nanocodes.com.ng">
                  <span>info@nanocodes.com.ng</span>
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold">💬</span>
                <span>WhatsApp available</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold">🌐</span>
                <span>www.nanocodes.com.ng</span>
              </p>
              <p className="text-secondary font-semibold">
                📞 Local ZA number coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Trust Seals */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white/80">
          <span>🔒 256-bit SSL Encrypted</span>
          <span>🇿🇦 CIPC Registered</span>
          <span>🇳🇬 CAC Registered</span>
          <span>⭐ 4.9/5 Stars</span>
          <span>💼 Insured Projects</span>
        </div>
      </div>
    </div>
    </section >
  );
};
