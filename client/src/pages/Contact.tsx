import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - LearnPack</title>
        <meta name="description" content="Get in touch with LearnPack's team to learn how we can transform your corporate training programs." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6" data-testid="heading-contact">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our team to learn how LearnPack can transform your training programs.
            </p>
            <div className="prose prose-lg dark:prose-invert">
              <p>Contact form and information coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
