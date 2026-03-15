import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutComponent from '@/components/About';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import RelatedServicesSection from '@/components/internal-links/RelatedServicesSection';
import SuggestedArticles from '@/components/internal-links/SuggestedArticles';

const AboutPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.com/" },
    { name: "À propos", url: "https://convertilab.com/a-propos" }
  ];

  return (
    <>
      <Helmet>
        <title>À Propos | Agence Web Paris | ConvertiLab</title>
        <meta name="description" content="Découvrez ConvertiLab, agence web à Paris. +50 clients accompagnés, +280% de CA moyen. Expertise en sites web, SEO et Ads." />
        <meta name="keywords" content="agence web Paris, création site internet, agence digitale, développement web, design web, équipe web" />
        <link rel="canonical" href="https://convertilab.com/a-propos" />
        <meta property="og:title" content="À Propos | Agence Web Créative | ConvertiLab" />
        <meta property="og:description" content="Découvrez l'équipe ConvertiLab : designers et développeurs passionnés qui transforment vos idées en expériences digitales exceptionnelles." />
        <meta property="og:url" content="https://convertilab.com/a-propos" />
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
                <BreadcrumbPage>À propos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <AboutComponent />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
