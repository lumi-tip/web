import { Helmet } from 'react-helmet-async';

export default function Compliance() {
  return (
    <>
      <Helmet>
        <title>Compliance & Certification - LearnPack Use Cases</title>
        <meta name="description" content="Automate compliance training, certification tracking, and audit documentation with LearnPack." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-compliance">Compliance & Certification</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Streamline compliance training, automate certification renewals, and maintain audit trails.
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
