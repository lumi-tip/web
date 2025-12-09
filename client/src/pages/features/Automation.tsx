import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Zap, 
  RefreshCw, 
  Languages, 
  Share2, 
  BarChart3, 
  Bot,
  DollarSign,
  Eye,
  TrendingDown,
  HeadphonesIcon,
  FileText,
  MessageSquare,
  Rocket,
  Users,
  Package,
  Code,
  Shield,
  Quote,
  ArrowRight
} from 'lucide-react';
import { analytics } from '@/lib/analytics';

export default function Automation() {
  const { t, i18n } = useTranslation('automation');

  const handleTryClick = () => {
    analytics.ctaClick('try_learnpack', 'automation_page');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'automation_page');
    window.location.href = '/contact';
  };

  const stars = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
      size: Math.random() > 0.7 ? '2px' : Math.random() > 0.4 ? '1.5px' : '1px',
      opacity: 0.3 + Math.random() * 0.4
    }));
  }, []);

  const problemItems = [
    { key: 'expensive', icon: DollarSign },
    { key: 'updates', icon: RefreshCw },
    { key: 'visibility', icon: Eye },
    { key: 'completion', icon: TrendingDown },
    { key: 'support', icon: HeadphonesIcon }
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
    { key: 'courseGen', icon: Zap },
    { key: 'blockEdit', icon: MessageSquare },
    { key: 'tutor', icon: Bot },
    { key: 'scorm', icon: Share2 },
    { key: 'multilingual', icon: Languages }
  ];

  const useCaseItems = [
    { key: 'employee', icon: Users },
    { key: 'product', icon: Package },
    { key: 'technical', icon: Code },
    { key: 'compliance', icon: Shield }
  ];

  const metricItems = [
    { key: 'cost', color: 'text-green-400' },
    { key: 'completion', color: 'text-blue-400' },
    { key: 'speed', color: 'text-purple-400' },
    { key: 'dropout', color: 'text-orange-400' }
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
        {/* Hero Section */}
        <section 
          className="relative min-h-[70vh] flex items-center overflow-hidden py-20 md:py-24 lg:py-28"
          data-testid="section-automation-hero"
        >
          {/* Animated star background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  left: star.left,
                  top: star.top,
                  width: star.size,
                  height: star.size,
                  opacity: star.opacity,
                  animationDelay: star.animationDelay,
                  animationDuration: star.animationDuration,
                }}
              />
            ))}
          </div>

          {/* Gradient background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)'
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
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
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
                  {t('hero.ctaDemo')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Box */}
        <section className="py-20 md:py-24 lg:py-28 relative" data-testid="section-definition">
          <div className="content-container">
            <Card className="max-w-4xl mx-auto p-8 md:p-10 bg-card/50 backdrop-blur-sm border-primary/20">
              <p className="text-lg md:text-xl text-center leading-relaxed text-foreground/90">
                {t('definition.text')}
              </p>
            </Card>
          </div>
        </section>

        {/* Problems Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-problems"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(239, 68, 68, 0.05) 0%, transparent 70%)'
            }}
          />
          
          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-problems">
                {t('problems.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('problems.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {problemItems.map(({ key, icon: Icon }) => (
                <Card 
                  key={key}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover-elevate transition-all duration-300"
                  data-testid={`card-problem-${key}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-red-500/10 text-red-400 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        {t(`problems.items.${key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`problems.items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-features"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-features">
                {t('features.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featureItems.map(({ key, icon: Icon }) => (
                <Card 
                  key={key}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border/40 hover-elevate transition-all duration-300"
                  data-testid={`card-feature-${key}`}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`features.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`features.items.${key}.description`)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-how-it-works"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                {t('howItWorks.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {howItWorksSteps.map(({ key, icon: Icon, number }, index) => (
                <div 
                  key={key}
                  className="relative"
                  data-testid={`step-${key}`}
                >
                  {/* Connector line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  
                  <Card className="p-6 bg-card/20 backdrop-blur-sm border-border/30 text-center relative z-10">
                    <div className="text-4xl font-bold text-primary/15 mb-4">{number}</div>
                    <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {t(`howItWorks.steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`howItWorks.steps.${key}.description`)}
                    </p>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={handleTryClick}
                data-testid="button-how-it-works-cta"
              >
                {t('howItWorks.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Table Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-feature-table"
        >
          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-feature-table">
                {t('featureTable.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('featureTable.subtitle')}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {featureTableItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="flex items-start gap-4 p-5 rounded-lg bg-card/15 border border-border/20"
                  data-testid={`feature-table-item-${key}`}
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      {t(`featureTable.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`featureTable.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-use-cases"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 30% 60%, rgba(34, 197, 94, 0.05) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-use-cases">
                {t('useCases.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('useCases.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <Card 
                  key={key}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border/50 text-center hover-elevate transition-all duration-300"
                  data-testid={`card-use-case-${key}`}
                >
                  <div className="p-4 rounded-full bg-green-500/10 text-green-400 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">
                    {t(`useCases.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`useCases.items.${key}.description`)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-metrics"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-metrics">
                {t('metrics.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('metrics.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {metricItems.map(({ key, color }) => (
                <Card 
                  key={key}
                  className="p-6 bg-card/30 backdrop-blur-sm border-border/50 text-center"
                  data-testid={`card-metric-${key}`}
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${color}`}>
                    {t(`metrics.items.${key}.value`)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(`metrics.items.${key}.label`)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-testimonial"
        >
          <div className="content-container relative z-10">
            <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-card/30 backdrop-blur-sm border-primary/20 text-center">
              <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">{t('testimonial.author')}</span>
                <span className="mx-2">•</span>
                <span>{t('testimonial.company')}</span>
              </div>
              <Button 
                variant="ghost" 
                className="mt-6 text-primary hover:text-primary"
                onClick={() => {
                  analytics.ctaClick('testimonial_case_studies', 'automation_page');
                  window.location.href = '/results';
                }}
                data-testid="button-testimonial-cta"
              >
                {t('testimonial.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative overflow-hidden"
          data-testid="section-final-cta"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)'
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
                onClick={handleDemoClick}
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
