import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ValueProps from '@/components/ValueProps';
import VideoDemo from '@/components/VideoDemo';
import SkillsShowcase from '@/components/SkillsShowcase';
import HowItWorks from '@/components/HowItWorks';
import StatsBand from '@/components/StatsBand';
import UseCases from '@/components/UseCases';
import CommunitySection from '@/components/CommunitySection';
import PricingTeaser from '@/components/PricingTeaser';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <VideoDemo />
        <SkillsShowcase />
        <HowItWorks />
        <StatsBand />
        <UseCases />
        <CommunitySection />
        <PricingTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}