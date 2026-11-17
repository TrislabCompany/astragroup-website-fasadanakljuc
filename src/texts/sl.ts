// The texts of the site's own pages in Slovenian (src/texts/index.ts). No
// prices, warranties, response times or references (docs/brief.md): a fact a
// reader could check needs a source, and is left out without one. The subsidy
// facts come from the call's consolidated text (src/lib/sources.ts), checked
// on the date given there.
import type { PageTexts } from "./index";

const steps = {
  visit: {
    title: "Ogled in meritve",
    text: "Fasado si ogledamo od blizu: podlago, omet, razpoke, vlago ob podzidku, okenske police in špalete. Izmerimo površino in zapišemo, kar vpliva na izbiro sistema.",
    owner: "Pokažete nam hišo in poveste, kaj vas moti in kaj želite. Če nameravate oddati vlogo za subvencijo, to povejte že zdaj.",
  },
  offer: {
    title: "Pisna ponudba",
    text: "Pripravimo ponudbo s popisom vseh del in materialov: fasadni sistem, vrsto in debelino izolacije, zaključni sloj, gradbeni oder in detajle.",
    owner: "Ponudbo preberete, jo primerjate in vprašate, kar ni jasno. Ko se odločite, se dogovorimo za termin.",
  },
  preparation: {
    title: "Priprava: oder, podlaga in popravila",
    text: "Postavimo gradbeni oder in zaščitimo okna, tla in okolico. Odstranimo dotrajan omet, popravimo razpoke in poravnamo podlago, da se izolacija dobro prime.",
    owner: "Poskrbite za dostop okoli hiše in umaknete, kar stoji ob fasadi: posode, kolesa, vrtno pohištvo.",
  },
  insulation: {
    title: "Izolacija in armiranje",
    text: "Izolacijske plošče lepimo in sidramo na steno, izoliramo podzidek in obdelamo špalete. Čez izolacijo nanesemo armirni sloj z mrežico, ki prepreči razpoke.",
    owner: "Ta del ne zahteva vaših odločitev. Če uveljavljate subvencijo, med delom fotografirajte debelino nove izolacije ob merilnem traku.",
  },
  finish: {
    title: "Zaključni sloj in barva",
    text: "Ko je armirni sloj suh, nanesemo zaključni omet v izbrani strukturi in barvi ter vgradimo okenske police in zaključne letve.",
    owner: "Izberete barvo in strukturo ometa na vzorcih. Če vaša občina predpisuje barve fasad, jih preverimo skupaj.",
  },
  handover: {
    title: "Prevzem in dokumentacija",
    text: "Fasado skupaj pregledamo, podremo oder in pospravimo okolico. Predamo račun s popisom del in podatki o vgrajeni izolaciji.",
    owner: "Fasado prevzamete. Za vlogo za subvencijo fotografirate vse strani hiše in vlogo oddate po izvedbi.",
  },
};

const sl: PageTexts = {
  home: {
    intro: {
      eyebrow: "Fasade na Obali in Krasu",
      title: "Fasada na ključ, od ogleda do prevzema",
      lead: "Prenovimo fasado stare hiše ali izdelamo fasado na novogradnji. Tu preberete, kako poteka, korak za korakom, nato pa pošljete povpraševanje.",
      description:
        "Prenova fasade in nova fasada na ključ na Obali in Krasu: kako poteka od ogleda do prevzema, vrste fasad in subvencija Eko sklada. Pošljite povpraševanje.",
    },
    pathsHeading: "Kaj gradite?",
    stepsHeading: "Kako poteka",
    stepsLead: "Od ogleda do prevzema fasade v šestih korakih. Vsak korak je podrobneje opisan na strani o prenovi in na strani o novi fasadi.",
    steps: [steps.visit, steps.offer, steps.preparation, steps.insulation, steps.finish, steps.handover],
    systemsHeading: "Vrste fasad",
    systemsLead: "Katero fasado izbrati, je odvisno od stavbe, njene starosti in videza, ki ga želite.",
    subsidyHeading: "Subvencija za toplotno izolacijo fasade",
    subsidyText:
      "Eko sklad dodeli nepovratno spodbudo za toplotno izolacijo fasade starejše eno- ali dvostanovanjske hiše. Vlogo oddate, ko so dela končana.",
  },
  paths: {
    renovation: {
      title: "Prenova fasade",
      text: "Hiša že stoji. Fasada je dotrajana, razpokana ali brez izolacije in pozimi skozi stene uhaja toplota.",
    },
    newFacade: {
      title: "Nova fasada na ključ",
      text: "Gradite novo hišo in želite, da za celotno fasado, od načrta do prevzema, poskrbi ena ekipa.",
    },
  },
  quoteCta: {
    heading: "Pošljite povpraševanje",
    text: "Povpraševanje vas ne zavezuje. Tako poteka:",
    next: [
      "Preberemo, kaj potrebujete, in se vam oglasimo.",
      "Dogovorimo se za ogled in meritve.",
      "Po ogledu prejmete pisno ponudbo s popisom del.",
    ],
  },
  renovation: {
    intro: {
      eyebrow: "Prenova fasade",
      title: "Prenova fasade, korak za korakom",
      lead: "Prenova fasade hišo zaščiti, ji vrne videz in, če dodamo izolacijo, zmanjša izgube toplote skozi stene. Tako poteka od ogleda do prevzema.",
      description:
        "Kdaj je čas za prenovo fasade, kako poteka od ogleda do prevzema in kaj naredite vi pri vsakem koraku. Subvencija Eko sklada in povpraševanje.",
    },
    when: {
      heading: "Kdaj je čas za prenovo",
      items: [
        "Omet je razpokan, se lušči ali odpada.",
        "Ob podzidku se pojavlja vlaga ali plesen.",
        "Stene so brez toplotne izolacije in pozimi so hladne na otip.",
        "Barva je zbledela ali umazana in je čiščenje ne povrne.",
        "Menjate okna in želite hkrati urediti špalete in police.",
      ],
      paragraphs: [
        "Ni vsaka prenova enaka. Včasih zadošča popravilo ometa in nov zaključni sloj, drugič je smiselna celotna toplotna izolacija. Ob ogledu povemo, kaj predlagamo in zakaj.",
      ],
    },
    stepsHeading: "Kako poteka prenova",
    steps: [steps.visit, steps.offer, steps.preparation, steps.insulation, steps.finish, steps.handover],
    includedHeading: "Kaj je vključeno v prenovo",
    included: [
      "Ogled, meritve in pisna ponudba s popisom del",
      "Gradbeni oder in zaščita oken, tal in okolice",
      "Odstranitev dotrajanega ometa in popravila podlage",
      "Toplotna izolacija sten in podzidka",
      "Obdelava špalet ter nove okenske police",
      "Armirni sloj z mrežico in zaključni omet v izbrani barvi",
      "Odvoz odpadkov in čiščenje okolice",
      "Račun s popisom del in podatki o vgrajeni izolaciji",
    ],
    subsidy: {
      heading: "Subvencija Eko sklada",
      paragraphs: [
        "Za toplotno izolacijo fasade starejše eno- ali dvostanovanjske hiše lahko dobite nepovratno spodbudo Eko sklada. Vlogo oddate po izvedbi, zato se o subvenciji pozanimajte, preden se dela začnejo.",
      ],
    },
  },
  newFacade: {
    intro: {
      eyebrow: "Nova fasada na ključ",
      title: "Nova fasada na ključ, od načrta do prevzema",
      lead: "Na novi hiši je fasada eno zadnjih del. Da se ujame z okni, streho in instalacijami, jo načrtujemo skupaj z gradnjo.",
      description:
        "Fasada na ključ na novi hiši: kako poteka od načrta do prevzema, kaj je vključeno in kaj ne. Pošljite povpraševanje za ponudbo.",
    },
    meaning: {
      heading: "Kaj pomeni »na ključ«",
      paragraphs: [
        "Na ključ pomeni, da za celotno fasado poskrbi ena ekipa: od pregleda načrtov in izbire sistema do zadnje okenske police in odvoza odpadkov. Vi se dogovarjate z enim izvajalcem in imate eno ponudbo s popisom vseh del.",
        "Kaj natančno je vključeno, je zapisano v ponudbi. Spodaj je običajni obseg in tisto, kar ni del fasade.",
      ],
    },
    stepsHeading: "Kako poteka nova fasada",
    steps: [
      {
        title: "Načrt in izbira sistema",
        text: "Pregledamo načrte hiše: sestavo sten, debelino izolacije, ki jo predvideva projekt, in detajle ob oknih, strehi in podzidku.",
        owner: "Pošljete nam načrte ali nam jih pokažete. Poveste, kakšen videz fasade želite.",
      },
      {
        title: "Ponudba in termin",
        text: "Pripravimo ponudbo s popisom del in se dogovorimo za termin, ko bodo okna vgrajena, streha pokrita in instalacije v stenah končane.",
        owner: "Ponudbo potrdite in nam sporočite, kako napreduje gradnja.",
      },
      {
        title: "Priprava",
        text: "Postavimo gradbeni oder, zaščitimo okna in preverimo, ali je podlaga ravna in suha.",
        owner: "Poskrbite za dostop okoli hiše in elektriko na gradbišču.",
      },
      steps.insulation,
      steps.finish,
      {
        title: "Prevzem",
        text: "Fasado skupaj pregledamo, podremo oder in pospravimo gradbišče. Predamo račun s popisom del in izjave o lastnostih vgrajenih materialov.",
        owner: "Fasado prevzamete in dokumente shranite skupaj z dokumentacijo hiše.",
      },
    ],
    includedHeading: "Kaj je vključeno",
    included: [
      "Pregled načrtov in svetovanje pri izbiri sistema",
      "Pisna ponudba s popisom del in materialov",
      "Gradbeni oder in zaščita oken",
      "Toplotna izolacija sten in podzidka",
      "Obdelava špalet in okenske police",
      "Armirni sloj in zaključni omet v izbrani barvi",
      "Odvoz odpadkov in čiščenje gradbišča",
      "Račun s popisom del in izjave o lastnostih materialov",
    ],
    excludedHeading: "Kaj ni vključeno",
    excludedLead: "Teh del fasada na ključ ne vključuje, razen če se v ponudbi dogovorimo drugače:",
    excluded: [
      "projektna dokumentacija in dovoljenja za gradnjo",
      "okna, vrata in senčila",
      "streha, žlebovi in obrobe",
      "električne in druge instalacije v stenah",
      "zunanja ureditev: tlakovanje, ograje in zasaditev",
    ],
  },
  systems: {
    intro: {
      eyebrow: "Vrste fasad",
      title: "Vrste fasad: katero izbrati",
      lead: "Kontaktna, prezračevana ali obnova stare fasade: v čem se razlikujejo, za katere stavbe so primerne in kako jih vzdržujete.",
      description:
        "Kontaktna (ETICS) fasada, prezračevana fasada in obnova stare fasade: sestava, uporaba, videz in vzdrževanje v primerjavi.",
    },
    layersLabel: "Sestava, od stene navzven",
    tableHeading: "Primerjava",
    tableCaption: "Tri vrste fasad po uporabi, videzu in vzdrževanju",
    columns: { system: "Vrsta fasade", use: "Za katere stavbe", look: "Videz", care: "Vzdrževanje" },
    items: [
      {
        id: "kontaktna",
        name: "Kontaktna fasada (ETICS)",
        summary:
          "Najpogostejša fasada na hišah. Izolacijske plošče so prilepljene in pritrjene neposredno na steno, čez njih pa sta armirni sloj in tanek zaključni omet.",
        layers: ["lepilo", "toplotna izolacija: stiropor (EPS) ali kamena volna", "sidra", "armirni sloj z mrežico", "zaključni omet"],
        use: "Novogradnje in prenove hiš, kjer stene dobijo toplotno izolacijo.",
        look: "Gladek ali strukturiran omet v izbrani barvi.",
        care: "Občasno pregled in čiščenje; barva se z leti obnovi s fasadnim premazom.",
      },
      {
        id: "prezracevana",
        name: "Prezračevana fasada",
        summary:
          "Izolacija je pritrjena na steno, pred njo je zračni sloj, na zunanji strani pa obloga na podkonstrukciji. Zrak za oblogo odvaja vlago iz stene.",
        layers: ["podkonstrukcija", "toplotna izolacija iz kamene volne", "zračni sloj", "obloga: plošče, les, kamen ali kovina"],
        use: "Stavbe, kjer želite oblogo namesto ometa, in stene, ki morajo dobro sušiti.",
        look: "Plošče, letve ali kamen; vidni stiki in sodoben videz.",
        care: "Obloga ne potrebuje barvanja; poškodovano ploščo je mogoče zamenjati posamezno.",
      },
      {
        id: "obnova-stare-fasade",
        name: "Obnova stare fasade",
        summary:
          "Starejše in kamnite hiše pogosto ne dobijo izolacije na zunanji strani. Obnovimo omet z materiali, ki se ujemajo s staro steno in ji pustijo dihati.",
        layers: ["popravljena podlaga", "omet na apneni osnovi", "paroprepusten zaključni sloj ali premaz"],
        use: "Stare hiše, kamnite stene in stavbe, katerih videz želite ohraniti.",
        look: "Videz izvirne fasade: ometi, profili in kamen ostanejo.",
        care: "Paroprepusten premaz se občasno obnovi; razpoke se popravijo sproti.",
      },
    ],
    choosing: {
      heading: "Kako izbrati",
      items: [
        "Pri novi hiši sistem in debelino izolacije predvideva projekt.",
        "Pri prenovi odločajo stanje stene, njena sestava in vlaga.",
        "Če je hiša kulturna dediščina ali stoji v varovanem območju, se o pogojih za obnovo pozanimajte, preden izberete sistem.",
        "Občinski prostorski načrt lahko določa barve in materiale fasad.",
      ],
      paragraphs: ["Ob ogledu predlagamo sistem, ki ustreza vaši hiši, in razložimo, zakaj."],
    },
  },
  subsidy: {
    intro: {
      eyebrow: "Subvencije",
      title: "Subvencija Eko sklada za toplotno izolacijo fasade",
      lead: "Eko sklad z javnim pozivom 126SUB-OB26 dodeljuje nepovratne spodbude občanom tudi za toplotno izolacijo fasade. Tu je povzetek; veljajo pogoji v besedilu poziva.",
      description:
        "Subvencija Eko sklada za toplotno izolacijo fasade (javni poziv 126SUB-OB26): katere hiše so upravičene, koliko znaša, kdaj oddate vlogo in katera dokazila potrebujete.",
    },
    what: {
      heading: "Za kaj",
      paragraphs: [
        "Ukrep F javnega poziva je toplotna izolacija fasade starejše eno- ali dvostanovanjske stavbe. Spodbuda se dodeli za nakup in vgradnjo fasadnega sistema s toplotno izolacijo.",
        "Priznani stroški vključujejo med drugim celoten fasadni sistem z izolacijo, izolacijo podzidka, gradbeni oder, odstranitev ali izravnavo starega ometa, obdelavo špalet ter nakup in vgradnjo okenskih polic.",
      ],
    },
    who: {
      heading: "Katere hiše",
      items: [
        "Starejša eno- ali dvostanovanjska stavba: gradbeno dovoljenje je bilo izdano pred 1. 7. 2010 ali je bila stavba zgrajena pred tem datumom in pozneje legalizirana.",
        "Naložba je nova: izvedena od 1. 3. 2026 dalje, na legalno zgrajeni stavbi.",
        "Vlogo odda fizična oseba, ki je investitor: lastnik, solastnik, ožji družinski član lastnika, imetnik stavbne pravice ali najemnik.",
      ],
    },
    howMuch: {
      heading: "Koliko",
      paragraphs: [
        "Spodbuda znaša do 40 % priznanih stroškov naložbe, vendar ne več kot 35 EUR na m² toplotne izolacije fasade.",
        "Nova izolacija mora dosegati razmerje med toplotno prevodnostjo in debelino λ/d ≤ 0,200 W/(m²K). Eko sklad za izračun potrebne debeline objavlja kalkulator ob pozivu.",
      ],
    },
    order: {
      heading: "Vrstni red",
      steps: [
        {
          title: "Pred deli",
          text: "Preberite veljavni poziv in preverite, ali je vaša hiša upravičena.",
          owner: "Izvajalcu povejte, da boste oddali vlogo, da bodo na računu podatki, ki jih poziv zahteva.",
        },
        {
          title: "Med deli",
          text: "Med vgradnjo fotografirajte novo izolacijo ob merilnem traku, da se vidita vrsta in debelina.",
          owner: "Fotografije shranite za vlogo.",
        },
        {
          title: "Po delih",
          text: "Ko je fasada končana in račun plačan, fotografirajte vse strani hiše in oddajte vlogo.",
          owner: "Vlogo oddate na portalu eUprava; pri tem vam lahko pomagajo svetovalci ENSVET.",
        },
      ],
    },
    documents: {
      heading: "Dokazila za ukrep F",
      items: [
        "račun za izvedbo fasadnega sistema s popisom del ter vrsto, debelino, toplotno prevodnostjo (λ) in površino vgrajene izolacije",
        "dokazilo o plačilu celotnega računa ali pogodba o financiranju, če plačujete na obroke",
        "izjava o lastnostih izolacije, če toplotna prevodnost ni navedena na računu",
        "fotografija nove izolacije ob merilnem traku, posneta med deli",
        "fotografije vseh strani stavbe po izvedbi zaključnega sloja",
      ],
      paragraphs: ["Celoten seznam dokazil in vse pogoje določa besedilo poziva."],
    },
    help: {
      heading: "Kdo pomaga pri vlogi",
      paragraphs: [
        "Vlogo oddate sami, v elektronski obliki na portalu eUprava. Pri oddaji vam lahko pomagajo energetski svetovalci v pisarnah ENSVET ali svetovalci Eko sklada.",
        "Mi poskrbimo, da račun in podatki o vgrajeni izolaciji vsebujejo, kar poziv zahteva.",
      ],
    },
    checkedLabel: "Povzetek je preverjen v besedilu poziva",
  },
  quote: {
    intro: {
      eyebrow: "Povpraševanje",
      title: "Povpraševanje za fasado",
      lead: "Štirje kratki koraki. Odgovorite, kar veste; kar ne veste, izmerimo in preverimo ob ogledu.",
      description: "Pošljite povpraševanje za prenovo fasade ali novo fasado na ključ: štirje kratki koraki, povpraševanje vas ne zavezuje.",
    },
    stepLabel: "Korak",
    case: {
      legend: "Kaj potrebujete?",
      choices: [
        { value: "prenova", label: "Prenovo fasade obstoječe hiše" },
        { value: "nova-fasada", label: "Fasado na novi hiši" },
        { value: "ne-vem", label: "Še ne vem" },
      ],
    },
    building: {
      legend: "Hiša",
      houseType: "Vrsta hiše",
      houseTypes: [
        { value: "enostanovanjska", label: "Enostanovanjska hiša" },
        { value: "dvostanovanjska", label: "Dvostanovanjska hiša" },
        { value: "vrstna", label: "Vrstna ali dvojna hiša" },
        { value: "drugo", label: "Drugo" },
      ],
      age: "Kdaj je bila hiša zgrajena?",
      ages: [
        { value: "pred-1980", label: "Pred letom 1980" },
        { value: "1980-2010", label: "Od 1980 do sredine 2010" },
        { value: "po-2010", label: "Po sredini 2010" },
        { value: "v-gradnji", label: "Še se gradi" },
        { value: "ne-vem", label: "Ne vem" },
      ],
      area: "Približna površina fasade v m²",
      areaHint: "Če ne veste, pustite prazno; izmerimo jo ob ogledu.",
      municipality: "Občina, kjer stoji hiša",
    },
    wish: {
      legend: "Kaj želite",
      work: "Vrsta del",
      works: [
        { value: "izolacija", label: "Toplotna izolacija in nov omet" },
        { value: "omet-barva", label: "Samo popravilo ometa in barva" },
        { value: "prezracevana", label: "Prezračevana fasada" },
        { value: "ne-vem", label: "Še ne vem" },
      ],
      timeframe: "Kdaj želite, da so dela končana?",
      timeframes: [
        { value: "3-mesece", label: "V treh mesecih" },
        { value: "letos", label: "Letos" },
        { value: "naslednje-leto", label: "Naslednje leto" },
        { value: "ne-vem", label: "Še ne vem" },
      ],
      subsidy: "Ali nameravate oddati vlogo za subvencijo Eko sklada?",
      subsidyChoices: [
        { value: "da", label: "Da" },
        { value: "ne", label: "Ne" },
        { value: "ne-vem", label: "Še ne vem" },
      ],
      message: "Sporočilo",
      messageHint: "Karkoli, kar nam pomaga: stanje fasade, okna, dostop do hiše.",
    },
    contact: {
      legend: "Kako vas dosežemo",
      name: "Ime in priimek",
      phone: "Telefon",
      email: "E-pošta",
      reachHint: "Vpišite telefon, e-pošto ali oboje.",
      consentBefore: "Strinjam se, da podatke iz povpraševanja uporabite za odgovor in ponudbo, kot opisuje ",
      consentLink: "politika zasebnosti",
      consentAfter: ".",
    },
    optional: "neobvezno",
    choose: "Izberite",
    submit: "Pošlji povpraševanje",
    notConnected:
      "Pošiljanje obrazca še ni vključeno. Stran je v pripravi; obrazec bo deloval ob javni objavi.",
    nextHeading: "Kaj se zgodi potem",
    next: [
      "Preberemo povpraševanje in se vam oglasimo.",
      "Dogovorimo se za ogled in meritve.",
      "Po ogledu prejmete pisno ponudbo s popisom del.",
    ],
    helpsHeading: "Kaj nam pomaga",
    helps: [
      "fotografije fasade z vseh strani, od daleč in od blizu",
      "fotografije razpok, vlage ali poškodb",
      "pri novi hiši: načrti s sestavo sten",
    ],
  },
  thanks: {
    intro: {
      eyebrow: "Povpraševanje",
      title: "Hvala, povpraševanje je poslano",
      lead: "Prejeli smo vaše povpraševanje.",
      description: "Povpraševanje je poslano.",
    },
    next: [
      "Preberemo povpraševanje in se vam oglasimo.",
      "Dogovorimo se za ogled in meritve.",
      "Po ogledu prejmete pisno ponudbo s popisom del.",
    ],
  },
  failed: {
    intro: {
      eyebrow: "Povpraševanje",
      title: "Povpraševanja ni bilo mogoče poslati",
      lead: "Pri pošiljanju je šlo nekaj narobe in povpraševanje ni prišlo do nas.",
      description: "Povpraševanja ni bilo mogoče poslati.",
    },
    text: "Vrnite se na obrazec in ga pošljite znova. Podatki, ki ste jih vpisali, morda niso ohranjeni.",
  },
};

export default sl;
