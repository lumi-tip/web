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
  Building2,
  UserCircle,
  Sparkles
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
      Array.from({ length: 60 }, (_, i) => ({
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
        {/* Starfield background */}
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

        {/* Blue glows */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />
        <div 
          className="absolute top-[40%] left-[-10%] w-[700px] h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(200 80% 60% / 0.06) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />

        {/* SECTION 1: HERO - Centered, focused on system */}
        <section 
          className="py-20 md:py-28 lg:py-32"
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

        {/* SECTION 2: SYSTEM - 3 Steps (The core differentiator) */}
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
            
            {/* 3 Steps - Horizontal on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1: Build base course */}
              <div className="relative">
                <div 
                  className="p-6 rounded-xl border border-primary/15 h-full"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.4)',
                    boxShadow: '0 0 25px rgba(48, 79, 254, 0.08)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-primary/25"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      }}
                    >
                      <Building2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Step 1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('system.step1.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('system.step1.description')}
                  </p>
                </div>
              </div>
              
              {/* Step 2: Learner profiling */}
              <div className="relative">
                <div 
                  className="p-6 rounded-xl border border-primary/15 h-full"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.4)',
                    boxShadow: '0 0 25px rgba(48, 79, 254, 0.08)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-primary/25"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      }}
                    >
                      <UserCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Step 2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('system.step2.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('system.step2.description')}
                  </p>
                </div>
              </div>
              
              {/* Step 3: Adapt the course */}
              <div className="relative">
                <div 
                  className="p-6 rounded-xl border border-primary/15 h-full"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.4)',
                    boxShadow: '0 0 25px rgba(48, 79, 254, 0.08)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-primary/25"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.12)',
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Step 3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t('system.step3.title')}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('system.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: EXAMPLE - Marco & Laura (KEY differentiator) */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-example"
        >
          {/* Subtle background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(31, 111, 235, 0.02) 0%, transparent 50%, rgba(31, 111, 235, 0.02) 100%)',
            }}
            aria-hidden="true"
          />
          
          <div className="content-container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('example.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('example.intro')}
              </p>
            </div>
            
            {/* Two personas side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {/* Marco */}
              <div 
                className="p-6 rounded-xl border border-primary/20"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.5)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.1)',
                }}
                data-testid="example-marco"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.2)',
                      color: 'rgb(134, 239, 172)',
                    }}
                  >
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{t('example.marco.name')}</p>
                    <p className="text-sm text-muted-foreground">{t('example.marco.profile')}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {t('example.marco.result')}
                </p>
              </div>
              
              {/* Laura */}
              <div 
                className="p-6 rounded-xl border border-primary/20"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.5)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.1)',
                }}
                data-testid="example-laura"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                    style={{
                      backgroundColor: 'rgba(168, 85, 247, 0.2)',
                      color: 'rgb(216, 180, 254)',
                    }}
                  >
                    L
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{t('example.laura.name')}</p>
                    <p className="text-sm text-muted-foreground">{t('example.laura.profile')}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {t('example.laura.result')}
                </p>
              </div>
            </div>
            
            {/* Conclusion */}
            <p className="text-center text-lg font-medium text-primary">
              {t('example.conclusion')}
            </p>
          </div>
        </section>

        {/* SECTION 4: AI TUTOR - Repositioned as support tool */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-ai-tutor"
        >
          <div className="content-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('aiTutor.subtitle')}
                  </p>
                </div>
                
                {/* Right - Bullets */}
                <div>
                  <ul className="space-y-4">
                    {(t('aiTutor.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY MATTERS - Simple bullets */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-why-matters"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                {t('whyMatters.title')}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {(t('whyMatters.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg text-left"
                    style={{
                      backgroundColor: 'rgba(31, 111, 235, 0.05)',
                    }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: USE CASES - 2x2 grid */}
        <section 
          className="py-16 md:py-20 relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
              {t('useCases.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="p-5 rounded-xl border border-primary/15 flex items-start gap-4"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  }}
                  data-testid={`use-case-${key}`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/25"
                    style={{
                      backgroundColor: 'rgba(31, 111, 235, 0.1)',
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      {t(`useCases.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {t(`useCases.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
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
