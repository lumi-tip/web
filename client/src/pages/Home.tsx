import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import HowItWorks from '@/components/HowItWorks';
import StatsBand from '@/components/StatsBand';
import UseCases from '@/components/UseCases';
import PricingTeaser from '@/components/PricingTeaser';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <StatsBand />
        <UseCases />
        <PricingTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}