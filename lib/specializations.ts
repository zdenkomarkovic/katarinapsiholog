export interface Specialization {
  slug: "deca" | "adolescenti" | "odrasli";
  navLabel: string;
  title: string;
  tagline: string;
  teaser: string;
  imageSeed: string;
  intro: string;
  challenges: { title: string; description: string }[];
  sections: { heading: string; body: string[] }[];
}

export const SPECIALIZATIONS: Specialization[] = [
  {
    slug: "deca",
    navLabel: "Deca",
    title: "Psihoterapija za decu",
    tagline:
      "Podrška detetu kroz razumevanje, igru i razgovor prilagođen uzrastu",
    teaser:
      "Podrška deci u prevazilaženju emocionalnih i razvojnih izazova, kroz pristup prilagođen uzrastu.",
    imageSeed: "katarina-deca",
    intro:
      "Detinjstvo nosi izazove koje deca često ne umeju da imenuju rečima. Kroz strpljiv i pažljiv pristup, pomažem deci da prepoznaju i izraze ono što osećaju, uz punu podršku i uključenost roditelja.",
    challenges: [
      {
        title: "Anksioznost i strahovi",
        description:
          "Prekomerna briga, strahovi koji ometaju svakodnevne aktivnosti ili teškoće u novim situacijama.",
      },
      {
        title: "Teškoće adaptacije",
        description:
          "Prilagođavanje na vrtić, školu ili promene u porodičnom okruženju - razvod, preseljenje, novi član porodice.",
      },
      {
        title: "Emocionalna regulacija",
        description:
          "Česti izlivi besa, plač ili povučenost koja otežava svakodnevno funkcionisanje.",
      },
      {
        title: "Spavanje i svakodnevne navike",
        description:
          "Noćne more, teškoće pri uspavljivanju ili promene u apetitu.",
      },
      {
        title: "Socijalne veštine",
        description:
          "Teškoće u uspostavljanju i održavanju odnosa sa vršnjacima.",
      },
      {
        title: "Gubitak i veće promene",
        description:
          "Podrška detetu u suočavanju sa gubitkom ili značajnim životnim promenama.",
      },
    ],
    sections: [
      {
        heading: "Kako izgleda rad sa detetom",
        body: [
          "Rad sa decom kombinuje razgovor, kreativne tehnike i igru prilagođenu uzrastu - na način koji detetu omogućava da se izrazi bez pritiska da odmah govori o onome što ga muči.",
          "Tempo se prilagođava detetu: prvo se gradi poverenje i osećaj sigurnosti, a tek potom se postepeno prelazi na teme koje su izazvale potrebu za podrškom.",
        ],
      },
      {
        heading: "Uloga roditelja",
        body: [
          "Roditelji su aktivni partneri u procesu - kroz redovne razgovore razmenjujemo zapažanja o napretku i dogovaramo se oko koraka koji mogu pomoći kod kuće.",
          "Po potrebi, deo rada uključuje i savetodavne razgovore sa roditeljima, kao i saradnju sa vrtićem ili školom.",
        ],
      },
    ],
  },
  {
    slug: "adolescenti",
    navLabel: "Adolescenti",
    title: "Psihoterapija za adolescente",
    tagline: "Prostor za razumevanje sebe, bez osude i pritiska",
    teaser:
      "Rad sa mladima na temama identiteta, samopouzdanja i odnosa sa vršnjacima i porodicom.",
    imageSeed: "katarina-adolescenti",
    intro:
      "Adolescencija donosi intenzivne promene - u identitetu, odnosima i pogledu na sebe i svet. Individualni razgovor pruža siguran prostor da se te promene istraže i lakše prevaziđu.",
    challenges: [
      {
        title: "Anksioznost i stres",
        description:
          "Pritisak škole, ispita i očekivanja koji prevazilaze uobičajene granice.",
      },
      {
        title: "Samopouzdanje i slika o sebi",
        description:
          "Nesigurnost, poređenje sa drugima i uticaj društvenih mreža na sliku o sebi.",
      },
      {
        title: "Odnosi sa vršnjacima",
        description:
          "Konflikti, osećaj isključenosti iz grupe ili teškoće u prijateljstvima.",
      },
      {
        title: "Odnosi sa roditeljima",
        description:
          "Sukobi oko granica, samostalnosti i međusobnog razumevanja.",
      },
      {
        title: "Promene raspoloženja",
        description:
          "Nagle promene raspoloženja, povučenost ili gubitak interesovanja za aktivnosti.",
      },
      {
        title: "Identitet i budućnost",
        description:
          "Pitanja o sopstvenom identitetu, izborima i planovima za dalje školovanje ili karijeru.",
      },
    ],
    sections: [
      {
        heading: "Individualni pristup uz poverenje",
        body: [
          "Rad sa adolescentima je pretežno individualan - mladoj osobi je potreban prostor da govori slobodno, bez osećaja da će biti osuđena ili ispravljana.",
          "Poverenje se gradi postepeno, uz punu pažnju na tempo i granice koje adolescent postavlja.",
        ],
      },
      {
        heading: "Poverljivost i uključenost porodice",
        body: [
          "Poverljivost je osnovni princip rada sa adolescentima, uz jasno dogovorene granice o tome šta se i kada deli sa roditeljima.",
          "Porodica se uključuje u proces samo kada je to od koristi i uz saglasnost adolescenta, u skladu sa profesionalnim i etičkim standardima.",
        ],
      },
    ],
  },
  {
    slug: "odrasli",
    navLabel: "Odrasli",
    title: "Psihoterapija za odrasle",
    tagline:
      "Prostor za razumevanje sebe i promenu obrazaca koji više ne služe",
    teaser:
      "Individualna psihoterapija za odrasle usmerena na anksioznost, stres, odnose i lični razvoj.",
    imageSeed: "katarina-odrasli",
    intro:
      "Odraslo doba nosi svoje izazove - od svakodnevnog stresa do dubljih pitanja o odnosima, identitetu i smislu. Kroz kognitivno-bihejvioralni i porodični pristup, radimo zajedno na jasnijem razumevanju i konkretnim koracima ka promeni.",
    challenges: [
      {
        title: "Anksioznost i stres",
        description:
          "Dugotrajna napetost, briga ili osećaj preplavljenosti svakodnevnim obavezama.",
      },
      {
        title: "Sagorevanje (burnout)",
        description:
          "Iscrpljenost na poslu ili u privatnom životu, gubitak motivacije i energije.",
      },
      {
        title: "Odnosi",
        description:
          "Teškoće u partnerskim, porodičnim ili prijateljskim odnosima.",
      },
      {
        title: "Samopouzdanje",
        description:
          "Niska slika o sebi, samokritičnost ili osećaj lične nedovoljnosti.",
      },
      {
        title: "Životne tranzicije",
        description:
          "Promene poput novog posla, roditeljstva, gubitka ili preseljenja.",
      },
      {
        title: "Porodična dinamika",
        description:
          "Obrasci komunikacije i konflikti koji se ponavljaju kroz generacije.",
      },
    ],
    sections: [
      {
        heading: "Kognitivno-bihejvioralni pristup u praksi",
        body: [
          "Rad se zasniva na prepoznavanju obrazaca mišljenja koji utiču na osećanja i ponašanje, uz konkretne tehnike koje se mogu primeniti van seanse.",
          "Fokus je na merljivom napretku - jasnim ciljevima koji se zajednički postavljaju i redovno preispituju.",
        ],
      },
      {
        heading: "Individualna i porodična terapija",
        body: [
          "U zavisnosti od potrebe, rad može biti isključivo individualan ili uključivati partnera ili druge članove porodice.",
          "Porodični pristup pomaže da se bolje razumeju uloge i obrasci koji oblikuju odnose unutar porodičnog sistema.",
        ],
      },
    ],
  },
];

export function getSpecialization(slug: string): Specialization | undefined {
  return SPECIALIZATIONS.find((s) => s.slug === slug);
}
