import { Helmet } from 'react-helmet-async';

export default function SoftwareTraining() {
  return (
    <>
      <Helmet>
        <title>Software & Tool Training - LearnPack Use Cases</title>
        <meta name="description" content="Train your teams on internal software and tools 10x faster with AI-powered interactive courses." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-software-training">Software & Tool Training</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Rapidly train teams on internal tools, software platforms, and technical systems.
            </p>
            <div className="prose prose-lg dark:prose-invert">
              <p>Use case details coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
