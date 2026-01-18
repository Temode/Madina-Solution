import { DigitalProduct } from '@/types';

interface ProductCardProps {
  product: DigitalProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN').format(price);
  };

  const getCategoryBadge = (category: string) => {
    const badges = {
      ebook: { label: 'E-BOOK', color: 'bg-orange-500' },
      video: { label: 'FORMATION VIDÉO', color: 'bg-purple-500' },
      document: { label: 'DOCUMENT', color: 'bg-blue-500' },
    };
    return badges[category as keyof typeof badges] || badges.ebook;
  };

  const badge = getCategoryBadge(product.category);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image à venir</span>
        </div>
        <div className={`absolute top-3 left-3 ${badge.color} text-white text-xs font-bold px-3 py-1 rounded`}>
          {badge.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">Par {product.author}</p>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)} <span className="text-sm font-normal text-gray-600">GNF</span>
            </p>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-900">{product.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({product.totalReviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
