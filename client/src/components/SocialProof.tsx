import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CompanyLogo from './CompanyLogo';
import mdcLogo from '@assets/mdc-ce-logo_1758030096307.png';
import geeksLogo from '@assets/4geeksacademy-logo-old_1758030377841.webp';
import ucabLogo from '@assets/ucab_1758030385497.png';
import utecLogo from '@assets/utec logo_1758570957500.webp';

const companies = [
  {
    name: 'Miami Dade College School of Continuing Education',
    logo: mdcLogo,
    alt: 'Miami Dade College School of Continuing Education logo'
  },
  {
    name: '4Geeks Academy',
    logo: geeksLogo,
    alt: '4Geeks Academy logo'
  },
  {
    name: 'Universidad Católica Andrés Bello',
    logo: ucabLogo,
    alt: 'Universidad Católica Andrés Bello logo'
  },
  {
    name: 'UTEC - Universidad Tecnológica',
    logo: utecLogo,
    alt: 'UTEC Universidad Tecnológica logo'
  }
];

export default function SocialProof() {
  const { t } = useTranslation('home');
  
  // Create duplicated logos for seamless scrolling
  const duplicatedLogos = [...companies, ...companies, ...companies];
  
  // Memoize scattered star positions to prevent repositioning on re-renders
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    []
  );
  
  return (
    <section className="relative py-16 bg-background overflow-hidden" data-testid="section-social-proof">
      {/* Animated star background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: star.left,
              top: star.top,
              animation: `starFloat ${star.duration} ease-in-out ${star.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p 
            className="text-muted-foreground font-medium mb-12"
            data-testid="text-social-proof-title"
          >
            {t('socialProof.title')}
          </p>
        </div>
      </div>
      
      {/* Animated Logo Carousel */}
      <div className="relative w-full">
        <div 
          className="flex animate-scroll-logos gap-0"
          style={{ 
            animationDuration: '60s' // Slower than skill tags - 1 minute per cycle
          }}
        >
          {duplicatedLogos.map((company, index) => (
            <CompanyLogo
              key={`${company.name}-${index}`}
              src={company.logo}
              alt={company.alt}
              name={company.name}
            />
          ))}
        </div>
        
        {/* Fade out edges for smooth effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}