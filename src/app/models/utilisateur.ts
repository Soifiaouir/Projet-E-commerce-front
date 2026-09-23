import { Address } from './auth';

export interface Utilisateur {
  id: number;
  email: string;
  role: 'CLIENT' | 'ADMIN';
  address: Address;
  dateCreation: string;
}