import Image from "next/image";
import React from "react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-28 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Glow blobs */}
      <div
        className="blob-purple absolute top-[-10%] left-[-5%] w-[50%] h-[60%] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="blob-amber absolute bottom-[-5%] right-[-5%] w-[45%] h-[55%] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Left */}
          <div className="lg:col-span-6 flex flex-col gap-7">

            <h1
              id="hero-heading"
              className="text-hero-xl font-extrabold text-foreground tracking-tight"
            >
              Connecting{" "}
              <span className="gradient-text-primary">Abilities.</span>
              <br />
              Empowering{" "}
              <span className="gradient-text-primary">Communities.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
              DigiAbility Community is an accessibility-first mobile platform where
              Persons with Disabilities, caregivers, NGOs, and advocates connect,
              learn, and grow together.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#download"
                className="btn-primary px-8 py-3.5 text-base font-bold inline-flex items-center gap-2.5"
                aria-label="Download DigiAbility Community app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
                Download App
              </a>
              <a
                href="#features"
                className="btn-secondary px-8 py-3.5 text-base font-bold inline-flex items-center gap-2.5"
                aria-label="Explore Features of DigiAbility"
              >
                Explore Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-primary"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border/80">
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">1200+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Community Members
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">20+</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  NGO Partners
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">5</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Accessibility Modes
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup Right */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative animate-float">
              {/* Slim Black iPhone Frame */}
              <div className="mockup-phone w-68 sm:w-76 h-[540px] sm:h-[600px] p-1.5 relative shadow-2xl bg-stone-950 rounded-[2.5rem] border-2 border-stone-800 ring-2 ring-white/10">
                {/* Slim Dynamic Island - Positioned higher on top bezel */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20 border border-stone-800/80 flex items-center justify-end px-1"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#161618] border border-stone-800" />
                </div>

                {/* iPhone Screen Container */}
                <div className="mockup-screen w-full h-full rounded-[2.1rem] overflow-hidden relative bg-black shadow-inner">
                  <Image
                    src="/assets/images/Phone.jpeg"
                    alt="DigiAbility Community Mobile App"
                    fill
                    sizes="(max-width: 768px) 304px, 320px"
                    className="object-cover rounded-[2.1rem]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default HeroSection;
