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
  X,
  ChevronRight
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
        {/* SECTION 1: HERO - 2-column layout with contextual AI Tutor preview */}
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

              {/* Right column - Contextual AI Tutor preview with course text */}
              <div className="lg:col-span-5">
                <div className="space-y-4">
                  {/* Course content block */}
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <p className="mb-2">Chapter 3: Building Web APIs</p>
                    <p className="text-foreground/70">
                      An API (Application Programming Interface) allows different software systems to communicate. 
                      <span className="bg-primary/20 px-1 mx-1">REST endpoints use HTTP methods like GET, POST, PUT, and DELETE</span>
                      to perform operations on resources.
                    </p>
                  </div>
                  {/* AI Tutor chat bubble */}
                  <div className="flex gap-3 items-start mt-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">AI Tutor</p>
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        "I see you are working on REST endpoints. Do you want a simpler explanation or an example for a banking API?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX - With label, reduced width */}
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
                className="px-8 py-10 md:px-10 md:py-10 text-center"
                style={{ backgroundColor: '#F8F9FB', color: '#1a1a2e' }}
              >
                <p className="text-lg md:text-xl leading-relaxed">
                  {t('definition.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: UNIQUE VALUE - 2-column with diagram */}
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
              
              {/* Right column - Diagram with 3 chips pointing to one box */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-6">
                  {/* Left chips stacked */}
                  <div className="space-y-3">
                    <div className="px-4 py-2 text-sm rounded-full bg-primary/10 text-foreground/80 text-center">
                      {t('uniqueValue.diagram.levels')}
                    </div>
                    <div className="px-4 py-2 text-sm rounded-full bg-primary/10 text-foreground/80 text-center">
                      {t('uniqueValue.diagram.roles')}
                    </div>
                    <div className="px-4 py-2 text-sm rounded-full bg-primary/10 text-foreground/80 text-center">
                      {t('uniqueValue.diagram.goals')}
                    </div>
                  </div>
                  {/* Arrow */}
                  <ChevronRight className="w-6 h-6 text-primary flex-shrink-0" />
                  {/* Right box */}
                  <div className="px-5 py-4 text-sm font-medium bg-primary/20 text-foreground rounded-lg text-center">
                    {t('uniqueValue.diagram.result')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS - Circular numbered icons, better spacing */}
        <section 
          className="py-24 md:py-28 lg:py-32"
          style={{ backgroundColor: '#F3F7FF' }}
          data-testid="section-how-it-works"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-20 text-center"
                style={{ color: '#1a1a2e' }}
              >
                {t('howItWorks.title')}
              </h2>
              
              <div className="space-y-16">
                {howItWorksSteps.map((step) => (
                  <div 
                    key={step.key}
                    className="flex gap-6 items-start"
                  >
                    {/* Circular numbered icon */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                      style={{ backgroundColor: '#0ea5e9', color: '#ffffff' }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 
                        className="text-xl font-bold mb-3"
                        style={{ color: '#1a1a2e' }}
                      >
                        {t(`howItWorks.steps.${step.key}.title`)}
                      </h3>
                      <p 
                        className="text-lg leading-relaxed"
                        style={{ color: '#4a4a5a' }}
                      >
                        {t(`howItWorks.steps.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EXAMPLES - 3 distinct rows with titles and visuals */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-examples"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 text-center">
              {t('examples.title')}
            </h2>
            
            <div className="space-y-16 max-w-4xl mx-auto">
              {/* Row 1: Simpler explanations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t('examples.scenarios.scenario1.title')}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t('examples.scenarios.scenario1.text')}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-full">
                      <p className="text-muted-foreground line-through text-xs mb-2">
                        The HTTP protocol utilizes various request methods...
                      </p>
                      <p className="text-foreground/80 text-sm pl-3 border-l-2 border-primary">
                        GET retrieves data. POST sends data. Simple.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Role-based examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-full">
                      <p className="text-muted-foreground text-xs mb-2">
                        Generic example: "Imagine a store..."
                      </p>
                      <p className="text-foreground/80 text-sm pl-3 border-l-2 border-primary">
                        For Sales: "When a prospect asks for pricing..."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-semibold mb-3">
                    {t('examples.scenarios.scenario2.title')}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t('examples.scenarios.scenario2.text')}
                  </p>
                </div>
              </div>

              {/* Row 3: Guided reasoning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {t('examples.scenarios.scenario3.title')}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t('examples.scenarios.scenario3.text')}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="w-full">
                      <p className="text-foreground/80 text-sm">
                        "What happens if the input is null? Think about edge cases..."
                      </p>
                    </div>
                  </div>
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
