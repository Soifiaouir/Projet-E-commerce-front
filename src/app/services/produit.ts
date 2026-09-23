import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getAllProduits(categoryId?: number): Observable<Produit[]> {
    let url = this.apiUrl;
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    return this.http.get<Produit[]>(url);
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }
}