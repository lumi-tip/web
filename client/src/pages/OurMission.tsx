import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurMission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Vite-inspired Animated Background */}
        <div className="absolute inset-0 animated-bg-container opacity-30">
          <div className="central-orb"></div>
          <div
            className="connection-line line-1"
            style={{ "--rotation": "-45deg" } as React.CSSProperties}
          ></div>
          <div
            className="connection-line line-2"
            style={{ "--rotation": "30deg" } as React.CSSProperties}
          ></div>
          <div
            className="connection-line line-3"
            style={{ "--rotation": "120deg" } as React.CSSProperties}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-6xl text-center space-y-8">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient"
            data-testid="heading-our-mission"
          >
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Democratizing education publishing through AI-powered innovation
          </p>
        </div>
      </section>

      {/* Mission Statements */}
      <section className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="space-y-24">
          {/* Statement 1 - The Problem */}
          <div className="relative group" data-testid="text-mission-statement-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8 md:p-12 hover-elevate">
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-3xl md:text-4xl font-bold">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-xl md:text-3xl leading-relaxed font-medium">
                    Learning starts with a book, syllabus, or certification. <span className="text-primary font-bold">Whoever controls that asset, controls the class, credentials, learning experience, and economics.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statement 2 - The Solution */}
          <div className="relative group" data-testid="text-mission-statement-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-primary/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8 md:p-12 hover-elevate">
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-600 to-primary flex items-center justify-center text-3xl md:text-4xl font-bold">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-xl md:text-3xl leading-relaxed font-medium">
                    LearnPack <span className="text-primary font-bold">decentralizes this power</span>, cutting creation costs/time up to <span className="text-primary font-bold">80%</span>, democratizing publishing in the educational world. Empowering teachers, experts, and corporations to create, distribute, monetize training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statement 3 - The Technology */}
          <div className="relative group" data-testid="text-mission-statement-3">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8 md:p-12 hover-elevate">
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-3xl md:text-4xl font-bold">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-xl md:text-3xl leading-relaxed font-medium">
                    Our <span className="text-primary font-bold">AI agent</span> lets creators transform any PDF, video, or document into production-ready courses or augmented books published <span className="text-primary font-bold">in minutes</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl border border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join thousands of educators, trainers, and experts democratizing learning content creation.
            </p>
            <a
              href={`${import.meta.env.VITE_LEARNPACK_CREATOR || 'https://app.learnpack.co'}/signup`}
              className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-semibold rounded-lg hover-elevate active-elevate-2 transition-all"
              data-testid="button-get-started"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
