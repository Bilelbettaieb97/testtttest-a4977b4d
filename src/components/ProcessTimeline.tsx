import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, Clock, ArrowRight, Sparkles, Users, FileText, Palette, MonitorSmartphone, Zap, Shield, Target, TrendingUp, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProcessTimeline = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Consultation Gratuite",
      description: "On discute de votre projet, vos objectifs et votre budget",
      duration: "30 min",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      glowColor: "shadow-violet-500/20",
      delay: "delay-0",
      details: {
        fullDescription: "Une session découverte pour comprendre vos besoins et définir ensemble la meilleure stratégie pour votre projet web.",
        deliverables: [
          "Analyse de vos besoins et objectifs business",
          "Étude de votre audience cible",
          "Recommandations techniques personnalisées",
          "Estimation du délai et du budget",
          "Plan d'action détaillé"
        ],
        tools: ["Google Meet", "Miro", "Notion"],
        process: "Nous commençons par une discussion ouverte où vous nous partagez votre vision. Nous analysons ensemble vos objectifs, votre audience, et vos contraintes. À la fin de cet échange, vous recevez un document récapitulatif avec nos recommandations et un devis personnalisé."
      }
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Design & Maquette",
      description: "On crée des maquettes personnalisées qui reflètent votre vision",
      duration: "2-3 jours",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      glowColor: "shadow-pink-500/20",
      delay: "delay-100",
      details: {
        fullDescription: "Conception visuelle complète de votre site avec des maquettes haute-fidélité pour tous les écrans.",
        deliverables: [
          "Planche de style (couleurs, typographies, éléments)",
          "Maquettes desktop haute-fidélité",
          "Maquettes mobile et tablette",
          "Prototype interactif cliquable",
          "Guide de style complet"
        ],
        tools: ["Figma", "Adobe XD", "Illustrator"],
        process: "Nous créons d'abord une planche de style basée sur votre identité de marque. Puis, nous concevons les maquettes de toutes les pages en version desktop et mobile. Vous pouvez tester un prototype interactif et demander jusqu'à 2 révisions gratuites."
      }
    },
    {
      icon: Code,
      number: "03",
      title: "Développement",
      description: "On code votre site avec les meilleures technologies",
      duration: "1-2 semaines",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      glowColor: "shadow-orange-500/20",
      delay: "delay-200",
      details: {
        fullDescription: "Développement technique de votre site avec les technologies les plus performantes et les meilleures pratiques du web.",
        deliverables: [
          "Code propre et optimisé",
          "Site 100% responsive (mobile, tablette, desktop)",
          "Optimisation SEO technique",
          "Performance maximale (score 90+ sur PageSpeed)",
          "Animations et interactions fluides",
          "Formulaires et fonctionnalités métier"
        ],
        tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        process: "Nous transformons les maquettes en code avec une attention particulière à la performance et à l'accessibilité. Le site est testé sur tous les navigateurs et appareils. Vous recevez des mises à jour régulières et pouvez suivre l'avancement en temps réel."
      }
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Tests & Ajustements",
      description: "On teste tout et on ajuste selon vos retours",
      duration: "2-3 jours",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      glowColor: "shadow-emerald-500/20",
      delay: "delay-300",
      details: {
        fullDescription: "Phase de tests rigoureux et d'ajustements pour garantir un site parfait avant la mise en ligne.",
        deliverables: [
          "Tests sur tous les navigateurs (Chrome, Firefox, Safari, Edge)",
          "Tests responsive sur tous les appareils",
          "Vérification SEO complète",
          "Tests de performance et vitesse",
          "Correction de tous les bugs identifiés",
          "Ajustements selon vos retours"
        ],
        tools: ["BrowserStack", "Google Lighthouse", "GTmetrix"],
        process: "Nous testons méticuleusement chaque fonctionnalité et chaque page. Vous recevez un accès à une version de pré-production pour tester vous-même. Nous intégrons vos retours et effectuons jusqu'à 2 cycles de révisions pour atteindre la perfection."
      }
    },
    {
      icon: Rocket,
      number: "05",
      title: "Mise en Ligne",
      description: "Votre site est en ligne et on vous forme à son utilisation",
      duration: "1 jour",
      gradient: "from-blue-600 via-cyan-600 to-sky-600",
      glowColor: "shadow-blue-500/20",
      delay: "delay-[400ms]",
      details: {
        fullDescription: "Déploiement de votre site en production avec formation complète et support continu.",
        deliverables: [
          "Mise en ligne sur serveur haute performance",
          "Configuration du nom de domaine",
          "Certificat SSL (HTTPS)",
          "Formation à l'administration du site",
          "Documentation complète",
          "3 à 6 mois de support inclus"
        ],
        tools: ["Vercel", "Netlify", "Cloudflare"],
        process: "Nous déployons votre site sur une infrastructure performante et sécurisée. Vous recevez une formation personnalisée pour gérer votre contenu en toute autonomie. Nous restons disponibles pour vous accompagner dans les premiers mois et répondre à toutes vos questions."
      }
    }
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10">
            <Rocket className="w-5 h-5 mr-2" />
            Notre Processus
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            De l'idée au{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
              succès
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un processus simple et transparent en 5 étapes pour créer votre site web parfait
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? `animate-fade-in ${step.delay}` : "opacity-0"
                }`}
              >
                {/* Connecteur pour desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[72px] top-full w-0.5 h-8 bg-gradient-to-b from-slate-700 to-transparent -bottom-8"></div>
                )}

                <div 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedStep(index)}
                >
                  {/* Carte principale */}
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-all duration-500 overflow-hidden">
                    {/* Badge "En savoir plus" - Toujours visible */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`flex items-center gap-2 bg-gradient-to-r ${step.gradient} px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg ${step.glowColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Sparkles className="w-4 h-4" />
                        <span className="hidden sm:inline">En savoir plus</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Effet de brillance au hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                    <div className="relative flex flex-col sm:flex-row items-start gap-6">
                      {/* Numéro et icône */}
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Numéro d'étape */}
                        <div className="relative">
                          <div className={`text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-30`}>
                            {step.number}
                          </div>
                        </div>

                        {/* Icône */}
                        <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${step.glowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 flex-shrink-0`}>
                          <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                          
                          {/* Cercle animé au hover */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:scale-125 group-hover:border-white/0 transition-all duration-500"></div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300">
                            {step.title}
                          </h3>
                          
                          {/* Badge durée */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.gradient} rounded-full text-white text-sm font-bold shadow-lg ${step.glowColor} whitespace-nowrap`}>
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {/* Flèche suivant sur mobile */}
                        {index < steps.length - 1 && (
                          <div className="flex items-center gap-2 text-slate-500 text-sm pt-2 lg:hidden">
                            <ArrowRight className="w-4 h-4" />
                            <span>Étape suivante</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 px-8 py-4 rounded-2xl">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse"></div>
            <p className="text-slate-300 text-base sm:text-lg">
              <span className="font-bold text-white">Délai moyen : 2-4 semaines</span> de consultation à mise en ligne
            </p>
          </div>
        </div>
      </div>

      {/* Modal détaillé */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border-slate-800">
          {selectedStep !== null && (
            <div className="space-y-6">
              {/* Barre de progression */}
              <div className="space-y-4 pb-6 border-b border-slate-800">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Progression du processus</span>
                  <span className="font-bold text-white">
                    {Math.round(((selectedStep + 1) / steps.length) * 100)}% complété
                  </span>
                </div>
                
                {/* Barre de progression principale */}
                <div className="relative h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full bg-gradient-to-r ${steps[selectedStep].gradient} transition-all duration-500 relative overflow-hidden`}
                    style={{ width: `${((selectedStep + 1) / steps.length) * 100}%` }}
                  >
                    {/* Effet shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>

                {/* Navigation des étapes */}
                <div className="flex items-center justify-between gap-2">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedStep(idx)}
                      className={`group relative flex-1 transition-all duration-300 ${
                        idx === selectedStep ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {/* Cercle d'étape */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            idx <= selectedStep
                              ? `bg-gradient-to-br ${step.gradient} shadow-lg`
                              : 'bg-slate-800 border-2 border-slate-700'
                          }`}
                        >
                          {idx < selectedStep ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className={`text-sm font-bold ${idx <= selectedStep ? 'text-white' : 'text-slate-500'}`}>
                              {idx + 1}
                            </span>
                          )}
                        </div>
                        
                        {/* Label étape (visible sur hover ou si sélectionné) */}
                        <span
                          className={`text-xs text-center transition-all duration-300 ${
                            idx === selectedStep
                              ? 'text-white font-semibold opacity-100'
                              : 'text-slate-500 opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          {step.title.length > 15 ? step.title.substring(0, 15) + '...' : step.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation boutons précédent/suivant */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => selectedStep > 0 && setSelectedStep(selectedStep - 1)}
                    disabled={selectedStep === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedStep === 0
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Précédent
                  </button>
                  <button
                    onClick={() => selectedStep < steps.length - 1 && setSelectedStep(selectedStep + 1)}
                    disabled={selectedStep === steps.length - 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedStep === steps.length - 1
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${steps[selectedStep].gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                    {(() => {
                      const Icon = steps[selectedStep].icon;
                      return <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-400 mb-1">Étape {steps[selectedStep].number}</div>
                    <DialogTitle className="text-3xl font-bold text-white">
                      {steps[selectedStep].title}
                    </DialogTitle>
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${steps[selectedStep].gradient} rounded-full text-white text-sm font-bold`}>
                    <Clock className="w-4 h-4 inline mr-2" />
                    {steps[selectedStep].duration}
                  </div>
                </div>
                <DialogDescription className="text-base text-slate-300 leading-relaxed">
                  {steps[selectedStep].details.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Processus détaillé */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Target className="w-5 h-5 text-violet-400" />
                  <h3 className="text-xl">Le processus</h3>
                </div>
                <p className="text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  {steps[selectedStep].details.process}
                </p>
              </div>

              {/* Livrables */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Award className="w-5 h-5 text-violet-400" />
                  <h3 className="text-xl">Ce que vous recevez</h3>
                </div>
                <ul className="space-y-3">
                  {steps[selectedStep].details.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <div className={`w-6 h-6 bg-gradient-to-br ${steps[selectedStep].gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outils utilisés */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Zap className="w-5 h-5 text-violet-400" />
                  <h3 className="text-xl">Outils & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {steps[selectedStep].details.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-slate-700 transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-slate-800">
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 text-center">
                  <p className="text-slate-300 mb-4">
                    Des questions sur cette étape ? Parlons-en lors de votre consultation gratuite !
                  </p>
                  <button
                    onClick={() => {
                      setSelectedStep(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-6 py-3 bg-gradient-to-r ${steps[selectedStep].gradient} text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg`}
                  >
                    Réserver ma consultation gratuite
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProcessTimeline;
