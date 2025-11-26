import { AlertTriangle } from "lucide-react";

interface CaseStudyChallengeProps {
  challenge: string;
}

const CaseStudyChallenge = ({ challenge }: CaseStudyChallengeProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-destructive/5 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Défi</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {challenge}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallenge;
