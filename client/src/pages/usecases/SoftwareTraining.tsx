import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
  const [stepperAutoPaused, setStepperAutoPaused] = useState(false);
  const [exampleAOpen, setExampleAOpen] = useState(false);
  const [exampleBOpen, setExampleBOpen] = useState(false);
  const [exampleAHovered, setExampleAHovered] = useState(false);
  const [exampleBHovered, setExampleBHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [autoCyclePaused, setAutoCyclePaused] = useState(false);
  
  const stepperRef = useRef<HTMLDivElement>(null);
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  
  // Note: Removed useInView for stepper - now uses click/auto-advance only

  const nodes = ['upload', 'generate', 'practice'] as const;

  const handleNodeClick = useCallback((node: typeof nodes[number]) => {
    setActiveNode(node);
    setAutoCyclePaused(true);
    setTimeout(() => setAutoCyclePaused(false), 10000);
  }, []);

  useEffect(() => {
    if (autoCyclePaused) return;
    
    const interval = setInterval(() => {
      setActiveNode((current) => {
        const currentIndex = nodes.indexOf(current);
        const nextIndex = (currentIndex + 1) % nodes.length;
        return nodes[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [autoCyclePaused]);

  // Stepper auto-advance: cycle 1->2->3->4->1 every 4 seconds
  useEffect(() => {
    if (stepperAutoPaused) return;
    
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, [stepperAutoPaused]);

  // Handle stepper click - pause auto-advance for 10 seconds
  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
    setStepperAutoPaused(true);
    setTimeout(() => setStepperAutoPaused(false), 10000);
  }, []);

  // Detect touch device for examples hover behavior
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

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
        {/* Starfield background */}
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

        {/* Blue glow - top right */}
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

        {/* SECTION 1: Hero - Compact 2-column layout */}
        <section className="pt-16 pb-12 md:pt-20 md:pb-16 relative z-10">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  data-testid="heading-hero"
                >
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed max-w-xl">
                  {t('hero.subtitle')}
                </p>
                <p className="text-base text-muted-foreground/80 mb-6 max-w-lg">
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

              {/* Right column - Auto-cycling 3-node diagram */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Three nodes with connecting line */}
                <div className="flex items-center justify-center gap-3 md:gap-5 mb-6">
                  {nodes.map((node, index) => (
                    <div key={node} className="flex items-center">
                      <motion.button
                        onClick={() => handleNodeClick(node)}
                        className={`px-4 py-2.5 md:px-5 md:py-3 rounded-full border-2 text-sm md:text-base font-medium transition-colors duration-300 ${
                          activeNode === node
                            ? 'border-primary bg-primary/15 text-primary'
                            : 'border-border/60 bg-card/30 text-foreground/70 hover:border-primary/40 hover:bg-card/50'
                        }`}
                        animate={activeNode === node ? {
                          boxShadow: '0 0 25px rgba(56, 189, 248, 0.35)',
                          scale: 1.02,
                        } : {
                          boxShadow: '0 0 0px rgba(56, 189, 248, 0)',
                          scale: 1,
                        }}
                        transition={{ duration: 0.4 }}
                        data-testid={`node-${node}`}
                      >
                        {t(`workflow.${node}.label`)}
                      </motion.button>
                      {index < 2 && (
                        <motion.div 
                          className="w-6 md:w-10 h-0.5 mx-1"
                          animate={{
                            background: activeNode === node || activeNode === nodes[index + 1]
                              ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0.6) 100%)'
                              : 'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 100%)'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Shared detail panel with crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 md:p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm text-center"
                    style={{
                      boxShadow: '0 0 30px rgba(56, 189, 248, 0.08)'
                    }}
                  >
                    <p className="text-base md:text-lg text-foreground/90">
                      {t(`workflow.${activeNode}.text`)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Metrics Strip - Clean 3-column container */}
        <section className="py-8 md:py-10 relative z-10">
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30"
              style={{
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.05)'
              }}
              whileHover={{
                boxShadow: '0 0 35px rgba(56, 189, 248, 0.1)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30">
                {['cost', 'completion', 'engagement'].map((metric) => (
                  <div key={metric} className="px-6 py-5 text-center">
                    <span className="text-sm md:text-base text-foreground/85 leading-relaxed">
                      {t(`hero.metrics.${metric}`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Definition Box */}
        <section className="py-10 md:py-14 relative z-10">
          <div className="content-container">
            <motion.div 
              className="rounded-xl p-7 md:p-9 max-w-4xl mx-auto border border-primary/15 transition-all duration-300 hover:border-primary/25"
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
              <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-3">
                {t('definition.line1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('definition.line2')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Where tool training breaks */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-problems"
            >
              {t('problems.title')}
            </motion.h2>
            <p className="text-center text-base md:text-lg text-muted-foreground mb-12 md:mb-14 max-w-2xl mx-auto">
              {t('problems.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
              {['cost', 'slow', 'completion', 'visibility'].map((key, index) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 md:p-7 rounded-xl border border-primary/20 relative overflow-visible transition-all duration-300 hover:border-primary/35"
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
                  <h3 className="font-semibold text-foreground mb-2 text-lg md:text-xl">
                    {t(`problems.items.${key}.title`)}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t(`problems.items.${key}.text`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Stepper - Compact content-driven module with auto-advance */}
        <section className="py-16 md:py-24 relative z-10" ref={stepperRef}>
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-stepper"
            >
              {t('stepper.title')}
            </motion.h2>

            <div 
              className="max-w-4xl mx-auto rounded-xl border border-primary/15"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.5)',
                boxShadow: '0 0 25px rgba(48, 79, 254, 0.08)',
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Step list */}
                <div className="p-5 md:p-6 lg:w-[45%] lg:border-r border-border/20 relative">
                  {/* Progress line - z-index 0 (lowest layer) */}
                  <div 
                    className="absolute left-9 md:left-10 top-6 bottom-6 w-px bg-border/20 rounded-full"
                    style={{ zIndex: 0 }}
                  >
                    <motion.div 
                      className="w-full bg-primary/50 rounded-full"
                      style={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>

                  {/* Steps */}
                  <div className="space-y-3 relative">
                    {stepKeys.map((key, index) => (
                      <motion.div
                        key={key} 
                        ref={stepRefs[index]} 
                        className="pl-10 py-2 pr-3 relative text-left w-full cursor-pointer rounded-lg transition-all duration-300"
                        onClick={() => handleStepClick(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleStepClick(index)}
                        style={{ zIndex: 10 }}
                        animate={activeStep === index ? {
                          backgroundColor: 'rgba(56, 189, 248, 0.08)',
                          boxShadow: 'inset 0 0 20px rgba(56, 189, 248, 0.06)'
                        } : {
                          backgroundColor: 'transparent',
                          boxShadow: 'none'
                        }}
                        whileHover={{
                          backgroundColor: activeStep === index ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255, 255, 255, 0.02)'
                        }}
                      >
                        {/* Step marker - z-index 20 with opaque background */}
                        <motion.div 
                          className={`absolute left-0 top-2.5 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-colors duration-300 ${
                            activeStep >= index 
                              ? 'border-primary text-primary' 
                              : 'border-border/40 text-muted-foreground'
                          }`}
                          style={{ 
                            zIndex: 20, 
                            backgroundColor: activeStep >= index ? 'rgba(10, 17, 37, 1)' : 'rgba(10, 17, 37, 1)',
                            backgroundImage: activeStep >= index ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0.05) 100%)' : 'none'
                          }}
                          animate={activeStep === index ? { 
                            boxShadow: '0 0 12px rgba(56, 189, 248, 0.4), 0 0 4px rgba(56, 189, 248, 0.2)'
                          } : activeStep > index ? {
                            boxShadow: '0 0 8px rgba(56, 189, 248, 0.2)'
                          } : {
                            boxShadow: 'none'
                          }}
                        >
                          {index + 1}
                        </motion.div>

                        {/* Step title */}
                        <h3 className={`font-medium text-sm md:text-base transition-colors duration-300 ${
                          activeStep === index ? 'text-foreground' : 'text-foreground/60 hover:text-foreground/80'
                        }`}>
                          {t(`stepper.steps.${key}.title`)}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side - Detail panel with crossfade - z-index 30 */}
                <div 
                  className="p-5 md:p-6 lg:w-[55%]"
                  style={{
                    zIndex: 30,
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.02) 0%, transparent 60%)',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <h4 className="text-base md:text-lg font-semibold text-primary mb-4">
                        {t(`stepper.steps.${stepKeys[activeStep]}.title`)}
                      </h4>
                      <ul className="space-y-2.5">
                        {stepDetails(stepKeys[activeStep]).map((detail, i) => (
                          <li key={i} className="text-sm md:text-base text-foreground/80 flex items-start gap-2.5">
                            <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Trainers and Learners - Side by side on desktop */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-split"
            >
              {t('split.title')}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 max-w-5xl mx-auto">
              {/* Left: What trainers get */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-8 rounded-xl lg:rounded-r-none border border-primary/15 lg:border-r-0"
                style={{
                  backgroundColor: 'rgba(10, 17, 37, 0.4)',
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-6">{t('split.trainers.title')}</h3>
                <ul className="space-y-3">
                  {trainerItems.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="flex items-start gap-3 text-sm md:text-base text-foreground/80"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-semibold flex-shrink-0 flex items-center justify-center mt-0.5">
                        ✓
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right: What learners get - Bigger chat mock, vertically centered */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 md:p-8 rounded-xl lg:rounded-l-none border border-primary/15 flex flex-col justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.04) 0%, rgba(10, 17, 37, 0.4) 60%)',
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-6">{t('split.learners.title')}</h3>
                
                {/* Larger chat-like UI mock */}
                <div className="space-y-4 mb-6">
                  {learnerBubbles.map((bubble, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className={`p-4 md:p-5 rounded-xl text-sm md:text-base transition-all duration-300 hover:scale-[1.01] ${
                        index === 0 ? 'max-w-[95%] bg-primary/12 border border-primary/25 ml-auto' :
                        index === 1 ? 'max-w-[90%] bg-card/60 border border-border/50' :
                        'max-w-[85%] bg-primary/8 border border-primary/20 ml-auto'
                      }`}
                      style={{
                        boxShadow: index % 2 === 0 ? '0 0 18px rgba(56, 189, 248, 0.1)' : 'none'
                      }}
                    >
                      {bubble}
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm md:text-base text-primary/80 font-medium">
                  {t('split.learners.supporting')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Deployment options */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-deployment"
            >
              {t('deployment.title')}
            </motion.h2>
            <p className="text-center text-muted-foreground mb-10 text-base md:text-lg">
              {t('deployment.microcopy')}
            </p>

            <div className="max-w-2xl mx-auto">
              {/* Segmented controls */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex p-1.5 rounded-full border border-border/40 bg-card/30 backdrop-blur-sm">
                  {(['url', 'iframe', 'scorm'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => setActiveDeployment(option)}
                      className={`relative px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="text-center p-6 md:p-8 rounded-xl border border-primary/15"
                  style={{
                    backgroundColor: 'rgba(10, 17, 37, 0.6)',
                    boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
                  }}
                >
                  <p className="text-base md:text-lg text-foreground/85">
                    {t(`deployment.options.${activeDeployment}.detail`)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* SECTION 8: Examples - Hover-to-expand on desktop, click on mobile */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid="heading-examples"
            >
              {t('examples.title')}
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-5">
              {/* Example A */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-primary/20 transition-all duration-300 ease-out"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  boxShadow: (exampleAHovered || exampleAOpen) ? '0 4px 30px rgba(48, 79, 254, 0.18)' : '0 0 20px rgba(48, 79, 254, 0.08)',
                  transform: exampleAHovered ? 'translateY(-3px)' : 'translateY(0)',
                }}
                onMouseEnter={() => {
                  setExampleAHovered(true);
                  if (!isTouchDevice) setExampleAOpen(true);
                }}
                onMouseLeave={() => {
                  setExampleAHovered(false);
                  if (!isTouchDevice) setExampleAOpen(false);
                }}
              >
                <div
                  onClick={() => isTouchDevice && setExampleAOpen(!exampleAOpen)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  data-testid="button-example-a-toggle"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setExampleAOpen(!exampleAOpen)}
                >
                  <div>
                    <span className="text-xs font-medium tracking-wider text-primary uppercase block mb-1.5">
                      {t('examples.labelA')}
                    </span>
                    <span className="font-semibold text-lg md:text-xl">{t('examples.exampleA.title')}</span>
                  </div>
                  <span 
                    className="text-xs text-primary/70 font-medium transition-opacity duration-200"
                    style={{ opacity: exampleAHovered && !exampleAOpen ? 1 : 0 }}
                  >
                    {t('examples.hoverHint')}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: exampleAOpen ? 'auto' : 0,
                    opacity: exampleAOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-5 p-5 md:p-6 pt-0 md:pt-0">
                    {/* Without AI Tutor */}
                    <div className="p-5 rounded-xl border border-border/40 bg-card/20">
                      <h4 className="font-semibold mb-2 text-base md:text-lg">{t('examples.exampleA.without.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground/70 mb-4 italic">{t('examples.exampleA.without.helper')}</p>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        <li>{t('examples.exampleA.without.learnerSeats')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                        <li>{t('examples.exampleA.without.teacherSeat')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                        <li>{t('examples.exampleA.without.packages')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                      </ul>
                    </div>

                    {/* With AI Tutor */}
                    <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                      <h4 className="font-semibold mb-2 text-base md:text-lg text-primary">{t('examples.exampleA.with.title')}</h4>
                      <p className="text-xs md:text-sm text-primary/60 mb-4 italic">{t('examples.exampleA.with.helper')}</p>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        <li>{t('examples.exampleA.with.learnerSeats')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                        <li>{t('examples.exampleA.with.teacherSeat')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                        <li>{t('examples.exampleA.with.packages')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Example B */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-xl border border-primary/20 transition-all duration-300 ease-out"
                style={{
                  backgroundColor: 'rgba(10, 20, 60, 0.4)',
                  boxShadow: (exampleBHovered || exampleBOpen) ? '0 4px 30px rgba(48, 79, 254, 0.18)' : '0 0 20px rgba(48, 79, 254, 0.08)',
                  transform: exampleBHovered ? 'translateY(-3px)' : 'translateY(0)',
                }}
                onMouseEnter={() => {
                  setExampleBHovered(true);
                  if (!isTouchDevice) setExampleBOpen(true);
                }}
                onMouseLeave={() => {
                  setExampleBHovered(false);
                  if (!isTouchDevice) setExampleBOpen(false);
                }}
              >
                <div
                  onClick={() => isTouchDevice && setExampleBOpen(!exampleBOpen)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  data-testid="button-example-b-toggle"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setExampleBOpen(!exampleBOpen)}
                >
                  <div>
                    <span className="text-xs font-medium tracking-wider text-primary uppercase block mb-1.5">
                      {t('examples.labelB')}
                    </span>
                    <span className="font-semibold text-lg md:text-xl">{t('examples.exampleB.title')}</span>
                  </div>
                  <span 
                    className="text-xs text-primary/70 font-medium transition-opacity duration-200"
                    style={{ opacity: exampleBHovered && !exampleBOpen ? 1 : 0 }}
                  >
                    {t('examples.hoverHint')}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: exampleBOpen ? 'auto' : 0,
                    opacity: exampleBOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-5 p-5 md:p-6 pt-0 md:pt-0">
                    {/* Without AI Tutor */}
                    <div className="p-5 rounded-xl border border-border/40 bg-card/20">
                      <h4 className="font-semibold mb-2 text-base md:text-lg">{t('examples.exampleB.without.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground/70 mb-4 italic">{t('examples.exampleB.without.helper')}</p>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        <li>{t('examples.exampleB.without.learnerSeats')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                        <li>{t('examples.exampleB.without.teacherSeat')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                        <li>{t('examples.exampleB.without.packages')}: <span className="text-foreground">{t('examples.placeholderWithout')}</span></li>
                      </ul>
                    </div>

                    {/* With AI Tutor */}
                    <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                      <h4 className="font-semibold mb-2 text-base md:text-lg text-primary">{t('examples.exampleB.with.title')}</h4>
                      <p className="text-xs md:text-sm text-primary/60 mb-4 italic">{t('examples.exampleB.with.helper')}</p>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        <li>{t('examples.exampleB.with.learnerSeats')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                        <li>{t('examples.exampleB.with.teacherSeat')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                        <li>{t('examples.exampleB.with.packages')}: <span className="text-foreground">{t('examples.placeholderWith')}</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQs - Matching reference design */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                data-testid="heading-faqs"
              >
                {t('faqs.title')}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t('faqs.lastUpdated')}
              </p>
            </motion.div>

            {/* Single container for all FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto rounded-xl border border-primary/15 overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 17, 37, 0.5)',
                boxShadow: '0 0 30px rgba(48, 79, 254, 0.08)',
              }}
            >
              {['speed', 'tutor', 'deploy'].map((key, index) => (
                <div
                  key={key}
                  className={index < 2 ? 'border-b border-border/20' : ''}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-card/20 transition-colors"
                    data-testid={`button-faq-${key}`}
                  >
                    <span className="font-semibold text-base md:text-lg pr-4">{t(`faqs.items.${key}.question`)}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-primary"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
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
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t(`faqs.items.${key}.answer`)}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 10: Final CTA */}
        <section className="py-16 md:py-24 relative z-10">
          <div className="content-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-xl border border-primary/20 group transition-all duration-500 relative overflow-hidden"
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
    </div>
  );
}
