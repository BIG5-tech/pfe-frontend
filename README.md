# PFE Manager — Frontend

> Application Angular pour la gestion des projets de fin d'études (PFE)

---

## Tech Stack

- **Framework** : Angular 16+
- **UI Library** : Angular Material
- **Styling** : SCSS + CSS custom (dark theme)
- **HTTP** : HttpClient (Angular)
- **Forms** : ReactiveFormsModule
- **Routing** : Angular Router
- **Font** : Inter (Google Fonts)

---

## Architecture
frontend/
├── src/
│   ├── app/
│   │   ├── coordinator/
│   │   │   ├── create-student.component.ts
│   │   │   ├── create-student.component.html
│   │   │   └── create-student.component.css
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.scss
│   │   │   └── login/
│   │   │       ├── login.component.ts
│   │   │       ├── login.component.html
│   │   │       └── login.component.scss
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── dashboard.service.ts
│   │   │   └── student.service.ts
│   │   ├── models/
│   │   │   └── student.model.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── pipes/
│   │   │   └── project-status.pipe.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── environments/
│   │   └── environment.ts
│   └── styles.scss

---

## User Stories

### US1 — Espace étudiant personnalisé
> En tant qu'étudiant, je peux personnaliser mon espace afin de visualiser mes projets, comptes rendus et notifications de manière adaptée à mes besoins.

**Composants :**
- `login.component` — authentification avec email/password
- `dashboard.component` — espace personnalisé avec projets, comptes rendus, notifications et préférences

**Fonctionnalités :**
- Connexion sécurisée avec JWT
- Affichage des projets avec filtre par statut
- Affichage des comptes rendus avec tri
- Notifications en temps réel avec marquage lu/non-lu
- Sauvegarde des préférences personnelles
- Protection des routes via `AuthGuard`

---

### US2 — Création de compte étudiant
> En tant que coordinateur, je peux créer un compte étudiant afin que l'étudiant puisse accéder au système.

**Composants :**
- `create-student.component` — formulaire de création de compte

**Fonctionnalités :**
- Formulaire réactif avec validation côté client
- Champs : nom, prénom, email, numéro étudiant, département, année d'étude
- Génération automatique d'un mot de passe temporaire
- Messages de succès/erreur
- Lien de navigation vers le login

---

## Routes

| Route | Composant | Description |
|-------|-----------|-------------|
| `/login` | `LoginComponent` | Page de connexion |
| `/dashboard` | `DashboardComponent` | Espace étudiant |
| `/create-student` | `CreateStudentComponent` | Création de compte |

---

## Design System

- **Thème** : Dark mode premium
- **Couleur principale** : `#6366f1` (Indigo)
- **Background** : `linear-gradient(135deg, #0f0c29, #302b63, #24243e)`
- **Typographie** : Inter (300, 400, 500, 600, 700, 800)
- **Animations** : slideIn, fadeUp, float, popIn, pulse
- **Style** : Minimaliste, moderne, dark theme cohérent sur toutes les pages

---

## Installation & Démarrage

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
ng serve

# Accéder à l'application
http://localhost:4200
```

---

## Backend

Ce frontend communique avec un backend PHP via XAMPP :
- **URL** : `http://localhost/backend/dashbord-backend`
- **Port Apache** : 80

---

## Compte de test
Email    : ahmed@pfe.com
Password : password