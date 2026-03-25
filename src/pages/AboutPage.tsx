import Navigation from '@/components/Navigation';
import { SEO } from '@/components/SEO';
import Footer from '@/components/Footer';
import AboutComponent from '@/components/About';
import { BreadcrumbSchema, OrganizationSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';
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
      <SEO
        url="/a-propos"
        title="À Propos | Agence Web Paris"
        description="Découvrez ConvertiLab, agence web à Paris. +50 clients accompagnés, +280% de CA moyen. Expertise en sites web, SEO et Ads."
        keywords="agence web Paris, création site internet, agence digitale, développement web, design web, équipe web"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <OrganizationSchema />
      <LocalBusinessSchema />
      
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

        <RelatedServicesSection title="Découvrez nos services" max={4} />
        <SuggestedArticles title="Derniers articles du blog" max={3} />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
