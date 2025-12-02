import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface CaseStudyMetricsProps {
  metrics: Metric[];
}

const CaseStudyMetrics = ({ metrics }: CaseStudyMetricsProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/10 mb-3 sm:mb-4">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Résultats Mesurables</h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Des chiffres qui parlent d'eux-mêmes
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="p-3 sm:p-6 text-center border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 sm:mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{metric.label}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{metric.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMetrics;
