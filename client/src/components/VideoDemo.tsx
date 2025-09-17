import { Card, CardContent } from '@/components/ui/card';
import { analytics } from '@/lib/analytics';

export default function VideoDemo() {
  const handleVideoLoad = () => {
    analytics.ctaClick('watch_demo', 'video_demo');
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
              <div className="relative aspect-video rounded-md overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dBjKIashs4Y"
                  title="LearnPack Demo - See how to create interactive learning packages"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={handleVideoLoad}
                  data-testid="iframe-demo-video"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}