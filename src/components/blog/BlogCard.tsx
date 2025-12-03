import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    avatar?: string;
  };
}

interface BlogCardProps {
  article: BlogArticle;
  featured?: boolean;
}

const BlogCard = ({ article, featured = false }: BlogCardProps) => {
  return (
    <Link to={`/blog/${article.slug}`}>
      <Card className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white ${featured ? 'md:flex' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-[16/10]'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            {article.category}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {article.title}
          </h3>

          <p className={`text-gray-600 mb-4 line-clamp-3 ${featured ? 'text-lg' : ''}`}>
            {article.excerpt}
          </p>

          {/* Author & CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                {article.author.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-gray-700">{article.author.name}</span>
            </div>
            <span className="flex items-center gap-1 text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Lire
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
