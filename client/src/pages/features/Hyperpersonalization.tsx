import { Helmet } from 'react-helmet-async';

export default function Hyperpersonalization() {
  return (
    <>
      <Helmet>
        <title>Hyperpersonalized Learning - LearnPack Features</title>
        <meta name="description" content="AI-powered personalized learning paths that adapt to each learner's pace, style, and goals." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-hyperpersonalization">Hyperpersonalized Learning</h1>
            <p className="text-lg text-muted-foreground mb-8">
              AI adapts each learner's content, pacing, and challenges based on their unique needs.
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
