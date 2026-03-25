import { CheckCircle } from "lucide-react";

const solutions = [
  "Structure pensée pour convertir",
  "Message clair en 5 secondes",
  "SEO intégré dès le départ",
  "Expérience utilisateur optimisée",
];

const SolutionSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Ce que fait Convertilab{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              différemment
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {solutions.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4 text-foreground font-medium"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
