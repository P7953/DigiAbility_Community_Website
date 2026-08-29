"use client";

import React, { useState, useEffect, useRef } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const categories = [
    "General Inquiry",
    "NGO Partnership",
    "Accessibility Support",
    "Feedback & Suggestions",
    "Volunteer & Careers",
  ];

  // Close dropdown on outside click or escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && dropdownOpen) {
        setDropdownOpen(false);
        document.getElementById("category-btn")?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen]);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!dropdownOpen) {
        setDropdownOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev + 1) % categories.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (dropdownOpen) {
        setFocusedIndex((prev) => (prev - 1 + categories.length) % categories.length);
      }
    } else if (e.key === "Enter" || e.key === " ") {
      if (dropdownOpen && focusedIndex >= 0) {
        e.preventDefault();
        setFormData({ ...formData, category: categories[focusedIndex] });
        setDropdownOpen(false);
        document.getElementById("category-btn")?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 blob-purple pointer-events-none opacity-40" aria-hidden="true" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 blob-amber pointer-events-none opacity-30" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-snug sm:leading-tight max-w-3xl">
            Have a question, suggestion, accessibility concern or partnership idea?{" "}
            <span className="gradient-text-primary">
              Get in touch with the DigiAbility team.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl">
            Reach out to our accessibility support team, partner with us as an NGO, or share your feedback.
          </p>
        </div>

        {/* Main Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Contact Form Card (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-card p-7 sm:p-9 rounded-3xl border border-stone-300 shadow-card flex flex-col justify-between relative">
            <div aria-live="polite" aria-atomic="true" className="w-full h-full flex flex-col justify-between">
              {submitted ? (
                <div role="status" className="flex flex-col items-center justify-center text-center py-14 px-4 my-auto gap-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-fuchsia-100 text-primary flex items-center justify-center shadow-inner">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75 9.75-4.365 9.75-9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-extrabold text-foreground">Message Sent Successfully!</h3>
                    <p className="text-stone-700 text-sm max-w-md leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold text-foreground">{formData.name}</span>. Our team will review your message and respond to <span className="font-bold text-primary">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "General Inquiry", message: "" });
                    }}
                    className="mt-4 btn-secondary px-6 py-2.5 text-sm font-bold cursor-pointer focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-6">
                  <div className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-stone-800">
                          Full Name <span className="text-primary" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          aria-required="true"
                          autoComplete="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-stone-50/70 hover:bg-white focus:bg-white text-stone-900 placeholder:text-stone-500 border border-stone-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all font-medium"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-stone-800">
                          Email Address <span className="text-primary" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-stone-50/70 hover:bg-white focus:bg-white text-stone-900 placeholder:text-stone-500 border border-stone-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Inquiry Category Custom Accessible Dropdown */}
                    <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
                      <span id="category-label" className="text-xs font-bold uppercase tracking-wider text-stone-800">
                        Inquiry Category
                      </span>
                      <button
                        id="category-btn"
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        onKeyDown={handleDropdownKeyDown}
                        className="w-full px-4 py-3 bg-stone-50/70 hover:bg-white focus:bg-white text-stone-900 border border-stone-400 rounded-xl text-sm font-semibold flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs transition-all text-left cursor-pointer"
                        aria-haspopup="listbox"
                        aria-expanded={dropdownOpen}
                        aria-labelledby="category-label category-btn"
                      >
                        <span className="truncate">{formData.category}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={`w-5 h-5 text-stone-600 transition-transform duration-200 shrink-0 ${
                            dropdownOpen ? "rotate-180 text-primary" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {dropdownOpen && (
                        <ul
                          role="listbox"
                          aria-labelledby="category-label"
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-300 rounded-2xl shadow-xl py-1.5 z-30 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150 overflow-hidden"
                        >
                          {categories.map((cat, index) => {
                            const isSelected = formData.category === cat;
                            const isFocused = focusedIndex === index;
                            return (
                              <li
                                key={cat}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => {
                                  setFormData({ ...formData, category: cat });
                                  setDropdownOpen(false);
                                  document.getElementById("category-btn")?.focus();
                                }}
                                className={`w-full px-4 py-2.5 text-sm font-medium flex items-center justify-between transition-colors cursor-pointer text-left ${
                                  isSelected
                                    ? "bg-primary text-white font-semibold"
                                    : isFocused
                                    ? "bg-primary/15 text-stone-900"
                                    : "text-stone-800 hover:bg-primary/10 hover:text-primary"
                                }`}
                              >
                                <span>{cat}</span>
                                {isSelected && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4 text-white"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-stone-800">
                        Message <span className="text-primary" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        aria-required="true"
                        rows={4}
                        placeholder="How can we support you, or how would you like to collaborate?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50/70 hover:bg-white focus:bg-white text-stone-900 placeholder:text-stone-500 border border-stone-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-xs resize-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Submit & Trust Note */}
                  <div className="space-y-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3.5 px-6 font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-primary transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                            aria-hidden="true"
                          >
                            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                          </svg>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-stone-700">
                      <svg className="w-3.5 h-3.5 text-emerald-700 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>We respect your privacy. Your information is safe and never shared.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Column (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Email Support Card */}
            <a
              href="mailto:navsaptrishiinnovations@gmail.com"
              aria-label="Email support: navsaptrishiinnovations@gmail.com"
              className="bg-card p-5 sm:p-6 rounded-3xl border border-stone-300 shadow-card flex items-start gap-4 hover:border-primary/40 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0 shadow-xs" aria-hidden="true">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                    Email Support
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                    Active
                  </span>
                </div>
                <p className="text-sm font-bold text-primary break-all mt-0.5">
                  navsaptrishiinnovations@gmail.com
                </p>
                <p className="text-xs text-stone-700 mt-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response within 24 hours
                </p>
              </div>
            </a>

            {/* Direct Helpline Card */}
            <a
              href="tel:+919762184554"
              aria-label="Call helpline at +91 9762184554, Monday to Saturday 9:00 AM to 6:00 PM IST"
              className="bg-card p-5 sm:p-6 rounded-3xl border border-stone-300 shadow-card flex items-start gap-4 hover:border-amber-500/40 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-primary transition-all duration-300 group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0 shadow-xs" aria-hidden="true">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c.135.252.285.5.45.744a15.71 15.71 0 006.136 6.137c.244.164.492.314.744.45l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-foreground text-base group-hover:text-amber-700 transition-colors">
                    Helpline & Phone
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300">
                    Mon–Sat
                  </span>
                </div>
                <p className="text-sm font-bold text-amber-800 mt-0.5">
                  +91 9762184554
                </p>
                <p className="text-xs text-stone-700 mt-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </a>

            {/* Office Address Card */}
            <address className="bg-card not-italic p-5 sm:p-6 rounded-3xl border border-stone-300 shadow-card flex items-start gap-4 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-50 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0 shadow-xs" aria-hidden="true">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                    Office Address
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-300">
                    Headquarters
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
                  Office no. 105, Aspiro Building, In front of Thyssenkrupp Industries, Station Road, Dr. Babasaheb Ambedkar Square, Pimpri, Pune, Maharashtra 411017
                </p>
              </div>
            </address>

            {/* Quick Accessibility & Trust Banner */}
            <div className="bg-gradient-to-r from-secondary/80 to-amber-50/60 p-4 sm:p-5 rounded-2xl border border-primary/20 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-primary/20 flex items-center justify-center text-primary shrink-0" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs text-stone-800 font-medium leading-normal">
                <strong className="font-bold text-stone-950">Dedicated Accessibility Support:</strong> Need assistance with screen reader compatibility or app onboarding? We prioritize accessibility requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

