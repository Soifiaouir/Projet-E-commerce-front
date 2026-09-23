import { Produit } from './produit';
import { Address } from './auth';

export interface CommandeItem {
  id: number;
  product: Produit;
  quantity: number;
  prixUnitaire: number;
}

export type StatutCommande = 'PENDING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

export interface Commande {
  id: number;
  items: CommandeItem[];
  status: StatutCommande;
  dateCommande: string;
  shippingAddress: Address;
  montantTotal: number;
}