
import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-black border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="w-full md:w-1/2 bg-[#0a0a0a]">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-bold">{product.category}</span>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">{product.name}</h2>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-white/60 leading-relaxed uppercase tracking-tight font-light">
              {product.description}
            </p>
            <p className="text-2xl font-light tracking-widest text-white/90">
              ${product.price}
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <button 
              className="w-full bg-white text-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/90 transition-all active:scale-[0.98]"
              onClick={() => alert('Integración de pago no disponible en esta versión.')}
            >
              Añadir a la Colección
            </button>
            <button 
              className="w-full border border-white/10 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              onClick={onClose}
            >
              Volver a la Galería
            </button>
          </div>
          
          <div className="pt-12 flex items-center space-x-4 opacity-30">
            <div className="h-[1px] flex-grow bg-white/20"></div>
            <span className="text-[8px] uppercase tracking-widest">Protocolo UrbanVybe v1.0</span>
            <div className="h-[1px] flex-grow bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
