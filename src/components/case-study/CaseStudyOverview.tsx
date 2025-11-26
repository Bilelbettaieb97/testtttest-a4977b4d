import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Code } from "lucide-react";

interface CaseStudyOverviewProps {
  challenge: string;
  solution: string;
  technologies: string[];
}

const CaseStudyOverview = ({ challenge, solution, technologies }: CaseStudyOverviewProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-destructive/10">
                <Target className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-bold text-lg">Le Défi</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{challenge}</p>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">La Solution</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
