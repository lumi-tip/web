interface CompanyLogoProps {
  src: string;
  alt: string;
  name: string;
}

export default function CompanyLogo({ src, alt, name }: CompanyLogoProps) {
  return (
    <div 
      className="flex items-center justify-center flex-shrink-0"
      data-testid={`logo-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
    >
      <img
        src={src}
        alt={alt}
        width={120}
        height={64}
        loading="lazy"
        decoding="async"
        className="h-12 md:h-16 w-auto object-contain filter brightness-0 dark:brightness-100 dark:invert opacity-70 hover:opacity-100 transition-all duration-300 mx-8"
      />
    </div>
  );
}