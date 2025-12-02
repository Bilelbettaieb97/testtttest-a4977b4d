import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import NewsletterSubscription from "./contact/NewsletterSubscription";

const SimplifiedContact = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-background dark:to-background min-h-screen flex items-center" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Devis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Gratuit</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Obtenez votre devis personnalisé pour la création de votre site web sur mesure
          </p>
        </div>

        {/* Contact Form - Full Width */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Contact Info & Newsletter - Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInfo />
          <NewsletterSubscription />
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
