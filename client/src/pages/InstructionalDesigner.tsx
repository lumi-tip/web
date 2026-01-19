import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { PageBackground } from '@/components/ui/page-background';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { UnifiedFAQ } from '@/components/ui/unified-faq';
import { Link } from 'wouter';
import { 
  ArrowRight,
  Upload,
  Bot,
  FileEdit,
  Archive,
  RefreshCw,
  Clock,
  Layers,
  FileX,
  AlertTriangle,
  Zap,
  BookOpen,
  Edit3,
  Languages,
  Package,
  CheckCircle,
  Users,
  ShoppingBag,
  Shield,
  Wrench,
  TrendingUp,
  Quote
} from 'lucide-react';
import { analytics } from '@/lib/analytics';

export default function InstructionalDesigner() {
  const { t, i18n } = useTranslation('instructionalDesigner');
  const [hoveredSide, setHoveredSide] = useState<'before' | 'after' | null>(null);

  const handleTryClick = () => {
    analytics.ctaClick('try_learnpack', 'instructional_designer_page');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'instructional_designer_page');
    window.location.href = '/contact';
  };

  const problemItems = [
    { key: 'updating', icon: RefreshCw },
    { key: 'contentChanges', icon: Clock },
    { key: 'versionDebt', icon: Layers },
    { key: 'patchingDesign', icon: FileX },
    { key: 'legacyCourses', icon: AlertTriangle }
  ];

  const workflowSteps = [
    { key: 'upload', icon: Upload, number: '01' },
    { key: 'generate', icon: Bot, number: '02' },
    { key: 'review', icon: FileEdit, number: '03' },
    { key: 'publish', icon: Archive, number: '04' }
  ];

  const capabilityItems = [
    { key: 'structure', icon: BookOpen },
    { key: 'editing', icon: Edit3 },
    { key: 'localization', icon: Languages },
    { key: 'publishing', icon: Package }
  ];

  const qualityItems = [
    { key: 'structure', icon: CheckCircle },
    { key: 'reviews', icon: RefreshCw },
    { key: 'consistency', icon: Zap }
  ];

  const useCaseItems = [
    { key: 'onboarding', icon: Users },
    { key: 'productTraining', icon: Package },
    { key: 'salesEnablement', icon: ShoppingBag },
    { key: 'compliance', icon: Shield },
    { key: 'internalTools', icon: Wrench },
    { key: 'upskilling', icon: TrendingUp }
  ];

  const faqItems = [
    { id: 'control', question: t('faq.items.control.question'), answer: t('faq.items.control.answer') },
    { id: 'changes', question: t('faq.items.changes.question'), answer: t('faq.items.changes.answer') },
    { id: 'lms', question: t('faq.items.lms.question'), answer: t('faq.items.lms.answer') }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Instructional Designer AI",
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
      "Course Regeneration from Source",
      "Notion-style Editing",
      "Automatic Localization",
      "SCORM Export",
      "LMS Integration"
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
        <link rel="canonical" href="https://learnpack.co/ai-content-assistant" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="hero-animated-bg relative overflow-hidden">
        <PageBackground starCount={50} />

        {/* 1) HERO SECTION */}
        <section 
          className="section-hero relative min-h-[80vh] flex items-center"
          data-testid="section-instructional-designer-hero"
        >
          <div className="content-container relative z-10">
            <ScrollFade>
              <div className="max-w-4xl mx-auto text-center">
                <h1 
                  className="heading-hero mb-8"
                  data-testid="heading-instructional-designer-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="body-lg mb-12 max-w-3xl mx-auto">
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

                {/* Workflow Preview Visual */}
                <ScrollFade delay={0.2}>
                  <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
                    {['Upload', 'Generate', 'Review', 'Publish', 'Archive'].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <div 
                          className="px-4 py-2 rounded-lg border border-primary/20 bg-background/50 text-sm font-medium"
                          style={{
                            boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)'
                          }}
                        >
                          {step}
                        </div>
                        {index < 4 && (
                          <ArrowRight className="h-4 w-4 text-primary/40" />
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollFade>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 2) DEFINITION BOX */}
        <section className="section-standard relative z-10" data-testid="section-definition">
          <div className="content-container">
            <ScrollFade>
              <div 
                className="max-w-3xl mx-auto rounded-xl p-8 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  boxShadow: '0 0 30px rgba(56, 189, 248, 0.06)'
                }}
              >
                <p className="body-lg font-light mb-4">
                  {t('definition.en')}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {t('definition.es')}
                </p>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 3) WHY INSTRUCTIONAL DESIGN BREAKS AT SCALE */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-problems"
        >
          <div className="content-container">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-problems">
                  {t('problems.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {problemItems.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="group relative rounded-xl px-6 py-8 text-center transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(56, 189, 248, 0.1)'
                    }}
                    data-testid={`item-problem-${key}`}
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: '0 0 30px rgba(56, 189, 248, 0.15), inset 0 0 20px rgba(56, 189, 248, 0.05)'
                      }}
                    />
                    <div 
                      className="w-12 h-12 rounded-full border border-primary/25 bg-background/50 flex items-center justify-center mx-auto mb-5 relative z-10"
                      style={{
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.12)'
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold mb-3 text-sm relative z-10">
                      {t(`problems.items.${key}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                      {t(`problems.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 4) FROM SOURCE TO COURSE - Horizontal Stepper */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-workflow"
        >
          <div className="content-container">
            <ScrollFade>
              <div className="text-center mb-10 md:mb-14">
                <h2 className="heading-section mb-4" data-testid="heading-workflow">
                  {t('workflow.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="relative max-w-5xl mx-auto">
                {/* Connecting line */}
                <div 
                  className="hidden lg:block absolute h-[2px] z-0"
                  style={{
                    top: '20px',
                    left: '12.5%',
                    width: '75%',
                    background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.3) 0%, rgba(56, 189, 248, 0.2) 50%, rgba(56, 189, 248, 0.3) 100%)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.25)'
                  }}
                  aria-hidden="true"
                />
                
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6">
                  {workflowSteps.map(({ key, icon: Icon, number }) => (
                    <div 
                      key={key}
                      className="flex-1 relative flex flex-col items-center text-center"
                      data-testid={`step-${key}`}
                    >
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
                        {t(`workflow.steps.${key}.title`)}
                      </h3>
                      <p className="text-xs text-muted-foreground max-w-[200px]">
                        {t(`workflow.steps.${key}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 5) BEFORE VS AFTER */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-before-after"
        >
          <div className="content-container">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-before-after">
                  {t('beforeAfter.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before */}
                <div 
                  className="relative rounded-xl p-8 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: hoveredSide === 'before' ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: hoveredSide === 'before' ? '0 0 30px rgba(239, 68, 68, 0.1)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredSide('before')}
                  onMouseLeave={() => setHoveredSide(null)}
                  data-testid="card-before"
                >
                  <h3 className="text-lg font-semibold mb-6 text-red-400/80">
                    {t('beforeAfter.before.title')}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {(t('beforeAfter.before.items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: hoveredSide === 'before' ? '60px' : '0',
                      opacity: hoveredSide === 'before' ? 1 : 0
                    }}
                  >
                    <p className="text-xs text-muted-foreground italic border-t border-white/10 pt-4">
                      {t('beforeAfter.before.hoverText')}
                    </p>
                  </div>
                </div>

                {/* After */}
                <div 
                  className="relative rounded-xl p-8 transition-all duration-300 cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: hoveredSide === 'after' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: hoveredSide === 'after' ? '0 0 30px rgba(56, 189, 248, 0.15)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredSide('after')}
                  onMouseLeave={() => setHoveredSide(null)}
                  data-testid="card-after"
                >
                  <h3 className="text-lg font-semibold mb-6 text-primary/80">
                    {t('beforeAfter.after.title')}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {(t('beforeAfter.after.items', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: hoveredSide === 'after' ? '60px' : '0',
                      opacity: hoveredSide === 'after' ? 1 : 0
                    }}
                  >
                    <p className="text-xs text-muted-foreground italic border-t border-white/10 pt-4">
                      {t('beforeAfter.after.hoverText')}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 6) CORE CAPABILITIES - Mixed Layout */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-capabilities"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56, 189, 248, 0.04) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          />

          <div className="content-container relative z-10">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-capabilities">
                  {t('capabilities.title')}
                </h2>
              </div>
            </ScrollFade>

            {/* Spotlight Card */}
            <ScrollFade delay={0.1}>
              <div 
                className="max-w-3xl mx-auto rounded-xl p-10 text-center mb-12"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  boxShadow: '0 0 40px rgba(56, 189, 248, 0.08), inset 0 0 30px rgba(56, 189, 248, 0.03)'
                }}
                data-testid="card-spotlight"
              >
                <div 
                  className="w-16 h-16 rounded-full border border-primary/30 bg-background flex items-center justify-center mx-auto mb-6"
                  style={{
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <Zap className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t('capabilities.spotlight.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('capabilities.spotlight.description')}
                </p>
              </div>
            </ScrollFade>

            {/* Supporting Tiles */}
            <ScrollFade delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilityItems.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="group relative rounded-xl px-6 py-8 text-center transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(56, 189, 248, 0.1)'
                    }}
                    data-testid={`item-capability-${key}`}
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: '0 0 25px rgba(56, 189, 248, 0.12)'
                      }}
                    />
                    <div 
                      className="w-10 h-10 rounded-full border border-primary/20 bg-background/50 flex items-center justify-center mx-auto mb-4 relative z-10"
                      style={{
                        boxShadow: '0 0 12px rgba(56, 189, 248, 0.1)'
                      }}
                    >
                      <Icon className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm relative z-10">
                      {t(`capabilities.items.${key}.title`)}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                      {t(`capabilities.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 7) QUALITY WITHOUT MAINTENANCE */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-quality"
        >
          <div className="content-container">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-quality">
                  {t('quality.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {qualityItems.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="text-center"
                    data-testid={`item-quality-${key}`}
                  >
                    <div 
                      className="w-14 h-14 rounded-full border border-primary/20 bg-background flex items-center justify-center mx-auto mb-5"
                      style={{
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)'
                      }}
                    >
                      <Icon className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold mb-3">
                      {t(`quality.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`quality.items.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 8) WHERE THIS WORKS BEST - Compact Grid */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-use-cases"
        >
          <div className="content-container">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-use-cases">
                  {t('useCases.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {useCaseItems.map(({ key, icon: Icon }) => (
                  <div 
                    key={key}
                    className="flex items-center gap-3 px-5 py-4 rounded-lg transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                    data-testid={`item-use-case-${key}`}
                  >
                    <Icon className="h-4 w-4 text-primary/60 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm font-medium">
                      {t(`useCases.items.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 9) OUTCOMES - Scroll-based reveal */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-outcomes"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(56, 189, 248, 0.05) 0%, transparent 60%)'
            }}
            aria-hidden="true"
          />

          <div className="content-container relative z-10">
            <ScrollFade>
              <div className="text-center mb-14 md:mb-20">
                <h2 className="heading-section mb-4" data-testid="heading-outcomes">
                  {t('outcomes.title')}
                </h2>
              </div>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
                {['cost', 'speed', 'reaction', 'completion'].map((metric, index) => (
                  <ScrollFade key={metric} delay={0.1 + index * 0.1}>
                    <div 
                      className="text-center py-6"
                      data-testid={`metric-${metric}`}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {metric === 'cost' && 'Up to '}
                        {t(`outcomes.metrics.${metric}.value`)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t(`outcomes.metrics.${metric}.label`)}
                      </div>
                    </div>
                  </ScrollFade>
                ))}
              </div>
            </ScrollFade>

            <ScrollFade delay={0.3}>
              <div className="text-center">
                <Link href="/results">
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    {t('outcomes.link')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 10) TESTIMONIAL */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-testimonial"
        >
          <div className="content-container">
            <ScrollFade>
              <div 
                className="max-w-3xl mx-auto rounded-xl p-10"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  boxShadow: '0 0 40px rgba(56, 189, 248, 0.06)'
                }}
                data-testid="card-testimonial"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-6" />
                <blockquote className="text-xl md:text-2xl font-light mb-6 leading-relaxed">
                  "{t('testimonial.quote')}"
                </blockquote>
                <p className="text-muted-foreground mb-8">
                  {t('testimonial.attribution')}
                </p>
                
                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {(t('testimonial.outcomes', { returnObjects: true }) as string[]).map((outcome, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary/60" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/results">
                    <Button variant="outline">
                      {t('testimonial.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* 11) FAQ */}
        <UnifiedFAQ 
          title={t('faq.title')} 
          items={faqItems}
          lastUpdated=""
        />

        {/* 12) FINAL CTA */}
        <section 
          className="section-standard relative z-10"
          data-testid="section-final-cta"
        >
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(56, 189, 248, 0.06) 0%, transparent 50%)'
            }}
            aria-hidden="true"
          />

          <div className="content-container relative z-10">
            <ScrollFade>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-section mb-8" data-testid="heading-final-cta">
                  {t('finalCta.title')}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleTryClick}
                    data-testid="button-final-cta-start"
                  >
                    {t('finalCta.ctaStart')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleDemoClick}
                    data-testid="button-final-cta-demo"
                  >
                    {t('finalCta.ctaDemo')}
                  </Button>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
