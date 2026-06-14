import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Zap,
  CreditCard,
  Palette,
  Target,
  ShoppingBag,
  Briefcase,
  Rocket,
  RefreshCw,
  Smartphone,
  Hammer,
  PartyPopper,
  Calendar,
  ExternalLink,
} from "lucide-react";

type Step = 1 | 2 | 3 | "success";

const objectifs = [
  { id: "leads", label: "Attirer des clients", desc: "Génération de leads", Icon: Target },
  { id: "vendre", label: "Vendre en ligne", desc: "E-commerce", Icon: ShoppingBag },
  { id: "vitrine", label: "Présenter mon activité", desc: "Vitrine pro", Icon: Briefcase },
  { id: "lancer", label: "Lancer un produit", desc: "Landing page", Icon: Rocket },
];

const situations = [
  { id: "zero", label: "Je pars de zéro", Icon: Sparkles },
  { id: "site_pas_top", label: "J'ai un site qui ne convertit pas", Icon: RefreshCw },
  { id: "reseaux", label: "J'ai juste les réseaux sociaux", Icon: Smartphone },
  { id: "bloque", label: "J'ai commencé mais je suis bloqué", Icon: Hammer },
];

const urgences = [
  { id: "asap", label: "Le plus vite possible", Icon: Zap },
  { id: "mois", label: "Dans le mois", Icon: Calendar },
  { id: "flex", label: "Pas pressé", Icon: CheckCircle2 },
];

const coordsSchema = z.object({
  prenom: z.string().trim().min(2, "Prénom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().min(5, "Téléphone requis").max(30).regex(/^[0-9+\s().-]+$/, "Téléphone invalide"),
  entreprise: z.string().trim().max(200).optional(),
});

const CALENDLY_URL = "https://calendly.com/convertilab-5bsc/30min";

const PromoSiteWeb = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [objectif, setObjectif] = useState<string>("");
  const [situation, setSituation] = useState<string>("");
  const [urgence, setUrgence] = useState<string>("");
  const [coords, setCoords] = useState({ prenom: "", email: "", telephone: "", entreprise: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const objectifLabel = useMemo(() => objectifs.find((o) => o.id === objectif)?.label ?? "", [objectif]);
  const urgenceLabel = useMemo(() => urgences.find((u) => u.id === urgence)?.label.toLowerCase() ?? "", [urgence]);

  const handleStep1 = (id: string) => {
    setObjectif(id);
    setTimeout(() => setStep(2), 250);
  };

  const handleStep2Next = () => {
    if (!situation || !urgence) {
      toast({ title: "Sélectionnez une option dans chaque section", variant: "destructive" });
      return;
    }
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = coordsSchema.safeParse(coords);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const payload = {
        objectif: objectifs.find((o) => o.id === objectif)?.label ?? objectif,
        situation: situations.find((s) => s.id === situation)?.label ?? situation,
        urgence: urgences.find((u) => u.id === urgence)?.label ?? urgence,
        prenom: parsed.data.prenom,
        email: parsed.data.email,
        telephone: parsed.data.telephone,
        entreprise: parsed.data.entreprise || null,
      };

      const { error: dbError } = await supabase.from("promo_leads").insert(payload);
      if (dbError) throw dbError;

      await supabase.functions.invoke("notify-contact", {
        body: { type: "promo_lead", ...payload },
      });

      // GA / Meta tracking hook
      // @ts-expect-error optional dataLayer
      if (typeof window !== "undefined" && window.dataLayer) {
        // @ts-expect-error optional dataLayer
        window.dataLayer.push({ event: "promo_lead_submit" });
      }

      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Une erreur est survenue",
        description: "Réessayez dans un instant.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Site web pro à 300€ — Livré en 7 jours | Convertilab</title>
        <meta
          name="description"
          content="Offre exclusive : votre site web professionnel pour seulement 300€, livré en 7 jours. Sans abonnement. Réservez votre créneau."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Helmet>

      {/* Outer wrapper — centers the mobile frame on desktop */}
      <div className="min-h-screen w-full bg-[#0a0a1a] text-white flex items-center justify-center md:p-8">
        <div className="relative w-full md:max-w-[440px] md:rounded-[2.5rem] md:overflow-hidden md:shadow-[0_30px_120px_-20px_rgba(167,139,250,0.5)] md:border md:border-white/10 md:my-8">
          {/* Aurora background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-20 w-[400px] h-[400px] rounded-full bg-[#a78bfa] opacity-30 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
            <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] rounded-full bg-[#ec4899] opacity-25 blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "1s" }} />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#6366f1] opacity-20 blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
          </div>

          <div className="relative z-10 min-h-screen md:min-h-[800px] px-5 py-6 flex flex-col">
            {step !== "success" && (
              <>
                {/* Hero */}
                <header className="text-center mb-6 animate-fade-in">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20 border border-white/10 text-xs font-semibold mb-4">
                    <Sparkles className="w-3 h-3 text-[#ec4899]" />
                    Offre limitée
                  </div>
                  <h1 className="text-3xl font-bold leading-tight mb-2">
                    Votre site web pro
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#ec4899]">à 300€</span>
                  </h1>
                  <p className="text-sm text-white/70 mb-4">Livré en 7 jours. Sans abonnement.</p>

                  <div className="flex justify-center gap-2 text-[11px] text-white/60">
                    <span className="inline-flex items-center gap-1"><Zap className="w-3 h-3" /> 7 jours</span>
                    <span className="text-white/30">·</span>
                    <span className="inline-flex items-center gap-1"><Palette className="w-3 h-3" /> Sur mesure</span>
                    <span className="text-white/30">·</span>
                    <span className="inline-flex items-center gap-1"><CreditCard className="w-3 h-3" /> 3x sans frais</span>
                  </div>
                </header>

                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-[#a78bfa] to-[#ec4899] transition-all duration-500 ${
                          (typeof step === "number" && step >= n) ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-5 shadow-2xl">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <p className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wide mb-1">Étape 1 / 3</p>
                      <h2 className="text-xl font-bold mb-5">Quel est l'objectif principal de votre site ?</h2>
                      <div className="space-y-3">
                        {objectifs.map(({ id, label, desc, Icon }) => (
                          <button
                            key={id}
                            onClick={() => handleStep1(id)}
                            className={`group w-full text-left p-4 rounded-xl border transition-all active:scale-[0.98] ${
                              objectif === id
                                ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/15 to-[#ec4899]/15"
                                : "border-white/10 bg-white/[0.03] hover:border-white/25"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a78bfa] to-[#ec4899] flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm">{label}</div>
                                <div className="text-xs text-white/50">{desc}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <p className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wide mb-1">Étape 2 / 3</p>
                      <h2 className="text-xl font-bold mb-4">Où en êtes-vous aujourd'hui ?</h2>
                      <div className="space-y-2.5 mb-6">
                        {situations.map(({ id, label, Icon }) => (
                          <button
                            key={id}
                            onClick={() => setSituation(id)}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all active:scale-[0.98] flex items-center gap-3 ${
                              situation === id
                                ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/15 to-[#ec4899]/15"
                                : "border-white/10 bg-white/[0.03]"
                            }`}
                          >
                            <Icon className={`w-4 h-4 shrink-0 ${situation === id ? "text-[#ec4899]" : "text-white/50"}`} />
                            <span className="text-sm font-medium">{label}</span>
                            {situation === id && <CheckCircle2 className="w-4 h-4 text-[#ec4899] ml-auto" />}
                          </button>
                        ))}
                      </div>

                      <h3 className="text-base font-bold mb-3">Quand souhaitez-vous être en ligne ?</h3>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {urgences.map(({ id, label, Icon }) => (
                          <button
                            key={id}
                            onClick={() => setUrgence(id)}
                            className={`p-3 rounded-xl border transition-all active:scale-95 flex flex-col items-center gap-1.5 ${
                              urgence === id
                                ? "border-[#ec4899] bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/20"
                                : "border-white/10 bg-white/[0.03]"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${urgence === id ? "text-[#ec4899]" : "text-white/60"}`} />
                            <span className="text-[11px] font-medium text-center leading-tight">{label}</span>
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={() => setStep(1)}
                          variant="ghost"
                          className="text-white/70 hover:text-white hover:bg-white/5"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          type="button"
                          onClick={handleStep2Next}
                          disabled={!situation || !urgence}
                          className="flex-1 bg-gradient-to-r from-[#a78bfa] to-[#ec4899] hover:opacity-90 text-white font-semibold h-12"
                        >
                          Continuer <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <form onSubmit={handleSubmit} className="animate-fade-in">
                      <p className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wide mb-1">Étape 3 / 3</p>
                      <h2 className="text-xl font-bold mb-2">Dernière étape ✨</h2>

                      <div className="mb-5 p-3 rounded-xl bg-gradient-to-r from-[#a78bfa]/10 to-[#ec4899]/10 border border-white/10 text-xs text-white/80">
                        Parfait, on a noté : <strong className="text-white">{objectifLabel}</strong>
                        {urgenceLabel && <> — lancement <strong className="text-white">{urgenceLabel}</strong></>} 🎯
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Input
                            placeholder="Prénom"
                            value={coords.prenom}
                            onChange={(e) => setCoords({ ...coords, prenom: e.target.value })}
                            className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#ec4899] focus-visible:ring-[#ec4899]/30"
                          />
                          {errors.prenom && <p className="text-xs text-[#ec4899] mt-1">{errors.prenom}</p>}
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email"
                            value={coords.email}
                            onChange={(e) => setCoords({ ...coords, email: e.target.value })}
                            className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#ec4899] focus-visible:ring-[#ec4899]/30"
                          />
                          {errors.email && <p className="text-xs text-[#ec4899] mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <Input
                            type="tel"
                            placeholder="Téléphone"
                            value={coords.telephone}
                            onChange={(e) => setCoords({ ...coords, telephone: e.target.value })}
                            className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#ec4899] focus-visible:ring-[#ec4899]/30"
                          />
                          {errors.telephone && <p className="text-xs text-[#ec4899] mt-1">{errors.telephone}</p>}
                        </div>
                        <div>
                          <Input
                            placeholder="Nom de votre activité (optionnel)"
                            value={coords.entreprise}
                            onChange={(e) => setCoords({ ...coords, entreprise: e.target.value })}
                            className="h-12 bg-white/[0.06] border-white/10 text-white placeholder:text-white/40 focus-visible:border-[#ec4899] focus-visible:ring-[#ec4899]/30"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-5 h-14 bg-gradient-to-r from-[#a78bfa] to-[#ec4899] hover:opacity-90 text-white font-bold text-base shadow-[0_10px_40px_-10px_rgba(236,72,153,0.6)]"
                      >
                        {loading ? "Envoi..." : "🎯 Réserver mon créneau gratuit"}
                      </Button>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full mt-3 text-xs text-white/50 hover:text-white/80 inline-flex items-center justify-center gap-1"
                      >
                        <ArrowLeft className="w-3 h-3" /> Revenir en arrière
                      </button>

                      <p className="text-[10px] text-white/40 text-center mt-4">
                        🔒 Vos données restent confidentielles. Aucun spam.
                      </p>
                    </form>
                  )}
                </div>
              </>
            )}

            {step === "success" && (
              <div className="animate-fade-in flex-1 flex flex-col">
                <div className="text-center mb-5 pt-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#ec4899] mb-4 animate-scale-in shadow-[0_10px_40px_-5px_rgba(236,72,153,0.7)]">
                    <PartyPopper className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">Bravo {coords.prenom} 🎉</h1>
                  <p className="text-sm text-white/70 px-4">
                    Vous venez de faire le premier pas. Choisissez maintenant votre créneau (15 min, gratuit).
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden bg-white border border-white/10 shadow-2xl flex-1 min-h-[600px]">
                  <iframe
                    src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a1a&primary_color=a78bfa`}
                    title="Réserver un créneau Calendly"
                    className="w-full h-full min-h-[600px] border-0"
                    loading="lazy"
                  />
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs text-white/60 hover:text-white inline-flex items-center justify-center gap-1.5"
                >
                  Ouvrir Calendly dans un nouvel onglet <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoSiteWeb;
