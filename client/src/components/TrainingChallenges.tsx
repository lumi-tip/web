import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

const ClockIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x1 = 50 + 35 * Math.cos(angle);
      const y1 = 50 + 35 * Math.sin(angle);
      const x2 = 50 + 40 * Math.cos(angle);
      const y2 = 50 + 40 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />;
    })}
    <line x1="50" y1="50" x2="35" y2="35" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="50" x2="65" y2="65" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CoinsIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <ellipse cx="40" cy="35" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="40" cy="45" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="40" cy="55" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 62 40 Q 62 35 67 35 Q 72 35 72 40 L 72 60 Q 72 65 67 65 Q 62 65 62 60 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="67" y1="42" x2="67" y2="58" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WrenchIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <path d="M 25 75 L 70 30 M 30 80 L 75 35" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="65" y="25" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 71 31)" />
    <rect x="20" y="70" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 26 76)" />
  </svg>
);

const GlobeIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="50" cy="50" rx="35" ry="25" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
    <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const PuzzleIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <path d="M 25 30 L 40 30 L 40 25 L 45 25 L 45 35 L 40 35 L 40 45 L 25 45 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M 55 55 L 70 55 L 70 50 L 75 50 L 75 60 L 70 60 L 70 70 L 55 70 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ChartIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-primary opacity-35">
    <line x1="20" y1="75" x2="80" y2="75" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="75" x2="20" y2="25" stroke="currentColor" strokeWidth="1.5" />
    <polyline points="30,35 50,50 70,65" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="30" cy="35" r="2" fill="currentColor" />
    <circle cx="50" cy="50" r="2" fill="currentColor" />
    <circle cx="70" cy="65" r="2" fill="currentColor" />
  </svg>
);

export default function TrainingChallenges() {
  const { t } = useTranslation('home');

  const challenges = [
    {
      title: t('trainingChallenges.cards.slowDeployment.title'),
      text: t('trainingChallenges.cards.slowDeployment.text'),
      illustration: ClockIllustration,
    },
    {
      title: t('trainingChallenges.cards.highCost.title'),
      text: t('trainingChallenges.cards.highCost.text'),
      illustration: CoinsIllustration,
    },
    {
      title: t('trainingChallenges.cards.hardToUpdate.title'),
      text: t('trainingChallenges.cards.hardToUpdate.text'),
      illustration: WrenchIllustration,
    },
    {
      title: t('trainingChallenges.cards.noScalability.title'),
      text: t('trainingChallenges.cards.noScalability.text'),
      illustration: GlobeIllustration,
    },
    {
      title: t('trainingChallenges.cards.fragmentedTools.title'),
      text: t('trainingChallenges.cards.fragmentedTools.text'),
      illustration: PuzzleIllustration,
    },
    {
      title: t('trainingChallenges.cards.lowEngagement.title'),
      text: t('trainingChallenges.cards.lowEngagement.text'),
      illustration: ChartIllustration,
    },
  ];

  // Memoize scattered star positions to prevent repositioning on re-renders
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    []
  );

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background" data-testid="section-training-challenges">
      {/* Animated star background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: star.left,
              top: star.top,
              animation: `starFloat ${star.duration} ease-in-out ${star.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-challenges-title"
          >
            {t('trainingChallenges.title')}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-challenges-subtitle"
          >
            {t('trainingChallenges.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const Illustration = challenge.illustration;
            return (
              <Card 
                key={index} 
                className="bg-card border-card-border shadow-[0_0_8px_rgba(59,130,246,0.12)] hover:animate-[cardGlowShimmer_2s_ease-in-out_infinite] min-h-80"
                data-testid={`card-challenge-${index + 1}`}
              >
                <CardContent className="p-8 h-full flex items-center">
                  <div className="w-1/2 space-y-3">
                    <h3 className="text-xl font-semibold text-left" data-testid={`text-challenge-title-${index + 1}`}>
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground text-left" data-testid={`text-challenge-text-${index + 1}`}>
                      {challenge.text}
                    </p>
                  </div>
                  <div className="w-1/2 flex items-center justify-center" aria-hidden="true">
                    <div className="w-32 h-32">
                      <Illustration />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
