'use client';
import HeroSection from '@/components/faq/HeroSection';
import FAQSection from '@/components/faq/FAQSection';
import ContactCTA from '@/components/faq/ContactCTA';
import { faqSections } from '@/data/faqSections';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-background-light">
      <HeroSection />
      <FAQSection faqSections={faqSections} />
      <ContactCTA />
    </main>
  );
}