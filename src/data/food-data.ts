export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const categories = [
  "Sandwichs",
  "Pastas",
  "Salades",
  "Plats sautés",
  "Riz & variation",
  "Fritures & accompagnements",
  "Grillades & braisé",
  "Plats spéciaux",
  "Plats traditionnels"
];

export const foodItems: FoodItem[] = [
  // Sandwichs
  {
    id: "s1",
    name: "Sandwich Chevalier",
    description: "Pain complet, Filet de Poulet tranchée sautée, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/NFNxzKt9/Sandwich.jpg",
    category: "Sandwichs"
  },
  {
    id: "s2",
    name: "Sandwich Croquant",
    description: "Pain complet, Œuf brouillé assaisonné, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/NFNxzKt9/Sandwich.jpg",
    category: "Sandwichs"
  },
  {
    id: "s3",
    name: "Sandwich Éclatant",
    description: "Pain complet, Tranche de bœuf grillé ou sauté, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/NFNxzKt9/Sandwich.jpg",
    category: "Sandwichs"
  },
  {
    id: "s4",
    name: "Sandwich Royal",
    description: "Pain complet, Saucisse tranchée sautée, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/NFNxzKt9/Sandwich.jpg",
    category: "Sandwichs"
  },

  // Pastas
  {
    id: "p1",
    name: "Spaghetti Rouge",
    description: "Mélange de macaroni, Oignons, Haricot vert, Piment vert, Choux, Carotte, Poivron",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/MHZD5yCJ/Spaghetti-rouge.jpg",
    category: "Pastas"
  },
  {
    id: "p2",
    name: "Petit pois sauté",
    description: "Nouilles Indomie, Oignons, Haricot vert, Choux, Carotte, Poivron, Ail, Persil",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/8C8m982H/Petit-pois-saut.jpg",
    category: "Pastas"
  },
  {
    id: "p3",
    name: "Spaghetti Blanc",
    description: "Nouilles Indomie, Assaisonnement, Mayonnaise",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/sfKKXNWj/Spaghetti-blanc.jpg",
    category: "Pastas"
  },
  {
    id: "p4",
    name: "Couscous Blanc",
    description: "Pâte Spaghetti, Oignon, Haricot vert, Piment vert, Choux, Carotte",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/pL3sv5FK/Couscous-blanc.jpg",
    category: "Pastas"
  },
  {
    id: "p5",
    name: "Couscous au gras à la viande",
    description: "Pâte Spaghetti, Sauce tomate, Oignon, Haricot vert, Piment vert",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/65jHHm6j/Couscous-au-gras-la-viande.jpg",
    category: "Pastas"
  },
  {
    id: "p6",
    name: "Riz au gras",
    description: "Pâte Spaghetti, Petits pois, Oignons, Haricot vert, Piment vert, Choux",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/ZRxH6fDL/Riz-au-gras.jpg",
    category: "Pastas"
  },

  // Salades
  {
    id: "sl1",
    name: "Salade du Chef",
    description: "Laitue, Carotte, Haricot Vert, Tomates, Concombre, Betterave, Oignon",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/nh913VPr/Salade-du-chef.jpg",
    category: "Salades"
  },
  {
    id: "sl2",
    name: "Salade Emeraude",
    description: "Chou râpé ou finement coupé, Feuilles de laitue, Carottes râpées, Concombre",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/nh913VPr/Salade-du-chef.jpg",
    category: "Salades"
  },
  {
    id: "sl3",
    name: "Salade Macédoine",
    description: "Pommes de terre, Carottes, Macaroni coquillettes, Petits pois, Haricots verts",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/VLVR9042/Salade-Mac-doine.jpg",
    category: "Salades"
  },

  // Plats sautés
  {
    id: "ps1",
    name: "Pommes de terre sautées",
    description: "Frite pomme de terre, Viande de bœuf ou Pilon, Jus de tomate, Piment",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/hvKCwF7w/Pomme-de-terre-saut-es.jpg",
    category: "Plats sautés"
  },
  {
    id: "ps2",
    name: "Sautés aux soja",
    description: "Haricot Vert (15 baguettes), Boules de soja (20 morceaux), Oignon, Poivron",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/xjPpmdwS/Saut-s-aux-soja.jpg",
    category: "Plats sautés"
  },

  // Riz & variation
  {
    id: "r1",
    name: "Haricot vert aux gésiers",
    description: "Haricot vert, Avoine, Épinard, Petits pois, Choux, Oignons, Ail, Persil, Moutarde",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/kX4stvNx/Haricot-vert-aux-g-siers.jpg",
    category: "Riz & variation"
  },
  {
    id: "r2",
    name: "Koliko au poulet",
    description: "Couscous simple ou au gras, Poisson frit ou Pilon, Jus de tomate, Piment",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/vTXPwPrm/Koliko-au-poulet.jpg",
    category: "Riz & variation"
  },
  {
    id: "r3",
    name: "Djenkoumé au poulet",
    description: "Couscous simple ou au gras, Poisson frit ou Pilon, Jus de tomate, Piment",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/rwDf7NK8/Djenkoum-au-poulet.jpg",
    category: "Riz & variation"
  },

  // Fritures & accompagnements
  {
    id: "f1",
    name: "Pinon",
    description: "Koliko igname, Soja ou poisson ou poulet, Jus de tomate, piment vert, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/wBJ0jxXZ/Pinon.jpg",
    category: "Fritures & accompagnements"
  },
  {
    id: "f2",
    name: "Koliko au poulet",
    description: "Koliko patate douce, Soja ou poisson ou poulet, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/vTXPwPrm/Koliko-au-poulet.jpg",
    category: "Fritures & accompagnements"
  },
  {
    id: "f3",
    name: "Haricot vert aux gésiers",
    description: "3 Œufs, Pomme de terre, haricots verts, Carotte, Poivrons, Oignons, Ail, Choux",
    price: "2500 FCFA",
    image: "https://i.postimg.cc/kX4stvNx/Haricot-vert-aux-g-siers.jpg",
    category: "Fritures & accompagnements"
  },

  // Grillades & braisé
  {
    id: "g1",
    name: "Poulet braisé",
    description: "Brochette de bœuf, Jus de tomate, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/sXdHYGf3/Poulet-brais.jpg",
    category: "Grillades & braisé"
  },
  {
    id: "g2",
    name: "Poulet braisé",
    description: "Brochette de poulet, Jus de tomate, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/sXdHYGf3/Poulet-brais.jpg",
    category: "Grillades & braisé"
  },
  {
    id: "g3",
    name: "Poisson braisé",
    description: "Poisson Tilapia, Jus de tomate, Piment vert, Légumes",
    price: "2500 FCFA",
    image: "https://i.postimg.cc/26Qc2j3h/Poisson-brais.jpg",
    category: "Grillades & braisé"
  },
  {
    id: "g4",
    name: "Poulet braisé",
    description: "Poulet, Jus de tomate, Piment vert, Légumes",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/sXdHYGf3/Poulet-brais.jpg",
    category: "Grillades & braisé"
  },

  // Plats spéciaux
  {
    id: "sp1",
    name: "Akpan au Poisson",
    description: "AKPAN, Poisson Frit (Akpala ou Makanzo ou Tilapia), Jus de tomate, Piment vert, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/3RT94M9R/Akpan-au-poisson.jpg",
    category: "Plats spéciaux"
  },
  {
    id: "sp2",
    name: "Atiéké au Poisson",
    description: "Aloco, Atiéké, Poisson ou Pilon, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/WbbWwvVq/Ati-k-au-poisson.jpg",
    category: "Plats spéciaux"
  }
];

export const courseCategories = [
  "Tous",
  "Épicerie",
  "Fruits & Légumes",
  "Produits Laitiers",
  "Boissons",
  "Snacks"
];

export const bannerImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
];

// Add Togolese specialties data
export interface TogoleseSpecialty extends FoodItem {
  region: string;
}

export const togoleseSpecialties: TogoleseSpecialty[] = [
  {
    id: "ts1",
    name: "Akpan au Poisson",
    description: "AKPAN, Poisson Frit (Akpala ou Makanzo ou Tilapia), Jus de tomate, Piment vert, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/3RT94M9R/Akpan-au-poisson.jpg",
    category: "Plats spéciaux",
    region: "Maritime"
  },
  {
    id: "ts2",
    name: "Atiéké au Poisson",
    description: "Aloco, Atiéké, Poisson ou Pilon, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/WbbWwvVq/Ati-k-au-poisson.jpg",
    category: "Plats spéciaux",
    region: "Maritime"
  }
];