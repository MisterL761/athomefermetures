import type { ImageMetadata } from "astro";
import porteEntree from "@/assets/realisationHome/porte-entree.jpg";
import porteGarage from "@/assets/realisationHome/porte-garage.jpg";
import porteGarage2 from "@/assets/realisationHome/porte-garage2.jpg";
import verriere from "@/assets/realisationHome/verriere.jpg";
import voletRoulant from "@/assets/realisationHome/volet-roulant.jpg.png";

export interface Realisation {
  category: string;
  title: string;
  image: ImageMetadata;
  alt: string;
}

export const REALISATIONS: Realisation[] = [
  {
    category: "Menuiserie",
    title: "Porte d'entrée aluminium sur mesure",
    image: porteEntree,
    alt: "Porte d'entrée aluminium anthracite avec baies vitrées latérales, posée par AT HOME à Bailleul",
  },
  {
    category: "Fermeture",
    title: "Porte de garage sectionnelle",
    image: porteGarage,
    alt: "Porte de garage sectionnelle grise et porte d'entrée assortie sur maison en briques",
  },
  {
    category: "Porte de garage",
    title: "Porte de garage anthracite",
    image: porteGarage2,
    alt: "Toiture en tuiles rénovée avec fenêtres de toit Velux et porte de garage anthracite",
  },
  {
    category: "Velux",
    title: "Verrière de toit sur mesure",
    image: verriere,
    alt: "Verrière de toit sur mesure éclairant une cage d'escalier",
  },
  {
    category: "Fermeture",
    title: "Volet roulant",
    image: voletRoulant,
    alt: "Fenêtre aluminium noire avec volet roulant intégré, vue de l'intérieur",
  },
];
