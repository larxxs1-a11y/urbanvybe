
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
      <div className="flex flex-col items-center justify-center py-40 border-y border-white/5 bg-white/[0.01]">
        <div className="space-y-4 text-center">
          <p className="text-[10px] font-black tracking-[0.6em] uppercase text-white/20">Estado Actual</p>
          <h3 className="text-2xl font-light tracking-widest uppercase opacity-40 italic">Inventario en Cero</h3>
          <p className="text-[9px] uppercase tracking-widest text-white/20 max-w-xs mx-auto leading-relaxed">
            Esperando el próximo drop. Accede al panel de administración para subir nuevos diseños.
          </p>
        </div>
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
