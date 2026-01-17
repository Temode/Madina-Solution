'use client';

import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { digitalProducts } from '@/data/products';
import { BookOpen, ArrowRight, CreditCard, Sparkles } from 'lucide-react';

export default function DigitalProducts() {
  return (
    <section className="section bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        {/* Header premium */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card p-8 md:p-10 bg-gradient-to-br from-white to-neutral-50/50 border border-neutral-200/50">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Icon et titre */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-orange to-accent-yellow rounded-3xl blur-xl opacity-20"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-accent-orange to-accent-yellow rounded-3xl flex items-center justify-center shadow-soft-lg">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-orange/10 rounded-full text-accent-orange text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Nouveau</span>
                </div>
                <h2 className="text-display-sm md:text-display-md font-display text-neutral-900 mb-3">
                  Produits Digitaux
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Découvrez et achetez des e-books, formations vidéo, documents et contenus
                  numériques créés par des talents guinéens. Vous pouvez aussi vendre vos propres
                  produits !
                </p>

                {/* Badges de paiement */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-neutral-600" />
                    <span className="text-sm font-semibold text-neutral-700">
                      Paiements acceptés :
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-gradient-to-r from-accent-orange to-accent-yellow rounded-xl text-white text-sm font-bold shadow-soft flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      Orange Money
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-accent-yellow to-yellow-500 rounded-xl text-neutral-900 text-sm font-bold shadow-soft flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                      MTN Mobile Money
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-12">
          {digitalProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/produits"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-2xl font-bold text-lg shadow-soft-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            <span>Découvrir tous les produits</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-sm text-neutral-600">
            Plus de 100 produits digitaux disponibles
          </p>
        </div>
      </div>
    </section>
  );
}
