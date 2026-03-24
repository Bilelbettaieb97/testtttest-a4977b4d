import { CheckCircle, X } from 'lucide-react';

const features = [
  { name: 'Design responsive', landing: true, vitrine: true, ecommerce: true },
  { name: 'Optimisation SEO', landing: true, vitrine: true, ecommerce: true },
  { name: 'Formulaire de contact', landing: true, vitrine: true, ecommerce: true },
  { name: 'Pages multiples', landing: false, vitrine: true, ecommerce: true },
  { name: 'Blog intégré', landing: false, vitrine: true, ecommerce: true },
  { name: 'Paiement en ligne', landing: false, vitrine: false, ecommerce: true },
  { name: 'Gestion des stocks', landing: false, vitrine: false, ecommerce: true },
  { name: 'Espace client', landing: false, vitrine: false, ecommerce: true },
  { name: 'Analytics avancés', landing: true, vitrine: true, ecommerce: true },
  { name: 'Support technique', landing: '1 mois', vitrine: '3 mois', ecommerce: '6 mois' },
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (typeof value === 'string') return <span className="text-sm font-medium text-foreground">{value}</span>;
  return value
    ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
    : <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
};

const SitesWebComparison = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Comparez nos offres</h2>
          <p className="text-muted-foreground">Trouvez la solution idéale en un coup d'œil</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-sm font-medium text-muted-foreground">Fonctionnalité</th>
                <th className="py-4 px-4 text-center">
                  <div className="text-sm font-bold text-foreground">Landing Page</div>
                  <div className="text-xs text-muted-foreground">Dès 300€</div>
                </th>
                <th className="py-4 px-4 text-center bg-primary/5 rounded-t-lg">
                  <div className="text-sm font-bold text-primary">Site Vitrine</div>
                  <div className="text-xs text-muted-foreground">Dès 300€</div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="text-sm font-bold text-foreground">E-commerce</div>
                  <div className="text-xs text-muted-foreground">Dès 800€</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-sm text-foreground">{feat.name}</td>
                  <td className="py-3 px-4 text-center"><Cell value={feat.landing} /></td>
                  <td className="py-3 px-4 text-center bg-primary/5"><Cell value={feat.vitrine} /></td>
                  <td className="py-3 px-4 text-center"><Cell value={feat.ecommerce} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SitesWebComparison;
