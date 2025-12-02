
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import NewsletterSubscription from "./contact/NewsletterSubscription";

const SimplifiedContact = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen flex items-center" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Devis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Gratuit</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Obtenez votre devis personnalisé pour la création de votre site web sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <ContactInfo />
            <NewsletterSubscription />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
