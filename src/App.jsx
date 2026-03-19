import { useEffect, useRef, useState } from 'react';
import './lib/loadFonts';
import ChoiceButton from './components/ChoiceButton';
import GameHeader from './components/GameHeader';
import InventoryBar from './components/InventoryBar';
import SceneInputForm from './components/SceneInputForm';
import SceneVisual from './components/SceneVisual';
import { consumables, usableItems } from './constants/items';
import { storyData } from './data/storyData';

const bossSceneIds = ['combat_start', 'combat_boss_turn', 'ch4_boss_intro', ...Object.keys(storyData).filter((key) => key.startsWith('res_'))];

function removeSingleInventoryItem(inventory, item) {
  const index = inventory.indexOf(item);

  if (index === -1) {
    return inventory;
  }

  const nextInventory = [...inventory];
  nextInventory.splice(index, 1);
  return nextInventory;
}

export default function App() {
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const [inventory, setInventory] = useState([]);
  const [gold, setGold] = useState(5);
  const [hearts, setHearts] = useState(5);
  const [closedLocations, setClosedLocations] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [multiSelectValues, setMultiSelectValues] = useState([]);
  const [sortAvailable, setSortAvailable] = useState([]);
  const [sortSelected, setSortSelected] = useState([]);
  const [bossHp, setBossHp] = useState(5);
  const [potionActive, setPotionActive] = useState(false);
  const [armorUsed, setArmorUsed] = useState(false);
  const [dodgedTurn, setDodgedTurn] = useState(false);
  const [combatLog, setCombatLog] = useState('');

  const rightColumnRef = useRef(null);

  useEffect(() => {
    if (hearts <= 0 && currentSceneId !== 'game_over' && currentSceneId !== 'reset') {
      setCurrentSceneId('game_over');
    }
  }, [hearts, currentSceneId]);

  useEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollTop = 0;
    }

    setInputValue('');

    const scene = storyData[currentSceneId] || storyData.start;

    if (scene.inputType === 'multiselect') {
      const shuffled = [...scene.options].sort(() => Math.random() - 0.5);
      setCurrentOptions(shuffled);
      setMultiSelectValues([]);
    } else if (scene.inputType === 'sort') {
      const shuffled = [...scene.options].sort(() => Math.random() - 0.5);
      setSortAvailable(shuffled);
      setSortSelected([]);
    }
  }, [currentSceneId]);

  const currentScene = storyData[currentSceneId] || storyData.start;

  const getEffectiveCost = (choice) => {
    if (!choice.cost) return 0;

    let cost = choice.cost;

    if (currentSceneId === 'shop' && closedLocations.includes('shop_riddle_solved')) {
      cost -= 1;
    }

    return Math.max(0, cost);
  };

  const handleUseItem = (item) => {
    let consumed = false;

    if (item === 'Lektvar zdraví') {
      if (hearts < 5) {
        setHearts((prev) => Math.min(5, prev + 2));
        consumed = true;
      }
    } else if (item === 'Svačina' || item === 'Zářivá houba') {
      if (hearts < 5) {
        setHearts((prev) => Math.min(5, prev + 1));
        consumed = true;
      }
    } else if (item === 'Lektvar bublin') {
      if (hearts < 5) {
        setHearts(5);
        consumed = true;
      }
    }

    if (consumed) {
      setInventory((prev) => removeSingleInventoryItem(prev, item));
    }
  };

  const handleChoice = (choice) => {
    if (choice.target === 'reset') {
      setHearts(5);
      setGold(5);
      setInventory([]);
      setClosedLocations([]);
      setCurrentSceneId('start');
      setBossHp(5);
      setPotionActive(false);
      setArmorUsed(false);
      setDodgedTurn(false);
      setCombatLog('');
      return;
    }

    let nextTarget = choice.target;

    if (nextTarget === 'combat_boss_turn' && bossHp <= 0) {
      nextTarget = 'boss_defeated';
    }

    if (choice.randomTargets) {
      const rand = Math.random();
      let cumulativeWeight = 0;

      for (const randomTarget of choice.randomTargets) {
        cumulativeWeight += randomTarget.weight;
        if (rand <= cumulativeWeight) {
          nextTarget = randomTarget.target;
          break;
        }
      }
    }

    const nextSceneData = storyData[nextTarget];

    if (nextSceneData?.combat) {
      const combat = nextSceneData.combat;

      if (combat.damageBoss !== undefined) {
        setBossHp((prev) => Math.max(0, prev - combat.damageBoss));
      }

      if (combat.removePotion) {
        setInventory((prev) => removeSingleInventoryItem(prev, combat.removePotion));
      }

      if (combat.bossAttack) {
        const bossAttacks = [
          'Chňapka po tobě hodil svou špinavou botu! Trefil tě přímo do ramene. (-1 život)',
          'Skřet se ohnal svou velkou sítí a švihnul tě přes nohy. Zavrávoral jsi. (-1 život)',
          'Chňapka po tobě vztekle skočil a ošklivě tě poškrábal! (-1 život)',
        ];
        const randomAttack = bossAttacks[Math.floor(Math.random() * bossAttacks.length)];
        setCombatLog(randomAttack);
        setHearts((prev) => Math.max(0, prev - 1));
      }
    }

    const effectiveCost = getEffectiveCost(choice);

    if (effectiveCost > 0) {
      if (gold >= effectiveCost) {
        setGold((prev) => prev - effectiveCost);
      } else {
        return;
      }
    }

    if (choice.lootGold) setGold((prev) => prev + choice.lootGold);

    if (choice.removeItem) {
      setInventory((prev) => removeSingleInventoryItem(prev, choice.removeItem));
    }

    if (choice.closeLoc) {
      setClosedLocations((prev) => [...prev, choice.closeLoc]);
    }

    setCurrentSceneId(nextTarget);

    if (choice.loot) {
      if (consumables.includes(choice.loot) || !inventory.includes(choice.loot)) {
        setInventory((prev) => [...prev, choice.loot]);
      }
    }

    if (choice.damage) {
      setHearts((prev) => Math.max(0, prev - choice.damage));
    }
  };

  const handleCustomSubmit = (isCorrect) => {
    if (isCorrect) {
      handleChoice({
        target: currentScene.successTarget,
        lootGold: currentScene.winGold,
        loot: currentScene.winLoot,
        closeLoc: `${currentScene.id}_solved`,
      });
      return;
    }

    handleChoice({
      target: currentScene.failureTarget,
      damage: currentScene.failDamage,
    });
  };

  let mappedChoices = currentScene.choices;
  if (currentSceneId.startsWith('res_') && bossHp <= 0) {
    mappedChoices = [{ text: 'Skřet padl poražen na zem!', target: 'boss_defeated' }];
  }

  const visibleChoices = mappedChoices
    ? mappedChoices.filter((choice) => {
        if (choice.alwaysShow) return true;
        if (choice.reqOpen && closedLocations.includes(choice.reqOpen)) return false;
        if (choice.reqClosed && !closedLocations.includes(choice.reqClosed)) return false;
        if (choice.req && !inventory.includes(choice.req)) return false;
        if (choice.req2 && !inventory.includes(choice.req2)) return false;
        if (choice.reqState === 'potionActive' && !potionActive) return false;
        if (choice.reqState === 'potionInactive' && potionActive) return false;
        if (choice.loot && inventory.includes(choice.loot) && !consumables.includes(choice.loot)) {
          return false;
        }
        return true;
      })
    : [];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center font-serif bg-[#1a1a1a] p-2 md:p-4"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        backgroundColor: '#2a2a2a',
      }}
    >
      <div
        className="w-full max-w-7xl aspect-video bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.6)] relative flex flex-col overflow-hidden rounded-md border-8 border-[#1a110d]"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')" }}
      >
        <GameHeader gold={gold} hearts={hearts} />

        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/3 border-r-4 border-double border-[#2c1810] relative shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-10 hidden md:block group">
            <SceneVisual
              type={currentScene.imageType}
              bossHp={bossHp}
              showBossHp={bossSceneIds.includes(currentSceneId)}
              imageSrc={currentScene.imageSrc}
              imageAlt={currentScene.imageAlt || currentScene.title}
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col relative bg-[#f4e4bc]">
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar" ref={rightColumnRef}>
              <h2 className="text-2xl font-bold text-[#2c1810] mb-3 font-cinzel border-b border-[#2c1810]/20 pb-2">
                {currentScene.title}
              </h2>

              <p className="text-lg text-[#2c1810] leading-snug mb-4 font-crimson text-justify whitespace-pre-line">
                {currentSceneId === 'combat_boss_turn' ? combatLog : currentScene.text}
              </p>

              <div className="space-y-2 mt-auto pt-4">
                <SceneInputForm
                  currentScene={currentScene}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  currentOptions={currentOptions}
                  multiSelectValues={multiSelectValues}
                  setMultiSelectValues={setMultiSelectValues}
                  sortAvailable={sortAvailable}
                  setSortAvailable={setSortAvailable}
                  sortSelected={sortSelected}
                  setSortSelected={setSortSelected}
                  onSubmitAnswer={handleCustomSubmit}
                />

                {visibleChoices.map((choice, index) => {
                  const effectiveCost = getEffectiveCost(choice);
                  const canAfford = !effectiveCost || gold >= effectiveCost;

                  return (
                    <ChoiceButton
                      key={`${choice.text}-${index}`}
                      choice={choice}
                      canAfford={canAfford}
                      effectiveCost={effectiveCost}
                      onSelect={handleChoice}
                    />
                  );
                })}
              </div>
            </div>

            <InventoryBar inventory={inventory} usableItems={usableItems} onUseItem={handleUseItem} />
          </div>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-50"></div>
    </div>
  );
}
