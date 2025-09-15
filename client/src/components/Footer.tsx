import { Github, Twitter, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'API', href: '#' }
    ]
  },
  {
    title: 'Solutions', 
    links: [
      { name: 'Corporate Training', href: '#' },
      { name: 'Education', href: '#' },
      { name: 'Compliance', href: '#' },
      { name: 'Onboarding', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Support', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  }
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t" data-testid="footer-main">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 
                className="font-semibold text-foreground"
                data-testid={`text-footer-section-${index}`}
              >
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`link-footer-${index}-${linkIndex}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">LearnPack</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} LearnPack. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                  data-testid={`link-social-${index}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}