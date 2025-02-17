import HeroSection from "@/components/home/hero-section";
import BenefitsSection from "@/components/home/benefits-section";
import HowToUseSection from "@/components/home/how-to-use-section";
import NewsletterSection from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <div className="flex-grow">
      <HeroSection />
      <BenefitsSection />
      <HowToUseSection />
      <NewsletterSection />
    </div>
  );
}
