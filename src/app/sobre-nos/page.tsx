'use client';
import HeroSection from '@/components/about/HeroSection';
import MissionSection from '@/components/about/MissionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import JoinUsCTA from '@/components/about/JoinUsCTA';
import { team } from '@/data/team';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background-light">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection team={team} />
      <JoinUsCTA />
    </main>
  );
}