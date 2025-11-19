import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionShowcase() {
  const { t } = useTranslation('home');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const solutions = [
    {
      need: t('solutionShowcase.cards.deployment.need'),
      solution: t('solutionShowcase.cards.deployment.solution'),
    },
    {
      need: t('solutionShowcase.cards.cost.need'),
      solution: t('solutionShowcase.cards.cost.solution'),
    },
    {
      need: t('solutionShowcase.cards.adaptability.need'),
      solution: t('solutionShowcase.cards.adaptability.solution'),
    },
    {
      need: t('solutionShowcase.cards.scalability.need'),
      solution: t('solutionShowcase.cards.scalability.solution'),
    },
    {
      need: t('solutionShowcase.cards.compliance.need'),
      solution: t('solutionShowcase.cards.compliance.solution'),
    },
    {
      need: t('solutionShowcase.cards.engagement.need'),
      solution: t('solutionShowcase.cards.engagement.solution'),
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, solutions.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="relative py-24 px-4 bg-background" data-testid="section-solution-showcase">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-solution-title"
          >
            {t('solutionShowcase.title')}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-solution-subtitle"
          >
            {t('solutionShowcase.subtitle')}
          </p>
        </div>

        <div 
          className="relative mx-auto max-w-2xl h-[clamp(400px,50vh,600px)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-testid="container-card-stack"
        >
          <div className="card-stack-container">
            {solutions.map((item, index) => {
              const position = (index - activeIndex + solutions.length) % solutions.length;
              
              return (
                <div
                  key={index}
                  className={`card-stack-item card-stack-position-${position}`}
                  data-position={position}
                >
                  <Card
                    className="w-full h-full"
                    data-testid={`card-solution-${index + 1}`}
                  >
                    <CardContent className="p-8 space-y-4">
                      <h3 
                        className="text-sm font-semibold text-primary uppercase tracking-wide"
                        data-testid={`text-solution-need-${index + 1}`}
                      >
                        {item.need}
                      </h3>
                      <p 
                        className="text-xl font-medium text-foreground"
                        data-testid={`text-solution-text-${index + 1}`}
                      >
                        {item.solution}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
