import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowRight,
  BarChart3,
  FileOutput,
  Monitor,
  Shield,
  AlertTriangle,
  Eye,
  Activity,
  Clock,
  HelpCircle,
  Building2,
  Landmark,
  Heart,
  GraduationCap,
  Lightbulb,
  Package,
  Lock,
  Search,
  Gauge,
  Share2
} from 'lucide-react';
import { analytics } from '@/lib/analytics';

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${5 + Math.random() * 7}s`,
    size: Math.random() > 0.7 ? 2 : Math.random() > 0.4 ? 1.5 : 1,
  }));
}

export default function AnalyticsCompliance() {
  const { t, i18n } = useTranslation('analytics');
  const stars = useMemo(() => generateStars(60), []);

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'analytics_compliance_page');
    window.location.href = '/contact';
  };

  const handleResultsClick = () => {
    analytics.ctaClick('view_results', 'analytics_compliance_page');
    window.location.href = '/results';
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Analytics & Compliance",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": t('meta.description'),
    "featureList": [
      "Real-time Learning Analytics",
      "SCORM Export",
      "LMS Integration",
      "Compliance Reporting",
      "Engagement Tracking"
    ]
  };

  const problemIcons = {
    surface: BarChart3,
    delayed: Clock,
    noContext: Eye,
    rigid: Lock
  };

  const useCaseItems = [
    { key: 'corporate', icon: Building2 },
    { key: 'financial', icon: Landmark },
    { key: 'healthcare', icon: Heart },
    { key: 'training', icon: GraduationCap }
  ];

  const rubricRows = [
    { signal: 'engagement', action: 'disengagement', icon: Activity },
    { signal: 'retries', action: 'friction', icon: Clock },
    { signal: 'dropoff', action: 'abandon', icon: AlertTriangle },
    { signal: 'tutor', action: 'help', icon: HelpCircle }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet key={i18n.language}>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://learnpack.co/features/analytics-compliance" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="hero-animated-bg relative overflow-hidden">
        {/* Starfield background - scrolls with content (absolute, not fixed) */}
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

        {/* Blue glow - mid-page left */}
        <div 
          className="absolute top-[30%] left-[-10%] w-[700px] h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(200 80% 60% / 0.07) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - mid-page right */}
        <div 
          className="absolute top-[55%] right-[-5%] w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.06) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blue glow - bottom area */}
        <div 
          className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(207 100% 50% / 0.07) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />

        {/* SECTION 1: HERO - 2 columns */}
        <section 
          className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:py-28"
          data-testid="section-hero"
        >
          <div className="content-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  {t('hero.subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <Button 
                    size="lg" 
                    onClick={handleDemoClick}
                    data-testid="button-hero-demo"
                  >
                    {t('hero.ctaDemo')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleResultsClick}
                    data-testid="button-hero-analytics"
                  >
                    {t('hero.ctaAnalytics')}
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground/70">
                  {t('hero.trustLine')}
                </p>
              </div>
              
              {/* Right column - Abstract UI panel */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: '#0A1125',
                  boxShadow: '0 0 60px rgba(48, 79, 254, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Metric tiles */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {['engagement', 'completion', 'friction'].map((metric) => (
                    <div 
                      key={metric}
                      className="rounded-lg p-4 text-center border border-primary/20"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.08)',
                      }}
                    >
                      <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">
                        {t(`hero.metricLabels.${metric}`)}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* 3-step flow */}
                <div className="flex items-center justify-between px-4">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 border border-primary/25"
                      style={{ 
                        backgroundColor: 'rgba(31, 111, 235, 0.1)',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)'
                      }}
                    >
                      <Monitor className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{t('hero.flowLabels.course')}</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 border border-primary/25"
                      style={{ 
                        backgroundColor: 'rgba(31, 111, 235, 0.1)',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)'
                      }}
                    >
                      <FileOutput className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{t('hero.flowLabels.scorm')}</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 border border-primary/25"
                      style={{ 
                        backgroundColor: 'rgba(31, 111, 235, 0.1)',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)'
                      }}
                    >
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{t('hero.flowLabels.lms')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX */}
        <section 
          className="py-12 md:py-16 relative z-10"
          data-testid="section-definition"
        >
          <div className="content-container">
            <div 
              className="rounded-xl p-8 md:p-10 max-w-4xl mx-auto border border-primary/15"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.8)',
                boxShadow: '0 0 40px rgba(48, 79, 254, 0.1)',
              }}
            >
              <span className="text-xs font-medium tracking-wider text-primary mb-4 block uppercase">
                {t('definition.label')}
              </span>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
                {t('definition.text')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM SECTION - Premium 2x2 grid with brighter boxes */}
        <section 
          className="py-20 md:py-24 lg:py-28 relative z-10"
          data-testid="section-problem"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
              {t('problem.title')}
            </h2>
            <p className="text-center text-muted-foreground mb-14 md:mb-16 max-w-2xl mx-auto text-lg">
              {t('problem.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {(['surface', 'delayed', 'noContext', 'rigid'] as const).map((item) => {
                const Icon = problemIcons[item];
                return (
                  <div 
                    key={item}
                    className="p-6 md:p-8 rounded-xl border border-primary/20 relative overflow-visible"
                    style={{
                      backgroundColor: 'rgba(10, 20, 60, 0.5)',
                      backgroundImage: 'linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, transparent 100%)',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.12), 0 0 40px rgba(48, 79, 254, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-500/25"
                        style={{
                          backgroundColor: 'rgba(245, 158, 11, 0.12)',
                          boxShadow: '0 0 20px rgba(245, 158, 11, 0.12)'
                        }}
                      >
                        <Icon className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">
                          {t(`problem.items.${item}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`problem.items.${item}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: APPROACH - Strong principle section with 3 pillars */}
        <section 
          className="py-24 md:py-32 lg:py-40 relative z-10"
          data-testid="section-approach"
        >
          {/* Distinct background overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(31, 111, 235, 0.03) 0%, transparent 50%, rgba(31, 111, 235, 0.02) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="content-container relative z-10">
            {/* Centered header with more prominence */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t('approach.title')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('approach.subtitle')}
              </p>
            </div>
            
            {/* 3 large pillars - Observable, Measurable, Exportable */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Observable */}
              <div 
                className="p-8 md:p-10 rounded-xl border border-primary/20 text-center"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  backgroundImage: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.12)',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Search className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('approach.pillars.observable.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('approach.pillars.observable.description')}
                </p>
              </div>
              
              {/* Measurable */}
              <div 
                className="p-8 md:p-10 rounded-xl border border-primary/20 text-center"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  backgroundImage: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.12)',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Gauge className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('approach.pillars.measurable.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('approach.pillars.measurable.description')}
                </p>
              </div>
              
              {/* Exportable */}
              <div 
                className="p-8 md:p-10 rounded-xl border border-primary/20 text-center"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  backgroundImage: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl mx-auto mb-6 flex items-center justify-center border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.12)',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Share2 className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('approach.pillars.exportable.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('approach.pillars.exportable.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ANALYTICS RUBRIC - Signals vs Actions table */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-analytics"
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16 md:mb-20 text-center">
              {t('analytics.title')}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Column headers */}
              <div className="flex items-center justify-center mb-12 md:mb-14">
                <div className="flex-1 text-center">
                  <span className="text-base font-semibold text-primary">{t('analytics.signalsColumn')}</span>
                </div>
                <div 
                  className="w-px h-8 mx-8 md:mx-12 hidden md:block"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)',
                    boxShadow: '0 0 8px rgba(56, 189, 248, 0.2)'
                  }}
                />
                <div className="flex-1 text-center hidden md:block">
                  <span className="text-base font-semibold text-muted-foreground">{t('analytics.actionsColumn')}</span>
                </div>
              </div>
              
              {/* Rubric rows */}
              <div className="space-y-8 md:space-y-10">
                {rubricRows.map(({ signal, action, icon: Icon }) => (
                  <div 
                    key={signal}
                    className="flex flex-col md:flex-row md:items-start"
                    data-testid={`rubric-row-${signal}`}
                  >
                    {/* Left column - Signal */}
                    <div className="flex-1 flex items-start gap-4 mb-4 md:mb-0">
                      <div 
                        className="w-10 h-10 rounded-full border border-primary/25 bg-background flex items-center justify-center flex-shrink-0"
                        style={{
                          boxShadow: '0 0 15px rgba(56, 189, 248, 0.15), 0 0 30px rgba(56, 189, 248, 0.08)'
                        }}
                      >
                        <Icon className="h-4 w-4 text-primary/80" strokeWidth={1.5} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm md:text-base text-foreground leading-relaxed">
                          {t(`analytics.rubric.${signal}.signal`)}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div 
                      className="w-px h-12 mx-8 flex-shrink-0 hidden md:block"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.2) 50%, transparent 100%)',
                        boxShadow: '0 0 6px rgba(56, 189, 248, 0.15)'
                      }}
                    />

                    {/* Right column - Action */}
                    <div className="flex-1 text-left pl-14 md:pl-0">
                      <div className="flex items-center gap-2 mb-1 md:hidden">
                        <ArrowRight className="w-4 h-4 text-primary/60" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{t('analytics.actionsColumn')}</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t(`analytics.rubric.${signal}.action`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground/70 mt-14 italic">
                {t('analytics.note')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: ACTIONABLE INSIGHT + COMPLIANT DEPLOYMENT (merged section) */}
        <section 
          className="py-20 md:py-28 lg:py-32 relative z-10"
          data-testid="section-actionable"
        >
          <div className="content-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('actionable.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('actionable.subtitle')}
              </p>
            </div>
            
            {/* 3 layers with proper hierarchy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Insight Layer */}
              <div 
                className="rounded-xl p-8 border border-primary/15"
                style={{
                  backgroundColor: 'rgba(10, 17, 37, 0.7)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.1)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Lightbulb className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{t('actionable.insight.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('actionable.insight.description')}
                </p>
              </div>
              
              {/* Portability Layer */}
              <div 
                className="rounded-xl p-8 border border-primary/15"
                style={{
                  backgroundColor: 'rgba(10, 17, 37, 0.7)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.1)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Package className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{t('actionable.portability.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('actionable.portability.description')}
                </p>
              </div>
              
              {/* Compliance Layer */}
              <div 
                className="rounded-xl p-8 border border-primary/15"
                style={{
                  backgroundColor: 'rgba(10, 17, 37, 0.7)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border border-primary/25"
                  style={{
                    backgroundColor: 'rgba(31, 111, 235, 0.1)',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)'
                  }}
                >
                  <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{t('actionable.compliance.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('actionable.compliance.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: USE CASES - Compact 2x2 grid */}
        <section 
          className="py-16 md:py-20 lg:py-24 relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-12 text-center">
              {t('useCases.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
              {useCaseItems.map(({ key, icon: Icon }) => (
                <div 
                  key={key}
                  className="p-5 md:p-6 rounded-xl border border-primary/15 flex items-start gap-4"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.4)',
                    boxShadow: '0 0 20px rgba(48, 79, 254, 0.06)',
                  }}
                  data-testid={`use-case-${key}`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/25"
                    style={{
                      backgroundColor: 'rgba(31, 111, 235, 0.1)',
                      boxShadow: '0 0 15px rgba(56, 189, 248, 0.1)'
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

        {/* SECTION 8: DIFFERENTIATOR ROWS */}
        <section 
          className="py-20 md:py-24 relative z-10"
          data-testid="section-differentiator"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              {/* Header row */}
              <div className="grid grid-cols-2 gap-4 mb-8 px-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {t('differentiator.traditional')}
                </span>
                <span className="text-sm font-medium text-primary">
                  {t('differentiator.learnpack')}
                </span>
              </div>
              
              {/* Rows */}
              <div className="space-y-4">
                {(t('differentiator.rows', { returnObjects: true }) as Array<{traditional: string; learnpack: string}>).map((row, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-2 gap-4 p-5 rounded-lg border border-primary/10"
                    style={{
                      backgroundColor: 'rgba(10, 17, 37, 0.5)',
                    }}
                  >
                    <span className="text-muted-foreground">{row.traditional}</span>
                    <span className="text-foreground flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {row.learnpack}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section 
          className="py-20 md:py-24 relative z-10"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                {t('faq.title')}
              </h2>
              <span className="text-xs text-muted-foreground/60">
                {t('faq.lastUpdated')}
              </span>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {['q1', 'q2', 'q3'].map((q, index) => (
                  <AccordionItem 
                    key={q}
                    value={`faq-${index}`} 
                    className="rounded-xl px-6 border border-primary/15"
                    style={{
                      backgroundColor: 'rgba(10, 17, 37, 0.7)',
                      boxShadow: '0 0 20px rgba(48, 79, 254, 0.06)',
                    }}
                    data-testid={`faq-item-${index + 1}`}
                  >
                    <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                      {t(`faq.questions.${q}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {t(`faq.questions.${q}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA BANNER */}
        <section 
          className="py-20 md:py-28 relative z-10"
          data-testid="section-final-cta"
        >
          <div className="content-container">
            <div 
              className="rounded-2xl p-10 md:p-14 text-center border border-primary/15"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.8)',
                boxShadow: '0 0 60px rgba(48, 79, 254, 0.12)',
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleDemoClick}
                  data-testid="button-cta-demo"
                >
                  {t('cta.ctaDemo')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleResultsClick}
                  data-testid="button-cta-results"
                >
                  {t('cta.ctaResults')}
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
