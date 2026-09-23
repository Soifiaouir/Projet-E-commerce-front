import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PanierService } from '../../services/panier';
import { Panier } from '../../models/panier';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panier.html',
  styleUrl: './panier.sass'
})
export class PanierComponent implements OnInit {

  panier = signal<Panier | null>(null);
  loading = signal(true);
  errorMessage = signal('');

  constructor(
    private panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPanier();
  }

  loadPanier(): void {
    this.loading.set(true);
    this.panierService.getPanier().subscribe({
      next: (data) => {
        this.panier.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Impossible de charger le panier');
        this.loading.set(false);
      }
    });
  }

  onUpdateQuantity(cartItemId: number, quantity: number): void {
    if (quantity < 1) {
      return;
    }
    this.panierService.updateItemQuantity(cartItemId, quantity).subscribe({
      next: (data) => this.panier.set(data),
      error: () => this.errorMessage.set('Impossible de mettre à jour la quantité')
    });
  }

  onRemoveItem(cartItemId: number): void {
    this.panierService.removeItem(cartItemId).subscribe({
      next: () => this.loadPanier(),
      error: () => this.errorMessage.set('Impossible de retirer cet article')
    });
  }

  getTotal(): number {
    const p = this.panier();
    if (!p) return 0;
    return p.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}