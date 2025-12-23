
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden bg-[#111] mb-6 relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] bg-white text-black px-2 py-1 font-black tracking-tighter uppercase">
            Nuevo Drop
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-bold tracking-wider uppercase transition-colors group-hover:text-white/70">{product.name}</h3>
          <p className="text-[11px] text-white/50 font-light max-w-[200px] leading-tight uppercase tracking-tight">
            {product.description}
          </p>
        </div>
        <span className="text-sm font-light tracking-widest text-white/80">${product.price}</span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          className="text-[10px] tracking-[0.2em] font-black uppercase underline-offset-4 underline"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
