import { useTranslation } from "react-i18next";
import { Zap, TrendingDown, RefreshCw, Maximize2, FileCheck, Heart } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";

export default function SolutionShowcase() {
  const { t } = useTranslation('home');

  const solutions = [
    {
      need: t('solutionShowcase.cards.deployment.need'),
      solution: t('solutionShowcase.cards.deployment.solution'),
      icon: Zap,
    },
    {
      need: t('solutionShowcase.cards.cost.need'),
      solution: t('solutionShowcase.cards.cost.solution'),
      icon: TrendingDown,
    },
    {
      need: t('solutionShowcase.cards.adaptability.need'),
      solution: t('solutionShowcase.cards.adaptability.solution'),
      icon: RefreshCw,
    },
    {
      need: t('solutionShowcase.cards.scalability.need'),
      solution: t('solutionShowcase.cards.scalability.solution'),
      icon: Maximize2,
    },
    {
      need: t('solutionShowcase.cards.compliance.need'),
      solution: t('solutionShowcase.cards.compliance.solution'),
      icon: FileCheck,
    },
    {
      need: t('solutionShowcase.cards.engagement.need'),
      solution: t('solutionShowcase.cards.engagement.solution'),
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden" data-testid="section-solution-showcase">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-6 text-left lg:pr-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              data-testid="text-solution-title"
            >
              {t('solutionShowcase.title')}
            </h2>
            <p 
              className="text-lg md:text-xl text-muted-foreground"
              data-testid="text-solution-subtitle"
            >
              {t('solutionShowcase.subtitle')}
            </p>
          </div>

          <div 
            className="relative h-[600px]"
            data-testid="container-card-stack"
          >
            <CardSwap
              width={500}
              height={400}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
              easing="elastic"
            >
              {solutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} data-testid={`card-solution-${index + 1}`}>
                    <div className="p-8 h-full flex flex-col justify-start items-start text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <h3 
                          className="text-base font-semibold text-cyan-400 tracking-wide"
                          data-testid={`text-solution-need-${index + 1}`}
                        >
                          {item.need}
                        </h3>
                      </div>
                      <div className="w-full h-px bg-white/20 mb-4" />
                      <p 
                        className="text-base text-white/80 leading-relaxed"
                        data-testid={`text-solution-text-${index + 1}`}
                      >
                        {item.solution}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
