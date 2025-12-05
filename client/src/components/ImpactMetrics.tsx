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
  // Generate delicate background stars - increased density for visual richness
  const stars = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${5 + Math.random() * 7}s`,
        size: Math.random() > 0.7 ? 2.5 : Math.random() > 0.4 ? 1.5 : 1,
      })),
    []
  );

  return (
    <section 
      className="relative py-32 md:py-40 lg:py-48 bg-background overflow-hidden"
      data-testid="section-impact-metrics"
    >
      {/* Smooth top transition gradient */}
      <div className="section-transition-top" aria-hidden="true" />
      
      {/* Soft blue radial gradient - centered, low opacity for cosmic feel */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      
      {/* Secondary accent glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      
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
        {/* Subtle divider line above title */}
        <div className="flex justify-center mb-10" aria-hidden="true">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        
        {/* Section header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5"
            data-testid="text-impact-metrics-title"
          >
            Impact Metrics
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl"
            data-testid="text-impact-metrics-subtitle"
          >
            Real results from real deployments.
          </p>
        </div>

        {/* Metrics grid - 4 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group"
              data-testid={`metric-item-${index}`}
            >
              {/* Large dominant number */}
              <div 
                className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold text-primary mb-5 md:mb-6 tracking-tight"
                style={{
                  textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
                }}
                data-testid={`metric-value-${index}`}
              >
                {metric.value}
              </div>
              {/* Smaller, lighter label with good spacing */}
              <p 
                className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[200px] mx-auto"
                data-testid={`metric-label-${index}`}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Subtle bottom divider */}
        <div className="flex justify-center mt-20 md:mt-24" aria-hidden="true">
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
