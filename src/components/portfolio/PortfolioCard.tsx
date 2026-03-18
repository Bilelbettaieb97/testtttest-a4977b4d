import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioCase {
  icon: React.ReactNode;
  sector: string;
  client: string;
  title: string;
  description: string;
  image: string;
  metrics: Array<{
    label: string;
    value: string;
    icon: React.ComponentType<any>;
  }>;
  technologies: string[];
  results: string;
  testimonial: string;
  author: string;
  slug?: string;
}

interface PortfolioCardProps {
  caseStudy: PortfolioCase;
}

const PortfolioCard = ({ caseStudy }: PortfolioCardProps) => {
  const testimonialSentences = caseStudy.testimonial.match(/[^.!?]+[.!?]*/g) || [];
  const formattedTestimonial = testimonialSentences.slice(0, 2).join(" ").trim();

  const cardContent = (
    <Card className={`group bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col ${caseStudy.slug ? 'cursor-pointer' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={caseStudy.image} 
            alt={`${caseStudy.title} - ${caseStudy.client} | Portfolio ConvertiLab`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={371}
            height={238}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 371px"
            decoding="async"
            fetchPriority="low"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";
            }}
          />
        </AspectRatio>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold shadow-md">
            {caseStudy.results}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          {caseStudy.icon}
          <Badge variant="outline" className="bg-card border-primary/20 text-primary text-xs">
            {caseStudy.sector}
          </Badge>
        </div>
        
        <CardTitle className="text-lg font-bold text-foreground mb-1 min-h-[3rem] line-clamp-2">
          {caseStudy.title}
        </CardTitle>
        <p className="text-primary font-semibold text-sm">{caseStudy.client}</p>
      </CardHeader>

      <CardContent className="space-y-3 flex-grow flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed min-h-[2.5rem] line-clamp-2">
          {caseStudy.description}
        </p>

        <div className="grid grid-cols-3 gap-2 min-h-[80px]">
          {caseStudy.metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="text-center p-2 bg-muted/50 rounded-lg">
              <metric.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-sm font-bold text-foreground">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <div className="bg-muted/50 rounded-lg p-3 min-h-[5.5rem]">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground italic text-sm mb-2 line-clamp-2">"{formattedTestimonial}"</p>
            <div className="text-xs font-semibold text-foreground">{caseStudy.author}</div>
          </div>

          {caseStudy.slug && (
            <div className="w-full bg-primary text-primary-foreground group/btn inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2">
              Voir l'étude de cas
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (caseStudy.slug) {
    return (
      <Link to={`/case-study/${caseStudy.slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default PortfolioCard;
