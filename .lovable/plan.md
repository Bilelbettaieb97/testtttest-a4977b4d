

## Plan : Rendre les cartes portfolio entièrement cliquables

### Modification
- **Fichier** : `src/components/portfolio/PortfolioCard.tsx`
- **Action** : Envelopper toute la carte dans un `Link` vers `/case-study/{slug}` (si slug existe), rendant l'ensemble du cadre cliquable au lieu du seul bouton en bas. Supprimer le bouton "Voir l'étude de cas" devenu redondant, ou le garder comme élément visuel. Ajouter un `cursor-pointer` sur la carte.

### Détail technique
- Wrapper le `<Card>` dans un `<Link to={/case-study/${slug}}>` quand `slug` est défini
- Conserver le style hover existant (shadow, scale sur l'image)
- Retirer le `<Link>` + `<Button>` intérieur pour éviter les liens imbriqués, garder juste un indicateur visuel (texte + flèche) sans balise `<Link>`

