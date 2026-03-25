import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQSchema } from '@/components/seo/StructuredData';

const faqs = [
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "Cela dépend du type de site : 5-7 jours pour une landing page, 10-15 jours pour un site vitrine, 21-30 jours pour un e-commerce. Nous nous engageons sur un calendrier précis dès le devis."
  },
  {
    q: "Que se passe-t-il si le résultat ne me plaît pas ?",
    a: "Nous validons avec vous chaque étape clé (maquette, développement). Si le résultat final ne correspond pas au cahier des charges validé, nous retravaillons gratuitement jusqu'à votre satisfaction."
  },
  {
    q: "Y a-t-il des coûts cachés après la livraison ?",
    a: "Non. Le prix du devis inclut la conception, le développement, l'hébergement première année et le support technique. Seul le renouvellement d'hébergement (environ 10€/mois) s'applique ensuite."
  },
  {
    q: "Mon site sera-t-il bien référencé sur Google ?",
    a: "Oui. Tous nos sites incluent une optimisation SEO technique : balises meta, vitesse de chargement, structure sémantique, sitemap. Pour un positionnement plus agressif, nous proposons des forfaits SEO dédiés."
  },
  {
    q: "Puis-je modifier mon site moi-même après livraison ?",
    a: "Absolument. Nous vous formons à l'utilisation de votre site et vous fournissons une documentation. Pour les modifications complexes, notre support est disponible."
  },
  {
    q: "Proposez-vous le paiement en plusieurs fois ?",
    a: "Oui, nous proposons un paiement en 2 ou 3 fois sans frais : un acompte au démarrage, le solde à la livraison (ou réparti sur 2 échéances)."
  }
];

const SitesWebFAQ = () => {
  return (
    <>
    <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground">Les réponses aux questions que vous vous posez sûrement</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    </>
  );
};

export default SitesWebFAQ;
