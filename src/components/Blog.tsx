
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen, TrendingUp, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      title: "5 astuces pour une landing page qui convertit vraiment",
      excerpt: "Découvrez les techniques essentielles pour optimiser vos conversions",
      readTime: "5 min"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Comment écrire un titre irrésistible pour vos pages de vente",
      excerpt: "Les secrets du copywriting pour capter l'attention dès la première seconde",
      readTime: "7 min"
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-600" />,
      title: "Le rôle du design dans la psychologie de l'achat",
      excerpt: "Comment le design influence les décisions d'achat de vos visiteurs",
      readTime: "6 min"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-600" />,
      title: "Pourquoi le test A/B est indispensable pour vos campagnes",
      excerpt: "Méthodologie et outils pour optimiser vos pages en continu",
      readTime: "8 min"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Étude de cas : conversion multipliée par 3 grâce à une refonte complète",
      excerpt: "Analyse détaillée d'une transformation réussie",
      readTime: "10 min"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Blog & <span className="text-purple-600">Ressources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils d'experts et guides pratiques pour optimiser vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.slice(0, 3).map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardHeader>
                <div className="flex items-center mb-3">
                  {article.icon}
                  <span className="ml-2 text-sm text-gray-500">{article.readTime} de lecture</span>
                </div>
                <CardTitle className="text-xl text-gray-900 leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Lire l'article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Articles List */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Articles récents</h3>
          <div className="space-y-4">
            {articles.slice(3).map((article, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="mr-4">{article.icon}</div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-1">{article.title}</h4>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
                <div className="text-sm text-gray-500">{article.readTime}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
