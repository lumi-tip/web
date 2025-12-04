import { useTranslation } from 'react-i18next';

const metrics = [
  {
    value: '80%',
    labelKey: 'impactMetrics.reduction',
  },
  {
    value: '2×',
    labelKey: 'impactMetrics.completion',
  },
  {
    value: '50%',
    labelKey: 'impactMetrics.dropout',
  },
  {
    value: '1500+',
    labelKey: 'impactMetrics.activeUsers',
  },
];

export default function ImpactMetrics() {
  const { t } = useTranslation();

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="section-impact-metrics"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-impact-metrics-title"
          >
            {t('impactMetrics.title')}
          </h2>
          <p 
            className="text-muted-foreground text-lg"
            data-testid="text-impact-metrics-subtitle"
          >
            {t('impactMetrics.subtitle')}
          </p>
        </div>

        {/* Metrics grid - 4 columns on desktop, 2x2 on tablet, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center"
              data-testid={`metric-item-${index}`}
            >
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3"
                data-testid={`metric-value-${index}`}
              >
                {metric.value}
              </div>
              <p 
                className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[200px] mx-auto"
                data-testid={`metric-label-${index}`}
              >
                {t(metric.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
