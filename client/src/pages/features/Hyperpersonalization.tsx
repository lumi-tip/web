import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Stepper, Step } from '@/components/Stepper';
import { 
  Bot,
  Users,
  Code,
  Shield,
  ShoppingBag,
  ArrowRight,
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

  const useCaseItems = [
    { key: 'onboarding', icon: Users },
    { key: 'technical', icon: Code },
    { key: 'compliance', icon: Shield },
    { key: 'sales', icon: ShoppingBag }
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
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

      {/* Starfield background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-0"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'hsl(var(--primary))',
              animationName: 'starTwinkleUnified',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <Header />

      <main className="relative z-10">
        {/* SECTION 1: HERO - 2-column layout with styled AI Tutor example card */}
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

              {/* Right column - Dark navy styled card with AI Tutor example */}
              <div className="lg:col-span-5">
                <div 
                  className="rounded-xl p-6 relative"
                  style={{
                    backgroundColor: '#0A1125',
                    boxShadow: '0 0 60px rgba(48, 79, 254, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  }}
                  data-testid="card-ai-tutor-example"
                >
                  {/* Label */}
                  <p 
                    className="text-xs font-medium tracking-wider text-blue-400/80 mb-4 uppercase"
                    data-testid="text-example-label"
                  >
                    {t('hero.exampleLabel')}
                  </p>
                  
                  {/* Course excerpt */}
                  <p 
                    className="text-sm text-white/70 leading-relaxed mb-3"
                    data-testid="text-course-excerpt"
                  >
                    {t('hero.courseExcerpt')}
                  </p>
                  
                  {/* Highlighted line */}
                  <p 
                    className="text-sm text-white bg-blue-500/20 px-3 py-2 rounded mb-5"
                    data-testid="text-highlighted-line"
                  >
                    {t('hero.highlightedLine')}
                  </p>
                  
                  {/* AI Tutor chat bubble */}
                  <div className="flex gap-3 items-start" data-testid="container-ai-tutor-bubble">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(48, 79, 254, 0.3)' }}
                    >
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-blue-400/80 mb-1">AI Tutor</p>
                      <p className="text-white text-sm leading-relaxed" data-testid="text-ai-tutor-message">
                        "{t('hero.aiTutorMessage')}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX - Dark navy with blue border and glow */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-definition"
        >
          <div className="content-container">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4 text-center uppercase">
                {t('definition.label')}
              </p>
              <div 
                className="px-8 py-10 md:px-10 md:py-10 text-center rounded-xl relative"
                style={{ 
                  backgroundColor: '#0E1629',
                  border: '1px solid #304FFE',
                  boxShadow: '0 0 40px rgba(48, 79, 254, 0.1)',
                }}
              >
                <p className="text-lg md:text-xl leading-relaxed text-white">
                  {t('definition.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: UNIQUE VALUE - 2-column with 4-chip diagram */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-unique-value"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              
              {/* Right column - 4 stacked chips with glow */}
              <div className="flex items-center justify-center">
                <div 
                  className="relative p-8"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(48, 79, 254, 0.1) 0%, transparent 70%)',
                  }}
                >
                  <div className="space-y-4 flex flex-col items-center">
                    <div 
                      className="px-6 py-3 text-sm rounded-full text-center"
                      style={{ backgroundColor: 'rgba(48, 79, 254, 0.15)', color: 'hsl(var(--foreground) / 0.9)' }}
                    >
                      {t('uniqueValue.diagram.levels')}
                    </div>
                    <div 
                      className="px-6 py-3 text-sm rounded-full text-center"
                      style={{ backgroundColor: 'rgba(48, 79, 254, 0.15)', color: 'hsl(var(--foreground) / 0.9)' }}
                    >
                      {t('uniqueValue.diagram.roles')}
                    </div>
                    <div 
                      className="px-6 py-3 text-sm rounded-full text-center"
                      style={{ backgroundColor: 'rgba(48, 79, 254, 0.15)', color: 'hsl(var(--foreground) / 0.9)' }}
                    >
                      {t('uniqueValue.diagram.goals')}
                    </div>
                    {/* Emphasized result chip */}
                    <div 
                      className="px-8 py-4 text-base font-medium rounded-lg text-center mt-2"
                      style={{ 
                        backgroundColor: 'rgba(48, 79, 254, 0.25)', 
                        color: 'hsl(var(--foreground))',
                        border: '1px solid rgba(48, 79, 254, 0.4)',
                        boxShadow: '0 0 20px rgba(48, 79, 254, 0.2)',
                      }}
                    >
                      {t('uniqueValue.diagram.result')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS - Matching homepage style with stars and Stepper */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-how-it-works"
        >
          {/* Background glows */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.04) 30%, hsl(var(--primary) / 0.02) 50%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />
          
          <div className="content-container relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('howItWorks.title')}
              </h2>
            </div>
            
            <Stepper>
              <Step title={t('howItWorks.steps.step1.title')}>
                {t('howItWorks.steps.step1.description')}
              </Step>
              <Step title={t('howItWorks.steps.step2.title')}>
                {t('howItWorks.steps.step2.description')}
              </Step>
              <Step title={t('howItWorks.steps.step3.title')}>
                {t('howItWorks.steps.step3.description')}
              </Step>
            </Stepper>
          </div>
        </section>

        {/* SECTION 5: EXAMPLES - 3 equal horizontal cards */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-examples"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14 text-center">
              {t('examples.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Card 1: Simpler explanations */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'hsl(var(--foreground) / 0.03)',
                  border: '1px solid hsl(var(--foreground) / 0.08)',
                  boxShadow: '0 0 30px hsl(var(--primary) / 0.05)',
                }}
                data-testid="card-example-1"
              >
                <h3 className="text-lg font-semibold mb-3" data-testid="text-example-title-1">
                  {t('examples.scenarios.scenario1.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-example-description-1">
                  {t('examples.scenarios.scenario1.text')}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-foreground/10">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm italic text-foreground/70" data-testid="text-example-response-1">
                    {t('examples.scenarios.scenario1.response')}
                  </p>
                </div>
              </div>

              {/* Card 2: Role-based examples */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'hsl(var(--foreground) / 0.03)',
                  border: '1px solid hsl(var(--foreground) / 0.08)',
                  boxShadow: '0 0 30px hsl(var(--primary) / 0.05)',
                }}
                data-testid="card-example-2"
              >
                <h3 className="text-lg font-semibold mb-3" data-testid="text-example-title-2">
                  {t('examples.scenarios.scenario2.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-example-description-2">
                  {t('examples.scenarios.scenario2.text')}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-foreground/10">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm italic text-foreground/70" data-testid="text-example-response-2">
                    {t('examples.scenarios.scenario2.response')}
                  </p>
                </div>
              </div>

              {/* Card 3: Guided reasoning */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'hsl(var(--foreground) / 0.03)',
                  border: '1px solid hsl(var(--foreground) / 0.08)',
                  boxShadow: '0 0 30px hsl(var(--primary) / 0.05)',
                }}
                data-testid="card-example-3"
              >
                <h3 className="text-lg font-semibold mb-3" data-testid="text-example-title-3">
                  {t('examples.scenarios.scenario3.title')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-example-description-3">
                  {t('examples.scenarios.scenario3.text')}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-foreground/10">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm italic text-foreground/70" data-testid="text-example-response-3">
                    {t('examples.scenarios.scenario3.response')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: IMPACT - Larger text, better readability */}
        <section 
          className="py-20 md:py-24"
          data-testid="section-impact"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
                {t('impact.title')}
              </h2>
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
                {t('impact.text')}
              </p>
              <p className="text-sm text-muted-foreground/70 italic">
                {t('impact.note')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES - 4-column minimal with shorter text */}
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

        {/* SECTION 8: COMPARISON - With vertical divider and icons */}
        <section 
          className="py-16 md:py-20 mb-8"
          data-testid="section-comparison"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
              {t('comparison.title')}
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
                {/* Vertical divider (visible on md+) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
                
                {/* Static learning column */}
                <div className="pr-0 md:pr-10">
                  <h3 className="text-lg font-semibold mb-5 text-muted-foreground">
                    {t('comparison.static.title')}
                  </h3>
                  <ul className="space-y-4">
                    {(t('comparison.static.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <X className="w-4 h-4 flex-shrink-0 text-muted-foreground/50" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Adaptive learning column */}
                <div className="pl-0 md:pl-10">
                  <h3 className="text-lg font-semibold mb-5 text-primary">
                    {t('comparison.adaptive.title')}
                  </h3>
                  <ul className="space-y-4">
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
          </div>
        </section>

        {/* SECTION 9: TESTIMONIAL - Larger italic quote, separate attribution */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-testimonial"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl italic text-foreground/90 mb-8 leading-relaxed">
                "{t('testimonial.quote')}"
              </blockquote>
              <p className="text-sm text-muted-foreground/70">
                {t('testimonial.author')}, {t('testimonial.company')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA - Wider primary button, more padding */}
        <section 
          className="py-28 md:py-32 lg:py-36"
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
