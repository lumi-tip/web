import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { useTranslation } from 'react-i18next';

const planKeys = ['learner', 'teacher', 'school'] as const;

export default function PricingTeaser() {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  const handlePricingDetails = () => {
    analytics.ctaClick('pricing_details', 'pricing_teaser');
    console.log('Pricing details clicked');
  };

  const getBaseFeatures = (planKey: string) => {
    return [
      t(`pricing.${planKey}.packages`),
      t(`pricing.${planKey}.creators`),
      t(`pricing.${planKey}.seats`)
    ];
  };

  const getUniqueFeatures = (planKey: string) => {
    const learnerFeatures = [
      t('pricing.features.podcast_generation'),
      t('pricing.features.ide_integrations_vscode_cursor_windsurf'),
      t('pricing.features.marketplace_access'),
      t('pricing.features.agentic_ai_edits')
    ];

    if (planKey === 'learner') {
      return learnerFeatures;
    }

    if (planKey === 'teacher') {
      return [
        t('pricing.features.export_zip_markdown'),
        t('pricing.features.convert_to_ebook')
      ];
    }

    // School plan gets no unique features, just inherits from teacher
    return [];
  };

  const handleChoosePlan = (planKey: string) => {
    analytics.ctaClick(`choose_plan_${planKey}`, 'pricing_teaser');
    console.log(`Choose plan clicked: ${planKey}`);
  };

  return (
    <section className="py-24 px-4 bg-muted/50" data-testid="section-pricing">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-pricing-title"
          >
            {t('pricing.title')}
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-pricing-subtitle"
          >
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAnnual 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-monthly-billing"
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isAnnual 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-annual-billing"
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {planKeys.map((planKey, index) => {
            const baseFeatures = getBaseFeatures(planKey);
            const uniqueFeatures = getUniqueFeatures(planKey);
            
            return (
              <Card 
                key={planKey} 
                className={`hover-elevate h-full relative flex flex-col ${
                  planKey === 'teacher' ? 'ring-2 ring-primary/20 shadow-lg' : ''
                }`}
                data-testid={`card-pricing-tier-${index}`}
              >
                {planKey === 'teacher' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle 
                    className="text-xl"
                    data-testid={`text-tier-name-${index}`}
                  >
                    {t(`pricing.${planKey}.title`)}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline">
                      <span 
                        className="text-4xl font-bold"
                        data-testid={`text-tier-price-${index}`}
                      >
                        {isAnnual ? t(`pricing.${planKey}.annualPrice`) : t(`pricing.${planKey}.price`)}
                      </span>
                      <span 
                        className="text-muted-foreground ml-1"
                        data-testid={`text-tier-period-${index}`}
                      >
                        {isAnnual ? t(`pricing.${planKey}.annualPeriod`) : t(`pricing.${planKey}.period`)}
                      </span>
                    </div>
                    <p 
                      className="text-sm text-muted-foreground leading-relaxed"
                      data-testid={`text-tier-description-${index}`}
                    >
                      {t(`pricing.${planKey}.description`)}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  {/* Plan-specific features */}
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {baseFeatures.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center gap-3 text-sm font-medium"
                          data-testid={`text-tier-feature-${index}-${featureIndex}`}
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hierarchical plan inclusion */}
                    {planKey === 'teacher' && (
                      <div className="pt-4 border-t border-border/50 mt-4">
                        <p className="text-xs text-muted-foreground mb-3 font-medium">
                          {t('pricing.everythingInLearner')}:
                        </p>
                        <ul className="space-y-2">
                          {uniqueFeatures.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                              data-testid={`text-tier-unique-feature-${index}-${featureIndex}`}
                            >
                              <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {planKey === 'school' && (
                      <div className="pt-4 border-t border-border/50 mt-4">
                        <p className="text-xs text-muted-foreground mb-3 font-medium">
                          {t('pricing.everythingInTeacher')}
                        </p>
                      </div>
                    )}

                    {planKey === 'learner' && uniqueFeatures.length > 0 && (
                      <div className="pt-4 border-t border-border/50 mt-4">
                        <p className="text-xs text-muted-foreground mb-3 font-medium">
                          Plus:
                        </p>
                        <ul className="space-y-2">
                          {uniqueFeatures.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                              data-testid={`text-tier-unique-feature-${index}-${featureIndex}`}
                            >
                              <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Individual CTA button */}
                  <div className="pt-4 mt-auto">
                    <Button 
                      className="w-full"
                      variant={planKey === 'teacher' ? 'default' : 'outline'}
                      onClick={() => handleChoosePlan(planKey)}
                      data-testid={`button-choose-plan-${planKey}`}
                    >
                      {t('pricing.choosePlan')}
                    </Button>
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