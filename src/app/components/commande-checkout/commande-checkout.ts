import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanierService } from '../../services/panier';
import { CommandeService } from '../../services/commande';
import { UtilisateurService } from '../../services/utilisateur';
import { Panier } from '../../models/panier';
import { Address } from '../../models/auth';

@Component({
  selector: 'app-commande-checkout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './commande-checkout.html',
  styleUrl: './commande-checkout.sass'
})
export class CommandeCheckoutComponent implements OnInit {

  panier = signal<Panier | null>(null);
  address = signal<Address | null>(null);
  loading = signal(true);
  submitting = signal(false);
  errorMessage = signal('');
  success = signal(false);

  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.panierService.getPanier().subscribe({
      next: (panierData) => {
        this.panier.set(panierData);
        this.utilisateurService.getCurrentUser().subscribe({
          next: (user) => {
            this.address.set(user.address);
            this.loading.set(false);
          },
          error: () => {
            this.errorMessage.set('Impossible de récupérer votre adresse');
            this.loading.set(false);
          }
        });
      },
      error: () => {
        this.errorMessage.set('Impossible de charger le panier');
        this.loading.set(false);
      }
    });
  }

  getTotal(): number {
    const p = this.panier();
    if (!p) return 0;
    return p.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  onConfirmerCommande(): void {
    const adresse = this.address();
    if (!adresse) {
      this.errorMessage.set('Adresse introuvable');
      return;
    }
    this.submitting.set(true);
    this.commandeService.creerCommande(adresse).subscribe({
      next: () => {
        this.submitting.set(false);
        this.success.set(true);
      },
      error: () => {
        this.submitting.set(false);
        this.errorMessage.set('Impossible de passer la commande');
      }
    });
  }
}