# Landing page publicitaire — Offre site web 300€

Page conçue **exclusivement pour mobile** (les visiteurs viennent d'une pub Meta/TikTok), avec un formulaire interactif en 3 étapes qualifiant le prospect tout en créant un effet "waouh" qui inspire confiance.

## Route
- Nouvelle route : **`/promo-site-web`**
- Lazy-loaded dans `src/App.tsx`
- Ajout au `sitemap.xml`

## Direction visuelle (Glass Aurora)
- Fond sombre `#0a0a1a` → `#16213e` avec **aurora animée** en arrière-plan (blobs flous violet `#a78bfa` + rose `#ec4899` qui pulsent)
- Cartes en **glassmorphism** (backdrop-blur, bordure translucide, glow subtil)
- Typographie large, hiérarchie forte
- Micro-animations : transition entre étapes (slide + fade), pulse sur le CTA, check animé à la sélection
- Sticky CTA en bas pour ne jamais perdre l'utilisateur

## Structure de la page (mobile-first, max-w 480px)

1. **Hero compact** (au-dessus du fold)
   - Badge "🔥 Offre limitée"
   - Titre : "Votre site web professionnel à **300€**"
   - Sous-titre : "Livré en 7 jours. Sans abonnement. Sans surprise."
   - 3 mini badges réassurance : ⚡ Livraison 7j · 🎨 Sur mesure · 💳 Paiement 3x
   - Indicateur de progression (1/3 · 2/3 · 3/3)

2. **Formulaire interactif — 3 étapes qualifiantes**

   Les questions sont choisies pour qualifier ET montrer notre expertise (la personne se dit "il pose les bonnes questions") :

   **Étape 1 — Qualification besoin** (gros boutons-cartes tactiles)
   > "Quel est l'objectif principal de votre site ?"
   - 🎯 Attirer des clients (génération de leads)
   - 🛍️ Vendre en ligne (e-commerce)
   - 💼 Présenter mon activité (vitrine pro)
   - 🚀 Lancer un produit / service (landing)

   **Étape 2 — Qualification maturité + urgence** (cartes empilées)
   > "Où en êtes-vous aujourd'hui ?"
   - 🆕 Je pars de zéro
   - 🔄 J'ai un site mais il ne convertit pas
   - 📱 J'ai juste les réseaux sociaux
   - 🏗️ J'ai commencé mais je suis bloqué

   Puis sous-question dans la même carte :
   > "Quand souhaitez-vous être en ligne ?"
   - ⚡ Le plus vite possible · 📅 Dans le mois · 🗓️ Pas pressé

   **Étape 3 — Coordonnées** (effet waouh : message personnalisé selon réponses)
   - Bandeau résumant ses choix ("Parfait, on a noté : site vitrine pro, lancement rapide ✨")
   - Prénom · Email · Téléphone (avec validation Zod)
   - Nom de l'activité / entreprise
   - Bouton CTA pleine largeur : "🎯 Réserver mon créneau gratuit"

3. **Écran de confirmation (après envoi)**
   - Animation de check ✓ avec gradient aurora
   - Titre : "Bravo, vous venez de faire le premier pas 🎉"
   - Sous-titre : "Choisissez maintenant votre créneau pour qu'on en discute (15 min, gratuit)"
   - **Calendly inline embed** → `https://calendly.com/convertilab-5bsc/30min` (via `<iframe>` responsive, hauteur ajustée mobile ~700px)
   - Lien fallback "Ouvrir Calendly dans un nouvel onglet"

## Backend

**Nouvelle table `promo_leads`** (migration Supabase) :
- `objectif` (text), `situation` (text), `urgence` (text)
- `prenom`, `email`, `telephone`, `entreprise`
- `created_at`, `updated_at`
- RLS : INSERT public (formulaire), SELECT admin only
- GRANTs : INSERT pour anon + authenticated, SELECT/UPDATE/DELETE service_role

**Edge function `notify-contact` étendue** :
- Nouveau type `promo_lead` avec `buildPromoLeadEmail()`
- Email HTML envoyé à contact@convertilab.com avec toutes les réponses formatées
- Réutilise le rate-limiting et Resend déjà configurés

## Optimisations mobile-only
- Page volontairement **non-responsive desktop** : sur desktop, on centre le mockup mobile (max-width 480px) dans un cadre stylé "iPhone-like" avec fond aurora autour (UX cohérente même si quelqu'un ouvre sur desktop, mais conçu pour mobile)
- Validation inline avec Zod (`name`, `email`, `phone` regex FR/international)
- Pas de Navigation/Footer du site (page dédiée pub, zéro distraction)
- `lang="fr"`, meta `robots: noindex` (page de pub, pas SEO) **ou** indexée + canonical — à confirmer si besoin

## SEO / Indexation
- Titre : "Site web professionnel à 300€ — Livré en 7 jours | Convertilab"
- Meta description optimisée pour la pub (<160 char)
- Open Graph image (réutilise existante)
- **noindex par défaut** (page publicitaire, évite cannibalisation SEO)

## Fichiers créés / modifiés

```text
src/pages/PromoSiteWeb.tsx          [NEW] — page complète + formulaire 3 étapes + confirmation
src/App.tsx                          [EDIT] — ajout route lazy
public/sitemap.xml                   [EDIT] — (optionnel) ou exclure si noindex
supabase/migrations/...sql           [NEW] — table promo_leads + RLS + GRANTs
supabase/functions/notify-contact/index.ts  [EDIT] — handler promo_lead + email template
```

## Détails techniques

- React Hook Form + Zod pour la validation
- État local `step` (1, 2, 3, 'success') pour le multi-step
- Transitions CSS : `animate-fade-in` + `animate-slide-in-right` entre étapes
- Tokens design système existants (`hsl(var(--primary))`, etc.) — pas de couleurs hardcodées
- Aurora background : 3 divs `absolute` avec `blur-3xl`, `mix-blend-screen`, `animate-pulse` à vitesses différentes
- Calendly embed via `<iframe src="https://calendly.com/convertilab-5bsc/30min?embed_domain=convertilab.com&embed_type=Inline">` (pas besoin de script externe pour la version simple)
- Tracking : `dataLayer.push({event: 'promo_lead_submit'})` pour Meta Pixel / Google Ads (si déjà installé)
