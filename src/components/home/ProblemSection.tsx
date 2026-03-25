import { XCircle } from "lucide-react";

const problems = [
  "Aucun client généré",
  "Design dépassé",
  "Aucun appel à l'action",
  "Invisible sur Google",
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            Pourquoi{" "}
            <span className="text-destructive">90% des sites</span>{" "}
            ne servent à rien ?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-foreground font-medium"
              >
                <XCircle className="w-5 h-5 text-destructive shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
