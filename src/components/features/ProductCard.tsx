import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '../ui/Button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  onViewDetail: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetail,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
          onClick={() => onViewDetail(product.id)}
        />
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            -{product.discount}%
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">
            Rp {product.price.toLocaleString()}
          </span>
          <Button
            variant="primary"
            size="sm"
            icon={ShoppingCart}
            onClick={() => onAddToCart(product.id)}
          >
            Tambah
          </Button>
        </div>
      </div>
    </div>
  );
};