import { Component, OnInit, signal } from '@angular/core';
import { CommandeService } from '../../services/commande';
import { Commande } from '../../models/commande';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commande-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './commande-list.html',
  styleUrl: './commande-list.sass'
})
export class CommandeListComponent implements OnInit {

  commandes = signal<Commande[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.loading.set(true);
    this.commandeService.getCommandes().subscribe({
      next: (data) => {
        this.commandes.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Impossible de charger vos commandes');
        this.loading.set(false);
      }
    });
  }
}