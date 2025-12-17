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
  CheckCircle,
  FileOutput,
  Monitor,
  Shield,
  TrendingUp,
  AlertTriangle,
  Eye,
  Lightbulb,
  Building2,
  Landmark,
  Heart,
  GraduationCap,
  Check
} from 'lucide-react';
import { analytics } from '@/lib/analytics';

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
}

export default function AnalyticsCompliance() {
  const { t } = useTranslation('analytics');
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

  const useCaseIcons = {
    corporate: Building2,
    financial: Landmark,
    healthcare: Heart,
    training: GraduationCap
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
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

      <main>
        {/* Animated star background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>

        {/* SECTION 1: HERO - 2 columns */}
        <section 
          className="relative pt-24 pb-16 md:pt-28 md:pb-20"
          data-testid="section-hero"
        >
          <div className="content-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
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
                
                <p className="text-sm text-white/50">
                  {t('hero.trustLine')}
                </p>
              </div>
              
              {/* Right column - Abstract UI panel */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.8)',
                  border: '1px solid rgba(31, 111, 235, 0.2)',
                  boxShadow: '0 0 40px rgba(31, 111, 235, 0.1)',
                }}
              >
                {/* Metric tiles */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {['engagement', 'completion', 'friction'].map((metric) => (
                    <div 
                      key={metric}
                      className="rounded-lg p-4 text-center"
                      style={{
                        backgroundColor: 'rgba(31, 111, 235, 0.1)',
                        border: '1px solid rgba(31, 111, 235, 0.2)',
                      }}
                    >
                      <BarChart3 className="w-5 h-5 text-[#3A8DFF] mx-auto mb-2" />
                      <span className="text-xs text-white/70">
                        {t(`hero.metricLabels.${metric}`)}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* 3-step flow */}
                <div className="flex items-center justify-between px-4">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <Monitor className="w-5 h-5 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">{t('hero.flowLabels.course')}</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-white/30" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <FileOutput className="w-5 h-5 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">{t('hero.flowLabels.scorm')}</span>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-white/30" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <Shield className="w-5 h-5 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">{t('hero.flowLabels.lms')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEFINITION BOX */}
        <section 
          className="py-12 md:py-16"
          data-testid="section-definition"
        >
          <div className="content-container">
            <div 
              className="rounded-xl p-8 md:p-10 max-w-4xl mx-auto"
              style={{
                backgroundColor: 'rgba(10, 26, 47, 0.7)',
                border: '1px solid rgba(31, 111, 235, 0.2)',
                boxShadow: '0 0 30px rgba(31, 111, 235, 0.08)',
              }}
            >
              <span className="text-xs font-medium tracking-wider text-[#3A8DFF] mb-4 block">
                {t('definition.label')}
              </span>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                {t('definition.text')}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEM SECTION - 2x2 grid */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-problem"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
              {t('problem.title')}
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              {t('problem.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {['surface', 'delayed', 'noContext', 'rigid'].map((item) => (
                <div 
                  key={item}
                  className="p-6 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(16, 44, 76, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400/70 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {t(`problem.items.${item}.title`)}
                      </h3>
                      <p className="text-sm text-white/60">
                        {t(`problem.items.${item}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: APPROACH BRIDGE - 2 columns */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-approach"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Left */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('approach.title')}
                </h2>
                <p className="text-lg text-white/70">
                  {t('approach.subtitle')}
                </p>
              </div>
              
              {/* Right - Signal list */}
              <div className="flex flex-wrap gap-3">
                {(t('approach.signals', { returnObjects: true }) as string[]).map((signal, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full text-sm"
                    style={{
                      backgroundColor: 'rgba(31, 111, 235, 0.15)',
                      border: '1px solid rgba(31, 111, 235, 0.3)',
                      color: '#3A8DFF',
                    }}
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: REAL-TIME ANALYTICS - 2 columns */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-analytics"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
              {t('analytics.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* What LearnPack tracks */}
              <div>
                <h3 className="text-lg font-semibold text-[#3A8DFF] mb-5 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {t('analytics.tracksTitle')}
                </h3>
                <ul className="space-y-3">
                  {(t('analytics.tracksBullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-[#3A8DFF] flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* What teams get */}
              <div>
                <h3 className="text-lg font-semibold text-[#3A8DFF] mb-5 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {t('analytics.getsTitle')}
                </h3>
                <ul className="space-y-3">
                  {(t('analytics.getsBullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <CheckCircle className="w-4 h-4 text-[#3A8DFF] flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-center text-sm text-white/50 mt-10 italic">
              {t('analytics.note')}
            </p>
          </div>
        </section>

        {/* SECTION 6: AI INSIGHT */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-ai-insight"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t('aiInsight.title')}
              </h2>
              <p className="text-lg text-white/70 mb-10">
                {t('aiInsight.text')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {(t('aiInsight.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(31, 111, 235, 0.1)',
                      border: '1px solid rgba(31, 111, 235, 0.2)',
                    }}
                  >
                    <Lightbulb className="w-4 h-4 text-[#3A8DFF]" />
                    <span className="text-sm text-white/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: COMPLIANCE BY DESIGN - 2 columns */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-compliance"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Left */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('compliance.title')}
                </h2>
                <p className="text-lg text-white/70">
                  {t('compliance.subtitle')}
                </p>
              </div>
              
              {/* Right - Mini diagram */}
              <div 
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(10, 26, 47, 0.7)',
                  border: '1px solid rgba(31, 111, 235, 0.2)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <Monitor className="w-6 h-6 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">Course</span>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-[#3A8DFF]" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <FileOutput className="w-6 h-6 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">SCORM Export</span>
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-[#3A8DFF]" />
                  
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                    >
                      <Shield className="w-6 h-6 text-[#3A8DFF]" />
                    </div>
                    <span className="text-xs text-white/60">LMS</span>
                  </div>
                </div>
                
                <p className="text-center text-xs text-white/50">
                  {t('compliance.flowCaption')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SCORM & LMS COMPATIBILITY - 3 columns */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-scorm"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {['export', 'embedding', 'independence'].map((item) => {
                const icons = {
                  export: FileOutput,
                  embedding: Monitor,
                  independence: Shield
                };
                const Icon = icons[item as keyof typeof icons];
                
                return (
                  <div 
                    key={item}
                    className="text-center p-6"
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ 
                        backgroundColor: 'rgba(31, 111, 235, 0.15)',
                        boxShadow: '0 0 20px rgba(31, 111, 235, 0.2)',
                      }}
                    >
                      <Icon className="w-6 h-6 text-[#3A8DFF]" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {t(`scorm.items.${item}.title`)}
                    </h3>
                    <p className="text-sm text-white/60">
                      {t(`scorm.items.${item}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 9: SECURITY & ENTERPRISE - 2 columns */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-security"
        >
          <div className="content-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Left */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t('security.title')}
                </h2>
              </div>
              
              {/* Right - Checklist */}
              <div className="space-y-4">
                {(t('security.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                    >
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: USE CASES - 2x2 grid */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              {t('useCases.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {(['corporate', 'financial', 'healthcare', 'training'] as const).map((item) => {
                const Icon = useCaseIcons[item];
                return (
                  <div 
                    key={item}
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(10, 26, 47, 0.7)',
                      border: '1px solid rgba(31, 111, 235, 0.15)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(31, 111, 235, 0.15)' }}
                      >
                        <Icon className="w-5 h-5 text-[#3A8DFF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {t(`useCases.items.${item}.title`)}
                        </h3>
                        <p className="text-sm text-white/60">
                          {t(`useCases.items.${item}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 11: DIFFERENTIATOR ROWS */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-differentiator"
        >
          <div className="content-container">
            <div className="max-w-3xl mx-auto">
              {/* Header row */}
              <div className="grid grid-cols-2 gap-4 mb-6 px-4">
                <span className="text-sm font-medium text-white/50">
                  {t('differentiator.traditional')}
                </span>
                <span className="text-sm font-medium text-[#3A8DFF]">
                  {t('differentiator.learnpack')}
                </span>
              </div>
              
              {/* Rows */}
              <div className="space-y-4">
                {(t('differentiator.rows', { returnObjects: true }) as Array<{traditional: string; learnpack: string}>).map((row, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-2 gap-4 p-4 rounded-lg"
                    style={{
                      backgroundColor: 'rgba(16, 44, 76, 0.3)',
                    }}
                  >
                    <span className="text-white/50">{row.traditional}</span>
                    <span className="text-white flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[#3A8DFF]" />
                      {row.learnpack}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: FAQ */}
        <section 
          className="py-16 md:py-20"
          data-testid="section-faq"
        >
          <div className="content-container">
            <div className="flex items-center justify-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                {t('faq.title')}
              </h2>
              <span className="text-xs text-white/40">
                {t('faq.lastUpdated')}
              </span>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {['q1', 'q2', 'q3'].map((q, index) => (
                  <AccordionItem 
                    key={q}
                    value={`faq-${index}`} 
                    className="rounded-xl px-6 border-0"
                    style={{
                      backgroundColor: 'rgba(10, 26, 47, 0.7)',
                      boxShadow: '0 0 20px rgba(31, 111, 235, 0.08)',
                    }}
                    data-testid={`faq-item-${index + 1}`}
                  >
                    <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                      {t(`faq.questions.${q}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pb-5">
                      {t(`faq.questions.${q}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* SECTION 13: FINAL CTA BANNER */}
        <section 
          className="py-20 md:py-28"
          data-testid="section-final-cta"
        >
          <div className="content-container">
            <div 
              className="rounded-2xl p-10 md:p-14 text-center"
              style={{
                backgroundColor: 'rgba(10, 26, 47, 0.8)',
                border: '1px solid rgba(31, 111, 235, 0.2)',
                boxShadow: '0 0 60px rgba(31, 111, 235, 0.15)',
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
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
