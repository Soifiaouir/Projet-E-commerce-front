import { Produit } from './produit';

export interface PanierItem {
  id: number;
  product: Produit;
  quantity: number;
}

export interface Panier {
  id: number;
  items: PanierItem[];
}