import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 border-b bg-muted/30" data-testid="section-social-proof">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <p 
            className="text-muted-foreground font-medium"
            data-testid="text-social-proof-title"
          >
            {t('socialProof.title')}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                data-testid={`logo-company-${index}`}
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  width={120}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="h-12 md:h-16 w-auto object-contain filter grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}