
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-32 flex flex-col items-center justify-center text-center space-y-6">
      <div className="overflow-hidden">
        <h2 className="text-[12vw] md:text-[15vw] font-black tracking-tighter leading-[0.8] uppercase italic animate-in slide-in-from-bottom-full duration-1000">
          Urban<br />Vybe
        </h2>
      </div>
      <div className="space-y-4 max-w-lg animate-in fade-in duration-1000 delay-500">
        <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold text-white/40">
          Drop 01 / Colección Otoño 2024
        </p>
        <div className="h-[1px] w-12 bg-white/20 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
