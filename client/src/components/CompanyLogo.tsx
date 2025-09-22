interface CompanyLogoProps {
  src: string;
  alt: string;
  name: string;
}

export default function CompanyLogo({ src, alt, name }: CompanyLogoProps) {
  // Special case for UTEC - no invert filter
  const isUtec = name.includes('UTEC');
  const filterClasses = isUtec 
    ? "h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 mx-8"
    : "h-12 md:h-16 w-auto object-contain filter grayscale(100%) brightness(0) dark:invert opacity-70 hover:opacity-100 transition-all duration-300 mx-8";
    
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
        className={filterClasses}
      />
    </div>
  );
}