import Link from "next/link";
import { AppLogo } from "./ui/AppLogo";

export function Footer() {
  return (
    <footer className="bg-stone-200 text-stone-700 pt-16 pb-12 border-t border-stone-300" role="contentinfo">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" aria-label="DigiAbility Home">
              <AppLogo size={36} />
            </Link>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm font-medium">
              An accessibility-first mobile & web platform where Persons with Disabilities, caregivers, NGOs, and advocates connect, learn, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-stone-600">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#why" className="hover:text-primary transition-colors">Why DigiAbility</a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors">Download App</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Resources & Schemes</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-stone-600">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Government Schemes Hub</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Assistive Tech Guides</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">NGO Partner Directory</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">24/7 Helpline Support</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Legal Rights Handbook</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-stone-600">
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Community Guidelines</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Accessibility Statement</a>
              </li>
              <li>
                <a href="#legal" className="hover:text-primary transition-colors">Security Audit</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-medium">
          <p>© 2026 DigiAbility Community. All rights reserved. Built with digital accessibility in mind.</p>
          <div className="flex items-center gap-6">
            <a href="#legal" className="hover:text-stone-900 transition-colors">Privacy</a>
            <a href="#legal" className="hover:text-stone-900 transition-colors">Terms</a>
            <a href="#legal" className="hover:text-stone-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
