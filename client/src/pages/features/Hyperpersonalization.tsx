import { useMemo } from 'react';
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
  ChevronDown
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

        {/* SECTION 3: EXAMPLE - Dynamic Bifurcation Visual (Base course splits to Marco/Laura) */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-example"
        >
          <div className="content-container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('example.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('example.intro')}
              </p>
            </div>
            
            {/* Enhanced Bifurcation Visual */}
            <div className="max-w-5xl mx-auto">
              {/* Base course at top - centered, prominent */}
              <div 
                className="mx-auto max-w-sm px-8 py-5 rounded-2xl text-center relative"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.8)',
                  border: '2px solid rgba(48, 79, 254, 0.5)',
                  boxShadow: '0 0 50px rgba(48, 79, 254, 0.25), 0 0 100px rgba(48, 79, 254, 0.1)',
                }}
                data-testid="example-base-course"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(48, 79, 254, 0.2)',
                    border: '1px solid rgba(48, 79, 254, 0.3)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-lg text-primary">{t('example.baseLesson')}</p>
              </div>
              
              {/* Enhanced Bifurcation connectors with glowing effect */}
              <div className="relative h-24 md:h-32 flex justify-center">
                {/* Center vertical line from base */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 md:h-10 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(48, 79, 254, 0.8) 0%, rgba(48, 79, 254, 0.4) 100%)',
                    boxShadow: '0 0 12px rgba(48, 79, 254, 0.6), 0 0 24px rgba(48, 79, 254, 0.3)',
                  }}
                />
                
                {/* Glowing split node */}
                <div 
                  className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: 'rgba(48, 79, 254, 0.8)',
                    boxShadow: '0 0 15px rgba(48, 79, 254, 0.8), 0 0 30px rgba(48, 79, 254, 0.5)',
                  }}
                />
                
                {/* Left diagonal line (to Marco) */}
                <div 
                  className="absolute top-10 md:top-12 left-[15%] md:left-[22%] w-1 h-14 md:h-20 rounded-full origin-top"
                  style={{
                    background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.5) 0%, rgba(34, 197, 94, 0.8) 100%)',
                    boxShadow: '0 0 12px rgba(34, 197, 94, 0.5), 0 0 24px rgba(34, 197, 94, 0.3)',
                    transform: 'rotate(-25deg)',
                  }}
                />
                
                {/* Right diagonal line (to Laura) */}
                <div 
                  className="absolute top-10 md:top-12 right-[15%] md:right-[22%] w-1 h-14 md:h-20 rounded-full origin-top"
                  style={{
                    background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.8) 100%)',
                    boxShadow: '0 0 12px rgba(168, 85, 247, 0.5), 0 0 24px rgba(168, 85, 247, 0.3)',
                    transform: 'rotate(25deg)',
                  }}
                />
              </div>
              
              {/* Marco and Laura - larger cards with more spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
                {/* Marco - Left path */}
                <div 
                  className="p-6 md:p-8 rounded-2xl relative"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.6)',
                    border: '2px solid rgba(34, 197, 94, 0.4)',
                    boxShadow: '0 0 40px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(34, 197, 94, 0.1)',
                  }}
                  data-testid="example-marco"
                >
                  {/* Glow accent */}
                  <div 
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.6), transparent)',
                    }}
                  />
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{
                        backgroundColor: 'rgba(34, 197, 94, 0.2)',
                        border: '2px solid rgba(34, 197, 94, 0.4)',
                        color: 'rgb(134, 239, 172)',
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)',
                      }}
                    >
                      M
                    </div>
                    <div>
                      <p className="font-bold text-lg">{t('example.marco.name')}</p>
                      <p className="text-sm text-muted-foreground">{t('example.marco.profile')}</p>
                    </div>
                  </div>
                  
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.05)',
                      border: '1px solid rgba(34, 197, 94, 0.15)',
                    }}
                  >
                    <p className="text-sm md:text-base leading-relaxed text-foreground/85">
                      {t('example.marco.result')}
                    </p>
                  </div>
                </div>
                
                {/* Laura - Right path */}
                <div 
                  className="p-6 md:p-8 rounded-2xl relative"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.6)',
                    border: '2px solid rgba(168, 85, 247, 0.4)',
                    boxShadow: '0 0 40px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(168, 85, 247, 0.1)',
                  }}
                  data-testid="example-laura"
                >
                  {/* Glow accent */}
                  <div 
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), transparent)',
                    }}
                  />
                  
                  <div className="flex items-center gap-4 mb-5">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{
                        backgroundColor: 'rgba(168, 85, 247, 0.2)',
                        border: '2px solid rgba(168, 85, 247, 0.4)',
                        color: 'rgb(216, 180, 254)',
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
                      }}
                    >
                      L
                    </div>
                    <div>
                      <p className="font-bold text-lg">{t('example.laura.name')}</p>
                      <p className="text-sm text-muted-foreground">{t('example.laura.profile')}</p>
                    </div>
                  </div>
                  
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(168, 85, 247, 0.05)',
                      border: '1px solid rgba(168, 85, 247, 0.15)',
                    }}
                  >
                    <p className="text-sm md:text-base leading-relaxed text-foreground/85">
                      {t('example.laura.result')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Conclusion */}
              <p className="text-center text-xl font-semibold text-primary mt-12">
                {t('example.conclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: AI TUTOR - Product highlight with better spacing */}
        <section 
          className="py-24 md:py-32 lg:py-36 relative z-10"
          data-testid="section-ai-tutor"
        >
          <div className="content-container">
            <div className="max-w-6xl mx-auto">
              {/* Two-column layout: Text left, Mock right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
                {/* Left - Text content with larger fonts */}
                <div className="lg:sticky lg:top-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(48, 79, 254, 0.15)',
                        border: '1px solid rgba(48, 79, 254, 0.3)',
                        boxShadow: '0 0 25px rgba(48, 79, 254, 0.15)',
                      }}
                    >
                      <Bot className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">AI Tutor</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
                    {t('aiTutor.title')}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    {t('aiTutor.subtitle')}
                  </p>
                  
                  {/* Features list - inline checkmarks, no boxes */}
                  <div data-testid="ai-tutor-features">
                    <h3 className="text-base font-semibold mb-5 text-foreground/90">
                      {t('aiTutor.featuresTitle')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {(t('aiTutor.features', { returnObjects: true }) as string[]).map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right - Mock visual (course fragment + AI bubble) */}
                <div 
                  className="rounded-2xl p-6 md:p-8 relative"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.7)',
                    border: '1px solid rgba(48, 79, 254, 0.25)',
                    boxShadow: '0 0 60px rgba(48, 79, 254, 0.12), 0 20px 40px rgba(0, 0, 0, 0.2)',
                  }}
                  data-testid="ai-tutor-mock"
                >
                  {/* Course content fragment */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-medium">Lesson content</p>
                    <div 
                      className="p-4 rounded-xl text-sm md:text-base text-foreground/70 leading-relaxed"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      "The key to effective project management is understanding resource allocation and timeline dependencies..."
                    </div>
                  </div>
                  
                  {/* AI Tutor response bubble */}
                  <div className="flex gap-4 items-start">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: 'rgba(48, 79, 254, 0.25)',
                        border: '1px solid rgba(48, 79, 254, 0.4)',
                        boxShadow: '0 0 15px rgba(48, 79, 254, 0.2)',
                      }}
                    >
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div 
                      className="flex-1 p-4 rounded-xl"
                      style={{
                        backgroundColor: 'rgba(48, 79, 254, 0.12)',
                        border: '1px solid rgba(48, 79, 254, 0.25)',
                      }}
                    >
                      <p className="text-xs text-primary mb-2 font-semibold uppercase tracking-wide">AI Tutor</p>
                      <p className="text-foreground/85 italic text-sm md:text-base leading-relaxed">
                        "Think of it like coaching a sports team - you need to know your players' strengths and plan the game accordingly."
                      </p>
                    </div>
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
