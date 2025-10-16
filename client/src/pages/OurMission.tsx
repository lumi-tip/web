import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurMission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="heading-our-mission">
            Our Mission
          </h1>
          
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed" data-testid="text-mission-statement-1">
              Learning starts with a book, syllabus, or certification. Whoever controls that asset, controls the class, credentials, learning experience, and economics.
            </p>
            
            <p className="text-lg leading-relaxed" data-testid="text-mission-statement-2">
              LearnPack decentralizes this power, cutting creation costs/time up to 80%, democratizing publishing in the educational world. Empowering teachers, experts, and corporations to create, distribute, monetize training.
            </p>
            
            <p className="text-lg leading-relaxed" data-testid="text-mission-statement-3">
              Our AI agent lets creators transform any PDF, video, or document into production-ready courses or augmented books published in minutes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
