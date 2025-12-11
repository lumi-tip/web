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
import { useState, useMemo } from 'react';

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
}

export default function Automation() {
  const { t, i18n } = useTranslation('automation');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const stars = useMemo(() => generateStars(40), []);

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
    { key: 'speed' }
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

      <main className="hero-animated-bg relative overflow-hidden">
        {/* Page-wide animated stars */}
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

        {/* Blue glow - top right (hero area) */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - mid-page left (around features/how it works) */}
        <div 
          className="absolute top-[40%] left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(200 80% 60% / 0.05) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - bottom right (around metrics/CTA) */}
        <div 
          className="absolute bottom-[10%] right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.06) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Hero Section */}
        <section 
          className="relative min-h-[70vh] flex items-center py-24 md:py-32 lg:py-40"
          data-testid="section-automation-hero"
        >
          <div className="content-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                data-testid="heading-automation-hero"
              >
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
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

        {/* Definition - Editorial style with generous spacing */}
        <section className="py-20 md:py-28 lg:py-32 relative z-10" data-testid="section-definition">
          <div className="content-container">
            <p className="text-xl md:text-2xl text-center leading-relaxed text-muted-foreground max-w-3xl mx-auto font-light">
              {t('definition.text')}
            </p>
          </div>
        </section>

        {/* What you stop doing manually - Horizontal flow with curved connector */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-problems"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-problems">
                {t('problems.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('problems.subtitle')}
              </p>
            </div>

            {/* Horizontal flow layout with curved connector */}
            <div className="relative max-w-6xl mx-auto">
              {/* SVG curved connector line - hidden on mobile */}
              <svg 
                className="hidden lg:block absolute top-12 left-0 w-full h-20 pointer-events-none"
                viewBox="0 0 1200 80"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 60 40 Q 180 10, 300 40 Q 420 70, 540 40 Q 660 10, 780 40 Q 900 70, 1020 40 Q 1080 25, 1140 40"
                  stroke="hsl(var(--primary) / 0.15)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Flow items */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-6">
                {problemItems.map(({ key, icon: Icon }, index) => (
                  <div 
                    key={key}
                    className="flex flex-col items-center text-center flex-1 max-w-[200px]"
                    data-testid={`item-problem-${key}`}
                  >
                    {/* Circle with icon */}
                    <div className="w-14 h-14 rounded-full border border-primary/20 bg-background flex items-center justify-center mb-5 relative z-10 shadow-sm">
                      <Icon className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground text-sm">
                      {t(`problems.items.${key}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t(`problems.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Horizontal strip with vertical dividers */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-features"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-features">
                {t('features.title')}
              </h2>
            </div>

            {/* Horizontal feature strip with vertical dividers */}
            <div className="flex flex-col md:flex-row items-stretch justify-center max-w-5xl mx-auto">
              {featureItems.map(({ key, icon: Icon }, index) => (
                <div 
                  key={key}
                  className={`flex-1 text-center px-6 md:px-8 py-6 md:py-0 ${
                    index < featureItems.length - 1 ? 'border-b md:border-b-0 md:border-r border-border/20' : ''
                  }`}
                  data-testid={`item-feature-${key}`}
                >
                  <Icon className="h-4 w-4 text-primary/50 mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold mb-2 text-sm">
                    {t(`features.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                    {t(`features.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Horizontal timeline with round numbers */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-how-it-works"
        >
          <div className="content-container">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
                {t('howItWorks.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('howItWorks.subtitle')}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-5xl mx-auto gap-10 md:gap-6">
              {howItWorksSteps.map(({ key, icon: Icon, number }, index) => (
                <div 
                  key={key}
                  className="flex-1 relative flex flex-col items-center text-center"
                  data-testid={`step-${key}`}
                >
                  {/* Connector line */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[60%] w-full h-[1px] bg-border/30" />
                  )}
                  
                  {/* Round number */}
                  <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-xs font-semibold text-primary">{number}</span>
                  </div>
                  
                  <Icon className="h-4 w-4 text-muted-foreground mb-3" strokeWidth={1.5} />
                  
                  <h3 className="font-semibold mb-2 text-sm">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-[200px]">
                    {t(`howItWorks.steps.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
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

        {/* Automation vs Control - Two balanced columns with vertical divider */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-feature-table"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-feature-table">
                {t('featureTable.title')}
              </h2>
            </div>

            {/* Two balanced columns centered */}
            <div className="max-w-3xl mx-auto">
              {/* Column headers */}
              <div className="flex items-center justify-center mb-10">
                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-primary">{t('featureTable.columnAutomated')}</span>
                </div>
                <div className="w-px h-6 bg-border/30 mx-6" />
                <div className="flex-1 text-center">
                  <span className="text-sm font-semibold text-muted-foreground">{t('featureTable.columnControl')}</span>
                </div>
              </div>
              
              {/* Rows with vertical divider */}
              <div className="space-y-8">
                {featureTableItems.map(({ key }) => (
                  <div 
                    key={key}
                    className="flex items-center"
                    data-testid={`table-row-${key}`}
                  >
                    <div className="flex-1 text-center">
                      <h4 className="font-medium text-sm">{t(`featureTable.items.${key}.title`)}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{t(`featureTable.items.${key}.automated`)}</p>
                    </div>
                    <div className="w-px h-12 bg-border/15 mx-8" />
                    <div className="flex-1 text-center">
                      <p className="text-sm text-muted-foreground">{t(`featureTable.items.${key}.control`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Clean 2x2 layout with circular icons */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-use-cases">
                {t('useCases.title')}
              </h2>
            </div>

            {/* 2x2 clean layout with more horizontal spacing */}
            <div className="grid gap-x-24 gap-y-16 md:grid-cols-2 max-w-4xl mx-auto">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="text-center"
                  data-testid={`item-use-case-${key}`}
                >
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-4 w-4 text-primary/50" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">
                    {t(`useCases.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                    {t(`useCases.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics - Large numbers with subtle glows */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-metrics"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-metrics">
                {t('metrics.title')}
              </h2>
            </div>

            <div className="grid gap-16 md:gap-20 md:grid-cols-4 max-w-5xl mx-auto text-center">
              {metricItems.map(({ key, value, color }) => (
                <div 
                  key={key}
                  className="relative"
                  data-testid={`metric-${key}`}
                >
                  {/* Subtle glow behind number */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${
                        color === 'text-emerald-400' ? 'rgba(52, 211, 153, 0.08)' :
                        color === 'text-blue-400' ? 'rgba(96, 165, 250, 0.08)' :
                        color === 'text-violet-400' ? 'rgba(167, 139, 250, 0.08)' :
                        'rgba(251, 191, 36, 0.08)'
                      } 0%, transparent 60%)`,
                      filter: 'blur(20px)',
                    }}
                    aria-hidden="true"
                  />
                  <div className={`text-5xl md:text-6xl font-bold mb-3 ${color} relative z-10`}>
                    {value}
                  </div>
                  <p className="text-sm text-muted-foreground relative z-10">
                    {t(`metrics.items.${key}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Reduced padding, subtle background */}
        <section 
          className="py-12 md:py-16 relative z-10"
          data-testid="section-testimonial"
        >
          <div className="content-container">
            <div 
              className="max-w-xl mx-auto text-center py-10 px-8 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.02) 100%)'
              }}
            >
              <Quote className="h-4 w-4 text-primary/20 mx-auto mb-5" />
              <blockquote className="text-base md:text-lg font-medium mb-4 leading-relaxed">
                "{t('testimonial.quote')}"
              </blockquote>
              <div className="text-sm text-muted-foreground mb-5">
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

        {/* FAQ Section - More spacing, centered alignment */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-faq">
                {t('faq.title')}
              </h2>
            </div>

            <div className="max-w-xl mx-auto space-y-10">
              {faqItems.map(({ key }, index) => (
                <div 
                  key={key}
                  className="text-center"
                  data-testid={`faq-item-${key}`}
                >
                  <button
                    className="w-full flex flex-col items-center py-3 group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`faq-button-${key}`}
                  >
                    <span className="font-medium text-center">{t(`faq.items.${key}.question`)}</span>
                    <ChevronDown 
                      className={`h-4 w-4 text-muted-foreground mt-2 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openFaq === index && (
                    <p className="text-sm text-muted-foreground pt-4 leading-relaxed text-center">
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
          className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
          data-testid="section-final-cta"
        >
          {/* Subtle glow */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56, 189, 248, 0.03) 0%, transparent 70%)'
            }}
          />

          <div className="content-container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-final-cta">
              {t('finalCta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
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
