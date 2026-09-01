# Ecommerce Frontend

Application front-end Angular du projet e-commerce fullstack, construite pour consommer l'API REST du [backend Spring Boot](#) associé.

Projet réalisé dans le cadre d'un portfolio, avec pour objectif de démontrer une maîtrise concrète d'Angular en conditions réelles, couplée à une API Java sécurisée par JWT.

## Stack technique

- **Angular** (composants standalone, syntaxe de contrôle de flux moderne `@if`/`@for`)
- **TypeScript**
- **SCSS/SASS**
- **RxJS** pour la gestion des flux asynchrones
- **JWT** pour l'authentification, via un intercepteur HTTP dédié

## Prérequis

- Node.js (version LTS)
- Angular CLI (`npm install -g @angular/cli`)
- Le backend Spring Boot doit tourner en local sur `http://localhost:8080` (voir le README du projet backend)

## Installation

```bash
npm install
```

## Lancer le projet en local

```bash
ng serve
```

L'application est alors accessible sur `http://localhost:4200`.

## Structure du projet

Organisation par couche technique :
src/app/
├── components/ # composants (login, produit-list, panier, navbar, ...)
├── services/ # communication avec l'API backend
├── models/ # interfaces TypeScript (contrats de données)
├── guards/ # protection des routes (auth, admin)
├── interceptors/ # ajout automatique du token JWT aux requêtes
├── directives/
├── pipes/
└── utils/


## Fonctionnalités

- Inscription / connexion (JWT)
- Consultation du catalogue produits (liste, détail, filtres par catégorie)
- Panier (ajout, modification, suppression)
- Passage de commande et historique
- Espace admin : gestion des produits, catégories et commandes

## Backend associé

Ce front consomme l'API du projet backend Spring Boot : authentification JWT, catalogue produits/catégories, panier, commandes.
