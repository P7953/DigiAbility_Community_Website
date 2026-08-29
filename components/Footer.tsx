import Link from "next/link";
import { AppLogo } from "./ui/AppLogo";

export function Footer() {
  return (
    <footer className="bg-stone-200 text-stone-700 pt-16 pb-12 border-t border-stone-300" role="contentinfo">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" aria-label="DigiAbility Home" className="focus-visible:ring-2 focus-visible:ring-primary rounded-lg w-fit">
              <AppLogo size={36} />
            </Link>
            <p className="text-sm text-stone-700 leading-relaxed max-w-sm font-medium">
              An accessibility-first mobile & web platform where Persons with Disabilities, caregivers, NGOs, and advocates connect, learn, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-stone-700">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Features</a>
              </li>
              <li>
                <a href="#why" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Why DigiAbility</a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Download App</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Resources & Schemes</h3>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-stone-700">
              <li>
                <a href="#features" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Empowerment Schemes Hub</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Assistive Tech Guides</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">NGO Partner Directory</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">24/7 Helpline Support</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Legal Rights Handbook</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Legal & Compliance</h3>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-stone-700">
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Community Guidelines</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Accessibility Statement</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Security Audit</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700 font-semibold">
          <p>© 2026 DigiAbility Community. All rights reserved. Built with digital accessibility in mind.</p>
          <div className="flex items-center gap-6">
            <a href="#legal" aria-label="Privacy Policy in Legal Section" className="hover:text-stone-950 transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Privacy</a>
            <a href="#legal" aria-label="Terms of Service in Legal Section" className="hover:text-stone-950 transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Terms</a>
            <a href="#legal" aria-label="Cookies Policy in Legal Section" className="hover:text-stone-950 transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
