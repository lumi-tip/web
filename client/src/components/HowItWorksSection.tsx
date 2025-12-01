import { useTranslation } from "react-i18next";
import { Stepper, Step } from "./Stepper";
import "./HowItWorksSection.css";

export default function HowItWorksSection() {
  const { t } = useTranslation('home');

  return (
    <section 
      className="how-it-works-section" 
      aria-labelledby="how-it-works-title"
      data-testid="section-how-it-works"
    >
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

        <div className="how-it-works-summary" data-testid="how-it-works-summary">
          <ol>
            <li>
              <h3>Describe your training goal</h3>
              <p>
                Answer four guided questions about topic, purpose, audience, and duration.
                LearnPack uses these to understand exactly what you want to teach.
              </p>
            </li>
            <li>
              <h3>Let AI build your course</h3>
              <p>
                LearnPack instantly generates lessons, quizzes, challenges, and assessments — 
                all production-ready and interactive.
              </p>
            </li>
            <li>
              <h3>Refine with Rigobot</h3>
              <p>
                Chat with Rigobot to add examples, visuals, exercises, translations, or 
                last-mile adjustments before publishing.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
