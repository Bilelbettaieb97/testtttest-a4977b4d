

## Plan : Configurer le token Prerender.io dans le .htaccess

Le `.htaccess` contient déjà la configuration Prerender.io avec un placeholder `YOUR_PRERENDER_TOKEN`. Il suffit de le remplacer par le vrai token visible sur votre dashboard.

### Modification
- **Fichier** : `public/.htaccess`
- **Action** : Remplacer `YOUR_PRERENDER_TOKEN` par `w1YtK7QRUEkAQRMqVtzd`

### Après déploiement
1. Déployer le site sur IONOS
2. Vérifier que `mod_proxy` et `mod_headers` sont activés sur votre hébergement IONOS (nécessaire pour le proxy vers Prerender.io)
3. Revenir sur Prerender.io → étape 4 "Verify Integration" pour confirmer que tout fonctionne
4. Soumettre les URLs non indexées dans Google Search Console

