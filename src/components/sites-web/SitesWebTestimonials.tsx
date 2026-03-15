import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Notre landing page a généré 150 leads en 2 semaines. Le ROI est incroyable.",
    result: "+150 leads en 14 jours",
    name: "Marie L.",
    role: "Fondatrice, StartupTech",
    initial: "M"
  },
  {
    quote: "Notre site vitrine nous apporte 80% de nos nouveaux clients. Un investissement transformateur.",
    result: "80% des nouveaux clients",
    name: "Pierre D.",
    role: "Artisan menuisier",
    initial: "P"
  },
  {
    quote: "Chiffre d'affaires multiplié par 3 depuis le lancement de notre e-commerce.",
    result: "CA x3 en 6 mois",
    name: "Sophie M.",
    role: "Gérante, Boutique Mode",
    initial: "S"
  }
];

const SitesWebTestimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Résultats concrets de nos clients</h2>
          <p className="text-muted-foreground">Des projets web qui ont transformé leur activité</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border">
              {/* Result badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold mb-4">
                📈 {t.result}
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesWebTestimonials;
