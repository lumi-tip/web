import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Bot, Download, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const valueProps = [
  {
    icon: Zap,
    title: 'Create interactive courses in seconds',
    description: 'Cut your content generation costs by +80% with production ready courses under 2 minutes.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    icon: Bot,
    title: 'Use our AI agent to refine and maintain content easily',
    description: 'Intelligent content optimization, automatic updates, and seamless maintenance with AI assistance.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    icon: Download,
    title: 'Export Anywhere',
    description: 'SCORM, Zip, ePub, iFrame or LearnPack links with full analytics and experience.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    icon: TrendingUp,
    title: 'Double Completion Rates',
    description: 'AI tutoring, interactive components, hyper-personalized learning.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
  }
];

export default function ValueProps() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  // Auto-switch features every 4 seconds if user is not interacting (desktop only)
  useEffect(() => {
    if (!isUserInteracting) {
      const interval = setInterval(() => {
        setSelectedFeature((prev) => (prev + 1) % valueProps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isUserInteracting]);

  // Reset user interaction flag after 8 seconds of no interaction
  useEffect(() => {
    if (isUserInteracting) {
      const timeout = setTimeout(() => {
        setIsUserInteracting(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [isUserInteracting, selectedFeature]);

  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
    setIsUserInteracting(true);
  };

  const handleMobileToggle = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="valueProps" className="py-24 px-4 bg-card/20" data-testid="section-value-props">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Column */}
          <div className="space-y-4">
            {valueProps.map((prop, index) => {
              const IconComponent = prop.icon;
              const isSelected = selectedFeature === index;
              
              return (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-500 ${
                    isSelected 
                      ? 'bg-primary/5 border-primary/20 shadow-lg' 
                      : 'hover-elevate bg-card/80 backdrop-blur-sm border-card-border/50 hover:bg-primary/3'
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  data-testid={`card-value-prop-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isSelected 
                          ? 'bg-primary/20' 
                          : 'bg-muted/50'
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-300 ${
                          isSelected 
                            ? 'text-primary' 
                            : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 
                          className={`font-semibold text-lg leading-tight transition-colors duration-300 ${
                            isSelected 
                              ? 'text-foreground' 
                              : 'text-muted-foreground'
                          }`}
                          data-testid={`text-value-prop-title-${index}`}
                        >
                          {prop.title}
                        </h3>
                        <p 
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isSelected 
                              ? 'text-muted-foreground' 
                              : 'text-muted-foreground/70'
                          }`}
                          data-testid={`text-value-prop-description-${index}`}
                        >
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Video Column - Desktop Only */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-card/80 backdrop-blur-sm border border-card-border/50 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <video
                  key={selectedFeature} // Force remount when feature changes
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  data-testid={`video-feature-${selectedFeature}`}
                >
                  <source src={valueProps[selectedFeature].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">
                  {valueProps[selectedFeature].title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {valueProps[selectedFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-3">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            const isExpanded = expandedMobile === index;
            
            return (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border-card-border/50 overflow-hidden"
                data-testid={`card-value-prop-mobile-${index}`}
              >
                {/* Accordion Header */}
                <CardContent 
                  className="p-4 cursor-pointer"
                  onClick={() => handleMobileToggle(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 
                        className="font-semibold text-base leading-tight"
                        data-testid={`text-value-prop-mobile-title-${index}`}
                      >
                        {prop.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Accordion Content */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-4 pb-4 space-y-4">
                    <p 
                      className="text-sm text-muted-foreground leading-relaxed"
                      data-testid={`text-value-prop-mobile-description-${index}`}
                    >
                      {prop.description}
                    </p>
                    
                    {/* Inline Video */}
                    <div className="bg-muted/30 rounded-lg overflow-hidden">
                      <div className="aspect-video">
                        <video
                          key={`mobile-${index}-${isExpanded}`} // Force remount when expanded
                          className="w-full h-full object-cover"
                          autoPlay={isExpanded}
                          muted
                          loop
                          playsInline
                          data-testid={`video-mobile-feature-${index}`}
                        >
                          <source src={prop.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}