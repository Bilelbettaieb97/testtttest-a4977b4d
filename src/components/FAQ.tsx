
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Combien de temps avant de voir les premiers résultats ?",
      answer: "En moyenne, nos clients voient une amélioration significative dès la 1ère semaine après la mise en ligne. Les résultats complets (35%+ d'amélioration) sont généralement atteints entre 15 et 30 jours selon votre trafic."
    },
    {
      question: "Que se passe-t-il après la livraison de mon site ?",
      answer: "Nous incluons 3 mois de support et d'optimisation gratuits. Cela comprend : suivi des performances, ajustements basés sur les données réelles, support technique, et formation de votre équipe pour maximiser les résultats."
    },
    {
      question: "Comment êtes-vous sûrs que ça va fonctionner pour mon secteur ?",
      answer: "Nous avons travaillé avec +150 entreprises dans 25 secteurs différents (e-commerce, SaaS, services, immobilier, formation...). Notre méthodologie est basée sur des principes de psychologie cognitive universels qui fonctionnent quel que soit le secteur."
    },
    {
      question: "Quelle est la différence avec une agence web classique ?",
      answer: "Nous nous spécialisons exclusivement sur l'optimisation des conversions. Nos pages sont conçues avec une approche scientifique : tests A/B, analyse comportementale, optimisation continue. Une agence web fait du 'joli', nous faisons du 'profitable'."
    },
    {
      question: "Puis-je voir des exemples concrets de vos réalisations ?",
      answer: "Bien sûr ! Nous avons une section portfolio avec des cas clients détaillés, incluant les métriques avant/après. Nous pouvons aussi vous présenter des exemples similaires à votre secteur lors de la consultation gratuite."
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
        {/* Header */}
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
            Toutes les réponses à vos questions pour lever vos derniers doutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
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

          {/* CTA after FAQ */}
          <div className="text-center mt-8 sm:mt-12 p-4 sm:p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
            <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              D'autres questions ? Parlons-en !
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90">
              Réservez votre consultation gratuite de 30 minutes
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
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
