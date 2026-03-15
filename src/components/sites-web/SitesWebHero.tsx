import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const SitesWebHero = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent">🔥 3 créneaux disponibles en juillet</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Un Site Web Qui <span className="text-primary">Convertit Vos Visiteurs</span> en Clients
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez +50 entreprises qui génèrent en moyenne <strong className="text-foreground">3x plus de leads</strong> grâce à nos sites optimisés conversion.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
              <Link to="/contact">
                Obtenir mon devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/portfolio">Voir nos réalisations →</Link>
            </Button>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span>sur 47 avis</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span><strong className="text-foreground">+50</strong> clients accompagnés</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Satisfaction <strong className="text-foreground">garantie</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitesWebHero;
