export interface Review {
  text: string;
  author: string;
  location: string;
  when: string;
  initial: string;
}

export const REVIEWS_COL_A: Review[] = [
  {
    text: "Équipe très professionnelle et à l'écoute. Pose de nos fenêtres impeccable, chantier propre. Je recommande vivement !",
    author: "Sophie D.",
    location: "Bailleul",
    when: "il y a 2 semaines",
    initial: "S",
  },
  {
    text: "Réfection complète de notre toiture. Travail soigné, délais respectés et un très bon rapport qualité-prix.",
    author: "Karim B.",
    location: "Hazebrouck",
    when: "il y a 1 mois",
    initial: "K",
  },
  {
    text: "Accueil au showroom au top, de vrais conseils sans pression. Nos volets roulants sont parfaits.",
    author: "Julie R.",
    location: "Nieppe",
    when: "il y a 3 semaines",
    initial: "J",
  },
  {
    text: "Porte d'entrée changée en une journée. Propre, rapide, et un rendu vraiment haut de gamme.",
    author: "Thierry M.",
    location: "Estaires",
    when: "il y a 2 mois",
    initial: "T",
  },
];

export const REVIEWS_COL_B: Review[] = [
  {
    text: "Du devis à la pose du portail motorisé, tout a été parfait. Des artisans sérieux et de bon conseil.",
    author: "Michel & Anne L.",
    location: "Armentières",
    when: "il y a 1 mois",
    initial: "M",
  },
  {
    text: "Dépannage d'un volet roulant en urgence, intervention le jour même. Merci pour votre réactivité !",
    author: "Nathalie V.",
    location: "Steenwerck",
    when: "il y a 2 mois",
    initial: "N",
  },
  {
    text: "Isolation extérieure impeccable, la maison est bien plus confortable et les factures ont chuté.",
    author: "Bruno C.",
    location: "Merville",
    when: "il y a 1 mois",
    initial: "B",
  },
  {
    text: "Une équipe qui tient ses délais et son budget. Rare et appréciable. Merci pour tout !",
    author: "Sandrine P.",
    location: "Bailleul",
    when: "il y a 5 semaines",
    initial: "S",
  },
];
