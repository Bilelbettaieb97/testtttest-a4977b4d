import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  image: string;
  sector: string;
  client: string;
  icon: React.ReactNode;
}

const CaseStudyHero = ({ title, subtitle, image, sector, client, icon }: CaseStudyHeroProps) => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`space-y-6 transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {icon}
              </div>
              <Badge variant="secondary" className="text-sm">
                {sector}
              </Badge>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {subtitle}
              </p>
              <p className="text-lg font-medium">
                Client: <span className="text-primary">{client}</span>
              </p>
            </div>
          </div>

          <div 
            ref={rightRef}
            className={`relative transition-all duration-700 delay-200 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img
              src={image}
              alt={title}
              className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
