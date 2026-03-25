import { SEO } from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

const PolitiqueConfidentialite = () => {
  const breadcrumbItems = [
    { name: 'Accueil', url: '/' },
    { name: 'Politique de confidentialité', url: '/politique-de-confidentialite' }
  ];

  return (
    <>
      <SEO
        url="/politique-de-confidentialite"
        title="Politique de Confidentialité"
        description="Politique de confidentialité ConvertiLab. Comment nous protégeons vos données personnelles conformément au RGPD."
        noindex={true}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Politique de confidentialité</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Politique de Confidentialité
            </h1>
            
            <p className="text-muted-foreground mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                ConvertiLab s'engage à protéger la vie privée des utilisateurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Données collectées</h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les informations suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Informations d'identification (nom, prénom, email, téléphone)</li>
                <li>Informations professionnelles (nom de l'entreprise)</li>
                <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
                <li>Informations relatives à votre projet (budget, délais, besoins)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilisation des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer nos services et l'expérience utilisateur</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base légale du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Notre intérêt légitime à développer notre activité</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Conservation des données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont conservées pendant une durée de 3 ans à compter de notre dernier contact, sauf obligation légale contraire.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Partage des données</h2>
              <p className="text-muted-foreground mb-4">
                Nous ne vendons pas vos données personnelles. Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Nos prestataires techniques (hébergement, emails)</li>
                <li>Les autorités compétentes si la loi l'exige</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:Contact@convertilab.com" className="text-primary hover:underline">Contact@convertilab.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Sécurité</h2>
              <p className="text-muted-foreground mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email : <a href="mailto:Contact@convertilab.com" className="text-primary hover:underline">Contact@convertilab.com</a></li>
                <li>Via notre <a href="/contact" className="text-primary hover:underline">formulaire de contact</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur cette page.
              </p>
            </section>
          </article>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;
