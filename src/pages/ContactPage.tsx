import Navigation from '@/components/Navigation';
import { SEO } from '@/components/SEO';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/Contact';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import RelatedServicesSection from '@/components/internal-links/RelatedServicesSection';

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.com/" },
    { name: "Contact", url: "https://convertilab.com/contact" }
  ];

  return (
    <>
      <SEO
        url="/contact"
        title="Contact | Devis Gratuit sous 24h"
        description="Demandez votre devis gratuit. Réponse sous 24h, consultation de 30 min offerte. Tel : +33 6 16 47 72 45."
        keywords="contact agence web, devis site internet, devis création site web, consultation gratuite, agence web Paris"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <ContactComponent />

        <RelatedServicesSection title="Nos services" max={4} />
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
