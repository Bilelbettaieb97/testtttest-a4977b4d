
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, Shield, Clock, Target } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Et si mes conversions n'augmentent pas de 35% minimum ?",
      answer: "Nous garantissons une amélioration de 35% minimum ou nous retravaillons gratuitement jusqu'à atteindre cet objectif. Si après 3 mois nous n'atteignons pas ce résultat, nous vous remboursons intégralement. C'est notre engagement qualité."
    },
    {
      question: "Combien de temps avant de voir les premiers résultats ?",
      answer: "En moyenne, nos clients voient une amélioration significative dès la 1ère semaine après la mise en ligne. Les résultats complets (35%+ d'amélioration) sont généralement atteints entre 15 et 30 jours selon votre trafic."
    },
    {
      question: "Que se passe-t-il après la livraison de ma landing page ?",
      answer: "Nous incluons 3 mois de support et d'optimisation gratuits. Cela comprend : suivi des performances, ajustements basés sur les données réelles, support technique, et formation de votre équipe pour maximiser les résultats."
    },
    {
      question: "Comment êtes-vous sûrs que ça va fonctionner pour mon secteur ?",
      answer: "Nous avons travaillé avec +100 entreprises dans 25 secteurs différents (e-commerce, SaaS, services, immobilier, formation...). Notre méthodologie est basée sur des principes de psychologie cognitive universels qui fonctionnent quel que soit le secteur."
    },
    {
      question: "Quelle est la différence avec une agence web classique ?",
      answer: "Nous nous spécialisons exclusivement sur l'optimisation des conversions. Nos pages sont conçues avec une approche scientifique : tests A/B, analyse comportementale, optimisation continue. Une agence web fait du 'joli', nous faisons du 'profitable'."
    },
    {
      question: "Je n'ai pas beaucoup de trafic, est-ce que ça vaut le coup ?",
      answer: "Absolument ! Même avec 100 visiteurs/mois, passer de 1% à 3.5% de conversion change tout. Et quand vous augmenterez votre trafic, vous aurez déjà une machine de conversion optimale. C'est un investissement pour l'avenir."
    },
    {
      question: "Puis-je voir des exemples concrets de vos réalisations ?",
      answer: "Bien sûr ! Nous avons une section portfolio avec des cas clients détaillés, incluant les métriques avant/après. Nous pouvons aussi vous présenter des exemples similaires à votre secteur lors de la consultation gratuite."
    },
    {
      question: "Combien coûte réellement une landing page optimisée ?",
      answer: "Nos tarifs commencent à 1 490€ pour le Pack Starter. Mais pensez ROI : si vous générez 1000€/mois actuellement, une amélioration de 35% vous rapporte 350€/mois supplémentaires, soit 4200€/an. L'investissement se rentabilise en 4 mois maximum."
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
          {/* Trust badges before FAQ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Garantie résultats</h3>
              <p className="text-sm text-gray-600">35% d'amélioration minimum ou remboursé</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Livraison rapide</h3>
              <p className="text-sm text-gray-600">7 jours ouvrés maximum</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Suivi inclus</h3>
              <p className="text-sm text-gray-600">3 mois d'optimisation gratuite</p>
            </div>
          </div>

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
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              D'autres questions ? Parlons-en !
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Réservez votre consultation gratuite de 30 minutes
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Consultation gratuite maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
