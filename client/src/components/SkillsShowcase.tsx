import { useTranslation } from 'react-i18next';

const skillTopics = [
  { name: "Python Programming", color: "bg-blue-500" },
  { name: "React Development", color: "bg-cyan-400" },
  { name: "Machine Learning", color: "bg-purple-500" },
  { name: "Digital Marketing", color: "bg-pink-500" },
  { name: "Data Science", color: "bg-emerald-500" },
  { name: "UI/UX Design", color: "bg-orange-500" },
  { name: "Leadership Skills", color: "bg-red-500" },
  { name: "Spanish Language", color: "bg-yellow-500" },
  { name: "Photography", color: "bg-indigo-500" },
  { name: "Financial Planning", color: "bg-teal-500" },
  { name: "Node.js Backend", color: "bg-green-600" },
  { name: "Public Speaking", color: "bg-rose-500" },
  { name: "Blockchain Basics", color: "bg-violet-500" },
  { name: "Guitar Playing", color: "bg-amber-500" },
  { name: "Project Management", color: "bg-sky-500" },
  { name: "Japanese Language", color: "bg-lime-500" },
  { name: "Video Editing", color: "bg-fuchsia-500" },
  { name: "Excel Mastery", color: "bg-slate-500" },
  { name: "Creative Writing", color: "bg-emerald-400" },
  { name: "Cloud Computing", color: "bg-blue-400" },
  { name: "Sales Techniques", color: "bg-red-400" },
  { name: "Yoga Practice", color: "bg-green-400" },
  { name: "Cybersecurity", color: "bg-gray-600" },
  { name: "Cooking Skills", color: "bg-yellow-400" },
  { name: "Time Management", color: "bg-purple-400" },
  { name: "Docker & DevOps", color: "bg-blue-600" },
  { name: "Negotiation Skills", color: "bg-orange-400" },
  { name: "Drawing & Art", color: "bg-pink-400" },
  { name: "Database Design", color: "bg-cyan-500" },
  { name: "Meditation", color: "bg-indigo-400" },
];

export default function SkillsShowcase() {
  const { t } = useTranslation();
  
  // Create multiple rows for a more dense cloud effect
  const createTagRow = (startIndex: number, delay: number = 0, reverse: boolean = false) => {
    const rowTags = skillTopics.slice(startIndex, startIndex + 10);
    const animationClass = reverse ? 'animate-scroll-left-to-right' : 'animate-scroll-right-to-left';
    
    return (
      <div 
        key={startIndex}
        className={`flex ${animationClass} gap-6 mb-4`}
        style={{ 
          animationDelay: `${delay}s`,
          animationDuration: '120s' // Very slow - 2 minutes per cycle
        }}
      >
        {[...rowTags, ...rowTags, ...rowTags].map((topic, index) => (
          <div
            key={`${startIndex}-${index}`}
            className={`${topic.color} text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0`}
            data-testid={`tag-${topic.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          >
            {topic.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-card/20 overflow-hidden" data-testid="section-skills-showcase">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-skills-title"
          >
            {t('skills.title')}
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-skills-subtitle"
          >
            {t('skills.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Full Width Animated Tag Cloud */}
      <div className="relative w-full">
        <div className="flex flex-col">
          {createTagRow(0, 0, false)}      {/* Row 1: Right to Left */}
          {createTagRow(10, 20, true)}     {/* Row 2: Left to Right (opposite) */}
          {createTagRow(20, 40, false)}    {/* Row 3: Right to Left */}
        </div>
        
        {/* Fade out edges for smooth effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}