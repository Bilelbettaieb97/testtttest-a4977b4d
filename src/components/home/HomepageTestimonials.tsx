import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Site créé en 24h, ultra pro",
    author: "Client vérifié",
    initials: "CV",
  },
  {
    text: "Très réactif, je recommande",
    author: "Entrepreneur",
    initials: "EN",
  },
  {
    text: "J'ai déjà des clients grâce au site",
    author: "Gérant PME",
    initials: "GP",
  },
];

const HomepageTestimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Avis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            clients
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Note Trustpilot : <strong className="text-foreground">4.4★</strong> — avis vérifiés
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-5 h-5 text-primary/30 mb-2" />
              <p className="text-foreground font-medium mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.initials}
                </div>
                <span className="text-sm text-muted-foreground">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;
