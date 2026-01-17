# Madina Solution - Plateforme SaaS en Guinée

## 🇬🇳 À propos

Madina Solution est une plateforme numérique innovante de mise en relation entre clients et professionnels qualifiés en Guinée. Elle permet également la vente de produits digitaux (e-books, formations vidéo, documents, etc.).

### Mission

Faciliter la vie des citoyens en leur offrant un accès rapide, sécurisé et fiable à des ouvriers qualifiés, tout en créant une opportunité économique durable pour les artisans, techniciens et créateurs digitaux.

### Vision

Devenir la première plateforme digitale multiservices en Afrique de l'Ouest capable de connecter efficacement les besoins pratiques du quotidien aux talents disponibles localement.

## 🚀 Technologies utilisées

- **Next.js 14+** - Framework React avec App Router
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire pour un design moderne
- **React** - Bibliothèque JavaScript pour les interfaces utilisateur

## 📦 Installation

1. Clonez le dépôt :
\`\`\`bash
git clone https://github.com/votre-repo/madina-solution.git
cd Madina-Solution
\`\`\`

2. Installez les dépendances :
\`\`\`bash
npm install
\`\`\`

3. Lancez le serveur de développement :
\`\`\`bash
npm run dev
\`\`\`

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🏗️ Structure du projet

\`\`\`
Madina-Solution/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── layout/           # Composants de mise en page
│   │   ├── Header.tsx    # En-tête avec navigation
│   │   └── Footer.tsx    # Pied de page
│   ├── sections/         # Sections de la page
│   │   ├── Hero.tsx      # Section hero avec recherche
│   │   ├── RecentAnnouncements.tsx
│   │   └── DigitalProducts.tsx
│   └── ui/               # Composants UI réutilisables
│       ├── AnnouncementCard.tsx
│       └── ProductCard.tsx
├── data/                 # Données mock
│   ├── announcements.ts
│   └── products.ts
├── types/                # Types TypeScript
│   └── index.ts
├── public/               # Fichiers statiques
│   └── images/
└── package.json
\`\`\`

## 🎨 Fonctionnalités principales

### ✅ Implémenté

- [x] Design moderne et responsive
- [x] Header avec navigation
- [x] Section Hero avec barre de recherche avancée
- [x] Affichage des annonces récentes de professionnels
- [x] Section Produits Digitaux avec système de notation
- [x] Footer complet avec liens et informations de contact
- [x] Design fidèle à la maquette Figma

### 🔜 À venir

- [ ] Système d'authentification (connexion/inscription)
- [ ] Intégration Orange Money et MTN Mobile Money
- [ ] Système de messagerie entre clients et professionnels
- [ ] Gestion des profils professionnels
- [ ] Système de notation et d'avis
- [ ] Géolocalisation avancée
- [ ] Application mobile
- [ ] Backend API
- [ ] Base de données

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px et +)
- 📱 Tablette (768px et +)
- 💻 Desktop (1024px et +)
- 🖥️ Large Desktop (1280px et +)

## 🎯 Prochaines étapes

1. **Backend** : Développer l'API avec Node.js/Express ou Django
2. **Base de données** : Configurer PostgreSQL ou MongoDB
3. **Authentification** : Implémenter JWT et OAuth
4. **Paiements** : Intégrer Orange Money et MTN Mobile Money
5. **Notifications** : Système de notifications en temps réel
6. **SEO** : Optimiser pour les moteurs de recherche
7. **Tests** : Ajouter des tests unitaires et d'intégration
8. **Déploiement** : Déployer sur Vercel ou un serveur VPS

## 👥 Équipe

- **Emmanuel LOUA** - Fondateur
- **Oumar TRAORÉ** - Responsable des Opérations
- **Jean Baptiste LOUA** - Responsable support client
- **El Hadj Mamadou Oury Diallo** - Responsable Informatique
- **Ange Lila LOUA** - Responsable financier
- **Theophile KOLIÉ** - Responsable gestion des communautés
- **Aissata Djibaro BANGOURA** - Responsable marketing et communication

## 📞 Contact

- **Téléphone** : (+224) 628-44-03-60
- **Email** : contact@madinasolution.com
- **Adresse** : Lambangui, Conakry, République de Guinée

## 📄 Licence

© 2024 Madina Solution. Tous droits réservés.

---

**Note** : Pour ajouter de vraies images, remplacez les placeholders dans `/public/images/` par vos propres images de professionnels et de produits.
