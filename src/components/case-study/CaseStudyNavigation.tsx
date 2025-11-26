import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface NavigationProject {
  slug: string;
  title: string;
  client: string;
  image: string;
  sector: string;
}

interface CaseStudyNavigationProps {
  previousProject?: NavigationProject;
  nextProject?: NavigationProject;
}

const CaseStudyNavigation = ({ previousProject, nextProject }: CaseStudyNavigationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Découvrir d'autres projets
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {previousProject && (
              <Link to={`/case-study/${previousProject.slug}`} className="block group">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={previousProject.image}
                      alt={previousProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="pointer-events-none"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Précédent
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {previousProject.sector}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {previousProject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {previousProject.client}
                    </p>
                  </div>
                </Card>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link to={`/case-study/${nextProject.slug}`} className="block group">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="pointer-events-none"
                      >
                        Suivant
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {nextProject.sector}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {nextProject.client}
                    </p>
                  </div>
                </Card>
              </Link>
            )}
          </div>

          {/* Back to Portfolio Button */}
          <div className="mt-8 text-center">
            <Link to="/#portfolio">
              <Button variant="outline" size="lg">
                Voir tous les projets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNavigation;
