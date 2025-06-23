import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { Badge } from './Badge';

interface ProductCardProps {
  product: Product;
  onWishlistToggle?: (productId: string) => void;
  isWishlisted?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onWishlistToggle,
  isWishlisted = false 
}) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=${encodeURIComponent(product.title.slice(0, 20))}`;
          }}
        />
        
        {/* Wishlist button */}
        <button
          onClick={() => onWishlistToggle?.(product.id)}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 ${
            isWishlisted 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Sale badge if there's an original price */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-2 left-2">
            <Badge variant="destructive">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-teal-600 cursor-pointer transition-colors">
          {product.title}
        </h3>
        
        <p className="text-xs text-gray-500">
          Κωδικός: {product.code}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {product.price.toFixed(2)}€
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toFixed(2)}€
              </span>
            )}
          </div>
        </div>

        {/* Brand and colors */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{product.brand}</span>
          <div className="flex items-center space-x-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-300"
                style={{ backgroundColor: getColorValue(color) }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to convert Greek color names to CSS colors
function getColorValue(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    'ροζ': '#ec4899',
    'άσπρο': '#ffffff',
    'λευκό': '#ffffff',
    'γκρι': '#6b7280',
    'μαύρο': '#000000',
    'μπλε': '#3b82f6',
    'κόκκινο': '#ef4444',
    'πράσινο': '#10b981',
    'κίτρινο': '#f59e0b',
    'μωβ': '#8b5cf6',
    'πορτοκαλί': '#f97316',
    'καφέ': '#92400e',
    'μπεζ': '#f3e8ff',
    'ναβί': '#1e3a8a',
    'κρέμ': '#fef3c7',
    'πολύχρωμο': '#6366f1'
  };
  
  return colorMap[colorName.toLowerCase()] || '#9ca3af';
}

