import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import TrainingChallenges from '@/components/TrainingChallenges';
import ValueProps from '@/components/ValueProps';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

// Lazy load below-the-fold components
const SkillsShowcase = lazy(() => import('@/components/SkillsShowcase'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const StatsBand = lazy(() => import('@/components/StatsBand'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO namespace="home" />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TrainingChallenges />
        {/* Temporarily commented out - videos not ready yet */}
        {/* <ValueProps /> */}
        {/* Group below-the-fold components under single Suspense to reduce CLS and spinner noise */}
        <Suspense fallback={
          <div className="space-y-24 py-24">
            {/* Content sections skeleton */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="container mx-auto">
                <div className="h-6 bg-muted rounded animate-pulse mx-auto w-64 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-32 bg-muted rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        }>
          <SkillsShowcase />
          <HowItWorks />
          <StatsBand />
          <FinalCTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}