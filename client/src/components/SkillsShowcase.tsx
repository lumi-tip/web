import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, GraduationCap, Shield, Lightbulb, Rocket, Globe, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Development',
    description: 'From Python basics to advanced React patterns',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Briefcase,
    title: 'Business & Management',
    description: 'Leadership, strategy, and team building skills',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: GraduationCap,
    title: 'Academic Subjects',
    description: 'Math, science, literature, and core curriculum',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Compliance & Safety',
    description: 'Regulatory training and safety protocols',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Lightbulb,
    title: 'Creative Skills',
    description: 'Design, writing, music, and artistic disciplines',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Rocket,
    title: 'Technology & Innovation',
    description: 'AI, blockchain, cloud computing, and emerging tech',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Globe,
    title: 'Languages & Communication',
    description: 'Foreign languages and communication skills',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Soft Skills & HR',
    description: 'Team dynamics, emotional intelligence, conflict resolution',
    color: 'from-rose-500 to-pink-500'
  }
];

export default function SkillsShowcase() {
  return (
    <section className="py-24 px-4 bg-card/20" data-testid="section-skills-showcase">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-skills-title"
          >
            Build tutorials on about any skill
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-skills-subtitle"
          >
            From technical training to soft skills, create engaging learning packages for any domain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate group border-card-border/50 bg-card/50 backdrop-blur-sm"
                data-testid={`card-skill-${index}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  <h3 
                    className="font-semibold text-sm leading-tight"
                    data-testid={`text-skill-title-${index}`}
                  >
                    {category.title}
                  </h3>
                  
                  <p 
                    className="text-xs text-muted-foreground leading-relaxed"
                    data-testid={`text-skill-description-${index}`}
                  >
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}