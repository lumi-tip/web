import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { analytics } from '@/lib/analytics';
import demoPosterImg from '@assets/generated_images/Demo_video_poster_e1e259a2.png';

export default function VideoDemo() {
  const handlePlayDemo = () => {
    analytics.ctaClick('watch_demo', 'video_demo');
    console.log('Demo video play clicked');
  };

  return (
    <section className="py-24 px-4" data-testid="section-video-demo">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 
              className="text-3xl md:text-4xl font-bold"
              data-testid="text-video-demo-title"
            >
              See LearnPack in Action
            </h2>
            <p 
              className="text-xl text-muted-foreground"
              data-testid="text-video-demo-subtitle"
            >
              Watch how easy it is to create interactive learning packages
            </p>
          </div>
          
          <Card className="hover-elevate overflow-hidden">
            <CardContent className="p-4">
              <div className="relative">
                <img
                  src={demoPosterImg}
                  alt="LearnPack demo interface"
                  className="w-full h-auto rounded-md"
                  data-testid="img-demo-poster"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                  <Button 
                    size="icon" 
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary shadow-lg"
                    data-testid="button-play-demo"
                    onClick={handlePlayDemo}
                  >
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}