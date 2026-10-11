# stanislas-longo-book

Site d’auteur de Stanislas Longo : livres, biographie et analyses War Room.

L’identité du site reste distincte de `fundamen.fr`, le site de la maison éditoriale. La parution des **50 Lois du Pouvoir Contemporain** est annoncée pour **décembre 2026**, conformément à la décision éditoriale du 8 octobre. **La République hors bilan** est annoncé pour 2027, avec un renvoi vers l’éditeur.

## Référence éditoriale

La référence pour le site et les briefs War Room est la **PRIME EDIT**, fournie par l’auteur le 11 octobre 2026. Son identité et son empreinte SHA-256 sont consignées dans `content/lois.json`.

Le PDF intégral est une mémoire de travail privée. Il reste hors de ce dépôt public, hors des branches et des pull requests publiques, et hors des fichiers déployés. Pour vérifier une citation ou préparer un brief, consulter la copie privée de l’auteur. Ne jamais publier le manuscrit complet, même dans un dossier présenté comme interne.

Seul l’extrait public est distribué dans `assets/EXTRAITS-MANUSCRIT-AVANT-PROPOS-INTRODUCTION-PARTIE-I-COMPLETE-LES-50-LOIS-DU-POUVOIR-CONTEMPORAIN.pdf`. Il comprend la page de titre, l’avant-propos, l’introduction et la Partie I complète, extraits de la PRIME EDIT. Les liens existants sont conservés.

`content/lois.json` conserve son périmètre public de 14 références : titres, mantras et rattachements aux parties sont contrôlés contre la PRIME EDIT. Ce catalogue partiel ne remplace pas le livre privé. Les fichiers `content/paratexte/` sont de courtes notices publiques ; ils ne sont pas des transcriptions du manuscrit.

Les dix briefs ont été relus et leur référence doctrinale vérifiée. Les titres et contenus peuvent être corrigés ; leurs URL et dates de parution restent stables. La révision du 11 octobre 2026 est indiquée séparément, ainsi que dans `dateModified`. Les dates historiques de la carte et de la page du brief Eskom diffèrent déjà dans la version précédente (15 et 17 février) : cet écart a été conservé pour respecter la consigne de ne modifier aucune date de parution.

## Architecture

Site statique en HTML/CSS/JavaScript, avec configuration Vercel dans `vercel.json`. Le style commun se trouve dans `assets/site.css` ; le formulaire d’information utilise `assets/site.js` et le point d’entrée Formspree existant. Le téléchargement de l’extrait est direct et indépendant de l’inscription. Aucun test ne doit envoyer une inscription réelle sans demande expresse.

L’index de la War Room est `analyses-war-room/index.html`. Chaque analyse possède sa page HTML ; les nouvelles analyses suivent le format `analyses-war-room/<slug>/index.html`. L’analyse #2 utilise historiquement un fichier `.html` direct. Le portrait fourni par l’auteur est hébergé localement dans `assets/stanislas-longo-portrait.png`, sans retouche. La couverture visible est exportée de la première page de la PRIME EDIT.

Lors d’une nouvelle publication, mettre à jour la page de l’analyse, sa carte dans l’index, les liens de navigation concernés et `sitemap.xml`. La proposition de Brief #11 reste distincte des publications validées.
