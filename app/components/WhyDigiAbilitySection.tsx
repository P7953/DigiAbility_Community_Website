import Image from "next/image";
import React from "react";

export function WhyDigiAbilitySection() {
  const pillars = [
    {
      title: "Digital Inclusion",
      desc: "Breaking down digital barriers by creating fully accessible interfaces compliant with WCAG 2.1 AA guidelines.",
      image: "/assets/images/community_1.png",
    },
    {
      title: "Peer Support Network",
      desc: "Connecting Persons with Disabilities and caregivers across cities to share experiences, guidance, and support.",
      image: "/assets/images/community_2.png",
    },
    {
      title: "Safe & Inclusive Space",
      desc: "Zero tolerance for harassment, full data confidentiality, and active community moderation by trained advocates.",
      image: "/assets/images/community_4.png",
    },
  ];

  const testimonials = [
    {
      quote:
        "DigiAbility transformed how I access disability schemes. Finding verified government benefits used to take months of bureaucracy—now it takes minutes.",
      author: "Rajesh K.",
      role: "Wheelchair User & Disability Advocate",
      avatar: "R",
    },
    {
      quote:
        "As a caregiver for my autistic son, finding an empathetic community and expert advice in one accessible app has been truly life-changing.",
      author: "Meera S.",
      role: "Caregiver & Community Leader",
      avatar: "M",
    },
  ];

  return (
    <section id="why" className="py-24 bg-stone-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            Platform For Empowering People Worldwide
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Over 12% of the world population lives with some form of disability. DigiAbility bridges the digital gap with purpose-built tools and community.
          </p>
        </div>

        {/* 4 Pillars with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl overflow-hidden border border-border/80 shadow-card flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-2.5 flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card p-8 rounded-2xl border border-border/80 shadow-card flex flex-col justify-between gap-6"
            >
              <p className="text-base text-foreground leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-extrabold flex items-center justify-center text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{t.author}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyDigiAbilitySection;
