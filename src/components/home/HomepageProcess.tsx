const steps = [
  { number: "01", title: "On échange 15 minutes", description: "Discussion rapide pour comprendre votre projet." },
  { number: "02", title: "On crée votre maquette gratuite", description: "Design personnalisé sans engagement." },
  { number: "03", title: "Vous validez", description: "Modifications illimitées jusqu'à satisfaction." },
  { number: "04", title: "Livraison en 48h", description: "Votre site en ligne, prêt à convertir." },
];

const HomepageProcess = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Comment ça{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            fonctionne ?
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <div className="text-5xl font-black text-primary/15 mb-2">{step.number}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 text-primary/30 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageProcess;
