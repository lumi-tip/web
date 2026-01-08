import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${5 + Math.random() * 7}s`,
    size: Math.random() > 0.7 ? 2 : Math.random() > 0.4 ? 1.5 : 1,
  }));
}

export default function SoftwareTraining() {
  const { t, i18n } = useTranslation('softwareToolTraining');
  const stars = useMemo(() => generateStars(60), []);
  const [activeNode, setActiveNode] = useState<'upload' | 'generate' | 'practice'>('upload');
  const [activeDeployment, setActiveDeployment] = useState<'url' | 'iframe' | 'scorm'>('url');
  const [activeStep, setActiveStep] = useState(0);
  const [exampleAOpen, setExampleAOpen] = useState(false);
  const [exampleBOpen, setExampleBOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
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

      <main className="hero-animated-bg relative overflow-hidden">
        {/* Starfield background - matches other pages */}
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

        {/* SECTION 1: Hero - 2 column layout */}
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                  data-testid="heading-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg text-muted-foreground/80 mb-10 max-w-lg">
                  {t('hero.supporting')}
                </p>

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

              {/* Right column - Interactive 3-node diagram */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Three nodes with connecting line */}
                <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
                  {(['upload', 'generate', 'practice'] as const).map((node, index) => (
                    <div key={node} className="flex items-center">
                      <button
                        onClick={() => setActiveNode(node)}
                        onMouseEnter={() => setActiveNode(node)}
                        className={`px-5 py-3 rounded-full border-2 text-base font-medium transition-all duration-300 ${
                          activeNode === node
                            ? 'border-primary bg-primary/15 text-primary shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                            : 'border-border/60 bg-card/30 text-foreground/70 hover:border-primary/40 hover:bg-card/50'
                        }`}
                        data-testid={`node-${node}`}
                      >
                        {t(`workflow.${node}.label`)}
                      </button>
                      {index < 2 && (
                        <div 
                          className="w-8 md:w-12 h-0.5 mx-1"
                          style={{
                            background: `linear-gradient(90deg, ${activeNode === node ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255,255,255,0.15)'} 0%, ${activeNode === (['upload', 'generate', 'practice'] as const)[index + 1] ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255,255,255,0.15)'} 100%)`
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Shared detail panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm text-center"
                    style={{
                      boxShadow: '0 0 30px rgba(56, 189, 248, 0.08)'
                    }}
                  >
                    <p className="text-lg text-foreground/90">
                      {t(`workflow.${activeNode}.text`)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Definition Box */}
        <section className="py-12 md:py-16 relative z-10">
          <div className="content-container">
            <motion.div 
              className="rounded-xl p-8 md:p-10 max-w-4xl mx-auto border border-primary/15 transition-all duration-300 hover:border-primary/25"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.8)',
                boxShadow: '0 0 40px rgba(48, 79, 254, 0.1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                boxShadow: '0 0 60px rgba(56, 189, 248, 0.15)'
              }}
            >
              <span className="text-xs font-medium tracking-wider text-primary mb-4 block uppercase">
                {t('definition.label')}
              </span>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-3">
                {t('definition.line1')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('definition.line2')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Impact Metrics Strip */}
        <section className="py-10 md:py-12 relative z-10">
          <div className="content-container">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['cost', 'completion', 'engagement'].map((metric, index) => (
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-5 py-3 rounded-full border border-border/40 bg-card/20 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.05)'
                  }}
                >
                  <span className="text-sm md:text-base text-foreground/80">
                    {t(`hero.metrics.${metric}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Where tool training breaks - Premium boxes matching Analytics */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-problems"
            >
              {t('problems.title')}
            </motion.h2>
            <p className="text-center text-lg text-muted-foreground mb-14 md:mb-16 max-w-2xl mx-auto">
              {t('problems.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {['cost', 'slow', 'completion', 'visibility'].map((key, index) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 md:p-8 rounded-xl border border-primary/20 relative overflow-visible transition-all duration-300 hover:border-primary/35"
                  style={{
                    backgroundColor: 'rgba(10, 20, 60, 0.5)',
                    backgroundImage: 'linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, transparent 100%)',
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.12), 0 0 40px rgba(48, 79, 254, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  }}
                  whileHover={{
                    boxShadow: '0 0 25px rgba(59, 130, 246, 0.2), 0 0 50px rgba(48, 79, 254, 0.1)'
                  }}
                  data-testid={`problem-${key}`}
                >
                  <h3 className="font-semibold text-foreground mb-3 text-xl">
                    {t(`problems.items.${key}.title`)}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(`problems.items.${key}.text`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: From documentation to interactive practice - Stepper */}
        <section className="py-20 md:py-28 relative z-10" ref={stepperRef}>
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-stepper"
            >
              {t('stepper.title')}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Left side - Step list */}
              <div className="relative">
                {/* Progress line */}
                <div className="absolute left-4 top-3 bottom-3 w-0.5 bg-border/30 rounded-full">
                  <motion.div 
                    className="w-full bg-primary/60 rounded-full"
                    style={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                {/* Steps */}
                <div className="space-y-8">
                  {stepKeys.map((key, index) => (
                    <div key={key} ref={stepRefs[index]} className="pl-14 relative">
                      {/* Step marker */}
                      <motion.div 
                        className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          activeStep >= index 
                            ? 'border-primary bg-primary/20 text-primary' 
                            : 'border-border/50 bg-background text-muted-foreground'
                        }`}
                        animate={activeStep >= index ? { 
                          boxShadow: '0 0 15px rgba(56, 189, 248, 0.35)'
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
                        <h3 className={`font-semibold text-xl mb-2 transition-colors duration-300 ${
                          activeStep === index ? 'text-foreground' : 'text-foreground/70'
                        }`}>
                          {t(`stepper.steps.${key}.title`)}
                        </h3>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Expanded details panel */}
              <div 
                className="lg:sticky lg:top-32 h-fit p-8 rounded-xl border border-primary/15"
                style={{
                  backgroundColor: 'rgba(10, 17, 37, 0.6)',
                  boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {t(`stepper.steps.${stepKeys[activeStep]}.title`)}
                    </h4>
                    <ul className="space-y-3">
                      {stepDetails(stepKeys[activeStep]).map((detail, i) => (
                        <li key={i} className="text-base text-foreground/80 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Designed for trainers and learners - Two-lane layout */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-split"
            >
              {t('split.title')}
            </motion.h2>

            <div 
              className="grid lg:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-xl border border-primary/15 overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.4)',
              }}
            >
              {/* Left: What trainers get - Checklist */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-10"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-8">{t('split.trainers.title')}</h3>
                <ul className="space-y-4">
                  {trainerItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-4 text-base text-foreground/80"
                    >
                      <span className="px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Subtle gradient divider */}
              <div 
                className="hidden lg:block w-px"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(56, 189, 248, 0.2) 20%, rgba(56, 189, 248, 0.2) 80%, transparent 100%)'
                }}
              />

              {/* Right: What learners get - Chat mock */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 md:p-10 lg:border-l-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, transparent 60%)'
                }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-8">{t('split.learners.title')}</h3>
                
                {/* Chat-like UI mock */}
                <div className="space-y-4 mb-8">
                  {learnerBubbles.map((bubble, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className={`p-4 rounded-xl text-base transition-all duration-300 hover:scale-[1.02] ${
                        index === 0 ? 'max-w-[90%] bg-primary/12 border border-primary/25 ml-auto' :
                        index === 1 ? 'max-w-[85%] bg-card/60 border border-border/50' :
                        'max-w-[80%] bg-primary/8 border border-primary/20 ml-auto'
                      }`}
                      style={{
                        boxShadow: index % 2 === 0 ? '0 0 15px rgba(56, 189, 248, 0.08)' : 'none'
                      }}
                    >
                      {bubble}
                    </motion.div>
                  ))}
                </div>

                <p className="text-base text-primary/80 font-medium">
                  {t('split.learners.supporting')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Deployment options - Segmented controls */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-deployment"
            >
              {t('deployment.title')}
            </motion.h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {t('deployment.microcopy')}
            </p>

            <div className="max-w-2xl mx-auto">
              {/* Segmented controls */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex p-1.5 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm">
                  {(['url', 'iframe', 'scorm'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => setActiveDeployment(option)}
                      className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                        activeDeployment === option
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      data-testid={`chip-deployment-${option}`}
                    >
                      {activeDeployment === option && (
                        <motion.div
                          layoutId="activeDeployment"
                          className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                          style={{
                            boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)'
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{t(`deployment.options.${option}.label`)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDeployment}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="text-center p-8 md:p-10 rounded-xl border border-primary/15"
                  style={{
                    backgroundColor: 'rgba(10, 17, 37, 0.6)',
                    boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                  }}
                >
                  <p className="text-lg md:text-xl text-foreground/85">
                    {t(`deployment.options.${activeDeployment}.detail`)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SECTION 8: Examples - Two featured expandable cards */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-examples"
            >
              {t('examples.title')}
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Example A: Sales training */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-primary/20 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  boxShadow: '0 0 20px rgba(48, 79, 254, 0.08)',
                }}
              >
                <button
                  onClick={() => setExampleAOpen(!exampleAOpen)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-card/20 transition-all duration-300"
                  data-testid="button-example-a-toggle"
                >
                  <div>
                    <span className="text-xs font-medium tracking-wider text-primary uppercase block mb-2">
                      {t('examples.labelA')}
                    </span>
                    <span className="font-semibold text-xl">{t('examples.exampleA.title')}</span>
                  </div>
                  <span className="text-xl text-primary font-light transition-transform duration-200">
                    {exampleAOpen ? '−' : '+'}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: exampleAOpen ? 'auto' : 0,
                    opacity: exampleAOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 pt-0 md:pt-0">
                    {/* Without AI Tutor */}
                    <div className="p-6 rounded-xl border border-border/40 bg-card/20">
                      <h4 className="font-semibold mb-5 text-lg">{t('examples.exampleA.without.title')}</h4>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        <li>{t('examples.exampleA.without.learnerSeats')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleA.without.teacherSeat')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleA.without.packages')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                      </ul>
                    </div>

                    {/* With AI Tutor */}
                    <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                      <h4 className="font-semibold mb-5 text-lg text-primary">{t('examples.exampleA.with.title')}</h4>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        <li>{t('examples.exampleA.with.learnerSeats')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleA.with.teacherSeat')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleA.with.packages')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Example B: Tool onboarding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-xl border border-primary/20 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  boxShadow: '0 0 20px rgba(48, 79, 254, 0.08)',
                }}
              >
                <button
                  onClick={() => setExampleBOpen(!exampleBOpen)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-card/20 transition-all duration-300"
                  data-testid="button-example-b-toggle"
                >
                  <div>
                    <span className="text-xs font-medium tracking-wider text-primary uppercase block mb-2">
                      {t('examples.labelB')}
                    </span>
                    <span className="font-semibold text-xl">{t('examples.exampleB.title')}</span>
                  </div>
                  <span className="text-xl text-primary font-light transition-transform duration-200">
                    {exampleBOpen ? '−' : '+'}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: exampleBOpen ? 'auto' : 0,
                    opacity: exampleBOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 pt-0 md:pt-0">
                    {/* Without AI Tutor */}
                    <div className="p-6 rounded-xl border border-border/40 bg-card/20">
                      <h4 className="font-semibold mb-5 text-lg">{t('examples.exampleB.without.title')}</h4>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        <li>{t('examples.exampleB.without.learnerSeats')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleB.without.teacherSeat')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleB.without.packages')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                      </ul>
                    </div>

                    {/* With AI Tutor */}
                    <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                      <h4 className="font-semibold mb-5 text-lg text-primary">{t('examples.exampleB.with.title')}</h4>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        <li>{t('examples.exampleB.with.learnerSeats')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleB.with.teacherSeat')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                        <li>{t('examples.exampleB.with.packages')}: <span className="text-foreground">{t('examples.placeholder')}</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQs */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-faqs"
            >
              {t('faqs.title')}
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {['speed', 'tutor', 'deploy'].map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-xl border border-primary/15 overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(10, 17, 37, 0.5)',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/30 transition-colors"
                    data-testid={`button-faq-${key}`}
                  >
                    <span className="font-semibold text-lg pr-4">{t(`faqs.items.${key}.question`)}</span>
                    <span className="text-xl text-primary font-light flex-shrink-0 transition-transform duration-200">
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
                    <p className="px-6 pb-6 text-base text-muted-foreground leading-relaxed">
                      {t(`faqs.items.${key}.answer`)}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Final CTA */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-xl border border-primary/20 group transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 20, 60, 0.5)',
                boxShadow: '0 0 30px rgba(48, 79, 254, 0.1)',
              }}
              whileHover={{
                boxShadow: '0 0 60px rgba(56, 189, 248, 0.2)'
              }}
            >
              {/* Hover glow sweep */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)'
                }}
              />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-10 relative z-10">
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
    </div>
  );
}
