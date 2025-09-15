import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Stethoscope, Landmark } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const useCases = [
  {
    icon: Building2,
    title: 'Insurance Training',
    description: 'SCORM export for seamless LMS integration with compliance tracking.',
    benefit: 'Reduced training time by 60% while maintaining certification standards',
    cta: 'See case study'
  },
  {
    icon: Stethoscope,
    title: 'AI Clinic at MDC',
    description: 'LearnPack-native interactivity for medical education.',
    benefit: 'Interactive simulations increased knowledge retention by 85%',
    cta: 'See case study'
  },
  {
    icon: Landmark,
    title: 'Bank Compliance',
    description: 'Hybrid export combining SCORM with real-time analytics.',
    benefit: 'Achieved 100% compliance audit score with automated reporting',
    cta: 'See case study'
  }
];

export default function UseCases() {
  const handleCaseStudy = (caseTitle: string) => {
    analytics.ctaClick('case_study', 'use_cases');
    console.log(`Case study clicked: ${caseTitle}`);
  };

  return (
    <section className="py-24 px-4" data-testid="section-use-cases">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-use-cases-title"
          >
            Use Cases / Customers
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate h-full"
                data-testid={`card-use-case-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle 
                    className="text-xl"
                    data-testid={`text-use-case-title-${index}`}
                  >
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p 
                    className="text-muted-foreground"
                    data-testid={`text-use-case-description-${index}`}
                  >
                    {useCase.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p 
                      className="text-sm font-medium"
                      data-testid={`text-use-case-benefit-${index}`}
                    >
                      {useCase.benefit}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleCaseStudy(useCase.title)}
                    data-testid={`button-case-study-${index}`}
                  >
                    {useCase.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}