import { useMemo, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Bot,
  Users,
  Wrench,
  Shield,
  GraduationCap,
  ArrowRight,
  Check,
  ChevronDown,
  Zap,
  Focus,
  Brain,
  Compass,
  SlidersHorizontal,
  Globe,
  Clock
} from 'lucide-react';
import { analytics } from '@/lib/analytics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Hyperpersonalization() {
  const { t, i18n } = useTranslation('hyperpersonalization');

  const handleStartClick = () => {
    analytics.ctaClick('start_free', 'hyperpersonalization_page');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'hyperpersonalization_page');
    window.location.href = '/contact';
  };

  const useCaseItems = [
    { key: 'onboarding', icon: Users },
    { key: 'tools', icon: Wrench },
    { key: 'compliance', icon: Shield },
    { key: 'technical', icon: GraduationCap }
  ];

  const iconMap = {
    zap: Zap,
    focus: Focus,
    brain: Brain,
    compass: Compass,
    sliders: SlidersHorizontal,
    globe: Globe,
    clock: Clock,
  } as const;

  const features = t('aiTutor.features', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextFeature = useCallback(() => {
    setActiveFeatureIndex((prev) => (prev + 1) % features.length);
  }, [features.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextFeature, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextFeature]);

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${5 + Math.random() * 7}s`,
        size: Math.random() > 0.7 ? 2 : Math.random() > 0.4 ? 1.5 : 1,
      })),
    []
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Hyperpersonalized Learning System",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('meta.description'),
    "featureList": [
      "Hyperpersonalization System",
      "Learner Profiling",
      "Adaptive Course Experience",
      "AI Tutor Support",
      "Role-based Examples",
      "Personalized Explanations"
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
        <link rel="canonical" href="https://learnpack.co/features/hyperpersonalized-learning" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="hero-animated-bg relative overflow-hidden">
        {/* GLOBAL BACKGROUND - Stars and light beams applied at top level for continuity */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Starfield - distributed across entire page */}
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

        {/* GLOBAL LIGHT BEAMS - Long, blurred, continuous across page */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[1200px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(207 100% 50% / 0.06) 0%, transparent 60%)',
            filter: 'blur(150px)',
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-[20%] left-[-15%] w-[900px] h-[1400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center left, hsl(200 80% 60% / 0.04) 0%, transparent 55%)',
            filter: 'blur(180px)',
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-[50%] right-[-10%] w-[700px] h-[1000px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center right, hsl(210 90% 55% / 0.05) 0%, transparent 50%)',
            filter: 'blur(160px)',
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-[75%] left-[5%] w-[600px] h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom left, hsl(205 85% 60% / 0.04) 0%, transparent 55%)',
            filter: 'blur(140px)',
          }}
          aria-hidden="true"
        />

        {/* SECTION 1: HERO - Centered, focused on system */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-hero"
        >
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                data-testid="heading-hero"
              >
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleStartClick}
                  data-testid="button-hero-start"
                >
                  {t('hero.ctaStart')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleDemoClick}
                  data-testid="button-hero-demo"
                >
                  {t('hero.ctaDemo')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SYSTEM - Vertical Flow Diagram with glowing connectors */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-system"
        >
          <div className="content-container">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('system.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('system.subtitle')}
              </p>
            </div>
            
            {/* Vertical Flow Diagram */}
            <div className="max-w-xl mx-auto flex flex-col items-center">
              {/* Step 1: Base course */}
              <div 
                className="w-full px-6 py-5 rounded-xl text-center relative"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.6)',
                  border: '1px solid rgba(48, 79, 254, 0.3)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.12)',
                }}
                data-testid="flow-step-1"
              >
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Step 1</p>
                <h3 className="font-semibold text-lg mb-1">{t('system.step1.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('system.step1.description')}</p>
              </div>
              
              {/* Connector line with glow */}
              <div className="relative h-12 flex items-center justify-center">
                <div 
                  className="w-0.5 h-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(48, 79, 254, 0.6) 0%, rgba(48, 79, 254, 0.3) 100%)',
                    boxShadow: '0 0 8px rgba(48, 79, 254, 0.5)',
                  }}
                />
                <ChevronDown 
                  className="absolute bottom-0 w-5 h-5 text-primary" 
                  style={{ filter: 'drop-shadow(0 0 4px rgba(48, 79, 254, 0.6))' }}
                />
              </div>
              
              {/* Step 2: Learner profiling */}
              <div 
                className="w-full px-6 py-5 rounded-xl text-center relative"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.6)',
                  border: '1px solid rgba(48, 79, 254, 0.3)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.12)',
                }}
                data-testid="flow-step-2"
              >
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Step 2</p>
                <h3 className="font-semibold text-lg mb-1">{t('system.step2.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('system.step2.description')}</p>
              </div>
              
              {/* Connector line with glow */}
              <div className="relative h-12 flex items-center justify-center">
                <div 
                  className="w-0.5 h-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(48, 79, 254, 0.6) 0%, rgba(48, 79, 254, 0.3) 100%)',
                    boxShadow: '0 0 8px rgba(48, 79, 254, 0.5)',
                  }}
                />
                <ChevronDown 
                  className="absolute bottom-0 w-5 h-5 text-primary" 
                  style={{ filter: 'drop-shadow(0 0 4px rgba(48, 79, 254, 0.6))' }}
                />
              </div>
              
              {/* Step 3: Personalized course */}
              <div 
                className="w-full px-6 py-5 rounded-xl text-center relative"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.8)',
                  border: '1px solid rgba(48, 79, 254, 0.5)',
                  boxShadow: '0 0 40px rgba(48, 79, 254, 0.2)',
                }}
                data-testid="flow-step-3"
              >
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Step 3</p>
                <h3 className="font-semibold text-lg mb-1">{t('system.step3.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('system.step3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EXAMPLE - Bifurcation Visual (Base course splits to Marco/Laura) */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-example"
        >
          <div className="content-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('example.title')}
              </h2>
            </div>
            
            {/* Bifurcation Visual */}
            <div className="max-w-3xl mx-auto">
              {/* Base course at top */}
              <div 
                className="mx-auto max-w-md px-6 py-4 rounded-xl text-center mb-2"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.7)',
                  border: '1px solid rgba(48, 79, 254, 0.4)',
                  boxShadow: '0 0 25px rgba(48, 79, 254, 0.15)',
                }}
                data-testid="example-base-course"
              >
                <p className="text-sm text-muted-foreground mb-1">{t('example.intro')}</p>
                <p className="font-semibold text-primary">Same base lesson</p>
              </div>
              
              {/* Bifurcation connectors */}
              <div className="relative h-16 flex justify-center">
                {/* Center vertical line */}
                <div 
                  className="absolute top-0 w-0.5 h-6"
                  style={{
                    background: 'linear-gradient(180deg, rgba(48, 79, 254, 0.5) 0%, rgba(48, 79, 254, 0.3) 100%)',
                    boxShadow: '0 0 6px rgba(48, 79, 254, 0.4)',
                  }}
                />
                {/* Horizontal connector */}
                <div 
                  className="absolute top-6 h-0.5"
                  style={{
                    width: '60%',
                    background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.4) 0%, rgba(48, 79, 254, 0.3) 50%, rgba(168, 85, 247, 0.4) 100%)',
                    boxShadow: '0 0 6px rgba(48, 79, 254, 0.3)',
                  }}
                />
                {/* Left vertical line (to Marco) */}
                <div 
                  className="absolute top-6 left-[20%] w-0.5 h-10"
                  style={{
                    background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.6) 100%)',
                    boxShadow: '0 0 6px rgba(34, 197, 94, 0.4)',
                  }}
                />
                {/* Right vertical line (to Laura) */}
                <div 
                  className="absolute top-6 right-[20%] w-0.5 h-10"
                  style={{
                    background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.6) 100%)',
                    boxShadow: '0 0 6px rgba(168, 85, 247, 0.4)',
                  }}
                />
              </div>
              
              {/* Marco and Laura side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Marco */}
                <div 
                  className="p-5 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.5)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    boxShadow: '0 0 25px rgba(34, 197, 94, 0.1)',
                  }}
                  data-testid="example-marco"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        color: 'rgb(134, 239, 172)',
                      }}
                    >
                      M
                    </div>
                    <div>
                      <p className="font-semibold">{t('example.marco.name')}</p>
                      <p className="text-xs text-muted-foreground">{t('example.marco.profile')}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {t('example.marco.result')}
                  </p>
                </div>
                
                {/* Laura */}
                <div 
                  className="p-5 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.5)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    boxShadow: '0 0 25px rgba(168, 85, 247, 0.1)',
                  }}
                  data-testid="example-laura"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{
                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                        color: 'rgb(216, 180, 254)',
                      }}
                    >
                      L
                    </div>
                    <div>
                      <p className="font-semibold">{t('example.laura.name')}</p>
                      <p className="text-xs text-muted-foreground">{t('example.laura.profile')}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {t('example.laura.result')}
                  </p>
                </div>
              </div>
              
              {/* Conclusion */}
              <p className="text-center text-lg font-medium text-primary mt-8">
                {t('example.conclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: AI TUTOR - Text left, Mock visual right + Features list */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-ai-tutor"
        >
          <div className="content-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                {/* Left - Text */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-primary/25"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      }}
                    >
                      <Bot className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">AI Tutor</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {t('aiTutor.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('aiTutor.subtitle')}
                  </p>
                </div>
                
                {/* Right - Mock visual (course fragment + AI bubble) */}
                <div 
                  className="rounded-xl p-5 relative"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.6)',
                    border: '1px solid rgba(48, 79, 254, 0.2)',
                    boxShadow: '0 0 40px rgba(48, 79, 254, 0.1)',
                  }}
                  data-testid="ai-tutor-mock"
                >
                  {/* Course content fragment */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Lesson content</p>
                    <div 
                      className="p-3 rounded-lg text-sm text-foreground/70 leading-relaxed"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      "The key to effective project management is understanding resource allocation and timeline dependencies..."
                    </div>
                  </div>
                  
                  {/* AI Tutor response bubble */}
                  <div className="flex gap-3 items-start">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(48, 79, 254, 0.3)' }}
                    >
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div 
                      className="flex-1 p-3 rounded-lg text-sm"
                      style={{
                        backgroundColor: 'rgba(48, 79, 254, 0.1)',
                        border: '1px solid rgba(48, 79, 254, 0.2)',
                      }}
                    >
                      <p className="text-xs text-primary mb-1 font-medium">AI Tutor</p>
                      <p className="text-foreground/80 italic">
                        "Think of it like coaching a sports team - you need to know your players' strengths and plan the game accordingly."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Tutor Features - Spotlight Carousel */}
              <div 
                className="mt-20 max-w-2xl mx-auto" 
                data-testid="ai-tutor-features"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-10 text-center text-foreground/90">
                  {t('aiTutor.featuresTitle')}
                </h3>
                
                {/* Carousel Container */}
                <div className="relative">
                  {/* Feature Spotlight */}
                  <div 
                    className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500"
                    style={{
                      backgroundColor: 'rgba(10, 20, 60, 0.4)',
                      border: '1px solid rgba(48, 79, 254, 0.15)',
                      boxShadow: '0 0 60px rgba(48, 79, 254, 0.08)',
                    }}
                  >
                    {features[activeFeatureIndex] && (() => {
                      const iconKey = features[activeFeatureIndex].icon as keyof typeof iconMap;
                      const IconComponent = iconMap[iconKey];
                      return (
                        <>
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300"
                            style={{
                              backgroundColor: 'rgba(48, 79, 254, 0.15)',
                              border: '1px solid rgba(48, 79, 254, 0.3)',
                              boxShadow: '0 0 30px rgba(48, 79, 254, 0.2)',
                            }}
                          >
                            {IconComponent && <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />}
                          </div>
                          <h4 className="text-xl font-semibold mb-3 text-foreground">
                            {features[activeFeatureIndex].title}
                          </h4>
                          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                            {features[activeFeatureIndex].description}
                          </p>
                        </>
                      );
                    })()}
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeatureIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeFeatureIndex 
                            ? 'bg-primary w-6' 
                            : 'bg-foreground/20 hover:bg-foreground/40'
                        }`}
                        aria-label={`Go to feature ${index + 1}`}
                        data-testid={`carousel-dot-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY MATTERS - Editorial inline style, no boxes */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-why-matters"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
                {t('whyMatters.title')}
              </h2>
              
              {/* Editorial 2-column inline layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 max-w-2xl mx-auto">
                {(t('whyMatters.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90 leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: USE CASES - Asymmetric layout (1 large + 3 small) */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
              {t('useCases.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Featured use case (Corporate onboarding) */}
              <div 
                className="p-6 rounded-xl mb-5 flex items-start gap-5"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.5)',
                  border: '1px solid rgba(48, 79, 254, 0.25)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.1)',
                }}
                data-testid="use-case-onboarding"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.15)',
                  }}
                >
                  <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {t('useCases.items.onboarding.title')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('useCases.items.onboarding.description')}
                  </p>
                </div>
              </div>
              
              {/* 3 smaller use cases */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {useCaseItems.slice(1).map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(10, 20, 60, 0.35)',
                      border: '1px solid rgba(48, 79, 254, 0.15)',
                    }}
                    data-testid={`use-case-${key}`}
                  >
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 border border-primary/20"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.08)',
                      }}
                    >
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">
                      {t(`useCases.items.${key}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {t(`useCases.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQs */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {t('faq.title')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('faq.lastUpdated')}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem 
                  value="faq-1" 
                  className="rounded-xl px-6 border-0"
                  style={{
                    backgroundColor: 'rgba(10, 26, 47, 0.7)',
                    boxShadow: '0 0 20px rgba(31, 111, 235, 0.08)',
                  }}
                  data-testid="faq-item-1"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                    {t('faq.questions.q1.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q1.answer')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="faq-2" 
                  className="rounded-xl px-6 border-0"
                  style={{
                    backgroundColor: 'rgba(10, 26, 47, 0.7)',
                    boxShadow: '0 0 20px rgba(31, 111, 235, 0.08)',
                  }}
                  data-testid="faq-item-2"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                    {t('faq.questions.q2.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q2.answer')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="faq-3" 
                  className="rounded-xl px-6 border-0"
                  style={{
                    backgroundColor: 'rgba(10, 26, 47, 0.7)',
                    boxShadow: '0 0 20px rgba(31, 111, 235, 0.08)',
                  }}
                  data-testid="faq-item-3"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                    {t('faq.questions.q3.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q3.answer')}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem 
                  value="faq-4" 
                  className="rounded-xl px-6 border-0"
                  style={{
                    backgroundColor: 'rgba(10, 26, 47, 0.7)',
                    boxShadow: '0 0 20px rgba(31, 111, 235, 0.08)',
                  }}
                  data-testid="faq-item-4"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                    {t('faq.questions.q4.question')}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {t('faq.questions.q4.answer')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative z-10"
          data-testid="section-final-cta"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                {t('cta.title')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="px-10"
                  onClick={handleStartClick}
                  data-testid="button-cta-start"
                >
                  {t('cta.ctaStart')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleDemoClick}
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
