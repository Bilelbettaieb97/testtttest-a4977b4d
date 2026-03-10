

## Plan : Mise à jour des pages sous-services pour le nouveau positionnement

### Problème
Google affiche encore les anciennes meta descriptions ("Agence web spécialisée dans la création de sites internet sur-mesure") car :
- Les pages `/services/sites-web`, `/services/sites-web/application-web`, `/case-study/consultpro` ont encore des meta descriptions orientées "agence web"
- Le sitemap n'inclut pas les nouvelles pages services (SEA, SEO, Social Media, etc.)

### Actions

**1. Mettre à jour les meta descriptions des pages services existantes**
- `ApplicationWeb.tsx` : changer la meta description de "création de sites" vers "marketing digital"
- `SitesWeb.tsx` : idem
- `SiteVitrine.tsx`, `SiteEcommerce.tsx`, `LandingPage.tsx`, `RefonteSite.tsx` : mettre à jour les descriptions
- `CaseStudy.tsx` : mettre à jour la meta description globale

**2. Mettre à jour le sitemap.xml**
- Ajouter les pages services manquantes (`/services/seo`, `/services/sea`, `/services/design`)
- Ajouter les sous-pages (`/services/seo/referencement`, `/services/seo/audit`, `/services/sea/google-ads`, `/services/sea/meta-ads`, `/services/design/ui-ux`, `/services/design/identite-visuelle`)
- Mettre à jour les dates `lastmod` à 2026-03-10

**3. Mettre à jour index.html**
- Vérifier que la meta description principale reflète bien "agence marketing digital"

### Côté Google (action manuelle de ta part)
- Google Search Console → Inspection d'URL → Demander l'indexation pour chaque URL
- Les sitelinks se mettront à jour automatiquement après le recrawl (quelques jours à quelques semaines)

