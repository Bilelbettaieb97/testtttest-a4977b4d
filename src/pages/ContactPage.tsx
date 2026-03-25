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
        description="Agence web à Rueil-Malmaison & Paris. Devis gratuit sous 24h, consultation 30 min offerte. Tél : +33 6 16 47 72 45."
        keywords="contact agence web Paris, devis site internet Rueil-Malmaison, agence web Île-de-France, création site web Paris, consultation gratuite"
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

        {/* Google Maps */}
        <section className="py-12 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
              Notre agence en Île-de-France
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Basés à Rueil-Malmaison (92), nous accompagnons les entreprises à Paris, en Île-de-France et partout en France.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8!2d2.1894!3d48.8769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664d3c0a03c2f%3A0x0!2s1+Rue+du+4+Septembre%2C+92500+Rueil-Malmaison!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ConvertiLab - Agence web Rueil-Malmaison, Paris"
              />
            </div>
            <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
              <p>📍 1 Rue du 4 Septembre, 92500 Rueil-Malmaison | 📞 +33 6 16 47 72 45 | ✉️ Contact@convertilab.com</p>
            </div>
          </div>
        </section>

        <RelatedServicesSection title="Nos services" max={4} />
      </main>
      
      <Footer />
    </>
  );
};

export default ContactPage;
