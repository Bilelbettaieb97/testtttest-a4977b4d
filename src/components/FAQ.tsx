import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, Shield, Clock, Zap } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Combien coûte la création d'un site web ?",
      answer: "Nos tarifs démarrent à 490€ pour une landing page et 300€ pour un site vitrine complet. Le prix dépend du nombre de pages, des fonctionnalités et du design souhaité. Nous vous fournissons un devis détaillé et transparent sous 24h."
    },
    {
      question: "En combien de temps mon site sera-t-il livré ?",
      answer: "Une landing page est livrée en 5-7 jours, un site vitrine en 2-3 semaines, un site e-commerce en 3-4 semaines. Nous respectons toujours les délais annoncés — c'est notre garantie."
    },
    {
      question: "Mon site sera-t-il optimisé pour Google (SEO) ?",
      answer: "Oui ! Chaque site inclut une optimisation SEO de base : balises meta, vitesse de chargement, responsive mobile, sitemap, robots.txt. Pour un accompagnement SEO avancé (référencement continu), nous proposons des forfaits dédiés."
    },
    {
      question: "Que comprend votre garantie satisfait ou remboursé ?",
      answer: "Si le site livré ne correspond pas au brief validé ensemble, nous le modifions gratuitement. Si après 2 tours de révisions vous n'êtes pas satisfait, nous vous remboursons intégralement. Aucun risque pour vous."
    },
    {
      question: "Est-ce que je pourrai modifier mon site moi-même ?",
      answer: "Absolument ! Chaque site est livré avec une formation complète pour que vous puissiez modifier textes, images et contenu en toute autonomie. Notre support technique reste disponible 30 jours après la livraison."
    },
    {
      question: "Quels services de marketing digital proposez-vous en plus ?",
      answer: "Au-delà de la création de sites, nous proposons : SEO (référencement naturel), Google Ads, Meta Ads (Facebook/Instagram), gestion des réseaux sociaux, email marketing et branding. Un accompagnement 360° pour votre croissance."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir avant de lancer votre projet
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA - Urgency + Value + Objection handling */}
          <div className="text-center mt-8 sm:mt-12 p-6 sm:p-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Zap className="w-4 h-4" />
                Consultation gratuite — 0€
              </div>
              
              <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Encore une question ? Parlons-en directement
              </h3>
              <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90 max-w-lg mx-auto">
                Obtenez une réponse personnalisée + un devis détaillé sous 24h
              </p>
              
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-6 text-sm sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Demander mon devis gratuit
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" /> Satisfait ou remboursé
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" /> Réponse sous 24h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
