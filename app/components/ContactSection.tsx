"use client";

import React, { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "General Inquiry",
    "NGO Partnership",
    "Accessibility Support",
    "Feedback & Suggestions",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
          <h2 className="text-section-title font-extrabold text-foreground tracking-tight">
            Have Questions? We&apos;re Here to Help
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Reach out to our accessibility support team, partner with us as an NGO, or share your feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form Left */}
          <div className="lg:col-span-7 bg-card p-8 sm:p-10 rounded-2xl border border-border/80 shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-fuchsia-100 text-primary flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">Message Sent Successfully!</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  Thank you for reaching out, {formData.name}. Our accessibility support team will respond to your email shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", category: "General Inquiry", message: "" });
                  }}
                  className="mt-4 btn-secondary px-6 py-2 text-sm font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-stone-900 placeholder:text-stone-400 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white text-stone-900 placeholder:text-stone-400 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="category" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Inquiry Category
                  </label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 bg-white text-stone-900 border border-stone-300 rounded-xl text-sm font-semibold flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all text-left cursor-pointer"
                    aria-haspopup="listbox"
                    aria-expanded={dropdownOpen}
                  >
                    <span>{formData.category}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 text-stone-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-primary" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-20"
                        onClick={() => setDropdownOpen(false)}
                      />
                      <ul
                        role="listbox"
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200 rounded-xl shadow-xl py-1.5 z-30 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden"
                      >
                        {categories.map((cat) => {
                          const isSelected = formData.category === cat;
                          return (
                            <li key={cat}>
                              <button
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, category: cat });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-sm font-medium flex items-center justify-between transition-colors cursor-pointer text-left ${
                                  isSelected ? "bg-primary text-white font-semibold" : "text-stone-800 hover:bg-primary/10 hover:text-primary"
                                }`}
                              >
                                <span>{cat}</span>
                                {isSelected && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 text-white"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we support you or how would you like to collaborate?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-stone-900 placeholder:text-stone-400 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs resize-none transition-all font-medium"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-center font-bold text-base mt-2 cursor-pointer">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Right */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">Email Support</h4>
                <p className="text-sm text-primary font-semibold mt-1">support@digiability.org</p>
                <p className="text-xs text-muted-foreground mt-0.5">Response within 24 hours</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c.135.252.285.5.45.744a15.71 15.71 0 006.136 6.137c.244.164.492.314.744.45l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">Toll-Free Helpline</h4>
                <p className="text-sm text-amber-600 font-semibold mt-1">1800-ACCESSIBLE (1800-222-377)</p>
                <p className="text-xs text-muted-foreground mt-0.5">Mon–Sat, 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base">National Office</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Tech for Good Hub, National Inclusion Centre, New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
