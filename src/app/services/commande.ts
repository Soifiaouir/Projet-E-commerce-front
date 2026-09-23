import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/commande';
import { Address } from '../models/auth';

@Injectable({ providedIn: 'root' })
export class CommandeService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  creerCommande(shippingAddress: Address): Observable<Commande> {
    return this.http.post<Commande>(this.apiUrl, shippingAddress);
  }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiUrl}/${id}`);
  }
}