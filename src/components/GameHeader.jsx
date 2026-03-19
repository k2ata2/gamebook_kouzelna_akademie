import { Coins, Heart } from 'lucide-react';

export default function GameHeader({ gold, hearts }) {
  return (
    <header className="h-12 flex-none bg-[#e6d5aa] border-b-4 border-double border-[#2c1810] flex justify-between items-center px-4 shadow-sm z-20">
      <div className="flex items-center gap-3">
        <h1 className="text-lg md:text-xl font-black tracking-widest uppercase text-[#2c1810] font-cinzel">
          Kouzelnická akademie
        </h1>
        <span className="hidden md:inline h-4 w-[1px] bg-[#2c1810]/30"></span>
        <span className="hidden md:inline text-xs italic font-crimson text-[#4a3b32] font-bold">
          Záchrana Jiskřičky
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-bold text-[#2c1810]" title="Zlaťáky">
          <Coins size={16} className="text-yellow-700" />
          <span>{gold}</span>
        </div>

        <div className="flex items-center gap-2" title="Životy">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                size={18}
                fill={i < hearts ? '#8b0000' : 'transparent'}
                className={i < hearts ? 'text-[#8b0000] drop-shadow-sm' : 'text-[#2c1810]/20'}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
