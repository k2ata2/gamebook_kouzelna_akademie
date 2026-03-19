import {
  BookOpen,
  Bug,
  DoorOpen,
  Feather,
  FlaskConical,
  Footprints,
  HelpCircle,
  MessageCircle,
  Mountain,
  Scroll,
  Skull,
  Sun,
  Sword,
  Trees,
  Waves,
} from 'lucide-react';

export default function SceneVisual({ type, bossHp, showBossHp }) {
  const iconProps = { strokeWidth: 1.5, className: 'text-[#2c1810] opacity-80' };
  let content;
  let title;

  switch (type) {
    case 'town':
      title = 'NÁDVOŘÍ';
      content = <BookOpen size={80} {...iconProps} />;
      break;
    case 'shop':
      title = 'KRÁMEK';
      content = <FlaskConical size={80} {...iconProps} />;
      break;
    case 'alley':
      title = 'TEMNÝ KOUT';
      content = <Feather size={80} {...iconProps} />;
      break;
    case 'gate':
      title = 'BRÁNA';
      content = <Trees size={80} {...iconProps} />;
      break;
    case 'mountains':
      title = 'TEMNÝ HVOZD';
      content = <Trees size={80} {...iconProps} />;
      break;
    case 'death':
      title = 'SMRT';
      content = <Skull size={80} {...iconProps} className="text-black" />;
      break;
    case 'riddle':
      title = 'HÁDANKA';
      content = <HelpCircle size={80} {...iconProps} />;
      break;
    case 'treasure':
      title = 'STUDIUM';
      content = <Scroll size={80} {...iconProps} className="text-yellow-600" />;
      break;
    case 'victory':
      title = 'ÚSPĚCH';
      content = <Sun size={80} {...iconProps} className="text-amber-500 animate-pulse" />;
      break;
    case 'skull':
      title = 'CHYBA';
      content = <Skull size={80} {...iconProps} />;
      break;
    case 'help':
      title = 'POMOC';
      content = <MessageCircle size={80} {...iconProps} />;
      break;
    case 'bug':
      title = 'HMYZ';
      content = <Bug size={80} {...iconProps} />;
      break;
    case 'waterfall':
      title = 'POTOK';
      content = <Waves size={80} {...iconProps} />;
      break;
    case 'footprints':
      title = 'BAHNO';
      content = <Footprints size={80} {...iconProps} />;
      break;
    case 'trees':
      title = 'HUSTÝ LES';
      content = <Trees size={80} {...iconProps} />;
      break;
    case 'statue':
      title = 'SOCHA';
      content = <Mountain size={80} {...iconProps} />;
      break;
    case 'house':
      title = 'CHÝŠE';
      content = <DoorOpen size={80} {...iconProps} />;
      break;
    case 'boss':
      title = 'SKŘET';
      content = <Sword size={80} {...iconProps} />;
      break;
    case 'combat':
      title = 'SOUBOJ';
      content = <Sword size={80} {...iconProps} />;
      break;
    default:
      title = 'PŘÍBĚH';
      content = <Scroll size={80} {...iconProps} />;
  }

  return (
    <div className="w-full h-full bg-[#e8dec0] flex flex-col items-center justify-center relative overflow-hidden p-6">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      <div className="absolute inset-4 border-2 border-[#2c1810]/30 border-dashed rounded-lg"></div>
      <div className="z-10 transform scale-100 transition-transform duration-700 hover:scale-110">{content}</div>
      <div className="mt-6 text-xl font-cinzel tracking-[0.2em] text-[#2c1810] border-t border-b border-[#2c1810] py-2 text-center">
        {title}
      </div>
      {showBossHp && (
        <div className="absolute top-2 right-2 bg-[#8b0000] text-[#e6d5aa] px-3 py-1 rounded font-cinzel font-bold shadow-md">
          Chňapkovo zdraví: {bossHp}/5
        </div>
      )}
    </div>
  );
}
