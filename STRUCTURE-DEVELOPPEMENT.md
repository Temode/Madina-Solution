# 📁 Structure de Développement - Madina Solution Frontend

## 📌 Vue d'ensemble

Ce document présente la structure recommandée pour développer le frontend de Madina Solution en suivant exactement votre maquette Figma.

---

## 🗂️ Structure des dossiers recommandée

```
Madina-Solution/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux
│   └── (autres-pages)/          # Autres pages de l'application
│
├── components/                   # Composants React réutilisables
│   ├── layout/                  # Composants de mise en page
│   │   ├── Header.tsx          # En-tête du site
│   │   ├── Footer.tsx          # Pied de page
│   │   └── Navigation.tsx      # Navigation (si séparée)
│   │
│   ├── sections/                # Sections de la page d'accueil
│   │   ├── Hero.tsx            # Section hero avec recherche
│   │   ├── RecentAnnouncements.tsx    # Annonces récentes
│   │   └── DigitalProducts.tsx        # Produits digitaux
│   │
│   └── ui/                      # Composants UI réutilisables
│       ├── Button.tsx           # Bouton personnalisé
│       ├── Input.tsx            # Champ de saisie
│       ├── Card.tsx             # Carte générique
│       ├── AnnouncementCard.tsx # Carte d'annonce
│       ├── ProductCard.tsx      # Carte de produit
│       ├── Badge.tsx            # Badge (Urgent, catégories)
│       └── SearchBar.tsx        # Barre de recherche
│
├── lib/                         # Utilitaires et helpers
│   ├── utils.ts                 # Fonctions utilitaires
│   ├── constants.ts             # Constantes (catégories, etc.)
│   └── types.ts                 # Types TypeScript
│
├── public/                      # Ressources statiques
│   ├── images/                  # Images
│   │   ├── hero-bg.jpg         # Image de fond du hero
│   │   ├── logo.png            # Logo
│   │   └── ...
│   └── icons/                   # Icônes SVG
│
└── tailwind.config.js           # Configuration Tailwind CSS
```

---

## 🎨 Développement selon la maquette Figma

### 1️⃣ Header (En-tête)

**Fichier:** `components/layout/Header.tsx`

**Éléments à implémenter:**
- Logo Madina Solution (carré bleu avec "M" + texte "adina Solution")
- Navigation: BTP, Informatique, Autres (liens simples)
- Bouton "Publier une annonce" (fond bleu)
- Design fixe en haut de la page (`sticky`)

**Code de base:**
```tsx
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* Navigation */}
          {/* Bouton Publier */}
        </div>
      </div>
    </header>
  );
}
```

---

### 2️⃣ Hero Section (Section principale)

**Fichier:** `components/sections/Hero.tsx`

**Éléments à implémenter:**
- Titre principal: "Trouvez des professionnels qualifiés près de chez vous"
- Image de fond avec overlay bleu foncé
- Barre de recherche à 3 champs (Service, Localisation, Catégorie)
- Bouton "Rechercher"

**Structure:**
```tsx
export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white py-24">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30"
           style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Trouvez des professionnels qualifiés près de chez vous
        </h1>

        {/* Barre de recherche */}
        <div className="bg-white rounded-xl shadow-2xl p-6">
          {/* 3 champs + bouton */}
        </div>
      </div>
    </section>
  );
}
```

---

### 3️⃣ Annonces Récentes

**Fichier:** `components/sections/RecentAnnouncements.tsx`

**Éléments à implémenter:**
- Titre: "Annonces récentes"
- Grille de cartes d'annonces (3 colonnes sur desktop)

**Fichier de carte:** `components/ui/AnnouncementCard.tsx`

**Éléments de la carte:**
- Image placeholder (gradient ou couleur unie)
- Badge "Urgent" si applicable (rouge)
- Titre de l'annonce
- Icône de localisation + ville
- Bouton "Voir les détails"
- Icône favori (cœur)

**Structure de la carte:**
```tsx
export default function AnnouncementCard({ announcement }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-blue-200">
        {announcement.isUrgent && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Urgent
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          <MapPin className="inline w-4 h-4 mr-1" />
          {announcement.location}
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Voir les détails
        </button>
      </div>
    </div>
  );
}
```

---

### 4️⃣ Produits Digitaux

**Fichier:** `components/sections/DigitalProducts.tsx`

**Éléments à implémenter:**
- Fond beige/crème (`bg-amber-50`)
- Card d'en-tête avec:
  - Icône de livre (orange)
  - Titre "Produits Digitaux"
  - Description
  - Badges Orange Money et MTN Mobile Money
- Grille de produits (3 colonnes)

**Fichier de carte produit:** `components/ui/ProductCard.tsx`

**Éléments de la carte produit:**
- Badge de catégorie (E-Book, Vidéo, Document)
- Image placeholder
- Titre du produit
- Prix
- Note (étoiles)
- Bouton "Acheter"

**Structure:**
```tsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image avec badge catégorie */}
      <div className="relative h-48 bg-gray-200">
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
          {product.category}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.title}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-blue-600">{product.price}</span>
          <div className="flex items-center text-yellow-500">
            {/* Étoiles de notation */}
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Acheter
        </button>
      </div>
    </div>
  );
}
```

---

### 5️⃣ Footer (Pied de page)

**Fichier:** `components/layout/Footer.tsx`

**Éléments à implémenter:**
- Fond gris foncé (`bg-gray-900`)
- 4 colonnes:
  1. Logo + description + coordonnées
  2. Liens Entreprise
  3. Liens Services
  4. Liens Support + réseaux sociaux
- Barre de copyright en bas

**Structure:**
```tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: Logo + Info */}
          {/* Colonne 2: Entreprise */}
          {/* Colonne 3: Services */}
          {/* Colonne 4: Support + Réseaux sociaux */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 Madina Solution. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🎨 Palette de couleurs (selon maquette)

```css
/* Primaires */
- Bleu principal: #2563EB (bg-blue-600)
- Bleu foncé hero: #1E3A8A (bg-blue-900)
- Orange: #EA580C (bg-orange-600)
- Rouge urgent: #DC2626 (bg-red-600)

/* Neutres */
- Blanc: #FFFFFF (bg-white)
- Gris clair: #F3F4F6 (bg-gray-100)
- Gris texte: #6B7280 (text-gray-500)
- Gris foncé: #111827 (bg-gray-900)

/* Fond sections */
- Fond produits digitaux: #FFFBEB (bg-amber-50)
```

---

## 📦 Types TypeScript recommandés

**Fichier:** `lib/types.ts`

```typescript
export interface Announcement {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  isUrgent: boolean;
  createdAt: Date;
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'ebook' | 'video' | 'document';
  rating: number;
  imageUrl?: string;
}

export type Category = 'btp' | 'informatique' | 'reparation' | 'climatisation';
```

---

## 🛠️ Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

---

## ✅ Checklist de développement

### Phase 1: Structure de base
- [ ] Créer la structure des dossiers
- [ ] Configurer les types TypeScript
- [ ] Définir les constantes (catégories, etc.)

### Phase 2: Composants de layout
- [ ] Header
- [ ] Footer

### Phase 3: Page d'accueil
- [ ] Section Hero
- [ ] Barre de recherche
- [ ] Section Annonces récentes
  - [ ] Carte d'annonce
- [ ] Section Produits digitaux
  - [ ] Carte de produit

### Phase 4: Composants UI réutilisables
- [ ] Button
- [ ] Input
- [ ] Badge
- [ ] Card générique

### Phase 5: Finalisation
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Optimisation des images
- [ ] Test de tous les composants
- [ ] Vérification avec la maquette Figma

---

## 💡 Conseils de développement

1. **Suivre exactement la maquette** - Ne pas ajouter d'effets ou styles non présents
2. **Mobile-first** - Commencer par le design mobile puis adapter pour desktop
3. **Composants simples** - Garder les composants simples et réutilisables
4. **Tailwind CSS** - Utiliser les classes Tailwind standard, éviter les customisations complexes
5. **TypeScript** - Typer tous les props et données
6. **Pas d'over-engineering** - Garder le code simple et maintenable

---

## 🚀 Ordre de développement recommandé

1. **Header** (simple, indépendant)
2. **Footer** (simple, indépendant)
3. **Hero Section** (section principale)
4. **AnnouncementCard** (composant de base)
5. **RecentAnnouncements** (utilise AnnouncementCard)
6. **ProductCard** (composant de base)
7. **DigitalProducts** (utilise ProductCard)
8. **Responsive design** (ajustements mobiles/tablettes)
9. **Optimisations finales**

---

## 📞 Besoin d'aide ?

Si tu as besoin d'assistance sur une partie spécifique:
- Demande-moi de t'aider sur un composant précis
- Demande-moi de debugger un problème
- Demande-moi d'optimiser une partie du code

Bon développement ! 🎉
