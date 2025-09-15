import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createPackage } from '@/lib/createPackage';
import { analytics } from '@/lib/analytics';
import heroBackgroundImg from '@assets/generated_images/Hero_background_pattern_76d7e4e2.png';
import demoPosterImg from '@assets/generated_images/Demo_video_poster_e1e259a2.png';

const PURPOSE_OPTIONS = [
  { value: 'training', label: 'Training' },
  { value: 'compliance', label: 'Compliance' },
  { value: 'onboarding', label: 'Onboarding' },
  { value: 'skills', label: 'Skills' },
  { value: 'academic', label: 'Academic' },
];

export default function Hero() {
  const [topic, setTopic] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputFocus = () => {
    analytics.heroInputFocus();
  };

  const handlePurposeChange = (value: string) => {
    setPurpose(value);
    analytics.purposeChange(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please enter what you want to teach or learn",
        variant: "destructive",
      });
      return;
    }

    if (!purpose) {
      toast({
        title: "Purpose required", 
        description: "Please select a purpose for your package",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    analytics.heroSubmit(topic, purpose);

    try {
      const result = await createPackage(topic, purpose);
      
      if (result.success) {
        analytics.createSuccess(topic, purpose);
        toast({
          title: "Success!",
          description: result.message,
        });
        
        // Reset form
        setTopic('');
        setPurpose('');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create package. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      data-testid="section-hero"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content and Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                data-testid="text-hero-title"
              >
                Turn ideas into interactive learning packages in minutes — export anywhere.
              </h1>
              
              <p 
                className="text-xl text-muted-foreground max-w-2xl"
                data-testid="text-hero-subtitle"
              >
                Type any topic, choose a purpose, and generate a course you can export anywhere.
              </p>
            </div>

            {/* Package Creation Form */}
            <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isLoading}>
              <div className="bg-card/90 backdrop-blur-sm border border-card-border rounded-lg p-6 space-y-4">
                <Textarea
                  placeholder="What do you want to teach or learn today?"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onFocus={handleInputFocus}
                  onKeyDown={handleKeyDown}
                  className="min-h-32 text-base resize-none"
                  disabled={isLoading}
                  data-testid="input-topic"
                />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select 
                    value={purpose} 
                    onValueChange={handlePurposeChange}
                    disabled={isLoading}
                  >
                    <SelectTrigger className="sm:w-48" data-testid="select-purpose">
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      {PURPOSE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading || !topic.trim()}
                    className="flex-1 sm:flex-none"
                    data-testid="button-create-package"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      'Create Package'
                    )}
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center" data-testid="text-trust-line">
                Cut training creation costs by 80% and double completion rates.
              </p>
            </form>
          </div>

          {/* Right side - Demo Video/Animation */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-card/90 backdrop-blur-sm border border-card-border rounded-lg p-4 hover-elevate">
                <img
                  src={demoPosterImg}
                  alt="LearnPack demo interface"
                  className="w-full h-auto rounded-md"
                  data-testid="img-demo-poster"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="icon" 
                    className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
                    data-testid="button-play-demo"
                    onClick={() => {
                      analytics.ctaClick('watch_demo', 'hero');
                      console.log('Demo video play clicked');
                    }}
                  >
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}