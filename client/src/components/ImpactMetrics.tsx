import { useMemo } from 'react';

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
  // Generate delicate background stars - higher density
  const stars = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${5 + Math.random() * 7}s`,
        size: Math.random() > 0.7 ? 2 : 1,
      })),
    []
  );

  return (
    <section 
      className="relative py-24 md:py-32 bg-background overflow-hidden"
      data-testid="section-impact-metrics"
    >
      {/* Smooth top transition gradient */}
      <div className="section-transition-top" aria-hidden="true" />
      
      {/* Ambient glow for visual continuity */}
      <div className="section-ambient-glow section-ambient-glow--primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]" aria-hidden="true" />
      
      {/* Animated star background - elegant twinkle effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `starTwinkleUnified ${star.duration} ease-in-out ${star.delay} infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Smooth bottom transition gradient */}
      <div className="section-transition-bottom" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
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
