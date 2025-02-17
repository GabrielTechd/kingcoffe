"use client"
import HeroSection from '@/components/HeroSection';
import QualityStandardsSection from '@/components/Features/FeaturesLojas';
import StoresSection from '@/StoreData';
import CtaSection from '@/components/CtaSection';

const StoresPage = () => (
  <main className="min-h-screen">
    <HeroSection />
    <QualityStandardsSection />
    <StoresSection />
    <CtaSection />
  </main>
);

export default StoresPage;
