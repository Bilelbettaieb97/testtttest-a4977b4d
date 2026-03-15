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

  return (
    <Card className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={caseStudy.image} 
            alt={`Site ${caseStudy.client}`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width={371}
            height={278}
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";
            }}
          />
        </AspectRatio>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          {caseStudy.icon}
          <Badge variant="outline" className="bg-white border-purple-200 text-purple-700 text-xs">
            {caseStudy.sector}
          </Badge>
        </div>
        
        <CardTitle className="text-lg font-bold text-gray-900 mb-1 min-h-[3rem] line-clamp-2">
          {caseStudy.title}
        </CardTitle>
        <p className="text-purple-600 font-semibold text-sm">{caseStudy.client}</p>
      </CardHeader>

      <CardContent className="space-y-3 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed min-h-[2.5rem] line-clamp-2">
          {caseStudy.description}
        </p>

        <div className="grid grid-cols-3 gap-2 min-h-[80px]">
          {caseStudy.metrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
              <metric.icon className="w-4 h-4 text-purple-600 mx-auto mb-1" />
              <div className="text-sm font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
            <div className="text-green-800 font-bold text-sm mb-1">Résultat :</div>
            <div className="text-green-700 font-semibold text-sm">{caseStudy.results}</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 min-h-[6rem]">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic text-sm mb-2 line-clamp-2">“{formattedTestimonial}”</p>
            <div className="text-xs font-semibold text-gray-900">{caseStudy.author}</div>
          </div>

          {caseStudy.slug && (
            <Link to={`/case-study/${caseStudy.slug}`} className="block">
              <Button className="w-full group/btn" variant="default">
                Voir le projet complet
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
