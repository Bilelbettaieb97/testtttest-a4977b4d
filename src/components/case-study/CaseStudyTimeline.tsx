import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
}

interface CaseStudyTimelineProps {
  timeline: TimelinePhase[];
}

const CaseStudyTimeline = ({ timeline }: CaseStudyTimelineProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Timeline du Projet</h2>
          <p className="text-xl text-muted-foreground">
            Les étapes clés de la réalisation
          </p>
        </div>

        <div 
          ref={timelineRef}
          className={`relative transition-all duration-700 delay-200 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block"></div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <Card 
                key={index} 
                className="relative p-6 ml-0 md:ml-20 border-2 hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 md:left-[-4.5rem] top-8 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold whitespace-nowrap">
                    <Clock className="w-4 h-4" />
                    {phase.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTimeline;
