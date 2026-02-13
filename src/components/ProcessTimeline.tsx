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
      title: "Audit & Stratégie",
      description: "On analyse votre marché, vos concurrents et vos objectifs pour définir la meilleure stratégie",
      duration: "Gratuit",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      glowColor: "shadow-violet-500/20",
      delay: "delay-0",
      details: {
        fullDescription: "Un audit complet de votre présence digitale et de votre marché pour définir une stratégie sur-mesure.",
        deliverables: [
          "Audit de votre présence digitale actuelle",
          "Analyse de vos concurrents et du marché",
          "Identification des meilleurs leviers (SEO, Ads, Social...)",
          "Estimation du budget et du ROI attendu",
          "Plan d'action détaillé et chiffré"
        ],
        tools: ["Google Analytics", "SEMrush", "Meta Business Suite"],
        process: "Nous analysons en profondeur votre écosystème digital : site web, SEO, réseaux sociaux, publicité. On identifie les quick wins et les opportunités de croissance. Vous recevez un rapport complet avec nos recommandations."
      }
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Plan d'Action",
      description: "On construit votre stratégie marketing digitale personnalisée avec des objectifs clairs",
      duration: "3-5 jours",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      glowColor: "shadow-pink-500/20",
      delay: "delay-100",
      details: {
        fullDescription: "Création d'un plan marketing complet avec les leviers à activer, le calendrier et les KPIs à suivre.",
        deliverables: [
          "Stratégie marketing digitale complète",
          "Calendrier éditorial et publicitaire",
          "Définition des KPIs et objectifs mensuels",
          "Setup du tracking (Analytics, pixels, UTMs)",
          "Brief créatif pour les supports"
        ],
        tools: ["Google Analytics", "Google Tag Manager", "Notion"],
        process: "Nous élaborons votre stratégie en croisant les données de l'audit avec vos objectifs business. Chaque levier est détaillé avec son budget, son calendrier et ses KPIs de performance."
      }
    },
    {
      icon: Code,
      number: "03",
      title: "Mise en Place",
      description: "On déploie les campagnes, crée les contenus et configure les outils",
      duration: "1-2 semaines",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      glowColor: "shadow-orange-500/20",
      delay: "delay-200",
      details: {
        fullDescription: "Exécution de la stratégie : lancement des campagnes, création de contenu, configuration technique.",
        deliverables: [
          "Lancement des campagnes publicitaires (Google/Meta)",
          "Optimisation SEO technique et contenu",
          "Création des contenus social media",
          "Mise en place des séquences email",
          "Configuration du tracking et des dashboards"
        ],
        tools: ["Google Ads", "Meta Business Suite", "Mailchimp", "Canva"],
        process: "Notre équipe déploie chaque levier selon le plan validé. Les campagnes sont lancées, les contenus publiés, le SEO optimisé. Vous suivez l'avancement en temps réel sur un dashboard partagé."
      }
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Optimisation Continue",
      description: "On analyse les résultats et on optimise pour maximiser votre ROI",
      duration: "Continu",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      glowColor: "shadow-emerald-500/20",
      delay: "delay-300",
      details: {
        fullDescription: "Suivi des performances et optimisation continue basée sur les données réelles.",
        deliverables: [
          "Analyse hebdomadaire des performances",
          "Optimisation des campagnes et budgets",
          "A/B testing des créatifs et landing pages",
          "Ajustement de la stratégie selon les résultats",
          "Rapport mensuel détaillé avec recommandations"
        ],
        tools: ["Google Analytics", "Google Ads", "Hotjar", "Data Studio"],
        process: "Chaque semaine, nous analysons les données et optimisons vos campagnes. Les budgets sont réalloués vers les leviers les plus performants. Vous recevez un rapport mensuel complet avec les KPIs, les apprentissages et les prochaines actions."
      }
    },
    {
      icon: Rocket,
      number: "05",
      title: "Scale & Croissance",
      description: "On développe les leviers qui fonctionnent pour accélérer votre croissance",
      duration: "Long terme",
      gradient: "from-blue-600 via-cyan-600 to-sky-600",
      glowColor: "shadow-blue-500/20",
      delay: "delay-[400ms]",
      details: {
        fullDescription: "Scaling des campagnes performantes et exploration de nouveaux leviers de croissance.",
        deliverables: [
          "Scaling des campagnes les plus rentables",
          "Exploration de nouveaux canaux d'acquisition",
          "Stratégie de fidélisation et rétention",
          "Automatisation du marketing",
          "Recommandations stratégiques trimestrielles"
        ],
        tools: ["HubSpot", "Zapier", "Google Data Studio"],
        process: "Une fois les leviers validés, on passe en mode croissance. On augmente les budgets sur ce qui fonctionne, on explore de nouveaux canaux, et on met en place des automations pour maximiser votre ROI à long terme."
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
            De l'audit au{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
              succès
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un processus éprouvé en 5 étapes pour booster votre croissance digitale
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

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Bouton "En savoir plus" - En bas à droite */}
                        <div className="flex justify-end">
                          <div className={`flex items-center gap-2 bg-gradient-to-r ${step.gradient} px-4 py-2.5 rounded-full text-white text-sm font-bold shadow-lg ${step.glowColor} group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                            <Sparkles className="w-4 h-4" />
                            <span>En savoir plus</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Flèche suivant sur mobile */}
                        {index < steps.length - 1 && (
                          <div className="flex items-center gap-2 text-slate-500 text-sm pt-4 lg:hidden">
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
              <span className="font-bold text-white">Premiers résultats dès le 1er mois</span> — optimisation continue pour une croissance durable
            </p>
          </div>
        </div>
      </div>

      {/* Modal détaillé */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-slate-950 border-slate-800 p-4 sm:p-6">
          {selectedStep !== null && (
            <div className="space-y-4 sm:space-y-6">
              {/* Barre de progression */}
              <div className="space-y-3 sm:space-y-4 pb-4 sm:pb-6 border-b border-slate-800">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-400">Progression</span>
                  <span className="font-bold text-white">
                    {Math.round(((selectedStep + 1) / steps.length) * 100)}%
                  </span>
                </div>
                
                {/* Barre de progression principale */}
                <div className="relative h-2 sm:h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full bg-gradient-to-r ${steps[selectedStep].gradient} transition-all duration-500 relative overflow-hidden`}
                    style={{ width: `${((selectedStep + 1) / steps.length) * 100}%` }}
                  >
                    {/* Effet shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>

                {/* Navigation des étapes */}
                <div className="flex items-center justify-between gap-1 sm:gap-2">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedStep(idx)}
                      className={`group relative flex-1 transition-all duration-300 ${
                        idx === selectedStep ? 'scale-105 sm:scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        {/* Cercle d'étape */}
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            idx <= selectedStep
                              ? `bg-gradient-to-br ${step.gradient} shadow-lg`
                              : 'bg-slate-800 border-2 border-slate-700'
                          }`}
                        >
                          {idx < selectedStep ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          ) : (
                            <span className={`text-xs sm:text-sm font-bold ${idx <= selectedStep ? 'text-white' : 'text-slate-500'}`}>
                              {idx + 1}
                            </span>
                          )}
                        </div>
                        
                        {/* Label étape (visible sur hover ou si sélectionné) - masqué sur mobile */}
                        <span
                          className={`text-xs text-center transition-all duration-300 hidden sm:block ${
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
                <div className="flex items-center justify-between gap-2 sm:gap-4 pt-2">
                  <button
                    onClick={() => selectedStep > 0 && setSelectedStep(selectedStep - 1)}
                    disabled={selectedStep === 0}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      selectedStep === 0
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
                    <span className="hidden sm:inline">Précédent</span>
                    <span className="sm:hidden">Préc.</span>
                  </button>
                  <button
                    onClick={() => selectedStep < steps.length - 1 && setSelectedStep(selectedStep + 1)}
                    disabled={selectedStep === steps.length - 1}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      selectedStep === steps.length - 1
                        ? 'text-slate-600 cursor-not-allowed'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span className="hidden sm:inline">Suivant</span>
                    <span className="sm:hidden">Suiv.</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              <DialogHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${steps[selectedStep].gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0`}>
                    {(() => {
                      const Icon = steps[selectedStep].icon;
                      return <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-slate-400 mb-1">Étape {steps[selectedStep].number}</div>
                    <DialogTitle className="text-xl sm:text-3xl font-bold text-white">
                      {steps[selectedStep].title}
                    </DialogTitle>
                  </div>
                  <div className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${steps[selectedStep].gradient} rounded-full text-white text-xs sm:text-sm font-bold flex-shrink-0`}>
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                    {steps[selectedStep].duration}
                  </div>
                </div>
                <DialogDescription className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {steps[selectedStep].details.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Processus détaillé */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                  <h3 className="text-base sm:text-xl">Le processus</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/50 p-3 sm:p-4 rounded-xl border border-slate-800">
                  {steps[selectedStep].details.process}
                </p>
              </div>

              {/* Livrables */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                  <h3 className="text-base sm:text-xl">Ce que vous recevez</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {steps[selectedStep].details.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-300">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br ${steps[selectedStep].gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outils utilisés */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                  <h3 className="text-base sm:text-xl">Outils & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {steps[selectedStep].details.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-xs sm:text-sm font-medium hover:border-slate-700 transition-colors"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800">
                <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 sm:p-6 text-center">
                  <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4">
                    Des questions sur cette étape ? Parlons-en !
                  </p>
                  <a
                    href="https://calendly.com/votre-calendly/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${steps[selectedStep].gradient} text-white text-sm sm:text-base font-bold rounded-xl hover:scale-105 transition-transform shadow-lg`}
                  >
                    <span className="hidden sm:inline">Réserver ma consultation gratuite</span>
                    <span className="sm:hidden">Consultation gratuite</span>
                  </a>
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
