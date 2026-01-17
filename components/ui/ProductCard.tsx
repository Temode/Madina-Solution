'use client';

import { useState } from 'react';
import { DigitalProduct } from '@/types';
import { Star, ShoppingCart, Download, Play, FileText } from 'lucide-react';

interface ProductCardProps {
  product: DigitalProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN').format(price);
  };

  const getCategoryConfig = (category: string) => {
    const configs = {
      ebook: {
        label: 'E-BOOK',
        color: 'from-accent-orange to-accent-yellow',
        icon: FileText,
        bgPattern: '📚',
      },
      video: {
        label: 'FORMATION VIDÉO',
        color: 'from-accent-purple to-primary-600',
        icon: Play,
        bgPattern: '🎬',
      },
      document: {
        label: 'DOCUMENT',
        color: 'from-primary-600 to-primary-700',
        icon: Download,
        bgPattern: '📄',
      },
    };
    return configs[category as keyof typeof configs] || configs.ebook;
  };

  const config = getCategoryConfig(product.category);
  const Icon = config.icon;

  return (
    <div
      className="card-interactive group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container avec design moderne */}
      <div className={`relative h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br ${config.color}`}>
        {/* Pattern de fond */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-9xl">{config.bgPattern}</span>
        </div>

        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold shadow-lg border border-white/30">
            <Icon className="w-3.5 h-3.5" />
            <span>{config.label}</span>
          </div>
        </div>

        {/* Bouton d'action au survol */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="btn-primary shadow-soft-xl">
            <ShoppingCart className="w-4 h-4" />
            <span>Acheter maintenant</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Titre */}
        <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>

        {/* Auteur */}
        <p className="text-sm text-neutral-600 mb-4 flex items-center gap-1">
          <span>Par</span>
          <span className="font-semibold text-neutral-700">{product.author}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-accent-yellow text-accent-yellow'
                    : 'text-neutral-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-neutral-900">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-neutral-500">({product.totalReviews} avis)</span>
        </div>

        {/* Prix */}
        <div className="flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-neutral-900 font-display">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-neutral-600 font-medium">GNF</span>
            </div>
          </div>
          <button className="p-2.5 rounded-xl bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
