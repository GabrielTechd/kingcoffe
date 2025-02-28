"use client"
import HeroSection from '@/components/store/Hero';
import QualityStandardsSection from '@/components/store/FeaturesLojas';
import StoresSection from '@/data/StoreData';
import CtaSection from '@/components/store/CtaSection';

const StoresPage = () => (
  <main className="min-h-screen">
    <HeroSection />
    <QualityStandardsSection />
    <StoresSection />
    <CtaSection />
  </main>
);

export default StoresPage;
