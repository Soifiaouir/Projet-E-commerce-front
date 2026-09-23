import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit';
import { CategorieService } from '../../services/categorie';
import { Produit, Categorie } from '../../models/produit';
import { ProduitCard } from '../produit-card/produit-card';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, ProduitCard],
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.sass'
})
export class ProduitList implements OnInit {

  produits = signal<Produit[]>([]);
  categories = signal<Categorie[]>([]);
  selectedCategoryId = signal<number | null>(null);
  loading = signal(true);
  errorMessage = signal('');

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProduits();
  }

  loadCategories(): void {
    this.categorieService.getAllCategories().subscribe({
      next: (data) => this.categories.set(data),
      error: () => this.errorMessage.set('Impossible de charger les catégories')
    });
  }

  loadProduits(): void {
    this.loading.set(true);
    const categoryId = this.selectedCategoryId() ?? undefined;

    this.produitService.getAllProduits(categoryId).subscribe({
      next: (data) => {
        this.produits.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Impossible de charger les produits');
        this.loading.set(false);
      }
    });
  }

  onCategoryChange(categoryId: number | null): void {
    this.selectedCategoryId.set(categoryId);
    this.loadProduits();
  }
}