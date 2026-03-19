export const storyData = {
  // --- KAPITOLA 1: NÁDVOŘÍ AKADEMIE ---
  start: {
    id: 'start',
    title: '1. Slunečné nádvoří',
    text: 'Stojíš na nádvoří Kouzelnické akademie. Normálně by tu byl veselý ruch, ale dnes jsou všichni smutní. Vzácná Hvězdná sova Jiskřička přes noc zmizela ze své klece ve věži! Bez ní bude akademie brzy úplně potmě.\n\nMáš v kapse 5 zlaťáků z kapesného. Rozhodneš se, že ji zachráníš. Než ale vyrazíš přes bránu do Temného hvozdu, měl by ses pořádně připravit.',
    imageSrc: '/images/nadvori.jpg', // TAKHLE VYPADÁ OBRÁZEK PRO SCÉNU
    choices: [
      { text: 'Jít prozkoumat prázdnou klec', target: 'cage', reqOpen: 'cage_searched' },
      { text: 'Promluvit si se spolužákem Kubou', target: 'classmate', reqOpen: 'kuba_helped' },
      { text: 'Jít na hodinu Kouzelných formulí', target: 'spells_class', reqOpen: 'spell_learned' },
      { text: 'Zastavit se v krámku u paní Čarobejlí', target: 'shop' },
      { text: 'Vyrazit k bráně do Temného hvozdu', target: 'forest_gate' },
    ],
  },

  cage: {
    id: 'cage',
    title: '2. Prázdná klec',
    text: 'Dojdeš ke zlaté kleci. Dvířka jsou vypáčená. Když se podíváš blíž, všimneš si, že na mříži visí smradlavý, zelený chomáč chlupů. \n\n"To je jasné," bleskne ti hlavou. "To je srst skřeta Chňapky!" Teď už víš jistě, že musíš do jeho doupěte v Temném hvozdu.',
    imageType: 'alley', // TOHLE MUSÍŠ NAHRADIT KDYŽ TAM CHCEŠ OBRÁZEK
    choices: [{ text: 'Schovat Skřetí chlup a jít zpět', target: 'start', loot: 'Skřetí chlup', closeLoc: 'cage_searched' }],
  },

  classmate: {
    id: 'classmate',
    title: '3. Zoufalý Kuba',
    text: 'Kuba sedí na lavičce, drží se za hlavu a vypadá, že každou chvíli vyletí z kůže. \n\n"Ahoj! Potřebuju pomoct," fňuká. "Pančelka po nás chce seřadit všech 10 slovních druhů, tak jak jdou za sebou. Úplně se mi to pomíchalo a nevím, jak dál! Pomůžeš mi je poskládat správně?"',
    imageSrc: '/images/Kuba.jpg',
    inputType: 'sort',
    options: ['Podstatná jména', 'Přídavná jména', 'Zájmena', 'Číslovky', 'Slovesa', 'Příslovce', 'Předložky', 'Spojky', 'Částice', 'Citoslovce'],
    correctAnswers: ['Podstatná jména', 'Přídavná jména', 'Zájmena', 'Číslovky', 'Slovesa', 'Příslovce', 'Předložky', 'Spojky', 'Částice', 'Citoslovce'],
    successTarget: 'kuba_win',
    failureTarget: 'kuba_fail',
  },

  kuba_win: {
    id: 'kuba_win',
    title: 'Správně!',
    text: '"Jé, ty jsi hlavička! Jasně, teď to dává dokonalý smysl," raduje se Kuba a rychle si to zapisuje brkem. \n\n"Tady máš za odměnu moji Svačinu, mě už díky tobě přešel stres a hlad. Hodně štěstí při hledání Jiskřičky!"',
    imageType: 'victory',
    choices: [{ text: 'Vzít Svačinu a jít na nádvoří', target: 'start', loot: 'Svačina', closeLoc: 'kuba_helped' }],
  },

  kuba_fail: {
    id: 'kuba_fail',
    title: 'To asi ne...',
    text: 'Kuba se zamračí a podívá se do poznámek. "To se mi nějak nezdá... Zkusím se radši zeptat někoho jiného, ale i tak díky." Pomalu odchází pryč. Zklamal jsi ho.',
    imageType: 'skull',
    choices: [{ text: 'Vrátit se na nádvoří', target: 'start', closeLoc: 'kuba_helped' }],
  },

  spells_class: {
    id: 'spells_class',
    title: '4. Třída Kouzelných formulí',
    text: 'Pan učitel Moudroslav si tě přísně měří přes brýle. "Chystáš se do lesa, že? Jako student prvního ročníku udržíš v hlavě jen jedno kouzlo. Dobře si rozmysli, které se naučíš. Můžeš si vybrat jen jedno!"',
    imageSrc: '/images/trida.jpg',
    choices: [
      { text: 'Naučit se: Kouzlo Světlušky (Posvítí ve tmě)', target: 'start', loot: 'Kouzlo Světlušky', closeLoc: 'spell_learned' },
      { text: 'Naučit se: Skákavá žabka (Přeskočí překážku)', target: 'start', loot: 'Skákavá žabka', closeLoc: 'spell_learned' },
      { text: 'Naučit se: Odpuzovač (Odežene havěť)', target: 'start', loot: 'Odpuzovač', closeLoc: 'spell_learned' },
      { text: 'Zatím se nic neučit a jít ven', target: 'start' },
    ],
  },

  shop: {
    id: 'shop',
    title: '5. Krámek paní Čarobejlí',
    text: 'Všude to voní po bylinkách a starém papíru. Paní Čarobejlí se na tebe usměje: "Jdeš hledat Jiskřičku? Mám tu věci, co ti v lese zachrání krk. Ale zadarmo to nebude!"',
    imageSrc: '/images/obchod.jpg',
    choices: [
      { text: 'Koupit Lektvar bublin (Na obranu)', target: 'shop', cost: 3, loot: 'Lektvar bublin' },
      { text: 'Koupit Lektvar zdraví', target: 'shop', cost: 2, loot: 'Lektvar zdraví' },
      { text: 'Koupit Laso z pavučiny', target: 'shop', cost: 2, loot: 'Laso z pavučiny' },
      { text: 'Koupit Kouzelnou baterku', target: 'shop', cost: 2, loot: 'Kouzelná baterka' },
      { text: 'Zkusit vyřešit hádanku pro slevu', target: 'shop_riddle', reqOpen: 'shop_riddle_solved' },
      { text: 'Odejít na nádvoří', target: 'start' },
    ],
  },

  shop_riddle: {
    id: 'shop_riddle',
    title: 'Hádanka paní Čarobejlí',
    text: '"Dobrá, zkusíme tvou češtinu," mrkne paní Čarobejlí. "Přece se nevydáš do hvozdu, aniž bys znal základy jazyka.\n\nOznač všechny TVRDÉ souhlásky. Když vybereš všechny správné (a žádnou špatnou), dostaneš ode mě odměnu!"',
    imageType: 'riddle',
    inputType: 'multiselect',
    options: ['h', 'ch', 'k', 'r', 'd', 't', 'n', 'ž', 'š', 'č', 'ř', 'c', 'j', 'ď', 'ť', 'ň'],
    correctAnswers: ['h', 'ch', 'k', 'r', 'd', 't', 'n'],
    successTarget: 'shop_riddle_win',
    failureTarget: 'shop_riddle_lose',
  },

  shop_riddle_win: {
    id: 'shop_riddle_win',
    title: 'Správně!',
    text: '"Výborně! Tvrdé souhlásky máš v malíčku. Po těchto píšeme vždy tvrdé Y!" Paní Čarobejlí se široce usměje. "Jako slíbenou odměnu ti dám slevu 1 zlaťák na úplně všechno moje zboží!"',
    imageType: 'shop',
    choices: [{ text: 'Zpět k nakupování', target: 'shop', closeLoc: 'shop_riddle_solved' }],
  },

  shop_riddle_lose: {
    id: 'shop_riddle_lose',
    title: 'Chyba',
    text: '"Kdepak, mladý čaroději, máš tam chybu! Tyhle souhlásky si musíš ještě procvičit. Tudy cesta do hlubokého lesa nevede." Usměje se shovívavě paní Čarobejlí.',
    imageType: 'shop',
    choices: [{ text: 'Zpět k nakupování', target: 'shop', closeLoc: 'shop_riddle_solved' }],
  },

  forest_gate: {
    id: 'forest_gate',
    title: '6. Brána do Temného hvozdu',
    text: 'Stojíš před obrovskou tepanou bránou. Za ní už začíná hustý les, kde žijí skřeti, trollové a kdovíco ještě. Cesta zpátky do bezpečí školy už nebude možná. Máš všechno, co potřebuješ?',
    imageSrc: '/images/brana.jpg',
    choices: [
      { text: 'Vstoupit do hvozdu', target: 'ch2_start' },
      { text: 'Ještě se vrátit na nádvoří', target: 'start' },
    ],
  },

  // --- KAPITOLA 2: TEMNÝ HVOZD ---
  ch2_start: {
    id: 'ch2_start',
    title: '7. Rozcestí v Temném hvozdu',
    text: 'Brána za tebou zapadla. Temný hvozd je plný obrovských stromů a podivných zvuků. Dojdeš na rozcestí, kde se cesta dělí na tři různé směry. \n\nVlevo je stezka, na kterou padá obrovská tma. Uprostřed je zarostlý vstup do hustého keřového bludiště. A vpravo slyšíš zurčet divoký potok. Kudy se vydáš?',
    imageSrc: '/images/rozcesti.jpg',
    choices: [
      { text: 'Jít vlevo na Temnou stezku', target: 'path_dark' },
      { text: 'Vstoupit do Keřového bludiště', target: 'path_maze_enter' },
      { text: 'Vydat se vpravo k potoku', target: 'path_river' },
    ],
  },

  // --- CESTA VLEVO: Tma, mouchy a chýše ---
  path_dark: {
    id: 'path_dark',
    title: '8. Temná stezka',
    text: 'Vstoupíš na stezku, ale koruny stromů jsou tu tak husté, že je tu tma jako v pytli. Slyšíš, jak to kolem tebe šustí a houká.',
    imageSrc: '/images/temno.jpg',
    choices: [
      { text: 'Rozsvítit Kouzelnou baterku', target: 'path_dark_bugs', req: 'Kouzelná baterka' },
      { text: 'Zakouzlit: Kouzlo Světlušky', target: 'path_dark_bugs', req: 'Kouzlo Světlušky' },
      { text: 'Zkusit projít potmě', target: 'path_dark_fail', damage: 1 },
    ],
  },

  path_dark_fail: {
    id: 'path_dark_fail',
    title: 'Au, moje hlava!',
    text: 'Jdeš potmě s rukama před sebou, zakopneš o obří kořen a tvrdě se praštíš do hlavy o větev. Tudy to bez světla hodně bolí. (Ztrácíš 1 život)\n\nKlopýtáš dál do tmy...',
    imageType: 'skull',
    choices: [{ text: 'Pokračovat dál', target: 'path_dark_bugs' }],
  },

  path_dark_bugs: {
    id: 'path_dark_bugs',
    title: '9. Mračno much',
    text: 'Konečně je trochu lépe vidět, ale cestu ti zničehonic zablokuje obří mračno otravných, bzučících a kousavých pralesních much! Tyhle potvory jen tak neodejdou.',
    imageSrc: '/images/mouchy.jpg',
    choices: [
      { text: 'Zakouzlit: Odpuzovač', target: 'path_dark_hut' },
      { text: 'Hodit Lektvar bublin a uvěznit je', target: 'path_dark_hut', req: 'Lektvar bublin', removeItem: 'Lektvar bublin' },
      { text: 'Rozběhnout se a proběhnout skrz', target: 'path_dark_bugs_run', damage: 1 },
    ],
  },

  path_dark_bugs_run: {
    id: 'path_dark_bugs_run',
    title: 'Štípance a kousance',
    text: 'Zavřeš oči a naslepo se vrhneš přímo do černého mračna. Bzzzz! Mouchy tě okamžitě obalí a začnou štípat. Oháníš se rukama, ale spoustu bolestivých kousanců jsi utržil. (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Vyklepat mouchy a jít dál', target: 'path_dark_hut' }],
  },

  path_dark_hut: {
    id: 'path_dark_hut',
    title: '10. Opuštěná chýše',
    text: 'Setřeseš ze sebe poslední mouchy a dorazíš k polorozpadlé chýši. Před ní rostou modře světélkující houby. Na dveřích visí cedule: "Ber, co potřebuješ, ale nezdržuj se."',
    imageSrc: '/images/chyse.jpg',
    choices: [
      { text: 'Utrhnout Zářivou houbu', target: 'ch3_entrance', loot: 'Zářivá houba' },
      { text: 'Nechat houby být a rychle odejít', target: 'ch3_entrance' },
    ],
  },

  // --- CESTA UPROSTŘED: Bludiště, trol a socha ---
  path_maze_enter: {
    id: 'path_maze_enter',
    title: '8. Vstup do bludiště',
    text: 'Křoví je tu vysoké a cesty se neustále kroutí. Brzy zjistíš, že jsi úplně ztracený. Cesta se dělí na dvě – z jedné voní sladké fialky, z druhé je cítit mokrá psí srst.',
    imageSrc: '/images/smrad.jpg',
    choices: [
      { text: 'Jít za vůní fialek', target: 'path_maze_flowers', damage: 1 },
      { text: 'Jít tam, kde to smrdí', target: 'path_maze_troll' },
    ],
  },

  path_maze_flowers: {
    id: 'path_maze_flowers',
    title: 'Kýchající keř',
    text: 'Vůně je tak silná, že tě hned rozkýchá. Kýchneš tak nahlas, že probudíš spícího pichlavého netopýra, který se lekne a ošklivě tě kousne do prstu! (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Zděšeně utíkat na druhou cestu', target: 'path_maze_troll' }],
  },

  path_maze_troll: {
    id: 'path_maze_troll',
    title: '9. Kamenný trol',
    text: 'Narazíš na mýtinu. Cestu blokuje obrovský Kamenný trol a zahřmí: \n\n"Pustím tě ven, jen když mi pomůžeš. Měl jsem v košíku 45 kouzelných šišek, ale 12 mi jich sežrala obří veverka. Kolik šišek mi zbylo?"',
    imageSrc: '/images/trol.jpg',
    inputType: 'number',
    correctAnswers: ['33'],
    successTarget: 'path_maze_win',
    failureTarget: 'path_maze_fail',
    failDamage: 1,
  },

  path_maze_win: {
    id: 'path_maze_win',
    title: 'Trol má radost',
    text: '"Třicet tři! Přesně tak! Děkuju ti, malý čaroději," usměje se trol a obrovskou rukou rozhrne křoví, aby ti ukázal správnou cestu ven.',
    imageType: 'victory',
    choices: [{ text: 'Pokračovat dál', target: 'path_maze_statue' }],
  },

  path_maze_fail: {
    id: 'path_maze_fail',
    title: 'Špatně!',
    text: '"To přece vůbec nesedí!" zahučí trol. "Zkus to spočítat znovu!" Z toho obrovského křiku a přemýšlení tě až rozbolela hlava. (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Zkusit to znovu', target: 'path_maze_troll' }],
  },

  path_maze_statue: {
    id: 'path_maze_statue',
    title: '10. Plačící socha',
    text: 'Trol tě pustil dál. Dojdeš na malý palouček, kde stojí kamenná socha víly, které z očí tečou opravdové slzy. "Jsem tu tak sama a nikdo si se mnou nepovídá," fňuká socha.',
    imageSrc: '/images/víla.jpg',
    choices: [
      { text: 'Utěšit sochu milým slovem', target: 'path_maze_statue_kind' },
      { text: 'Ignorovat ji a odejít z bludiště', target: 'ch3_entrance' },
    ],
  },

  path_maze_statue_kind: {
    id: 'path_maze_statue_kind',
    title: 'Úsměv z kamene',
    text: '"Jsi moc hodný," řekne socha a usměje se. "Tady máš něco na cestu, snad ti to pomůže víc než mně." Vykouzlí ti zlaťák.',
    imageType: 'coins',
    choices: [{ text: 'Poděkovat a pokračovat', target: 'ch3_entrance', lootGold: 1, closeLoc: 'statue_helped' }],
  },

  // --- CESTA VPRAVO: Potok, bahno a víla ---
  path_river: {
    id: 'path_river',
    title: '8. Zpívající potok',
    text: 'Dojdeš k divokému potoku. Voda zpívá veselé, ale hodně hlasité písničky. Proud je silný a voda ledová. Most tu žádný není, ale přes potok visí silná větev.',
    imageSrc: '/images/potok.jpg',
    choices: [
      { text: 'Zakouzlit: Skákavá žabka', target: 'path_river_jump', req: 'Skákavá žabka' },
      { text: 'Přehoupnout se na Lasu z pavučiny', target: 'path_river_lasso', req: 'Laso z pavučiny' },
      { text: 'Zkusit přeskočit jen tak bez pomoci', target: 'path_river_fail', damage: 1 },
    ],
  },

  path_river_jump: {
    id: 'path_river_jump',
    title: 'Kvak a hup!',
    text: 'Složíš prsty, zamumláš formulku a tvé nohy dostanou žabí sílu. S ohromným skokem ladně přeletíš na druhý břeh. Suchou nohou!',
    imageType: 'victory',
    choices: [{ text: 'Pokračovat po stezce', target: 'path_river_mud' }],
  },

  path_river_lasso: {
    id: 'path_river_lasso',
    title: 'Jako Tarzan',
    text: 'Roztočíš laso z pavučiny a bezpečně ho zahákneš za větev stromu nad potokem. Zhoupneš se a s lehkostí přistaneš na druhé straně.',
    imageType: 'victory',
    choices: [{ text: 'Pokračovat po stezce', target: 'path_river_mud' }],
  },

  path_river_fail: {
    id: 'path_river_fail',
    title: 'Žbluňk!',
    text: 'Rozeběhneš se... a žbluňk! Noha ti uklouzla a ty jsi zahučel do ledové vody. Vyškrábeš se sice na druhý břeh, ale jsi promoklý na kost a klepeš se zimou. Nastydl jsi. (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Třesoucí se pokračovat', target: 'path_river_mud' }],
  },

  path_river_mud: {
    id: 'path_river_mud',
    title: '9. Zrádné bahno',
    text: 'Po překonání potoka se ocitneš v bažinaté části lesa. Cesta je plná hlubokých kaluží bublajícího, zapáchajícího bahna.',
    imageSrc: '/images/bahno.jpg',
    choices: [
      { text: 'Skákat opatrně po suchých kamenech', target: 'path_river_mud_jump' },
      { text: 'Projít to rovnou středem bláta', target: 'path_river_mud_stuck', damage: 1 },
    ],
  },

  path_river_mud_jump: {
    id: 'path_river_mud_jump',
    title: 'Suché boty',
    text: 'Skáčeš z kamene na kámen jako laň. Bahno nebezpečně bublá, ale ty jsi bezpečně prošel!',
    imageType: 'victory',
    choices: [{ text: 'Pokračovat dál', target: 'path_river_fairy' }],
  },

  path_river_mud_stuck: {
    id: 'path_river_mud_stuck',
    title: 'Uvízl jsi!',
    text: 'Šlápneš rovnou do bahna a zapadneš až po kolena! Kyselé bahno tě bolestivě popálilo. Dostat se ven tě stálo spoustu sil. (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Vyškrábat se a jít dál', target: 'path_river_fairy' }],
  },

  path_river_fairy: {
    id: 'path_river_fairy',
    title: '10. Hladová víla',
    text: 'Cestu ti zatarasí malá, rozzlobená víla. "Tudy nesmíš! Tohle je můj les a já mám strašný hlad. Nedám ti pokoj, dokud mi nedáš něco k snědku!"',
    imageSrc: '/images/víla_nastvana.jpg',
    choices: [
      { text: 'Dát víle Svačinu', target: 'path_river_fairy_feed', req: 'Svačina', removeItem: 'Svačina' },
      { text: 'Zkusit ji odehnat Odpuzovačem', target: 'path_river_fairy_spell', req: 'Odpuzovač' },
      { text: 'Zkusit kolem ní tajně proklouznout', target: 'path_river_fairy_run', damage: 1 },
    ],
  },

  path_river_fairy_feed: {
    id: 'path_river_fairy_feed',
    title: 'Nové přátelství',
    text: 'Víla nadšeně zhltne tvou svačinu. "To bylo famózní! Na oplátku ti dám trochu svého nektaru." Dá ti lahvičku, která funguje stejně jako Lektvar zdraví.',
    imageType: 'treasure',
    choices: [{ text: 'Poděkovat a pokračovat', target: 'ch3_entrance', loot: 'Lektvar zdraví' }],
  },

  path_river_fairy_spell: {
    id: 'path_river_fairy_spell',
    title: 'Víla prchá',
    text: 'Namíříš hůlku a sešleš Odpuzovač. Víla si zacpe nos. "Fůj, co to tu tak páchne?!" vykřikne a uletí pryč do korun stromů. Cesta je volná.',
    imageType: 'victory',
    choices: [{ text: 'Pokračovat k jeskyni', target: 'ch3_entrance' }],
  },

  path_river_fairy_run: {
    id: 'path_river_fairy_run',
    title: 'Žihadlo!',
    text: 'Snažíš se kolem ní proběhnout, ale víla je mrštnější. Než stačíš mrknout, píchne tě ostrým klacíkem a hlasitě se ti vysměje. Rána nepříjemně krvácí. (Ztrácíš 1 život)',
    imageType: 'skull',
    choices: [{ text: 'Utéct dál', target: 'ch3_entrance' }],
  },

  // --- SRAZ U JESKYNĚ ---
  ch3_entrance: {
    id: 'ch3_entrance',
    title: '11. Zlověstná jeskyně',
    text: 'Všechny cesty Temného hvozdu se spojily. Stojíš před obrovskou, ponurou jeskyní. Zevnitř je cítit pach skřetích ponožek a slyšíš slabé zahoukání... Jiskřička! Jsi na správném místě.\n\nVchod ale chrání kouzelná vrata opatřená číselníkem.',
    imageSrc: '/images/vrata na kod.jpg',
    choices: [{ text: 'Zkusit vrata otevřít', target: 'ch3_start' }],
  },

  // --- KAPITOLA 3: PŘED JESKYNÍ (Kouzelná vrata) ---
  ch3_start: {
    id: 'ch3_start',
    title: '12. Zámek skřeta Chňapky',
    text: 'Na těžkých vratech je obrovský kamenný ciferník, který je celý posetý čísly. Nad ním je křivým písmem vyryto:\n\n„Kdo chce vejít dál, musí vědět víc než král. Zadej správný výsledek: 3 x 4 = ?“\n\nPokud se spleteš, zámek tě prý pěkně kousne!',
    imageSrc: '/images/kod.jpg',
    inputType: 'number',
    correctAnswers: ['12'],
    successTarget: 'ch3_door_open',
    failureTarget: 'ch3_door_fail',
    failDamage: 1,
  },

  ch3_door_fail: {
    id: 'ch3_door_fail',
    title: 'Cvak a au!',
    text: 'Zadáš číslo. Zámek vztekle zacvaká, z dírky vyletí malý dřevěný trpaslík na pružině a cvrnkne tě do nosu. Tohle docela bolelo! (Ztrácíš 1 život)\n\n"Zkus to znova!" zachechtá se trpaslík, než zase zaleze dovnitř.',
    imageType: 'skull',
    choices: [{ text: 'Spočítat to radši ještě jednou...', target: 'ch3_start' }],
  },

  ch3_door_open: {
    id: 'ch3_door_open',
    title: '13. Vrata se otevírají',
    text: 'Zadáš dvanáctku. Zámek uspokojeně zachrochtá a těžká vrata se s hlubokým vrzáním odsunou. Cesta do skřetího doupěte je volná. Zevnitř slyšíš skřeta Chňapku, jak nadává, a tlumené pípání Jiskřičky.',
    imageType: 'gate',
    choices: [{ text: 'Opatrně vejít dovnitř', target: 'ch4_boss_intro' }],
  },

  // --- KAPITOLA 4: DOUPĚ A SOUBOJ ---
  ch4_boss_intro: {
    id: 'ch4_boss_intro',
    title: '14. Skřetí doupě',
    text: 'Uvnitř je nepořádek a strašný smrad. Uprostřed místnosti je zlatá klec, ve které se krčí malá, úplně pohaslá sovička Jiskřička. Je tak smutná, že vůbec nesvítí.\n\nKolem klece poskakuje zlý skřet Chňapka. "No tak sviť, ty opeřenej lampionku! Nebo z tebe nadělám polštáře!" vzteká se.\n\nPak se otočí a všimne si tě. "A jéje, vetřelec! Tebe si dám k večeři!" zařve a skočí po tobě. Souboj začíná!',
    imageSrc: '/images/skret.jpg',
    choices: [{ text: 'Připravit se k boji!', target: 'combat_start' }],
  },

  combat_start: {
    id: 'combat_start',
    title: 'Na tahu jsi ty!',
    text: 'Chňapka na tebe cení zuby a švihá kolem sebe sítí. Musíš ho nějak přelstít nebo odehnat, abys mohl otevřít klec.',
    imageType: 'combat',
    choices: [
      { text: 'Použít Kouzlo: Skákavá žabka', target: 'res_jump', req: 'Skákavá žabka' },
      { text: 'Použít Kouzlo: Odpuzovač', target: 'res_repel', req: 'Odpuzovač' },
      { text: 'Hodit po něm Lektvar bublin', target: 'res_bubble', req: 'Lektvar bublin' },
      { text: 'Snažit se ho svázat Lasem', target: 'res_lasso', req: 'Laso z pavučiny' },
      { text: 'Hodit po něm Skřetí chlup (Fuj!)', target: 'res_hair', req: 'Skřetí chlup', removeItem: 'Skřetí chlup' },
      { text: 'Zkusit ho praštit batohem', target: 'res_hit' },
    ],
  },

  // Výsledky akcí hráče
  res_jump: {
    id: 'res_jump',
    title: 'Skok přes skřeta',
    text: 'Seslal jsi žabí kouzlo a s obřím skokem jsi přeskočil Chňapku přímo jemu přes hlavu! Skřet se zamotal do vlastní sítě a praštil sebou o zem.',
    imageType: 'victory',
    combat: { damageBoss: 1 },
    choices: [{ text: 'Chňapka se zvedá...', target: 'combat_boss_turn' }],
  },

  res_repel: {
    id: 'res_repel',
    title: 'Smradlavá obrana',
    text: 'Odpuzovač sice moc nefunguje na velkého skřeta, ale trefil jsi ho přímo do nosu. Chňapka kýchá, až se mu klepou kolena!',
    imageType: 'victory',
    combat: { damageBoss: 1 },
    choices: [{ text: 'Chňapka se zvedá...', target: 'combat_boss_turn' }],
  },

  res_bubble: {
    id: 'res_bubble',
    title: 'Bublinová past',
    text: 'Hodíš lektvar přímo pod skřetovy nohy. BUB! Okolo Chňapky se vytvoří obří duhová bublina a vznese se s ním až ke stropu. Skřet tam bezmocně kope nožičkama.',
    imageType: 'victory',
    combat: { removePotion: 'Lektvar bublin', damageBoss: 2 },
    choices: [{ text: 'Bublina ale praskla!', target: 'combat_boss_turn' }],
  },

  res_lasso: {
    id: 'res_lasso',
    title: 'Přetahovaná',
    text: 'Zahodíš laso a přesně se trefíš. Chňapka je svázaný! Snaží se vykroutit a vzteká se tak, že je rudý až za ušima.',
    imageType: 'victory',
    combat: { damageBoss: 1 },
    choices: [{ text: 'Chňapka se vymotal...', target: 'combat_boss_turn' }],
  },

  res_hair: {
    id: 'res_hair',
    title: 'To je hnus!',
    text: 'Mrskneš po něm jeho vlastní smradlavý chlup z klece. "Ble! Co to je? Vždyť to smrdí hůř než já!" Skřet si znechuceně utírá obličej.',
    imageType: 'victory',
    combat: { damageBoss: 1 },
    choices: [{ text: 'Chňapka se oklepal...', target: 'combat_boss_turn' }],
  },

  res_hit: {
    id: 'res_hit',
    title: 'Těžký batoh',
    text: 'Rozmáchneš se batohem, ale Chňapka je moc rychlý a uhne. Naštěstí mu batoh aspoň vyrazil z ruky prázdný hrnec.',
    imageType: 'skull',
    combat: { damageBoss: 0 },
    choices: [{ text: 'Chňapka je na tahu...', target: 'combat_boss_turn' }],
  },

  // Tah Bosse (Skřeta)
  combat_boss_turn: {
    id: 'combat_boss_turn',
    title: 'Útok Skřeta',
    text: '',
    imageSrc: '/images/utok.jpg',
    combat: { bossAttack: true },
    choices: [{ text: 'Jsi na řadě!', target: 'combat_start' }],
  },

  // Fáze pro poraženého bosse (Když má Chňapka 0 HP)
  boss_defeated: {
    id: 'boss_defeated',
    title: '15. Skřet se vzdává',
    text: 'Chňapka si sedne na zadek a začne nahlas brečet. "Já už nechci hrát! Ty podvádíš! Já chtěl jenom sovu, co by mi svítila, abych se tu nebál tmy. A ona jen pípá a nesvítí. A teď mě tu ještě bijou!"',
    imageSrc: '/images/brek.jpg',
    choices: [
      { text: 'Nechat mu Zářivou houbu, ať se nebojí', target: 'end_good', req: 'Zářivá houba', removeItem: 'Zářivá houba' },
      { text: 'Nechat mu baterku', target: 'end_good', req: 'Kouzelná baterka', removeItem: 'Kouzelná baterka' },
      { text: 'Sebrat Jiskřičku a nechat ho ve tmě', target: 'end_neutral' },
    ],
  },

  end_good: {
    id: 'end_good',
    title: 'KONEC - Skutečný hrdina',
    text: 'Podáš brečícímu skřetovi světlo. Chňapka přestane plakat, nevěřícně si dárek vezme a popotáhne. "T-to je pro mě? Tak já si ji teda nechám..."\n\nKdyž otevřeš klec a Jiskřička vidí, že jsi na zloděje byl vlastně hodný, celá se rozzáří teplým, měkkým světlem. Vznese se ti na rameno. \n\nCesta zpátky do Akademie je díky ní prosluněná a veselá. Stal ses nejen hrdinou, ale dokázal jsi, že laskavost je to největší kouzlo ze všech.',
    imageSrc: '/images/vítězství.jpg',
    choices: [{ text: 'Hrát znovu', target: 'reset' }],
  },

  end_neutral: {
    id: 'end_neutral',
    title: 'KONEC - Zachránce',
    text: 'Zatímco skřet fňuká na zemi, ty rychle otevřeš klec a Jiskřička ti vděčně skočí do náruče. Rychle spolu utečete z temné jeskyně ven. \n\nSkřeta jsi nechal samotného ve tmě, ale akademie bude mít zpět své světlo. Spolužáci i učitelé tě nadšeně přivítali jako zachránce!',
    imageSrc: '/images/spatny_konec.jpg',
    choices: [{ text: 'Hrát znovu', target: 'reset' }],
  },

  game_over: {
    id: 'game_over',
    title: 'Konec hry',
    text: 'Cesta Temným hvozdem byla příliš náročná. Jsi tak vyčerpaný a potlučený, že si musíš lehnout pod strom a usnout. Probudí tě až pan učitel Moudroslav, který tě našel a musel tě přenést zpátky do školy v náručí. Dneska už nikoho nezachráníš...',
    imageType: 'death',
    choices: [{ text: 'Začít úplně znovu', target: 'reset' }],
  },
};
