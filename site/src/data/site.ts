export const SITE = {
  name: "AT HOME Couvertures & Fermetures",
  shortName: "AT HOME",
  url: "https://www.athome-fermetures.fr",
  legalForm: "AT HOME Couvertures & Fermetures",
  claim: "ON CONSTRUIT ENSEMBLE.",
  description:
    "Menuiseries, fermetures et couverture à Bailleul (59). Fenêtres, volets, portes, portails, toiture et isolation, dans un rayon de 50 km.",
  foundedYear: 2009,
  address: {
    streetAddress: "2108 Route de Lille",
    postalCode: "59270",
    addressLocality: "Bailleul",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  phone: "0320876152",
  phoneDisplay: "03 20 87 61 52",
  phoneHref: "tel:0320876152",
  email: "contact@athome-fermetures.fr",
  geo: {
    latitude: 50.7333,
    longitude: 2.7333,
  },
  hours: [
    { day: "Lundi – Vendredi", hours: "8h – 17h" },
    { day: "Samedi", hours: "Sur rendez-vous" },
    { day: "Dimanche", hours: "Fermé" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  rating: {
    value: "4.7",
    count: "100",
  },
  priceRange: "€€",
  showroom: "300 m²",
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  areaServed: [
    "Bailleul",
    "Lille",
    "Dunkerque",
    "Armentières",
    "Hazebrouck",
    "Ypres",
    "Béthune",
    "Lens",
    "Roubaix",
    "Tourcoing",
    "Saint-Omer",
    "Cassel",
    "Estaires",
    "Merville",
    "Nieppe",
    "Steenwerck",
    "Villeneuve-d'Ascq",
  ],
} as const;

export const CONFIGURATEUR_URL = "https://configurateur.expert-renovateur.k-line.fr/configurateur/ouverture";
export const ESPACE_CLIENT_URL = "https://revelhome.app/connexion?slug=at-home-fermetures";

export const NAV_LINKS = [
  { label: "Société", href: "/societe", external: false },
  { label: "Nos réalisations", href: "/realisations", external: false },
  { label: "Qualification", href: "/qualification", external: false },
  { label: "Configurateur", href: CONFIGURATEUR_URL, external: true },
  { label: "Espace client", href: ESPACE_CLIENT_URL, external: true },
] as const;

export const PRESTATIONS_NAV = [
  { label: "Fenêtres", href: "/prestations/fenetres" },
  { label: "Portes-fenêtres & baies vitrées", href: "/prestations/portes-fenetres" },
  { label: "Portes d'entrée", href: "/prestations/portes-dentree" },
  { label: "Volets roulants et battants", href: "/prestations/volets-roulants" },
  { label: "Portes de garage", href: "/prestations/portes-de-garage" },
  { label: "Portails et clôtures", href: "/prestations/portails-clotures" },
  { label: "Velux et fenêtres de toit", href: "/prestations/velux-fenetres-de-toit" },
  { label: "Isolation extérieure", href: "/prestations/isolation" },
  { label: "Toiture EPDM et extension", href: "/prestations/toiture-epdm-extension" },
] as const;

export const FOOTER_PRESTATIONS = [
  "Fenêtres & portes",
  "Volets & motorisation",
  "Portes de garage",
  "Portails & carports",
] as const;
