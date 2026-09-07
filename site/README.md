# AT HOME Couvertures & Fermetures — site vitrine

Site vitrine statique construit avec **Astro 5** + **Tailwind CSS 4**, reproduisant fidèlement la maquette fournie (`export/figma/athome-*.html`). Zéro framework JS, quelques interactions ciblées en vanilla JS/TypeScript (menu mobile, compteurs, carrousel, slider avant/après, carte Leaflet, formulaire de devis multi-étapes).

## Installation

Prérequis : Node.js 20+.

```bash
npm install
```

## Commandes

| Commande          | Effet                                                        |
| ------------------ | ------------------------------------------------------------- |
| `npm run dev`     | Serveur de développement (`http://localhost:4321`)           |
| `npm run build`   | Build de production statique dans `dist/`                    |
| `npm run preview` | Sert le build de production localement, pour audit Lighthouse |
| `npm run check`   | Vérifie les types TypeScript et les erreurs Astro             |

Le site est 100% statique (`output: 'static'` dans `astro.config.mjs`) : le dossier `dist/` généré peut être déployé tel quel sur n'importe quel hébergeur statique (Netlify, Vercel, Cloudflare Pages, OVH, o2switch, etc.).

Avant un déploiement en production, mettre à jour `site` dans `astro.config.mjs` si le nom de domaine final diffère de `https://www.athome-fermetures.fr`.

## Où modifier le contenu

Toutes les données de contenu sont centralisées dans `src/data/` — aucun besoin de toucher aux composants pour changer un texte, un prix ou une ville.

| Fichier                          | Contenu                                                                 |
| --------------------------------- | ------------------------------------------------------------------------ |
| `src/data/site.ts`               | Coordonnées de l'entreprise (NAP), horaires, réseaux sociaux, zone desservie — **source unique** réutilisée dans le header, le footer et les données structurées JSON-LD |
| `src/data/prestations.ts`        | Les 9 prestations (titre, accroche, matériaux, bénéfices, FAQ, mots-clés SEO, prestations connexes) — génère automatiquement les pages `/prestations/[slug]` via `getStaticPaths()` |
| `src/data/realisations.ts`       | Cartes du carrousel « Nos dernières réalisations » (accueil + page `/realisations`), avec les photos réelles du dossier `src/assets/realisationHome/` |
| `src/data/reviews.ts`            | Avis clients (les deux colonnes défilantes de la page d'accueil)        |
| `src/data/zone.ts`               | Villes affichées sur la carte Leaflet de la zone d'intervention          |
| `src/data/home-faq.ts`           | FAQ de la page d'accueil                                                 |
| `src/data/devis.ts`              | Options de délai (étape 2 du formulaire de devis)                       |

### Ajouter ou modifier une prestation

Éditer `src/data/prestations.ts` : chaque entrée du tableau `PRESTATIONS` décrit une prestation complète (badge, H1, matériaux, bénéfices, FAQ, prestations connexes, `seoTitle`/`seoDescription`). La page `src/pages/prestations/[slug].astro` s'occupe de tout générer — pas de duplication de HTML.

### Modifier le logo, le hero ou les photos de réalisations

Les images sources sont dans `src/assets/images/` (logo, hero, showroom) et `src/assets/realisationHome/` (photos de chantiers). Remplacer le fichier en conservant le même nom, ou mettre à jour l'import correspondant dans `src/data/realisations.ts` / `src/pages/societe.astro`. Astro régénère automatiquement les variantes AVIF/WebP responsives au build.

### Ajouter les documents de certification (page `/qualification`)

Déposer les fichiers réels (PDF ou image scannée) dans `public/certificats/`, avec exactement l'un de ces noms (extension `.pdf`, `.jpg`, `.jpeg`, `.png` ou `.webp`) :

| Certificat         | Nom de fichier attendu   |
| ------------------- | -------------------------- |
| RGE Qualibat        | `rge-qualibat.pdf`        |
| Garantie décennale  | `garantie-decennale.pdf`  |
| Partenaire K·LINE   | `partenaire-k-line.pdf`   |
| Partenaire VELUX    | `partenaire-velux.pdf`    |

Le bouton **Voir le certificat** n'est affiché que sur les cartes dont le fichier correspondant existe dans `public/certificats/` — pas de lien mort tant qu'un fichier n'a pas été déposé.

## Brancher le formulaire de devis (et le formulaire de contact) à un backend

Les formulaires (`src/pages/devis.astro` et `src/pages/contact.astro`) sont fonctionnels côté client (validation, navigation multi-étapes, récapitulatif) mais **n'envoient les données à aucun serveur par défaut**. Un `TODO` explicite est présent dans le code de chaque formulaire.

Pour les connecter à un backend réel :

1. Définir la variable d'environnement `PUBLIC_FORM_ENDPOINT` (fichier `.env` à la racine, ou variable d'environnement côté hébergeur) avec l'URL de votre endpoint :

   ```bash
   # .env
   PUBLIC_FORM_ENDPOINT=https://votre-api.example.com/devis
   ```

2. Au build, si `PUBLIC_FORM_ENDPOINT` est définie, les formulaires envoient un `POST` en JSON à cette URL (`Content-Type: application/json`) contenant les champs saisis (prestations sélectionnées, urgence, coordonnées, message).
3. Si la variable n'est pas définie, le formulaire affiche quand même l'écran de confirmation à l'utilisateur (pour ne pas bloquer la démo), mais journalise un avertissement clair dans la console navigateur (`console.warn`) avec les données capturées — à surveiller avant mise en production.

Options côté backend : une fonction serverless (Netlify Functions, Vercel Functions, Cloudflare Workers), un service tiers (Formspree, Basin, Getform) ou une API existante. Aucune dépendance n'est imposée côté front : n'importe quel endpoint acceptant du JSON en `POST` convient.

## Structure du projet

```
src/
  components/       Composants partagés (Header, Footer, SEO, JsonLd, Breadcrumbs, Faq, Icon…)
  components/home/  Sections de la page d'accueil (Hero, Stats, Avis, ZoneIntervention…)
  data/             Contenu du site (voir tableau ci-dessus)
  layouts/          Layout.astro — squelette HTML, SEO, JSON-LD, Header/Footer communs
  lib/              schema.ts (générateurs JSON-LD), icons.ts (sprite d'icônes)
  pages/            Routes du site (une page = une route, sauf prestations/[slug].astro)
  styles/           global.css — tokens Tailwind 4 (@theme), classes utilitaires partagées
public/             Fichiers statiques (robots.txt, favicon.svg, og-image.jpg, logo public)
```

## Consentement cookies (RGPD)

`src/components/CookieConsent.astro` affiche un bandeau conforme RGPD/CNIL à la première visite : « Tout accepter », « Tout refuser » (mêmes poids visuel, aucun choix pré-coché) et « Personnaliser » (catégories Nécessaires / Mesure d'audience / Marketing). Le choix est stocké dans `localStorage` (`athome-cookie-consent`) pendant 13 mois maximum, puis redemandé. Le lien « Gérer les cookies » en bas de chaque page permet de le modifier à tout moment.

Pour brancher un futur outil (Google Analytics, Meta Pixel, etc.), ne le chargez **jamais** sans vérifier le consentement d'abord :

```js
const consent = window.athomeConsent.get();
if (consent?.categories.analytics) {
  // charger le script de mesure d'audience ici
}

// Réagir en direct si l'utilisateur change d'avis (bandeau ou "Gérer les cookies") :
window.addEventListener("athome:consent-updated", (event) => {
  if (event.detail.categories.analytics) {
    // charger le script maintenant
  }
});
```

## SEO & données structurées

- Chaque page définit `title`/`description` uniques via le composant `SEO.astro`.
- `src/lib/schema.ts` génère les blocs JSON-LD : `LocalBusiness` (`HomeAndConstructionBusiness`) et `WebSite` sur toutes les pages, `BreadcrumbList` sur les pages internes, `Service` sur chaque prestation, `FAQPage` sur l'accueil et les prestations qui ont une FAQ.
- Le sitemap (`sitemap-index.xml`) est généré automatiquement par `@astrojs/sitemap` au build et référencé dans `robots.txt`. Les pages légales (`/mentions-legales`, `/politique-de-confidentialite`) sont volontairement exclues du sitemap et marquées `noindex`.
- Avant mise en production : compléter le SIRET, le RCS, le nom de l'hébergeur et le directeur de publication dans `src/pages/mentions-legales.astro` (marqués `[à compléter]`).

## Performance & accessibilité

- Carte Leaflet et compteurs animés chargés en lazy (`IntersectionObserver`), jamais de JS bloquant.
- Police de titre (Bricolage Grotesque, 800) préchargée ; toutes les polices servies en local via `@fontsource`, `font-display: swap`.
- Toutes les images passent par `<Image />` d'Astro (AVIF/WebP, dimensions explicites, `loading="lazy"` sauf le hero).
- Animations d'apparition et carrousels respectent `prefers-reduced-motion`.
- Audit Lighthouse (mobile, build de production) sur 3 pages représentatives : accueil, une page prestation, la page devis — scores Performance/Accessibilité/Bonnes pratiques/SEO ≥ 97 sur les 4 axes, 100 sur la majorité.

## Maquette de référence

Les fichiers HTML statiques `export/figma/athome-*-desktop.html` et `-mobile.html` (à la racine du dépôt, hors de ce dossier `site/`) restent la référence visuelle exacte utilisée pour reconstruire ce site : palette, typographie, espacements et textes en ont été extraits fidèlement.
