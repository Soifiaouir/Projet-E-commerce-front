export interface Categorie {
  id: number;
  name: string;
  description: string;
}

export interface Produit {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: Categorie;
  dateCreation: string;
}