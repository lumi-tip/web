import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
  }));
}

export default function SoftwareTraining() {
  const { t, i18n } = useTranslation('softwareToolTraining');
  const stars = useMemo(() => generateStars(80), []);
  const [activeDeployment, setActiveDeployment] = useState<'url' | 'iframe' | 'scorm'>('url');
  const [activeStep, setActiveStep] = useState(0);
  const [exampleOpen, setExampleOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const problemsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const stepperRef = useRef<HTMLDivElement>(null);
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  
  const step0InView = useInView(step0Ref, { margin: "-40% 0px -40% 0px" });
  const step1InView = useInView(step1Ref, { margin: "-40% 0px -40% 0px" });
  const step2InView = useInView(step2Ref, { margin: "-40% 0px -40% 0px" });
  const step3InView = useInView(step3Ref, { margin: "-40% 0px -40% 0px" });
  
  useEffect(() => {
    if (step3InView) setActiveStep(3);
    else if (step2InView) setActiveStep(2);
    else if (step1InView) setActiveStep(1);
    else if (step0InView) setActiveStep(0);
  }, [step0InView, step1InView, step2InView, step3InView]);

  const handleProblemsScroll = () => {
    if (problemsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = problemsRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    }
  };

  const handleDemoClick = () => {
    analytics.ctaClick('book_demo', 'software_tool_training');
    window.location.href = '/contact';
  };

  const handleStartClick = () => {
    analytics.ctaClick('start_free', 'software_tool_training');
    const platformUrl = import.meta.env.VITE_LEARNPACK_PLATFORM || 'https://app.learnpack.co';
    window.location.href = `${platformUrl}/signup`;
  };

  const stepKeys = ['setup', 'generate', 'refine', 'publish'];
  const stepRefs = [step0Ref, step1Ref, step2Ref, step3Ref];
  
  const trainerItems = t('split.trainers.items', { returnObjects: true }) as string[];
  const learnerBubbles = t('split.learners.bubbles', { returnObjects: true }) as string[];
  const stepDetails = (key: string) => t(`stepper.steps.${key}.details`, { returnObjects: true }) as string[];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LearnPack Software & Tool Training",
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
      "Built-in AI Tutor",
      "Real-Time Analytics",
      "SCORM Export",
      "iFrame Embedding"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet key={i18n.language}>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="relative overflow-hidden">
        {/* Animated star field background */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/60"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animation: `twinkle ${star.duration} ${star.delay} infinite ease-in-out`,
              }}
            />
          ))}
          {/* Blue light beams */}
          <div 
            className="absolute top-0 left-1/4 w-px h-full opacity-10"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.5) 30%, rgba(56, 189, 248, 0.5) 70%, transparent 100%)' }}
          />
          <div 
            className="absolute top-0 right-1/3 w-px h-full opacity-10"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.5) 40%, rgba(56, 189, 248, 0.5) 60%, transparent 100%)' }}
          />
        </div>

        {/* SECTION 1: Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
          <div className="content-container">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                  data-testid="heading-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                
                {/* Micro metrics row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-8">
                  <span>{t('hero.metrics.cost')}</span>
                  <span className="text-muted-foreground/40">|</span>
                  <span>{t('hero.metrics.completion')}</span>
                  <span className="text-muted-foreground/40">|</span>
                  <span>{t('hero.metrics.engagement')}</span>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={handleDemoClick}
                    data-testid="button-hero-demo"
                  >
                    {t('hero.ctaDemo')}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleStartClick}
                    data-testid="button-hero-start"
                  >
                    {t('hero.ctaStart')}
                  </Button>
                </div>
              </motion.div>

              {/* Right column - Workflow preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Faint connecting line */}
                <div 
                  className="absolute left-6 top-4 bottom-4 w-px hidden md:block"
                  style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.2) 20%, rgba(56, 189, 248, 0.2) 80%, transparent 100%)' }}
                />
                
                {/* Workflow panels */}
                <div className="space-y-4 pl-0 md:pl-10">
                  {['upload', 'generate', 'practice'].map((key, index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group p-4 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5"
                      style={{
                        boxShadow: '0 0 0 rgba(56, 189, 248, 0)'
                      }}
                      whileHover={{
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)'
                      }}
                    >
                      <span className="text-xs uppercase tracking-wider text-primary/80 font-medium">
                        {t(`workflow.${key}.label`)}
                      </span>
                      <p className="text-sm text-foreground/80 mt-1">
                        {t(`workflow.${key}.text`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Definition strip */}
        <motion.section 
          className="py-6 relative z-10 border-y border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="content-container text-center">
            <p className="text-sm md:text-base text-foreground/90 mb-1">
              {t('definition.line1')}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              {t('definition.line2')}
            </p>
          </div>
        </motion.section>

        {/* SECTION 3: Where tool training breaks - Horizontal scroll rail */}
        <section className="py-16 md:py-20 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-problems"
            >
              {t('problems.title')}
            </motion.h2>
          </div>
          
          {/* Horizontal scroll container */}
          <div 
            ref={problemsRef}
            onScroll={handleProblemsScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 md:px-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex-shrink-0 w-4 md:w-[calc((100%-1024px)/2)]" />
            {['cost', 'slow', 'completion', 'visibility'].map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 snap-center p-5 rounded-lg border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                style={{ boxShadow: '0 0 0 rgba(56, 189, 248, 0)' }}
                whileHover={{ boxShadow: '0 0 15px rgba(56, 189, 248, 0.08)' }}
              >
                <h3 className="font-semibold text-sm mb-2">{t(`problems.items.${key}.title`)}</h3>
                <p className="text-xs text-muted-foreground">{t(`problems.items.${key}.text`)}</p>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-4 md:w-[calc((100%-1024px)/2)]" />
          </div>
          
          {/* Scroll progress indicator */}
          <div className="content-container mt-6">
            <div className="h-0.5 bg-border/30 rounded-full overflow-hidden max-w-xs mx-auto">
              <motion.div 
                className="h-full bg-primary/50 rounded-full"
                style={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: From documentation to interactive practice - Stepper */}
        <section className="py-16 md:py-24 relative z-10" ref={stepperRef}>
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-stepper"
            >
              {t('stepper.title')}
            </motion.h2>

            <div className="max-w-2xl mx-auto relative">
              {/* Progress line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border/30 rounded-full">
                <motion.div 
                  className="w-full bg-primary/60 rounded-full"
                  style={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {stepKeys.map((key, index) => (
                  <div key={key} ref={stepRefs[index]} className="pl-10 relative">
                    {/* Step marker */}
                    <motion.div 
                      className={`absolute left-0 top-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        activeStep >= index 
                          ? 'border-primary bg-primary/20 text-primary' 
                          : 'border-border/50 bg-background text-muted-foreground'
                      }`}
                      animate={activeStep >= index ? { 
                        boxShadow: '0 0 12px rgba(56, 189, 248, 0.3)'
                      } : {
                        boxShadow: '0 0 0px rgba(56, 189, 248, 0)'
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Step content */}
                    <motion.div
                      animate={{ opacity: activeStep === index ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                        activeStep === index ? 'text-foreground' : 'text-foreground/70'
                      }`}>
                        {t(`stepper.steps.${key}.title`)}
                      </h3>
                      
                      {/* Expanded details (accordion) */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: activeStep === index ? 'auto' : 0,
                          opacity: activeStep === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-1 mt-2">
                          {stepDetails(key).map((detail, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Designed for trainers and learners - Split section */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-split"
            >
              {t('split.title')}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: What trainers get - Checklist */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-6">{t('split.trainers.title')}</h3>
                <ul className="space-y-3">
                  {trainerItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: What learners get - Chat mock */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">{t('split.learners.title')}</h3>
                
                {/* Chat-like UI mock */}
                <div className="space-y-3 mb-6">
                  {learnerBubbles.map((bubble, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        index % 2 === 0 
                          ? 'bg-primary/10 border border-primary/20 ml-auto' 
                          : 'bg-card/50 border border-border/40'
                      }`}
                    >
                      {bubble}
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground italic">
                  {t('split.learners.supporting')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Deployment options - Chips/Tabs */}
        <section className="py-16 md:py-20 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-deployment"
            >
              {t('deployment.title')}
            </motion.h2>

            <div className="max-w-lg mx-auto">
              {/* Chips */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {(['url', 'iframe', 'scorm'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => setActiveDeployment(option)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeDeployment === option
                        ? 'bg-primary/20 text-primary border border-primary/40'
                        : 'bg-card/30 text-muted-foreground border border-border/40 hover:border-primary/30'
                    }`}
                    data-testid={`chip-deployment-${option}`}
                  >
                    {t(`deployment.options.${option}.label`)}
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <motion.div
                key={activeDeployment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-lg border border-border/40 bg-card/20"
              >
                <p className="text-muted-foreground">
                  {t(`deployment.options.${activeDeployment}.detail`)}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Mini example - Collapsible */}
        <section className="py-12 relative z-10">
          <div className="content-container">
            <div className="max-w-2xl mx-auto">
              <button
                onClick={() => setExampleOpen(!exampleOpen)}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-border/40 bg-card/20 hover:border-primary/30 transition-all duration-300"
                data-testid="button-example-toggle"
              >
                <span className="font-semibold">{t('example.title')}</span>
                <span className="text-sm text-muted-foreground transition-transform duration-200">
                  {exampleOpen ? '−' : '+'}
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: exampleOpen ? 'auto' : 0,
                  opacity: exampleOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6 mt-4 p-4">
                  {/* Without AI Tutor */}
                  <div className="p-4 rounded-lg border border-border/40 bg-card/10">
                    <h4 className="font-medium mb-4 text-sm">{t('example.without.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>{t('example.without.learnerSeats')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                      <li>{t('example.without.teacherSeat')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                      <li>{t('example.without.packages')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                    </ul>
                  </div>

                  {/* With AI Tutor */}
                  <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                    <h4 className="font-medium mb-4 text-sm text-primary">{t('example.with.title')}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>{t('example.with.learnerSeats')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                      <li>{t('example.with.teacherSeat')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                      <li>{t('example.with.packages')}: <span className="text-foreground">{t('example.placeholder')}</span></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQs */}
        <section className="py-16 md:py-20 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-faqs"
            >
              {t('faqs.title')}
            </motion.h2>

            <div className="max-w-2xl mx-auto space-y-3">
              {['speed', 'tutor', 'deploy'].map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-border/40 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-card/30 transition-colors"
                    data-testid={`button-faq-${key}`}
                  >
                    <span className="font-medium text-sm">{t(`faqs.items.${key}.question`)}</span>
                    <span className="text-sm text-muted-foreground flex-shrink-0 transition-transform duration-200">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-sm text-muted-foreground">
                      {t(`faqs.items.${key}.answer`)}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: Final CTA */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center p-8 rounded-lg border border-border/40 bg-card/10 group transition-all duration-500 relative overflow-hidden"
              whileHover={{
                boxShadow: '0 0 40px rgba(56, 189, 248, 0.15)'
              }}
            >
              {/* Hover glow sweep */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(56, 189, 248, 0.1) 0%, transparent 70%)'
                }}
              />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-8 relative z-10">
                {t('cta.headline')}
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Button 
                  size="lg" 
                  onClick={handleDemoClick}
                  data-testid="button-cta-demo"
                >
                  {t('cta.ctaDemo')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleStartClick}
                  data-testid="button-cta-start"
                >
                  {t('cta.ctaStart')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* CSS for twinkle animation and scroll hiding */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
