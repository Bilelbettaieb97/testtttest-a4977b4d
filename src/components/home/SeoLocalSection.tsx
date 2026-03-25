import { MapPin } from "lucide-react";

const SeoLocalSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">France entière</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Agence web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              en France
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous accompagnons entrepreneurs et entreprises dans toute la France à créer des sites web optimisés pour Google et la conversion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoLocalSection;
