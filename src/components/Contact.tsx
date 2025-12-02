import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Calendar, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab-5bsc/30min', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@convertilab.fr",
      subtitle: "Réponse sous 2h",
      gradient: "from-violet-600 via-purple-600 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "07 83 49 47 09",
      subtitle: "Lun-Ven 9h-18h",
      gradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      icon: Clock,
      title: "Consultation gratuite",
      content: "30 minutes offertes",
      subtitle: "Planifiez maintenant",
      gradient: "from-orange-600 via-amber-600 to-yellow-600"
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: "+35% de conversions minimum" },
    { icon: Zap, text: "Livraison sous 7 jours" },
    { icon: Sparkles, text: "Accompagnement personnalisé" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10">
            <Sparkles className="w-5 h-5 mr-2" />
            Devis Gratuit
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Prêt à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              booster
            </span>{" "}
            vos conversions ?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Obtenez votre devis personnalisé en quelques clics
          </p>
        </div>

        <div 
          ref={formRef}
          className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Layout principal */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Formulaire - Plus large */}
            <div className="lg:col-span-3 order-1">
              <ContactForm />
            </div>

            {/* Sidebar - Contact Info */}
            <div className="lg:col-span-2 order-2 space-y-4">
              {/* Quick Actions */}
              <div className="relative bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 overflow-hidden">
                <div className="relative text-center">
                  <h4 className="font-bold text-white text-lg mb-3">
                    Préférez un appel ?
                  </h4>
                  <p className="text-slate-300 text-sm mb-4">
                    30 minutes de consultation gratuite
                  </p>
                  <Button 
                    onClick={openCalendly}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Prendre RDV
                  </Button>
                </div>
              </div>

              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 hover:border-slate-700/50 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                    
                    <div className="relative flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-violet-300 font-semibold text-sm">{info.content}</p>
                        <p className="text-slate-400 text-xs">{info.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Benefits */}
              <div className="relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/30 rounded-xl p-4">
                <h4 className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  Ce que vous obtenez
                </h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <IconComponent className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        {benefit.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
