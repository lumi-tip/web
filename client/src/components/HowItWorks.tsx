import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Share, BarChart3 } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const steps = [
  {
    number: 1,
    icon: Upload,
    title: 'Create',
    description: 'Upload a PDF, video, or idea. AI turns it into an interactive course.'
  },
  {
    number: 2,
    icon: Share,
    title: 'Publish & Export',
    description: 'Share instantly or export to your LMS/book format.'
  },
  {
    number: 3,
    icon: BarChart3,
    title: 'Engage & Track',
    description: 'Learners interact; you see completions, frustration, and ROI.'
  }
];

export default function HowItWorks() {
  const handleROICalculator = () => {
    analytics.ctaClick('roi_calculator', 'how_it_works');
    console.log('ROI Calculator clicked');
  };

  return (
    <section className="py-24 px-4 bg-muted/50" data-testid="section-how-it-works">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-how-it-works-title"
          >
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card 
                  className="hover-elevate h-full"
                  data-testid={`card-step-${index}`}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 
                      className="text-xl font-semibold"
                      data-testid={`text-step-title-${index}`}
                    >
                      {step.title}
                    </h3>
                    
                    <p 
                      className="text-muted-foreground"
                      data-testid={`text-step-description-${index}`}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-border z-10" />
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleROICalculator}
            data-testid="button-roi-calculator"
          >
            See ROI Calculator
          </Button>
        </div>
      </div>
    </section>
  );
}