import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  "Ils ne génèrent aucun client",
  "Ils sont invisibles sur Google",
  "Ils ne donnent pas envie de passer à l'action",
  "Ils font fuir les prospects",
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
            La vérité sur{" "}
            <span className="text-destructive">90% des sites web</span>
          </h2>

          <div className="space-y-4 max-w-lg mx-auto mb-8">
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

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-bold text-destructive">Résultat : perte d'argent</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
