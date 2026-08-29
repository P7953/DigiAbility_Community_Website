import { Header } from "@/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { WhyDigiAbilitySection } from "@/app/components/WhyDigiAbilitySection";
import { DownloadSection } from "@/app/components/DownloadSection";
import { SocialMediaSection } from "@/app/components/SocialMediaSection";
import { LegalSection } from "@/app/components/LegalSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <WhyDigiAbilitySection />
        <SocialMediaSection />
        <DownloadSection />
        <LegalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
