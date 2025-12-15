import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioComponent from '@/components/Portfolio';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.com/" },
    { name: "Portfolio", url: "https://convertilab.com/portfolio" }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio Création Site Web | Nos Réalisations | ConvertiLab</title>
        <meta name="description" content="Découvrez nos réalisations : +150 sites créés, +280% de CA moyen pour nos clients. E-commerce, restaurants, immobilier, fitness. Résultats concrets garantis." />
        <meta name="keywords" content="portfolio web, réalisations sites web, exemples sites internet, case study, création site e-commerce, site restaurant" />
        <link rel="canonical" href="https://convertilab.com/portfolio" />
        <meta property="og:title" content="Portfolio Création Site Web | ConvertiLab" />
        <meta property="og:description" content="Plus de 150 sites web créés avec des résultats concrets : +340% de ventes, +250% de réservations. Découvrez nos études de cas." />
        <meta property="og:url" content="https://convertilab.com/portfolio" />
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
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <PortfolioComponent />
      </main>
      
      <Footer />
    </>
  );
};

export default PortfolioPage;
