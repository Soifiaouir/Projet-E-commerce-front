import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { ProduitList } from './components/produit-list/produit-list';
import { PanierComponent } from './components/panier/panier';
import { CommandeCheckoutComponent } from './components/commande-checkout/commande-checkout';
import { CommandeListComponent } from './components/commande-list/commande-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'produits', component: ProduitList },
  { path: 'panier', component: PanierComponent, canActivate: [authGuard] },
  { path: 'commande', component: CommandeCheckoutComponent, canActivate: [authGuard] },
  { path: 'commandes', component: CommandeListComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/produits', pathMatch: 'full' }
]