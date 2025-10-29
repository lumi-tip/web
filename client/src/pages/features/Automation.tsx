import { Helmet } from 'react-helmet-async';

export default function Automation() {
  return (
    <>
      <Helmet>
        <title>End-to-End Automation - LearnPack Features</title>
        <meta name="description" content="Turn any document into a complete interactive course with LearnPack's end-to-end automation platform." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-automation">End-to-End Automation</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform any document, video, or idea into a complete interactive course in minutes.
            </p>
            <div className="prose prose-lg dark:prose-invert">
              <p>Feature details coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
