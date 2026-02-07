import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { StorySection } from "@/components/landing/story-section";
import { StatsSection } from "@/components/landing/stats-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FAQSection } from "@/components/landing/faq-section";
import { MotivationSection } from "@/components/landing/motivation-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function NetworkMarketingLanding() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <StatsSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FAQSection />
      <MotivationSection />
      <CTASection />
      <Footer />
    </main>
  );
}
