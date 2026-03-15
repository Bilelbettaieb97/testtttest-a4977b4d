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
      <Card className={`group overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500 bg-card ${featured ? 'md:flex' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-[16/10]'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
            {article.category}
          </Badge>
        </div>

        {/* Content */}
        <CardContent className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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

          <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {article.title}
          </h3>

          <p className={`text-muted-foreground mb-4 line-clamp-3 ${featured ? 'text-lg' : ''}`}>
            {article.excerpt}
          </p>

          {/* Author & CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {article.author.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-foreground">{article.author.name}</span>
            </div>
            <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
              Lire l'article
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
