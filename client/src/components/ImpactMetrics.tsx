const metrics = [
  {
    value: '80%',
    label: 'Lower content creation cost.',
  },
  {
    value: '2×',
    label: 'Higher learner completion rates.',
  },
  {
    value: '50%',
    label: 'Less learner dropout with the AI Tutor.',
  },
  {
    value: '1500+',
    label: 'Active users building and delivering training.',
  },
];

export default function ImpactMetrics() {
  return (
    <section 
      className="relative py-24 md:py-32"
      data-testid="section-impact-metrics"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-impact-metrics-title"
          >
            Impact Metrics
          </h2>
          <p 
            className="text-muted-foreground text-lg"
            data-testid="text-impact-metrics-subtitle"
          >
            Real results from real deployments.
          </p>
        </div>

        {/* Metrics grid - 4 columns on desktop, 2x2 on tablet, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 max-w-5xl mx-auto">
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
                className="text-muted-foreground text-sm md:text-base leading-relaxed"
                data-testid={`metric-label-${index}`}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
