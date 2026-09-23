import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panier } from '../models/panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private apiUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  getPanier(): Observable<Panier> {
    return this.http.get<Panier>(this.apiUrl);
  }

  addItem(productId: number, quantity: number): Observable<Panier> {
    const params = `productId=${productId}&quantity=${quantity}`;
    return this.http.post<Panier>(`${this.apiUrl}/items?${params}`, {});
  }

  updateItemQuantity(cartItemId: number, quantity: number): Observable<Panier> {
    return this.http.put<Panier>(`${this.apiUrl}/items/${cartItemId}?quantity=${quantity}`, {});
  }

  removeItem(cartItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/items/${cartItemId}`);
  }

  clearPanier(): Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }
}