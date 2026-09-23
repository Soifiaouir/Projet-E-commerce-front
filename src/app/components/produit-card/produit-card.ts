import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from '../../models/produit';
import { PanierService } from '../../services/panier';

@Component({
  selector: 'app-produit-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.sass'
})
export class ProduitCard {
  @Input() produit!: Produit;

  adding = signal(false);
  addedMessage = signal('');

  constructor(private panierService: PanierService) {}

  onAddToCart(): void {
    this.adding.set(true);
    this.addedMessage.set('');

    this.panierService.addItem(this.produit.id, 1).subscribe({
      next: () => {
        this.adding.set(false);
        this.addedMessage.set('Ajouté au panier !');
      },
      error: () => {
        this.adding.set(false);
        this.addedMessage.set('Erreur, veuillez vous connecter');
      }
    });
  }
}