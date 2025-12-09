import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  RefreshCw, 
  Languages, 
  BarChart3, 
  Bot,
  FileText,
  Rocket,
  Users,
  Package,
  Code,
  Shield,
  Quote,
  ArrowRight,
  Play,
  Layers,
  Copy,
  UserCheck,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useState } from 'react';

export default function Automation() {
  const { t, i18n } = useTranslation('automation');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleTryClick = () => {
    analytics.ctaClick('try_learnpack', 'automation_page');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const handleDemoClick = () => {
    analytics.ctaClick('watch_demo', 'automation_page');
    window.open('https://youtu.be/dBjKIashs4Y', '_blank');
  };

  const handleBookDemoClick = () => {
    analytics.ctaClick('book_demo', 'automation_page');
    window.location.href = '/contact';
  };

  const problemItems = [
    { key: 'scratch', icon: Layers },
    { key: 'rebuild', icon: RefreshCw },
    { key: 'copypaste', icon: Copy },
    { key: 'chasing', icon: UserCheck },
    { key: 'questions', icon: HelpCircle }
  ];

  const featureItems = [
    { key: 'generation', icon: Zap },
    { key: 'editing', icon: RefreshCw },
    { key: 'translations', icon: Languages },
    { key: 'analytics', icon: BarChart3 }
  ];

  const howItWorksSteps = [
    { key: 'step1', icon: FileText, number: '01' },
    { key: 'step2', icon: Bot, number: '02' },
    { key: 'step3', icon: Rocket, number: '03' }
  ];

  const featureTableItems = [
    { key: 'structure' },
    { key: 'wording' },
    { key: 'support' },
    { key: 'scorm' },
    { key: 'localization' }
  ];

  const useCaseItems = [
    { key: 'employee', icon: Users },
    { key: 'product', icon: Package },
    { key: 'technical', icon: Code },
    { key: 'compliance', icon: Shield }
  ];

  const metricItems = [
    { key: 'cost', value: '80%', color: 'text-emerald-400' },
    { key: 'completion', value: '2x', color: 'text-blue-400' },
    { key: 'speed', value: '<1hr', color: 'text-violet-400' },
    { key: 'dropout', value: '50%', color: 'text-amber-400' }
  ];

  const faqItems = [
    { key: 'formats' },
    { key: 'lms' },
    { key: 'update' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack End-to-End Automation",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('meta.description'),
    "featureList": [
      "AI Course Generation",
      "Block-Level AI Editing", 
      "Built-in AI Tutor",
      "Real-Time Analytics",
      "SCORM and LMS Integration",
      "Multilingual Support"
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
        <link rel="canonical" href="https://learnpack.co/features/automation" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section - Clean, Corporate, No Stars */}
        <section 
          className="relative min-h-[60vh] flex items-center py-20 md:py-28 lg:py-32"
          data-testid="section-automation-hero"
        >
          {/* Subtle gradient background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.03) 0%, transparent 50%)'
            }}
          />

          <div className="content-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                data-testid="heading-automation-hero"
              >
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleTryClick}
                  data-testid="button-hero-try"
                >
                  {t('hero.ctaTry')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleDemoClick}
                  data-testid="button-hero-demo"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {t('hero.ctaDemo')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Definition - Elegant centered text without box */}
        <section className="py-16 md:py-20" data-testid="section-definition">
          <div className="content-container">
            <p className="text-lg md:text-xl text-center leading-relaxed text-muted-foreground max-w-4xl mx-auto">
              {t('definition.text')}
            </p>
          </div>
        </section>

        {/* What you stop doing manually - 3 column list layout */}
        <section 
          className="py-20 md:py-24 lg:py-28"
          data-testid="section-problems"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-problems">
                {t('problems.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('problems.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 md:grid-cols-3 max-w-5xl mx-auto">
              {problemItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="flex flex-col items-center text-center md:items-start md:text-left"
                  data-testid={`item-problem-${key}`}
                >
                  <div className="p-2 rounded-lg text-primary/70 mb-3">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {t(`problems.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`problems.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Icon + text strip without cards */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-features"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-features">
                {t('features.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 md:grid-cols-2 max-w-4xl mx-auto">
              {featureItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="flex items-start gap-4"
                  data-testid={`item-feature-${key}`}
                >
                  <div className="p-2 rounded-lg text-primary flex-shrink-0">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(`features.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`features.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Horizontal timeline with round numbers */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-how-it-works"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                {t('howItWorks.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-5xl mx-auto gap-8 md:gap-4">
              {howItWorksSteps.map(({ key, icon: Icon, number }, index) => (
                <div 
                  key={key}
                  className="flex-1 relative flex flex-col items-center text-center"
                  data-testid={`step-${key}`}
                >
                  {/* Connector line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-border/40" />
                  )}
                  
                  {/* Round number */}
                  <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-sm font-semibold text-primary">{number}</span>
                  </div>
                  
                  <Icon className="h-5 w-5 text-muted-foreground mb-3" strokeWidth={1.5} />
                  
                  <h3 className="font-semibold mb-2 text-sm">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-[200px]">
                    {t(`howItWorks.steps.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                variant="outline"
                onClick={handleDemoClick}
                data-testid="button-how-it-works-cta"
              >
                <Play className="mr-2 h-4 w-4" />
                {t('howItWorks.cta')}
              </Button>
            </div>
          </div>
        </section>

        {/* Automates vs Control - Clean 2-column table */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-feature-table"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-feature-table">
                {t('featureTable.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('featureTable.subtitle')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Table header */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-4 border-b border-border/30">
                <div className="text-sm font-semibold text-primary">{t('featureTable.columnAutomated')}</div>
                <div className="text-sm font-semibold text-muted-foreground">{t('featureTable.columnControl')}</div>
              </div>
              
              {/* Table rows */}
              <div className="space-y-6">
                {featureTableItems.map(({ key }) => (
                  <div 
                    key={key}
                    className="grid grid-cols-2 gap-4"
                    data-testid={`table-row-${key}`}
                  >
                    <div>
                      <h4 className="font-medium text-sm mb-1">{t(`featureTable.items.${key}.automated`)}</h4>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t(`featureTable.items.${key}.control`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Minimal icon circles */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-use-cases">
                {t('useCases.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('useCases.subtitle')}
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="text-center"
                  data-testid={`item-use-case-${key}`}
                >
                  <div className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">
                    {t(`useCases.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(`useCases.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics - Large numbers without boxes */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-metrics"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-metrics">
                {t('metrics.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('metrics.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto text-center">
              {metricItems.map(({ key, value, color }) => (
                <div 
                  key={key}
                  data-testid={`metric-${key}`}
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${color}`}>
                    {value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(`metrics.items.${key}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Cleaner, with case study CTA */}
        <section 
          className="py-16 md:py-20 border-t border-border/20"
          data-testid="section-testimonial"
        >
          <div className="content-container">
            <div className="max-w-2xl mx-auto text-center">
              <Quote className="h-8 w-8 text-primary/20 mx-auto mb-4" />
              <blockquote className="text-lg md:text-xl font-medium mb-4 leading-relaxed">
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{t('testimonial.author')}</span>
                <span className="mx-2">·</span>
                <span>{t('testimonial.company')}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/case-studies'}
                data-testid="button-testimonial-case-study"
              >
                {t('testimonial.cta')}
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-faq">
                {t('faq.title')}
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqItems.map(({ key }, index) => (
                <div 
                  key={key}
                  className="border-b border-border/30 pb-4"
                  data-testid={`faq-item-${key}`}
                >
                  <button
                    className="w-full flex items-center justify-between text-left py-2 group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`faq-button-${key}`}
                  >
                    <span className="font-medium pr-4">{t(`faq.items.${key}.question`)}</span>
                    <ChevronDown 
                      className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openFaq === index && (
                    <p className="text-sm text-muted-foreground pt-2 pb-2 leading-relaxed">
                      {t(`faq.items.${key}.answer`)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 border-t border-border/20"
          data-testid="section-final-cta"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56, 189, 248, 0.04) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-final-cta">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleTryClick}
                data-testid="button-final-try"
              >
                {t('finalCta.ctaTry')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleBookDemoClick}
                data-testid="button-final-demo"
              >
                {t('finalCta.ctaDemo')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
