import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { analytics } from '@/lib/analytics';
import learnpackLogoDark from '@assets/logo-small-learnpack-dark_1759003192973.png';
import learnpackLogoLight from '@assets/logo-small-learnpack-light_1759003192973.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect dark mode
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
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
            src={isDarkMode ? learnpackLogoDark : learnpackLogoLight} 
            alt="LearnPack" 
            width={132}
            height={32}
            className="h-8 w-auto"
            loading="eager"
            decoding="async"
            data-testid="img-logo"
          />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {location === '/' ? (
              <a 
                href="#valueProps" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-features"
              >
                {t('nav.features')}
              </a>
            ) : (
              <Link 
                href="/#valueProps" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-features"
              >
                {t('nav.features')}
              </Link>
            )}
            <Link 
              href="/pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              {t('nav.pricing')}
            </Link>
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