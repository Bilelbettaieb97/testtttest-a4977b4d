
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Users, Shield, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Excellence technique",
      description: "Nous utilisons les dernières technologies pour créer des sites web modernes et performants."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Créativité sur mesure",
      description: "Chaque projet est unique et reflète parfaitement votre identité de marque."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Accompagnement complet",
      description: "De l'idée au lancement, nous vous accompagnons à chaque étape de votre projet."
    }
  ];

  const expertise = [
    { label: "+5 ans", detail: "d'expérience en développement web" },
    { label: "+150", detail: "sites web créés avec succès" },
    { label: "Technologies", detail: "modernes et performantes" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            À propos de <span className="text-purple-400">ConvertiLab</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Agence web créative spécialisée dans la création de sites internet sur mesure. 
            Notre équipe de designers et développeurs passionnés transforme vos idées en 
            expériences digitales exceptionnelles qui marquent les esprits.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Notre approche</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Notre expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg">
                <div className="text-4xl font-bold text-purple-400 mb-2">{item.label}</div>
                <div className="text-gray-300">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-6">Prêt à créer votre site web ?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour une consultation gratuite et découvrez 
            comment nous pouvons donner vie à votre projet digital.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Consultation gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-400 text-white bg-transparent hover:bg-purple-400/10 px-8 py-4 text-lg"
            >
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
