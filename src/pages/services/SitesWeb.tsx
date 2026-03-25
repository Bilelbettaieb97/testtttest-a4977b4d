import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { SEO } from '@/components/SEO';
import Footer from '@/components/Footer';
import { LocalBusinessSchema, ServicesSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
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
        title="Création Site Web dès 300€ | Paris"
        description="Landing page dès 300€, site vitrine dès 300€, e-commerce dès 800€. Prix fixes, délais garantis. Devis gratuit sous 24h."
        keywords="création site web, site vitrine, landing page, e-commerce, agence web, prix site web"
      />

      <LocalBusinessSchema />
      <ServicesSchema />
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Sites Web", url: "/services/sites-web" }
      ]} />

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
