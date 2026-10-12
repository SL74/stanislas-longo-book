# Site de Stanislas Longo

Site d’auteur : livres, biographie et dix analyses War Room. HTML, CSS et JavaScript statiques, déployés sur Vercel depuis GitHub. Le site de l’éditeur, `fundamen.fr`, reste distinct.

## Livres et référence éditoriale

Le premier livre s’intitule **Le Pouvoir qui reste**, sous-titré *Manuel de Lucidité Stratégique pour les Bâtisseurs de l’Afrique Nouvelle*. Parution annoncée sur le site : décembre 2026, chez FUNDAMEN ÉDITIONS. Le manuscrit et la couverture définitive ont été fournis par l’auteur le 12 octobre 2026. La couverture est utilisée sans retouche. Le deuxième ouvrage, **La République hors bilan**, figure sur l’accueil avec la mention « À paraître » ; son titre stylisé est conservé.

Le manuscrit intégral est une mémoire de travail privée. Ne jamais l’ajouter à ce dépôt, à ses branches, aux pull requests ou aux fichiers déployés. Son empreinte figure dans `content/lois.json` pour identifier la référence de travail. Ce fichier ne contient que les quatorze références doctrinales publiques déjà présentes dans le site, pas les cinquante lois complètes. Les notices de `content/paratexte/` ne sont pas des transcriptions du livre.

Seul l’extrait de 38 pages est téléchargeable : page de titre, avant-propos, introduction et Partie I complète. Il a été extrait du nouveau manuscrit, sans recomposer les pages. Son URL historique dans `assets/` est conservée pour les liens déjà partagés ; le nom proposé au téléchargement et le titre du PDF sont à jour. L’extrait est accessible directement, sans inscription.

## War Room

Les dix briefs retrouvent leurs titres, leurs développements et leur structure d’origine, avec des corrections ciblées des références au livre et des faits. Préserver leur voix, leur sujet et leur démonstration lors des prochaines révisions. Une correction ne justifie pas de remplacer un texte par un résumé standard.

`content/briefs.json` réunit les titres, accroches, URL, dates historiques, lois, citations, folios et sources. Les dates de parution et les URL restent inchangées. Le brief #2 conserve son adresse `.html`. L’écart historique entre la carte d’Eskom (15 février) et sa page (17 février) est conservé. La date de révision est distincte dans les métadonnées. Aucun brief #11 n’est publié.

Les faits sont à distinguer des interprétations et des propositions. Les sources d’un brief historique doivent être disponibles à sa date de parution ; tout ajout portant sur des événements postérieurs doit être daté comme une actualisation. Ne pas inventer de chiffre pour renforcer une ouverture.

## Fichiers et publication

- `index.html` : accueil, livres, auteur et extrait.
- `analyses-war-room/` : index et pages des dix briefs.
- `assets/site.css` : styles communs, justification et affichage adaptatif. Conserver les familles typographiques actuelles.
- `assets/site.js` : inscription Formspree et copie des liens. Ne jamais envoyer d’inscription réelle pour un test.
- `assets/og/` : miniatures de partage 1200 × 630 avec le portrait fourni, sans retouche du visage.
- `sitemap.xml`, `robots.txt`, `vercel.json` : indexation et hébergement.

Chaque page contient ses métadonnées Open Graph et Twitter dans le HTML initial. Les briefs comportent le profil LinkedIn de l’auteur et les partages LinkedIn, X, WhatsApp et copie du lien. Ne pas inventer de compte social.

Pour une nouvelle publication, mettre à jour la page, `content/briefs.json`, la carte de l’index, le compteur, les liens de lecture, la miniature et le sitemap.
