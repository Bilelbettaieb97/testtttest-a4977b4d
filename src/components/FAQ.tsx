import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quels services de marketing digital proposez-vous ?",
      answer: "Nous proposons une offre 360° : création de sites web, SEO (référencement naturel), publicité Google Ads & Meta Ads, gestion des réseaux sociaux, email marketing, content marketing, branding et identité visuelle. Chaque stratégie est adaptée à vos objectifs business."
    },
    {
      question: "Combien de temps avant de voir les premiers résultats ?",
      answer: "Cela dépend du levier : la publicité (Google/Meta Ads) génère des résultats dès les premières semaines. Le SEO prend généralement 3 à 6 mois pour des résultats significatifs. Le social media commence à porter ses fruits après 1 à 3 mois de régularité."
    },
    {
      question: "Comment mesurez-vous le ROI de vos actions ?",
      answer: "Nous mettons en place un tracking complet (Google Analytics, pixels, UTMs) dès le départ. Vous recevez des rapports mensuels détaillés avec les KPIs clés : trafic, leads, conversions, coût par acquisition, ROI. Transparence totale."
    },
    {
      question: "Quelle est la différence avec une agence web classique ?",
      answer: "Nous ne faisons pas que des sites web. Notre approche couvre l'ensemble du tunnel d'acquisition digital : attirer (SEO, Ads), convertir (landing pages, UX), fidéliser (email, social). Chaque action est pensée pour générer du business mesurable."
    },
    {
      question: "Quel budget prévoir pour une stratégie marketing digitale ?",
      answer: "Nos accompagnements démarrent à partir de 500€/mois. Le budget dépend de vos objectifs, votre secteur et les leviers activés. Nous recommandons un budget publicitaire minimum de 500€/mois en plus de notre accompagnement pour des résultats significatifs."
    },
    {
      question: "Travaillez-vous avec tous les secteurs d'activité ?",
      answer: "Oui ! Nous avons travaillé avec +150 entreprises dans 25 secteurs différents (e-commerce, SaaS, services, immobilier, restauration, santé, formation...). Notre méthodologie s'adapte à chaque marché."
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
            Toutes les réponses sur nos services de marketing digital
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

          <div className="text-center mt-8 sm:mt-12 p-4 sm:p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
            <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">D'autres questions ? Parlons-en !</h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
              Réservez votre consultation stratégique gratuite de 30 minutes
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <span className="hidden sm:inline">Consultation gratuite maintenant</span>
              <span className="sm:hidden">Consultation gratuite</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
