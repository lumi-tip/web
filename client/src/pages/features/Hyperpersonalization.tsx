import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Bot,
  Brain,
  Lightbulb,
  Users,
  Code,
  Shield,
  ShoppingBag,
  ArrowRight,
  BookOpen,
  Compass,
  Check,
  X
} from 'lucide-react';
import { analytics } from '@/lib/analytics';

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

  const howItWorksSteps = [
    { key: 'step1', icon: BookOpen, number: '1' },
    { key: 'step2', icon: Brain, number: '2' },
    { key: 'step3', icon: Compass, number: '3' }
  ];

  const useCaseItems = [
    { key: 'onboarding', icon: Users },
    { key: 'technical', icon: Code },
    { key: 'compliance', icon: Shield },
    { key: 'sales', icon: ShoppingBag }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Hyperpersonalized Learning",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('meta.description'),
    "featureList": [
      "AI Tutor",
      "Real-time Adaptive Support",
      "Contextual Guidance",
      "Personalized Explanations",
      "Intelligent Tutoring",
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
        <link rel="canonical" href="https://learnpack.co/features/hyperpersonalized-learning" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* SECTION 1: HERO - 2-column layout, text-focused */}
        <section 
          className="py-28 md:py-36 lg:py-44"
          data-testid="section-hyperpersonalization-hero"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left column - 55% */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug"
                  data-testid="heading-hyperpersonalization-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

              {/* Right column - 45% - Simple text-based AI Tutor preview */}
              <div className="lg:col-span-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Bot className="w-6 h-6 text-primary" />
                    <span className="font-medium">AI Tutor</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Reading: Introduction to APIs
                  </p>
                  <p className="text-foreground/80 leading-relaxed pl-9">
                    "I see you're working on REST endpoints. Would you like me to explain how HTTP methods work?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX - Plain text block, soft gray background */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-definition"
        >
          <div className="content-container">
            <div 
              className="max-w-3xl mx-auto px-8 py-10 md:px-12 md:py-12 text-center"
              style={{ backgroundColor: '#F8F9FB', color: '#1a1a2e' }}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                {t('definition.text')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: UNIQUE VALUE - 2-column with simple bullet list */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-unique-value"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left column - headline and bullets */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  {t('uniqueValue.title')}
                </h2>
                <ul className="space-y-5">
                  {(t('uniqueValue.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg text-foreground/90 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right column - simple abstract visual without borders */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm space-y-3">
                  <div className="h-3 rounded-full w-full" style={{ backgroundColor: 'rgba(56, 189, 248, 0.3)' }} />
                  <div className="h-3 rounded-full w-4/5 mx-auto" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }} />
                  <div className="h-3 rounded-full w-3/5 mx-auto" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)' }} />
                  <p className="text-xs text-muted-foreground text-center pt-4">Adaptive learning blocks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS - Story format, soft blue background, inline icons */}
        <section 
          className="py-24 md:py-28 lg:py-32"
          style={{ backgroundColor: '#F3F7FF' }}
          data-testid="section-how-it-works"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center"
                style={{ color: '#1a1a2e' }}
              >
                {t('howItWorks.title')}
              </h2>
              
              <div className="space-y-14">
                {howItWorksSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.key}
                      className="flex gap-5 items-start"
                    >
                      <Icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0ea5e9' }} />
                      <div className="flex-1">
                        <h3 
                          className="text-xl font-semibold mb-2"
                          style={{ color: '#1a1a2e' }}
                        >
                          {step.number}. {t(`howItWorks.steps.${step.key}.title`)}
                        </h3>
                        <p 
                          className="text-lg leading-relaxed"
                          style={{ color: '#4a4a5a' }}
                        >
                          {t(`howItWorks.steps.${step.key}.description`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EXAMPLES - Zig-zag narrative, text-focused */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-examples"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center">
              {t('examples.title')}
            </h2>
            
            <div className="space-y-20 max-w-4xl mx-auto">
              {/* Row 1: Text left, Visual hint right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {t('examples.scenarios.scenario1.text')}
                  </p>
                </div>
                <div className="order-1 md:order-2 text-sm text-muted-foreground">
                  <p className="mb-2 text-xs">AI Tutor rewriting content</p>
                  <p className="line-through text-xs">Complex technical definition...</p>
                  <p className="text-foreground/80 mt-1">Simple, clear explanation</p>
                </div>
              </div>

              {/* Row 2: Visual hint left, Text right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-1 text-sm text-muted-foreground">
                  <p className="mb-2 text-xs">Role-specific example</p>
                  <p className="text-foreground/80">Industry-tailored explanation for Sales</p>
                </div>
                <div className="order-2">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {t('examples.scenarios.scenario2.text')}
                  </p>
                </div>
              </div>

              {/* Row 3: Text left, Visual hint right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {t('examples.scenarios.scenario3.text')}
                  </p>
                </div>
                <div className="order-1 md:order-2 text-sm text-muted-foreground">
                  <p className="mb-2 text-xs">Socratic-style guidance</p>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Think about the edge case...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: IMPACT - Editorial paragraph style */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-impact"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                {t('impact.title')}
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
                {t('impact.text')}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {t('impact.note')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES - 4-column minimal, just icons and text */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14 text-center">
              {t('useCases.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCaseItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.key}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">
                      {t(`useCases.items.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`useCases.items.${item.key}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 8: MINI COMPARISON - Ultra minimal, border-left only */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-comparison"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
              {t('comparison.title')}
            </h2>
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Static learning column */}
              <div className="border-l-2 border-muted-foreground/30 pl-6">
                <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                  {t('comparison.static.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('comparison.static.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <X className="w-4 h-4 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Adaptive learning column */}
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {t('comparison.adaptive.title')}
                </h3>
                <ul className="space-y-3">
                  {(t('comparison.adaptive.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: TESTIMONIAL - Plain centered quote */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-testimonial"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl italic text-foreground/90 mb-6 leading-relaxed">
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="text-muted-foreground">
                <span>— {t('testimonial.author')}, {t('testimonial.company')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA - Simple 2-column */}
        <section 
          className="py-24 md:py-28 lg:py-32"
          data-testid="section-final-cta"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  {t('cta.title')}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button 
                  size="lg" 
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
