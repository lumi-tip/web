import { useTranslation } from "react-i18next";
import { Stepper, Step } from "./Stepper";
import "./HowItWorksSection.css";

function BlueprintBackground() {
  return (
    <>
      {/* Blueprint grid pattern */}
      <div className="blueprint-grid" aria-hidden="true" />
      
      {/* Animated connecting paths */}
      <div className="blueprint-paths" aria-hidden="true">
        <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          {/* Path 1 - top */}
          <g className="blueprint-path-group blueprint-path-group-1">
            <path
              className="blueprint-path-glow"
              d="M 100 80 Q 200 60, 300 100 T 500 80"
            />
            <path
              className="blueprint-path"
              d="M 100 80 Q 200 60, 300 100 T 500 80"
            />
          </g>
          
          {/* Path 2 - middle */}
          <g className="blueprint-path-group blueprint-path-group-2">
            <path
              className="blueprint-path-glow"
              d="M 50 200 Q 150 180, 250 220 T 450 200 Q 550 180, 700 220"
            />
            <path
              className="blueprint-path"
              d="M 50 200 Q 150 180, 250 220 T 450 200 Q 550 180, 700 220"
            />
          </g>
          
          {/* Path 3 - bottom */}
          <g className="blueprint-path-group blueprint-path-group-3">
            <path
              className="blueprint-path-glow"
              d="M 150 320 Q 250 300, 350 340 T 550 320 Q 650 300, 750 340"
            />
            <path
              className="blueprint-path"
              d="M 150 320 Q 250 300, 350 340 T 550 320 Q 650 300, 750 340"
            />
          </g>
          
          {/* Node markers with staggered animations */}
          <circle className="blueprint-node blueprint-node-1" cx="100" cy="80" r="4" />
          <circle className="blueprint-node blueprint-node-2" cx="300" cy="100" r="4" />
          <circle className="blueprint-node blueprint-node-3" cx="500" cy="80" r="4" />
          <circle className="blueprint-node blueprint-node-4" cx="50" cy="200" r="4" />
          <circle className="blueprint-node blueprint-node-5" cx="250" cy="220" r="4" />
          <circle className="blueprint-node blueprint-node-6" cx="450" cy="200" r="4" />
          <circle className="blueprint-node blueprint-node-7" cx="700" cy="220" r="4" />
          <circle className="blueprint-node blueprint-node-8" cx="150" cy="320" r="4" />
          <circle className="blueprint-node blueprint-node-9" cx="350" cy="340" r="4" />
          <circle className="blueprint-node blueprint-node-10" cx="550" cy="320" r="4" />
          <circle className="blueprint-node blueprint-node-11" cx="750" cy="340" r="4" />
        </svg>
      </div>
    </>
  );
}

export default function HowItWorksSection() {
  const { t } = useTranslation('home');

  return (
    <section 
      className="how-it-works-section" 
      aria-labelledby="how-it-works-title"
      data-testid="section-how-it-works"
    >
      <BlueprintBackground />
      
      <div className="how-it-works-inner">
        <h2 
          id="how-it-works-title" 
          className="how-it-works-title"
          data-testid="text-how-it-works-title"
        >
          {t('howItWorksNew.title')}
        </h2>
        <p 
          className="how-it-works-subtitle"
          data-testid="text-how-it-works-subtitle"
        >
          {t('howItWorksNew.subtitle')}
        </p>

        <Stepper>
          <Step title={t('howItWorksNew.step1.title')}>
            {t('howItWorksNew.step1.text')}
          </Step>
          <Step title={t('howItWorksNew.step2.title')}>
            {t('howItWorksNew.step2.text')}
          </Step>
          <Step title={t('howItWorksNew.step3.title')}>
            {t('howItWorksNew.step3.text')}
          </Step>
        </Stepper>
      </div>
    </section>
  );
}
