import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { checkForRedirect } from '@/lib/redirects';

interface RedirectHandlerProps {
  children: React.ReactNode;
}

export default function RedirectHandler({ children }: RedirectHandlerProps) {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleRedirect = async () => {
      const pathname = window.location.pathname;
      const search = window.location.search;
      
      const redirectUrl = await checkForRedirect(pathname, search);
      
      if (redirectUrl) {
        const isAbsolute = redirectUrl.startsWith('http://') || redirectUrl.startsWith('https://');
        
        if (isAbsolute) {
          window.location.href = redirectUrl;
        } else {
          setLocation(redirectUrl);
        }
      }
    };

    handleRedirect();
  }, [location, setLocation]);

  return <>{children}</>;
}
