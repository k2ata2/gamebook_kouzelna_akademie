import {
  Backpack,
  Ban,
  Bug,
  CircleDot,
  FlaskConical,
  Flower,
  Sparkles,
  Sun,
  Utensils,
  Zap,
} from 'lucide-react';

function getItemIcon(itemName) {
  switch (itemName) {
    case 'Skřetí chlup':
      return <Bug size={16} className="text-green-800" />;
    case 'Svačina':
      return <Utensils size={16} className="text-orange-500" />;
    case 'Zářivá houba':
      return <Flower size={16} className="text-cyan-400" />;
    case 'Kouzlo Světlušky':
      return <Sparkles size={16} className="text-yellow-400" />;
    case 'Skákavá žabka':
      return <Zap size={16} className="text-green-500" />;
    case 'Odpuzovač':
      return <Ban size={16} className="text-red-500" />;
    case 'Lektvar bublin':
      return <FlaskConical size={16} className="text-blue-400" />;
    case 'Lektvar zdraví':
      return <FlaskConical size={16} className="text-red-500" />;
    case 'Laso z pavučiny':
      return <CircleDot size={16} className="text-gray-300" />;
    case 'Kouzelná baterka':
      return <Sun size={16} className="text-yellow-500" />;
    default:
      return <Backpack size={16} />;
  }
}

export default function InventoryBar({ inventory, usableItems, onUseItem }) {
  return (
    <div className="flex-none bg-[#e6d5aa] border-t-4 border-double border-[#2c1810] p-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <div className="font-bold font-cinzel text-[10px] tracking-wider text-[#2c1810] mb-2 flex items-center gap-2 uppercase opacity-80">
        <Backpack size={12} /> Inventář
      </div>

      <div className="flex flex-wrap gap-2">
        {inventory.length === 0 ? (
          <div className="text-[#2c1810]/50 italic font-crimson text-xs p-1">Prázdný batoh...</div>
        ) : (
          inventory.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-1.5 bg-[#f4e4bc] border border-[#2c1810] px-2 py-1 rounded shadow-sm hover:bg-white transition-colors cursor-default"
            >
              <div className="text-[#2c1810] opacity-70">{getItemIcon(item)}</div>
              <span className="font-cinzel font-bold text-xs text-[#2c1810]">{item}</span>

              {usableItems.includes(item) && (
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    onUseItem(item);
                  }}
                  className="ml-1 px-1.5 py-0.5 bg-red-100 hover:bg-red-200 border border-red-800 text-red-900 text-[10px] font-bold rounded transition-colors animate-pulse"
                >
                  {['Svačina', 'Zářivá houba'].includes(item) ? 'SNÍST' : 'POUŽÍT'}
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
