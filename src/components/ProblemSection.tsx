import { AlarmClockOff, Bug, Ghost, PiggyBank } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: PiggyBank,
      title: "Wasted Money",
      description: "Paid 'developers' R15K/₦800K who delivered broken software you can't even use",
    },
    {
      icon: AlarmClockOff,
      title: "Missed Deadlines",
      description: "Project promised in 2 months... still not done after 8 months. Business plans destroyed.",
    },
    {
      icon: Bug,
      title: "Constant Bugs",
      description: "Your app crashes daily. Customers are leaving. Reputation tanking on Google reviews.",
    },
    {
      icon: Ghost,
      title: "Vanishing Developers",
      description: "They took your deposit, now don't respond to calls, WhatsApp, or emails",
    },
  ];

  const testimonials = [
    {
      flag: "🇿🇦",
      country: "SOUTH AFRICA",
      quote: "We lost R32,000 and 6 months to a 'cheap' developer. Nanocodes rebuilt everything in 45 days.",
      author: "Sarah Naidoo, CEO",
      company: "CapeTown Logistics",
    },
    {
      flag: "🇳🇬",
      country: "NIGERIA",
      quote: "After being scammed twice, we were skeptical. Nanocodes restored our faith in Nigerian tech.",
      author: "Chidi Okonkwo, Founder",
      company: "ThriveHealth Lagos",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3 sm:mb-4 text-primary leading-tight">
          The Software Development Nightmare
          <br />
          <span className="text-foreground">African Businesses Face</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-primary flex">
                  <IconComponent className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">{problem.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-secondary"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">{testimonial.flag}</span>
                <span className="font-bold text-primary text-base sm:text-lg">{testimonial.country}</span>
              </div>
              <p className="text-base sm:text-lg italic text-foreground mb-3 sm:mb-4 leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t pt-3 sm:pt-4">
                <p className="font-semibold text-primary text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
