import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CaseStudySolutionProps {
  solution: string;
}

const CaseStudySolution = ({ solution }: CaseStudySolutionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
