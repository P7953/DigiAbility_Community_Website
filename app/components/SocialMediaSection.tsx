import React from "react";

export function SocialMediaSection() {
  const socialChannels = [
    {
      name: "Instagram",
      handle: "@digiability",
      description: "Daily accessibility tips, stories & community highlights",
      url: "https://www.instagram.com/",
      accent: "hover:border-pink-400/60 hover:shadow-pink-500/10",
      iconBg: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "DigiAbility Community",
      description: "Join regional support groups, NGO meetups & events",
      url: "https://www.facebook.com/",
      accent: "hover:border-blue-400/60 hover:shadow-blue-500/10",
      iconBg: "bg-[#1877F2] text-white",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      handle: "DigiAbility Official",
      description: "Accessible tech tutorials, webinars & inspiring podcasts",
      url: "https://www.youtube.com/",
      accent: "hover:border-red-400/60 hover:shadow-red-500/10",
      iconBg: "bg-[#FF0000] text-white",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "DigiAbility",
      description: "NGO partnerships, corporate CSR & career opportunities",
      url: "https://www.linkedin.com/",
      accent: "hover:border-sky-400/60 hover:shadow-sky-500/10",
      iconBg: "bg-[#0A66C2] text-white",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="social" className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-background relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blob-purple pointer-events-none opacity-20" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Stay Connected
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Follow DigiAbility On Social Media
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Follow us for community updates, stories, awareness content, events and announcements.
          </p>
        </div>

        {/* 4 Centered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialChannels.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name} - ${item.handle} (opens in a new tab)`}
              className={`bg-card p-7 rounded-3xl border border-stone-300 shadow-card flex flex-col items-center text-center justify-between gap-5 group hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 ${item.accent}`}
            >
              {/* Centered Logo & Content */}
              <div className="flex flex-col items-center text-center w-full">
                {/* Centered Brand Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 mb-4 ${item.iconBg}`}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* Platform Name & Handle */}
                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-bold text-primary mt-0.5">{item.handle}</p>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Centered CTA Pill */}
              <div className="w-full pt-4 border-t border-border/60 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-100 group-hover:bg-primary group-hover:text-white text-xs font-bold text-stone-800 transition-all duration-300 shadow-2xs">
                  <span>Visit {item.name}</span>
                  <span className="text-xs transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;
