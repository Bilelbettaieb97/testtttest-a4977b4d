import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { SEO } from '@/components/SEO';
import Footer from '@/components/Footer';
import { LocalBusinessSchema, ServicesSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import HowToSchema from '@/components/seo/HowToSchema';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import SitesWebHero from '@/components/sites-web/SitesWebHero';
import SitesWebServices from '@/components/sites-web/SitesWebServices';
import SitesWebProcess from '@/components/sites-web/SitesWebProcess';
import SitesWebComparison from '@/components/sites-web/SitesWebComparison';
import SitesWebGuarantee from '@/components/sites-web/SitesWebGuarantee';
import SitesWebTestimonials from '@/components/sites-web/SitesWebTestimonials';
import SitesWebFAQ from '@/components/sites-web/SitesWebFAQ';
import SitesWebCTA from '@/components/sites-web/SitesWebCTA';

const SitesWebPage = () => {
  return (
    <>
      <SEO
        url="/services/sites-web"
        title="Création Site Internet Paris dès 300€"
        description="Agence web Paris & Île-de-France : landing page dès 300€, site vitrine, e-commerce. Prix fixes, livraison rapide. Devis gratuit."
        keywords="création site internet Paris, agence web Île-de-France, site vitrine Paris, e-commerce Paris, création site web Rueil-Malmaison"
      />

      <LocalBusinessSchema />
      <ServicesSchema />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Sites Web", url: "/services/sites-web" }
      ]} />
      <HowToSchema
        name="Comment créer un site internet professionnel avec ConvertiLab"
        description="Un processus simple et transparent en 4 étapes pour obtenir votre site web sur-mesure."
        totalTime="P14D"
        steps={[
          { name: "Consultation gratuite", text: "Échange sur vos objectifs et besoins. Devis détaillé sous 24h." },
          { name: "Maquette & validation", text: "Validation du design avant tout développement. Modifications illimitées incluses." },
          { name: "Développement", text: "Votre site prend vie. Vous suivez l'avancement en temps réel." },
          { name: "Livraison & formation", text: "Mise en ligne, formation à l'utilisation, et support technique inclus." }
        ]}
      />

      <Navigation />

      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/services">Services</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sites Web</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <SitesWebHero />
        <SitesWebServices />
        <SitesWebProcess />
        <SitesWebComparison />
        <SitesWebGuarantee />
        <SitesWebTestimonials />
        <SitesWebFAQ />
        <SitesWebCTA />
      </main>

      <Footer />
    </>
  );
};

export default SitesWebPage;
