import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const BlogHeader = () => {
  return (
    <div className="text-center mb-12">
      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <BookOpen className="w-4 h-4 mr-2" />
        Blog & Ressources
      </Badge>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Conseils pour{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Booster Votre Business
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Découvrez nos articles sur la création de sites web, le design UX, le SEO et les stratégies digitales pour développer votre entreprise.
      </p>
    </div>
  );
};

export default BlogHeader;
