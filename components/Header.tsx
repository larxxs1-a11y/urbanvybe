
import React from 'react';
import { ViewMode } from '../types';

interface HeaderProps {
  viewMode: ViewMode;
  toggleView: () => void;
  isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ viewMode, toggleView, isAdmin }) => {
  const scrollToVision = () => {
    const visionElement = document.getElementById('vision');
    if (visionElement) {
      visionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 h-20 flex items-center justify-between">
      <div 
        className="flex flex-col cursor-pointer" 
        onClick={scrollToTop}
      >
        <h1 className="text-2xl font-black tracking-tighter leading-none">URBANVYBE</h1>
        <span className="text-[10px] tracking-[0.3em] font-light text-white/50 uppercase">Colectivo Streetwear</span>
      </div>

      <nav className="flex items-center space-x-12">
        {viewMode === 'catalog' && (
          <button 
            onClick={scrollToVision}
            className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40 hover:text-white transition-all hidden md:block"
          >
            Visión
          </button>
        )}
        <button 
          onClick={() => toggleView()}
          className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${viewMode === 'admin' ? 'text-white' : 'text-white/40 hover:text-white'}`}
        >
          {viewMode === 'admin' ? 'Salir Admin' : (isAdmin ? 'Panel Admin' : 'Acceder')}
        </button>
      </nav>
    </header>
  );
};

export default Header;
