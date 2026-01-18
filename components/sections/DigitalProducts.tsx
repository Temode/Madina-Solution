import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import { digitalProducts } from '@/data/products';

export default function DigitalProducts() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-start">
            <div className="bg-orange-500 text-white p-2 rounded-lg mr-4 flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Produits Digitaux
              </h2>
              <p className="text-gray-600 mb-4">
                Découvrez et achetez des e-books, formations vidéo, documents et contenus
                numériques créés par des talents guinéens. Vous pouvez aussi vendre vos propres
                produits !
              </p>
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Paiements acceptés :
                </span>
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Orange Money
                </span>
                <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                  MTN Mobile Money
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {digitalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href="/produits"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            <span>Voir plus de contenu</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
