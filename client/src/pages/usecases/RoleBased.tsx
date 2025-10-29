import { Helmet } from 'react-helmet-async';

export default function RoleBased() {
  return (
    <>
      <Helmet>
        <title>Role-Based Development - LearnPack Use Cases</title>
        <meta name="description" content="Upskill employees with role-specific training paths tailored to their job functions and career goals." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-role-based">Role-Based Development</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Create tailored learning paths for different roles, departments, and career levels.
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
