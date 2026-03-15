const steps = [
  { number: '01', title: 'Consultation gratuite', description: 'On échange sur vos objectifs et besoins. Devis détaillé sous 24h.' },
  { number: '02', title: 'Maquette & validation', description: 'Vous validez le design avant tout développement. Modifications illimitées.' },
  { number: '03', title: 'Développement', description: 'Votre site prend vie. Vous suivez l\'avancement en temps réel.' },
  { number: '04', title: 'Livraison & formation', description: 'Mise en ligne, formation à l\'utilisation, et support technique inclus.' },
];

const SitesWebProcess = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Comment ça marche ?</h2>
          <p className="text-muted-foreground">Un processus simple et transparent en 4 étapes</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
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

export default SitesWebProcess;
