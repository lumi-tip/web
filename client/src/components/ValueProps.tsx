import { Card, CardContent } from '@/components/ui/card';
import { Zap, Download, TrendingUp } from 'lucide-react';

const valueProps = [
  {
    icon: Zap,
    title: 'Fast Package Generation',
    description: '$600 packages built in hours, not months.'
  },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'SCORM, ePub, or LearnPack links with full analytics.'
  },
  {
    icon: TrendingUp,
    title: 'Engagement That Lasts',
    description: 'AI tutor, real-time insights, auto-refresh content.'
  }
];

export default function ValueProps() {
  return (
    <section className="py-24 px-4" data-testid="section-value-props">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate"
                data-testid={`card-value-prop-${index}`}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    data-testid={`text-value-prop-title-${index}`}
                  >
                    {prop.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
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