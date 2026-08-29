"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AppLogo } from "./ui/AppLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Why DigiAbility", href: "#why" },
    { label: "Download", href: "#download" },
    { label: "Legal", href: "#legal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 transition-all duration-500 pointer-events-none"
      role="banner"
    >
      <div
        className={`max-w-6xl mx-auto glass-lucid-header rounded-full py-2.5 px-5 sm:px-7 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          isScrolled ? "scale-[0.98] shadow-2xl border-white/80" : "shadow-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group rounded-lg focus-visible:ring-2 focus-visible:ring-primary" aria-label="DigiAbility Home">
          <AppLogo size={34} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-underline text-sm font-semibold text-foreground/80 hover:text-primary transition-colors pb-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#download"
            className="btn-primary px-6 py-2.5 text-sm font-bold inline-flex items-center gap-2 shadow-md hover:shadow-xl transition-all"
            aria-label="Download DigiAbility app"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-primary-foreground"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Download App
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-foreground hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-primary transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-lucid-header rounded-3xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 pointer-events-auto shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-white/20"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full py-3 text-center text-sm font-bold justify-center inline-flex items-center gap-2 mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-primary-foreground"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Download App
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
