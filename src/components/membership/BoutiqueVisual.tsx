import type { FC } from 'react';

export const BoutiqueVisual: FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden select-none">
      {/* Luxury Boutique Center Image */}
      <img
        src="/boutique-center.jpg"
        alt="Onzone Luxury Boutique Showroom"
        className="h-full w-full object-cover object-center lg:object-[center_35%] scale-[1.02] transition-transform duration-1000 ease-out hover:scale-105"
      />

      {/* Subtle Editorial Gradient Vignette to seamlessly blend into surrounding cream panels */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f7f3ec] via-[#f7f3ec]/60 to-transparent dark:from-[#0e1a30] dark:via-[#0e1a30]/60 dark:to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#f7f3ec] via-[#f7f3ec]/60 to-transparent dark:from-[#0e1a30] dark:via-[#0e1a30]/60 dark:to-transparent pointer-events-none hidden lg:block" />
      
      {/* Top & Bottom Ambient Falloff */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f7f3ec]/80 to-transparent dark:from-[#0e1a30]/80 dark:to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f3ec]/90 via-[#f7f3ec]/40 to-transparent dark:from-[#0e1a30]/90 dark:via-[#0e1a30]/40 dark:to-transparent pointer-events-none" />

      {/* Draped Linen Editorial Tag Badge (near bottom counter area) */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center font-serif text-[10px] tracking-[0.3em] uppercase text-[#77736d] dark:text-[#a8a094] py-1 px-4 border-y border-[#c5a46d]/40 backdrop-blur-xs bg-[#f7f3ec]/60 dark:bg-[#0e1a30]/60 rounded-xs">
          <span>Elegance Lives Forever</span>
        </div>
      </div>
    </div>
  );
};
