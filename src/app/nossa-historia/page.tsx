'use client';
import HeroSection from '@/components/history/HeroSection';
import IntroSection from '@/components/history/IntroSection';
import ValuesSection from '@/components/history/ValuesSection';
import TimelineSection from '@/components/history/TimelineSection';
import CTASection from '@/components/history/CTASection';
import { milestones } from '@/data/milestones';

export default function OurHistory() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <ValuesSection />
      <TimelineSection milestones={milestones} />
      <CTASection />
    </main>
  );
}