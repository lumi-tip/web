import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Eye,
  Brain,
  Zap,
  CheckCircle,
  Users,
  Shield,
  Monitor,
  GraduationCap,
  TrendingUp,
  Activity,
  Target,
  Layers,
  Radio,
  Clock,
  ArrowRight,
  Plus,
  Sparkles,
  RefreshCw,
  Languages
} from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
}

export default function AdaptiveIntelligence() {
  const { t, i18n } = useTranslation('adaptive');
  const stars = useMemo(() => generateStars(80), []);

  const handleTryClick = () => {
    analytics.ctaClick('try_adaptive', 'adaptive_page');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'adaptive_page');
    window.location.href = '/contact';
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Adaptive Course Intelligence",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('meta.description'),
    "featureList": [
      "Real-time Content Adaptation",
      "Behavior Analysis",
      "Frustration Detection",
      "Difficulty Adjustment",
      "Learning Path Optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet key={i18n.language}>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:site_name" content="LearnPack" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.ogTitle')} />
        <meta name="twitter:description" content={t('meta.ogDescription')} />
        <link rel="canonical" href="https://learnpack.co/features/adaptive-intelligence" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="hero-animated-bg relative overflow-hidden">
        {/* Starfield background only - no vertical light beams */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `starTwinkleUnified ${star.duration} ease-in-out ${star.delay} infinite`,
              }}
            />
          ))}
        </div>

        {/* Subtle blue glow - top right only */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        {/* Subtle blue glow - bottom left */}
        <div 
          className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.05) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* SECTION 1: HERO - Moved up with reduced padding */}
        <section 
          className="pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24"
          data-testid="section-adaptive-hero"
        >
          <div className="content-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left column - Text */}
              <div className="text-center lg:text-left">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
                  data-testid="heading-adaptive-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    onClick={handleTryClick}
                    className="bg-[#1F6FEB] hover:bg-[#3A8DFF] text-white border-[#3A8DFF]"
                    data-testid="button-hero-try"
                  >
                    {t('hero.ctaTry')}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleDemoClick}
                    className="border-white/30 text-white hover:bg-white/10"
                    data-testid="button-hero-demo"
                  >
                    {t('hero.ctaDemo')}
                  </Button>
                </div>
              </div>
              
              {/* Right column - Course mockup with subtle glow */}
              <div className="flex items-center justify-center">
                <div 
                  className="relative w-full max-w-md rounded-xl p-6"
                  style={{
                    backgroundColor: '#0E1629',
                    border: '1px solid rgba(31, 111, 235, 0.3)',
                    boxShadow: '0 0 40px rgba(31, 111, 235, 0.12)',
                  }}
                  data-testid="mockup-adaptive-course"
                >
                  {/* Mockup header */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-4 text-xs text-white/40">course-module.tsx</span>
                  </div>
                  
                  {/* Mockup content lines */}
                  <div className="space-y-3 mb-6">
                    <div className="h-3 bg-white/10 rounded w-3/4" />
                    <div className="h-3 bg-white/10 rounded w-full" />
                    <div className="h-3 bg-white/10 rounded w-5/6" />
                    <div className="h-3 bg-white/10 rounded w-2/3" />
                  </div>
                  
                  {/* Adaptive notifications */}
                  <div className="space-y-3">
                    <div 
                      className="px-4 py-3 rounded-lg text-sm"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)', border: '1px solid rgba(31, 111, 235, 0.3)' }}
                    >
                      <span className="text-[#3A8DFF]">{t('hero.mockup.stuck')}</span>
                    </div>
                    <div 
                      className="px-4 py-3 rounded-lg text-sm"
                      style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                    >
                      <span className="text-green-400">{t('hero.mockup.extraExample')}</span>
                    </div>
                    <div 
                      className="px-4 py-3 rounded-lg text-sm"
                      style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)' }}
                    >
                      <span className="text-amber-400">{t('hero.mockup.difficultyAdjusted')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX - Reduced bottom spacing */}
        <section 
          className="py-8 md:py-12"
          data-testid="section-definition"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-medium tracking-widest text-white/50 mb-4 text-center uppercase">
                {t('definition.label')}
              </p>
              <div 
                className="px-8 py-8 md:px-12 md:py-10 text-center rounded-xl"
                style={{ 
                  backgroundColor: '#0A1A2F',
                  border: '1px solid #1F6FEB',
                  boxShadow: '0 0 40px rgba(31, 111, 235, 0.15)',
                }}
              >
                <p className="text-lg md:text-xl leading-relaxed text-white/90">
                  {t('definition.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STATIC LEARNING PROBLEM - Premium cards with glowing icons */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-problem"
        >
          <div className="content-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                {t('problem.title')}
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {t('problem.subtitle')}
              </p>
            </div>
            
            {/* 3 premium cards with glowing icon circles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div 
                className="rounded-xl p-8 text-center relative"
                style={{
                  backgroundColor: '#0A1220',
                  border: '1px solid rgba(31, 111, 235, 0.2)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                }}
                data-testid="card-problem-1"
              >
                {/* Icon with soft blue glow */}
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(31, 111, 235, 0.25) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <div 
                    className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      border: '1px solid rgba(31, 111, 235, 0.3)',
                    }}
                  >
                    <Layers className="w-7 h-7 text-[#3A8DFF]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('problem.cards.oneSize.title')}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('problem.cards.oneSize.description')}
                </p>
              </div>
              
              {/* Card 2 */}
              <div 
                className="rounded-xl p-8 text-center relative"
                style={{
                  backgroundColor: '#0A1220',
                  border: '1px solid rgba(31, 111, 235, 0.2)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                }}
                data-testid="card-problem-2"
              >
                {/* Icon with soft blue glow */}
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(31, 111, 235, 0.25) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <div 
                    className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      border: '1px solid rgba(31, 111, 235, 0.3)',
                    }}
                  >
                    <Radio className="w-7 h-7 text-[#3A8DFF]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('problem.cards.noSignals.title')}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('problem.cards.noSignals.description')}
                </p>
              </div>
              
              {/* Card 3 */}
              <div 
                className="rounded-xl p-8 text-center relative"
                style={{
                  backgroundColor: '#0A1220',
                  border: '1px solid rgba(31, 111, 235, 0.2)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                }}
                data-testid="card-problem-3"
              >
                {/* Icon with soft blue glow */}
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(31, 111, 235, 0.25) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <div 
                    className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      border: '1px solid rgba(31, 111, 235, 0.3)',
                    }}
                  >
                    <Clock className="w-7 h-7 text-[#3A8DFF]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {t('problem.cards.outdated.title')}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t('problem.cards.outdated.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT ADAPTIVE INTELLIGENCE DOES - Hexagon icons with thin glowing line */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-what-it-does"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center text-white">
              {t('whatItDoes.title')}
            </h2>
            
            {/* Horizontal layout with hexagon icons and elegant connecting line */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
                {/* Horizontal connecting line with blue glow - desktop only */}
                <div 
                  className="hidden md:block absolute top-12 left-[18%] right-[18%] h-[1px]"
                  style={{ 
                    backgroundColor: 'rgba(31, 111, 235, 0.5)',
                    boxShadow: '0 0 8px rgba(31, 111, 235, 0.4), 0 0 16px rgba(31, 111, 235, 0.2)',
                  }}
                  aria-hidden="true"
                />
                
                {/* Detects - Hexagon */}
                <div className="flex flex-col items-center text-center relative z-10 flex-1" data-testid="block-detects">
                  <div 
                    className="w-24 h-24 flex items-center justify-center mb-5 relative"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundColor: '#0A1A2F',
                    }}
                  >
                    {/* Hexagon border effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'linear-gradient(135deg, rgba(31, 111, 235, 0.6), rgba(31, 111, 235, 0.2))',
                      }}
                    />
                    <div 
                      className="absolute inset-[2px] flex items-center justify-center"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        backgroundColor: '#0A1A2F',
                        boxShadow: '0 0 30px rgba(31, 111, 235, 0.3)',
                      }}
                    >
                      <Eye className="w-9 h-9 text-[#3A8DFF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {t('whatItDoes.blocks.detects.title')}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">
                    {t('whatItDoes.blocks.detects.description')}
                  </p>
                </div>

                {/* Arrow - mobile only */}
                <ArrowRight className="md:hidden w-6 h-6 text-[#3A8DFF] rotate-90" aria-hidden="true" />
                
                {/* Adjusts - Hexagon */}
                <div className="flex flex-col items-center text-center relative z-10 flex-1" data-testid="block-adjusts">
                  <div 
                    className="w-24 h-24 flex items-center justify-center mb-5 relative"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundColor: '#0A1A2F',
                    }}
                  >
                    {/* Hexagon border effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'linear-gradient(135deg, rgba(31, 111, 235, 0.6), rgba(31, 111, 235, 0.2))',
                      }}
                    />
                    <div 
                      className="absolute inset-[2px] flex items-center justify-center"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        backgroundColor: '#0A1A2F',
                        boxShadow: '0 0 30px rgba(31, 111, 235, 0.3)',
                      }}
                    >
                      <Brain className="w-9 h-9 text-[#3A8DFF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {t('whatItDoes.blocks.adjusts.title')}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">
                    {t('whatItDoes.blocks.adjusts.description')}
                  </p>
                </div>

                {/* Arrow - mobile only */}
                <ArrowRight className="md:hidden w-6 h-6 text-[#3A8DFF] rotate-90" aria-hidden="true" />
                
                {/* Guides - Hexagon */}
                <div className="flex flex-col items-center text-center relative z-10 flex-1" data-testid="block-guides">
                  <div 
                    className="w-24 h-24 flex items-center justify-center mb-5 relative"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundColor: '#0A1A2F',
                    }}
                  >
                    {/* Hexagon border effect */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        background: 'linear-gradient(135deg, rgba(31, 111, 235, 0.6), rgba(31, 111, 235, 0.2))',
                      }}
                    />
                    <div 
                      className="absolute inset-[2px] flex items-center justify-center"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        backgroundColor: '#0A1A2F',
                        boxShadow: '0 0 30px rgba(31, 111, 235, 0.3)',
                      }}
                    >
                      <Zap className="w-9 h-9 text-[#3A8DFF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {t('whatItDoes.blocks.guides.title')}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">
                    {t('whatItDoes.blocks.guides.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ADAPTIVE ENGINE - Better centered layout */}
        <section 
          className="py-20 md:py-24 relative"
          data-testid="section-engine"
        >
          <div className="content-container relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14 text-center text-white">
              {t('engine.title')}
            </h2>
            
            {/* Centered block containing both timeline and mockup */}
            <div className="flex justify-center">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center justify-center">
                {/* Left - Timeline with icons */}
                <div className="flex justify-center">
                  <div className="space-y-0">
                    {[
                      { key: 'observe', icon: Eye },
                      { key: 'interpret', icon: Brain },
                      { key: 'act', icon: Zap },
                      { key: 'validate', icon: CheckCircle }
                    ].map(({ key, icon: Icon }, index) => (
                      <div key={key} className="flex items-start gap-5" data-testid={`step-${key}`}>
                        {/* Timeline line and dot */}
                        <div className="flex flex-col items-center">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: '#1F6FEB',
                              boxShadow: '0 0 20px rgba(31, 111, 235, 0.4)',
                            }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          {index < 3 && (
                            <div 
                              className="w-[2px] h-14"
                              style={{ backgroundColor: '#1F6FEB' }}
                            />
                          )}
                        </div>
                        {/* Step text */}
                        <div className="pt-3 pb-6">
                          <h3 className="text-xl font-semibold text-white">
                            {t(`engine.steps.${key}`)}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right - Improved course mockup showing adaptation */}
                <div className="flex justify-center">
                  <div 
                    className="rounded-xl p-6 w-80"
                    style={{
                      backgroundColor: '#0E1629',
                      border: '1px solid rgba(31, 111, 235, 0.2)',
                    }}
                  >
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="ml-4 text-xs text-white/40">LearnPack Course</span>
                    </div>
                    
                    {/* Course interface with adaptation visualization */}
                    <div className="space-y-4">
                      {/* Content block that shows change */}
                      <div className="flex items-center gap-3">
                        <div className="h-4 bg-white/10 rounded flex-1" />
                        <div 
                          className="px-2 py-1 rounded text-[10px] font-medium"
                          style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}
                        >
                          Adapted
                        </div>
                      </div>
                      
                      {/* Module cards - one highlighted as changed */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                          <span className="text-[10px] text-white/30">Module 1</span>
                        </div>
                        <div 
                          className="h-16 rounded flex items-center justify-center relative overflow-visible"
                          style={{ 
                            backgroundColor: 'rgba(31, 111, 235, 0.15)',
                            border: '1px solid rgba(31, 111, 235, 0.4)',
                          }}
                        >
                          <span className="text-[10px] text-[#3A8DFF]">Module 2</span>
                          {/* Glow effect */}
                          <div 
                            className="absolute inset-0 rounded pointer-events-none"
                            style={{ boxShadow: '0 0 15px rgba(31, 111, 235, 0.3)' }}
                          />
                        </div>
                        <div className="h-16 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                          <span className="text-[10px] text-white/30">Module 3</span>
                        </div>
                      </div>
                      
                      {/* Difficulty adjustment indicator */}
                      <div 
                        className="px-3 py-2 rounded-lg flex items-center gap-2"
                        style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)' }}
                      >
                        <Activity className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-amber-400">Difficulty adjusted to match pace</span>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-[#1F6FEB] rounded-full" />
                        </div>
                        <span className="text-xs text-white/40">67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHAT ADAPTATION LOOKS LIKE - Static display, no interactivity */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-examples"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-white">
              {t('examples.title')}
            </h2>
            
            {/* Subtitle without instruction */}
            <p className="text-center text-white/60 mb-12 max-w-xl mx-auto">
              Real-time adaptations that improve learner outcomes.
            </p>
            
            {/* Grid of 4 equal adaptation types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Extra Example */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.7)',
                  border: '1px solid rgba(31, 111, 235, 0.25)',
                }}
                data-testid="card-example-extraExample"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                >
                  <Plus className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <h3 className="font-medium text-white mb-2">
                  {t('examples.cards.extraExample')}
                </h3>
                <p className="text-xs text-white/50">
                  When a learner struggles, additional examples are inserted automatically.
                </p>
              </div>

              {/* Difficulty Adjusted */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.7)',
                  border: '1px solid rgba(31, 111, 235, 0.25)',
                }}
                data-testid="card-example-difficulty"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                >
                  <Sparkles className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <h3 className="font-medium text-white mb-2">
                  {t('examples.cards.difficulty')}
                </h3>
                <p className="text-xs text-white/50">
                  Content difficulty scales up or down based on performance.
                </p>
              </div>

              {/* Concept Reinforced */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.7)',
                  border: '1px solid rgba(31, 111, 235, 0.25)',
                }}
                data-testid="card-example-reinforced"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                >
                  <RefreshCw className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <h3 className="font-medium text-white mb-2">
                  {t('examples.cards.reinforced')}
                </h3>
                <p className="text-xs text-white/50">
                  Key concepts are revisited when mastery isn't detected.
                </p>
              </div>

              {/* Translation Triggered */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.7)',
                  border: '1px solid rgba(31, 111, 235, 0.25)',
                }}
                data-testid="card-example-translation"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                >
                  <Languages className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <h3 className="font-medium text-white mb-2">
                  {t('examples.cards.translation')}
                </h3>
                <p className="text-xs text-white/50">
                  Content adapts to learner's preferred language automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: ADAPTIVE ANALYTICS - Floating metrics */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-analytics"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14 text-center text-white">
              {t('analytics.title')}
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Metric 1 - 50% */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(16, 44, 76, 0.4)',
                  border: '1px solid rgba(58, 141, 255, 0.15)',
                }}
                data-testid="metric-dropout"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {t('analytics.metrics.dropout.value')}
                </p>
                <p className="text-sm text-white/60">
                  {t('analytics.metrics.dropout.label')}
                </p>
              </div>
              
              {/* Metric 2 - 2x */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(16, 44, 76, 0.4)',
                  border: '1px solid rgba(58, 141, 255, 0.15)',
                }}
                data-testid="metric-completion"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {t('analytics.metrics.completion.value')}
                </p>
                <p className="text-sm text-white/60">
                  {t('analytics.metrics.completion.label')}
                </p>
              </div>
              
              {/* Metric 3 - Heatmaps */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(16, 44, 76, 0.4)',
                  border: '1px solid rgba(58, 141, 255, 0.15)',
                }}
                data-testid="metric-heatmaps"
              >
                <Activity className="w-10 h-10 text-[#3A8DFF] mx-auto mb-3" />
                <p className="text-sm text-white/60">
                  {t('analytics.metrics.heatmaps.label')}
                </p>
              </div>
              
              {/* Metric 4 - Prediction */}
              <div 
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: 'rgba(16, 44, 76, 0.4)',
                  border: '1px solid rgba(58, 141, 255, 0.15)',
                }}
                data-testid="metric-prediction"
              >
                <Target className="w-10 h-10 text-[#3A8DFF] mx-auto mb-3" />
                <p className="text-sm text-white/60">
                  {t('analytics.metrics.prediction.label')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: USE CASES - Oval pills in 2 rows */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-white">
              {t('useCases.title')}
            </h2>
            
            {/* Two rows of pills */}
            <div className="max-w-3xl mx-auto space-y-4">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { key: 'onboarding', icon: Users },
                  { key: 'compliance', icon: Shield },
                  { key: 'software', icon: Monitor },
                ].map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="px-6 py-3 rounded-full flex items-center gap-3"
                    style={{
                      backgroundColor: 'rgba(10, 26, 47, 0.8)',
                      border: '1px solid rgba(31, 111, 235, 0.35)',
                    }}
                    data-testid={`usecase-${key}`}
                  >
                    <Icon className="w-5 h-5 text-[#3A8DFF]" />
                    <span className="text-sm font-medium text-white/90">
                      {t(`useCases.items.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { key: 'customer', icon: GraduationCap },
                  { key: 'sales', icon: TrendingUp },
                ].map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="px-6 py-3 rounded-full flex items-center gap-3"
                    style={{
                      backgroundColor: 'rgba(10, 26, 47, 0.8)',
                      border: '1px solid rgba(31, 111, 235, 0.35)',
                    }}
                    data-testid={`usecase-${key}`}
                  >
                    <Icon className="w-5 h-5 text-[#3A8DFF]" />
                    <span className="text-sm font-medium text-white/90">
                      {t(`useCases.items.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ - Accordion style */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-faq"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-white">
              {t('faq.title')}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="item-1" 
                  className="rounded-xl px-6 border"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(31, 111, 235, 0.3)',
                  }}
                  data-testid="faq-item-1"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-5 text-left">
                    {t('faq.questions.q1.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q1.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-2" 
                  className="rounded-xl px-6 border"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(31, 111, 235, 0.3)',
                  }}
                  data-testid="faq-item-2"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-5 text-left">
                    {t('faq.questions.q2.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q2.answer')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem 
                  value="item-3" 
                  className="rounded-xl px-6 border"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(31, 111, 235, 0.3)',
                  }}
                  data-testid="faq-item-3"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-5 text-left">
                    {t('faq.questions.q3.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q3.answer')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section 
          className="py-24 md:py-28"
          data-testid="section-cta"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-white">
                {t('cta.title')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleTryClick}
                  className="bg-[#1F6FEB] hover:bg-[#3A8DFF] text-white border-[#3A8DFF]"
                  data-testid="button-cta-start"
                >
                  {t('cta.ctaStart')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleDemoClick}
                  className="border-[#3A8DFF] text-white hover:bg-[#1F6FEB]/20"
                  data-testid="button-cta-demo"
                >
                  {t('cta.ctaDemo')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
