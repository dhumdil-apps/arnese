import { Injectable } from '@angular/core';

// GLOBAL VARIABLES - READ ONLY
@Injectable()
export class GlobalsService
{
  public home =
  {
    section: 'Arnese',
    desc:
    [
      'obchodná činnosť',
      'predaj nástrojov a náradia',
      'strojárska výroba'
    ]
  };
  public about =
  {
    section: 'O nás',
    title: 'Spoločnosť ARNESE s.r.o.',
    desc: [
      'Vznikla v roku 2009. Hlavnou činnosťou spoločnosti je predaj nástrojov pre vŕtanie, frézovanie, sústruženie, závitovanie, upínacie náradie, ručné náradie, brusivo a meradlá.',
      'Ponúkame komplexné riešenie výroby rezného náradia od návrhu koncepcie, cez výkresovú dokumentáciu, až po jeho výrobu a ostrenie vrátane povlaku.',
      'Ponúkame kusovú a malosériovú výrobu dielcov podľa požiadaviek zákazníka, podľa dodanej výkresovej dokumentácie a taktiež na základe požiadaviek zákazníka.'
    ]
  };
  // TODO: 'Tvrdokovové nástroje'
  public products =
  {
    section: 'Produkty',
    items: [
      {
        'title': 'Nástroje na obrábanie otvorov',
        'desc': '',
        'img': 'url("/assets/img/STIMZET.jpg")',
        'pdfs': [
          'STIMZET-nastroje_na_obrabanie_otvorov'
        ]
      },
      {
        'title': 'Nástroje na rezanie závitov',
        'desc': 'závitníky a závitové kruhové čeľuste',
        'img': 'url("/assets/img/NAREX.png")',
        'pdfs': [
          'NAREX-nastroje_na_rezanie_zavitov',
          'BUCOVICE-nastroje_na_rezanie_zavitov'
        ]
      },
      {
        'title': 'Nástroje na frézovanie',
        'desc': 'frézy',
        'img': 'url("/assets/img/ZPS.png")',
        'pdfs': [
          'ZPS-nastroje_na_frezovanie'
        ]
      },
      {
        'title': 'Upínacie náradie',
        'desc': 'skľúčovadlá, držiaky, upínače, tŕne, púzdra, frézy',
        'img': 'url("/assets/img/TOS_PILANA_DEPRAG.png")',
        'pdfs': [
          'TOS-sklicidla',
          'PILANA-katalog_1_cz',
          'PILANA-katalog_2_cz',
          'PILANA-katalog_3_cz',
          'PILANA-katalog_4_cz',
          'PILSEN-otocne_hroty',
          'DEPRAG-kliestiny',
          'DEPRAG-rychl_hlavy'
        ]
      },
      {
        'title': 'Meradlá',
        'desc': '',
        'img': 'url("/assets/img/ARNESE_1.png")',
        'pdfs': [
          'ARNESE-meradla'
        ]
      },
      {
        'title': 'Ručné náradie',
        'desc': '',
        'img': 'url("/assets/img/ARNESE_2.jpg")',
        'pdfs': [
          'ARNESE-rucne_naradie'
        ]
      },
      {
        'title': 'Brusivo',
        'desc': '',
        'img': 'url("/assets/img/TYROLIT_URDIAMANT.jpg")',
        'pdfs': [
          'TYROLIT-brusivo',
          'URDIAMANT-brusivo'
        ]
      },
      {
        'title': 'Nástroje na sústruženie',
        'desc': '',
        'img': 'url("/assets/img/ARNESE_3.jpg")',
        'pdfs': [
          'ARNESE-sustruh'
        ]
      },
      {
        'title': 'VÝROBA A OSTRENIE REZNÉHO NÁRADIA',
        'desc': 'výroba štandardného a špeciálneho rezného náradia',
        'img': 'url("/assets/img/ARNESE_4.jpg")',
        'pdfs': []
      }
    ]
  }
  public contact =
  {
    section: 'Kontakt',
    title: 'Arnese s.r.o.',
    cards:
    [
      {
        'icon': '/assets/img/portrait.svg',
        'lines': [
          'Pavel Gazdík - konateľ',
          '+421 915 823 595',
          'arnese@arnese.sk'
        ]
      },
      {
        'icon': '/assets/img/location.svg',
        'lines': [
          'Internátna 57',
          '974 04 Banská Bystrica',
          'Slovenská republika'
        ]
      },
      {
        'icon': '/assets/img/card.svg',
        'lines': [
          'IČO: 44 672 926',
          'DIČ: 2022778626',
          'IČ DPH: SK2022778626'
        ]
      }
    ]
  };
}
