import { Sparkles } from "lucide-react";

interface CaseStudySolutionProps {
  solution: string;
}

const CaseStudySolution = ({ solution }: CaseStudySolutionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Solution</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {solution}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySolution;
