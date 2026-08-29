import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digiability.in"),
  title: "DigiAbility — Connecting Abilities. Empowering Communities.",
  description:
    "DigiAbility Community connects Persons with Disabilities, caregivers, NGOs, and advocates through an accessible, inclusive mobile platform built for digital inclusion.",
  openGraph: {
    title: "DigiAbility — Connecting Abilities",
    description:
      "An accessibility-first community platform for Persons with Disabilities.",
    images: ["/assets/images/app_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiAbility — Connecting Abilities",
    description:
      "An accessibility-first community platform for Persons with Disabilities.",
    images: ["/assets/images/app_logo.png"],
  },
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-fuchsia-100 selection:text-fuchsia-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-bold text-sm"
        >
          Skip to main content
        </a>
        <div
          className="noise-overlay fixed inset-0 z-50 pointer-events-none"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
