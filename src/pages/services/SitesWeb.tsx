import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
      <Helmet>
        <title>Création Sites Web | Landing Page, Vitrine, E-commerce dès 490€ | ConvertiLab</title>
        <meta name="description" content="Création de sites web optimisés conversion : landing page dès 490€, site vitrine dès 990€, e-commerce dès 2490€. Prix fixes, délais garantis. Devis gratuit sous 24h." />
        <link rel="canonical" href="https://convertilab.com/services/sites-web" />
        <meta property="og:title" content="Création Sites Web dès 490€ | ConvertiLab" />
        <meta property="og:description" content="Sites web qui convertissent : landing pages, vitrines, e-commerce. +50 clients satisfaits, prix fixes, livraison garantie." />
        <meta property="og:url" content="https://convertilab.com/services/sites-web" />
        <meta property="og:type" content="website" />
      </Helmet>

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
