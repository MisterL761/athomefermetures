import type { IconName } from "@/lib/icons";

export interface Material {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Benefit {
  icon: IconName;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Prestation {
  slug: string;
  navLabel: string;
  homeLabel: string;
  homeDescriptor: string;
  gradient: [string, string];
  badge: string;
  title: string;
  lead: string;
  heroCaption: string;
  ratingNote: string;
  materialsTitle: string;
  materials: Material[];
  benefitsTitle: string;
  benefitsImageCaption: string;
  benefits: Benefit[];
  faq: FaqItem[];
  related: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const PRESTATIONS: Prestation[] = [
  {
    slug: "fenetres",
    navLabel: "Fenêtres",
    homeLabel: "Fenêtres",
    homeDescriptor: "PVC · Alu · Bois",
    gradient: ["#a9d15e", "#5f8a25"],
    badge: "MENUISERIES · PARTENAIRE K·LINE",
    title: "Fenêtres sur mesure.",
    lead: "PVC, aluminium ou bois : nous fabriquons, posons et garantissons des menuiseries haute isolation, adaptées à votre maison et à votre budget. Pose en neuf comme en rénovation.",
    heroCaption: "Pose K·LINE",
    ratingNote: "RGE Qualibat · Garantie décennale",
    materialsTitle: "Trois matériaux, trois caractères.",
    materials: [
      {
        name: "PVC Oknoplast",
        description:
          "Le meilleur rapport qualité-prix. Menuiseries Oknoplast, leader européen du PVC : excellente isolation thermique, aucun entretien, large choix de coloris.",
        tags: ["Économique", "Sans entretien"],
      },
      {
        name: "Aluminium K·LINE",
        description:
          "Finesse des profils, surfaces vitrées maximales, teintes illimitées. Fabrication française, rupture de pont thermique.",
        tags: ["Design fin", "Fabriqué en France"],
        featured: true,
      },
      {
        name: "Bois",
        description:
          "Le charme de l'authentique. Chaleureux, durable et idéal pour le bâti ancien et les maisons de caractère.",
        tags: ["Authentique", "Bâti ancien"],
      },
    ],
    benefitsTitle: "Ce que change une bonne fenêtre.",
    benefitsImageCaption: "Photo — pose en rénovation",
    benefits: [
      {
        icon: "thermometer",
        title: "Jusqu'à -40% sur le chauffage",
        description: "Double ou triple vitrage à isolation renforcée : la chaleur reste dedans, le froid dehors.",
      },
      {
        icon: "soundwave",
        title: "Un silence retrouvé",
        description: "Vitrages acoustiques : le bruit de la route et du voisinage reste à l'extérieur.",
      },
      {
        icon: "shield",
        title: "Sécurité renforcée",
        description: "Vitrage retardateur d'effraction et ferrures multipoints en option.",
      },
      {
        icon: "badge-check",
        title: "Éligible aux aides",
        description: "Certifiés RGE : MaPrimeRénov', CEE et TVA réduite. On monte le dossier avec vous.",
      },
    ],
    faq: [
      {
        question: "PVC, aluminium ou bois : quel matériau choisir ?",
        answer:
          "Le PVC offre le meilleur rapport isolation/prix, l'aluminium K·LINE le design le plus fin pour de grandes surfaces vitrées, et le bois s'impose sur le bâti ancien. Nos conseillers vous orientent selon votre budget et votre façade.",
      },
      {
        question: "Quel est le délai de pose d'une fenêtre PVC dans le Nord ?",
        answer:
          "Comptez en moyenne 4 à 6 semaines entre la signature du devis et la pose, fabrication sur mesure comprise. Un menuisier Bailleul dédié gère le suivi de chantier de A à Z.",
      },
      {
        question: "Puis-je changer mes fenêtres sans faire de travaux de maçonnerie ?",
        answer:
          "Oui, la pose en rénovation (dépose totale ou sur ancien dormant) évite la plupart des reprises de maçonnerie et se réalise en une journée par fenêtre en moyenne.",
      },
      {
        question: "Double ou triple vitrage : lequel choisir pour une maison dans le Nord ?",
        answer:
          "Le double vitrage à isolation renforcée (4/16/4) suffit dans la grande majorité des cas et offre le meilleur rapport confort/prix. Le triple vitrage se justifie surtout en façade nord ou pour un objectif basse consommation.",
      },
      {
        question: "Quelle garantie sur des fenêtres neuves posées par AT HOME ?",
        answer:
          "La pose est couverte par la garantie décennale, et les menuiseries elles-mêmes bénéficient de la garantie fabricant, jusqu'à 10 ans selon les gammes PVC, aluminium ou bois.",
      },
      {
        question: "Quelles aides pour changer ses fenêtres en 2026 ?",
        answer:
          "Selon vos revenus et l'ancienneté de votre logement, le remplacement de fenêtres par du double vitrage isolant peut ouvrir droit à MaPrimeRénov', aux Certificats d'Économie d'Énergie (CEE) et à la TVA à taux réduit. Nous vérifions votre éligibilité lors du devis.",
      },
    ],
    related: ["portes-fenetres", "volets-roulants", "isolation"],
    seoTitle: "Fenêtres PVC, Alu, Bois | AT HOME Fermetures — Bailleul (59)",
    seoDescription:
      "Fenêtres sur mesure en PVC Oknoplast, aluminium K·LINE ou bois, posées par votre menuisier à Bailleul. Devis gratuit sous 48h, RGE Qualibat.",
    keywords: ["menuisier Bailleul", "fenêtre PVC Oknoplast", "fenêtre aluminium Nord"],
  },
  {
    slug: "portes-fenetres",
    navLabel: "Portes-fenêtres & baies vitrées",
    homeLabel: "Portes-fenêtres & baies vitrées",
    homeDescriptor: "Coulissantes · Galandage",
    gradient: ["#8fb6c4", "#3f6b7a"],
    badge: "MENUISERIES · GRANDES OUVERTURES",
    title: "Baies vitrées et portes-fenêtres coulissantes.",
    lead: "Baie coulissante, galandage ou porte-fenêtre à la française : agrandissez visuellement votre séjour et gagnez en lumière naturelle, avec la même isolation qu'une fenêtre classique.",
    heroCaption: "Baie coulissante K·LINE",
    ratingNote: "RGE Qualibat · Garantie décennale",
    materialsTitle: "Trois ouvertures, trois usages.",
    materials: [
      {
        name: "Coulissant",
        description:
          "Grands vantaux qui glissent sans empiéter sur la pièce. Idéal pour ouvrir sur une terrasse ou un jardin.",
        tags: ["Gain de place", "Grandes largeurs"],
        featured: true,
      },
      {
        name: "Galandage",
        description:
          "Les vantaux disparaissent entièrement dans le mur pour une ouverture totale, sans aucun rail apparent.",
        tags: ["Ouverture totale", "Sur mesure"],
      },
      {
        name: "À la française",
        description:
          "Deux ou trois vantaux battants, l'ouverture classique. Étanchéité maximale, très bon rapport isolation/prix.",
        tags: ["Étanchéité", "Économique"],
      },
    ],
    benefitsTitle: "Ce que change une baie vitrée bien posée.",
    benefitsImageCaption: "Photo — baie coulissante donnant sur terrasse",
    benefits: [
      {
        icon: "sun",
        title: "Un séjour baigné de lumière",
        description: "De grandes surfaces vitrées qui font entrer la lumière naturelle toute la journée.",
      },
      {
        icon: "thermometer",
        title: "Isolation équivalente à une fenêtre",
        description: "Double vitrage à isolation renforcée, rupture de pont thermique sur les profils aluminium.",
      },
      {
        icon: "lock",
        title: "Fermeture multipoints",
        description: "Serrure 3 ou 5 points en série sur les modèles coulissants et galandage.",
      },
      {
        icon: "badge-check",
        title: "Éligible aux aides",
        description: "Travaux RGE : MaPrimeRénov', CEE et TVA à 5,5% selon votre projet.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre une porte-fenêtre et une baie coulissante ?",
        answer:
          "La porte-fenêtre s'ouvre en battant comme une porte classique. La baie coulissante glisse latéralement sans empiéter sur la pièce, idéale pour les grandes largeurs et l'accès terrasse.",
      },
      {
        question: "Une baie vitrée coulissante isole-t-elle aussi bien qu'une fenêtre ?",
        answer:
          "Oui : nos baies K·LINE utilisent le même double vitrage à isolation renforcée et la même rupture de pont thermique que nos fenêtres aluminium.",
      },
      {
        question: "Quelle largeur maximale pour une baie coulissante en aluminium ?",
        answer:
          "Selon la gamme et le nombre de vantaux, une baie coulissante K·LINE peut couvrir plusieurs mètres de large. Nous dimensionnons chaque projet sur mesure lors de la visite technique.",
      },
      {
        question: "Le galandage coûte-t-il plus cher qu'un coulissant classique ?",
        answer:
          "Oui, le galandage implique un caisson intégré au mur et une pose plus technique, ce qui en fait la solution la plus onéreuse mais aussi celle offrant l'ouverture la plus large, sans aucun rail visible.",
      },
      {
        question: "Peut-on motoriser une porte-fenêtre ou une baie vitrée ?",
        answer:
          "Oui, nos baies coulissantes et galandage peuvent être équipées d'une motorisation Somfy pour une ouverture automatique, au même titre que nos volets roulants et portails.",
      },
    ],
    related: ["fenetres", "volets-roulants", "portes-dentree"],
    seoTitle: "Portes-fenêtres & baies vitrées | AT HOME — Bailleul (59)",
    seoDescription:
      "Baies coulissantes, galandage et portes-fenêtres sur mesure, posées par AT HOME à Bailleul. Isolation renforcée, devis gratuit sous 48h.",
    keywords: ["porte-fenêtre Bailleul", "baie vitrée Nord 59", "menuisier Bailleul"],
  },
  {
    slug: "portes-dentree",
    navLabel: "Portes d'entrée",
    homeLabel: "Portes d'entrée",
    homeDescriptor: "Sécurité & design",
    gradient: ["#c9d3b0", "#7f9257"],
    badge: "MENUISERIES · PARTENAIRE EURADIF",
    title: "Portes d'entrée sécurisées et design.",
    lead: "Aluminium, PVC ou acier : une porte d'entrée, c'est la première image de votre maison et votre première protection. Nous posons des modèles Euradif, fabricant des Hauts-de-France, isolants, sécurisés et personnalisables en une journée.",
    heroCaption: "Porte d'entrée Euradif",
    ratingNote: "RGE Qualibat · Partenaire Euradif",
    materialsTitle: "Trois matériaux, une même exigence.",
    materials: [
      {
        name: "Aluminium Euradif",
        description: "Design contemporain, très grand choix de teintes et de poignées, robustesse maximale.",
        tags: ["Design", "Robuste"],
        featured: true,
      },
      {
        name: "PVC",
        description: "Bon rapport isolation/prix, entretien minimal, large gamme de décors imitation bois.",
        tags: ["Économique", "Sans entretien"],
      },
      {
        name: "Acier",
        description: "Sécurité renforcée en série, idéal pour les accès secondaires et les besoins anti-effraction élevés.",
        tags: ["Anti-effraction", "Résistant"],
      },
    ],
    benefitsTitle: "Ce que change une porte d'entrée récente.",
    benefitsImageCaption: "Photo — porte d'entrée changée en une journée",
    benefits: [
      {
        icon: "lock",
        title: "Serrure multipoints",
        description: "Verrouillage 3 ou 5 points en série, en option certifiée A2P sur les modèles renforcés.",
      },
      {
        icon: "thermometer",
        title: "Isolation thermique",
        description: "Panneau isolant et joints périphériques : fini les courants d'air en entrée de maison.",
      },
      {
        icon: "sparkle",
        title: "Un large choix esthétique",
        description: "Coloris, vitrages décoratifs et poignées design pour une porte qui vous ressemble.",
      },
      {
        icon: "clock",
        title: "Pose en une journée",
        description: "Dépose de l'ancienne porte et pose de la nouvelle réalisées le même jour, chantier propre.",
      },
    ],
    faq: [
      {
        question: "Une porte d'entrée est-elle vraiment plus sécurisée qu'une porte ancienne ?",
        answer:
          "Oui : les modèles récents intègrent une serrure multipoints, parfois certifiée A2P, et un dormant renforcé, bien plus résistants qu'une serrure simple d'ancienne génération.",
      },
      {
        question: "Peut-on personnaliser entièrement sa porte d'entrée ?",
        answer:
          "Oui, coloris, vitrage décoratif, poignée et barre de tirage sont personnalisables sur la majorité de nos modèles aluminium et PVC.",
      },
      {
        question: "Combien de temps dure la pose d'une porte d'entrée ?",
        answer:
          "La dépose de l'ancienne porte et la pose de la nouvelle se font en une seule journée, chantier propre, sans période sans porte sécurisée à votre domicile.",
      },
      {
        question: "Quelle est la durée de vie d'une porte d'entrée aluminium ?",
        answer:
          "Une porte d'entrée aluminium bien entretenue dure plusieurs décennies : le matériau ne rouille pas et conserve son aspect avec un simple nettoyage régulier.",
      },
      {
        question: "Quel délai entre la commande et la pose d'une porte d'entrée sur mesure ?",
        answer:
          "Comptez en moyenne 4 à 6 semaines de fabrication sur mesure après signature du devis, puis une pose programmée selon vos disponibilités.",
      },
    ],
    related: ["fenetres", "portes-fenetres", "portails-clotures"],
    seoTitle: "Porte d'entrée Euradif Bailleul (59) | AT HOME Fermetures",
    seoDescription:
      "Portes d'entrée Euradif en aluminium, PVC ou acier, sécurisées et posées en une journée par AT HOME à Bailleul. Devis gratuit sous 48h.",
    keywords: ["porte d'entrée Euradif", "menuisier Bailleul", "porte sécurisée Nord 59"],
  },
  {
    slug: "volets-roulants",
    navLabel: "Volets roulants et battants",
    homeLabel: "Volets & motorisation",
    homeDescriptor: "Roulants & battants",
    gradient: ["#9fc0a8", "#5f8a6c"],
    badge: "FERMETURES · PARTENAIRE SOMFY",
    title: "Volets roulants et battants sur mesure.",
    lead: "Volets roulants ou battants, en rénovation ou en neuf, manuels ou motorisés Somfy, pilotables à distance : confort, sécurité et isolation thermique renforcée pour toutes vos ouvertures.",
    heroCaption: "Motorisation Somfy",
    ratingNote: "RGE Qualibat · Partenaire Somfy",
    materialsTitle: "Roulant ou battant, manuel ou motorisé.",
    materials: [
      {
        name: "Volet battant",
        description: "Deux vantaux qui s'ouvrent manuellement vers l'extérieur. Charme traditionnel, isolation renforcée, sans mécanisme à entretenir.",
        tags: ["Traditionnel", "Sans entretien"],
      },
      {
        name: "Manuel",
        description: "Volet roulant manœuvré par sangle ou treuil. Solution simple et économique, sans électricité.",
        tags: ["Économique", "Sans électricité"],
      },
      {
        name: "Motorisé filaire",
        description: "Commande murale ou interrupteur, moteur Somfy fiable et silencieux, installation en neuf comme en rénovation.",
        tags: ["Confort", "Fiable"],
        featured: true,
      },
      {
        name: "Radio & connecté",
        description: "Télécommande, application mobile et scénarios domotiques Somfy TaHoma pour piloter tous vos volets.",
        tags: ["Pilotage à distance", "Domotique"],
      },
      {
        name: "Motorisation solaire",
        description: "Un petit panneau intégré au tablier recharge une batterie : aucun câble à tirer, idéale en rénovation quand le tableau électrique est éloigné.",
        tags: ["Sans câblage", "Écologique"],
      },
    ],
    benefitsTitle: "Ce que change un volet roulant motorisé.",
    benefitsImageCaption: "Photo — coffre de volet roulant en rénovation",
    benefits: [
      {
        icon: "thermometer",
        title: "Une isolation renforcée",
        description: "Le coffre isolé et le tablier fermé réduisent les déperditions de chaleur la nuit.",
      },
      {
        icon: "shield",
        title: "Sécurité anti-effraction",
        description: "Lames renforcées et verrouillage automatique en position basse, un frein à l'intrusion.",
      },
      {
        icon: "clock",
        title: "Programmation horaire",
        description: "Ouverture et fermeture automatiques, même en votre absence, pour simuler une présence.",
      },
      {
        icon: "badge-check",
        title: "Dépannage 7j/7",
        description: "Volet bloqué ou moteur en panne : notre service dépannage intervient rapidement.",
      },
    ],
    faq: [
      {
        question: "Peut-on motoriser un volet roulant existant ?",
        answer:
          "Dans la plupart des cas oui, en remplaçant le tablier et le moteur sans toucher au coffre existant. Une visite technique gratuite permet de le confirmer.",
      },
      {
        question: "Que faire en cas de volet roulant bloqué ?",
        answer:
          "Notre service Dépannage 7j/7 intervient rapidement dans notre zone de 50 km autour de Bailleul, souvent le jour même.",
      },
      {
        question: "Quelle est la différence entre volet roulant et volet battant ?",
        answer:
          "Le volet roulant s'enroule dans un coffre en hauteur et se manœuvre sans sortir, alors que le volet battant s'ouvre manuellement vers l'extérieur. Le roulant offre plus de confort et peut être motorisé, le battant séduit par son charme traditionnel et son absence d'entretien. Nous posons les deux types selon vos besoins et le style de votre façade.",
      },
      {
        question: "Combien de temps dure un moteur Somfy avant remplacement ?",
        answer:
          "Un moteur Somfy correctement installé fonctionne généralement plus de 10 ans. En cas de panne, il peut souvent être remplacé seul, sans changer tout le volet.",
      },
      {
        question: "Existe-t-il des volets roulants solaires, sans raccordement électrique ?",
        answer:
          "Oui, la motorisation solaire Somfy se pose sans tirer de câble : un petit panneau intégré au tablier recharge une batterie, idéale en rénovation quand le tableau électrique est éloigné.",
      },
    ],
    related: ["portes-de-garage", "portails-clotures", "fenetres"],
    seoTitle: "Volet roulant et battant Nord 59 | AT HOME — Bailleul",
    seoDescription:
      "Volets roulants ou battants, manuels ou motorisés Somfy, posés en neuf ou en rénovation par AT HOME à Bailleul. Devis gratuit, dépannage 7j/7.",
    keywords: ["volet roulant Nord 59", "volet battant Bailleul", "motorisation Somfy Bailleul"],
  },
  {
    slug: "portes-de-garage",
    navLabel: "Portes de garage",
    homeLabel: "Portes de garage",
    homeDescriptor: "Sectionnelles, motorisées",
    gradient: ["#c7b087", "#8a6f3f"],
    badge: "FERMETURES · PARTENAIRE SDA",
    title: "Portes de garage sur mesure.",
    lead: "Sectionnelle, basculante ou enroulable, motorisée ou manuelle : nous posons des portes de garage SDA, fabricant 100% français basé dans les Hauts-de-France, isolantes et sécurisées, assorties à votre façade.",
    heroCaption: "Porte sectionnelle SDA",
    ratingNote: "RGE Qualibat · Partenaire SDA",
    materialsTitle: "Trois types d'ouverture.",
    materials: [
      {
        name: "Sectionnelle SDA",
        description: "S'ouvre à la verticale sans empiéter sur l'espace intérieur ou extérieur. La plus isolante.",
        tags: ["Gain de place", "Isolante"],
        featured: true,
      },
      {
        name: "Basculante",
        description: "Solution robuste et économique, pour les garages profonds avec suffisamment de recul.",
        tags: ["Économique", "Robuste"],
      },
      {
        name: "Enroulable",
        description: "Le tablier s'enroule dans un coffre en linteau, idéal pour maximiser la hauteur de passage.",
        tags: ["Hauteur libre", "Compact"],
      },
    ],
    benefitsTitle: "Ce que change une porte de garage motorisée.",
    benefitsImageCaption: "Photo — porte de garage sectionnelle grise",
    benefits: [
      {
        icon: "thermometer",
        title: "Un garage mieux isolé",
        description: "Panneaux isolés qui limitent les déperditions vers les pièces attenantes.",
      },
      {
        icon: "clock",
        title: "Ouverture en 15 secondes",
        description: "Moteur Somfy silencieux, télécommande ou application mobile, sans sortir du véhicule.",
      },
      {
        icon: "shield",
        title: "Verrouillage sécurisé",
        description: "Système anti-relevage et détection d'obstacle intégrée en série sur les modèles motorisés.",
      },
      {
        icon: "badge-check",
        title: "Assortie à votre façade",
        description: "Large choix de coloris et de textures pour s'accorder avec vos menuiseries.",
      },
    ],
    faq: [
      {
        question: "Quelle porte de garage pour un espace réduit devant le garage ?",
        answer:
          "La sectionnelle est idéale : elle s'ouvre à la verticale et ne mord ni sur l'allée ni sur l'intérieur, contrairement à une porte basculante classique.",
      },
      {
        question: "Peut-on motoriser une porte de garage existante ?",
        answer:
          "Selon son état et son type, une motorisation Somfy peut souvent s'ajouter sans remplacer la porte. Nous réalisons un diagnostic gratuit avant devis.",
      },
      {
        question: "Quel budget prévoir pour une porte de garage sur mesure ?",
        answer:
          "Le tarif dépend du type d'ouverture, des dimensions et de la motorisation. Nous établissons un devis gratuit et détaillé après une visite technique, sans engagement de votre part.",
      },
      {
        question: "Peut-on assortir la porte de garage à mes fenêtres ou mon portail ?",
        answer:
          "Oui, nos gammes proposent un large choix de coloris et de finitions (lisse, rainurée, imitation bois) pour harmoniser la porte de garage avec vos menuiseries et fermetures existantes.",
      },
      {
        question: "Une porte de garage sectionnelle isole-t-elle bien le garage ?",
        answer:
          "Oui, les panneaux sectionnels intègrent une âme isolante qui limite nettement les déperditions thermiques, un vrai plus si le garage communique avec une pièce chauffée.",
      },
    ],
    related: ["portails-clotures", "volets-roulants", "portes-dentree"],
    seoTitle: "Porte de garage SDA Hazebrouck | AT HOME — Bailleul (59)",
    seoDescription:
      "Portes de garage SDA sectionnelles, basculantes ou enroulables, motorisées Somfy, posées par AT HOME dans le Nord. Devis gratuit sous 48h.",
    keywords: ["porte de garage SDA", "porte de garage Bailleul", "motorisation Somfy Nord 59"],
  },
  {
    slug: "portails-clotures",
    navLabel: "Portails et clôtures",
    homeLabel: "Portails & carports",
    homeDescriptor: "Alu sur mesure",
    gradient: ["#b7c4a0", "#6f8a4f"],
    badge: "FERMETURES · ALUMINIUM SUR MESURE",
    title: "Portails, clôtures et carports en aluminium.",
    lead: "Portail battant ou coulissant, clôture assortie et carport : nous concevons des ensembles aluminium sur mesure, motorisables, pour sécuriser et valoriser l'entrée de votre propriété.",
    heroCaption: "Portail coulissant motorisé",
    ratingNote: "RGE Qualibat · Partenaire Somfy",
    materialsTitle: "Trois éléments, un seul ensemble.",
    materials: [
      {
        name: "Portail battant ou coulissant",
        description: "Aluminium sur mesure, plein, ajouré ou à lames, motorisable Somfy à tout moment.",
        tags: ["Sur mesure", "Motorisable"],
        featured: true,
      },
      {
        name: "Clôture assortie",
        description: "Panneaux ou claustras aluminium coordonnés au portail, pour une entrée harmonieuse.",
        tags: ["Coordonné", "Intimité"],
      },
      {
        name: "Carport",
        description: "Structure aluminium ou bois pour abriter un ou plusieurs véhicules, toit plat ou en pente.",
        tags: ["Abri véhicule", "Sur mesure"],
      },
    ],
    benefitsTitle: "Ce que change un portail motorisé.",
    benefitsImageCaption: "Photo — portail aluminium anthracite",
    benefits: [
      {
        icon: "shield",
        title: "Sécurité renforcée",
        description: "Portail verrouillé, visiophone et digicode en option pour contrôler les accès.",
      },
      {
        icon: "clock",
        title: "Ouverture à distance",
        description: "Télécommande ou application mobile Somfy : plus besoin de sortir du véhicule.",
      },
      {
        icon: "ruler",
        title: "Fabrication sur mesure",
        description: "Chaque portail est dimensionné pour votre entrée, quelle que soit sa configuration.",
      },
      {
        icon: "badge-check",
        title: "Garantie décennale",
        description: "Pose garantie 10 ans, structures aluminium traitées contre la corrosion.",
      },
    ],
    faq: [
      {
        question: "Portail battant ou coulissant : lequel choisir ?",
        answer:
          "Le battant convient aux entrées avec du recul ; le coulissant est recommandé en cas de dénivelé ou d'espace limité devant le portail, ou pour une entrée en pente.",
      },
      {
        question: "Peut-on motoriser un portail existant ?",
        answer:
          "Souvent oui, sous réserve de l'état de la structure. Nous réalisons une visite technique gratuite pour valider la faisabilité avant devis.",
      },
      {
        question: "Faut-il une déclaration préalable pour installer un portail ou une clôture ?",
        answer:
          "Cela dépend de la hauteur et du règlement d'urbanisme de votre commune : une déclaration préalable est parfois requise en mairie. Nous pouvons vous orienter, mais la démarche reste à votre charge.",
      },
      {
        question: "Combien de temps entre la commande et la pose d'un portail sur mesure ?",
        answer:
          "Comptez en général 4 à 8 semaines de fabrication après validation du devis, puis une pose réalisée en une à deux journées selon la configuration.",
      },
      {
        question: "Le portail aluminium résiste-t-il à l'humidité du climat du Nord ?",
        answer:
          "Oui, l'aluminium ne rouille pas et nos structures reçoivent un traitement anticorrosion, un atout durable face au climat humide du Nord (59) et du Pas-de-Calais.",
      },
    ],
    related: ["portes-de-garage", "volets-roulants", "portes-dentree"],
    seoTitle: "Portail aluminium Nord 59 | AT HOME — Bailleul",
    seoDescription:
      "Portails, clôtures et carports aluminium sur mesure, motorisables Somfy, posés par AT HOME dans le Nord. Devis gratuit sous 48h.",
    keywords: ["portail aluminium Bailleul", "clôture Nord 59", "motorisation Somfy Armentières"],
  },
  {
    slug: "velux-fenetres-de-toit",
    navLabel: "Velux et fenêtres de toit",
    homeLabel: "Velux & fenêtres de toit",
    homeDescriptor: "Lumière naturelle",
    gradient: ["#a7c7dd", "#4f7f9e"],
    badge: "MENUISERIES · PARTENAIRE VELUX",
    title: "Velux et fenêtres de toit sur mesure.",
    lead: "Faites entrer la lumière dans vos combles : pose de Velux en neuf ou en rénovation, à rotation ou à projection, avec toutes les garanties d'étanchéité liées à votre toiture.",
    heroCaption: "Pose Velux · combles aménagés",
    ratingNote: "RGE Qualibat · Partenaire Velux",
    materialsTitle: "Deux ouvertures, un même confort.",
    materials: [
      {
        name: "Velux à rotation",
        description: "Ouverture centrale pratique au quotidien, idéale pour une chambre ou un bureau sous combles.",
        tags: ["Usage quotidien", "Ventilation"],
        featured: true,
      },
      {
        name: "Velux à projection",
        description: "Ouverture par le bas pour une vue dégagée et un accès facilité au nettoyage extérieur.",
        tags: ["Vue dégagée", "Entretien facile"],
      },
    ],
    benefitsTitle: "Ce que change une fenêtre de toit.",
    benefitsImageCaption: "Photo — Velux posé sur toiture en ardoise",
    benefits: [
      {
        icon: "sun",
        title: "Jusqu'à 40% de lumière en plus",
        description: "Une fenêtre de toit éclaire une pièce bien mieux qu'une fenêtre verticale à surface égale.",
      },
      {
        icon: "droplet",
        title: "Étanchéité garantie",
        description: "Kit d'étanchéité adapté à votre type de couverture, posé par des couvreurs qualifiés.",
      },
      {
        icon: "wind",
        title: "Ventilation naturelle",
        description: "Aération des combles pour limiter l'humidité et la chaleur en été.",
      },
      {
        icon: "badge-check",
        title: "Éligible aux aides",
        description: "Travaux RGE : MaPrimeRénov' et TVA réduite selon le type de fenêtre posée.",
      },
    ],
    faq: [
      {
        question: "Peut-on installer un Velux sur tout type de toiture ?",
        answer:
          "Un Velux se pose sur la grande majorité des couvertures (tuiles, ardoises, bac acier) à condition que la pente du toit et la structure soient compatibles. Nous validons cela lors de la visite technique.",
      },
      {
        question: "Faut-il refaire la toiture pour poser un Velux ?",
        answer:
          "Non, la pose se fait généralement sans reprise complète de la couverture, avec un kit d'étanchéité adapté à vos tuiles ou ardoises existantes.",
      },
      {
        question: "Quelle taille de Velux choisir pour une chambre sous combles ?",
        answer:
          "En règle générale, la surface vitrée doit représenter environ 1/6e de la surface au sol de la pièce pour un bon éclairage naturel. Nous vous conseillons le modèle adapté lors de la visite technique.",
      },
      {
        question: "Un Velux peut-il être motorisé et connecté ?",
        answer:
          "Oui, nos Velux peuvent être équipés d'une motorisation avec télécommande ou application mobile, avec capteur de pluie pour une fermeture automatique en cas d'averse.",
      },
      {
        question: "Quel est le prix moyen de la pose d'un Velux ?",
        answer:
          "Le tarif varie selon le modèle (rotation ou projection), la taille et la complexité de la toiture. Nous établissons un devis détaillé et gratuit après diagnostic sur place.",
      },
    ],
    related: ["isolation", "fenetres"],
    seoTitle: "Velux Bailleul (59) | Fenêtre de toit — AT HOME",
    seoDescription:
      "Pose de Velux et fenêtres de toit à rotation ou projection, par des couvreurs RGE à Bailleul. Devis gratuit sous 48h, étanchéité garantie.",
    keywords: ["Velux Bailleul", "fenêtre de toit Nord 59", "couvreur Armentières"],
  },
  {
    slug: "isolation",
    navLabel: "Isolation extérieure",
    homeLabel: "Isolation extérieure",
    homeDescriptor: "ITE, économies d'énergie",
    gradient: ["#d9c48a", "#a37f2f"],
    badge: "ISOLATION · ITE",
    title: "Isolation thermique par l'extérieur (ITE).",
    lead: "L'isolation extérieure enveloppe votre maison sans réduire la surface habitable, supprime les ponts thermiques et rénove votre façade en un seul chantier. Un geste fort pour votre confort et vos factures.",
    heroCaption: "Isolation extérieure enduite",
    ratingNote: "RGE Qualibat · Éligible MaPrimeRénov'",
    materialsTitle: "Deux finitions, une même performance.",
    materials: [
      {
        name: "Isolation extérieure",
        description: "Solution la plus courante, large choix de teintes, bon rapport performance/prix.",
        tags: ["Économique", "Personnalisable"],
        featured: true,
      },
      {
        name: "Bardage",
        description: "Finition bois, composite ou métallique, pour un rendu contemporain et une protection renforcée.",
        tags: ["Design", "Durable"],
      },
    ],
    benefitsTitle: "Ce que change une isolation extérieure.",
    benefitsImageCaption: "Photo — façade rénovée en isolation extérieure",
    benefits: [
      {
        icon: "thermometer",
        title: "Jusqu'à -30% sur le chauffage",
        description: "Suppression des ponts thermiques au niveau des murs, la principale source de déperdition.",
      },
      {
        icon: "sparkle",
        title: "Une façade entièrement rénovée",
        description: "L'ITE offre l'occasion de moderniser l'aspect extérieur de votre maison en un seul chantier.",
      },
      {
        icon: "home",
        title: "Surface habitable préservée",
        description: "Contrairement à l'isolation intérieure, l'ITE ne réduit pas la surface de vos pièces.",
      },
      {
        icon: "badge-check",
        title: "Aides financières",
        description: "Travaux éligibles à MaPrimeRénov', aux CEE et à la TVA à 5,5% selon votre profil.",
      },
    ],
    faq: [
      {
        question: "L'isolation extérieure est-elle vraiment plus efficace que l'isolation intérieure ?",
        answer:
          "Elle traite mieux les ponts thermiques (jonctions murs/planchers/refends) car l'isolant enveloppe l'ensemble du bâti, ce que l'isolation intérieure ne peut pas faire aussi complètement.",
      },
      {
        question: "Quelles aides pour financer une isolation extérieure ?",
        answer:
          "Selon vos revenus et votre logement, ces travaux peuvent ouvrir droit à MaPrimeRénov', aux Certificats d'Économie d'Énergie (CEE) et à la TVA réduite à 5,5%. Nous vous accompagnons dans les démarches.",
      },
      {
        question: "L'isolation extérieure convient-elle à toutes les façades ?",
        answer:
          "La majorité des façades en briques, parpaings ou béton se prêtent à l'ITE. Certaines maisons de caractère ou en zone protégée peuvent nécessiter une étude spécifique, que nous réalisons lors de la visite technique.",
      },
      {
        question: "Combien de temps dure un chantier d'isolation extérieure ?",
        answer:
          "Pour une maison individuelle, comptez en général 2 à 4 semaines de travaux selon la surface de façade et la finition choisie (enduit ou bardage).",
      },
      {
        question: "L'isolation extérieure réduit-elle vraiment la facture de chauffage ?",
        answer:
          "Oui : en supprimant les ponts thermiques au niveau des murs, principale source de déperdition, l'ITE permet généralement de réduire la facture de chauffage jusqu'à 30%.",
      },
    ],
    related: ["fenetres", "velux-fenetres-de-toit"],
    seoTitle: "Isolation extérieure Bailleul | ITE — AT HOME (59)",
    seoDescription:
      "Isolation thermique par l'extérieur (ITE), enduit ou bardage, posée par AT HOME à Bailleul. Aides MaPrimeRénov', devis gratuit sous 48h.",
    keywords: ["isolation extérieure Bailleul", "ITE Nord 59", "RGE Bailleul"],
  },
  {
    slug: "toiture-epdm-extension",
    navLabel: "Toiture EPDM et extension",
    homeLabel: "Toiture EPDM & extension",
    homeDescriptor: "Toit plat, agrandissement",
    gradient: ["#9aa5ab", "#4a5560"],
    badge: "EXTENSION · TOITURE EPDM",
    title: "Toiture EPDM et extension sur mesure.",
    lead: "Vous manquez de place ? Nous agrandissons votre maison et couvrons les toits plats ou à faible pente d'une membrane EPDM monocouche, étanche et durable, pour une extension qui tient dans le temps.",
    heroCaption: "Extension toiture plate EPDM",
    ratingNote: "RGE Qualibat · Garantie décennale",
    materialsTitle: "Deux savoir-faire, un seul chantier.",
    materials: [
      {
        name: "Toiture EPDM",
        description: "Membrane caoutchouc monocouche, sans raccord ni soudure multiple : une étanchéité totale pour toit plat ou faible pente.",
        tags: ["Étanchéité totale", "Sans entretien"],
      },
      {
        name: "Extension ossature bois",
        description: "Structure légère et rapide à mettre en œuvre, pour agrandir sans lourds travaux de maçonnerie.",
        tags: ["Rapide", "Bonne isolation"],
      },
      {
        name: "Extension maçonnée",
        description: "Structure traditionnelle en briques ou parpaings, assortie à l'existant, pour une extension qui ne se distingue pas de la maison d'origine.",
        tags: ["Traditionnel", "Assorti à l'existant"],
      },
    ],
    benefitsTitle: "Ce que change une extension bien pensée.",
    benefitsImageCaption: "Photo — extension toiture plate EPDM",
    benefits: [
      {
        icon: "droplet",
        title: "Étanchéité durable",
        description: "La membrane EPDM affiche une durée de vie démontrée de plus de 50 ans, sans raccord source de fuite.",
      },
      {
        icon: "home",
        title: "Plus de surface, sans déménager",
        description: "Cuisine, chambre, bureau ou véranda : gagnez les m² qu'il vous manque sur votre terrain actuel.",
      },
      {
        icon: "shield",
        title: "Résiste à tous les climats",
        description: "La membrane EPDM supporte gel, forte chaleur, UV et intempéries sans se fissurer ni se rétracter.",
      },
      {
        icon: "badge-check",
        title: "Garantie décennale",
        description: "Comme tout ouvrage de construction, votre extension est couverte 10 ans, structure et étanchéité comprises.",
      },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'une toiture EPDM et pour quels usages ?",
        answer:
          "L'EPDM est une membrane en caoutchouc monocouche destinée à l'étanchéité des toits plats ou à faible pente. Elle est particulièrement adaptée aux extensions, vérandas, garages ou abris de jardin.",
      },
      {
        question: "Quelle est la durée de vie d'une toiture en EPDM ?",
        answer:
          "Sa durée de vie démontrée dépasse 50 ans : la membrane résiste aux UV, à l'ozone et aux variations climatiques sans se dégrader, contrairement à d'autres revêtements de toit plat.",
      },
      {
        question: "Faut-il une autorisation pour construire une extension ?",
        answer:
          "Cela dépend de la surface créée et du règlement d'urbanisme de votre commune : une simple déclaration préalable suffit parfois, un permis de construire est requis au-delà d'un certain seuil. Nous pouvons vous orienter, mais la démarche reste à votre charge.",
      },
      {
        question: "L'extension peut-elle être isolée et raccordée à l'existant ?",
        answer:
          "Oui, nous intégrons l'isolation de la nouvelle structure et assurons la jonction avec la toiture et les murs existants pour un ensemble cohérent et étanche.",
      },
      {
        question: "Combien de temps dure un chantier d'extension ?",
        answer:
          "Selon la surface et le type de structure (bois ou maçonnée), comptez généralement plusieurs semaines de travaux. Nous établissons un planning précis après la visite technique.",
      },
    ],
    related: ["isolation", "velux-fenetres-de-toit", "portes-fenetres"],
    seoTitle: "Toiture EPDM et extension Nord 59 | AT HOME — Bailleul",
    seoDescription:
      "Extension de maison et toiture EPDM étanche, posées par AT HOME à Bailleul. RGE Qualibat, garantie décennale, devis gratuit sous 48h.",
    keywords: ["toiture EPDM Nord 59", "extension maison Bailleul", "toit plat Armentières"],
  },
];

export function getPrestation(slug: string): Prestation | undefined {
  return PRESTATIONS.find((p) => p.slug === slug);
}

export function getRelatedPrestations(prestation: Prestation): Prestation[] {
  return prestation.related
    .map((slug) => getPrestation(slug))
    .filter((p): p is Prestation => Boolean(p));
}
