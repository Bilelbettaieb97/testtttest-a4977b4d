## Objectif
Sur la page `/promo-site-web`, masquer le bloc "Offre exclusive · Paiement en 3×" (prix, avis, etc.) sur les étapes 2 et 3 du formulaire. Le bloc reste visible uniquement sur l'étape 1.

## Changement technique
Dans `src/pages/PromoSiteWeb.tsx`, modifier la condition de rendu du bloc promo pour qu'il ne s'affiche que quand `step === "objectif"` (étape 1) au lieu de `step !== "success"`.

## Impact
- Étape 1 : aucun changement, le bloc reste visible.
- Étape 2 : le bloc disparaît, laisse plus d'espace au formulaire.
- Étape 3 : le bloc disparaît, laisse plus d'espace au formulaire.
- Page de succès : aucun changement, le bloc reste masqué.