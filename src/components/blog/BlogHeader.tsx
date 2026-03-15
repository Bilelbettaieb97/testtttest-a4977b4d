import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp } from "lucide-react";

const BlogHeader = () => {
  return (
    <div className="text-center mb-12">
      <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border-0">
        <BookOpen className="w-4 h-4 mr-2" />
        Blog & Ressources
      </Badge>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
        Conseils Concrets Pour{' '}
        <span className="text-primary">
          Développer Votre Business
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
        Des guides pratiques et actionnables sur la création de sites web, le SEO et le marketing digital. Par des experts, pour des entrepreneurs.
      </p>

      {/* Social proof */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <span><strong className="text-foreground">+2 000</strong> lecteurs mensuels</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span><strong className="text-foreground">Gratuit</strong> et sans inscription</span>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
