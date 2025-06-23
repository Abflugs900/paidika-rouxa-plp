import React, { useState } from 'react';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '@/data/products';
import { Button } from './Button';

interface ProductGridProps {
  products: Product[];
  totalProducts?: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  totalProducts = products.length 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [wishlistedProducts, setWishlistedProducts] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState('default');

  const handleWishlistToggle = (productId: string) => {
    setWishlistedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {totalProducts} προϊόντα
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="p-2"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="p-2"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="default">Ταξινόμηση</option>
              <option value="price-asc">Τιμή: Χαμηλή προς Υψηλή</option>
              <option value="price-desc">Τιμή: Υψηλή προς Χαμηλή</option>
              <option value="name-asc">Όνομα: Α-Ω</option>
              <option value="name-desc">Όνομα: Ω-Α</option>
              <option value="newest">Νεότερα πρώτα</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onWishlistToggle={handleWishlistToggle}
              isWishlisted={wishlistedProducts.has(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="flex bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="w-32 h-32 bg-gray-100 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/128x128/f3f4f6/9ca3af?text=${encodeURIComponent(product.title.slice(0, 10))}`;
                  }}
                />
              </div>
              <div className="flex-1 p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Κωδικός: {product.code}</p>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    {product.price.toFixed(2)}€
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleWishlistToggle(product.id)}
                    className="p-2"
                  >
                    <Heart className={`h-4 w-4 ${wishlistedProducts.has(product.id) ? 'fill-current text-red-500' : 'text-gray-400'}`} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No products message */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Grid className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Δεν βρέθηκαν προϊόντα
          </h3>
          <p className="text-gray-500">
            Δοκιμάστε να αλλάξετε τα φίλτρα σας ή να αναζητήσετε κάτι άλλο.
          </p>
        </div>
      )}
    </div>
  );
};

