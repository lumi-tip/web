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
  const stars = useMemo(() => generateStars(80), []);

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

        {/* Blue glow - mid-page left (around problems section) */}
        <div 
          className="absolute top-[30%] left-[-10%] w-[700px] h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(200 80% 60% / 0.07) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - mid-page right (around features section) */}
        <div 
          className="absolute top-[45%] right-[-5%] w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.06) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - lower mid (around how it works) */}
        <div 
          className="absolute top-[60%] left-[20%] w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(210 90% 55% / 0.05) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - bottom right (around metrics/CTA) */}
        <div 
          className="absolute bottom-[10%] right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.07) 0%, transparent 60%)',
            filter: 'blur(120px)',
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

            {/* Horizontal flow layout with wavy connector through circle centers */}
            <div className="relative">
              {/* Flow items - 5 circles evenly distributed with sinusoidal connecting line */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-8 relative">
                {/* Wavy SVG connecting line - passes through exact center of each circle */}
                <svg 
                  className="hidden lg:block absolute pointer-events-none overflow-visible"
                  style={{ 
                    top: '32px',
                    left: '0',
                    width: '100%',
                    height: '40px',
                    transform: 'translateY(-50%)'
                  }}
                  viewBox="0 0 1000 40"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="waveGlow" x="-10%" y="-100%" width="120%" height="300%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(56, 189, 248, 0.5)" />
                      <stop offset="25%" stopColor="rgba(56, 189, 248, 0.4)" />
                      <stop offset="50%" stopColor="rgba(56, 189, 248, 0.35)" />
                      <stop offset="75%" stopColor="rgba(56, 189, 248, 0.4)" />
                      <stop offset="100%" stopColor="rgba(56, 189, 248, 0.5)" />
                    </linearGradient>
                  </defs>
                  {/* Sinusoidal wave: circles at x=100,300,500,700,900 (10%,30%,50%,70%,90%), wave passes through y=20 (center) at each */}
                  <path
                    d="M 100 20 
                       C 150 8, 250 32, 300 20 
                       C 350 8, 450 32, 500 20 
                       C 550 8, 650 32, 700 20 
                       C 750 8, 850 32, 900 20"
                    stroke="url(#waveGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#waveGlow)"
                  />
                </svg>

                {problemItems.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="flex flex-col items-center text-center flex-1 max-w-[180px] relative"
                    data-testid={`item-problem-${key}`}
                  >
                    {/* Glowing circle with icon - line passes through center */}
                    <div 
                      className="w-16 h-16 rounded-full border border-primary/30 bg-background flex items-center justify-center mb-6 relative z-10"
                      style={{
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.08), inset 0 0 20px rgba(56, 189, 248, 0.05)'
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary/80" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold mb-3 text-foreground text-sm">
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

        {/* Features Section - Vertical cards with glowing borders */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative z-10"
          data-testid="section-features"
        >
          <div className="content-container">
            <div className="text-center mb-14 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-features">
                {t('features.title')}
              </h2>
            </div>

            {/* Four vertical cards with glowing borders - taller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="relative rounded-xl px-6 py-8 text-center min-h-[220px] flex flex-col"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.06), inset 0 0 20px rgba(56, 189, 248, 0.02)'
                  }}
                  data-testid={`item-feature-${key}`}
                >
                  {/* Icon with glow at top */}
                  <div 
                    className="w-12 h-12 rounded-full border border-primary/25 bg-background/50 flex items-center justify-center mx-auto mb-5"
                    style={{
                      boxShadow: '0 0 15px rgba(56, 189, 248, 0.12), 0 0 30px rgba(56, 189, 248, 0.06)'
                    }}
                  >
                    <Icon className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-3 text-sm">
                    {t(`features.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
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

            <div className="relative max-w-5xl mx-auto">
              {/* Straight luminous connector line through circle centers */}
              <div 
                className="hidden md:block absolute h-[2px] z-0"
                style={{
                  top: '20px',
                  left: '16.67%',
                  width: '66.67%',
                  background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.3) 0%, rgba(56, 189, 248, 0.2) 50%, rgba(56, 189, 248, 0.3) 100%)',
                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.25), 0 0 20px rgba(56, 189, 248, 0.1)'
                }}
                aria-hidden="true"
              />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-6">
                {howItWorksSteps.map(({ key, icon: Icon, number }) => (
                  <div 
                    key={key}
                    className="flex-1 relative flex flex-col items-center text-center"
                    data-testid={`step-${key}`}
                  >
                    {/* Round number with glow */}
                    <div 
                      className="w-10 h-10 rounded-full border border-primary/25 bg-background flex items-center justify-center mb-4 relative z-10"
                      style={{
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.12), 0 0 25px rgba(56, 189, 248, 0.06)'
                      }}
                    >
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

        {/* Automation vs Control - Premium centered two-column layout */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-feature-table"
        >
          {/* Subtle glow behind section */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56, 189, 248, 0.04) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          />

          <div className="content-container relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-feature-table">
                {t('featureTable.title')}
              </h2>
            </div>

            {/* Two perfectly centered columns with luminous divider */}
            <div className="max-w-4xl mx-auto">
              {/* Column headers */}
              <div className="flex items-center justify-center mb-14">
                <div className="flex-1 text-center">
                  <span className="text-base font-semibold text-primary">{t('featureTable.columnAutomated')}</span>
                </div>
                <div 
                  className="w-px h-8 mx-10"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)',
                    boxShadow: '0 0 8px rgba(56, 189, 248, 0.2)'
                  }}
                />
                <div className="flex-1 text-center">
                  <span className="text-base font-semibold text-muted-foreground">{t('featureTable.columnControl')}</span>
                </div>
              </div>
              
              {/* Rows with glowing icons and vertical luminous divider */}
              <div className="space-y-12">
                {featureTableItems.map(({ key }) => (
                  <div 
                    key={key}
                    className="flex items-start"
                    data-testid={`table-row-${key}`}
                  >
                    {/* Left column - Automated */}
                    <div className="flex-1 flex items-start gap-4">
                      {/* Glowing icon */}
                      <div 
                        className="w-8 h-8 rounded-full border border-primary/25 bg-background flex items-center justify-center flex-shrink-0"
                        style={{
                          boxShadow: '0 0 12px rgba(56, 189, 248, 0.15), 0 0 24px rgba(56, 189, 248, 0.08)'
                        }}
                      >
                        <Zap className="h-3 w-3 text-primary/70" strokeWidth={1.5} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-sm mb-1">{t(`featureTable.items.${key}.title`)}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{t(`featureTable.items.${key}.automated`)}</p>
                      </div>
                    </div>

                    {/* Luminous vertical divider */}
                    <div 
                      className="w-px h-16 mx-8 flex-shrink-0 hidden md:block"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.2) 50%, transparent 100%)',
                        boxShadow: '0 0 6px rgba(56, 189, 248, 0.15)'
                      }}
                    />

                    {/* Right column - You control */}
                    <div className="flex-1 text-left hidden md:block">
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`featureTable.items.${key}.control`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Larger glowing circular icons in two clean rows */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-use-cases">
                {t('useCases.title')}
              </h2>
            </div>

            {/* Two rows of 2 items each with larger glowing circular icons */}
            <div className="grid gap-x-32 gap-y-20 md:grid-cols-2 max-w-3xl mx-auto">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="text-center"
                  data-testid={`item-use-case-${key}`}
                >
                  {/* Larger glowing circular icon */}
                  <div 
                    className="w-20 h-20 rounded-full border border-primary/25 bg-background flex items-center justify-center mx-auto mb-6"
                    style={{
                      boxShadow: '0 0 25px rgba(56, 189, 248, 0.12), 0 0 50px rgba(56, 189, 248, 0.06), inset 0 0 20px rgba(56, 189, 248, 0.03)'
                    }}
                  >
                    <Icon className="h-7 w-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold mb-3 text-base">
                    {t(`useCases.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    {t(`useCases.items.${key}.description`)}
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

        {/* FAQ Section - Accordion dropdown style like homepage */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-faq">
                {t('faq.title')}
              </h2>
            </div>

            {/* Accordion style FAQs with smooth animations */}
            <div className="max-w-2xl mx-auto">
              {faqItems.map(({ key }, index) => (
                <div 
                  key={key}
                  className="border-b border-border/20"
                  data-testid={`faq-item-${key}`}
                >
                  <button
                    className="w-full flex items-center justify-between py-6 text-left group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`faq-button-${key}`}
                  >
                    <span className="font-medium text-base pr-4">{t(`faq.items.${key}.question`)}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ease-out ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: openFaq === index ? '1fr' : '0fr'
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground leading-relaxed pb-6">
                        {t(`faq.items.${key}.answer`)}
                      </p>
                    </div>
                  </div>
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
