import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesComponent from '@/components/Services';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.fr/" },
    { name: "Services", url: "https://convertilab.fr/services" }
  ];

  return (
    <>
      <Helmet>
        <title>Services Création Site Web | Landing Page, Vitrine, E-commerce | ConvertiLab</title>
        <meta name="description" content="Découvrez nos services de création de sites web : landing page dès 490€, site vitrine dès 990€, e-commerce dès 2490€. Prix fixes, délais garantis. Devis gratuit sous 24h." />
        <meta name="keywords" content="création site web, site vitrine, landing page, e-commerce, développement web, agence web Paris" />
        <link rel="canonical" href="https://convertilab.fr/services" />
        <meta property="og:title" content="Services Création Site Web | ConvertiLab" />
        <meta property="og:description" content="Landing page, site vitrine ou e-commerce : des tarifs transparents et des délais garantis pour votre projet web." />
        <meta property="og:url" content="https://convertilab.fr/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <ServicesComponent />
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;
