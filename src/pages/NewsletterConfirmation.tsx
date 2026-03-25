import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, FileText, BookOpen, Video, ArrowLeft, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const NewsletterConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Guide CRO Complet",
      description: "30 pages de stratégies éprouvées pour optimiser vos conversions",
      format: "PDF - 2.5 MB",
      downloadUrl: "#"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Checklist Design UX",
      description: "50 points de contrôle pour un design qui convertit",
      format: "PDF - 1.2 MB",
      downloadUrl: "#"
    },
    {
      icon: <Video className="w-8 h-8 text-purple-600" />,
      title: "Masterclass Landing Page",
      description: "Vidéo de 45 min sur la création de landing pages performantes",
      format: "Vidéo - Accès immédiat",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 pt-32 pb-16 max-w-5xl">
        {/* Success Message */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Bienvenue dans la communauté ! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Votre inscription à notre newsletter a été confirmée avec succès.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-purple-600 bg-purple-50 rounded-lg py-3 px-6 inline-flex">
            <Mail className="w-5 h-5" />
            <span className="font-medium">
              Vous recevrez prochainement nos meilleurs conseils dans votre boîte mail
            </span>
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            Vos ressources gratuites
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Téléchargez immédiatement ces guides pour booster vos conversions dès aujourd'hui
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-purple-50 rounded-full">
                      {resource.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 text-sm min-h-[48px]">
                    {resource.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">{resource.format}</p>
                  <Button 
                    className="w-full"
                    variant="outline"
                    disabled
                  >
                    Bientôt disponible
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What's Next Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="py-8 px-6">
            <h3 className="text-2xl font-bold text-center mb-6">Et maintenant ?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Consultez vos emails</h4>
                  <p className="text-sm text-gray-600">
                    Vous recevrez chaque semaine nos meilleurs conseils et études de cas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mettez en pratique</h4>
                  <p className="text-sm text-gray-600">
                    Appliquez nos conseils pour améliorer vos taux de conversion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Partagez vos résultats</h4>
                  <p className="text-sm text-gray-600">
                    N'hésitez pas à nous contacter pour partager vos succès
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Besoin d'aide ?</h4>
                  <p className="text-sm text-gray-600">
                    Réservez un appel gratuit de 30 minutes pour discuter de vos objectifs
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Bonus Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
            <CardContent className="py-6">
              <h3 className="text-xl font-bold mb-2">🎁 Bonus exclusif abonnés</h3>
              <p className="text-gray-600 mb-4">
                Dans votre premier email, vous recevrez un code promo de <span className="font-bold text-green-600">-20%</span> sur votre premier audit
              </p>
              <p className="text-sm text-gray-500">
                Offre valable pendant 30 jours
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsletterConfirmation;
