import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";

interface SuggestedArticlesProps {
  /** Slugs to exclude (e.g. current article) */
  exclude?: string[];
  /** Max items */
  max?: number;
  /** Section title */
  title?: string;
}

const SuggestedArticles = ({ exclude = [], max = 3, title = "Articles suggérés" }: SuggestedArticlesProps) => {
  const articles = blogArticles
    .filter(a => !exclude.includes(a.slug))
    .slice(0, max);

  if (articles.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-primary/40 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={`${article.title} - Blog ConvertiLab`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={250}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  <span className="ml-auto">{article.readTime}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">{article.excerpt}</p>
                <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lire l'article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Voir tous les articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuggestedArticles;
