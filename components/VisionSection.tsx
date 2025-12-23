
import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-32 border-t border-white/10 mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-black">Filosofía</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none italic">
            Redefiniendo el <br /> Vacío Urbano.
          </h2>
        </div>
        
        <div className="space-y-8 max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-white/60 leading-relaxed uppercase tracking-tight font-light text-justify md:text-center">
            URBANVYBE ES UN PROTOCOLO. UNA RESPUESTA AL SILENCIO ARQUITECTÓNICO DE LA METRÓPOLIS MODERNA. DISEÑAMOS PARA EL PIONERO DEL CONCRETO, MEZCLANDO MATERIALES DE ALTA UTILIDAD CON ESTÉTICA MINIMALISTA. 
          </p>
          
          <p className="text-sm md:text-base text-white/60 leading-relaxed uppercase tracking-tight font-light text-justify md:text-center">
            CADA PIEZA ES UN FRAGMENTO DE UNA NARRATIVA MAYOR. NO SOLO CREAMOS ROPA; ARQUITECTURAMOS EL CUERPO PARA LAS CALLES DEL MAÑANA.
          </p>
        </div>

        <div className="pt-12 flex justify-center items-center space-x-8 opacity-40">
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-black">01</span>
            <span className="text-[8px] uppercase tracking-widest">Utilidad</span>
          </div>
          <div className="h-8 w-[1px] bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-black">02</span>
            <span className="text-[8px] uppercase tracking-widest">Minimalismo</span>
          </div>
          <div className="h-8 w-[1px] bg-white/20"></div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] font-black">03</span>
            <span className="text-[8px] uppercase tracking-widest">Vybe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
