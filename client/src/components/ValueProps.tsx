import { Card, CardContent } from '@/components/ui/card';
import { Zap, Bot, Download, TrendingUp } from 'lucide-react';

const valueProps = [
  {
    icon: Zap,
    title: 'Create interactive courses in seconds',
    description: 'Cut your content generation costs by +80% with production ready courses under 2 minutes.'
  },
  {
    icon: Bot,
    title: 'Use our AI agent to refine and maintain content easily',
    description: 'Intelligent content optimization, automatic updates, and seamless maintenance with AI assistance.'
  },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'SCORM, Zip, ePub, iFrame or LearnPack links with full analytics and experience.'
  },
  {
    icon: TrendingUp,
    title: 'Double Completion Rates',
    description: 'AI tutoring, interactive components, hyper-personalized learning.'
  }
];

export default function ValueProps() {
  return (
    <section className="py-24 px-4 bg-card/20" data-testid="section-value-props">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate bg-card/80 backdrop-blur-sm border-card-border/50"
                data-testid={`card-value-prop-${index}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 
                      className="font-semibold text-sm leading-tight"
                      data-testid={`text-value-prop-title-${index}`}
                    >
                      {prop.title}
                    </h3>
                  </div>
                  <p 
                    className="text-xs text-muted-foreground leading-relaxed"
                    data-testid={`text-value-prop-description-${index}`}
                  >
                    {prop.description}
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