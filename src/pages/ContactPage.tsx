import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/Contact';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.com/" },
    { name: "Contact", url: "https://convertilab.com/contact" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Devis Gratuit sous 24h | ConvertiLab</title>
        <meta name="description" content="Demandez votre devis gratuit. Réponse sous 24h, consultation de 30 min offerte. Tel : +33 6 16 47 72 45." />
        <meta name="keywords" content="contact agence web, devis site internet, devis création site web, consultation gratuite, agence web Paris" />
        <link rel="canonical" href="https://convertilab.com/contact" />
        <meta property="og:title" content="Contact | Devis Gratuit | ConvertiLab" />
        <meta property="og:description" content="Obtenez votre devis gratuit en moins de 24h. Consultation de 30 min offerte pour discuter de votre projet web." />
        <meta property="og:url" content="https://convertilab.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      
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
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
