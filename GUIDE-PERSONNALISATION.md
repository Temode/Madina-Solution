# Guide de personnalisation - Madina Solution

Ce guide vous aidera à personnaliser et finaliser votre plateforme Madina Solution.

## 🖼️ 1. Ajouter les vraies images

### Images nécessaires

Remplacez les placeholders dans `/public/images/` par vos vraies images :

#### Image de fond Hero (obligatoire)
- **Fichier** : `/public/images/hero-bg.jpg`
- **Dimensions recommandées** : 1920x1080px
- **Format** : JPG ou PNG
- **Description** : Une belle photo de Conakry ou d'un paysage urbain guinéen

#### Images des annonces (5 images)
- `/public/images/staffeur.jpg` (256x256px)
- `/public/images/frigoriste.jpg` (256x256px)
- `/public/images/macon.jpg` (256x256px)
- `/public/images/chaudronnier.jpg` (256x256px)
- `/public/images/cabinet.jpg` (256x256px)

**Format** : JPG ou PNG, optimisées pour le web

#### Images des produits digitaux (5 images)
- `/public/images/electricite-guide.jpg` (256x256px)
- `/public/images/entreprise-video.jpg` (256x256px)
- `/public/images/contrats.jpg` (256x256px)
- `/public/images/hadith.jpg` (256x256px)
- `/public/images/javascript.jpg` (256x256px)

**Format** : JPG ou PNG, optimisées pour le web

### Optimisation des images

Avant d'ajouter vos images, optimisez-les avec :
- [TinyPNG](https://tinypng.com/) pour réduire la taille
- [Squoosh](https://squoosh.app/) pour compression avancée

## 🎨 2. Personnaliser les couleurs

Les couleurs principales sont dans Tailwind CSS. Pour les modifier :

### Couleur principale (Bleu)
Recherchez `blue-600` et `blue-700` dans tous les fichiers et remplacez par votre couleur :

\`\`\`typescript
// Exemple de remplacement
'bg-blue-600' → 'bg-[#VOTRE_COULEUR]'
'text-blue-600' → 'text-[#VOTRE_COULEUR]'
\`\`\`

### Créer un thème personnalisé
Créez un fichier `tailwind.config.js` à la racine :

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          500: '#2196F3',
          600: '#1976D2', // Votre couleur principale
          700: '#1565C0',
        },
      },
    },
  },
};
\`\`\`

Puis remplacez `blue-600` par `primary-600` dans vos composants.

## 📝 3. Modifier les données

### Annonces
Modifiez `/data/announcements.ts` :

\`\`\`typescript
{
  id: '1',
  title: 'Votre titre',
  location: 'Ville',
  city: 'Région',
  views: 1420,
  image: '/images/votre-image.jpg',
  isUrgent: true, // ou false
}
\`\`\`

### Produits digitaux
Modifiez `/data/products.ts` :

\`\`\`typescript
{
  id: '1',
  title: 'Titre du produit',
  author: 'Nom de l\'auteur',
  price: 50000, // Prix en GNF
  rating: 4.8,
  totalReviews: 56,
  image: '/images/votre-image.jpg',
  category: 'ebook', // ou 'video', 'document'
}
\`\`\`

## 🔗 4. Ajouter les vraies URLs

Actuellement, tous les liens utilisent des URLs temporaires. Modifiez-les dans :

### Header (`components/layout/Header.tsx`)
\`\`\`typescript
<Link href="/btp">BTP</Link>
<Link href="/connexion">Se connecter</Link>
\`\`\`

### Footer (`components/layout/Footer.tsx`)
\`\`\`typescript
<Link href="/a-propos">À propos</Link>
<a href="https://facebook.com/votre-page">Facebook</a>
\`\`\`

## 🎯 5. Implémenter la recherche

Dans `components/sections/Hero.tsx`, la fonction `handleSearch` est un placeholder :

\`\`\`typescript
const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO: Implémenter la vraie logique de recherche
  // Exemple :
  router.push(\`/recherche?service=\${service}&location=\${location}&category=\${category}\`);
};
\`\`\`

## 📱 6. Tester le responsive

Testez votre site sur différentes tailles d'écran :

\`\`\`bash
npm run dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000) et utilisez les DevTools :
- **Mobile** : iPhone SE (375px)
- **Tablette** : iPad (768px)
- **Desktop** : 1280px et 1920px

## 🚀 7. Déploiement

### Déploiement sur Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Importez le projet
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

### Déploiement sur VPS

\`\`\`bash
# Build de production
npm run build

# Démarrer en production
npm start
\`\`\`

Utilisez PM2 pour le garder actif :

\`\`\`bash
npm install -g pm2
pm2 start npm --name "madina-solution" -- start
\`\`\`

## 🔐 8. Variables d'environnement

Créez un fichier `.env.local` pour vos secrets :

\`\`\`env
# API
NEXT_PUBLIC_API_URL=https://api.madinasolution.com

# Paiements
ORANGE_MONEY_API_KEY=your_key_here
MTN_MONEY_API_KEY=your_key_here

# Base de données
DATABASE_URL=postgresql://user:password@localhost:5432/madina
\`\`\`

**Important** : Ne commitez jamais le fichier `.env.local` !

## 📊 9. Ajouter Google Analytics

Dans `app/layout.tsx`, ajoutez :

\`\`\`typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src=\`https://www.googletagmanager.com/gtag/js?id=G-VOTRE_ID\`
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VOTRE_ID');
          \`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## 🆘 Support et questions

Pour toute question :
- **Email** : contact@madinasolution.com
- **Téléphone** : (+224) 628-44-03-60

## ✅ Checklist avant le lancement

- [ ] Toutes les images sont ajoutées et optimisées
- [ ] Les couleurs sont personnalisées selon votre charte graphique
- [ ] Les données mock sont remplacées par de vraies données
- [ ] Tous les liens sont fonctionnels
- [ ] Le site est testé sur mobile, tablette et desktop
- [ ] Google Analytics est configuré
- [ ] Les variables d'environnement sont configurées
- [ ] Le site est déployé et accessible
- [ ] Les paiements Orange Money / MTN Money sont configurés
- [ ] Le backend est développé et connecté

---

**Bon développement et succès à Madina Solution ! 🚀**
