import { ArrowRight } from 'lucide-react';

export default function ChoiceButton({ choice, canAfford, effectiveCost, onSelect }) {
  return (
    <button
      onClick={() => canAfford && onSelect(choice)}
      disabled={!canAfford}
      className={`w-full text-left p-0.5 group relative transition-transform duration-200 ${canAfford ? 'active:scale-[0.99] hover:translate-x-1' : 'opacity-60 cursor-not-allowed grayscale'}`}
    >
      <div
        className={`absolute inset-0 border border-[#2c1810] rounded bg-[#fff9e6] shadow-sm ${canAfford ? 'group-hover:shadow-md' : ''} transition-all`}
      ></div>
      <div className="relative p-3 pl-4 pr-8 flex items-center justify-between font-cinzel font-bold text-[#2c1810] z-10 text-sm">
        <span className={!canAfford ? 'text-[#2c1810]/70' : ''}>
          {choice.text}
          {effectiveCost > 0 && (
            <span className={canAfford ? 'text-red-800 ml-2' : 'text-red-800/50 ml-2'}>
              (-{effectiveCost} zl)
            </span>
          )}
          {choice.lootGold && <span className="text-green-800 ml-2">(+{choice.lootGold} zl)</span>}
        </span>
        {canAfford && (
          <ArrowRight
            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8b0000]"
            size={16}
            strokeWidth={2.5}
          />
        )}
      </div>
    </button>
  );
}
