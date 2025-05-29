
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import NewsletterSubscription from "./contact/NewsletterSubscription";

const SimplifiedContact = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 to-pink-50" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Audit <span className="text-purple-600">Gratuit</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Obtenez un audit personnalisé avec des recommandations concrètes pour booster vos conversions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <ContactInfo />
            <NewsletterSubscription />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
