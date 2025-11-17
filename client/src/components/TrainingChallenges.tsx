import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Wrench, Globe, Puzzle, TrendingDown } from "lucide-react";

export default function TrainingChallenges() {
  const { t } = useTranslation('home');

  const challenges = [
    {
      icon: Clock,
      title: t('trainingChallenges.cards.slowDeployment.title'),
      text: t('trainingChallenges.cards.slowDeployment.text'),
    },
    {
      icon: DollarSign,
      title: t('trainingChallenges.cards.highCost.title'),
      text: t('trainingChallenges.cards.highCost.text'),
    },
    {
      icon: Wrench,
      title: t('trainingChallenges.cards.hardToUpdate.title'),
      text: t('trainingChallenges.cards.hardToUpdate.text'),
    },
    {
      icon: Globe,
      title: t('trainingChallenges.cards.noScalability.title'),
      text: t('trainingChallenges.cards.noScalability.text'),
    },
    {
      icon: Puzzle,
      title: t('trainingChallenges.cards.fragmentedTools.title'),
      text: t('trainingChallenges.cards.fragmentedTools.text'),
    },
    {
      icon: TrendingDown,
      title: t('trainingChallenges.cards.lowEngagement.title'),
      text: t('trainingChallenges.cards.lowEngagement.text'),
    },
  ];

  return (
    <section className="py-24 px-4" data-testid="section-training-challenges">
      <div className="container mx-auto">
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
            const Icon = challenge.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-card-border"
                data-testid={`card-challenge-${index + 1}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-challenge-title-${index + 1}`}>
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-challenge-text-${index + 1}`}>
                    {challenge.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
