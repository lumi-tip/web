import { Helmet } from 'react-helmet-async';

export default function AnalyticsCompliance() {
  return (
    <>
      <Helmet>
        <title>Analytics & Compliance - LearnPack Features</title>
        <meta name="description" content="Comprehensive analytics and compliance reporting with SCORM export and audit-ready documentation." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-analytics-compliance">Analytics & Compliance</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Measure training results, ensure compliance, and export to any LMS with SCORM support.
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
