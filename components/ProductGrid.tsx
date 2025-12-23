
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 opacity-20">
        <p className="text-xl font-light tracking-widest uppercase text-center">El vacío está desierto</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={() => onProductSelect(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
