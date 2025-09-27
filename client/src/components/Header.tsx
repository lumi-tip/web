import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import learnpackLogo from '@assets/generated_images/LearnPack_logo_design_4a28e889.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = () => {
    analytics.ctaClick('sign_in', 'header');
    window.location.href = 'https://manage.learnpack.co';
  };

  const handleTryFree = () => {
    analytics.ctaClick('try_free', 'header');
    window.location.href = 'https://app.learnpack.co/creator';
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-border' 
          : 'bg-background border-transparent'
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img 
            src={learnpackLogo} 
            alt="LearnPack" 
            width={132}
            height={32}
            className="h-8 w-auto"
            fetchPriority="high"
            decoding="async"
            data-testid="img-logo"
          />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#valueProps" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              {t('nav.features')}
            </a>
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              {t('nav.pricing')}
            </a>
            <a 
              href="https://4geeks.com/docs/learnpack" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-docs"
            >
              {t('nav.docs')}
            </a>
          </nav>
        </div>

        {/* CTAs */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            onClick={handleSignIn}
            data-testid="button-signin"
          >
            {t('nav.signIn')}
          </Button>
          <Button 
            onClick={handleTryFree}
            data-testid="button-try-free"
          >
            {t('nav.tryFree')}
          </Button>
        </div>
      </div>
    </header>
  );
}