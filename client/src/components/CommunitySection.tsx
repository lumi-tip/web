import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Training Director',
    company: 'TechCorp',
    avatar: '/api/placeholder/40/40',
    initials: 'SC',
    quote: 'LearnPack transformed our onboarding process. We cut training time by 60% while increasing retention rates. The AI tutor feature is game-changing.',
    highlight: 'Cut training time by 60%'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Learning',
    company: 'FinanceHub',
    avatar: '/api/placeholder/40/40',
    initials: 'MR',
    quote: 'The compliance training packages we built with LearnPack helped us achieve 100% audit scores. The automated reporting saves hours of manual work.',
    highlight: '100% audit scores'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Professor',
    company: 'State University',
    avatar: '/api/placeholder/40/40',
    initials: 'EW',
    quote: 'My students are more engaged than ever. The interactive elements and real-time feedback make complex topics accessible and fun to learn.',
    highlight: 'Students more engaged than ever'
  },
  {
    name: 'Alex Thompson',
    role: 'L&D Manager',
    company: 'RetailMax',
    avatar: '/api/placeholder/40/40',
    initials: 'AT',
    quote: 'Creating multilingual training content used to take weeks. Now we can generate and localize packages in hours. Incredible time savings.',
    highlight: 'Weeks to hours'
  },
  {
    name: 'Dr. James Park',
    role: 'Medical Director',
    company: 'HealthSystem',
    avatar: '/api/placeholder/40/40',
    initials: 'JP',
    quote: 'LearnPack helped us rapidly deploy COVID safety protocols to 5,000+ staff members. The real-time analytics showed immediate compliance improvements.',
    highlight: '5,000+ staff trained'
  },
  {
    name: 'Lisa Kumar',
    role: 'HR Director',
    company: 'StartupXYZ',
    avatar: '/api/placeholder/40/40',
    initials: 'LK',
    quote: 'The ROI is undeniable. We reduced training costs by 80% while doubling completion rates. LearnPack pays for itself within the first month.',
    highlight: '80% cost reduction'
  }
];

export default function CommunitySection() {
  return (
    <section className="py-24 px-4" data-testid="section-community">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-community-title"
          >
            Loved by the community
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-community-subtitle"
          >
            Don't take our word for it — listen to what our community members have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate border-card-border/50 bg-card/50 backdrop-blur-sm"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 
                      className="font-semibold text-sm"
                      data-testid={`text-testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </h3>
                    <p 
                      className="text-xs text-muted-foreground"
                      data-testid={`text-testimonial-role-${index}`}
                    >
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <blockquote 
                  className="text-sm leading-relaxed"
                  data-testid={`text-testimonial-quote-${index}`}
                >
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-2 border-t border-border/50">
                  <span 
                    className="text-xs font-medium text-primary"
                    data-testid={`text-testimonial-highlight-${index}`}
                  >
                    {testimonial.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}