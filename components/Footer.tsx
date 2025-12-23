
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] font-black">URBANVYBE</p>
          <p className="text-[9px] uppercase tracking-widest text-white/40">© 2024 Todos los derechos reservados. Protocolo Vybe-Logic.</p>
        </div>
        
        <div className="flex space-x-12">
          {[
            { name: 'Instagram', url: '#' },
            { name: 'Términos', url: '#' },
            { name: 'Envíos', url: '#' },
            { name: 'Contacto', url: '#' }
          ].map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
