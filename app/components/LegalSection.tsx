"use client";

import React, { useState } from "react";

export function LegalSection() {
  const [activeTab, setActiveTab] = useState<"privacy" | "conduct" | "wcag">("privacy");

  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "conduct", label: "Code of Conduct" },
    { id: "wcag", label: "WCAG Compliance" },
  ] as const;

  return (
    <section id="legal" className="py-24 bg-stone-200 relative">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-14">
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            Privacy, Safety & Guidelines
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            We prioritize user privacy, data security, and transparent guidelines for all community members.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-stone-100 border border-border/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "privacy" && (
            <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border/80 shadow-card flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-primary">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-extrabold text-foreground">Data Privacy & Security</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">End-to-End Encryption</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Personal disability data and community messages are encrypted using industry standard protocols.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Zero Data Monetization</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We never sell or share user data or medical histories with third-party advertisers.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Full Data Control</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Users maintain complete control over profile visibility, connections, and instant data deletion.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "conduct" && (
            <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border/80 shadow-card flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-amber-500">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-extrabold text-foreground">Community Safety & Moderation</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Zero Tolerance Policy</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strict prohibition of harassment, ableist language, hate speech, or unauthorized commercial spam.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Verified Welfare Posts</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Government schemes, medical advice, and job listings undergo verification before publishing.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">24/7 Moderation Team</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dedicated community safety officers and trained advocate moderators respond to flagged content instantly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "wcag" && (
            <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border/80 shadow-card flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 text-primary">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm.75 12.75a.75.75 0 01-1.5 0v-3.75a.75.75 0 011.5 0v3.75zm0-6a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-extrabold text-foreground">WCAG 2.1 AA Standards</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Screen Reader Integration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full compatibility with NVDA, JAWS, TalkBack, VoiceOver, and braille display readers.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">High Contrast & Scaling</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Color contrast ratios exceeding 4.5:1 with customizable text scaling up to 200% without breakage.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-foreground text-base">Keyboard & Motion Controls</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full keyboard navigation, visible focus indicators, and reduced motion accessibility preferences.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default LegalSection;
