import React from "react";

export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
          <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        </svg>
      ),
      title: "Accessibility-First UI",
      description:
        "Screen reader optimized, voice commands, high contrast themes, customizable font sizes, and haptic feedback built in.",
      cols: "lg:col-span-4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500" aria-hidden="true">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a11.54 11.54 0 0 1-.37 1.854.75.75 0 0 0 .524.912c.49.128.995.228 1.517.297.47.062.946.095 1.43.095 1.895 0 3.673-.48 5.22-1.328a.75.75 0 0 0 .38-.636v-.025a5.625 5.625 0 0 0-8.7-4.606 7.12 7.12 0 0 1 1.7 3.29Z" />
        </svg>
      ),
      title: "Peer Community & Support",
      description:
        "Connect with fellow PwDs, caregivers, and experts in safe, moderated discussion spaces tailored to specific interests.",
      cols: "lg:col-span-4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Resource Hub & Activities",
      description:
        "Discover verified Resources in your nearby surroundings, Various kind of activities and educational resources in one place.",
      cols: "lg:col-span-4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500" aria-hidden="true">
          <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-15ZM9 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Zm-1.5 5.25A.75.75 0 0 1 8.25 10.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Zm.75 3.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" clipRule="evenodd" />
        </svg>
      ),
      title: "NGO & Expert Connect",
      description:
        "Direct access to certified rehabilitation specialists, NGO initiatives, assistive tech guides, and 24/7 helpline services.",
      cols: "lg:col-span-4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary" aria-hidden="true">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.93L8.279 5.084A.75.75 0 0 1 9 4.5Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Real-Time Assistive Tools",
      description:
        "Integrated voice notes, text-to-speech, simplified reading modes, and automatic image alt-text generation.",
      cols: "lg:col-span-4",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500" aria-hidden="true">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
      ),
      title: "Verified & Safe Space",
      description:
        "Strict moderation, robust privacy controls, zero-spam environment, and full data protection compliance for complete peace of mind.",
      cols: "lg:col-span-4",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            Designed for Every Ability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Built from the ground up with accessibility, inclusivity, and community safety at the core.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`${item.cols} bento-card bg-card border border-border/80 rounded-2xl p-8 flex flex-col justify-between shadow-card relative group overflow-hidden`}
            >
              <div className="flex flex-col gap-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="feature-icon-wrap bg-secondary border border-primary/15">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-card-title font-extrabold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
