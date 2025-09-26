import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ValueProps from '@/components/ValueProps';
import Footer from '@/components/Footer';

// Lazy load below-the-fold components
const VideoDemo = lazy(() => import('@/components/VideoDemo'));
const SkillsShowcase = lazy(() => import('@/components/SkillsShowcase'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const StatsBand = lazy(() => import('@/components/StatsBand'));
const CommunitySection = lazy(() => import('@/components/CommunitySection'));
const PricingTeaser = lazy(() => import('@/components/PricingTeaser'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        {/* Group below-the-fold components under single Suspense to reduce CLS and spinner noise */}
        <Suspense fallback={
          <div className="space-y-24 py-24">
            {/* Video demo skeleton */}
            <div className="container mx-auto max-w-4xl">
              <div className="space-y-8">
                <div className="h-8 bg-muted rounded animate-pulse mx-auto w-80"></div>
                <div className="aspect-video bg-muted rounded animate-pulse"></div>
              </div>
            </div>
            {/* Content sections skeleton */}
            {[...Array(6)].map((_, i) => (
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
          <VideoDemo />
          <SkillsShowcase />
          <HowItWorks />
          <StatsBand />
          <CommunitySection />
          <PricingTeaser />
          <FinalCTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}