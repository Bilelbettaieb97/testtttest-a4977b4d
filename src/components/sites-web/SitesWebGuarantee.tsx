import { Shield, RotateCcw, Headphones, Lock } from 'lucide-react';

const guarantees = [
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: 'Satisfait ou retravaillé',
    description: 'Si le résultat ne correspond pas au cahier des charges validé, nous retravaillons gratuitement.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Prix fixe garanti',
    description: 'Le devis signé est le prix final. Aucun coût caché, aucune surprise en cours de projet.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Délai respecté',
    description: 'Nous nous engageons sur un calendrier précis. En cas de retard de notre fait, 10% de remise.'
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Support réactif',
    description: 'Un interlocuteur dédié, réponse sous 24h. Support technique inclus après livraison.'
  }
];

const SitesWebGuarantee = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700 dark:text-green-300">Zéro risque</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nos 4 garanties pour votre tranquillité
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nous prenons tous les risques à votre place. Vous n'avez qu'à vous concentrer sur votre métier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {guarantees.map((g, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 text-green-600">
                {g.icon}
              </div>
              <h3 className="font-bold text-foreground mb-2">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesWebGuarantee;
