import { CheckCircle } from 'lucide-react';

export default function SceneInputForm({
  currentScene,
  inputValue,
  setInputValue,
  currentOptions,
  multiSelectValues,
  setMultiSelectValues,
  sortAvailable,
  setSortAvailable,
  sortSelected,
  setSortSelected,
  onSubmitAnswer,
}) {
  if (!currentScene.inputType) return null;

  if (currentScene.inputType === 'multiselect') {
    const handleMultiSubmit = (event) => {
      event.preventDefault();
      const correct = currentScene.correctAnswers;
      const isCorrect =
        multiSelectValues.length === correct.length &&
        correct.every((answer) => multiSelectValues.includes(answer));
      onSubmitAnswer(isCorrect);
    };

    return (
      <form onSubmit={handleMultiSubmit} className="mb-4">
        <label className="block text-[#2c1810] font-cinzel font-bold mb-4 text-sm bg-[#e6d5aa]/30 p-2 rounded border border-[#2c1810]/20">
          Vyber kliknutím správné možnosti a poté odešli:
        </label>
        <div className="flex flex-wrap gap-2 mb-6">
          {currentOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => {
                if (multiSelectValues.includes(option)) {
                  setMultiSelectValues((prev) => prev.filter((value) => value !== option));
                } else {
                  setMultiSelectValues((prev) => [...prev, option]);
                }
              }}
              className={`w-10 h-10 flex items-center justify-center rounded font-bold border-2 transition-all cursor-pointer transform hover:scale-105 ${multiSelectValues.includes(option) ? 'bg-[#2c1810] text-[#e6d5aa] border-[#2c1810] shadow-md' : 'bg-[#fff9e6] text-[#2c1810] border-[#2c1810]/30 hover:border-[#2c1810]'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="bg-[#2c1810] text-[#e6d5aa] px-4 py-3 rounded font-cinzel font-bold hover:bg-[#4a3b32] transition-colors w-full flex items-center justify-center gap-2"
        >
          <CheckCircle size={18} />
          POTVRDIT ODPOVĚĎ
        </button>
      </form>
    );
  }

  if (currentScene.inputType === 'sort') {
    const handleSortSubmit = (event) => {
      event.preventDefault();
      const correct = currentScene.correctAnswers;
      const isCorrect =
        sortSelected.length === correct.length &&
        sortSelected.every((value, index) => value === correct[index]);
      onSubmitAnswer(isCorrect);
    };

    return (
      <form onSubmit={handleSortSubmit} className="mb-4 space-y-4">
        <div>
          <span className="block text-xs font-bold text-[#2c1810]/60 uppercase mb-2">
            1. K dispozici (kliknutím je přesuneš do výsledku):
          </span>
          <div className="flex flex-wrap gap-2 p-3 bg-[#fff9e6] border border-[#2c1810]/20 rounded min-h-[50px]">
            {sortAvailable.length === 0 && (
              <span className="text-sm italic text-[#2c1810]/50 my-auto">Vše přesunuto...</span>
            )}
            {sortAvailable.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setSortAvailable((prev) => prev.filter((value) => value !== item));
                  setSortSelected((prev) => [...prev, item]);
                }}
                className="px-3 py-1.5 text-sm rounded font-bold bg-[#e6d5aa] text-[#2c1810] border border-[#2c1810]/40 hover:bg-[#d6c496] transition-all cursor-pointer shadow-sm hover:shadow"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold text-[#2c1810]/60 uppercase mb-2">
            2. Tvé pořadí od prvního do desátého (kliknutím je vrátíš):
          </span>
          <div className="flex flex-col gap-1 p-3 bg-[#e6d5aa]/50 border-2 border-dashed border-[#2c1810]/40 rounded min-h-[100px]">
            {sortSelected.length === 0 && (
              <span className="text-sm italic text-[#2c1810]/50 my-auto text-center">
                Tady to zatím zeje prázdnotou...
              </span>
            )}
            {sortSelected.map((item, index) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  setSortSelected((prev) => prev.filter((value) => value !== item));
                  setSortAvailable((prev) => [...prev, item]);
                }}
                className="w-full px-3 py-2 text-sm rounded font-bold bg-[#2c1810] text-[#e6d5aa] hover:bg-red-900 transition-colors cursor-pointer flex items-center justify-start gap-3 shadow"
              >
                <span className="text-xs bg-[#e6d5aa]/20 px-2 py-0.5 rounded text-[#e6d5aa]">{index + 1}.</span>
                {item}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#2c1810] text-[#e6d5aa] px-4 py-3 rounded font-cinzel font-bold hover:bg-[#4a3b32] transition-colors w-full flex items-center justify-center gap-2 mt-2"
        >
          <CheckCircle size={18} />
          ZKONTROLOVAT POŘADÍ
        </button>
      </form>
    );
  }

  const handleClassicSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    const answer = inputValue.trim().toLowerCase();
    const isCorrect = currentScene.correctAnswers.some((correct) => correct.toLowerCase() === answer);
    onSubmitAnswer(isCorrect);
  };

  return (
    <form onSubmit={handleClassicSubmit} className="mb-4">
      <label className="block text-[#2c1810] font-cinzel font-bold mb-2 text-sm">
        {currentScene.inputType === 'number' ? 'Zadej číslo:' : 'Tvá odpověď:'}
      </label>
      <div className="flex gap-2">
        <input
          type={currentScene.inputType === 'number' ? 'number' : 'text'}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="flex-1 p-2 bg-[#fff9e6] border border-[#2c1810] rounded font-cinzel text-[#2c1810] focus:outline-none focus:ring-2 focus:ring-[#8b0000]/30"
          placeholder={currentScene.inputType === 'number' ? '0' : 'Napiš odpověď...'}
          autoFocus
        />
        <button
          type="submit"
          className="bg-[#2c1810] text-[#e6d5aa] px-4 py-2 rounded font-cinzel font-bold hover:bg-[#4a3b32] transition-colors"
        >
          POTVRDIT
        </button>
      </div>
    </form>
  );
}
