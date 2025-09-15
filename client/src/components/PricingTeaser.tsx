import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const pricingTiers = [
  {
    name: 'Creator Seat',
    price: '$100',
    period: '/mo',
    description: 'Create, edit, publish, analyze.',
    features: [
      'Unlimited package creation',
      'Full editor access',
      'Publishing tools',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Package Generation',
    price: '$600',
    period: '/ up to 2 hours',
    description: 'Reading, watching, activity time included.',
    features: [
      'AI content generation',
      'Interactive elements',
      'Media processing',
      'Export capabilities'
    ]
  },
  {
    name: 'Usage Tracking',
    price: 'Pay as used',
    period: '',
    description: 'Metering for quizzes, tutor, challenges.',
    features: [
      'Quiz interactions',
      'AI tutor sessions',
      'Challenge completions',
      'Engagement analytics'
    ]
  }
];

export default function PricingTeaser() {
  const handlePricingDetails = () => {
    analytics.ctaClick('pricing_details', 'pricing_teaser');
    console.log('Pricing details clicked');
  };

  return (
    <section className="py-24 px-4 bg-muted/50" data-testid="section-pricing">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-pricing-title"
          >
            Transparent Pricing
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-pricing-subtitle"
          >
            Choose the components you need. Scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className="hover-elevate h-full"
              data-testid={`card-pricing-tier-${index}`}
            >
              <CardHeader>
                <CardTitle 
                  className="text-lg"
                  data-testid={`text-tier-name-${index}`}
                >
                  {tier.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span 
                      className="text-3xl font-bold"
                      data-testid={`text-tier-price-${index}`}
                    >
                      {tier.price}
                    </span>
                    <span 
                      className="text-muted-foreground ml-1"
                      data-testid={`text-tier-period-${index}`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-testid={`text-tier-description-${index}`}
                  >
                    {tier.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center gap-2 text-sm"
                      data-testid={`text-tier-feature-${index}-${featureIndex}`}
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            onClick={handlePricingDetails}
            data-testid="button-pricing-details"
          >
            See pricing details
          </Button>
        </div>
      </div>
    </section>
  );
}