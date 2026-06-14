import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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
  Loader2,
  AlertCircle,
  Star,
  ShieldCheck,
} from "lucide-react";

type Step = 1 | 2 | 3 | "success";

const objectifs = [
  { id: "leads", label: "Attirer des clients", desc: "Génération de leads", Icon: Target },
  { id: "vendre", label: "Vendre en ligne", desc: "E-commerce", Icon: ShoppingBag },
  { id: "vitrine", label: "Présenter mon activité", desc: "Vitrine pro", Icon: Briefcase },
  { id: "lancer", label: "Lancer un produit", desc: "Landing page", Icon: Rocket },
] as const;

const situations = [
  { id: "zero", label: "Je pars de zéro", Icon: Sparkles },
  { id: "site_pas_top", label: "J'ai un site qui ne convertit pas", Icon: RefreshCw },
  { id: "reseaux", label: "J'ai juste les réseaux sociaux", Icon: Smartphone },
  { id: "bloque", label: "J'ai commencé mais bloqué", Icon: Hammer },
] as const;

const urgences = [
  { id: "asap", label: "ASAP", Icon: Zap },
  { id: "mois", label: "Ce mois", Icon: Calendar },
  { id: "flex", label: "Flexible", Icon: CheckCircle2 },
] as const;

const coordsSchema = z.object({
  prenom: z.string().trim().min(2, "Prénom requis (2 caractères min)").max(100, "Trop long"),
  email: z.string().trim().email("Email invalide, vérifiez le format").max(255, "Trop long"),
  telephone: z
    .string()
    .trim()
    .min(5, "Numéro requis")
    .max(30, "Trop long")
    .regex(/^[0-9+\s().-]+$/, "Téléphone invalide (chiffres uniquement)"),
  entreprise: z.string().trim().max(200, "Trop long").optional(),
});

type Coords = z.infer<typeof coordsSchema>;

const CALENDLY_URL = "https://calendly.com/convertilab-5bsc/30min";

const haptic = (ms = 8) => {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try { navigator.vibrate(ms); } catch { /* ignore */ }
  }
};

const PromoSiteWeb = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [objectif, setObjectif] = useState<string>("");
  const [situation, setSituation] = useState<string>("");
  const [urgence, setUrgence] = useState<string>("");
  const [coords, setCoords] = useState<Coords>({ prenom: "", email: "", telephone: "", entreprise: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);
  const [liveMessage, setLiveMessage] = useState<string>("");

  const fieldOrder: (keyof Coords)[] = ["prenom", "email", "telephone", "entreprise"];
  const fieldRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // Focus management + screen-reader announcement on step change
  useEffect(() => {
    if (step === "success") {
      requestAnimationFrame(() => successHeadingRef.current?.focus());
      setLiveMessage("Formulaire envoyé. Choisissez un créneau pour votre rendez-vous.");
      return;
    }
    requestAnimationFrame(() => stepHeadingRef.current?.focus());
    setLiveMessage(`Étape ${step} sur 3`);
  }, [step]);

  useEffect(() => {
    if (step !== 3) return;
    const id = "calendly-preconnect";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preconnect";
    link.href = "https://calendly.com";
    link.crossOrigin = "";
    document.head.appendChild(link);
  }, [step]);

  // Keyboard navigation within a radiogroup of buttons (Arrow keys)
  const handleGroupKey = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute("role") !== "radio") return;
      const items = Array.from(
        e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="radio"]')
      );
      const idx = items.indexOf(target as HTMLButtonElement);
      if (idx === -1) return;
      let next = idx;
      if (["ArrowDown", "ArrowRight"].includes(e.key)) next = (idx + 1) % items.length;
      else if (["ArrowUp", "ArrowLeft"].includes(e.key)) next = (idx - 1 + items.length) % items.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = items.length - 1;
      else return;
      e.preventDefault();
      items[next]?.focus();
    },
    []
  );

  const objectifLabel = useMemo(
    () => objectifs.find((o) => o.id === objectif)?.label ?? "",
    [objectif]
  );
  const urgenceLabel = useMemo(
    () => urgences.find((u) => u.id === urgence)?.label.toLowerCase() ?? "",
    [urgence]
  );

  const validateField = useCallback((name: keyof Coords, value: string) => {
    const shape = coordsSchema.shape;
    const fieldSchema = z.object({ [name]: shape[name] });
    const result = fieldSchema.safeParse({ [name]: value });
    if (!result.success) {
      const msg = result.error.issues[0]?.message ?? "Invalide";
      setErrors((prev) => ({ ...prev, [name]: msg }));
      return false;
    }
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    return true;
  }, []);

  const handleCoordChange = useCallback((name: keyof Coords, value: string) => {
    setCoords((prev) => ({ ...prev, [name]: value }));
    if (touched[name] || errors[name]) {
      validateField(name, value);
    }
  }, [touched, errors, validateField]);

  const handleBlur = useCallback((name: keyof Coords, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  }, [validateField]);

  const handleStep1 = useCallback((id: string) => {
    haptic(10);
    setObjectif(id);
    setTimeout(() => setStep(2), 180);
  }, []);

  const handleSituation = useCallback((id: string, currentUrgence: string) => {
    haptic(8);
    setSituation(id);
    if (currentUrgence) setTimeout(() => setStep(3), 220);
  }, []);

  const handleUrgence = useCallback((id: string, currentSituation: string) => {
    haptic(8);
    setUrgence(id);
    if (currentSituation) setTimeout(() => setStep(3), 220);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = coordsSchema.safeParse(coords);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      setTouched((prev) => {
        const next = { ...prev };
        Object.keys(fieldErrors).forEach((k) => { next[k] = true; });
        return next;
      });
      haptic(30);

      const firstError = fieldOrder.find((f) => fieldErrors[f]);
      if (firstError) {
        requestAnimationFrame(() => {
          const el = fieldRefs.current[firstError];
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      }
      return;
    }

    setErrors({});
    setLoading(true);
    haptic(15);

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

      supabase.functions.invoke("notify-contact", {
        body: { type: "promo_lead", ...payload },
      }).catch(() => { /* ignore */ });

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "promo_lead_submit" });
      }

      haptic(50);
      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Une erreur est survenue",
        description: "Réessayez dans un instant.",
        variant: "destructive",
      });
      haptic(30);
    } finally {
      setLoading(false);
    }
  };

  const progress = typeof step === "number" ? step : 3;

  return (
    <>
      <Helmet>
        <title>Site web pro à 300€ — Livré en 7 jours | Convertilab</title>
        <meta
          name="description"
          content="Offre exclusive : votre site web professionnel pour seulement 300€, livré en 7 jours. Sans abonnement. Réservez votre créneau."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a1a" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </Helmet>

      <style>{`
        @keyframes promo-blob {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(8%,4%,0) scale(1.08); }
        }
        .promo-blob { animation: promo-blob 12s ease-in-out infinite; will-change: transform; }
        @keyframes promo-pop {
          0% { transform: scale(.85); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .promo-pop { animation: promo-pop .25s cubic-bezier(.34,1.56,.64,1) both; }
        @keyframes promo-slide-up {
          from { transform: translate3d(0,12px,0); opacity: 0; }
          to   { transform: translate3d(0,0,0);   opacity: 1; }
        }
        .promo-slide { animation: promo-slide-up .32s cubic-bezier(.22,.61,.36,1) both; }
        @keyframes promo-shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(2px); }
        }
        .promo-shake { animation: promo-shake .35s ease-in-out both; }
        @keyframes promo-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .promo-cta {
          background: linear-gradient(110deg,#a78bfa 0%,#ec4899 45%,#a78bfa 55%,#ec4899 100%);
          background-size: 200% 100%;
          animation: promo-shimmer 3.5s linear infinite;
        }
        .promo-card { contain: layout style paint; }
        @media (prefers-reduced-motion: reduce) {
          .promo-blob, .promo-cta { animation: none !important; }
          .promo-pop, .promo-slide, .promo-shake { animation-duration: .01ms !important; }
        }
      `}</style>

      <main id="main-content" className="min-h-[100dvh] w-full bg-[#0a0a1a] text-white flex items-center justify-center md:p-8 overflow-x-hidden" aria-labelledby="promo-h1">
        <a href="#promo-form-region" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-[#0a0a1a] focus:px-3 focus:py-2 focus:rounded-md focus:font-semibold">
          Aller au formulaire
        </a>
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">{liveMessage}</div>
        <div className="relative w-full md:max-w-[440px] md:rounded-[2.5rem] md:overflow-hidden md:shadow-[0_30px_120px_-20px_rgba(167,139,250,0.5)] md:border md:border-white/10 md:my-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="promo-blob absolute -top-24 -left-16 w-[340px] h-[340px] rounded-full bg-[#a78bfa] opacity-25 blur-3xl" />
            <div className="promo-blob absolute top-1/3 -right-16 w-[300px] h-[300px] rounded-full bg-[#ec4899] opacity-20 blur-3xl" style={{ animationDelay: "-4s" }} />
          </div>

          <div className="relative z-10 min-h-[100dvh] md:min-h-[800px] px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col">
            {step !== "success" && (
              <>
                <header className="text-center mb-5 promo-slide flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 backdrop-blur-sm mb-4">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#ec4899] opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec4899]" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#ddd6fe]">
                      Offre exclusive · Paiement en 3×
                    </span>
                  </div>

                  <h1 id="promo-h1" className="text-[26px] font-bold tracking-tight leading-[1.1] mb-1">
                    Votre site web pro
                  </h1>
                  <div
                    className="text-[64px] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#ec4899] py-1 drop-shadow-[0_0_25px_rgba(167,139,250,0.35)]"
                    aria-label="300 euros"
                  >
                    300€
                  </div>

                  <p className="text-[13px] text-white/70 leading-relaxed max-w-[300px] mx-auto mt-2">
                    Un site vitrine haute performance, livré en <strong className="text-white font-semibold">7 jours</strong>. Sans aucun abonnement caché.
                  </p>

                  <div className="flex items-center justify-center gap-3 mt-3 text-[11px] font-medium text-white/75">
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-[#a78bfa] fill-[#a78bfa]" aria-hidden="true" />
                      4,9/5 <span className="text-white/50">(120+ avis)</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#a78bfa]" aria-hidden="true" />
                      Satisfait ou remboursé
                    </span>
                  </div>
                </header>


                <div
                  className="flex items-center gap-1.5 mb-5"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={3}
                  aria-valuenow={progress}
                  aria-label={`Progression du formulaire : étape ${progress} sur 3`}
                >
                  {[1, 2, 3].map((n) => (
                    <div key={n} aria-hidden="true" className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#a78bfa] to-[#ec4899] transition-all duration-500 ease-out"
                        style={{ width: progress >= n ? "100%" : "0%" }}
                      />
                    </div>
                  ))}
                </div>

                <div id="promo-form-region" className="promo-card flex-1 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 shadow-2xl">
                  {step === 1 && (
                    <section key="s1" className="promo-slide" aria-labelledby="step1-heading">
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1">Étape 1 / 3</p>
                      <h2 id="step1-heading" ref={stepHeadingRef} tabIndex={-1} className="text-[19px] font-bold mb-4 leading-tight focus:outline-none">Quel est l'objectif principal de votre site ?</h2>
                      <div
                        className="space-y-2.5"
                        role="radiogroup"
                        aria-labelledby="step1-heading"
                        onKeyDown={handleGroupKey}
                      >
                        {objectifs.map(({ id, label, desc, Icon }) => {
                          const active = objectif === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              tabIndex={active || (!objectif && id === objectifs[0].id) ? 0 : -1}
                              onClick={() => handleStep1(id)}
                              className={`group w-full text-left p-3.5 rounded-xl border transition-all duration-200 active:scale-[0.97] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] ${
                                active
                                  ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20 shadow-[0_0_20px_-5px_rgba(236,72,153,0.5)]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div aria-hidden="true" className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform ${active ? "scale-110" : ""} bg-gradient-to-br from-[#a78bfa] to-[#ec4899]`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-[14px]">{label}</div>
                                  <div className="text-[11px] text-white/50">{desc}</div>
                                </div>
                                {active ? (
                                  <CheckCircle2 className="w-5 h-5 text-[#ec4899] promo-pop" aria-hidden="true" />
                                ) : (
                                  <ArrowRight className="w-4 h-4 text-white/40" aria-hidden="true" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  )}


                  {step === 2 && (
                    <section key="s2" className="promo-slide" aria-labelledby="step2-heading">
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1">Étape 2 / 3</p>
                      <h2 id="step2-heading" ref={stepHeadingRef} tabIndex={-1} className="text-[19px] font-bold mb-3 leading-tight focus:outline-none">Où en êtes-vous aujourd'hui ?</h2>
                      <div
                        className="space-y-2 mb-5"
                        role="radiogroup"
                        aria-labelledby="step2-heading"
                        onKeyDown={handleGroupKey}
                      >
                        {situations.map(({ id, label, Icon }) => {
                          const active = situation === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              tabIndex={active || (!situation && id === situations[0].id) ? 0 : -1}
                              onClick={() => handleSituation(id, urgence)}
                              className={`w-full text-left p-3 rounded-xl border transition-all duration-200 active:scale-[0.97] touch-manipulation flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] ${
                                active
                                  ? "border-[#ec4899] bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <Icon aria-hidden="true" className={`w-4 h-4 shrink-0 ${active ? "text-[#ec4899]" : "text-white/50"}`} />
                              <span className="text-[13px] font-medium flex-1">{label}</span>
                              {active && <CheckCircle2 className="w-4 h-4 text-[#ec4899] promo-pop" aria-hidden="true" />}
                            </button>
                          );
                        })}
                      </div>

                      <h3 id="urgence-heading" className="text-[15px] font-bold mb-2.5">Quand voulez-vous être en ligne ?</h3>
                      <div
                        className="grid grid-cols-3 gap-2 mb-5"
                        role="radiogroup"
                        aria-labelledby="urgence-heading"
                        onKeyDown={handleGroupKey}
                      >
                        {urgences.map(({ id, label, Icon }) => {
                          const active = urgence === id;
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              aria-label={label}
                              tabIndex={active || (!urgence && id === urgences[0].id) ? 0 : -1}
                              onClick={() => handleUrgence(id, situation)}
                              className={`p-3 rounded-xl border transition-all duration-200 active:scale-95 touch-manipulation flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a] ${
                                active
                                  ? "border-[#ec4899] bg-gradient-to-br from-[#a78bfa]/25 to-[#ec4899]/25 shadow-[0_0_15px_-5px_rgba(236,72,153,0.5)]"
                                  : "border-white/10 bg-white/[0.03]"
                              }`}
                            >
                              <Icon aria-hidden="true" className={`w-4 h-4 ${active ? "text-[#ec4899]" : "text-white/60"}`} />
                              <span className="text-[11px] font-medium text-center leading-tight">{label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() => { haptic(5); setStep(1); }}
                        className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white touch-manipulation min-h-11 px-2 -ml-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Étape précédente
                      </button>
                    </section>
                  )}


                  {step === 3 && (
                    <form onSubmit={handleSubmit} key="s3" className="promo-slide" noValidate aria-labelledby="step3-heading">
                      <p className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-1">Étape 3 / 3</p>
                      <h2 id="step3-heading" ref={stepHeadingRef} tabIndex={-1} className="text-[19px] font-bold mb-2 leading-tight focus:outline-none">Dernière étape ✨</h2>


                      <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[#a78bfa]/10 to-[#ec4899]/10 border border-white/10 text-[12px] text-white/80 leading-relaxed">
                        Parfait, on a noté : <strong className="text-white">{objectifLabel}</strong>
                        {urgenceLabel && <> — lancement <strong className="text-white">{urgenceLabel}</strong></>} 🎯
                      </div>

                      <div className="space-y-2.5">
                        <Field
                          name="prenom"
                          placeholder="Prénom"
                          value={coords.prenom}
                          onChange={(v) => handleCoordChange("prenom", v)}
                          onBlur={() => handleBlur("prenom", coords.prenom)}
                          error={errors.prenom}
                          touched={touched.prenom}
                          autoComplete="given-name"
                          inputMode="text"
                          inputRef={(el) => { fieldRefs.current.prenom = el; }}
                        />
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={coords.email}
                          onChange={(v) => handleCoordChange("email", v)}
                          onBlur={() => handleBlur("email", coords.email)}
                          error={errors.email}
                          touched={touched.email}
                          autoComplete="email"
                          inputMode="email"
                          inputRef={(el) => { fieldRefs.current.email = el; }}
                        />
                        <Field
                          name="telephone"
                          type="tel"
                          placeholder="Téléphone"
                          value={coords.telephone}
                          onChange={(v) => handleCoordChange("telephone", v)}
                          onBlur={() => handleBlur("telephone", coords.telephone)}
                          error={errors.telephone}
                          touched={touched.telephone}
                          autoComplete="tel"
                          inputMode="tel"
                          inputRef={(el) => { fieldRefs.current.telephone = el; }}
                        />
                        <Field
                          name="entreprise"
                          placeholder="Nom de votre activité (optionnel)"
                          value={coords.entreprise}
                          onChange={(v) => handleCoordChange("entreprise", v)}
                          onBlur={() => handleBlur("entreprise", coords.entreprise)}
                          error={errors.entreprise}
                          touched={touched.entreprise}
                          autoComplete="organization"
                          inputMode="text"
                          inputRef={(el) => { fieldRefs.current.entreprise = el; }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        aria-busy={loading}
                        className="promo-cta w-full mt-4 h-14 rounded-xl text-white font-bold text-[15px] shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] active:scale-[0.98] transition-transform touch-manipulation disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a1a]"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                            <span>Envoi en cours…</span>
                          </>
                        ) : (
                          <span><span aria-hidden="true">🎯 </span>Réserver mon créneau gratuit</span>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => { haptic(5); setStep(2); }}
                        className="w-full mt-2.5 text-[11px] text-white/50 hover:text-white/80 inline-flex items-center justify-center gap-1 touch-manipulation min-h-11 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899]"
                      >
                        <ArrowLeft className="w-3 h-3" aria-hidden="true" /> Revenir
                      </button>


                      <p className="text-[10px] text-white/40 text-center mt-3">
                        🔒 Données confidentielles · aucun spam
                      </p>
                    </form>
                  )}
                </div>
              </>
            )}

            {step === "success" && (
              <div className="promo-slide flex-1 flex flex-col">
                <div className="text-center mb-4 pt-3">
                  <div aria-hidden="true" className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#ec4899] mb-3 promo-pop shadow-[0_10px_40px_-5px_rgba(236,72,153,0.7)]">
                    <PartyPopper className="w-10 h-10 text-white" />
                  </div>
                  <h1 ref={successHeadingRef} tabIndex={-1} className="text-[22px] font-bold mb-1.5 focus:outline-none">Bravo {coords.prenom} <span aria-hidden="true">🎉</span></h1>
                  <p className="text-[13px] text-white/70 px-4">
                    Choisissez votre créneau (15 min, gratuit) pour qu'on discute de votre projet.
                  </p>
                </div>


                <div className="relative rounded-2xl overflow-hidden bg-white border border-white/10 shadow-2xl flex-1 min-h-[620px]">
                  {!calendlyReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                      <Loader2 className="w-6 h-6 text-[#a78bfa] animate-spin" />
                    </div>
                  )}
                  <iframe
                    src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=0a0a1a&primary_color=a78bfa`}
                    title="Réserver un créneau Calendly"
                    className="w-full h-full min-h-[620px] border-0"
                    loading="lazy"
                    onLoad={() => setCalendlyReady(true)}
                  />
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] text-white/60 hover:text-white inline-flex items-center justify-center gap-1.5 touch-manipulation"
                >
                  Ouvrir Calendly dans un nouvel onglet <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>

    </>
  );
};

const Field = ({
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  type = "text",
  error,
  touched,
  autoComplete,
  inputMode,
  inputRef,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  error?: string;
  touched?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url" | "none";
  inputRef?: React.Ref<HTMLInputElement>;
}) => {
  const showError = touched && !!error;
  const inputId = `promo-${name}`;
  return (
    <div className={showError ? "promo-shake" : undefined}>
      <label htmlFor={inputId} className="sr-only">{placeholder}</label>
      <input
        ref={inputRef}
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={`w-full h-12 px-4 rounded-xl bg-white/[0.06] border text-white placeholder:text-white/40 text-[15px] outline-none transition-colors focus:outline-none ${
          showError
            ? "border-[#ec4899] focus:border-[#ec4899] focus:ring-2 focus:ring-[#ec4899]/25"
            : "border-white/10 focus:border-[#ec4899] focus:ring-2 focus:ring-[#ec4899]/25"
        }`}
        aria-invalid={showError}
        aria-errormessage={showError ? `${name}-error` : undefined}
        aria-describedby={showError ? `${name}-error` : undefined}
      />
      {showError && (
        <p id={`${name}-error`} role="alert" className="flex items-start gap-1 text-[11px] text-[#ec4899] mt-1 px-1 promo-pop">
          <AlertCircle className="w-3 h-3 shrink-0 mt-[1px]" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};


export default PromoSiteWeb;
